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
 * Imagen de respaldo SVG corporativo de alta calidad si falla una carga de imagen
 */
export const FALLBACK_IMAGE =
  'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400"><rect width="600" height="400" fill="%23002647"/><circle cx="300" cy="170" r="44" fill="%23003865"/><path d="M285 170 L300 155 L315 170" stroke="%23fcb800" stroke-width="4" fill="none" stroke-linecap="round"/><text x="50%" y="240" dominant-baseline="middle" text-anchor="middle" fill="%23fcb800" font-family="sans-serif" font-size="22" font-weight="bold">G%C3%93NDOLA PER%C3%9A</text><text x="50%" y="270" dominant-baseline="middle" text-anchor="middle" fill="%23bae6fd" font-family="sans-serif" font-size="14">Automotriz y Construcci%C3%B3n</text></svg>'

/**
 * Manejador onError para etiquetas <img> que previene iconos de imagen rota
 */
export function handleImageError(event: SyntheticEvent<HTMLImageElement, Event>) {
  event.currentTarget.src = FALLBACK_IMAGE
  event.currentTarget.onerror = null
}
