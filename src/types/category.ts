// =============================================================================
// TIPOS — Categoría
// Estructura de categorías clasificadas por línea comercial.
// =============================================================================

export type CommercialLine = 'automotriz' | 'construccion'

export interface Category {
  /** Identificador único interno */
  id: string
  /** URL slug amigable, único, estable */
  slug: string
  /** Nombre de la categoría */
  name: string
  /** Línea comercial a la que pertenece */
  line: CommercialLine
  /** Descripción breve */
  description: string
  /** URL de imagen representativa */
  image: string
  /** Orden de presentación */
  order: number
  /** Categoría activa y visible */
  active: boolean
}

export type CategorySummary = Pick<Category, 'id' | 'slug' | 'name' | 'line' | 'image' | 'order'>
