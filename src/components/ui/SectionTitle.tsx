import { type ReactNode } from 'react'

interface SectionTitleProps {
  pretitle?: string
  title: string
  titleAccent?: string        // parte del título en color acento
  subtitle?: string
  align?: 'left' | 'center'
  className?: string
  action?: ReactNode
}

export function SectionTitle({
  pretitle,
  title,
  titleAccent,
  subtitle,
  align = 'left',
  className = '',
  action,
}: SectionTitleProps) {
  const isCenter = align === 'center'

  return (
    <div
      className={`mb-10 sm:mb-12 ${
        isCenter ? 'text-center max-w-2xl mx-auto' : ''
      } ${className}`}
    >
      {/* Línea de acento superior */}
      <div className={`flex items-center gap-3 mb-4 ${isCenter ? 'justify-center' : ''}`}>
        <span className="block w-8 h-0.5 bg-[#FCB800]" />
        {pretitle && (
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#003865]">
            {pretitle}
          </span>
        )}
      </div>

      {/* Título + acción en la misma fila (apilado en móvil) */}
      <div
        className={`flex flex-col gap-4 sm:gap-6 ${
          isCenter
            ? 'items-center'
            : 'sm:flex-row sm:items-start sm:justify-between'
        }`}
      >
        <div>
          <h2
            className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-[#172B3A] leading-[1.08]"
            style={{ fontFamily: "'Space Grotesk', ui-sans-serif, system-ui, sans-serif", letterSpacing: '-0.025em' }}
          >
            {title}
            {titleAccent && (
              <span className="text-[#003865]"> {titleAccent}</span>
            )}
          </h2>
          {subtitle && (
            <p
              className={`mt-2.5 text-sm text-slate-500 leading-relaxed max-w-lg ${
                isCenter ? 'mx-auto text-center' : ''
              }`}
            >
              {subtitle}
            </p>
          )}
        </div>
        {action && !isCenter && (
          <div className="shrink-0 mt-1">{action}</div>
        )}
      </div>
    </div>
  )
}
