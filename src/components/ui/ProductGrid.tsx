import type { Product } from '@/types/product'
import { ProductCard } from './ProductCard'
import { EmptyState } from './EmptyState'
import { PackageSearch } from 'lucide-react'

interface ProductGridProps {
  products: Product[]
  emptyTitle?: string
  emptyDescription?: string
  onResetFilters?: () => void
  className?: string
}

export function ProductGrid({
  products,
  emptyTitle = 'No se encontraron productos',
  emptyDescription = 'Intenta ajustar los filtros de búsqueda o seleccionar otra categoría.',
  onResetFilters,
  className = '',
}: ProductGridProps) {
  if (products.length === 0) {
    return (
      <EmptyState
        icon={<PackageSearch className="w-12 h-12 text-slate-400" />}
        title={emptyTitle}
        description={emptyDescription}
        actionText={onResetFilters ? 'Restablecer filtros' : undefined}
        onAction={onResetFilters}
      />
    )
  }

  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ${className}`}
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
