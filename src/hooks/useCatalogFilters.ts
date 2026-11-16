// =============================================================================
// HOOK — useCatalogFilters
// Filtros de catálogo: línea comercial, categoría activa + query de búsqueda.
// =============================================================================

import { useState, useCallback, useMemo } from 'react'
import { filterProducts } from '@/lib/products'
import type { Product } from '@/types/product'
import type { CommercialLine } from '@/types/category'

interface UseCatalogFiltersReturn {
  activeLine: CommercialLine | 'todas'
  searchQuery: string
  activeCategoryId: string
  filteredProducts: Product[]
  resultCount: number
  setActiveLine: (line: CommercialLine | 'todas') => void
  setSearchQuery: (query: string) => void
  setActiveCategoryId: (id: string) => void
  clearFilters: () => void
  hasActiveFilters: boolean
}

export function useCatalogFilters(initialLine: CommercialLine | 'todas' = 'todas'): UseCatalogFiltersReturn {
  const [activeLine, setActiveLineState] = useState<CommercialLine | 'todas'>(initialLine)
  const [searchQuery, setSearchQueryState] = useState('')
  const [activeCategoryId, setActiveCategoryIdState] = useState('')

  const setActiveLine = useCallback((line: CommercialLine | 'todas') => {
    setActiveLineState(line)
    setActiveCategoryIdState('')
  }, [])

  const setSearchQuery = useCallback((q: string) => setSearchQueryState(q), [])
  const setActiveCategoryId = useCallback((id: string) => setActiveCategoryIdState(id), [])
  const clearFilters = useCallback(() => {
    setActiveLineState('todas')
    setSearchQueryState('')
    setActiveCategoryIdState('')
  }, [])

  const filteredProducts = useMemo(
    () =>
      filterProducts({
        line: activeLine === 'todas' ? undefined : activeLine,
        categoryId: activeCategoryId || undefined,
        query: searchQuery || undefined,
      }),
    [activeLine, searchQuery, activeCategoryId],
  )

  const hasActiveFilters = searchQuery.trim() !== '' || activeLine !== 'todas' || activeCategoryId !== ''

  return {
    activeLine,
    searchQuery,
    activeCategoryId,
    filteredProducts,
    resultCount: filteredProducts.length,
    setActiveLine,
    setSearchQuery,
    setActiveCategoryId,
    clearFilters,
    hasActiveFilters,
  }
}
