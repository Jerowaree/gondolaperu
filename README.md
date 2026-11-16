# GÓNDOLA PERÚ — Catálogo Comercial Digital

> Plataforma web corporativa y catálogo digital de productos para **GÓNDOLA PERÚ**, empresa perteneciente a **GÓNDOLA VARIEDAD Y EXPERIENCIA S.A.C.**, ubicada en el distrito Veintiséis de Octubre, Piura, Perú.

---

## 1. Presentación y Contexto Comercial

**GÓNDOLA VARIEDAD Y EXPERIENCIA S.A.C.** opera comercialmente bajo la marca **GÓNDOLA PERÚ** en el distrito Veintiséis de Octubre, Piura, Perú.

> ⚠️ **Aclaración de Rubro Comercial:**  
> GÓNDOLA PERÚ **no** es una empresa dedicada a fabricar ni comercializar estanterías o góndolas metálicas para supermercados.  
> Su actividad económica y comercial se concentra en:
> 1. **LÍNEA AUTOMOTRIZ:** Repuestos automotrices, partes y piezas, accesorios vehiculares y componentes mecánicos (baterías, frenos, amortiguadores, lubricantes, fajas, iluminación).
> 2. **LÍNEA CONSTRUCCIÓN:** Materiales de construcción, cemento, herramientas manuales y eléctricas, tuberías de PVC, pernería, fijaciones y acabados.
> 3. **LÍNEA COMPLEMENTARIA DE SERVICIOS:** Mantenimiento preventivo, diagnóstico y reparación automotriz en taller.

Esta aplicación es una plataforma frontend de catálogo digital orientada a presentar la oferta multirubro de la empresa, exhibir especificaciones técnicas y canalizar consultas comerciales directas mediante WhatsApp y llamadas telefónicas.

---

## 2. Stack Tecnológico

| Tecnología | Versión | Responsabilidad |
|---|---|---|
| React | ^19.3.1 | Biblioteca de interfaz de usuario |
| Vite | ^8.3.6 | Servidor de desarrollo ultrarrápido y bundler |
| TypeScript | ~7.0.2 | Tipado estático en modo estricto |
| Tailwind CSS | ^4.3.5 | Estilizado responsive, tokens y variables de diseño |
| React Router DOM | ^7.18.5 | Enrutamiento SPA, rutas dinámicas y parámetros de URL |
| React Helmet Async | ^3.1.0 | Gestión de metadatos SEO y etiquetas Open Graph por ruta |
| Stackzero Commerce UI | Components/Blocks | Patrones de tarjetas de producto, banners comerciales y galerías |
| React Icons | ^5.7.0 | Iconografía oficial de marca (Font Awesome `FaWhatsapp`) |
| Lucide React | ^1.72.0 | Iconografía funcional general |
| pnpm | 12.x | Gestor exclusivo de dependencias |
| oxlint | ^1.90.0 | Linter de código estricto |
| Prettier | ^3.10.1 | Formateo consistente de archivos |

---

## 3. Integración de Stackzero Commerce UI

La interfaz adopta patrones y bloques de la biblioteca especializada **Stackzero Commerce UI** (`https://ui.stackzero.co/`), adaptados a React puro con Vite (eliminando dependencias exclusivas de Next.js como `next/image` y `next/link`):

- **`StackzeroProductCard` (basado en `product-card-01-block` y `product-card-08-block`):**
  - Tarjetas comerciales con relación de aspecto `4:3`, glow ambiental sutil en hover, badges de línea comercial (`Automotriz` / `Construcción`), especificaciones técnicas clave (chips de datos), indicador de disponibilidad en Piura y botón de cotización directa.
- **`StackzeroBanner` (basado en `banner-01-block` y `banner-05-block`):**
  - Banners de alto impacto visual con gradientes oscuros, imagen en blend, badge temático y llamadas a la acción dedicadas para Línea Automotriz y Línea Construcción.
- **`ImageViewer` (basado en `image-viewer-basic`):**
  - Galería interactiva para las fichas de producto con selector de miniaturas, foco visual y transiciones fluidas.

---

## 4. Sistema Centralizado de WhatsApp

La comunicación comercial está centralizada en `src/config/site.ts` y organizada en componentes especializados con la iconografía oficial `FaWhatsapp`:

- **Número oficial:** `+51 951 545 204`
- **Componentes:**
  - `WhatsAppButton`: Botón modular con variantes de estilo y texto configurable.
  - `WhatsAppFloatButton`: Botón flotante persistente en la esquina inferior derecha con indicador de pulso en vivo.
  - `ProductInquiryButton`: Botón contextual que autocompleta el mensaje con el nombre del producto consultado (ej: *"Hola GÓNDOLA PERÚ, estoy interesado en obtener información y cotización sobre el producto: Batería Automotriz 12V 13 Placas..."*).
  - `ContactCTA`: Sección de conversión al final de las páginas principales.

---

## 5. Estructura del Proyecto

```text
gondola-peru/
│
├── public/
│   ├── images/                 # Fotografías locales de productos y repuestos
│   ├── logos/
│   │   ├── gondolalogo.png     # Logotipo oficial de GÓNDOLA PERÚ
│   │   └── favicon.svg         # Favicon vectorial con colores institucionales
│   ├── favicon.svg             # Favicon raíz
│   └── robots.txt              # Reglas para crawlers
│
├── src/
│   ├── app/
│   │   ├── App.tsx             # Componente raíz (Providers + AppRouter)
│   │   ├── providers.tsx       # Envolturas (HelmetProvider, BrowserRouter, SiteProvider)
│   │   └── router.tsx          # Definición de rutas, ScrollToTop y Lazy Loading
│   │
│   ├── components/
│   │   ├── commerce/           # Componentes adaptados de Stackzero Commerce UI
│   │   │   ├── StackzeroProductCard.tsx
│   │   │   ├── StackzeroBanner.tsx
│   │   │   ├── ImageViewer.tsx
│   │   │   └── index.ts
│   │   │
│   │   ├── whatsapp/           # Sistema de WhatsApp centralizado
│   │   │   ├── WhatsAppButton.tsx
│   │   │   ├── WhatsAppFloatButton.tsx
│   │   │   ├── ProductInquiryButton.tsx
│   │   │   └── index.ts
│   │   │
│   │   ├── layout/
│   │   │   ├── TopBar.tsx           # Teléfono, ubicación en Piura y canal WhatsApp
│   │   │   ├── Header.tsx           # Logo, menú por líneas comerciales y buscador
│   │   │   ├── MobileMenu.tsx       # Menú lateral móvil con categorías agrupadas
│   │   │   ├── Footer.tsx           # Columnas de Automotriz, Construcción y datos legales
│   │   │   ├── FloatingWhatsApp.tsx # Envoltorio del botón flotante
│   │   │   ├── MainLayout.tsx       # Layout maestro
│   │   │   └── index.ts
│   │   │
│   │   ├── home/
│   │   │   ├── HeroSection.tsx            # Portada bimodal (Automotriz / Construcción)
│   │   │   ├── CommercialLinesBanner.tsx  # Banners Stackzero de las dos grandes líneas
│   │   │   ├── CategorySection.tsx        # Categorías con filtro por pestañas
│   │   │   ├── FeaturedProducts.tsx       # Productos destacados con tarjetas Stackzero
│   │   │   ├── ServicesSection.tsx        # Sección de servicios de taller y mecánica
│   │   │   ├── BenefitsSection.tsx        # Pilares de valor y garantías
│   │   │   ├── ContactCTA.tsx             # Banner de conversión directa
│   │   │   └── index.ts
│   │   │
│   │   └── ui/
│   │       ├── Button.tsx           # Botón base reutilizable
│   │       ├── Container.tsx        # Contenedor responsive max-w-[1280px]
│   │       ├── Badge.tsx            # Etiquetas de línea y estado
│   │       ├── SectionTitle.tsx     # Títulos con pre-título y subtítulo
│   │       ├── Breadcrumb.tsx       # Migajas de pan semánticas
│   │       ├── SearchInput.tsx      # Buscador con limpieza rápida
│   │       ├── ProductCard.tsx      # Adaptador de tarjeta de producto
│   │       ├── ProductGrid.tsx      # Grilla con empty state integrado
│   │       ├── CategoryCard.tsx     # Tarjeta de categoría con badge de línea
│   │       ├── EmptyState.tsx       # Estado vacío para búsquedas sin coincidencia
│   │       ├── LoadingState.tsx     # Spinner accesible
│   │       ├── PageHeader.tsx       # Cabecera de páginas interiores
│   │       └── index.ts
│   │
│   ├── contexts/
│   │   ├── SiteContext.tsx     # Estado global UI (menú móvil)
│   │   └── CatalogContext.tsx  # Estado de filtros y búsqueda por línea comercial
│   │
│   ├── hooks/
│   │   ├── useProducts.ts      # Consultas reactivas (todos, por línea, destacados)
│   │   ├── useCategories.ts    # Consultas reactivas de categorías
│   │   ├── useProductSearch.ts # Búsqueda con debounce (300ms)
│   │   └── useCatalogFilters.ts# Filtrado por línea, categoría y texto
│   │
│   ├── pages/
│   │   ├── HomePage.tsx        # Portada comercial completa
│   │   ├── AboutPage.tsx       # Presentación de GÓNDOLA VARIEDAD Y EXPERIENCIA S.A.C.
│   │   ├── CatalogPage.tsx     # Catálogo con selector de línea y buscador interactivo
│   │   ├── CategoryPage.tsx    # Ficha de categoría con listado de artículos y 404
│   │   ├── ProductPage.tsx     # Ficha técnica con galería Stackzero y cotización
│   │   └── NotFoundPage.tsx    # Página 404 personalizada
│   │
│   ├── data/
│   │   ├── products.ts         # Productos automotrices y de construcción tipados
│   │   ├── categories.ts       # Categorías organizadas por línea comercial
│   │   └── company.ts          # Datos corporativos oficiales y servicios de taller
│   │
│   ├── types/
│   │   ├── product.ts          # Interfaces Product, ProductSummary, ProductSpecification
│   │   ├── category.ts         # Interfaces Category, CommercialLine ('automotriz' | 'construccion')
│   │   └── company.ts          # Interfaces CompanyInfo, CommercialService, BenefitItem
│   │
│   ├── lib/
│   │   ├── products.ts         # getProducts(), getProductsByLine(), filterProducts()
│   │   ├── categories.ts       # getCategories(), getCategoriesByLine()
│   │   ├── slug.ts             # Generación y validación de slugs
│   │   └── utils.ts            # Utilidades generales
│   │
│   ├── config/
│   │   └── site.ts             # Configuración central y generador buildWhatsAppUrl()
│   │
│   ├── styles/
│   │   ├── globals.css         # Configuración Tailwind v4, temas y fuentes
│   │   └── design-tokens.css   # Variables CSS institucionales
│   │
│   ├── App.tsx                 # Re-export hacia src/app/App.tsx
│   └── main.tsx                # Entry point de React 19
│
├── index.html                  # Plantilla HTML con SEO y Open Graph
├── vite.config.ts              # Configuración de Vite con @tailwindcss/vite y alias @/
├── tsconfig.json
├── tsconfig.app.json
├── package.json
└── README.md
```

---

## 6. Rutas de la Aplicación

| Ruta | Descripción |
|---|---|
| `/` | Portada comercial con hero bimodal, banners Stackzero, categorías, destacados, servicios y contacto |
| `/catalogo` | Catálogo completo con selector de Línea Comercial, buscador en vivo y filtros por rubro |
| `/catalogo?linea=automotriz` | Catálogo prefiltrado para la Línea Automotriz |
| `/catalogo?linea=construccion` | Catálogo prefiltrado para la Línea Construcción |
| `/categorias/:slug` | Vista de productos pertenecientes a un rubro específico (con manejo 404) |
| `/productos/:slug` | Ficha técnica de producto, galería Stackzero, especificaciones y cotización WhatsApp |
| `/nosotros` | Presentación institucional de GÓNDOLA VARIEDAD Y EXPERIENCIA S.A.C., servicios y ubicación |
| `*` | Página 404 con redirección y enlaces de navegación |

---

## 7. Comandos de Ejecución

```bash
# Instalar dependencias con pnpm
pnpm install

# Iniciar servidor de desarrollo en http://localhost:5173
pnpm dev

# Compilar proyecto para producción
pnpm build

# Previsualizar el bundle de producción
pnpm preview

# Ejecutar el linter oxlint
pnpm lint

# Formatear el código con Prettier
pnpm format
```

---

## 8. Identidad Visual Corporativa

Los colores y el estilo se desprenden fielmente del logotipo oficial (`public/logos/gondolalogo.png`):

| Token | Hex | Aplicación |
|---|---|---|
| `--color-primary` | `#003865` | Azul Marino Institucional (encabezados, navbar, fondo hero) |
| `--color-secondary` | `#0082d6` | Azul Océano Dinámico (enlaces, badges de Línea Automotriz, iconos) |
| `--color-accent` | `#fcb800` | Amarillo Solar (botones de acción, acentos, badges de Construcción) |
| `--color-surface` | `#f8fafc` | Fondo de secciones alternas para descanso visual |
| `--font-sans` | `Inter, sans-serif` | Tipografía principal de alta legibilidad |

---

*GÓNDOLA PERÚ — GÓNDOLA VARIEDAD Y EXPERIENCIA S.A.C. | Veintiséis de Octubre, Piura, Perú*
