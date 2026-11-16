// =============================================================================
// LIB — Utilidades de slugs
// Funciones para generar y normalizar slugs de URL.
// =============================================================================

/**
 * Normaliza un texto para convertirlo en un slug URL-friendly.
 * Elimina acentos, caracteres especiales y espacios.
 */
export function slugify(text: string): string {
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Elimina diacríticos
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '') // Solo alfanumérico, espacios y guiones
    .replace(/\s+/g, '-') // Espacios a guiones
    .replace(/-+/g, '-') // Múltiples guiones a uno
    .replace(/^-|-$/g, '') // Elimina guiones al inicio y final
}

/**
 * Verifica que un slug sea válido (no vacío, solo caracteres permitidos).
 */
export function isValidSlug(slug: string): boolean {
  return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)
}

/**
 * Genera un slug desde texto si no se proporciona uno.
 * Los slugs DEBEN estar declarados en los datos, no generarse en runtime.
 * Esta función es solo para validación y emergencias.
 */
export function ensureSlug(slug: string | undefined, name: string): string {
  if (slug && isValidSlug(slug)) return slug
  return slugify(name)
}
