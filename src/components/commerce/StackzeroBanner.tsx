import { type ReactNode } from 'react'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { handleImageError } from '@/lib/utils'

interface StackzeroBannerProps {
  badge: string
  title: string
  highlightText?: string
  description: string
  linkText?: string
  linkTo: string
  imageUrl: string
  variant?: 'automotriz' | 'construccion'
  icon?: ReactNode
  className?: string
  /** Alineación del contenido: 'left' (default) o 'right' para banners espejo */
  contentAlign?: 'left' | 'right'
}

export function StackzeroBanner({
  badge,
  title,
  highlightText,
  description,
  linkText = 'Explorar Rubro',
  linkTo,
  imageUrl,
  variant = 'automotriz',
  className = '',
  contentAlign = 'left',
}: StackzeroBannerProps) {
  const isAutomotriz = variant === 'automotriz'

  const overlayColor = isAutomotriz
    ? 'from-[#002647]/90 via-[#003865]/75 to-[#003865]/40'
    : 'from-[#1a1008]/90 via-[#2d1f0a]/75 to-[#2d1f0a]/40'

  const badgeBg = isAutomotriz ? 'bg-[#003865]' : 'bg-[#FCB800]'
  const badgeText = isAutomotriz ? 'text-white' : 'text-[#172B3A]'
  const accentColor = isAutomotriz ? 'text-[#FCB800]' : 'text-[#FCB800]'

  return (
    <div className={`group relative w-full overflow-hidden bg-slate-900 ${className}`}>
      {/* Imagen de fondo */}
      <img
        src={imageUrl}
        alt={title}
        loading="lazy"
        onError={handleImageError}
        className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
      />

      {/* Overlay sólido — sin mix-blend, sin blur */}
      <div className={`absolute inset-0 bg-gradient-to-r ${overlayColor}`} />

      {/* Contenido */}
      <div className="relative z-10 flex flex-col justify-between min-h-[280px] p-8 lg:p-10">
        <div
          className={`space-y-4 max-w-lg ${
            contentAlign === 'right' ? 'lg:self-end lg:flex lg:flex-col lg:items-end lg:text-right' : ''
          }`}
        >
          {/* Badge limpio — sin blur, sin transparencia */}
          <span className={`inline-block px-3 py-1 text-[11px] font-bold uppercase tracking-widest ${badgeBg} ${badgeText}`}>
            {badge}
          </span>

          {/* Título */}
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-tight text-white">
            {title}{' '}
            {highlightText && (
              <span className={accentColor}>{highlightText}</span>
            )}
          </h3>

          {/* Descripción */}
          <p className="text-sm text-white/75 leading-relaxed max-w-sm lg:self-end">
            {description}
          </p>
        </div>

        {/* CTA */}
        <div className={`pt-8 ${contentAlign === 'right' ? 'lg:flex lg:justify-end' : ''}`}>
          <Link
            to={linkTo}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-[#003865] text-sm font-bold hover:bg-[#FCB800] hover:text-[#172B3A] transition-colors duration-150"
          >
            {linkText}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
