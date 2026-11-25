import { Wrench, Settings, Gauge, Zap, CheckCircle2 } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { Container } from '@/components/ui/Container'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { company } from '@/data/company'
import { buildWhatsAppUrl, whatsappConfig } from '@/config/site'

const serviceIcons = [Wrench, Settings, Gauge, Zap]

export function ServicesSection() {
  return (
    <section id="servicios" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <Container>
        <SectionTitle
          align="center"
          pretitle="Línea Complementaria"
          title="Mantenimiento y Reparación Automotriz"
          subtitle="Además de repuestos y autopartes, brindamos servicios técnicos especializados para mantener tu vehículo en condiciones óptimas."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {company.services.map((service, idx) => {
            const ServiceIcon = serviceIcons[idx % serviceIcons.length]
            const serviceWhatsappUrl = buildWhatsAppUrl(
              whatsappConfig.serviceMessage(service.title),
            )

            return (
              <Card
                key={service.id}
                className="flex flex-col rounded-2xl border border-slate-200 hover:border-[#0082D6]/40 hover:shadow-xl transition-all duration-300 gap-0 p-0"
              >
                <CardContent className="flex-1 p-6">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-2xl bg-[#e6eff7] flex items-center justify-center mb-5 shadow-sm">
                    <ServiceIcon className="w-6 h-6 text-[#003865]" />
                  </div>

                  {/* Badge */}
                  <Badge variant="primary" className="mb-3 text-[10px] font-bold">
                    Servicio Técnico
                  </Badge>

                  <h3 className="font-bold text-base text-[#172B3A] mb-2 leading-snug">
                    {service.title}
                  </h3>

                  <p className="text-xs text-slate-500 leading-relaxed mb-4">
                    {service.description}
                  </p>

                  <Separator className="mb-4" />

                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter className="p-4 pt-0 border-0 bg-transparent">
                  <a
                    href={serviceWhatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold bg-emerald-50 text-emerald-800 hover:bg-emerald-500 hover:text-white border border-emerald-200 hover:border-emerald-500 transition-all"
                  >
                    <FaWhatsapp className="w-3.5 h-3.5" />
                    <span>Consultar Servicio</span>
                  </a>
                </CardFooter>
              </Card>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
