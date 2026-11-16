// =============================================================================
// HOOK — useProducts
// Acceso a los datos de productos desde componentes.
// =============================================================================

import { useMemo } from 'react'
import { getProducts, getFeaturedProducts, getProductsByCategory, getProductsByLine } from '@/lib/products'
import type { Product } from '@/types/product'
import type { CommercialLine } from '@/types/category'

export function useProducts(): { products: Product[]; count: number } {
  const products = useMemo(() => getProducts(), [])
  return { products, count: products.length }
}

export function useProductsByLine(line: CommercialLine): Product[] {
  return useMemo(() => getProductsByLine(line), [line])
}

export function useFeaturedProducts(): Product[] {
  return useMemo(() => getFeaturedProducts(), [])
}

export function useProductsByCategory(categoryId: string): Product[] {
  return useMemo(() => getProductsByCategory(categoryId), [categoryId])
}
