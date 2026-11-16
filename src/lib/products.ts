// =============================================================================
// LIB — Funciones de consulta del catálogo de productos
// =============================================================================

import { products as allProducts } from '@/data/products'
import type { Product, ProductSummary } from '@/types/product'
import type { CommercialLine } from '@/types/category'

/** Retorna todos los productos activos */
export function getProducts(): Product[] {
  return allProducts.filter((p) => p.active)
}

/** Retorna productos filtrados por línea comercial ('automotriz' | 'construccion') */
export function getProductsByLine(line: CommercialLine): Product[] {
  return allProducts.filter((p) => p.line === line && p.active)
}

/** Busca un producto por su slug único */
export function getProductBySlug(slug: string): Product | undefined {
  return allProducts.find((p) => p.slug === slug && p.active)
}

/** Retorna productos de una categoría específica */
export function getProductsByCategory(categoryId: string): Product[] {
  return allProducts.filter((p) => p.categoryId === categoryId && p.active)
}

/** Retorna productos destacados (featured: true) */
export function getFeaturedProducts(limit?: number): Product[] {
  const featured = allProducts.filter((p) => p.featured && p.active)
  return limit ? featured.slice(0, limit) : featured
}

/** Retorna productos destacados por línea comercial */
export function getFeaturedProductsByLine(line: CommercialLine, limit?: number): Product[] {
  const featured = allProducts.filter((p) => p.line === line && p.featured && p.active)
  return limit ? featured.slice(0, limit) : featured
}

/** Busca productos por nombre o descripción */
export function searchProducts(query: string): Product[] {
  if (!query.trim()) return getProducts()
  const normalizedQuery = query.toLowerCase().trim()
  return allProducts.filter(
    (p) =>
      p.active &&
      (p.name.toLowerCase().includes(normalizedQuery) ||
        p.shortDescription.toLowerCase().includes(normalizedQuery)),
  )
}

/** Retorna productos relacionados (misma categoría o misma línea, excluyendo el actual) */
export function getRelatedProducts(productId: string, categoryId: string, limit = 4): Product[] {
  // Primero intentamos de la misma categoría
  const sameCategory = allProducts.filter(
    (p) => p.active && p.categoryId === categoryId && p.id !== productId,
  )
  if (sameCategory.length >= limit) {
    return sameCategory.slice(0, limit)
  }

  // Si faltan, rellenamos con productos de la misma línea comercial
  const current = allProducts.find((p) => p.id === productId)
  const line = current?.line
  const sameLine = line
    ? allProducts.filter((p) => p.active && p.line === line && p.id !== productId && !sameCategory.includes(p))
    : []

  return [...sameCategory, ...sameLine].slice(0, limit)
}

/** Retorna resumen de productos para listados */
export function getProductSummaries(): ProductSummary[] {
  return getProducts().map(({ id, slug, name, line, shortDescription, categoryId, images, featured, active, inStock }) => ({
    id,
    slug,
    name,
    line,
    shortDescription,
    categoryId,
    images,
    featured,
    active,
    inStock,
  }))
}

/** Filtra productos por múltiples criterios */
export function filterProducts(options: {
  line?: CommercialLine
  categoryId?: string
  query?: string
}): Product[] {
  let result = getProducts()

  if (options.line) {
    result = result.filter((p) => p.line === options.line)
  }

  if (options.categoryId) {
    result = result.filter((p) => p.categoryId === options.categoryId)
  }

  if (options.query && options.query.trim()) {
    const q = options.query.toLowerCase().trim()
    result = result.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.shortDescription.toLowerCase().includes(q) ||
        p.specifications.some((s) => s.value.toLowerCase().includes(q)),
    )
  }

  return result
}
