import { Phone, MapPin } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { buildWhatsAppUrl, whatsappConfig } from '@/config/site'
import { company } from '@/data/company'

export function ContactCTA() {
  const whatsappUrl = buildWhatsAppUrl('Hola GÓNDOLA PERÚ, quiero solicitar asesoría y cotización sobre sus productos y servicios.')

  return (
    <section id="contacto" className="py-20 sm:py-28 bg-[#003865] text-white relative overflow-hidden scroll-mt-24">
      {/* Elemento decorativo sutil */}
      <div className="absolute inset-0 opacity-5 pointer-events-none select-none" aria-hidden="true">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-white" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center space-y-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
            Cotiza en minutos.
            <span className="block text-[#FCB800] mt-2">Te atendemos ahora.</span>
          </h2>
          <p className="text-sm sm:text-base text-white/80 max-w-xl leading-relaxed">
            Escríbenos por WhatsApp o llámanos directamente. Disponibilidad, marcas, especificaciones técnicas y precios para {company.city} y la región.
          </p>

          <div className="inline-flex items-center gap-2 text-sm text-white/70">
            <MapPin className="w-4 h-4 text-[#FCB800] shrink-0" />
            <span>Atención en Piura — Veintiséis de Octubre</span>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              href={whatsappUrl}
              external
              size="lg"
              className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl"
              icon={<FaWhatsapp className="w-5 h-5" />}
            >
              Chatear por WhatsApp
            </Button>

            <Button
              href="tel:+51951545204"
              external
              variant="outline"
              size="lg"
              icon={<Phone className="w-5 h-5 text-white" />}
              className="w-full sm:w-auto border-white/40 text-white hover:bg-white/10"
            >
              Llamar al {whatsappConfig.displayNumber}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
