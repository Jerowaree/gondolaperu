import { FaWhatsapp } from 'react-icons/fa'
import { whatsappConfig, buildWhatsAppUrl } from '@/config/site'

interface ProductInquiryButtonProps {
  productName: string
  className?: string
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
  label?: string
}

export function ProductInquiryButton({
  productName,
  className = '',
  size = 'md',
  fullWidth = false,
  label = 'Cotizar por WhatsApp',
}: ProductInquiryButtonProps) {
  const message = whatsappConfig.productMessage(productName)
  const url = buildWhatsAppUrl(message)

  const sizeClasses = {
    sm: 'text-xs px-3 py-1.5 rounded-lg gap-1.5',
    md: 'text-sm px-4 py-2.5 rounded-xl gap-2 font-bold',
    lg: 'text-base px-6 py-3.5 rounded-xl gap-2.5 font-bold',
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center bg-emerald-500 hover:bg-emerald-600 text-white shadow-sm hover:shadow transition-all duration-150 focus-visible:outline-2 focus-visible:outline-emerald-500 ${
        sizeClasses[size]
      } ${fullWidth ? 'w-full' : ''} ${className}`}
      title={`Solicitar cotización para ${productName}`}
    >
      <FaWhatsapp className="w-4 h-4 shrink-0 text-white" />
      <span>{label}</span>
    </a>
  )
}
