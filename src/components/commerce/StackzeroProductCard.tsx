import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import type { Product } from '@/types/product'
import { getCategoryById } from '@/lib/categories'
import { buildWhatsAppUrl, whatsappConfig } from '@/config/site'
import { handleImageError } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
} from '@/components/ui/card'

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

  return (
    <Card
      className={`group p-0 gap-0 overflow-hidden rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-[#003865]/25 transition-all duration-300 ${className}`}
    >
      {/* ── Image ──────────────────────────────────────────────── */}
      <div className="relative overflow-hidden bg-slate-100 aspect-[4/3]">
        {/* Line badge */}
        <div className="absolute top-3 left-3 z-10">
          <Badge
            variant={isAutomotriz ? 'default' : 'accent'}
            className="shadow-sm text-[10px] uppercase tracking-wide font-bold"
          >
            {product.featured && <span className="mr-1">●</span>}
            {isAutomotriz ? 'Automotriz' : 'Construcción'}
          </Badge>
        </div>

        {/* Featured badge */}
        {product.featured && (
          <div className="absolute top-3 right-3 z-10">
            <Badge variant="accent" className="text-[10px] font-bold shadow-sm">
              ★ Destacado
            </Badge>
          </div>
        )}

        <Link to={`/productos/${product.slug}`} className="block w-full h-full" title={product.name}>
          <img
            src={primaryImage}
            alt={product.name}
            loading="lazy"
            onError={handleImageError}
            className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
          />
        </Link>

        {/* Hover shimmer */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>

      {/* ── Body ───────────────────────────────────────────────── */}
      <CardContent className="flex flex-1 flex-col p-4 pb-0">
        {/* Category */}
        {category && (
          <Link
            to={`/categorias/${category.slug}`}
            className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider hover:text-[#003865] transition-colors mb-1.5 block"
          >
            {category.name}
          </Link>
        )}

        {/* Product name */}
        <h3 className="text-sm font-bold text-[#172B3A] leading-snug line-clamp-2 mb-1.5 group-hover:text-[#003865] transition-colors">
          <Link to={`/productos/${product.slug}`} title={product.name}>
            {product.name}
          </Link>
        </h3>

        {/* Short description */}
        <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed mb-3">
          {product.shortDescription}
        </p>

        {/* Quick specs */}
        {product.specifications && product.specifications.length > 0 && (
          <ul className="space-y-1 mb-3">
            {product.specifications.slice(0, 2).map((spec) => (
              <li key={spec.name} className="flex items-center gap-1.5 text-[11px] text-slate-500">
                <CheckCircle2 className="w-3 h-3 text-emerald-500 shrink-0" />
                <span className="font-semibold text-slate-700">{spec.name}:</span>
                <span className="truncate">{spec.value}</span>
              </li>
            ))}
          </ul>
        )}
      </CardContent>

      {/* ── Footer / Actions ───────────────────────────────────── */}
      <CardFooter className="flex items-center gap-2 p-4 pt-3 border-t border-slate-100 bg-slate-50/50">
        <Button
          to={`/productos/${product.slug}`}
          variant="default"
          size="sm"
          className="flex-1"
          iconRight={<ArrowRight className="w-3.5 h-3.5" />}
        >
          Ver ficha
        </Button>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-1.5 h-8 px-3.5 text-xs font-semibold text-white bg-emerald-500 hover:bg-emerald-600 rounded-lg transition-colors shadow-sm"
          title={`Cotizar ${product.name}`}
        >
          <FaWhatsapp className="w-3.5 h-3.5 shrink-0" />
          <span>Cotizar</span>
        </a>
      </CardFooter>
    </Card>
  )
}
