// =============================================================================
// HOOK — useProductSearch
// Búsqueda de productos con debounce.
// =============================================================================

import { useState, useMemo, useCallback, useEffect, useRef } from 'react'
import { searchProducts } from '@/lib/products'
import type { Product } from '@/types/product'

interface UseProductSearchReturn {
  query: string
  results: Product[]
  isSearching: boolean
  setQuery: (query: string) => void
  clearSearch: () => void
}

/**
 * Hook para búsqueda de productos con debounce de 300ms.
 * Evita búsquedas en cada keystroke.
 */
export function useProductSearch(initialQuery = ''): UseProductSearchReturn {
  const [query, setQueryState] = useState(initialQuery)
  const [debouncedQuery, setDebouncedQuery] = useState(initialQuery)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const setQuery = useCallback((newQuery: string) => {
    setQueryState(newQuery)
    if (timerRef.current) clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => {
      setDebouncedQuery(newQuery)
    }, 300)
  }, [])

  const clearSearch = useCallback(() => {
    setQueryState('')
    setDebouncedQuery('')
  }, [])

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [])

  const results = useMemo(() => searchProducts(debouncedQuery), [debouncedQuery])
  const isSearching = query !== debouncedQuery

  return { query, results, isSearching, setQuery, clearSearch }
}
