import { type ReactNode } from 'react'
import { Container } from './Container'
import { Breadcrumb, type BreadcrumbItem } from './Breadcrumb'
import { Badge } from '@/components/ui/Badge'

interface PageHeaderProps {
  title: string
  subtitle?: string
  breadcrumbs?: BreadcrumbItem[]
  badge?: string
  action?: ReactNode
  className?: string
}

export function PageHeader({
  title,
  subtitle,
  breadcrumbs,
  badge,
  action,
  className = '',
}: PageHeaderProps) {
  return (
    <div className={`bg-[#003865] border-b border-[#003865] py-8 sm:py-12 ${className}`}>
      <Container>
        {breadcrumbs && (
          <div className="mb-4">
            <Breadcrumb items={breadcrumbs} className="text-white/60 [&_a]:text-white/70 [&_a:hover]:text-white [&_.font-medium]:text-white [&_svg]:text-white/50" />
          </div>
        )}

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            {badge && (
              <Badge
                variant="accent"
                className="mb-2 text-xs font-bold uppercase tracking-widest shadow-xs"
              >
                {badge}
              </Badge>
            )}
            <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-2 text-sm sm:text-base text-white/80 max-w-2xl leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>

          {action && <div className="shrink-0">{action}</div>}
        </div>
      </Container>
    </div>
  )
}
