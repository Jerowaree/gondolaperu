// =============================================================================
// DATOS — Categorías del catálogo
// Categorías organizadas por Línea Automotriz y Línea Construcción.
// Catálogo vigente: Línea Detailing Automotriz (Auto Premium 2026).
// =============================================================================

import type { Category } from '@/types/category'

const unsplash = (id: string) =>
  `https://images.unsplash.com/${id}?w=700&h=480&fit=crop&q=80`

export const categories: Category[] = [
  // -------------------------------------------------------------------------
  // LÍNEA AUTOMOTRIZ — DETailing / Cuidado Vehicular
  // -------------------------------------------------------------------------
  {
    id: 'cat-auto-01',
    slug: 'aros-y-neumaticos',
    name: 'Aros y Neumáticos',
    line: 'automotriz',
    description:
      'Limpiadores férricos, acondicionadores y abrillantadores para aros y neumáticos, con efecto hidrofóbico y larga duración.',
    image: 'https://images.unsplash.com/photo-1708805283017-c662be2c7a44?w=700&h=480&fit=crop&q=80',
    order: 1,
    active: true,
  },
  {
    id: 'cat-auto-02',
    slug: 'interiores',
    name: 'Interiores',
    line: 'automotriz',
    description:
      'Acondicionadores de tablero y plásticos, hidratadores de cuero, limpias de espuma y ambientadores para el habitáculo.',
    image: unsplash('photo-1449965408869-eaa3f722e40d'),
    order: 2,
    active: true,
  },
  {
    id: 'cat-auto-03',
    slug: 'shampoos-y-ceras',
    name: 'Shampoos y Ceras',
    line: 'automotriz',
    description:
      'Shampoos pH neutro y alcalinos, ceras de carnauba e hidrofóbicas SiO2, y equipos de lavado como champuneras.',
    image: 'https://images.unsplash.com/photo-1608506375591-b90e1f955e4b?w=700&h=480&fit=crop&q=80',
    order: 3,
    active: true,
  },
  {
    id: 'cat-auto-04',
    slug: 'desengrasantes',
    name: 'Desengrasantes',
    line: 'automotriz',
    description:
      'Limpiadores multipropósito APC, desengrasantes de aros y motor, y removedores de óxido para superficies metálicas.',
    image: unsplash('photo-1487754180451-c456f719a1fc'),
    order: 4,
    active: true,
  },
  {
    id: 'cat-auto-05',
    slug: 'detailing',
    name: 'Detailing',
    line: 'automotriz',
    description:
      'Compuestos de pulido por pasos, tratamientos cerámicos y preparadores de superficie para acabado profesional.',
    image: unsplash('photo-1552519507-da3b142c6e3d'),
    order: 5,
    active: true,
  },
  {
    id: 'cat-auto-06',
    slug: 'microfibras',
    name: 'Microfibras',
    line: 'automotriz',
    description:
      'Microfibras de diferentes gramajes y medidas para lavado, secado y aplicación de productos sin rayar la pintura.',
    image: 'https://images.unsplash.com/photo-1761934658331-2e00b20dc6c6?w=700&h=480&fit=crop&q=80',
    order: 6,
    active: true,
  },
  {
    id: 'cat-auto-07',
    slug: 'accesorios',
    name: 'Accesorios',
    line: 'automotriz',
    description:
      'Kits de brochas, aplicadores, guantes de nitrilo, manoplas y herramientas para el detallado automotriz.',
    image: unsplash('photo-1572981779307-38b8cabb2407'),
    order: 7,
    active: true,
  },

  // -------------------------------------------------------------------------
  // LÍNEA CONSTRUCCIÓN — catálogo pendiente de cargar (inactivas por ahora)
  // -------------------------------------------------------------------------
  {
    id: 'cat-const-01',
    slug: 'materiales-obra',
    name: 'Materiales de Obra y Cemento',
    line: 'construccion',
    description:
      'Cemento portland, áridos, aditivos para concreto, fierro de construcción y mallas electrosoldadas.',
    image:
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&h=480&fit=crop&q=80',
    order: 8,
    active: false,
  },
  {
    id: 'cat-const-02',
    slug: 'herramientas-equipos',
    name: 'Herramientas y Equipos',
    line: 'construccion',
    description:
      'Herramientas manuales y eléctricas: amoladoras, taladros rotomartillos, carretillas, palas y niveles.',
    image:
      'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=700&h=480&fit=crop&q=80',
    order: 9,
    active: false,
  },
  {
    id: 'cat-const-03',
    slug: 'tuberias-conexiones',
    name: 'Tuberías y Conexiones',
    line: 'construccion',
    description:
      'Tuberías y accesorios de PVC y CPVC para agua fría, caliente y desagüe en diámetros estándar.',
    image:
      'https://images.unsplash.com/photo-1542013936693-884638332954?w=700&h=480&fit=crop&q=80',
    order: 10,
    active: false,
  },
  {
    id: 'cat-const-04',
    slug: 'fijaciones-ferreteria',
    name: 'Fijaciones y Ferretería',
    line: 'construccion',
    description:
      'Pernos de anclaje, tornillos autorroscantes, clavos para madera y concreto, remaches y cintas selladoras.',
    image:
      'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=700&h=480&fit=crop&q=80',
    order: 11,
    active: false,
  },
  {
    id: 'cat-const-05',
    slug: 'acabados-pinturas',
    name: 'Acabados y Pinturas',
    line: 'construccion',
    description:
      'Pinturas látex para interiores y exteriores, esmaltes anticorrosivos, selladores y brochas profesionales.',
    image:
      'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=700&h=480&fit=crop&q=80',
    order: 12,
    active: false,
  },
]
