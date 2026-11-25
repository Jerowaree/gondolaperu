import { useState, useMemo } from 'react'
import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { CategoryCard } from '@/components/ui/CategoryCard'
import { Button } from '@/components/ui/button'
import { getCategories } from '@/lib/categories'
import type { CommercialLine } from '@/types/category'
import { cn } from '@/lib/utils'

type FilterLine = 'todas' | CommercialLine

const filters: { value: FilterLine; label: string }[] = [
  { value: 'todas', label: 'Todas' },
  { value: 'automotriz', label: 'Automotriz' },
  { value: 'construccion', label: 'Construcción' },
]

export type CategoryFilter = FilterLine

interface CategorySectionProps {
  selected?: CategoryFilter
  onSelect?: (line: CategoryFilter) => void
}

export function CategorySection({ selected, onSelect }: CategorySectionProps = {}) {
  const [internalLine, setInternalLine] = useState<FilterLine>('todas')
  const selectedLine = selected ?? internalLine
  const setSelectedLine = onSelect ?? setInternalLine
  const allCategories = getCategories()

  const filteredCategories = useMemo(() => {
    if (selectedLine === 'todas') return allCategories
    return allCategories.filter((c) => c.line === selectedLine)
  }, [selectedLine, allCategories])

  const counts: Record<FilterLine, number> = {
    todas: allCategories.length,
    automotriz: allCategories.filter((c) => c.line === 'automotriz').length,
    construccion: allCategories.filter((c) => c.line === 'construccion').length,
  }

  return (
    <section className="py-16 sm:py-20 bg-[#f8fafc] border-b border-slate-200">
      <Container>
        <SectionTitle
          pretitle="Catálogo por Rubros"
          title="Categorías Comerciales"
          subtitle="Encuentra repuestos mecánicos y suministros de construcción organizados según las necesidades de tu negocio."
          action={
            <Button
              to="/catalogo"
              variant="outline"
              size="sm"
              iconRight={<ArrowRight className="w-4 h-4" />}
            >
              Ver todo
            </Button>
          }
        />

        {/* Filter tabs — using shadcn-style pill group */}
        <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-1 scrollbar-none">
          {filters.map((f) => (
            <button
              key={f.value}
              type="button"
              onClick={() => setSelectedLine(f.value)}
              className={cn(
                'inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all shrink-0 border',
                selectedLine === f.value
                  ? f.value === 'automotriz'
                    ? 'bg-[#003865] text-white border-[#003865] shadow-sm'
                    : f.value === 'construccion'
                      ? 'bg-[#FCB800] text-slate-900 border-[#FCB800] shadow-sm'
                      : 'bg-[#172B3A] text-white border-[#172B3A] shadow-sm'
                  : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50',
              )}
            >
              <span>{f.label}</span>
              <span
                className={cn(
                  'text-[11px] font-bold px-1.5 py-0.5 rounded-full',
                  selectedLine === f.value
                    ? 'bg-white/20 text-current'
                    : 'bg-slate-100 text-slate-500',
                )}
              >
                {counts[f.value]}
              </span>
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredCategories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </Container>
    </section>
  )
}
