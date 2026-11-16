import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface NavDropdownGroup {
  label: string
  accentColor?: 'blue' | 'amber'
  items: { id: string; name: string; href: string }[]
  viewAllHref?: string
  viewAllLabel?: string
}

interface NavDropdownProps {
  label: string
  icon?: React.ReactNode
  groups: NavDropdownGroup[]
  className?: string
}

export function NavDropdown({ label, icon, groups, className }: NavDropdownProps) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  return (
    <div
      ref={ref}
      className={cn('relative', className)}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* ── Trigger ─────────────────────────────────────────────── */}
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        className={cn(
          'inline-flex w-fit items-center gap-1.5 px-5 h-11 text-sm font-semibold select-none transition-colors duration-150',
          'bg-[#FCB800] text-[#172B3A] hover:bg-[#e0a800]',
          open && 'bg-[#e0a800]'
        )}
      >
        {icon && <span className="shrink-0">{icon}</span>}
        <span className="whitespace-nowrap">{label}</span>
        <ChevronDown
          className={cn(
            'w-3.5 h-3.5 shrink-0 transition-transform duration-200',
            open ? 'rotate-180' : 'rotate-0'
          )}
        />
      </button>

      {/* ── Panel ───────────────────────────────────────────────── */}
      <div
        className={cn(
          'absolute top-full left-0 z-50 overflow-hidden bg-white border border-slate-200 shadow-xl',
          // dos columnas si hay 2 grupos
          groups.length >= 2 ? 'w-[520px] grid grid-cols-2' : 'w-64',
          // animación suave
          'transition-all duration-150 origin-top-left',
          open ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'
        )}
      >
        {groups.map((group, gi) => {
          const isAmber = group.accentColor === 'amber'

          return (
            <div
              key={gi}
              className={cn(
                'flex flex-col',
                // separador vertical entre columnas
                gi > 0 && groups.length >= 2 && 'border-l border-slate-100'
              )}
            >
              {/* Group header */}
              <div
                className={cn(
                  'flex items-center gap-2 px-4 py-3 border-b',
                  isAmber
                    ? 'bg-amber-50 border-amber-100'
                    : 'bg-[#003865] border-[#003865]'
                )}
              >
                {/* Pill de color */}
                <span
                  className={cn(
                    'w-1.5 h-1.5 rounded-full shrink-0',
                    isAmber ? 'bg-amber-500' : 'bg-[#FCB800]'
                  )}
                />
                <span
                  className={cn(
                    'text-[10px] font-bold uppercase tracking-widest',
                    isAmber ? 'text-amber-800' : 'text-white'
                  )}
                >
                  {group.label}
                </span>
              </div>

              {/* Items */}
              <div className="py-1.5">
                {group.items.map((item) => (
                  <Link
                    key={item.id}
                    to={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      'group/item flex items-center justify-between px-4 py-2 text-sm text-slate-600 transition-colors duration-100',
                      isAmber
                        ? 'hover:bg-amber-50 hover:text-amber-900'
                        : 'hover:bg-[#EEF4FB] hover:text-[#003865]'
                    )}
                  >
                    <span>{item.name}</span>
                    <ArrowRight
                      className={cn(
                        'w-3 h-3 shrink-0 opacity-0 -translate-x-1 transition-all duration-150 group-hover/item:opacity-100 group-hover/item:translate-x-0',
                        isAmber ? 'text-amber-500' : 'text-[#0082D6]'
                      )}
                    />
                  </Link>
                ))}
              </div>

              {/* View all */}
              {group.viewAllHref && (
                <div
                  className={cn(
                    'mt-auto px-4 py-3 border-t',
                    isAmber ? 'border-amber-100' : 'border-slate-100'
                  )}
                >
                  <Link
                    to={group.viewAllHref}
                    onClick={() => setOpen(false)}
                    className={cn(
                      'inline-flex items-center gap-1.5 text-xs font-bold transition-colors',
                      isAmber
                        ? 'text-amber-700 hover:text-amber-900'
                        : 'text-[#003865] hover:text-[#0082D6]'
                    )}
                  >
                    {group.viewAllLabel ?? 'Ver todo'}
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
