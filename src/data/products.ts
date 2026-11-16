// =============================================================================
// DATOS — Productos del catálogo
// Catálogo real Auto Premium 2026 — Línea Detailing Automotriz.
// Precios en soles (S/). Imágenes locales en /public/products.
// =============================================================================

import type { Product } from '@/types/product'

const img = (file: string) => `/products/${file}`

export const products: Product[] = [
  // =========================================================================
  // AROS Y NEUMÁTICOS
  // =========================================================================
  {
    id: 'prod-auto-01',
    slug: 'iron-blood-limpiador-ferrico-de-aros',
    name: 'Iron Blood — Limpiador Férrico de Aros',
    line: 'automotriz',
    shortDescription:
      'Descontaminante férrico con efecto sangrado espumante que elimina contaminantes metálicos de los aros.',
    description:
      'Descontaminante férrico para aros con efecto sangrado espumante que elimina contaminantes metálicos incrustados y mejora notablemente su apariencia. También puede usarse en carrocería y barniz con dilución 1:1 para descontaminación profunda.',
    categoryId: 'cat-auto-01',
    images: [
      img('limpiador-ferrico-de-aros-iron-blood-20-litros.jpg'),
      img('limpiador-ferrico-de-aros-iron-blood-4-litros.jpg'),
      img('limpiador-ferrico-de-aros-iron-blood-medio-litro.jpg'),
    ],
    specifications: [
      { name: 'Rendimiento', value: '35 carros por litro' },
      { name: 'Dilución', value: 'Aros: no aplica · Carrocería/barniz: 1:1' },
      { name: 'pH', value: '3-4 (ácido)' },
      { name: 'Uso', value: 'Aros y carrocería — descontaminación férrica' },
    ],
    presentations: [
      { label: '1/2 Litro', price: 38 },
      { label: '4 Litros', price: 290 },
      { label: '20 Litros', price: 1400 },
    ],
    featured: true,
    active: true,
    inStock: true,
  },
  {
    id: 'prod-auto-02',
    slug: 'acondicionador-black-abrillantador-neumaticos',
    name: 'Acondicionador Black — Abrillantador para Neumáticos',
    line: 'automotriz',
    shortDescription:
      'Renovador de neumáticos con efecto antiadherente que repele polvo y deja un brillo intenso.',
    description:
      'Conocido como renovador o abrillantador de neumáticos. Contiene un efecto antiadherente que repele el polvo y otras partículas, además de dejar un brillo intenso que dura hasta 10 días.',
    categoryId: 'cat-auto-01',
    images: [
      img('abrillantador-para-neumaticos-acondicionador-black-20-litros.jpg'),
      img('abrillantador-para-neumaticos-acondicionador-black-4-litros.jpg'),
      img('abrillantador-para-neumaticos-acondicionador-black-medio-litro.jpg'),
    ],
    specifications: [
      { name: 'Rendimiento', value: '35 carros por litro' },
      { name: 'Acabado', value: 'Brillante' },
      { name: 'Duración', value: 'Hasta 10 días' },
      { name: 'pH', value: '7 (neutro)' },
    ],
    presentations: [
      { label: '1/2 Litro', price: 15 },
      { label: '4 Litros', price: 35 },
      { label: '20 Litros', price: 120 },
    ],
    featured: false,
    active: true,
    inStock: true,
  },
  {
    id: 'prod-auto-03',
    slug: 'acondicionador-armor-diluible-en-agua',
    name: 'Acondicionador Armor — Diluible en Agua',
    line: 'automotriz',
    shortDescription:
      'Multi-acondicionador para neumáticos, plásticos y cuero, incluso en proceso de descomposición.',
    description:
      'Multi acondicionador que acondiciona plásticos, neumáticos y cuero — incluso en proceso de descomposición — restaurando su apariencia y brindando protección adicional. Dilución ajustable según el acabado deseado.',
    categoryId: 'cat-auto-01',
    images: [
      img('acondicionador-diluible-en-agua-acondicionador-armor-20-litros.jpg'),
      img('acondicionador-diluible-en-agua-acondicionador-armor-4-litros.jpg'),
      img('acondicionador-diluible-en-agua-acondicionador-armor-medio-litro.jpg'),
    ],
    specifications: [
      { name: 'Rendimiento', value: '66 aplicaciones por litro' },
      { name: 'Dilución', value: '1:1 brillante · 1:3 brillo natural · 1:4 mate natural' },
      { name: 'Duración', value: 'Hasta 14 días' },
      { name: 'Uso', value: 'Neumáticos, plásticos y cuero' },
    ],
    presentations: [
      { label: '1/2 Litro', price: 35 },
      { label: '4 Litros', price: 200 },
      { label: '20 Litros', price: 900 },
    ],
    featured: false,
    active: true,
    inStock: true,
  },
  {
    id: 'prod-auto-04',
    slug: 'hydrofobic-tire-acondicionador-agua-y-polvo',
    name: 'Hydrofobic Tire — Acondicionador Hidrofóbico',
    line: 'automotriz',
    shortDescription:
      'Protege y embellece neumáticos con capa hidrofóbica que repele agua, suciedad y polvo.',
    description:
      'Producto especializado que protege y embellece los neumáticos creando una capa hidrofóbica que repele el agua, la suciedad y el polvo. Mejora el aspecto de los neumáticos y prolonga su vida útil al evitar que se sequen y agrieten. Acabado brillante y duradero.',
    categoryId: 'cat-auto-01',
    images: [
      img('acondicionador-hidrofobico-agua-y-polvo-hydrofobic-tire-20-litros.jpg'),
      img('acondicionador-hidrofobico-agua-y-polvo-hydrofobic-tire-4-litros.jpg'),
      img('acondicionador-hidrofobico-agua-y-polvo-hydrofobic-tire-medio-litro.jpg'),
    ],
    specifications: [
      { name: 'Rendimiento', value: '18 carros por litro' },
      { name: 'Dilución', value: 'No aplica' },
      { name: 'Propiedad', value: 'Hidrofóbico — agua y polvo' },
      { name: 'Duración', value: 'Hasta 45 días' },
    ],
    presentations: [
      { label: '1/2 Litro', price: 38 },
      { label: '4 Litros', price: 290 },
      { label: '20 Litros', price: 1400 },
    ],
    featured: false,
    active: true,
    inStock: true,
  },
  {
    id: 'prod-auto-05',
    slug: 'crystal-finesse-ceramico-de-aros',
    name: 'Crystal Finesse — Cerámico de Aros',
    line: 'automotriz',
    shortDescription:
      'Protección cerámica duradera hasta 3 años para aros. Repele agua, polvo y contaminantes.',
    description:
      'Protección duradera hasta 3 años. Repele el agua, el polvo y los contaminantes, garantizando una limpieza suave, eficaz y sin riesgos para la pintura ni las superficies delicadas del vehículo.',
    categoryId: 'cat-auto-01',
    images: [
      'https://images.unsplash.com/photo-1785448213554-19face3ff961?w=800&h=600&fit=crop&q=80',
    ],
    specifications: [
      { name: 'Rendimiento', value: '15-20 carros por 50 ml' },
      { name: 'Dilución', value: 'No aplica' },
      { name: 'Duración', value: 'Hasta 3 años' },
      { name: 'Propiedad', value: 'Hidrofóbico — agua y polvo' },
    ],
    presentations: [
      { label: '30 ml × 1', price: 129 },
      { label: '30 ml × 2', price: 250 },
      { label: '30 ml × 3', price: 360 },
      { label: '30 ml × 5', price: 550 },
      { label: '50 ml × 1', price: 160 },
      { label: '50 ml × 2', price: 310 },
      { label: '50 ml × 3', price: 450 },
      { label: '50 ml × 5', price: 700 },
    ],
    featured: true,
    active: true,
    inStock: true,
  },
  {
    id: 'prod-auto-06',
    slug: 'brutal-hops-cepillo-para-aros',
    name: 'Brutal Hops — Cepillo para Aros y Llantas',
    line: 'automotriz',
    shortDescription:
      'Cepillo especializado para limpiar rincones y grietas imposibles de los aros.',
    description:
      'Cepillo de aros especial para llegar a espacios imposibles. Especializado para limpiar los rincones y grietas de los aros de las llantas; ayuda a eliminar suciedad, polvo y residuos acumulados en espacios de difícil acceso.',
    categoryId: 'cat-auto-01',
    images: [],
    specifications: [
      { name: 'Material', value: 'Cerdas duras' },
      { name: 'Uso', value: 'Manual' },
      { name: 'Aplicación', value: 'Guardafango, aros y motor' },
    ],
    presentations: [
      { label: '450mm × 110mm', price: 35 },
      { label: '450mm × 70mm', price: 30 },
      { label: '340mm × 65mm', price: 25 },
    ],
    featured: false,
    active: false, // SIN FOTO — oculto hasta tener imagen,
    inStock: true,
  },
  {
    id: 'prod-auto-07',
    slug: 'fort-premium-black-cepillo-neumaticos',
    name: 'Fort Premium Black — Cepillo para Neumáticos',
    line: 'automotriz',
    shortDescription:
      'Cepillo de llantas de uso extremo con cerdas duras para limpieza profunda de rincones.',
    description:
      'Cepillo de llantas exclusivo para uso extremo con cerdas duras. Sirve para limpiar las llantas del vehículo eliminando suciedad, polvo y residuos acumulados en los rincones y grietas.',
    categoryId: 'cat-auto-01',
    images: [
      img('cepillo-para-neumaticos-fort-premium-black-1-unidad.jpg'),
      img('cepillo-para-neumaticos-fort-premium-black-2-unidades.jpg'),
    ],
    specifications: [
      { name: 'Material', value: 'Cerdas duras' },
      { name: 'Uso', value: 'Manual' },
      { name: 'Aplicación', value: 'Neumático, guardafango, aros y motor' },
    ],
    presentations: [
      { label: '1 Unidad', price: 15 },
      { label: '2 Unidades', price: 25 },
    ],
    featured: false,
    active: true,
    inStock: true,
  },

  // =========================================================================
  // INTERIORES
  // =========================================================================
  {
    id: 'prod-auto-08',
    slug: 'emergency-solution-limpiador-de-espuma',
    name: 'Emergency Solution — Limpiador de Espuma',
    line: 'automotriz',
    shortDescription:
      'Limpiador de espuma multipropósito para tapiz, tablero, puertas y cueros.',
    description:
      'Limpiador multipropósito ideal para distintas superficies del vehículo. Elimina la suciedad con facilidad en telas (tapiz), tablero, puertas y cueros.',
    categoryId: 'cat-auto-02',
    images: [img('limpiador-de-espuma-emergency-solution.jpg')],
    specifications: [
      { name: 'Rendimiento', value: 'Hasta 20 manchas' },
      { name: 'Dilución', value: 'No aplica' },
      { name: 'pH', value: '12 (alcalino desengrasante)' },
      { name: 'Uso', value: 'Telas, tablero, puertas y cueros' },
    ],
    presentations: [{ label: '180 ml', price: 15 }],
    featured: false,
    active: true,
    inStock: true,
  },
  {
    id: 'prod-auto-09',
    slug: 'perfect-leather-hidratador-de-cueros',
    name: 'Perfect Leather — Hidratador de Cueros',
    line: 'automotriz',
    shortDescription:
      'Protege y hidrata cueros contra rayos UV con acabado elegante. Secado rápido, no grasoso.',
    description:
      'Fórmula avanzada hecha especialmente para la protección de cuero contra los rayos UV. Hidrata los cueros dejando un elegante acabado. Producto de secado rápido y no grasoso, por lo que el polvo u otros residuos no se pegan.',
    categoryId: 'cat-auto-02',
    images: [
      img('hidratador-de-cueros-perfect-leather-20-litros.jpg'),
      img('hidratador-de-cueros-perfect-leather-4-litros.jpg'),
      img('hidratador-de-cueros-perfect-leather-medio-litro.jpg'),
    ],
    specifications: [
      { name: 'Rendimiento', value: '25 aplicaciones por litro' },
      { name: 'Dilución', value: 'No aplica' },
      { name: 'Textura', value: 'Gel crema' },
      { name: 'Uso', value: 'Cuero, cuerina o similares' },
    ],
    presentations: [
      { label: '1/2 Litro', price: 35 },
      { label: '4 Litros', price: 200 },
      { label: '20 Litros', price: 900 },
    ],
    featured: false,
    active: true,
    inStock: true,
  },
  {
    id: 'prod-auto-10',
    slug: 'acondicionador-white-abrillantador-de-tablero',
    name: 'Acondicionador White — Abrillantador de Tablero',
    line: 'automotriz',
    shortDescription:
      'Protege, hidrata y restaura tablero, vinil, cueros y plásticos con brillo intenso.',
    description:
      'Acondicionador multiusos de uso automotriz que protege, hidrata, restaura el color del tablero, vinil, cueros y plásticos del vehículo dándole un brillo intenso, además de protegerlo de los rayos UV. Producto de secado rápido y no grasoso.',
    categoryId: 'cat-auto-02',
    images: [
      img('abrillantador-de-tablero-acondicionador-white-20-litros.jpg'),
      img('abrillantador-de-tablero-acondicionador-white-4-litros.jpg'),
      img('abrillantador-de-tablero-acondicionador-white-medio-litro.jpg'),
    ],
    specifications: [
      { name: 'Rendimiento', value: '30 carros por litro' },
      { name: 'Acabado', value: 'Brillante' },
      { name: 'Duración', value: 'Hasta 7 días' },
      { name: 'Aplicación', value: 'Puertas, tablero y plástico en general' },
    ],
    presentations: [
      { label: '1/2 Litro', price: 15 },
      { label: '4 Litros', price: 35 },
      { label: '20 Litros', price: 145 },
    ],
    featured: false,
    active: true,
    inStock: true,
  },
  {
    id: 'prod-auto-11',
    slug: 'acondicionador-mate-efecto-mate',
    name: 'Acondicionador Mate — Efecto Mate',
    line: 'automotriz',
    shortDescription:
      'Acabado mate que preserva la apariencia natural y sobria del interior del vehículo.',
    description:
      'Producto exclusivo que mejora y mantiene el color original del tablero, proporcionando un acabado mate que preserva la apariencia natural y sobria del interior del automóvil.',
    categoryId: 'cat-auto-02',
    images: [
      img('acondicionador-con-efecto-mate-20-litros.jpg'),
      img('acondicionador-con-efecto-mate-4-litros.jpg'),
      img('acondicionador-con-efecto-mate-medio-litro.jpg'),
    ],
    specifications: [
      { name: 'Rendimiento', value: '30 carros por litro' },
      { name: 'Acabado', value: 'Mate' },
      { name: 'Duración', value: 'Hasta 7 días' },
      { name: 'Aplicación', value: 'Puertas, tablero y plástico en general' },
    ],
    presentations: [
      { label: '1/2 Litro', price: 18 },
      { label: '4 Litros', price: 40 },
      { label: '20 Litros', price: 155 },
    ],
    featured: false,
    active: true,
    inStock: true,
  },
  {
    id: 'prod-auto-12',
    slug: 'acondicionador-ultra-crystal-acabado-aperlado',
    name: 'Acondicionador Ultra Crystal — Acabado Aperlado',
    line: 'automotriz',
    shortDescription:
      'Brillo con efecto mojado perla para interiores. Realza la apariencia interna del vehículo.',
    description:
      'Producto diseñado exclusivamente para los interiores del vehículo. Proporciona un brillo con efecto mojado perla, realzando la apariencia interna del vehículo.',
    categoryId: 'cat-auto-02',
    images: [
      img('acondicionador-acabado-aperlado-acondicionador-ultra-crystal-20-litros.jpg'),
      img('acondicionador-acabado-aperlado-acondicionador-ultra-crystal-4-litros.jpg'),
      img('acondicionador-acabado-aperlado-acondicionador-ultra-crystal-medio-litro.jpg'),
    ],
    specifications: [
      { name: 'Rendimiento', value: '66 carros por litro' },
      { name: 'Acabado', value: 'Mojado perla (aperlado)' },
      { name: 'Duración', value: 'Hasta 14 días' },
      { name: 'Aplicación', value: 'Puertas, tablero y plásticos en general' },
    ],
    presentations: [
      { label: '1/2 Litro', price: 19 },
      { label: '4 Litros', price: 50 },
      { label: '20 Litros', price: 230 },
    ],
    featured: false,
    active: true,
    inStock: true,
  },
  {
    id: 'prod-auto-13',
    slug: 'black-pearl-restaurador-de-plasticos',
    name: 'Black Pearl — Restaurador de Plásticos',
    line: 'automotriz',
    shortDescription:
      'Renueva y protege plásticos y vinil interior y exterior, devolviendo color y brillo originales.',
    description:
      'Renovador de plásticos diseñado para restaurar y proteger superficies de plástico y vinil, tanto en el interior como en el exterior de vehículos. Destaca por su resistencia al agua y su capacidad para devolver el color y brillo originales a las superficies tratadas.',
    categoryId: 'cat-auto-02',
    images: [
      img('restaurador-de-plastico-black-pearl-exterior.jpg'),
      img('restaurador-de-plastico-black-pearl-interior.jpg'),
    ],
    specifications: [
      { name: 'Rendimiento', value: '20-35 aplicaciones por 300 ml' },
      { name: 'Dilución', value: 'No aplica' },
      { name: 'Duración', value: 'Hasta 20 días' },
      { name: 'Aplicación', value: 'Puertas, tablero y plásticos en general' },
    ],
    presentations: [
      { label: '300 ml', price: 35 },
      { label: '4 Litros', price: 230 },
      { label: '20 Litros', price: 900 },
    ],
    featured: false,
    active: true,
    inStock: true,
  },
  {
    id: 'prod-auto-14',
    slug: 'heavy-pearl-ceramico-protector-de-plastico',
    name: 'Heavy Pearl — Cerámico Protector de Plástico',
    line: 'automotriz',
    shortDescription:
      'Protección cerámica duradera hasta 3 años para plásticos. Repele agua, polvo y contaminantes.',
    description:
      'Ofrece una protección al plástico duradera hasta 3 años. Repele el agua, el polvo y los contaminantes, garantizando una limpieza suave, eficaz y sin riesgos para las superficies delicadas.',
    categoryId: 'cat-auto-02',
    images: [],
    specifications: [
      { name: 'Rendimiento', value: '15-20 carros por 50 ml' },
      { name: 'Dilución', value: 'No aplica' },
      { name: 'Duración', value: 'Hasta 3 años' },
      { name: 'Propiedad', value: 'Hidrofóbico — agua y polvo' },
    ],
    presentations: [
      { label: '50 ml × 1', price: 160 },
      { label: '50 ml × 2', price: 310 },
      { label: '50 ml × 3', price: 450 },
      { label: '50 ml × 5', price: 700 },
    ],
    featured: false,
    active: false, // SIN FOTO — oculto hasta tener imagen,
    inStock: true,
  },
  {
    id: 'prod-auto-15',
    slug: 'esponjas-ninja-limpiador-espuma-absorbente',
    name: 'Esponjas Ninja — Limpiador Espuma Absorbente',
    line: 'automotriz',
    shortDescription:
      'Absorbe la suciedad de plásticos, tapicería y cueros sin esfuerzo. Ideal para limpieza al detalle.',
    description:
      'Absorbe la suciedad; solo con tela general la absorción del APC o limpiador que utilices en plásticos de las puertas y tablero sin esfuerzo. Un producto muy utilizado en el campo del detail.',
    categoryId: 'cat-auto-02',
    images: [
      img('limpiador-espuma-absorbente-de-suciedad-esponjas-ninja-1-unidad.jpg'),
      img('limpiador-espuma-absorbente-de-suciedad-esponjas-ninja-3-unidades-6-unidades.jpg'),
    ],
    specifications: [
      { name: 'Material', value: 'Microfibra con poliespuma' },
      { name: 'Aplicación', value: 'Plásticos, tapicería y cueros' },
      { name: 'Función', value: 'Absorbe la suciedad' },
    ],
    presentations: [
      { label: '1 Unidad', price: 18 },
      { label: '3 Unidades', price: 50 },
      { label: '6 Unidades', price: 95 },
    ],
    featured: false,
    active: true,
    inStock: true,
  },
  {
    id: 'prod-auto-16',
    slug: 'aromas-fancy-perfumes-automotriz',
    name: 'Aromas Fancy — Perfumes para Automóvil',
    line: 'automotriz',
    shortDescription:
      'Línea de ambientadores automotrices con fragancias seleccionadas. Frescura continua 6-8 horas.',
    description:
      'Línea de ambientadores automotrices pensada para quienes valoran el confort, el detalle y la presentación impecable de su vehículo. Cada fragancia ha sido cuidadosamente elaborada para ofrecer una sensación de frescura continua, eliminando olores no deseados y creando un ambiente agradable y duradero.',
    categoryId: 'cat-auto-02',
    images: [img('perfume-aroma-fancy.jpg')],
    specifications: [
      { name: 'Duración', value: '6-8 horas' },
      { name: 'Uso', value: 'Alfombras o ambiente del auto' },
    ],
    presentations: [
      { label: '60 ml', price: 10 },
      { label: '250 ml', price: 18 },
      { label: '4 Litros', price: 110 },
      { label: '20 Litros', price: 340 },
      { label: 'Pack 6 und de 60 ml', price: 36 },
      { label: 'Pack 12 und de 60 ml', price: 60 },
    ],
    featured: false,
    active: true,
    inStock: true,
  },

  // =========================================================================
  // DESENGRASANTES
  // =========================================================================
  {
    id: 'prod-auto-17',
    slug: 'apc-all-power-limpiador-multiproposito',
    name: 'APC All Power — Limpiador Multipropósito',
    line: 'automotriz',
    shortDescription:
      'Limpiador versátil pH 14 para aros, interiores, motor y superficies generales del vehículo.',
    description:
      'Limpiador multipropósito ideal para distintas superficies del vehículo. Su fórmula versátil y eficaz elimina la suciedad con facilidad, dejando las superficies limpias y renovadas. Dilución 1:5 en aros/neumáticos/guardafango y 1:10 en interiores, motor y uso general.',
    categoryId: 'cat-auto-04',
    images: [
      img('limpiador-de-neumaticos-apc-all-power-20-litros.jpg'),
      img('limpiador-de-neumaticos-apc-all-power-4-litros.jpg'),
      img('limpiador-de-neumaticos-apc-all-power-medio-litro.jpg'),
    ],
    specifications: [
      { name: 'Rendimiento', value: '200 carros por litro' },
      { name: 'Dilución', value: '1:5 aros/neumáticos · 1:10 interiores y general' },
      { name: 'pH', value: '14 (alcalino desengrasante)' },
      { name: 'Usos', value: 'Aros, neumáticos, tablero, tapiz, cuero, pintura, vidrio, plástico y metal' },
    ],
    presentations: [
      { label: '1/2 Litro', price: 18 },
      { label: '4 Litros', price: 50 },
      { label: '20 Litros', price: 170 },
    ],
    featured: true,
    active: true,
    inStock: true,
  },
  {
    id: 'prod-auto-18',
    slug: 'beart-degreaser-desengrasante-de-aros',
    name: 'Beart Degreaser — Desengrasante de Aros',
    line: 'automotriz',
    shortDescription:
      'Desengrasante especializado para aros. pH 14, sin dilución. Rinde 8 carros por litro.',
    description:
      'Producto limpiador ideal para los aros del vehículo. Su fórmula versátil y eficaz elimina la suciedad con facilidad, dejando las superficies limpias y renovadas, facilitando el mantenimiento integral.',
    categoryId: 'cat-auto-04',
    images: [
      img('desengrasante-de-aros-beart-degreaser-4-litros.jpg'),
      img('desengrasante-de-aros-beart-degreaser-medio-litro.jpg'),
      img('desenrasante-de-aros-beart-degreaser-20-litros.jpg'),
    ],
    specifications: [
      { name: 'Rendimiento', value: '8 carros por litro' },
      { name: 'Dilución', value: 'No aplica' },
      { name: 'pH', value: '14 (alcalino desengrasante)' },
      { name: 'Uso', value: 'Solo aros' },
    ],
    presentations: [
      { label: '1/2 Litro', price: 18 },
      { label: '4 Litros', price: 45 },
      { label: '20 Litros', price: 160 },
    ],
    featured: false,
    active: true,
    inStock: true,
  },
  {
    id: 'prod-auto-19',
    slug: 'green-monster-desengrasante-de-motor',
    name: 'Green Monster — Desengrasante de Motor',
    line: 'automotriz',
    shortDescription:
      'Desengrasante de motor que elimina eficazmente la grasa acumulada. Dilución 1:1.',
    description:
      'Desengrasante de motor diseñado para eliminar eficazmente la grasa acumulada en los motores. Dilución 1:1 y rendimiento de 30-40 motores por litro diluido.',
    categoryId: 'cat-auto-04',
    images: [],
    specifications: [
      { name: 'Rendimiento', value: '30-40 motores por litro diluido' },
      { name: 'Dilución', value: '1:1' },
      { name: 'pH', value: '12 (alcalino desengrasante)' },
      { name: 'Uso', value: 'Motor' },
    ],
    presentations: [
      { label: '1/2 Litro', price: 18 },
      { label: '4 Litros', price: 45 },
      { label: '20 Litros', price: 160 },
    ],
    featured: false,
    active: false, // SIN FOTO — oculto hasta tener imagen,
    inStock: true,
  },
  {
    id: 'prod-auto-20',
    slug: 'new-metal-quita-oxido',
    name: 'New Metal — Quita Óxido',
    line: 'automotriz',
    shortDescription:
      'Elimina el óxido del metal del vehículo sin dañar la pintura ni las piezas tratadas.',
    description:
      'Producto exclusivo diseñado para devolverle la vida al metal de tu vehículo. Su fórmula especializada actúa de manera efectiva sobre superficies oxidadas, removiendo el óxido sin dañar la pintura ni las piezas tratadas.',
    categoryId: 'cat-auto-04',
    images: [],
    specifications: [
      { name: 'Rendimiento', value: '10-20 aplicaciones por litro' },
      { name: 'Dilución', value: 'No aplica' },
      { name: 'pH', value: '1-2 (ácido)' },
      { name: 'Uso', value: 'Desincrusta el óxido del metal' },
    ],
    presentations: [
      { label: '1/2 Litro', price: 25 },
      { label: '4 Litros', price: 59 },
      { label: '20 Litros', price: 170 },
    ],
    featured: false,
    active: false, // SIN FOTO — oculto hasta tener imagen,
    inStock: true,
  },

  // =========================================================================
  // SHAMPOOS Y CERAS
  // =========================================================================
  {
    id: 'prod-auto-21',
    slug: 'shampoo-ultra-wax-con-cera-ph-neutro',
    name: 'Shampoo Ultra Wax — Con Cera pH Neutro',
    line: 'automotriz',
    shortDescription:
      'Shampoo pH neutro con cera. Ideal para vehículos con cerámico. Fácil enjuague, sin residuos.',
    description:
      'Shampoo automotriz con pH neutro (no ácido ni alcalino), ideal para vehículos con tratamiento cerámico y carrocería descontaminada. Fácil de enjuagar, sin residuos y con abundante espuma. Sus agentes limpiadores eliminan la mugre y encapsulan partículas contaminantes.',
    categoryId: 'cat-auto-03',
    images: [
      img('champu-con-cera-ph-neutro-shampoo-ultra-wax-20-litros.jpg'),
      img('champu-con-cera-ph-neutro-shampoo-ultra-wax-4-litros.jpg'),
      img('champu-con-cera-ph-neutro-shampoo-ultra-wax-500-ml.jpg'),
    ],
    specifications: [
      { name: 'Rendimiento', value: '50 carros por litro' },
      { name: 'Dilución', value: 'Shamponera 20L: 300 ml · 1L: 80-100 ml' },
      { name: 'pH', value: '7 (neutro)' },
      { name: 'Uso', value: 'Vehículos con o sin tratamiento cerámico' },
    ],
    presentations: [
      { label: '500 ml', price: 13 },
      { label: '4 Litros', price: 30 },
      { label: '20 Litros', price: 100 },
    ],
    featured: true,
    active: true,
    inStock: true,
  },
  {
    id: 'prod-auto-22',
    slug: 'shampoo-sky-lite-sin-cera-ph-neutro',
    name: 'Shampoo Sky Lite — Sin Cera pH Neutro',
    line: 'automotriz',
    shortDescription:
      'Shampoo pH neutro sin cera. Limpieza eficaz con espuma abundante y enjuague rápido.',
    description:
      'Limpia eficazmente el vehículo, eliminando suciedad y dejando un acabado brillante. Su fórmula genera espuma abundante para una mejor cobertura y permite un enjuague rápido, evitando residuos y manchas.',
    categoryId: 'cat-auto-03',
    images: [
      img('champu-sin-cera-ph-neutro-shampoo-sky-lite-20-litros.jpg'),
      img('champu-sin-cera-ph-neutro-shampoo-sky-lite-4-litros.jpg'),
      img('champu-sin-cera-ph-neutro-shampoo-sky-lite-500-ml.jpg'),
    ],
    specifications: [
      { name: 'Rendimiento', value: '45 carros por litro' },
      { name: 'Dilución', value: 'Shamponera 20L: 400 ml · 1L: 100 ml' },
      { name: 'pH', value: '7 (neutro)' },
      { name: 'Uso', value: 'Vehículos con o sin cerámico' },
    ],
    presentations: [
      { label: '500 ml', price: 8 },
      { label: '4 Litros', price: 20 },
      { label: '20 Litros', price: 75 },
    ],
    featured: false,
    active: true,
    inStock: true,
  },
  {
    id: 'prod-auto-23',
    slug: 'shampoo-alcalino-desengrasante',
    name: 'Shampoo Alcalino — Nivel Desengrasante',
    line: 'automotriz',
    shortDescription:
      'Shampoo pH 13 altamente desengrasante. Ideal para preparar vehículos antes del cerámico.',
    description:
      'Limpiador automotriz con pH alcalino, altamente desengrasante, ideal para preparar vehículos antes de aplicar tratamientos cerámicos. No se recomienda su uso en autos con cerámico ya aplicado debido a su fuerte acción desengrasante.',
    categoryId: 'cat-auto-03',
    images: [
      img('champu-alcalino-ph-nivel-desengrasante-20-litros.jpg'),
      img('champu-alcalino-ph-nivel-desengrasante-4-litros.jpg'),
      img('champu-alcalino-ph-nivel-desengrasante-medio-litro.jpg'),
    ],
    specifications: [
      { name: 'Rendimiento', value: '50 carros por litro' },
      { name: 'Dilución', value: 'Shamponera 20L: 300 ml · 1L: 80-100 ml' },
      { name: 'pH', value: '13 (alcalino desengrasante)' },
      { name: 'Uso', value: 'Preparación pre-cerámico' },
    ],
    presentations: [
      { label: '1/2 Litro', price: 13 },
      { label: '4 Litros', price: 35 },
      { label: '20 Litros', price: 110 },
    ],
    featured: false,
    active: true,
    inStock: true,
  },
  {
    id: 'prod-auto-24',
    slug: 'shampoo-ceramic-foam-wax-sio2-grafeno',
    name: 'Shampoo Ceramic Foam Wax — SiO2 y Grafeno',
    line: 'automotriz',
    shortDescription:
      'Shampoo 2 en 1 con cerámico SiO2 y grafeno. Limpieza profunda con protección duradera.',
    description:
      'Shampoo con cerámico diseñado para proporcionar una limpieza profunda y protección duradera a la pintura del vehículo. La tecnología cerámica ayuda a crear una barrera protectora que repele el agua y la suciedad.',
    categoryId: 'cat-auto-03',
    images: [],
    specifications: [
      { name: 'Rendimiento', value: '50 carros por litro' },
      { name: 'Dilución', value: 'No aplica' },
      { name: 'pH', value: '7 (neutro)' },
      { name: 'Tipo', value: '2 en 1 — shampoo con protección cerámica hidrofóbica' },
    ],
    presentations: [
      { label: '1/2 Litro', price: 38 },
      { label: '4 Litros', price: 290 },
      { label: '20 Litros', price: 1400 },
    ],
    featured: false,
    active: false, // SIN FOTO — oculto hasta tener imagen,
    inStock: true,
  },
  {
    id: 'prod-auto-25',
    slug: 'eco-premium-lavado-ecologico-exterior',
    name: 'Eco Premium — Lavado Ecológico Exterior',
    line: 'automotriz',
    shortDescription:
      'Lavado en seco sin agua usando solo dos microfibras. Rinde hasta 10-15 carros.',
    description:
      'Producto de limpieza en seco diseñado para limpiar vehículos utilizando solo dos microfibras, sin necesidad de agua. Ideal para lavado rápido y sin desperdicio.',
    categoryId: 'cat-auto-03',
    images: [
      img('lavado-ecologico-exterior-eco-premium-1-litro-4-litros-20-litros.jpg'),
    ],
    specifications: [
      { name: 'Rendimiento', value: 'Hasta 10-15 carros' },
      { name: 'Dilución', value: 'No aplica' },
      { name: 'pH', value: '7 (neutro)' },
      { name: 'Uso', value: 'Pintura, vidrio, plástico, metal, cromo y neumático' },
    ],
    presentations: [
      { label: '1 Litro', price: 25 },
      { label: '4 Litros', price: 75 },
      { label: '20 Litros', price: 250 },
    ],
    featured: false,
    active: true,
    inStock: true,
  },
  {
    id: 'prod-auto-26',
    slug: 'new-glass-limpia-parabrisas',
    name: 'New Glass — Limpia Parabrisas',
    line: 'automotriz',
    shortDescription:
      'Líquido concentrado desempañante que elimina suciedad y grasa del vidrio.',
    description:
      'Líquido concentrado con propiedades desempañantes para el vidrio de los vehículos. Elimina la suciedad completa e incluso la grasa, permitiendo una adecuada visibilidad.',
    categoryId: 'cat-auto-03',
    images: [
      img('limpia-parabrisas-new-glass-4-litros.jpg'),
      img('limpia-parabrisas-new-glass-medio-litro.jpg'),
    ],
    specifications: [
      { name: 'Rendimiento', value: '40 aplicaciones diluido' },
      { name: 'Dilución', value: '1:1 (1 parte agua, 1 parte producto)' },
      { name: 'pH', value: '7 (neutro)' },
      { name: 'Uso', value: 'Vidrio' },
    ],
    presentations: [
      { label: '1/2 Litro', price: 8 },
      { label: '4 Litros', price: 18 },
      { label: '20 Litros', price: 70 },
    ],
    featured: false,
    active: true,
    inStock: true,
  },
  {
    id: 'prod-auto-27',
    slug: 'window-cleaner-quita-manchas-de-parabrisas',
    name: 'Window Cleaner — Quita Manchas de Parabrisas',
    line: 'automotriz',
    shortDescription:
      'Elimina manchas difíciles del vidrio: marcas de agua, huellas e insectos. Sin rayar.',
    description:
      'Producto especializado para limpiar vidrios. Elimina manchas difíciles como marcas de agua, huellas dactilares y residuos de insectos. Deja las lunas transparentes y sin residuos, sin rayar el vidrio. Ideal para lunas de vehículos.',
    categoryId: 'cat-auto-03',
    images: [
      img('quinta-manchas-de-parabrisas-window-cleaner-1-unidad-5-unidades.jpg'),
      img('quinta-manchas-de-parabrisas-window-cleaner-2-unidades.jpg'),
    ],
    specifications: [
      { name: 'Rendimiento', value: '7-10 carros' },
      { name: 'Dilución', value: 'No aplica' },
      { name: 'pH', value: '7 (neutro)' },
      { name: 'Uso', value: 'Vidrio' },
    ],
    presentations: [
      { label: '1 Unidad', price: 30 },
      { label: '2 Unidades', price: 50 },
      { label: '5 Unidades', price: 100 },
    ],
    featured: false,
    active: true,
    inStock: true,
  },
  {
    id: 'prod-auto-28',
    slug: 'electric-foam-champonera-electrica-2-litros',
    name: 'Electric Foam — Champonera Eléctrica 2L',
    line: 'automotriz',
    shortDescription:
      'Máquina que aplica hasta 100 ml de shampoo uniformemente. Bomba eléctrica con carga tipo C.',
    description:
      'Máquina que facilita el lavado de vehículos, aplicando solo 100 ml de shampoo como máximo de manera uniforme y eficiente. Con bomba eléctrica regula la presión y el flujo de agua/shampoo, permitiendo un lavado rápido y sin esfuerzo. Ideal para lavados frecuentes o profesionales.',
    categoryId: 'cat-auto-03',
    images: [img('champunera-electrica-electric-foam-2-litros.jpg')],
    specifications: [
      { name: 'Capacidad', value: '2 litros' },
      { name: 'Duración', value: '30 minutos de uso' },
      { name: 'Soporta', value: 'pH neutro (7)' },
      { name: 'Carga', value: 'Entrada tipo C' },
    ],
    presentations: [{ label: '2 Litros', price: 150 }],
    featured: false,
    active: true,
    inStock: true,
  },
  {
    id: 'prod-auto-29',
    slug: 'canon-de-espuma-champonera-manual-1-litro',
    name: 'Cañón de Espuma — Champonera Manual de Hidro',
    line: 'automotriz',
    shortDescription:
      'Aplica espuma de shampoo uniformemente conectada a la manguera. Trabaja con hidrolavadora.',
    description:
      'Herramienta para aplicar espuma de shampoo de manera uniforme y eficiente en vehículos. Conecta a la manguera, ajusta la mezcla y cubre grandes áreas rápidamente, reduciendo el riesgo de rayones. Ideal para detailing profesional o casero.',
    categoryId: 'cat-auto-03',
    images: [
      img('champunera-manual-de-hidro-canon-de-espuma-1-litro.jpg'),
    ],
    specifications: [
      { name: 'Capacidad', value: '1 litro' },
      { name: 'Conexión', value: 'Manguera / pistola de hidrolavadora' },
      { name: 'Soporte', value: 'Todos los niveles de pH' },
    ],
    presentations: [{ label: '1 Litro', price: 100 }],
    featured: false,
    active: true,
    inStock: true,
  },
  {
    id: 'prod-auto-30',
    slug: 'manopla-neo-green-cerdas-de-gusano',
    name: 'Manopla Neo Green — Cerdas de Gusano',
    line: 'automotriz',
    shortDescription:
      'Manopla multiusos de microfibra para lavado de vehículos con cerdas de gusano.',
    description:
      'Manopla multiusos, accesorio de limpieza diseñado para facilitar el lavado de vehículos, proporcionando una limpieza eficiente y cuidadosa de la superficie del automóvil.',
    categoryId: 'cat-auto-03',
    images: [],
    specifications: [
      { name: 'Material', value: 'Microfibra poliéster' },
      { name: 'Uso', value: 'Manual tipo guante' },
      { name: 'Modelo', value: 'Cerdas de gusano' },
    ],
    presentations: [{ label: '1 Unidad', price: 18 }],
    featured: false,
    active: false, // SIN FOTO — oculto hasta tener imagen,
    inStock: true,
  },
  {
    id: 'prod-auto-31',
    slug: 'manopla-black-premium-cerdas-finas',
    name: 'Manopla Black Premium — Cerdas Finas',
    line: 'automotriz',
    shortDescription:
      'Manopla de microfibra de alta calidad. Limpieza suave sin rayar, ideal para pintura delicada.',
    description:
      'Manopla de microfibra de alta calidad, diseñada para limpiar vehículos de manera suave y efectiva. Absorbe agua y shampoo, dejando la superficie impecable sin rayar la pintura. Ideal para vehículos de alta gama o pinturas delicadas.',
    categoryId: 'cat-auto-03',
    images: [
      img('manopla-cerdas-finas-black-premium-1-unidad.jpg'),
    ],
    specifications: [
      { name: 'Material', value: 'Hilos de microfibra y algodón' },
      { name: 'Uso', value: 'Manual tipo guante' },
      { name: 'Modelo', value: 'Hilos suaves de algodón' },
    ],
    presentations: [{ label: '1 Unidad', price: 25 }],
    featured: false,
    active: true,
    inStock: true,
  },
  {
    id: 'prod-auto-32',
    slug: 'clay-bar-descontaminador-de-carroceria',
    name: 'Clay Bar — Descontaminador de Carrocería',
    line: 'automotriz',
    shortDescription:
      'Elimina contaminantes adheridos a la pintura: alquitrán, polvo de frenos y savia.',
    description:
      'Herramienta de limpieza profunda para eliminar contaminantes adheridos a la pintura del vehículo, como residuos de alquitrán, polvo de frenos, partículas metálicas y savia de árboles.',
    categoryId: 'cat-auto-03',
    images: [img('descontaminador-de-carroceria-clay-bar-1-unidad.jpg')],
    specifications: [
      { name: 'Rendimiento', value: 'Hasta 15 carros' },
      { name: 'Peso', value: '150 gramos' },
      { name: 'Presentación', value: 'Pote con 1 arcilla rectangular' },
    ],
    presentations: [{ label: 'Unidad', price: 35 }],
    featured: false,
    active: true,
    inStock: true,
  },
  {
    id: 'prod-auto-33',
    slug: 'clay-towel-descontaminador-modelo-microfibra',
    name: 'Clay Towel — Descontaminador Modelo Microfibra',
    line: 'automotriz',
    shortDescription:
      'Descontaminador en microfibra de rápida y fácil aplicación. No daña la pintura.',
    description:
      'Sin esfuerzo, de rápida y fácil aplicación. Fabricada con una escala nanométrica de resina importada y polvo de carbón. Tiene buena detergencia y no daña la pintura.',
    categoryId: 'cat-auto-03',
    images: [img('descontaminador-modelo-microfibra-clay-towel.jpg')],
    specifications: [
      { name: 'Rendimiento', value: 'Hasta 20 carros' },
      { name: 'Modelo', value: 'Microfibra con jebe descontaminadora' },
      { name: 'Medida', value: '40 × 40 cm' },
    ],
    presentations: [{ label: 'Unidad', price: 49 }],
    featured: false,
    active: true,
    inStock: true,
  },
  {
    id: 'prod-auto-34',
    slug: 'shine-wax-cera-abrillantadora-carnauba',
    name: 'Shine Wax — Cera Abrillantadora de Carnauba',
    line: 'automotriz',
    shortDescription:
      'Cera de carnauba líquida con brillo superior y protección duradera de 7-10 días.',
    description:
      'Cera de carnauba diseñada para proporcionar un brillo superior a la pintura de los vehículos. Realza el color y ofrece una protección duradera contra agentes externos.',
    categoryId: 'cat-auto-03',
    images: [],
    specifications: [
      { name: 'Duración', value: '7-10 días' },
      { name: 'Rendimiento', value: 'Hasta 15 carros' },
      { name: 'Presentación', value: 'Acuoso líquido' },
      { name: 'Acabado', value: 'Brillante' },
    ],
    presentations: [
      { label: '1/2 Litro', price: 28 },
      { label: '4 Litros', price: 130 },
      { label: '20 Litros', price: 650 },
    ],
    featured: false,
    active: false, // SIN FOTO — oculto hasta tener imagen,
    inStock: true,
  },
  {
    id: 'prod-auto-35',
    slug: 'hard-coating-cera-liquida-hidrofobica-sio2',
    name: 'Hard Coating — Cera Líquida Hidrofóbica SiO2',
    line: 'automotriz',
    shortDescription:
      'Cera con grafeno de alta protección. Efecto hidrofóbico duradero hasta 8 meses.',
    description:
      'Cera con recubrimiento de grafeno diseñada para proteger la carrocería del vehículo, ofreciendo propiedades hidrofóbicas que repelen agua y polvo, y proporcionando un alto brillo. Su efecto de protección puede durar hasta 8 meses.',
    categoryId: 'cat-auto-03',
    images: [],
    specifications: [
      { name: 'Duración', value: '6-8 meses' },
      { name: 'Rendimiento', value: 'Hasta 15 carros' },
      { name: 'Acabado', value: 'Cerámico de fácil uso, hidrofóbico' },
    ],
    presentations: [
      { label: '1/2 Litro', price: 45 },
      { label: '4 Litros', price: 350 },
    ],
    featured: false,
    active: false, // SIN FOTO — oculto hasta tener imagen,
    inStock: true,
  },
  {
    id: 'prod-auto-36',
    slug: 'silver-paste-wax-cera-en-pasta-hidrofobica',
    name: 'Silver Paste Wax — Cera en Pasta Hidrofóbica SiO2',
    line: 'automotriz',
    shortDescription:
      'Cera en pasta con carnauba y polímeros. Brillo profundo y protección de 6-8 meses.',
    description:
      'Cera en pasta con repelencia al agua de alta calidad que brinda un brillo profundo y protección duradera. Su fórmula con carnauba y polímeros resalta el color del vehículo y deja un acabado brillante.',
    categoryId: 'cat-auto-03',
    images: [
      img('cera-en-pasta-hidrofobica-si02-silver-paste-wax-200ml.jpg'),
    ],
    specifications: [
      { name: 'Duración', value: '6-8 meses' },
      { name: 'Rendimiento', value: 'Hasta 20 carros' },
      { name: 'Presentación', value: 'Pasta' },
      { name: 'Acabado', value: 'Cerámico de fácil uso, hidrofóbico' },
    ],
    presentations: [{ label: '200 ml', price: 50 }],
    featured: false,
    active: true,
    inStock: true,
  },

  // =========================================================================
  // MICROFIBRAS
  // =========================================================================
  {
    id: 'prod-auto-37',
    slug: 'microfibra-basica-42x72-peluche',
    name: 'Microfibra Básica 42×72 — Modelo Peluche',
    line: 'automotriz',
    shortDescription:
      'Microfibra de uso general con 300 g/m². Ideal para lavado y limpieza diaria.',
    description:
      'Microfibra AutoPremium Perú: limpieza sin rayas, resultados profesionales. Diseñadas para ofrecer un desempeño superior en cada etapa del detallado automotriz, con una limpieza suave, eficaz y sin riesgos para la pintura.',
    categoryId: 'cat-auto-06',
    images: [],
    specifications: [
      { name: 'Medida', value: '42 × 72 cm' },
      { name: 'Gramaje', value: '300 g/m²' },
      { name: 'Uso', value: 'General' },
    ],
    presentations: [
      { label: 'Unidad', price: 6 },
      { label: 'Pack 12 und (S/ 4.50 c/u)', price: 54 },
    ],
    featured: false,
    active: false, // SIN FOTO — oculto hasta tener imagen,
    inStock: true,
  },
  {
    id: 'prod-auto-38',
    slug: 'raimbow-30x40-microfibra',
    name: 'Raimbow 30×40 — Microfibra',
    line: 'automotriz',
    shortDescription:
      'Microfibra 400 g/m² para limpieza interior y secado básico.',
    description:
      'Microfibra AutoPremium Perú: limpieza sin rayas, resultados profesionales. Diseñadas para ofrecer un desempeño superior en cada etapa del detallado automotriz, con una limpieza suave, eficaz y sin riesgos para la pintura.',
    categoryId: 'cat-auto-06',
    images: [],
    specifications: [
      { name: 'Medida', value: '30 × 40 cm' },
      { name: 'Gramaje', value: '400 g/m²' },
      { name: 'Uso', value: 'Limpieza interior y secado básico' },
    ],
    presentations: [
      { label: 'Unidad', price: 10 },
      { label: 'Pack 6 und (S/ 8 c/u)', price: 48 },
    ],
    featured: false,
    active: false, // SIN FOTO — oculto hasta tener imagen,
    inStock: true,
  },
  {
    id: 'prod-auto-39',
    slug: 'raimbow-40x60-microfibra',
    name: 'Raimbow 40×60 — Microfibra',
    line: 'automotriz',
    shortDescription:
      'Microfibra 400 g/m² formato grande para limpieza interior y secado básico.',
    description:
      'Microfibra AutoPremium Perú: limpieza sin rayas, resultados profesionales. Diseñadas para ofrecer un desempeño superior en cada etapa del detallado automotriz, con una limpieza suave, eficaz y sin riesgos para la pintura.',
    categoryId: 'cat-auto-06',
    images: [],
    specifications: [
      { name: 'Medida', value: '40 × 60 cm' },
      { name: 'Gramaje', value: '400 g/m²' },
      { name: 'Uso', value: 'Limpieza interior y secado básico' },
    ],
    presentations: [
      { label: 'Unidad', price: 20 },
      { label: 'Pack 6 und (S/ 17 c/u)', price: 102 },
    ],
    featured: false,
    active: false, // SIN FOTO — oculto hasta tener imagen,
    inStock: true,
  },
  {
    id: 'prod-auto-40',
    slug: 'microfibra-sin-borde-peluche-detail',
    name: 'Microfibra Sin Borde — Peluche Uso Detail',
    line: 'automotriz',
    shortDescription:
      'Microfibra 500 g/m² sin bordes para aplicación de productos en etapa de detail.',
    description:
      'Microfibra AutoPremium Perú: limpieza sin rayas, resultados profesionales. Diseñadas para ofrecer un desempeño superior en cada etapa del detallado automotriz, con una limpieza suave, eficaz y sin riesgos para la pintura.',
    categoryId: 'cat-auto-06',
    images: [],
    specifications: [
      { name: 'Medida', value: '40 × 60 cm' },
      { name: 'Gramaje', value: '500 g/m²' },
      { name: 'Uso', value: 'Detail' },
    ],
    presentations: [
      { label: 'Unidad', price: 20 },
      { label: 'Pack 3 und', price: 45 },
    ],
    featured: false,
    active: false, // SIN FOTO — oculto hasta tener imagen,
    inStock: true,
  },
  {
    id: 'prod-auto-41',
    slug: 'microfibra-absorbente-60x90-secado',
    name: 'Microfibra Absorbente 60×90 — Secado',
    line: 'automotriz',
    shortDescription:
      'Microfibra súper absorbente de 750 g/m² en formato grande para secado rápido.',
    description:
      'Microfibra AutoPremium Perú: limpieza sin rayas, resultados profesionales. Diseñadas para ofrecer un desempeño superior en cada etapa del detallado automotriz, con una limpieza suave, eficaz y sin riesgos para la pintura.',
    categoryId: 'cat-auto-06',
    images: [],
    specifications: [
      { name: 'Medida', value: '60 × 90 cm' },
      { name: 'Gramaje', value: '750 g/m²' },
      { name: 'Uso', value: 'Secado' },
    ],
    presentations: [
      { label: 'Unidad', price: 55 },
      { label: 'Pack 6 und (S/ 50 c/u)', price: 300 },
    ],
    featured: false,
    active: false, // SIN FOTO — oculto hasta tener imagen,
    inStock: true,
  },

  // =========================================================================
  // DETAILING
  // =========================================================================
  {
    id: 'prod-auto-42',
    slug: 'heavy-cut-pulidor-paso-1-corte-alto',
    name: 'Heavy Cut — Pulidor Paso 1: Corte Alto',
    line: 'automotriz',
    shortDescription:
      'Compuesto de corte pesado (granos 200-400) para eliminar imperfecciones profundas y rayones.',
    description:
      'Para pulido grueso/corte pesado. Primer paso del proceso de corrección de pintura. Granos gruesos (200-400): elimina imperfecciones profundas y rayones en la pintura. Herramientas recomendadas: pulidora de órbita/rotativa, almohadilla de lana o de espuma mediana.',
    categoryId: 'cat-auto-05',
    images: [],
    specifications: [
      { name: 'Corte', value: 'Primer paso — nivel alto/grueso' },
      { name: 'Granos', value: '200-400' },
      { name: 'Rendimiento', value: '4-6 carros' },
      { name: 'Herramienta', value: 'Pulidora órbita/rotativa + almohadilla de lana o espuma' },
    ],
    presentations: [
      { label: '1 Unidad', price: 45 },
      { label: '2 Unidades', price: 80 },
      { label: '3 Unidades', price: 119 },
    ],
    featured: false,
    active: false, // SIN FOTO — oculto hasta tener imagen,
    inStock: true,
  },
  {
    id: 'prod-auto-43',
    slug: 'half-cut-pulidor-paso-2-corte-medio',
    name: 'Half Cut — Pulidor Paso 2: Corte Medio',
    line: 'automotriz',
    shortDescription:
      'Compuesto de microcorte (granos 800-1500) para acabado suave y brillante.',
    description:
      'Para pulido moderado / microcorte. Segundo paso del proceso de corrección. Grano medio (800-1500): proporciona un acabado suave y brillante. Herramientas recomendadas: pulidora Ro, almohadilla de espuma para pulir.',
    categoryId: 'cat-auto-05',
    images: [],
    specifications: [
      { name: 'Corte', value: 'Segundo paso — nivel medio' },
      { name: 'Granos', value: '800-1500' },
      { name: 'Rendimiento', value: '4-10 carros' },
      { name: 'Herramienta', value: 'Pulidora Ro + almohadilla de espuma' },
    ],
    presentations: [
      { label: '1 Unidad', price: 45 },
      { label: '2 Unidades', price: 80 },
      { label: '3 Unidades', price: 119 },
    ],
    featured: false,
    active: false, // SIN FOTO — oculto hasta tener imagen,
    inStock: true,
  },
  {
    id: 'prod-auto-44',
    slug: 'mirror-cut-pulidor-paso-3-corte-fino',
    name: 'Mirror Cut — Pulidor Paso 3: Corte Fino',
    line: 'automotriz',
    shortDescription:
      'Compuesto de grano ultrafino (2000-3000) para acabado espejo final.',
    description:
      'Para pulido fino. Tercer paso final del proceso de corrección. Granos ultrafinos (2000-3000): acabado extremadamente suave y brillante. Recomendado: pulidora Ro, almohadilla de espuma de acabado.',
    categoryId: 'cat-auto-05',
    images: [],
    specifications: [
      { name: 'Corte', value: 'Tercer paso — nivel fino' },
      { name: 'Granos', value: '2000-3000' },
      { name: 'Rendimiento', value: 'Hasta 20 manchas' },
      { name: 'Herramienta', value: 'Pulidora Ro + almohadilla de acabado' },
    ],
    presentations: [
      { label: '1 Unidad', price: 45 },
      { label: '2 Unidades', price: 80 },
      { label: '3 Unidades', price: 119 },
    ],
    featured: false,
    active: false, // SIN FOTO — oculto hasta tener imagen,
    inStock: true,
  },
  {
    id: 'prod-auto-45',
    slug: 'glas-cut-pulidor-de-lunas',
    name: 'Glas Cut — Pulidor de Lunas',
    line: 'automotriz',
    shortDescription:
      'Compuesto de pulido de vidrio con óxidos de tierras raras para acabado espejo.',
    description:
      'Compuesto de pulido de vidrio utilizado por técnicos de esmaltado de vidrio de todo el mundo. Fórmula única de crema suspendida con alta concentración de óxidos de tierras raras para proporcionar el acabado más brillante posible en todas las aplicaciones.',
    categoryId: 'cat-auto-05',
    images: [],
    specifications: [
      { name: 'Rendimiento', value: '5-8 carros' },
      { name: 'Presentación', value: 'Crema' },
      { name: 'Accesorio', value: 'Esponja de fieltro' },
      { name: 'Uso', value: 'Vidrio / lunas' },
    ],
    presentations: [
      { label: '1 Unidad', price: 39 },
      { label: '2 Unidades', price: 70 },
      { label: '6+ Unidades', price: 198 },
    ],
    featured: false,
    active: false, // SIN FOTO — oculto hasta tener imagen,
    inStock: true,
  },
  {
    id: 'prod-auto-46',
    slug: 'lights-cut-pulidor-de-faros',
    name: 'Lights Cut — Pulidor de Faros',
    line: 'automotriz',
    shortDescription:
      'Restaura faros opacos y amarillentos en minutos. Incluye toallita selladora protectora.',
    description:
      'Restaura faros opacos y amarillentos en minutos. Elimina decoloración y arañazos para dejarlos como nuevos. Incluye toallita selladora que protege contra el futuro amarilleo. Remueve oxidación media sin usar taladro ni herramientas eléctricas.',
    categoryId: 'cat-auto-05',
    images: [],
    specifications: [
      { name: 'Rendimiento', value: '6-10 carros' },
      { name: 'Presentación', value: 'Crema' },
      { name: 'Uso', value: 'Faros opacos y amarillentos' },
    ],
    presentations: [
      { label: '1 Unidad', price: 39 },
      { label: '2 Unidades', price: 70 },
      { label: '6+ Unidades', price: 198 },
    ],
    featured: false,
    active: false, // SIN FOTO — oculto hasta tener imagen,
    inStock: true,
  },
  {
    id: 'prod-auto-47',
    slug: 'pre-shine-preparador-de-superficie',
    name: 'Pre Shine — Preparador de Superficie',
    line: 'automotriz',
    shortDescription:
      'Prepara la superficie antes de cerámicos o ceras para adhesión óptima.',
    description:
      'Producto diseñado para preparar la superficie del vehículo antes de la aplicación de tratamientos cerámicos o ceras, asegurando una adhesión óptima y un acabado de alta calidad.',
    categoryId: 'cat-auto-05',
    images: [],
    specifications: [
      { name: 'Rendimiento', value: '10-15 carros' },
      { name: 'pH', value: '7 (neutro)' },
      { name: 'Uso', value: 'Toda la superficie' },
    ],
    presentations: [
      { label: '1/2 Litro', price: 20 },
      { label: '4 Litros', price: 50 },
      { label: '20 Litros', price: 99 },
    ],
    featured: false,
    active: false, // SIN FOTO — oculto hasta tener imagen,
    inStock: true,
  },

  // =========================================================================
  // ACCESORIOS
  // =========================================================================
  {
    id: 'prod-auto-48',
    slug: 'kit-brochas-jabali-hard-surface',
    name: 'Kit de Brochas Jabalí — Hard Surface',
    line: 'automotriz',
    shortDescription:
      'Set de 5 brochas de jabalí en medidas 10-18 para detailing de zonas delicadas.',
    description:
      'Set de cinco brochas de diferentes tamaños, ideales para limpiar y detallar con precisión las zonas más delicadas y de difícil acceso del vehículo. Diseño ergonómico y cerdas suaves que permiten una limpieza eficaz sin dañar superficies. Perfectas para interiores, rejillas, emblemas y llantas.',
    categoryId: 'cat-auto-07',
    images: [
      img('kit-de-brochas-de-jabali-hard-surface-kit-5-unidades.jpg'),
    ],
    specifications: [
      { name: 'Material', value: 'Jabalí' },
      { name: 'Medidas', value: '10, 12, 14, 16 y 18' },
      { name: 'Aplicación', value: 'Puertas, tablero, motor y aros' },
      { name: 'Uso', value: 'Manual' },
    ],
    presentations: [{ label: 'Kit 5 Unidades', price: 45 }],
    featured: false,
    active: true,
    inStock: true,
  },
  {
    id: 'prod-auto-49',
    slug: 'kit-brochas-cerdas-finas-fine-surface',
    name: 'Kit de Brochas Cerdas Finas — Fine Surface',
    line: 'automotriz',
    shortDescription:
      'Set de 4 brochas de cerdas finas en medidas 12-18 para superficies delicadas.',
    description:
      'Set de cuatro brochas de diferentes tamaños, ideales para limpiar y detallar con precisión las zonas más delicadas y de difícil acceso del vehículo. Diseño ergonómico y cerdas suaves que permiten una limpieza eficaz sin dañar superficies. Perfectas para pantallas y superficies delicadas.',
    categoryId: 'cat-auto-07',
    images: [
      img('kit-de-brochas-cerdas-finas-fine-surface-kit-de-4-unidades.jpg'),
    ],
    specifications: [
      { name: 'Material', value: 'Cerdas finas' },
      { name: 'Medidas', value: '12, 14, 16 y 18' },
      { name: 'Aplicación', value: 'Pantallas y superficies delicadas' },
      { name: 'Uso', value: 'Manual' },
    ],
    presentations: [{ label: 'Kit 4 Unidades', price: 55 }],
    featured: false,
    active: true,
    inStock: true,
  },
  {
    id: 'prod-auto-50',
    slug: 'black-gloves-guantes-de-nitrilo',
    name: 'Black Gloves — Guantes de Nitrilo',
    line: 'automotriz',
    shortDescription:
      'Guantes de nitrilo negro, alta resistencia química y durabilidad. Pack de 50 pares.',
    description:
      'De nitrilo negro, fabricados con caucho sintético (nitrilo butadieno), una alternativa al látex natural. Conocidos por su alta resistencia química, durabilidad y excelente adaptabilidad a la mano. Versátiles para todos los productos del catálogo.',
    categoryId: 'cat-auto-07',
    images: [img('guantes-de-nitrilo-black-gloves-50-pares.jpg')],
    specifications: [
      { name: 'Material', value: 'Nitrilo elástico' },
      { name: 'Gramaje', value: '6.5' },
      { name: 'Presentación', value: '50 pares (100 unidades)' },
      { name: 'Uso', value: 'Versátil para todos los productos' },
    ],
    presentations: [{ label: 'Pack 50 Pares', price: 45 }],
    featured: false,
    active: true,
    inStock: true,
  },
  {
    id: 'prod-auto-51',
    slug: 'aplicador-multiuso-neon-circle',
    name: 'Aplicador Multiuso — Neon Circle',
    line: 'automotriz',
    shortDescription:
      'Aplicador de poli espuma microfibra para ceras, selladores y acondicionadores.',
    description:
      'Herramienta diseñada para facilitar la aplicación uniforme de diversos productos de cuidado automotriz, como ceras, selladores y acondicionadores de todo tipo.',
    categoryId: 'cat-auto-07',
    images: [
      img('aplicador-de-acondicionadores-aplicador-multiuso-1-unidad.jpg'),
      img('aplicador-de-acondicionadores-aplicador-multiusos-2-unidades-12-unidades.jpg'),
    ],
    specifications: [
      { name: 'Material', value: 'Poli espuma microfibra' },
      { name: 'Uso', value: 'Manual' },
      { name: 'Aplicación', value: 'Neumático, puertas, tablero, cueros y carrocería' },
    ],
    presentations: [
      { label: '1 Unidad', price: 8 },
      { label: '2 Unidades', price: 15 },
      { label: '12 Unidades', price: 60 },
    ],
    featured: false,
    active: true,
    inStock: true,
  },
]
