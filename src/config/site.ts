// =============================================================================
// CONFIGURACIÓN GLOBAL DEL SITIO — GÓNDOLA PERÚ
// Centraliza metadatos, rutas y configuración comercial de WhatsApp.
// =============================================================================

export const siteConfig = {
  /** Nombre del sitio para títulos y SEO */
  name: 'GÓNDOLA PERÚ',
  /** Razón social oficial */
  legalName: 'GÓNDOLA VARIEDAD Y EXPERIENCIA S.A.C.',
  /** Nombre comercial */
  tradeName: 'GÓNDOLA PERÚ',
  /** Descripción corta para SEO */
  description:
    'Repuestos automotrices, partes y piezas, accesorios vehiculares, materiales de construcción y servicios de mantenimiento automotriz en Piura, Perú.',
  /** URL base de producción */
  url: 'https://gondolaperu.com',
  /** Locale */
  locale: 'es-PE',
  /** Timezone */
  timezone: 'America/Lima',
  /** Ubicación oficial */
  location: {
    district: 'Veintiséis de Octubre',
    city: 'Piura',
    region: 'Piura',
    country: 'Perú',
  },
  /** Tema de color para meta theme-color */
  themeColor: '#075078',
} as const

export const routes = {
  home: '/',
  about: '/nosotros',
  catalog: '/catalogo',
  category: (slug: string) => `/categorias/${slug}`,
  product: (slug: string) => `/productos/${slug}`,
  notFound: '*',
} as const

export const whatsappConfig = {
  /** Número oficial en formato internacional sin + ni espacios */
  number: '51951545204',
  /** Número formateado para visualización */
  displayNumber: '+51 951 545 204',
  /** Mensaje predeterminado para consultas generales */
  defaultMessage:
    'Hola GÓNDOLA PERÚ, estoy interesado en consultar sobre sus productos y servicios. ¿Podrían brindarme información y cotización?',
  /** Mensaje específico para cotización de un producto */
  productMessage: (productName: string) =>
    `Hola GÓNDOLA PERÚ, estoy interesado en obtener información y cotización sobre el producto: ${productName}. ¿Tienen disponibilidad?`,
  /** Mensaje específico para consulta de servicios automotrices */
  serviceMessage: (serviceName: string) =>
    `Hola GÓNDOLA PERÚ, deseo consultar sobre el servicio automotriz de: ${serviceName}. ¿Podrían brindarme detalles y disponibilidad?`,
} as const

/** Genera URL de WhatsApp con mensaje predeterminado o personalizado codificado */
export function buildWhatsAppUrl(message: string = whatsappConfig.defaultMessage): string {
  if (!whatsappConfig.number) return '#'
  const encoded = encodeURIComponent(message)
  return `https://wa.me/${whatsappConfig.number}?text=${encoded}`
}
