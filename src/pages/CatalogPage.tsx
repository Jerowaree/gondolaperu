import { useState, useMemo, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link, useSearchParams } from 'react-router-dom'
import {
  Search,
  X,
  Package,
  Wrench,
  LayoutGrid,
  ArrowUpDown,
  ChevronRight,
  type LucideIcon,
} from 'lucide-react'
import { MainLayout } from '@/components/layout/MainLayout'
import { Container } from '@/components/ui/Container'
import { SearchInput } from '@/components/ui/SearchInput'
import { ProductGrid } from '@/components/ui/ProductGrid'
import { getCategories, getCategoryById } from '@/lib/categories'
import { filterProducts, getProducts } from '@/lib/products'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import type { CommercialLine } from '@/types/category'

type SortOption = 'destacados' | 'nombre-az' | 'nombre-za'

const LINE_META: Record<
  'todas' | CommercialLine,
  { label: string; icon: LucideIcon; countKey: 'todas' | CommercialLine }
> = {
  todas: { label: 'Todas las líneas', icon: LayoutGrid, countKey: 'todas' },
  automotriz: { label: 'Línea Automotriz', icon: Package, countKey: 'automotriz' },
  construccion: { label: 'Línea Construcción', icon: Wrench, countKey: 'construccion' },
}

export default function CatalogPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const initialLineParam = searchParams.get('linea') as CommercialLine | null

  const [searchQuery, setSearchQuery] = useState('')
  const [selectedLine, setSelectedLine] = useState<'todas' | CommercialLine>(
    initialLineParam === 'automotriz' || initialLineParam === 'construccion' ? initialLineParam : 'todas',
  )
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>('')
  const [sortBy, setSortBy] = useState<SortOption>('destacados')

  // Sincronizar si cambia el param de URL
  useEffect(() => {
    const lineParam = searchParams.get('linea') as CommercialLine | null
    if (lineParam === 'automotriz' || lineParam === 'construccion') {
      setSelectedLine(lineParam)
    }
  }, [searchParams])

  const allCategories = getCategories()
  const allProducts = getProducts()

  const lineCounts = useMemo(
    () => ({
      todas: allProducts.length,
      automotriz: allProducts.filter((p) => p.line === 'automotriz').length,
      construccion: allProducts.filter((p) => p.line === 'construccion').length,
    }),
    [allProducts],
  )

  const categoryCounts = useMemo(() => {
    const map = new Map<string, number>()
    for (const p of allProducts) {
      map.set(p.categoryId, (map.get(p.categoryId) ?? 0) + 1)
    }
    return map
  }, [allProducts])

  // Categorías visibles según línea seleccionada
  const visibleCategories = useMemo(() => {
    if (selectedLine === 'todas') return allCategories
    return allCategories.filter((c) => c.line === selectedLine)
  }, [selectedLine, allCategories])

  // Filtrar + ordenar productos
  const filteredProducts = useMemo(() => {
    const filtered = filterProducts({
      line: selectedLine === 'todas' ? undefined : selectedLine,
      categoryId: selectedCategoryId || undefined,
      query: searchQuery || undefined,
    })

    return [...filtered].sort((a, b) => {
      if (sortBy === 'nombre-az') return a.name.localeCompare(b.name, 'es')
      if (sortBy === 'nombre-za') return b.name.localeCompare(a.name, 'es')
      if (a.featured !== b.featured) return a.featured ? -1 : 1
      return a.name.localeCompare(b.name, 'es')
    })
  }, [selectedLine, selectedCategoryId, searchQuery, sortBy])

  const selectedCategory = selectedCategoryId ? getCategoryById(selectedCategoryId) : null

  const handleSelectLine = (line: 'todas' | CommercialLine) => {
    setSelectedLine(line)
    setSelectedCategoryId('')
    if (line === 'todas') {
      searchParams.delete('linea')
    } else {
      searchParams.set('linea', line)
    }
    setSearchParams(searchParams)
  }

  const handleResetFilters = () => {
    setSearchQuery('')
    setSelectedLine('todas')
    setSelectedCategoryId('')
    setSortBy('destacados')
    setSearchParams({})
  }

  const hasActiveFilters =
    searchQuery.trim() !== '' || selectedLine !== 'todas' || selectedCategoryId !== ''

  return (
    <MainLayout>
      <Helmet>
        <title>Catálogo de Repuestos y Materiales — {siteConfig.name}</title>
        <meta
          name="description"
          content="Explora el catálogo de repuestos automotrices, partes mecánicas, accesorios y materiales de construcción de GÓNDOLA PERÚ en Piura."
        />
      </Helmet>

      {/* ── Hero del catálogo ─────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#003865] text-white">
        {/* Imagen de fondo */}
        <img
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&h=640&fit=crop&q=85"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Overlay navy para legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#001c36]/95 via-[#003865]/85 to-[#003865]/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#001c36]/60 via-transparent to-transparent" />

        <Container className="relative z-10 py-14 sm:py-20">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-1.5 text-xs text-white/60">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <ChevronRight className="w-3 h-3" />
              </li>
              <li className="text-white font-medium">Catálogo</li>
            </ol>
          </nav>

          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#FCB800] text-[#172B3A] text-[11px] font-bold uppercase tracking-[0.14em] mb-5">
              <LayoutGrid className="w-3.5 h-3.5" />
              Catálogo Comercial
            </span>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-[1.05]">
              Repuestos y materiales,
              <span className="block text-[#FCB800] mt-1">todo en un solo catálogo</span>
            </h1>

            <p className="mt-5 text-sm sm:text-base text-white/75 leading-relaxed max-w-xl">
              Explora fichas técnicas, especificaciones y disponibilidad de nuestra línea
              automotriz y de construcción. Filtra por rubro y solicita cotización directa.
            </p>

            {/* Stats en vivo */}
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3">
              <div>
                <p className="text-2xl font-extrabold text-white leading-none">
                  {allProducts.length}
                </p>
                <p className="text-[11px] uppercase tracking-wider text-white/60 mt-1">
                  Productos
                </p>
              </div>
              <div className="w-px h-10 bg-white/15 hidden sm:block" />
              <div>
                <p className="text-2xl font-extrabold text-white leading-none">
                  {lineCounts.automotriz}
                </p>
                <p className="text-[11px] uppercase tracking-wider text-white/60 mt-1">
                  Línea Automotriz
                </p>
              </div>
              <div className="w-px h-10 bg-white/15 hidden sm:block" />
              <div>
                <p className="text-2xl font-extrabold text-white leading-none">
                  {lineCounts.construccion}
                </p>
                <p className="text-[11px] uppercase tracking-wider text-white/60 mt-1">
                  Línea Construcción
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Catálogo: sidebar de filtros + grilla ─────────────── */}
      <section className="py-8 sm:py-12 bg-[#F5F7F9] min-h-[60vh]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[280px_minmax(0,1fr)] gap-8 items-start">
            {/* ══ Sidebar de filtros ══ */}
            <aside className="bg-white rounded-2xl border border-slate-200/80 shadow-[0_1px_2px_rgba(16,24,40,0.05)] p-5 sm:p-6 lg:sticky lg:top-40">
              {/* Búsqueda */}
              <SearchInput
                value={searchQuery}
                onChange={setSearchQuery}
                placeholder="Buscar repuesto, código, material..."
              />

              {/* Línea comercial */}
              <div className="mt-7">
                <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-400 mb-3">
                  Línea comercial
                </p>
                <div className="space-y-1.5">
                  {(Object.keys(LINE_META) as Array<keyof typeof LINE_META>).map((key) => {
                    const meta = LINE_META[key]
                    const Icon = meta.icon
                    const isActive = selectedLine === key
                    return (
                      <button
                        key={key}
                        type="button"
                        onClick={() => handleSelectLine(key)}
                        className={cn(
                          'w-full flex items-center gap-3 rounded px-3 py-2.5 text-left transition-all duration-200',
                          isActive
                            ? 'bg-[#003865] text-white shadow-sm'
                            : 'text-slate-600 hover:bg-slate-50 hover:text-[#172B3A]'
                        )}
                      >
                        <Icon
                          className={cn(
                            'w-4 h-4 shrink-0',
                            isActive ? 'text-[#FCB800]' : 'text-slate-400'
                          )}
                        />
                        <span className="flex-1 text-sm font-semibold truncate">
                          {meta.label}
                        </span>
                        <span
                          className={cn(
                            'text-[11px] font-bold tabular-nums',
                            isActive ? 'text-white/70' : 'text-slate-400'
                          )}
                        >
                          {lineCounts[meta.countKey]}
                        </span>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Rubros */}
              <div className="mt-7 pt-6 border-t border-slate-100">
                <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-400 mb-3">
                  Rubro
                </p>
                <div className="space-y-1 max-h-[320px] overflow-y-auto pr-1">
                  <button
                    type="button"
                    onClick={() => setSelectedCategoryId('')}
                    className={cn(
                      'w-full flex items-center gap-3 rounded px-3 py-2 text-left text-sm transition-all duration-200',
                      selectedCategoryId === ''
                        ? 'bg-slate-800 text-white font-semibold'
                        : 'text-slate-600 hover:bg-slate-50 hover:text-[#172B3A]'
                    )}
                  >
                    <span className="flex-1 truncate">Todos los rubros</span>
                    <span
                      className={cn(
                        'text-[11px] font-bold tabular-nums',
                        selectedCategoryId === '' ? 'text-white/70' : 'text-slate-400'
                      )}
                    >
                      {allProducts.filter(
                        (p) =>
                          selectedLine === 'todas' ||
                          p.line === selectedLine,
                      ).length}
                    </span>
                  </button>

                  {visibleCategories.map((category) => {
                    const isActive = selectedCategoryId === category.id
                    return (
                      <button
                        key={category.id}
                        type="button"
                        onClick={() => setSelectedCategoryId(category.id)}
                        className={cn(
                          'w-full flex items-center gap-3 rounded px-3 py-2 text-left text-sm transition-all duration-200',
                          isActive
                            ? 'bg-[#003865] text-white font-semibold'
                            : 'text-slate-600 hover:bg-slate-50 hover:text-[#172B3A]'
                        )}
                      >
                        <span className="flex-1 truncate">{category.name}</span>
                        <span
                          className={cn(
                            'text-[11px] font-bold tabular-nums',
                            isActive ? 'text-white/70' : 'text-slate-400'
                          )}
                        >
                          {categoryCounts.get(category.id) ?? 0}
                        </span>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Limpiar */}
              {hasActiveFilters && (
                <button
                  type="button"
                  onClick={handleResetFilters}
                  className="mt-6 w-full inline-flex items-center justify-center gap-1.5 rounded border border-slate-200 px-4 py-2.5 text-xs font-bold text-slate-600 hover:border-[#003865] hover:text-[#003865] transition-colors"
                >
                  <X className="w-3.5 h-3.5" />
                  Limpiar filtros
                </button>
              )}
            </aside>

            {/* ══ Columna de resultados ══ */}
            <div className="min-w-0">
              {/* Barra de resultados */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <div className="flex items-center gap-2.5 flex-wrap">
                  <p className="text-sm font-bold text-[#172B3A]">
                    {filteredProducts.length}{' '}
                    <span className="font-medium text-slate-500">
                      {filteredProducts.length === 1 ? 'producto' : 'productos'}
                    </span>
                  </p>

                  {selectedLine !== 'todas' && (
                    <button
                      type="button"
                      onClick={() => handleSelectLine('todas')}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] font-semibold bg-[#e6f2f8] text-[#003865] hover:opacity-80 transition-colors"
                    >
                      {LINE_META[selectedLine].label}
                      <X className="w-3 h-3" />
                    </button>
                  )}
                  {selectedCategory && (
                    <button
                      type="button"
                      onClick={() => setSelectedCategoryId('')}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] font-semibold bg-[#f2f8fc] text-[#003865] border border-[#003865]/20 hover:opacity-80 transition-colors"
                    >
                      {selectedCategory.name}
                      <X className="w-3 h-3" />
                    </button>
                  )}
                  {searchQuery.trim() && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery('')}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] font-semibold bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors"
                    >
                      <Search className="w-3 h-3" />
                      <span className="max-w-[140px] truncate">"{searchQuery.trim()}"</span>
                      <X className="w-3 h-3" />
                    </button>
                  )}
                </div>

                {/* Ordenar */}
                <label className="inline-flex items-center gap-2 text-xs text-slate-500">
                  <ArrowUpDown className="w-3.5 h-3.5" />
                  <span className="font-medium">Ordenar:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as SortOption)}
                    className="bg-white border border-slate-200 rounded px-2.5 py-1.5 text-xs font-semibold text-[#172B3A] focus:outline-none focus:border-[#003865] cursor-pointer"
                  >
                    <option value="destacados">Destacados</option>
                    <option value="nombre-az">Nombre A–Z</option>
                    <option value="nombre-za">Nombre Z–A</option>
                  </select>
                </label>
              </div>

              {/* Grilla de Productos */}
              <ProductGrid
                products={filteredProducts}
                emptyTitle="No se encontraron productos con estos criterios"
                emptyDescription="Intenta cambiar los términos de búsqueda o seleccionar otra categoría."
                onResetFilters={hasActiveFilters ? handleResetFilters : undefined}
              />
            </div>
          </div>
        </Container>
      </section>
    </MainLayout>
  )
}
