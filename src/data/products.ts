// =============================================================================
// DATOS — Productos del catálogo
// Catálogo de demostración de Línea Automotriz y Línea Construcción.
// =============================================================================

import type { Product } from '@/types/product'

export const products: Product[] = [
  // =========================================================================
  // LÍNEA AUTOMOTRIZ
  // =========================================================================
  {
    id: 'prod-auto-01',
    slug: 'bateria-automotriz-12v-13-placas',
    name: 'Batería Automotriz 12V 13 Placas Libre Mantenimiento',
    line: 'automotriz',
    shortDescription: 'Batería de arranque de alta capacidad con tecnología calcio-plata para vehículos livianos y camionetas.',
    description:
      'Batería automotriz de libre mantenimiento diseñada para brindar un arranque confiable incluso bajo condiciones climáticas exigentes como las del norte peruano. Cuenta con placas reforzadas con aleación calcio-plata que prolongan la vida útil y minimizan la autodescarga.',
    categoryId: 'cat-auto-04',
    images: [
      'https://images.unsplash.com/photo-1765211003026-f7666ea3a948?w=800&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800&h=600&fit=crop&q=80',
    ],
    specifications: [
      { name: 'Voltaje', value: '12V' },
      { name: 'Capacidad de placas', value: '13 placas por celda' },
      { name: 'Amperaje (Ah)', value: '65 Ah' },
      { name: 'Corriente de arranque en frío (CCA)', value: '550 A' },
      { name: 'Tipo de mantenimiento', value: 'Libre de mantenimiento (Sealed MF)' },
      { name: 'Garantía comercial', value: '12 meses contra defecto de fábrica' },
    ],
    featured: true,
    active: true,
    inStock: true,
  },
  {
    id: 'prod-auto-02',
    slug: 'kit-pastillas-freno-delanteras-ceramicas',
    name: 'Juego de Pastillas de Freno Cerámicas Delanteras',
    line: 'automotriz',
    shortDescription: 'Pastillas de freno de compuesto cerámico de bajo ruido y excelente disipación térmica.',
    description:
      'Juego de pastillas de freno para eje delantero formuladas con compuesto 100% cerámico libre de asbesto. Proporcionan un frenado progresivo, reducen la formación de polvo negro en las ruedas y ofrecen alta resistencia al desvanecimiento por temperatura en recorridos urbanos y de carretera.',
    categoryId: 'cat-auto-02',
    images: [
      'https://images.unsplash.com/photo-1760317890322-364a810cd4da?w=800&h=600&fit=crop&q=80',
    ],
    specifications: [
      { name: 'Posición', value: 'Eje delantero' },
      { name: 'Material de fricción', value: 'Compuesto cerámico prémium' },
      { name: 'Coeficiente de fricción', value: 'Grado FF' },
      { name: 'Incluye láminas antirruido', value: 'Sí, shims de acero inoxidable' },
      { name: 'Compatibilidad', value: 'Automóviles y SUVs medianas' },
    ],
    featured: true,
    active: true,
    inStock: true,
  },
  {
    id: 'prod-auto-03',
    slug: 'amortiguador-gas-delantero-reforzado',
    name: 'Amortiguador de Gas Delantero Reforzado',
    line: 'automotriz',
    shortDescription: 'Amortiguador presurizado con nitrógeno de doble tubo para mayor estabilidad en baches y trocha.',
    description:
      'Amortiguador automotriz de gas presurizado con vástago cromado de alta resistencia y sello de teflón antifuga. Brinda estabilidad direccional, reduce la distancia de frenado y absorbe impactos en terrenos irregulares típicos de la región.',
    categoryId: 'cat-auto-03',
    images: [
      'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&h=600&fit=crop&q=80',
    ],
    specifications: [
      { name: 'Tecnología', value: 'Gas nitrógeno presurizado (Twin-tube)' },
      { name: 'Tratamiento del vástago', value: 'Micro-pulido cromo duro' },
      { name: 'Posición', value: 'Delantero izquierdo / derecho' },
      { name: 'Resistencia a fatiga', value: 'Alta durabilidad' },
    ],
    featured: false,
    active: true,
    inStock: true,
  },
  {
    id: 'prod-auto-04',
    slug: 'aceite-motor-sintetico-5w30-galon',
    name: 'Aceite de Motor 100% Sintético 5W-30 Galón',
    line: 'automotriz',
    shortDescription: 'Lubricante sintético de alto desempeño para motores a gasolina y diésel ligero.',
    description:
      'Aceite lubricante sintético de última generación formulado para proteger el motor contra el desgaste prematuro, el depósito de lodos y la oxidación térmica. Mantiene una viscosidad estable tanto en arranques en frío como en condiciones de alta exigencia.',
    categoryId: 'cat-auto-05',
    images: [
      'https://images.unsplash.com/photo-1615906655593-ad0386982a0f?w=800&h=600&fit=crop&q=80',
    ],
    specifications: [
      { name: 'Grado de viscosidad', value: 'SAE 5W-30' },
      { name: 'Norma API', value: 'API SP / ILSAC GF-6A' },
      { name: 'Presentación', value: 'Envase de 1 Galón (3.785 L)' },
      { name: 'Aplicación', value: 'Motores a gasolina, GLP, GNV y diésel liviano' },
    ],
    featured: true,
    active: true,
    inStock: true,
  },
  {
    id: 'prod-auto-05',
    slug: 'bomba-agua-motor-gasolina',
    name: 'Bomba de Agua para Refrigeración de Motor',
    line: 'automotriz',
    shortDescription: 'Bomba de agua de aluminio fundido con rodamientos sellados de precisión.',
    description:
      'Bomba de refrigeración automotriz con impulsor balanceado para un flujo constante de líquido refrigerante. Previene el recalentamiento del motor en jornadas continuas y tráfico pesado, garantizando hermeticidad absoluta.',
    categoryId: 'cat-auto-01',
    images: [
      'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&h=600&fit=crop&q=80',
    ],
    specifications: [
      { name: 'Cuerpo', value: 'Aluminio fundido de alta densidad' },
      { name: 'Sello mecánico', value: 'Carburo de silicio' },
      { name: 'Empaquetadura', value: 'Incluida en el empaque' },
      { name: 'Tipo de accionamiento', value: 'Por faja de distribución / serpentina' },
    ],
    featured: false,
    active: true,
    inStock: true,
  },
  {
    id: 'prod-auto-06',
    slug: 'kit-focos-led-h4-alta-potencia',
    name: 'Kit de Focos LED H4 Automotriz 16000LM',
    line: 'automotriz',
    shortDescription: 'Kit de iluminación LED automotriz de alta intensidad para faros principales con corte de luz nítido.',
    description:
      'Focos LED automotrices con disipador térmico y ventilador silencioso integrado. Ofrecen un haz de luz blanco puro de 6500K con proyección simétrica que mejora notablemente la visibilidad nocturna sin encandilar a los vehículos en sentido contrario.',
    categoryId: 'cat-auto-06',
    images: [
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=600&fit=crop&q=80',
    ],
    specifications: [
      { name: 'Zócalo / Socket', value: 'H4 (Alta y Baja)' },
      { name: 'Flujo luminoso', value: '16,000 lúmenes por par' },
      { name: 'Temperatura de color', value: '6500K (Blanco frío)' },
      { name: 'Refrigeración', value: 'Ventilador turbo activo' },
      { name: 'Voltaje de operación', value: '9V - 32V DC' },
    ],
    featured: false,
    active: true,
    inStock: true,
  },

  // =========================================================================
  // LÍNEA CONSTRUCCIÓN
  // =========================================================================
  {
    id: 'prod-const-01',
    slug: 'cemento-portland-tipo-1-bolsa-42-5kg',
    name: 'Cemento Portland Tipo I Bolsa de 42.5 kg',
    line: 'construccion',
    shortDescription: 'Cemento de uso general para estructuras de concreto armado, zapatas, columnas y pavimentos.',
    description:
      'Cemento portland de fraguado normal y alto desarrollo de resistencia mecánica. Cumple con las normas técnicas peruanas para obras de edificación, losas, muros y proyectos de infraestructura comercial o residencial.',
    categoryId: 'cat-const-01',
    images: [
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop&q=80',
    ],
    specifications: [
      { name: 'Tipo de cemento', value: 'Portland Tipo I (NTP 334.009 / ASTM C150)' },
      { name: 'Peso por bolsa', value: '42.5 kg' },
      { name: 'Resistencia a 28 días', value: 'Mayor a 350 kg/cm²' },
      { name: 'Tiempo de fraguado inicial', value: 'Aprox. 120 minutos' },
      { name: 'Usos recomendados', value: 'Concreto armado, vigas, columnas, pisos' },
    ],
    featured: true,
    active: true,
    inStock: true,
  },
  {
    id: 'prod-const-02',
    slug: 'taladro-rotomartillo-industrial-800w',
    name: 'Taladro Rotomartillo Industrial 800W SDS Plus',
    line: 'construccion',
    shortDescription: 'Rotomartillo electro-neumático de 3 modos: taladrado, percusión y cincelado para concreto.',
    description:
      'Herramienta eléctrica profesional con motor de 800W y energía de impacto de 3.0 Joules. Su encastre SDS Plus facilita el intercambio de brocas para perforaciones rápidas en muros de concreto, piedra y mampostería.',
    categoryId: 'cat-const-02',
    images: [
      'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=800&h=600&fit=crop&q=80',
    ],
    specifications: [
      { name: 'Potencia', value: '800 W' },
      { name: 'Energía de impacto', value: '3.0 Joules' },
      { name: 'Sistema de sujeción', value: 'SDS Plus' },
      { name: 'Capacidad en concreto', value: 'Hasta 26 mm' },
      { name: 'Modos de trabajo', value: 'Giro, Percusión y Cincelado' },
    ],
    featured: true,
    active: true,
    inStock: true,
  },
  {
    id: 'prod-const-03',
    slug: 'tubo-pvc-presion-agua-fria-1-2-x-5m',
    name: 'Tubo PVC Presión Agua Fría 1/2" Clase 10 x 5 m',
    line: 'construccion',
    shortDescription: 'Tubería de PVC para conducción de agua a presión en redes domiciliarias y comerciales.',
    description:
      'Tubo de PVC de alta rigidez y pared uniforme para conducción de fluidos a presión. Resistente a la corrosión, químicos y esfuerzos mecánicos. Fabricado bajo estricto control de calidad según la norma NTP-ISO 1452.',
    categoryId: 'cat-const-03',
    images: [
      'https://images.unsplash.com/photo-1542013936693-884638332954?w=800&h=600&fit=crop&q=80',
    ],
    specifications: [
      { name: 'Diámetro nominal', value: '1/2 pulgada (21 mm ext.)' },
      { name: 'Clase de presión', value: 'Clase 10 (10 bar / 145 psi)' },
      { name: 'Longitud', value: '5 metros con campana para unión' },
      { name: 'Material', value: 'Policloruro de vinilo no plastificado (PVC-U)' },
    ],
    featured: false,
    active: true,
    inStock: true,
  },
  {
    id: 'prod-const-04',
    slug: 'disco-diamantado-segmentado-4-5-concreto',
    name: 'Disco Diamantado Segmentado 4.5" para Concreto y Ladrillo',
    line: 'construccion',
    shortDescription: 'Disco de corte en seco y húmedo con segmentos diamantados soldados con láser.',
    description:
      'Disco de corte para amoladoras angulares de 4-1/2 pulgadas. Diseñado para corte rápido de bloques de concreto, adoquines, ladrillos y piedra natural, garantizando vida útil prolongada y cortes limpios.',
    categoryId: 'cat-const-02',
    images: [
      'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=800&h=600&fit=crop&q=80',
    ],
    specifications: [
      { name: 'Diámetro exterior', value: '4-1/2 pulgadas (115 mm)' },
      { name: 'Eje interior', value: '7/8" (22.23 mm) con arandela reductora' },
      { name: 'Tipo de borde', value: 'Segmentado con soldadura láser' },
      { name: 'Velocidad máxima', value: '13,300 RPM' },
    ],
    featured: false,
    active: true,
    inStock: true,
  },
  {
    id: 'prod-const-05',
    slug: 'carretilla-buggy-concretero-reforzado-80l',
    name: 'Carretilla Buggy Concretero Reforzado 80L',
    line: 'construccion',
    shortDescription: 'Carretilla tipo buggy de tolva embutida de calibre grueso con llanta neumática.',
    description:
      'Equipo esencial de transporte para mezclas de concreto, arena y escombros en obra. Su tolva de acero de una sola pieza sin remaches evita filtraciones y sus brazos tubulares soportan jornadas pesadas.',
    categoryId: 'cat-const-01',
    images: [
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop&q=80',
    ],
    specifications: [
      { name: 'Capacidad de tolva', value: '80 Litros (aprox. 5 pies cúbicos)' },
      { name: 'Espesor de chapa', value: 'Acero laminado de 1.2 mm' },
      { name: 'Rueda', value: 'Neumática 16" con aro metálico y rodajes' },
      { name: 'Capacidad de carga', value: 'Hasta 200 kg' },
    ],
    featured: false,
    active: true,
    inStock: true,
  },
  {
    id: 'prod-const-06',
    slug: 'esmalte-sintetico-anticorrosivo-galon',
    name: 'Esmalte Sintético Anticorrosivo Galón',
    line: 'construccion',
    shortDescription: 'Pintura esmalte alquídico brillante con acción inhibidora de óxido para metales y maderas.',
    description:
      'Pintura de acabado brillante formulada con resinas alquídicas y pigmentos anticorrosivos. Proporciona una barrera impermeable resistente a la intemperie, la radiación solar y la humedad salina de la costa norte.',
    categoryId: 'cat-const-05',
    images: [
      'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=800&h=600&fit=crop&q=80',
    ],
    specifications: [
      { name: 'Tipo de acabado', value: 'Brillante de alta reflectancia' },
      { name: 'Base química', value: 'Resina alquídica modificada' },
      { name: 'Rendimiento teórico', value: '40 a 45 m² por galón a 1 mil' },
      { name: 'Tiempo de secado al tacto', value: '2 a 3 horas' },
      { name: 'Colores disponibles', value: 'Azul, blanco, negro, gris, amarillo' },
    ],
    featured: false,
    active: true,
    inStock: true,
  },
]
