import { useState, useMemo } from 'react'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Container } from '@/components/ui/Container'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { CategoryCard } from '@/components/ui/CategoryCard'
import { getCategories } from '@/lib/categories'
import { cn } from '@/lib/utils'
import type { CommercialLine } from '@/types/category'

const FILTERS: { value: 'todas' | CommercialLine; label: string; count?: number }[] = [
  { value: 'todas', label: 'Todas' },
  { value: 'automotriz', label: 'Automotriz' },
  { value: 'construccion', label: 'Construcción' },
]

export function CategorySection() {
  const [selected, setSelected] = useState<'todas' | CommercialLine>('todas')
  const all = getCategories()

  const filtered = useMemo(() =>
    selected === 'todas' ? all : all.filter((c) => c.line === selected),
    [selected, all]
  )

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-slate-100">
      <Container>
        <SectionTitle
          pretitle="Catálogo por Rubros"
          title="Categorías"
          titleAccent="Comerciales"
          subtitle="Piezas mecánicas, repuestos y suministros de construcción para talleres, contratistas y empresas en Piura."
        />

        {/* Tabs + CTA en la misma línea */}
        <div className="flex items-center justify-between border-b border-slate-200 mb-8">
          <div className="flex items-center gap-0 overflow-x-auto scrollbar-none -mx-1 px-1">
            {FILTERS.map((f) => {
              const count = f.value === 'todas'
                ? all.length
                : all.filter((c) => c.line === f.value).length
              const active = selected === f.value

              return (
                <button
                  key={f.value}
                  type="button"
                  onClick={() => setSelected(f.value)}
                  className={cn(
                    'relative px-3 sm:px-5 py-3 text-sm font-semibold transition-colors duration-150 select-none whitespace-nowrap shrink-0',
                    active
                      ? 'text-[#003865]'
                      : 'text-slate-400 hover:text-slate-700'
                  )}
                >
                  {f.label}
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
