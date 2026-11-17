// =============================================================================
// DATOS — Empresa GÓNDOLA PERÚ
// Información corporativa oficial de GÓNDOLA VARIEDAD Y EXPERIENCIA S.A.C.
// =============================================================================

import type { CompanyInfo, BenefitItem } from '@/types/company'

export const company: CompanyInfo = {
  legalName: 'GÓNDOLA VARIEDAD Y EXPERIENCIA S.A.C.',
  tradeName: 'GÓNDOLA PERÚ',
  tagline: 'Especialistas en Repuestos Automotrices y Materiales de Construcción',
  shortDescription:
    'Empresa comercial ubicada en el distrito Veintiséis de Octubre, Piura, especializada en la venta y distribución de repuestos automotrices, partes y piezas, materiales de construcción y servicios complementarios de mantenimiento vehicular.',
  description: [
    'GÓNDOLA VARIEDAD Y EXPERIENCIA S.A.C. (GÓNDOLA PERÚ) es una empresa comercial consolidada en el distrito Veintiséis de Octubre, Piura, enfocada en satisfacer las necesidades comerciales, técnicas y operativas de clientes y negocios en el norte del país.',
    'Nuestra actividad se concentra en dos líneas comerciales estratégicas: la Línea Automotriz, que abarca una amplia gama de repuestos, partes mecánicas, componentes y accesorios para diversos tipos de vehículos; y la Línea Construcción, orientada al suministro de materiales, herramientas y artículos indispensables para obras y proyectos.',
  ],
  district: 'Veintiséis de Octubre',
  city: 'Piura',
  region: 'Piura',
  country: 'Perú',
  legalAddress: {
    street: 'Av. Gullman Nro. 848',
    urbanization: 'Urbanización San José',
    reference: 'Frente al Cuartel Máximo Galindo',
    district: 'Veintiséis de Octubre',
    department: 'Piura',
  },
  contact: [
    {
      type: 'email',
      label: 'Correo Comercial',
      value: 'ventas.gondola@gmail.com',
      href: 'mailto:ventas.gondola@gmail.com',
    },
    {
      type: 'whatsapp',
      label: 'WhatsApp Comercial',
      value: '+51 951 545 204',
      href: 'https://wa.me/51951545204',
    },
    {
      type: 'phone',
      label: 'Teléfono de Contacto',
      value: '+51 951 545 204',
      href: 'tel:+51951545204',
    },
  ],
  services: [
    {
      id: 'mantenimiento-preventivo',
      title: 'Mantenimiento Preventivo y Cambio de Fluidos',
      description:
        'Cambio de aceite de motor, filtros de aire, combustible y habitáculo, y revisión de niveles para asegurar la vida útil del vehículo.',
      icon: 'Wrench',
      features: ['Cambio de aceite y filtro', 'Inspección de 25 puntos clave', 'Purgado de frenos y refrigerante'],
    },
    {
      id: 'sistema-frenos',
      title: 'Mantenimiento y Reparación de Frenos',
      description:
        'Revisión, rectificación de discos/tambores y sustitución de pastillas, zapatas y líquido de frenos con repuestos de alta precisión.',
      icon: 'Disc',
      features: ['Cambio de pastillas y zapatas', 'Rectificado de discos', 'Diagnóstico de fuga de presión'],
    },
    {
      id: 'suspension-direccion',
      title: 'Diagnóstico de Suspensión y Dirección',
      description:
        'Inspección y cambio de amortiguadores, terminales, rótulas, trapecios y bujes para un manejo seguro y confortable en rutas del norte.',
      icon: 'Shield',
      features: ['Reemplazo de amortiguadores', 'Cambio de terminales y rótulas', 'Alineamiento visual de componentes'],
    },
    {
      id: 'diagnostico-electrico',
      title: 'Sistema Eléctrico y Baterías',
      description:
        'Prueba de carga de batería, alternador y arrancador; instalación y diagnóstico de iluminación vehicular y componentes eléctricos.',
      icon: 'Zap',
      features: ['Diagnóstico de batería y carga', 'Reparación de cableado y fusibles', 'Instalación de accesorios'],
    },
  ],
  socialMedia: [],
}

export const benefits: BenefitItem[] = [
  {
    id: 'calidad',
    icon: 'ShieldCheck',
    title: 'Repuestos y Materiales Garantizados',
    description: 'Componentes automotrices y suministros de construcción seleccionados que garantizan durabilidad y rendimiento.',
  },
  {
    id: 'atencion',
    icon: 'Headphones',
    title: 'Asesoría Técnica y Comercial Directa',
    description: 'Orientación especializada para elegir el repuesto exacto para su vehículo o los materiales precisos para su obra.',
  },
  {
    id: 'variedad',
    icon: 'Grid3x3',
    title: 'Catálogo Multirubro Organizado',
    description: 'Línea automotriz y línea construcción claramente estructuradas para agilizar su consulta y cotización.',
  },
  {
    id: 'ubicacion',
    icon: 'MapPin',
    title: 'Ubicación Estratégica en Piura',
    description: 'Establecidos en el distrito Veintiséis de Octubre, con fácil acceso para retiro o despacho en la región.',
  },
  {
    id: 'rapidez',
    icon: 'Zap',
    title: 'Cotizaciones Inmediatas por WhatsApp',
    description: 'Canal directo de respuesta ágil para consultar disponibilidad, especificaciones y precios.',
  },
]
