// =============================================================================
// DATOS — Categorías del catálogo
// Categorías organizadas por Línea Automotriz y Línea Construcción.
// =============================================================================

import type { Category } from '@/types/category'

export const categories: Category[] = [
  // -------------------------------------------------------------------------
  // LÍNEA AUTOMOTRIZ
  // -------------------------------------------------------------------------
  {
    id: 'cat-auto-01',
    slug: 'repuestos-motor',
    name: 'Repuestos de Motor',
    line: 'automotriz',
    description:
      'Componentes internos y externos del motor: pistones, empaquetaduras, fajas de distribución, válvulas y filtros.',
    image:
      'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=700&h=480&fit=crop&q=80',
    order: 1,
    active: true,
  },
  {
    id: 'cat-auto-02',
    slug: 'sistema-frenos',
    name: 'Sistema de Frenos',
    line: 'automotriz',
    description:
      'Pastillas de freno cerámicas y semimetálicas, discos ventilados, tambores, zapatas y bombas de freno.',
    image:
      'https://images.unsplash.com/photo-1760317890322-364a810cd4da?w=700&h=480&fit=crop&q=80',
    order: 2,
    active: true,
  },
  {
    id: 'cat-auto-03',
    slug: 'suspension-direccion',
    name: 'Suspensión y Dirección',
    line: 'automotriz',
    description:
      'Amortiguadores hidráulicos y de gas, terminales de dirección, rótulas, trapecios, bujes y cremalleras.',
    image:
      'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=700&h=480&fit=crop&q=80',
    order: 3,
    active: true,
  },
  {
    id: 'cat-auto-04',
    slug: 'sistema-electrico-baterias',
    name: 'Sistema Eléctrico y Baterías',
    line: 'automotriz',
    description:
      'Baterías de libre mantenimiento, alternadores, arrancadores, bujías, bobinas y focos LED automotrices.',
    image:
      'https://images.unsplash.com/photo-1765211003026-f7666ea3a948?w=700&h=480&fit=crop&q=80',
    order: 4,
    active: true,
  },
  {
    id: 'cat-auto-05',
    slug: 'lubricantes-fluidos',
    name: 'Lubricantes y Fluidos',
    line: 'automotriz',
    description:
      'Aceites sintéticos y semisintéticos para motor, líquido de frenos DOT 3 y DOT 4, refrigerantes y grasas.',
    image:
      'https://images.unsplash.com/photo-1615906655593-ad0386982a0f?w=700&h=480&fit=crop&q=80',
    order: 5,
    active: true,
  },
  {
    id: 'cat-auto-06',
    slug: 'accesorios-vehiculares',
    name: 'Accesorios Vehiculares',
    line: 'automotriz',
    description:
      'Plumas limpiaparabrisas, espejos, alarmas, cobertores, compresoras portátiles y equipamiento para vehículos.',
    image:
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=700&h=480&fit=crop&q=80',
    order: 6,
    active: true,
  },

  // -------------------------------------------------------------------------
  // LÍNEA CONSTRUCCIÓN
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
    order: 7,
    active: true,
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
    order: 8,
    active: true,
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
    order: 9,
    active: true,
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
    order: 10,
    active: true,
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
    order: 11,
    active: true,
  },
]
