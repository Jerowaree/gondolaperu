// =============================================================================
// TIPOS — Empresa
// Información corporativa de GÓNDOLA VARIEDAD Y EXPERIENCIA S.A.C.
// =============================================================================

export interface ContactChannel {
  type: 'whatsapp' | 'phone' | 'email' | 'address'
  label: string
  value: string
  /** URL de acción (tel:, mailto:, https://wa.me/...) */
  href: string
}

export interface CommercialService {
  id: string
  title: string
  description: string
  icon: string
  features: string[]
}

export interface CompanyInfo {
  /** Razón social oficial */
  legalName: string
  /** Nombre comercial */
  tradeName: string
  /** Eslogan o tagline */
  tagline: string
  /** Descripción corta para SEO y presentación */
  shortDescription: string
  /** Párrafo(s) de descripción extendida */
  description: string[]
  /** Distrito / ciudad */
  district: string
  city: string
  region: string
  country: string
  /** Dirección legal estructurada */
  legalAddress: {
    street: string
    urbanization: string
    reference?: string
    district: string
    department: string
  }
  /** Canales de contacto */
  contact: ContactChannel[]
  /** Servicios de taller y mantenimiento vehicular complementarios */
  services: CommercialService[]
  /** Redes sociales */
  socialMedia: {
    platform: string
    url: string
    label: string
  }[]
}

export interface BenefitItem {
  id: string
  icon: string
  title: string
  description: string
}
