import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import type { Category } from '@/types/category'
import { getProductsByCategory } from '@/lib/products'
import { handleImageError, cn } from '@/lib/utils'

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
      className={cn(
        'group relative flex flex-col justify-end overflow-hidden min-h-[240px] sm:min-h-[280px] border border-slate-200 hover:border-[#003865] transition-colors duration-200',
        className
      )}
      title={`Explorar ${category.name}`}
    >
      {/* Imagen de fondo */}
      <img
        src={category.image}
        alt={category.name}
        loading="lazy"
        onError={handleImageError}
        className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.03]"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0d1f2d]/95 via-[#0d1f2d]/40 to-transparent" />

      {/* Badge de línea — sólido, sin blur */}
      <div className="absolute top-0 left-0 z-10">
        <span
          className={cn(
            'block px-3 py-1 text-[10px] font-bold uppercase tracking-widest',
            isAutomotriz
              ? 'bg-[#003865] text-white'
              : 'bg-[#FCB800] text-[#172B3A]'
          )}
        >
          {isAutomotriz ? 'Automotriz' : 'Construcción'}
        </span>
      </div>

      {/* Flecha hover */}
      <div className="absolute top-3 right-3 z-10">
        <span className="w-7 h-7 bg-white text-[#003865] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <ArrowUpRight className="w-4 h-4" />
        </span>
      </div>

      {/* Texto */}
      <div className="relative z-10 p-5 text-white">
        <div className="flex items-end justify-between gap-2">
          <h3
            className="text-xl sm:text-2xl font-semibold text-white group-hover:text-[#FCB800] transition-colors leading-tight"
            style={{ fontFamily: "'Space Grotesk', ui-sans-serif, system-ui, sans-serif", letterSpacing: '-0.02em' }}
          >
            {category.name}
          </h3>
          <span className="text-[11px] text-white/60 shrink-0 mb-0.5">
            {productCount} {productCount === 1 ? 'producto' : 'productos'}
          </span>
        </div>
        <p className="mt-1.5 text-xs text-slate-300 line-clamp-2 leading-relaxed">
          {category.description}
        </p>
      </div>
    </Link>
  )
}
