import {
  Gauge,
  Disc,
  CarFront,
  Battery,
  type LucideIcon,
} from 'lucide-react'
import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import { Container } from '@/components/ui/Container'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { Button } from '@/components/ui/Button'
import { company } from '@/data/company'
import { buildWhatsAppUrl, whatsappConfig } from '@/config/site'

export const serviceIcons: Record<string, LucideIcon> = {
  Wrench: Gauge,
  Disc,
  Shield: CarFront,
  Zap: Battery,
}

export function ServicesSection() {
  return (
    <section id="servicios" className="py-20 sm:py-28 bg-gradient-to-b from-[#f8fafc] to-white border-b border-slate-200">
      <Container>
        <SectionTitle
          align="center"
          pretitle="Línea Complementaria"
          title="Servicios de Mantenimiento y Reparación Automotriz"
          subtitle="Además de abastecer repuestos y partes mecánicas, ofrecemos servicios técnicos especializados para mantener tu vehículo en óptimas condiciones de funcionamiento."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10">
          {company.services.map((service, idx) => {
            const serviceWhatsappUrl = buildWhatsAppUrl(whatsappConfig.serviceMessage(service.title))
            const ServiceIcon = serviceIcons[service.icon] ?? Gauge

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: idx * 0.08, ease: 'easeOut' }}
                className="group bg-white rounded-2xl border border-slate-200/80 px-6 py-12 sm:px-8 sm:py-14 flex flex-col items-center text-center shadow-[0_1px_2px_rgba(16,24,40,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_-8px_rgba(16,24,40,0.14)]"
              >
                {/* Contenido centrado verticalmente */}
                <div className="flex-1 flex flex-col items-center justify-center">
                  {/* Icono del servicio */}
                  <div className="w-16 h-16 rounded-2xl bg-slate-100 text-slate-600 flex items-center justify-center mb-8 transition-colors duration-300 group-hover:bg-[#003865] group-hover:text-white">
                    <ServiceIcon className="w-7 h-7" />
                  </div>

                  <h3 className="font-bold text-base sm:text-lg text-[#172B3A] mb-3 leading-snug">
                    {service.title}
                  </h3>
                  <br />

                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mt-3">
                    {service.description}
                  </p>
                </div>

                <Button
                  href={serviceWhatsappUrl}
                  external
                  size="sm"
                  className="mt-10 w-full bg-emerald-500 hover:bg-emerald-600 text-white border-transparent"
                  icon={<FaWhatsapp className="w-3.5 h-3.5" />}
                >
                  Consultar
                </Button>
              </motion.div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
