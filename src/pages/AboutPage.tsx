import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { MapPin, Phone, ShieldCheck, CheckCircle2, Building2, Shield } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { MainLayout } from '@/components/layout/MainLayout'
import { Container } from '@/components/ui/Container'
import { PageHeader } from '@/components/ui/PageHeader'
import { Button } from '@/components/ui/Button'
import { company, benefits } from '@/data/company'
import { serviceIcons } from '@/components/home/ServicesSection'
import { siteConfig, buildWhatsAppUrl, whatsappConfig } from '@/config/site'

export default function AboutPage() {
  const whatsappUrl = buildWhatsAppUrl('Hola GÓNDOLA PERÚ, deseo comunicarme con el área comercial.')

  return (
    <MainLayout>
      <Helmet>
        <title>Sobre Nosotros — {siteConfig.name}</title>
        <meta
          name="description"
          content={`Conoce a ${company.legalName} (${company.tradeName}), empresa comercial especializada en repuestos automotrices, materiales de construcción y mantenimiento vehicular en Piura, Perú.`}
        />
      </Helmet>

      <PageHeader
        badge="Nuestra Empresa"
        title="Acerca de GÓNDOLA PERÚ"
        subtitle="Empresa comercial formal perteneciente a GÓNDOLA VARIEDAD Y EXPERIENCIA S.A.C., dedicada a brindar soluciones integrales en repuestos automotrices, materiales de construcción y servicios de taller."
        breadcrumbs={[{ label: 'Nosotros' }]}
      />

      {/* Sección principal de presentación */}
      <section className="py-16 sm:py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Texto corporativo (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0082D6]">
                <Building2 className="w-4 h-4" />
                <span>Razón Social Oficial: {company.legalName}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#003865] tracking-tight">
                Soluciones integrales para el sector automotriz y de la construcción en el norte del Perú
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                {company.description.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* Puntos destacados */}
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#0082D6] shrink-0 mt-0.5" />
                  <span>Ubicados en el distrito Veintiséis de Octubre, Piura</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#0082D6] shrink-0 mt-0.5" />
                  <span>Línea Automotriz: autopartes, repuestos y accesorios</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#0082D6] shrink-0 mt-0.5" />
                  <span>Línea Construcción: materiales, herramientas y suministros</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#0082D6] shrink-0 mt-0.5" />
                  <span>Servicios de mantenimiento y reparación mecánica</span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-3">
                <Button
                  href={whatsappUrl}
                  external
                  className="bg-emerald-500 hover:bg-emerald-600 text-white shadow-md"
                  icon={<FaWhatsapp className="w-4 h-4" />}
                >
                  Contactar por WhatsApp
                </Button>
                <Button to="/catalogo" variant="outline">
                  Ver Catálogo de Productos
                </Button>
              </div>
            </div>

            {/* Tarjeta de Información y Ubicación (5 cols) */}
            <div className="lg:col-span-5">
              <div className="bg-gradient-to-br from-[#001c36] via-[#053d5e] to-[#003865] text-white p-8 rounded-3xl shadow-xl relative overflow-hidden">
                <div className="w-16 h-16 rounded-2xl bg-white p-2 mb-6 shadow-md">
                  <img
                    src="/logos/gondolalogo.png"
                    alt="Logo GÓNDOLA PERÚ"
                    className="w-full h-full object-contain"
                  />
                </div>

                <h3 className="text-xl font-bold mb-1 text-white">
                  Identidad Comercial
                </h3>
                <p className="text-xs text-slate-300 mb-6">
                  {company.legalName}
                </p>

                <div className="space-y-4 text-xs sm:text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#FCB800] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold block text-white">Sede Operativa:</span>
                      <span className="text-slate-200">
                        Distrito {company.district}, {company.city}, {company.region} — {company.country}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-[#FCB800] shrink-0" />
                    <div>
                      <span className="font-semibold block text-white">Línea Telefónica / WhatsApp:</span>
                      <a href="tel:+51951545204" className="text-slate-200 hover:text-white transition-colors">
                        {whatsappConfig.displayNumber}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-[#FCB800] shrink-0" />
                    <div>
                      <span className="font-semibold block text-white">Líneas de Negocio:</span>
                      <span className="text-slate-200">Automotriz, Construcción y Mantenimiento</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <ShieldCheck className="w-5 h-5 text-[#FCB800] shrink-0" />
                    <div>
                      <span className="font-semibold block text-white">Régimen:</span>
                      <span className="text-slate-200">Sociedad Anónima Cerrada (S.A.C.)</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <Button
                    href={whatsappUrl}
                    external
                    fullWidth
                    className="bg-emerald-500 hover:bg-emerald-600 text-white"
                    icon={<FaWhatsapp className="w-4 h-4" />}
                  >
                    Iniciar Chat de WhatsApp
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Servicios Automotrices Complementarios */}
      <section className="py-16 bg-[#f8fafc] border-t border-slate-200">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0082D6]">
              Servicios Complementarios
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#003865] mt-1">
              Taller y Mantenimiento Vehicular
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Personal capacitado y repuestos a la mano para brindar un servicio rápido y confiable a transportistas y particulares.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10">
            {company.services.map((s, idx) => {
              const ServiceIcon = serviceIcons[s.icon] ?? serviceIcons.Wrench
              return (
                <motion.div
                  key={s.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.45, delay: idx * 0.08, ease: 'easeOut' }}
                  className="bg-white rounded-2xl border border-slate-200/80 px-6 py-12 sm:px-8 sm:py-14 flex flex-col items-center text-center shadow-[0_1px_2px_rgba(16,24,40,0.05)]"
                >
                  <div className="flex-1 flex flex-col items-center justify-center">
                    <div className="w-16 h-16 rounded-2xl bg-slate-100 text-slate-600 flex items-center justify-center mb-8">
                      <ServiceIcon className="w-7 h-7" />
                    </div>
                    <h3 className="font-bold text-base sm:text-lg text-[#172B3A] mb-6 leading-snug">
                      {s.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                      {s.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* Pilares y beneficios */}
      <section className="py-16 bg-white border-t border-slate-200">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0082D6]">
              Nuestros Valores
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#003865] mt-1">
              Pilares que guían nuestro trabajo
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div key={b.id} className="bg-slate-50 p-6 rounded-3xl border border-slate-200/80 shadow-2xs">
                <h3 className="font-bold text-base text-[#003865] mb-2">{b.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{b.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </MainLayout>
  )
}
