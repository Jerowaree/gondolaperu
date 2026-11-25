import { Phone, MapPin } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { buildWhatsAppUrl, whatsappConfig } from '@/config/site'
import { company } from '@/data/company'

export function ContactCTA() {
  const whatsappUrl = buildWhatsAppUrl(
    'Hola GÓNDOLA PERÚ, quiero solicitar asesoría y cotización sobre sus productos y servicios.',
  )

  return (
    <section className="relative py-16 sm:py-20 bg-[#003865] text-white overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#0082D6]/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-[#FCB800]/10 blur-3xl" />
      </div>

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#FCB800] to-transparent" />

      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Pre-title */}
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#FCB800]/80 mb-4">
            <span className="w-4 h-px bg-[#FCB800]/60" />
            Atención Directa
            <span className="w-4 h-px bg-[#FCB800]/60" />
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4">
            Cotiza en minutos.
            <span className="block text-[#FCB800]">Te atendemos ahora.</span>
          </h2>

          <p className="text-sm sm:text-base text-white/70 max-w-xl mx-auto leading-relaxed mb-6">
            Escríbenos por WhatsApp o llámanos directamente. Disponibilidad, especificaciones
            técnicas y precios para {company.city} y la región norte.
          </p>

          <div className="inline-flex items-center gap-2 text-xs text-white/50 mb-8">
            <MapPin className="w-3.5 h-3.5 text-[#FCB800]" />
            <span>Veintiséis de Octubre, Piura — Atención en tienda y por WhatsApp</span>
          </div>

          <Separator className="mb-8 opacity-10" />

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 py-3.5 px-8 rounded-xl text-base font-bold bg-emerald-500 hover:bg-emerald-400 text-white shadow-xl hover:shadow-emerald-500/30 transition-all hover:-translate-y-0.5"
            >
              <FaWhatsapp className="w-5 h-5" />
              <span>Escribir por WhatsApp</span>
            </a>

            <Button
              href="tel:+51951545204"
              external
              variant="outline"
              size="lg"
              icon={<Phone className="w-4 h-4" />}
              className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10 hover:border-white/60"
            >
              {whatsappConfig.displayNumber}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
