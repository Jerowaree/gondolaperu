import { Helmet } from 'react-helmet-async'
import { useParams, Navigate, Link } from 'react-router-dom'
import { ArrowLeft, Grid } from 'lucide-react'
import { MainLayout } from '@/components/layout/MainLayout'
import { Container } from '@/components/ui/Container'
import { PageHeader } from '@/components/ui/PageHeader'
import { ProductGrid } from '@/components/ui/ProductGrid'
import { Button } from '@/components/ui/Button'
import { getCategoryBySlug, getCategoriesByLine } from '@/lib/categories'
import { getProductsByCategory } from '@/lib/products'
import { siteConfig } from '@/config/site'
import { handleImageError } from '@/lib/utils'

export default function CategoryPage() {
  const { slug = '' } = useParams<{ slug: string }>()
  const category = getCategoryBySlug(slug)

  if (!category) {
    return <Navigate to="/404" replace />
  }

  const isAutomotriz = category.line === 'automotriz'
  const products = getProductsByCategory(category.id)
  const sameLineCategories = getCategoriesByLine(category.line).filter((c) => c.id !== category.id)

  return (
    <MainLayout>
      <Helmet>
        <title>{category.name} — {siteConfig.name}</title>
        <meta name="description" content={category.description} />
      </Helmet>

      {/* Banner de Categoría con fondo de imagen y gradiente industrial */}
      <div className="relative bg-[#001c36] text-white py-12 sm:py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src={category.image}
            alt={category.name}
            onError={handleImageError}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#001c36] via-[#053d5e]/85 to-transparent" />

        <Container className="relative z-10">
          <PageHeader
            className="bg-transparent border-none text-white py-0"
            badge={isAutomotriz ? 'Línea Automotriz' : 'Línea Construcción'}
            title={category.name}
            subtitle={category.description}
            breadcrumbs={[
              { label: 'Catálogo', href: '/catalogo' },
              {
                label: isAutomotriz ? 'Automotriz' : 'Construcción',
                href: `/catalogo?linea=${category.line}`,
              },
              { label: category.name },
            ]}
            action={
              <Button
                to={`/catalogo?linea=${category.line}`}
                variant="outline"
                size="sm"
                icon={<ArrowLeft className="w-4 h-4" />}
                className="border-white/30 text-white hover:bg-white/10"
              >
                Ver más en {isAutomotriz ? 'Automotriz' : 'Construcción'}
              </Button>
            }
          />
        </Container>
      </div>

      {/* Listado de Productos */}
      <section className="py-12 sm:py-16 bg-[#f8fafc]">
        <Container>
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-200">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Productos disponibles en este rubro
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#003865]">
                {category.name} ({products.length})
              </h2>
            </div>
            <Link
              to="/catalogo"
              className="text-xs sm:text-sm font-semibold text-[#0082D6] hover:text-[#003865] transition-colors"
            >
              Ver todo el catálogo →
            </Link>
          </div>

          <ProductGrid
            products={products}
            emptyTitle={`No hay artículos listados actualmente en ${category.name}`}
            emptyDescription="Consulta directamente por WhatsApp la disponibilidad de este rubro."
          />

          {/* Explorar otras categorías de la misma línea */}
          {sameLineCategories.length > 0 && (
            <div className="mt-16 pt-12 border-t border-slate-200">
              <h3 className="text-base sm:text-lg font-bold text-[#003865] mb-4 flex items-center gap-2">
                <Grid className="w-5 h-5 text-[#0082D6]" />
                <span>
                  Otras categorías en Línea {isAutomotriz ? 'Automotriz' : 'Construcción'}
                </span>
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                {sameLineCategories.map((c) => (
                  <Link
                    key={c.id}
                    to={`/categorias/${c.slug}`}
                    className="p-3 bg-white rounded-2xl border border-slate-200 hover:border-[#0082D6] shadow-2xs hover:shadow-sm text-center transition-all group"
                  >
                    <span className="text-xs font-semibold text-slate-700 group-hover:text-[#0082D6] block truncate">
                      {c.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </Container>
      </section>
    </MainLayout>
  )
}
