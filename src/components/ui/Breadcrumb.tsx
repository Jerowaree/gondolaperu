import { Link } from 'react-router-dom'
import { ChevronRight, Home } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  className?: string
}

export function Breadcrumb({ items, className = '' }: BreadcrumbProps) {
  return (
    <nav aria-label="Ruta de navegación" className={`text-xs sm:text-sm text-slate-500 ${className}`}>
      <ol className="flex items-center flex-wrap gap-1.5 sm:gap-2">
        <li className="inline-flex items-center">
          <Link
            to="/"
            className="inline-flex items-center gap-1 hover:text-[#003865] transition-colors"
            title="Inicio"
          >
            <Home className="w-3.5 h-3.5" />
            <span className="sr-only sm:not-sr-only">Inicio</span>
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1
          // En móvil solo se muestran el primer nivel y la página actual;
          // los niveles intermedios aparecen desde sm en adelante.
          const isMiddle = index < items.length - 1 && index > 0
          return (
            <li
              key={index}
              className={cn(
                'inline-flex items-center gap-1.5 sm:gap-2',
                isMiddle && 'hidden sm:inline-flex'
              )}
            >
              <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              {item.href && !isLast ? (
                <Link
                  to={item.href}
                  className="hover:text-[#003865] transition-colors truncate max-w-[160px] sm:max-w-none"
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  className="font-medium text-[#003865] truncate max-w-[200px] sm:max-w-none"
                  aria-current={isLast ? 'page' : undefined}
                >
                  {item.label}
                </span>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
