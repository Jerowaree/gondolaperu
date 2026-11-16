import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Heart, ShoppingCart, ArrowRight, Trash2 } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { MainLayout } from '@/components/layout/MainLayout'
import { Container } from '@/components/ui/Container'
import { useCart } from '@/contexts/CartContext'
import { getProducts } from '@/lib/products'
import { getCategoryById } from '@/lib/categories'
import { buildWhatsAppUrl, whatsappConfig, siteConfig } from '@/config/site'
import { handleImageError, cn } from '@/lib/utils'

export default function FavoritesPage() {
  const { favorites, toggleFavorite, addToCart, isInCart } = useCart()

  const allProducts = getProducts()
  const favoriteProducts = allProducts.filter((p) => favorites.has(p.id))

  return (
    <MainLayout>
      <Helmet>
        <title>Mis favoritos — {siteConfig.name}</title>
        <meta name="description" content="Productos guardados en tu lista de favoritos." />
      </Helmet>

      {/* Header */}
      <div className="bg-[#003865] text-white py-8 border-b-4 border-[#FCB800]">
        <Container>
          <div className="flex items-center gap-3">
            <Heart className="w-5 h-5 text-[#FCB800]" />
            <div>
              <h1
                className="text-xl sm:text-2xl font-bold leading-tight"
                style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: '-0.02em' }}
              >
                Mis favoritos
              </h1>
              <p className="text-sm text-white/60 mt-0.5">
                {favoriteProducts.length === 0
                  ? 'Aún no tienes productos guardados'
                  : `${favoriteProducts.length} ${favoriteProducts.length === 1 ? 'producto guardado' : 'productos guardados'}`}
              </p>
            </div>
          </div>
        </Container>
      </div>

      <section className="py-10 sm:py-14 bg-[#F5F7F9] min-h-[50vh]">
        <Container>

          {/* Empty state */}
          {favoriteProducts.length === 0 ? (
            <div className="max-w-sm mx-auto text-center py-16 space-y-5">
              <div className="w-16 h-16 bg-white border border-slate-200 flex items-center justify-center mx-auto">
                <Heart className="w-7 h-7 text-slate-300" />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-500">Todavía no guardaste ningún producto</p>
                <p className="text-xs text-slate-400 mt-1">
                  Presiona el corazón en cualquier producto para guardarlo aquí.
                </p>
              </div>
              <Link
                to="/catalogo"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#003865] text-white text-sm font-semibold hover:bg-[#002647] transition-colors"
              >
                Explorar catálogo
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-slate-200">
              {favoriteProducts.map((product) => {
                const category = getCategoryById(product.categoryId)
                const isAutomotriz = product.line === 'automotriz'
                const inCart = isInCart(product.id)
                const whatsappUrl = buildWhatsAppUrl(whatsappConfig.productMessage(product.name))

                return (
                  <div key={product.id} className="bg-white group flex flex-col">

                    {/* Imagen */}
                    <div className="relative aspect-[4/3] bg-slate-50 overflow-hidden">
                      <Link to={`/productos/${product.slug}`}>
                        <img
                          src={product.images[0]}
                          alt={product.name}
                          loading="lazy"
                          onError={handleImageError}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        />
                      </Link>

                      {/* Badge línea */}
                      <span className={cn(
                        'absolute top-0 left-0 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest',
                        isAutomotriz ? 'bg-[#003865] text-white' : 'bg-[#FCB800] text-[#172B3A]'
                      )}>
                        {isAutomotriz ? 'Automotriz' : 'Construcción'}
                      </span>

                      {/* Quitar de favoritos */}
                      <button
                        type="button"
                        onClick={() => toggleFavorite(product.id)}
                        aria-label="Quitar de favoritos"
                        className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center bg-red-500 text-white hover:bg-red-600 transition-colors"
                        title="Quitar de favoritos"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Info */}
                    <div className="flex flex-col flex-1 p-4 gap-1">
                      {category && (
                        <Link
                          to={`/categorias/${category.slug}`}
                          className="text-[10px] font-bold uppercase tracking-widest text-slate-400 hover:text-[#003865] transition-colors"
                        >
                          {category.name}
                        </Link>
                      )}
                      <h3 className="text-sm font-semibold text-[#172B3A] leading-snug line-clamp-2 group-hover:text-[#003865] transition-colors">
                        <Link to={`/productos/${product.slug}`}>
                          {product.name}
                        </Link>
                      </h3>
                      <p className="mt-0.5 text-xs text-slate-400 line-clamp-2 leading-relaxed">
                        {product.shortDescription}
                      </p>
                    </div>

                    {/* Acciones */}
                    <div className="flex border-t border-slate-100">
                      <button
                        type="button"
                        onClick={() => addToCart(product)}
                        className={cn(
                          'flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2.5 text-xs font-semibold transition-colors duration-150 border-r border-slate-100',
                          inCart
                            ? 'bg-[#003865] text-white'
                            : 'text-[#003865] hover:bg-[#003865] hover:text-white'
                        )}
                      >
                        <ShoppingCart className="w-3.5 h-3.5" />
                        {inCart ? 'En lista' : 'Agregar'}
                      </button>
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2.5 text-xs font-semibold text-emerald-700 hover:bg-emerald-500 hover:text-white transition-colors duration-150"
                      >
                        <FaWhatsapp className="w-3.5 h-3.5" />
                        Cotizar
                      </a>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </Container>
      </section>
    </MainLayout>
  )
}
