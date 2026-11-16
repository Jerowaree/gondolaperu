// =============================================================================
// HOOK — useCategories
// Acceso a los datos de categorías desde componentes.
// =============================================================================

import { useMemo } from 'react'
import { getCategories, getCategoryById, getCategoryBySlug, getCategoriesByLine } from '@/lib/categories'
import type { Category, CommercialLine } from '@/types/category'

export function useCategories(): Category[] {
  return useMemo(() => getCategories(), [])
}

export function useCategoriesByLine(line: CommercialLine): Category[] {
  return useMemo(() => getCategoriesByLine(line), [line])
}

export function useCategoryBySlug(slug: string): Category | undefined {
  return useMemo(() => getCategoryBySlug(slug), [slug])
}

export function useCategoryById(id: string): Category | undefined {
  return useMemo(() => getCategoryById(id), [id])
}
