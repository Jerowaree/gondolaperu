import { FaWhatsapp } from 'react-icons/fa'
import { buildWhatsAppUrl } from '@/config/site'

interface WhatsAppFloatButtonProps {
  message?: string
}

export function WhatsAppFloatButton({ message }: WhatsAppFloatButtonProps) {
  const url = buildWhatsAppUrl(message)

  return (
    <aside
      aria-label="Atención comercial directa por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center group pointer-events-auto"
    >
      {/* Tooltip visible en hover desktop */}
      <span className="hidden sm:inline-block mr-3 px-3.5 py-1.5 text-xs font-bold text-slate-800 bg-white rounded-full shadow-lg border border-slate-200 transform translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none whitespace-nowrap">
        ¿Cotizaciones? Escríbenos ahora
      </span>

      {/* Botón flotante */}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-emerald-400"
        title="Chatear con un asesor comercial de GÓNDOLA PERÚ"
        aria-label="Abrir chat de WhatsApp con GÓNDOLA PERÚ"
      >
        <FaWhatsapp className="w-7 h-7 text-white" />
        <span className="sr-only">Contactar por WhatsApp</span>

        {/* Indicador de estado activo/online */}
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-600 border-2 border-white"></span>
        </span>
      </a>
    </aside>
  )
}
