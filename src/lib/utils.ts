// =============================================================================
// LIB — Utilidades generales
// =============================================================================

import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { type SyntheticEvent } from 'react'

/**
 * Combina clases CSS condicionalmente usando clsx + tailwind-merge.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Trunca un texto a un máximo de caracteres añadiendo "..."
 */
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength).trimEnd() + '...'
}

/**
 * Formatea un número con separadores de miles (formato local peruano).
 */
export function formatNumber(value: number): string {
  return new Intl.NumberFormat('es-PE').format(value)
}

/**
 * Verifica si una URL es externa (empieza con http o https).
 */
export function isExternalUrl(url: string): boolean {
  return /^https?:\/\//.test(url)
}

/**
 * Formatea un precio en soles: 18 -> "S/ 18.00"
 */
export function formatPrice(value: number): string {
  return `S/ ${new Intl.NumberFormat('es-PE', {
    minimumFractionDigits: value % 1 === 0 ? 0 : 2,
    maximumFractionDigits: 2,
  }).format(value)}`
}

/**
 * Imagen de respaldo SVG corporativo de alta calidad si falla una carga de imagen
 */
export const FALLBACK_IMAGE = '/placeholder.svg'

/**
 * Manejador onError para etiquetas <img> que previene iconos de imagen rota
 */
export function handleImageError(event: SyntheticEvent<HTMLImageElement, Event>) {
  event.currentTarget.src = FALLBACK_IMAGE
  event.currentTarget.onerror = null
}
