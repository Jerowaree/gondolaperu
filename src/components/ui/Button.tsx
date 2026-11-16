import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

export const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 select-none active:scale-[0.99]',
  {
    variants: {
      variant: {
        default: 'bg-[#003865] text-white shadow-sm hover:bg-[#002647]',
        primary: 'bg-[#003865] text-white shadow-sm hover:bg-[#002647]',
        destructive: 'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
        outline: 'border border-[#003865] bg-transparent text-[#003865] shadow-sm hover:bg-slate-50',
        secondary: 'bg-[#0082D6] text-white shadow-sm hover:bg-[#006CB7]',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
        accent: 'bg-[#FCB800] text-[#172B3A] font-semibold shadow-sm hover:bg-[#e0a800]',
      },
      size: {
        default: 'h-10 px-5 py-2.5',
        xs: 'h-6 rounded-md px-2 text-xs',
        sm: 'h-8 rounded-lg px-3.5 text-xs',
        md: 'h-10 px-5 py-2.5',
        lg: 'h-12 rounded-xl px-7 text-base font-semibold',
        icon: 'h-10 w-10',
        'icon-sm': 'h-7 w-7 rounded-lg',
        'icon-xs': 'h-6 w-6 rounded-md',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  to?: string
  href?: string
  external?: boolean
  icon?: React.ReactNode
  iconRight?: React.ReactNode
  fullWidth?: boolean
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, to, href, external, icon, iconRight, fullWidth, children, ...props }, ref) => {
    const classes = cn(buttonVariants({ variant, size }), fullWidth && 'w-full', className)

    const content = (
      <>
        {icon && <span className="inline-flex shrink-0 items-center">{icon}</span>}
        {children}
        {iconRight && <span className="inline-flex shrink-0 items-center">{iconRight}</span>}
      </>
    )

    if (to) {
      return <Link to={to} className={classes}>{content}</Link>
    }

    if (href) {
      return (
        <a
          href={href}
          className={classes}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
        >
          {content}
        </a>
      )
    }

    if (asChild) {
      const Comp = Slot
      return <Comp className={classes} ref={ref} {...props}>{children}</Comp>
    }

    return (
      <button className={classes} ref={ref} {...props}>
        {content}
      </button>
    )
  }
)
Button.displayName = 'Button'
