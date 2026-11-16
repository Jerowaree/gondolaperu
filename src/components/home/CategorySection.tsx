import { useMemo } from 'react'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Container } from '@/components/ui/Container'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { CategoryCard } from '@/components/ui/CategoryCard'
import { getCategories } from '@/lib/categories'
import { cn } from '@/lib/utils'
import type { CommercialLine } from '@/types/category'

export type CategoryFilter = 'todas' | CommercialLine

interface CategorySectionProps {
  selected: CategoryFilter
  onSelect: (filter: CategoryFilter) => void
}

const FILTER_LABELS: Record<CommercialLine, string> = {
  automotriz: 'Automotriz',
  construccion: 'Construcción',
}

export function CategorySection({ selected, onSelect }: CategorySectionProps) {
  const all = getCategories()

  // Solo líneas que tienen categorías activas
  const filters = useMemo<CategoryFilter[]>(() => {
    const lines = [...new Set(all.map((c) => c.line))]
    return ['todas', ...lines] as CategoryFilter[]
  }, [all])

  const filtered = useMemo(() =>
    selected === 'todas' ? all : all.filter((c) => c.line === selected),
    [selected, all]
  )

  return (
    <section id="categorias" className="py-16 sm:py-20 bg-white border-b border-slate-100 scroll-mt-24">
      <Container>
        <SectionTitle
          pretitle="Catálogo por Rubros"
          title="Categorías"
          titleAccent="Comerciales"
          subtitle="Productos de detailing, cuidado vehicular y accesorios profesionales para talleres, lavaderos y particulares en Piura."
        />

        {/* Tabs + CTA en la misma línea */}
        <div className="flex items-center justify-between border-b border-slate-200 mb-8">
          <div className="flex items-center gap-0 overflow-x-auto scrollbar-none -mx-1 px-1">
            {filters.map((f) => {
              const count = f === 'todas'
                ? all.length
                : all.filter((c) => c.line === f).length
              const active = selected === f

              return (
                <button
                  key={f}
                  type="button"
                  onClick={() => onSelect(f)}
                  className={cn(
                    'relative px-3 sm:px-5 py-3 text-sm font-semibold transition-colors duration-150 select-none whitespace-nowrap shrink-0',
                    active
                      ? 'text-[#003865]'
                      : 'text-slate-400 hover:text-slate-700'
                  )}
                >
                  {f === 'todas' ? 'Todas' : FILTER_LABELS[f]}
                  <span className={cn(
                    'ml-1.5 text-xs font-medium',
                    active ? 'text-[#003865]/60' : 'text-slate-300'
                  )}>
                    {count}
                  </span>
                  {/* Borde inferior activo */}
                  {active && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#003865]" />
                  )}
                </button>
              )
            })}
          </div>

          {/* CTA integrado */}
          <Link
            to="/catalogo"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-[#003865] transition-colors mb-px"
          >
            Ver catálogo completo
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Grilla */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200">
          {filtered.map((category) => (
            <div key={category.id} className="bg-white">
              <CategoryCard category={category} className="border-0" />
            </div>
          ))}
        </div>

        {/* CTA móvil */}
        <div className="mt-6 sm:hidden text-center">
          <Link
            to="/catalogo"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#003865]"
          >
            Ver catálogo completo
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Container>
    </section>
  )
}
