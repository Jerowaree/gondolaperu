// =============================================================================
// CONTEXT — CatalogContext
// Estado compartido del catálogo: línea comercial, categoría y búsqueda.
// =============================================================================

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
  type ReactNode,
} from 'react'
import { filterProducts } from '@/lib/products'
import type { Product } from '@/types/product'
import type { CommercialLine } from '@/types/category'

interface CatalogContextValue {
  /** Línea comercial activa */
  activeLine: CommercialLine | 'todas'
  /** Término de búsqueda actual */
  searchQuery: string
  /** Categoría activa (ID) */
  activeCategoryId: string
  /** Resultados filtrados */
  filteredProducts: Product[]
  /** Total de resultados */
  resultCount: number
  /** Acciones */
  setActiveLine: (line: CommercialLine | 'todas') => void
  setSearchQuery: (query: string) => void
  setActiveCategoryId: (categoryId: string) => void
  clearFilters: () => void
}

const CatalogContext = createContext<CatalogContextValue | null>(null)

export function CatalogProvider({ children }: { children: ReactNode }) {
  const [activeLine, setActiveLineState] = useState<CommercialLine | 'todas'>('todas')
  const [searchQuery, setSearchQueryState] = useState('')
  const [activeCategoryId, setActiveCategoryIdState] = useState('')

  const setActiveLine = useCallback((line: CommercialLine | 'todas') => {
    setActiveLineState(line)
    setActiveCategoryIdState('')
  }, [])

  const setSearchQuery = useCallback((query: string) => {
    setSearchQueryState(query)
  }, [])

  const setActiveCategoryId = useCallback((categoryId: string) => {
    setActiveCategoryIdState(categoryId)
  }, [])

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

  const resultCount = filteredProducts.length

  return (
    <CatalogContext.Provider
      value={{
        activeLine,
        searchQuery,
        activeCategoryId,
        filteredProducts,
        resultCount,
        setActiveLine,
        setSearchQuery,
        setActiveCategoryId,
        clearFilters,
      }}
    >
      {children}
    </CatalogContext.Provider>
  )
}

export function useCatalogContext(): CatalogContextValue {
  const context = useContext(CatalogContext)
  if (!context) {
    throw new Error('useCatalogContext debe usarse dentro de <CatalogProvider>')
  }
  return context
}
