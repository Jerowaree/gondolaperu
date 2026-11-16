import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Heart, ShoppingCart, ArrowUpRight } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import type { Product } from '@/types/product'
import { getCategoryById } from '@/lib/categories'
import { buildWhatsAppUrl, whatsappConfig } from '@/config/site'
import { handleImageError, cn } from '@/lib/utils'
import { useCart } from '@/contexts/CartContext'

interface StackzeroProductCardProps {
  product: Product
  className?: string
}

export function StackzeroProductCard({ product, className = '' }: StackzeroProductCardProps) {
  const category = getCategoryById(product.categoryId)
  const primaryImage =
    product.images[0] ||
    'https://images.unsplash.com/photo-1486006920555-c77dce18193b?w=600&h=450&fit=crop&q=80'
  const isAutomotriz = product.line === 'automotriz'
  const whatsappUrl = buildWhatsAppUrl(whatsappConfig.productMessage(product.name))

  const { addToCart, isInCart, toggleFavorite, isFavorite } = useCart()
  const inCart = isInCart(product.id)
  const favorited = isFavorite(product.id)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className={cn(
        'group flex flex-col bg-white border border-slate-200 transition-colors duration-150 hover:border-[#003865]',
        className
      )}
    >
      {/* ── Imagen ───────────────────────────────────────── */}
      <div className="relative aspect-[4/3] bg-slate-50 overflow-hidden">

        {/* Imagen */}
        <Link to={`/productos/${product.slug}`} className="block w-full h-full" title={product.name}>
          <img
            src={primaryImage}
            alt={product.name}
            loading="lazy"
            onError={handleImageError}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
        </Link>

        {/* Overlay hover con acceso rápido */}
        <div className="absolute inset-0 bg-[#003865]/0 group-hover:bg-[#003865]/10 transition-colors duration-300 pointer-events-none" />

        {/* Badge línea — esquina superior izquierda */}
        <span className={cn(
          'absolute top-0 left-0 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest z-10',
          isAutomotriz ? 'bg-[#003865] text-white' : 'bg-[#FCB800] text-[#172B3A]'
        )}>
          {isAutomotriz ? 'Automotriz' : 'Construcción'}
        </span>

        {/* Favorito — esquina superior derecha */}
        <button
          type="button"
          onClick={() => toggleFavorite(product.id)}
          aria-label={favorited ? 'Quitar de favoritos' : 'Guardar en favoritos'}
          className={cn(
            'absolute top-2 right-2 z-10 w-8 h-8 flex items-center justify-center transition-all duration-150',
            'opacity-0 group-hover:opacity-100',
            favorited && 'opacity-100',
            favorited
              ? 'bg-red-500 text-white'
              : 'bg-white/90 text-slate-400 hover:text-red-500 hover:bg-white'
          )}
        >
          <Heart className={cn('w-4 h-4', favorited && 'fill-current')} />
        </button>

        {/* Badge destacado */}
        {product.featured && (
          <span className="absolute bottom-0 right-0 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest bg-[#FCB800] text-[#172B3A] z-10">
            Destacado
          </span>
        )}

        {/* Botón ver ficha en hover — centro */}
        <Link
          to={`/productos/${product.slug}`}
          className={cn(
            'absolute inset-x-0 bottom-0 flex items-center justify-center gap-1.5 py-2.5',
            'bg-[#003865] text-white text-xs font-bold uppercase tracking-wider',
            'translate-y-full group-hover:translate-y-0 transition-transform duration-200 ease-out z-10'
          )}
        >
          Ver ficha completa
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* ── Contenido ────────────────────────────────────── */}
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
          <Link to={`/productos/${product.slug}`} title={product.name}>
            {product.name}
          </Link>
        </h3>

        <p className="mt-0.5 text-xs text-slate-400 line-clamp-2 leading-relaxed">
          {product.shortDescription}
        </p>
      </div>

      {/* ── Acciones ─────────────────────────────────────── */}
      <div className="flex border-t border-slate-100">
        {/* Carrito */}
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

        {/* WhatsApp directo */}
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
    </motion.div>
  )
}
