import { type ReactNode } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { buildWhatsAppUrl } from '@/config/site'

interface WhatsAppButtonProps {
  message?: string
  children?: ReactNode
  variant?: 'primary' | 'outline' | 'subtle'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  fullWidth?: boolean
  showIcon?: boolean
}

const variantClasses = {
  primary:
    'bg-emerald-500 hover:bg-emerald-600 text-white shadow-sm hover:shadow active:scale-[0.99] border border-transparent font-bold',
  outline:
    'bg-transparent hover:bg-emerald-50 text-emerald-700 border border-emerald-400 font-semibold',
  subtle:
    'bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 font-medium',
}

const sizeClasses = {
  sm: 'text-xs px-3 py-1.5 rounded-lg gap-1.5',
  md: 'text-sm px-4 py-2.5 rounded-xl gap-2',
  lg: 'text-base px-6 py-3.5 rounded-xl gap-2.5',
}

export function WhatsAppButton({
  message,
  children = 'Consultar por WhatsApp',
  variant = 'primary',
  size = 'md',
  className = '',
  fullWidth = false,
  showIcon = true,
}: WhatsAppButtonProps) {
  const url = buildWhatsAppUrl(message)

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center transition-all duration-150 focus-visible:outline-2 focus-visible:outline-emerald-500 ${
        variantClasses[variant]
      } ${sizeClasses[size]} ${fullWidth ? 'w-full' : ''} ${className}`}
      title="Escríbenos directamente por WhatsApp"
    >
      {showIcon && <FaWhatsapp className="w-4 h-4 shrink-0 text-current" />}
      <span>{children}</span>
    </a>
  )
}
