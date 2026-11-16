// =============================================================================
// TIPOS — Producto
// Interfaz central del catálogo de GÓNDOLA PERÚ.
// =============================================================================

import type { CommercialLine } from './category'

export interface ProductSpecification {
  name: string
  value: string
}

export interface ProductPresentation {
  /** Formato o presentación comercial: "500 ml", "4 Litros", "Pack x6" */
  label: string
  /** Precio en soles (S/) */
  price: number
}

export interface Product {
  /** Identificador único interno */
  id: string
  /** URL slug amigable, único, estable */
  slug: string
  /** Nombre comercial del producto */
  name: string
  /** Línea comercial principal */
  line: CommercialLine
  /** Descripción breve para tarjetas y listados */
  shortDescription: string
  /** Descripción completa para la ficha del producto */
  description: string
  /** ID de la categoría a la que pertenece */
  categoryId: string
  /** URLs de imágenes (array: primera imagen es la principal) */
  images: string[]
  /** Especificaciones técnicas o comerciales */
  specifications: ProductSpecification[]
  /** Presentaciones comerciales con precio unitario en soles */
  presentations?: ProductPresentation[]
  /** Producto destacado en inicio o secciones especiales */
  featured: boolean
  /** Producto activo y visible en el catálogo */
  active: boolean
  /** Indicador de disponibilidad para cotización inmediata */
  inStock?: boolean
}

export type ProductSummary = Pick<
  Product,
  'id' | 'slug' | 'name' | 'line' | 'shortDescription' | 'categoryId' | 'images' | 'featured' | 'active' | 'inStock'
>
