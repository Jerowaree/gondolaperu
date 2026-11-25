import { type ReactNode } from 'react'
import { Button } from './button'

interface EmptyStateProps {
  icon?: ReactNode
  title: string
  description?: string
  actionText?: string
  onAction?: () => void
  actionHref?: string
  className?: string
}

export function EmptyState({
  icon,
  title,
  description,
  actionText,
  onAction,
  actionHref,
  className = '',
}: EmptyStateProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center text-center p-8 sm:p-12 rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50/60 max-w-lg mx-auto ${className}`}
    >
      {icon && <div className="mb-4 inline-flex items-center justify-center p-4 bg-white rounded-full shadow-xs border border-slate-200">{icon}</div>}
      <h3 className="text-lg sm:text-xl font-bold text-[#003865]">{title}</h3>
      {description && (
        <p className="mt-2 text-xs sm:text-sm text-slate-600 max-w-md leading-relaxed">
          {description}
        </p>
      )}
      {(actionText && onAction) && (
        <div className="mt-6">
          <Button variant="primary" size="sm" onClick={onAction}>
            {actionText}
          </Button>
        </div>
      )}
      {(actionText && actionHref) && (
        <div className="mt-6">
          <Button variant="primary" size="sm" to={actionHref}>
            {actionText}
          </Button>
        </div>
      )}
    </div>
  )
}
