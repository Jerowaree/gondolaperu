import { useState, useEffect, useCallback } from 'react'
import { ArrowRight, Package, HardHat } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { buildWhatsAppUrl } from '@/config/site'
import { handleImageError } from '@/lib/utils'
import { Button } from '@/components/ui/Button'

const slides = [
  {
    id: 'automotriz',
    image:
      'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=1600&h=720&fit=crop&q=85',
    lineBadge: 'Línea Automotriz',
    lineBadgeColor: 'bg-[#0082D6] text-white',
    LineIcon: Package,
    title: 'Repuestos Automotrices',
    titleAccent: 'para Talleres y Flotas',
    subtitle:
      'Autopartes, baterías, frenos, amortiguadores, lubricantes y componentes mecánicos. Atención personalizada y cotización inmediata en Piura.',
    primaryLabel: 'Ver Repuestos',
    primaryTo: '/catalogo?linea=automotriz',
    secondaryLabel: 'Cotizar ahora',
    accentColor: '#0082D6',
    overlayFrom: 'from-[#001428]/90',
    overlayVia: 'via-[#002647]/65',
  },
  {
    id: 'construccion',
    image:
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&h=720&fit=crop&q=85',
    lineBadge: 'Línea Construcción',
    lineBadgeColor: 'bg-[#FCB800] text-slate-900',
    LineIcon: HardHat,
    title: 'Materiales de Obra',
    titleAccent: 'y Ferretería Industrial',
    subtitle:
      'Cemento, herramientas, PVC, pernería, aditivos y suministros para proyectos de construcción y refacción. Consulta directa y precios para Piura.',
    primaryLabel: 'Ver Materiales',
    primaryTo: '/catalogo?linea=construccion',
    secondaryLabel: 'Cotizar ahora',
    accentColor: '#FCB800',
    overlayFrom: 'from-[#0d1a0d]/92',
    overlayVia: 'via-[#172B3A]/65',
  },
]

export function HeroSection() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

  const goTo = useCallback((index: number) => setActive(index), [])

  useEffect(() => {
    if (paused) return
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length)
    }, 5500)
    return () => clearInterval(timer)
  }, [paused])

  const whatsappUrl = buildWhatsAppUrl(
    'Hola GÓNDOLA PERÚ, deseo solicitar cotización de repuestos automotrices / materiales de construcción.',
  )

  return (
    <section
      className="relative overflow-hidden w-full"
      style={{ minHeight: 'clamp(560px, 62vw, 660px)' }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ── Slides ─────────────────────────────────────────────────── */}
      {slides.map((slide, i) => {
        const LineIcon = slide.LineIcon
        return (
          <div
            key={slide.id}
            className="absolute inset-0 transition-opacity duration-800"
            style={{ opacity: i === active ? 1 : 0, zIndex: i === active ? 1 : 0 }}
            aria-hidden={i !== active}
          >
            {/* BG image */}
            <img
              src={slide.image}
              alt=""
              onError={handleImageError}
              className="absolute inset-0 w-full h-full object-cover object-center"
              loading={i === 0 ? 'eager' : 'lazy'}
            />

            {/* Multi-layer overlay: left-to-right + dark vignette bottom */}
            <div
              className={`absolute inset-0 bg-gradient-to-r ${slide.overlayFrom} ${slide.overlayVia} to-transparent`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

            {/* ── Content ─────────────────────────── */}
            <div className="relative z-10 h-full flex items-start pt-16 sm:pt-20" style={{ minHeight: 'inherit' }}>
              <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
                <div className="max-w-2xl xl:max-w-3xl flex flex-col gap-8 sm:gap-14 pb-24 sm:pb-28">

                  {/* Copy block */}
                  <div>
                    {/* Line badge */}
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold uppercase tracking-wider mb-6 ${slide.lineBadgeColor}`}
                    >
                      <LineIcon className="w-3.5 h-3.5" />
                      {slide.lineBadge}
                    </span>

                    {/* Headline */}
                    <h1
                      className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.05] tracking-tight"
                      style={{ fontFamily: "'Space Grotesk', ui-sans-serif, system-ui, sans-serif" }}
                    >
                      {slide.title}
                      <span
                        className="block mt-1"
                        style={{ color: slide.accentColor }}
                      >
                        {slide.titleAccent}
                      </span>
                    </h1>

                    {/* Subtitle — más separado del título */}
                    <p className="mt-8 text-sm sm:text-base text-slate-300/90 leading-relaxed max-w-lg">
                      {slide.subtitle}
                    </p>
                  </div>

                  {/* CTA row — separado del copy */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      to={slide.primaryTo}
                      variant="accent"
                      size="lg"
                      icon={<LineIcon className="w-4 h-4" />}
                      iconRight={<ArrowRight className="w-4 h-4" />}
                    >
                      {slide.primaryLabel}
                    </Button>

                    <Button
                      href={whatsappUrl}
                      external
                      size="lg"
                      className="bg-emerald-500 hover:bg-emerald-400 text-white border-transparent"
                      icon={<FaWhatsapp className="w-4 h-4" />}
                    >
                      {slide.secondaryLabel}
                    </Button>

                    <Button
                      to="/nosotros"
                      size="lg"
                      className="border border-white/30 bg-transparent text-white hover:border-white/60 hover:bg-white/10"
                    >
                      Nosotros
                    </Button>
                  </div>

                </div>
              </div>
            </div>
          </div>
        )
      })}

      {/* ── Slide Indicator strip (bottom) ─────────────────────── */}
      <div className="absolute bottom-0 left-0 right-0 z-20 flex">
        {slides.map((slide, i) => (
          <button
            key={slide.id}
            onClick={() => goTo(i)}
            aria-label={`Ir a slide ${i + 1}`}
            className="relative flex-1 h-1.5 bg-white/20 overflow-hidden transition-colors hover:bg-white/40"
          >
            <span
              className="absolute inset-0 bg-[#FCB800] transition-transform duration-[5500ms] ease-linear origin-left"
              style={{
                transform: i === active ? 'scaleX(1)' : 'scaleX(0)',
              }}
            />
          </button>
        ))}
      </div>

      {/* ── Slide dots ─────────────────────────────────────────── */}
      <div className="absolute bottom-6 right-6 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Ir al slide ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              i === active
                ? 'bg-[#FCB800] w-6 h-2'
                : 'bg-white/40 hover:bg-white/70 w-2 h-2'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
