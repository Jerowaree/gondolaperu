import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

export const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'border-transparent bg-[#003865] text-white',
        secondary: 'border-transparent bg-[#0082D6] text-white',
        destructive: 'border-transparent bg-destructive text-destructive-foreground',
        outline: 'text-slate-600 border-slate-300 bg-transparent',
        primary: 'bg-[#e6f2f8] text-[#003865] border-[#b6d9ec]',
        accent: 'bg-[#FCB800] text-[#172B3A] border-[#e8c800]',
        neutral: 'bg-slate-100 text-slate-700 border-slate-200',
      },
      size: {
        default: 'px-2.5 py-0.5 text-xs',
        sm: 'px-2 py-0 text-[0.7rem]',
        lg: 'px-3 py-1 text-sm',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, size, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant, size }), className)} {...props} />
}
