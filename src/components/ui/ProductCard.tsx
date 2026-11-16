import { StackzeroProductCard } from '@/components/commerce/StackzeroProductCard'
import type { Product } from '@/types/product'

interface ProductCardProps {
  product: Product
  className?: string
}

export function ProductCard({ product, className = '' }: ProductCardProps) {
  return <StackzeroProductCard product={product} className={className} />
}
