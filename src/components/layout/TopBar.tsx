import { Phone, MapPin } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { Container } from '@/components/ui/Container'
import { company } from '@/data/company'
import { buildWhatsAppUrl, whatsappConfig } from '@/config/site'

export function TopBar() {
  const whatsappUrl = buildWhatsAppUrl('Hola GÓNDOLA PERÚ, deseo solicitar información y una cotización.')

  return (
    <div className="bg-[#001c36] text-white/85 text-xs py-1.5 border-b border-white/10 hidden sm:block">
      <Container>
        <div className="flex items-center justify-between gap-4">
          {/* Izquierda: Ubicación */}
          <div className="flex items-center gap-1.5 text-white/65">
            <MapPin className="w-3.5 h-3.5 text-[#FCB800] shrink-0" />
            <span>{company.district}, {company.city} — Perú</span>
          </div>

          {/* Derecha: Teléfono + WhatsApp badge */}
          <div className="flex items-center gap-4">
            <a
              href="tel:+51951545204"
              className="inline-flex items-center gap-1.5 text-white/75 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#FCB800] shrink-0" />
              <span>{whatsappConfig.displayNumber}</span>
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-emerald-500/90 hover:bg-emerald-500 text-white px-2.5 py-0.5 rounded-full font-semibold transition-colors"
            >
              <FaWhatsapp className="w-3 h-3 shrink-0" />
              <span>Atención y Cotizaciones por WhatsApp</span>
            </a>
          </div>
        </div>
      </Container>
    </div>
  )
}
