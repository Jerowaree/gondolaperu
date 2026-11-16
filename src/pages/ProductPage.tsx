import { Helmet } from 'react-helmet-async'
import { useParams, Navigate, Link } from 'react-router-dom'
import {
  Phone,
  ArrowLeft,
  ShieldCheck,
  Truck,
  Headphones,
  Layers,
  FileText,
  Check,
  MapPin,
} from 'lucide-react'
import { MainLayout } from '@/components/layout/MainLayout'
import { Container } from '@/components/ui/Container'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card'
import { ProductGrid } from '@/components/ui/ProductGrid'
import { ImageViewer } from '@/components/commerce/ImageViewer'
import { ProductInquiryButton } from '@/components/whatsapp/ProductInquiryButton'
import { getProductBySlug, getRelatedProducts } from '@/lib/products'
import { getCategoryById } from '@/lib/categories'
import { siteConfig, whatsappConfig } from '@/config/site'
import { cn } from '@/lib/utils'

export default function ProductPage() {
  const { slug = '' } = useParams<{ slug: string }>()
  const product = getProductBySlug(slug)

  if (!product) {
    return <Navigate to="/404" replace />
  }

  const category = getCategoryById(product.categoryId)
  const isAutomotriz = product.line === 'automotriz'
  const relatedProducts = getRelatedProducts(product.id, product.categoryId, 4)
  const inStock = product.inStock !== false

  const trustItems = [
    { icon: ShieldCheck, label: 'Garantía', sub: 'calidad' },
    { icon: Headphones, label: 'Asesoría', sub: 'técnica' },
    { icon: Truck, label: 'Despacho', sub: 'Piura' },
  ]

  return (
    <MainLayout>
      <Helmet>
        <title>{product.name} — {siteConfig.name}</title>
        <meta name="description" content={product.shortDescription} />
        <meta property="og:title" content={`${product.name} — ${siteConfig.name}`} />
        <meta property="og:description" content={product.shortDescription} />
        {product.images[0] && <meta property="og:image" content={product.images[0]} />}
      </Helmet>

      {/* Migajas de pan */}
      <div className="bg-white border-b border-slate-200 py-3.5">
        <Container>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
            <Breadcrumb
              items={[
                { label: 'Catálogo', href: '/catalogo' },
                {
                  label: isAutomotriz ? 'Automotriz' : 'Construcción',
                  href: `/catalogo?linea=${product.line}`,
                },
                ...(category
                  ? [{ label: category.name, href: `/categorias/${category.slug}` }]
                  : []),
                { label: product.name },
              ]}
            />
            <Link
              to="/catalogo"
              className="text-xs font-semibold text-slate-500 hover:text-[#003865] inline-flex items-center gap-1 transition-colors shrink-0 self-start sm:self-auto"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Volver al catálogo</span>
            </Link>
          </div>
        </Container>
      </div>

      {/* Ficha Técnica y Detalle del Producto */}
      <section className="py-10 sm:py-16 bg-gradient-to-b from-slate-50/70 to-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            {/* Galería de Imágenes (6 cols) */}
            <div className="lg:col-span-6">
              <ImageViewer images={product.images} title={product.name} />

              {/* Sellos de confianza */}
              <div className="mt-6 grid grid-cols-3 gap-3">
                {trustItems.map(({ icon: Icon, label, sub }) => (
                  <div
                    key={label}
                    className="flex flex-col items-center gap-1.5 rounded-xl border border-slate-200/80 bg-white px-3 py-4 text-center"
                  >
                    <Icon className="w-5 h-5 text-[#0082D6]" />
                    <span className="text-xs font-bold text-[#172B3A]">{label}</span>
                    <span className="text-[10px] uppercase tracking-wider text-slate-400">
                      {sub}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Columna comercial — sticky en desktop (6 cols) */}
            <div className="lg:col-span-6 lg:sticky lg:top-40 lg:self-start space-y-5">
              {/* ── Card principal del producto ── */}
              <Card className="rounded-2xl ring-slate-200/80 shadow-[0_1px_2px_rgba(16,24,40,0.05)]">
                <CardHeader className="gap-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant={isAutomotriz ? 'secondary' : 'accent'}>
                      {isAutomotriz ? 'Línea Automotriz' : 'Línea Construcción'}
                    </Badge>
                    <Badge variant={inStock ? 'primary' : 'neutral'}>
                      {inStock ? 'Disponible en Piura' : 'Bajo pedido'}
                    </Badge>
                  </div>

                  <h1 className="text-2xl sm:text-3xl font-extrabold text-[#172B3A] tracking-tight leading-tight">
                    {product.name}
                  </h1>

                  {category && (
                    <Link
                      to={`/categorias/${category.slug}`}
                      className="text-xs font-semibold text-slate-500 hover:text-[#0082D6] transition-colors"
                    >
                      {category.name}
                    </Link>
                  )}
                </CardHeader>

                <CardContent>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {product.shortDescription}
                  </p>
                </CardContent>

                {/* Footer comercial: acciones de conversión */}
                <CardFooter className="flex-col sm:flex-row gap-2.5 bg-slate-50/60 border-t-slate-100 px-5 py-4">
                  <ProductInquiryButton
                    productName={product.name}
                    size="lg"
                    label="Cotizar por WhatsApp"
                    className="flex-1 shadow-sm"
                  />
                  <Button
                    href="tel:+51951545204"
                    external
                    variant="outline"
                    size="lg"
                    className="flex-1 border-slate-300 text-slate-700 hover:bg-slate-100"
                    icon={<Phone className="w-4 h-4" />}
                  >
                    {whatsappConfig.displayNumber}
                  </Button>
                </CardFooter>
              </Card>

              {/* ── Card de descripción detallada ── */}
              <Card className="rounded-2xl ring-slate-200/80">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-[#003865]">
                    <FileText className="w-4 h-4 text-[#0082D6]" />
                    Detalles del Producto
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {product.description}
                  </p>
                </CardContent>
              </Card>

              {/* ── Card de especificaciones ── */}
              {product.specifications.length > 0 && (
                <Card className="rounded-2xl ring-slate-200/80">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-[#003865]">
                      <Layers className="w-4 h-4 text-[#0082D6]" />
                      Especificaciones Técnicas
                    </CardTitle>
                    <CardDescription>
                      {product.specifications.length} datos técnicos verificados
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="px-0 pb-0">
                    <dl className="divide-y divide-slate-100 border-y border-slate-100">
                      {product.specifications.map((spec, idx) => (
                        <div
                          key={spec.name}
                          className={cn(
                            'grid grid-cols-[40%_1fr] sm:grid-cols-[220px_1fr] px-5 sm:px-6 py-3 text-sm',
                            idx % 2 === 0 ? 'bg-slate-50/60' : 'bg-white'
                          )}
                        >
                          <dt className="font-medium text-slate-500 pr-3 flex items-center gap-1.5">
                            <Check className="w-3 h-3 text-emerald-500 shrink-0" />
                            {spec.name}
                          </dt>
                          <dd className="font-semibold text-slate-800">{spec.value}</dd>
                        </div>
                      ))}
                    </dl>
                  </CardContent>
                </Card>
              )}

              {/* Nota de ubicación comercial */}
              <div className="flex items-center gap-2.5 px-1 text-xs text-slate-500">
                <MapPin className="w-3.5 h-3.5 text-[#FCB800] shrink-0" />
                <span>
                  Stock disponible para entrega en{' '}
                  <span className="font-semibold text-slate-700">
                    Veintiséis de Octubre, Piura
                  </span>{' '}
                  — despacho coordinado por WhatsApp.
                </span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Productos Relacionados */}
      {relatedProducts.length > 0 && (
        <section className="py-16 bg-[#f8fafc] border-t border-slate-200">
          <Container>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-4 mb-8">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#0082D6]">
                  Recomendados en {isAutomotriz ? 'Línea Automotriz' : 'Línea Construcción'}
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#003865] mt-1">
                  Productos Relacionados
                </h2>
              </div>
              {category && (
                <Link
                  to={`/categorias/${category.slug}`}
                  className="text-xs sm:text-sm font-semibold text-[#0082D6] hover:text-[#003865] transition-colors shrink-0"
                >
                  Ver más en {category.name} →
                </Link>
              )}
            </div>

            <ProductGrid products={relatedProducts} />
          </Container>
        </section>
      )}
    </MainLayout>
  )
}
