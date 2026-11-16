// =============================================================================
// LIB — Funciones de consulta de categorías
// =============================================================================

import { categories as allCategories } from '@/data/categories'
import type { Category, CategorySummary, CommercialLine } from '@/types/category'

/** Retorna todas las categorías activas ordenadas */
export function getCategories(): Category[] {
  return allCategories
    .filter((c) => c.active)
    .sort((a, b) => a.order - b.order)
}

/** Retorna categorías filtradas por línea comercial */
export function getCategoriesByLine(line: CommercialLine): Category[] {
  return allCategories
    .filter((c) => c.line === line && c.active)
    .sort((a, b) => a.order - b.order)
}

/** Busca una categoría por su slug único */
export function getCategoryBySlug(slug: string): Category | undefined {
  return allCategories.find((c) => c.slug === slug && c.active)
}

/** Busca una categoría por su ID */
export function getCategoryById(id: string): Category | undefined {
  return allCategories.find((c) => c.id === id)
}

/** Retorna resumen de categorías para navegación */
export function getCategorySummaries(): CategorySummary[] {
  return getCategories().map(({ id, slug, name, line, image, order }) => ({
    id,
    slug,
    name,
    line,
    image,
    order,
  }))
}
