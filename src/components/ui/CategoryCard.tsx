import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import type { Category } from '@/types/category'
import { getProductsByCategory } from '@/lib/products'
import { handleImageError } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'

interface CategoryCardProps {
  category: Category
  className?: string
}

export function CategoryCard({ category, className = '' }: CategoryCardProps) {
  const productCount = getProductsByCategory(category.id).length
  const isAutomotriz = category.line === 'automotriz'

  return (
    <Link
      to={`/categorias/${category.slug}`}
      className={`group relative flex flex-col justify-end overflow-hidden rounded-2xl min-h-[240px] sm:min-h-[280px] border border-slate-200/80 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5 ${className}`}
      title={`Explorar ${category.name}`}
    >
      {/* Background image */}
      <img
        src={category.image}
        alt={category.name}
        loading="lazy"
        onError={handleImageError}
        className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0d1f2d]/95 via-[#0d1f2d]/45 to-transparent" />

      {/* Top badges row */}
      <div className="relative z-10 flex items-start justify-between p-4 pb-0">
        <Badge
          variant={isAutomotriz ? 'secondary' : 'accent'}
          className="text-[10px] uppercase tracking-wider font-bold backdrop-blur-sm shadow-sm border-0"
        >
          {isAutomotriz ? 'Automotriz' : 'Construcción'}
        </Badge>

        {/* Arrow icon — appears on hover */}
        <span className="w-8 h-8 rounded-full bg-white text-[#003865] flex items-center justify-center opacity-0 translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-200 shadow-md shrink-0">
          <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
        </span>
      </div>

      {/* Bottom content */}
      <div className="relative z-10 p-4 pt-6">
        <div className="flex items-end justify-between gap-2 mb-1.5">
          <h3 className="text-xl font-black tracking-tight text-white group-hover:text-[#FCB800] transition-colors leading-tight">
            {category.name}
          </h3>
          <span className="text-xs text-white/60 shrink-0">
            {productCount} {productCount === 1 ? 'artículo' : 'artículos'}
          </span>
        </div>
        <p className="text-xs text-slate-300/90 line-clamp-2 leading-relaxed">
          {category.description}
        </p>
      </div>
    </Link>
  )
}
