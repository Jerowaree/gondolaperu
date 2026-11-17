import { useState, useEffect, useCallback } from 'react'
import { motion, animate } from 'framer-motion'
import { ArrowRight, Package, Headphones } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { buildWhatsAppUrl } from '@/config/site'
import { handleImageError } from '@/lib/utils'
import { Button } from '@/components/ui/Button'
import type { CommercialLine } from '@/types/category'

interface HeroSectionProps {
  onExploreLine: (line: CommercialLine) => void
}

function AnimatedAccent({ text, color, active }: { text: string; color: string; active: boolean }) {
  const words = text.split(' ')
  const wordOffsets = words.map((_, wi) =>
    words.slice(0, wi).reduce((acc, w) => acc + w.length + 1, 0),
  )

  return (
    <span className="block mt-1 relative" style={{ color }}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {words.map((word, wi) => (
          <span key={wi} className="inline-block whitespace-nowrap">
            {word.split('').map((ch, ci) => {
              const i = wordOffsets[wi] + ci
              return (
                <motion.span
                  key={ci}
                  className="inline-block"
                  initial={{ opacity: 0, y: '0.4em', filter: 'blur(4px)' }}
                  animate={
                    active
                      ? { opacity: 1, y: 0, filter: 'blur(0px)' }
                      : { opacity: 0, y: '0.4em', filter: 'blur(4px)' }
                  }
                  transition={{
                    duration: active ? 0.4 : 0.15,
                    delay: active ? 0.3 + i * 0.03 : 0,
                    ease: 'easeOut',
                  }}
                >
                  {ch}
                </motion.span>
              )
            })}
            {wi < words.length - 1 ? ' ' : ''}
          </span>
        ))}
      </span>
    </span>
  )
}

const slides = [
  {
    id: 'detailing',
    image:
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1600&h=720&fit=crop&q=85',
    lineBadge: 'Línea Detailing',
    lineBadgeColor: 'bg-[#0082D6] text-white',
    LineIcon: Package,
    title: 'Cuidado y Detailing',
    titleAccent: 'Automotriz Premium',
    subtitle:
      'Shampoos, ceras, acondicionadores, desengrasantes y accesorios profesionales para el cuidado de tu vehículo. Precios claros y cotización inmediata en Piura.',
    primaryLabel: 'Ver Productos',
    line: 'automotriz' as CommercialLine,
    action: 'line' as const,
    secondaryLabel: 'Cotizar ahora',
    accentColor: '#0082D6',
    overlayFrom: 'from-[#001428]/90',
    overlayVia: 'via-[#002647]/65',
  },
  {
    id: 'asesoria',
    image:
      'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1600&h=720&fit=crop&q=85',
    lineBadge: 'Atención Directa',
    lineBadgeColor: 'bg-[#FCB800] text-slate-900',
    LineIcon: Headphones,
    title: 'Asesoría y',
    titleAccent: 'Cotización Directa',
    subtitle:
      'Te ayudamos a elegir el producto exacto según tu vehículo y necesidad. Atención personalizada por WhatsApp y teléfono, con cobertura en toda Piura.',
    primaryLabel: 'Contáctanos',
    line: 'automotriz' as CommercialLine,
    action: 'contact' as const,
    secondaryLabel: 'Escríbenos ahora',
    accentColor: '#FCB800',
    overlayFrom: 'from-[#001428]/92',
    overlayVia: 'via-[#002647]/65',
  },
]

export function HeroSection({ onExploreLine }: HeroSectionProps) {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

  const goTo = useCallback((index: number) => setActive(index), [])

  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id)
    if (!el) return
    const targetY = Math.max(0, el.getBoundingClientRect().top + window.scrollY - 88)
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      window.scrollTo(0, targetY)
      return
    }
    animate(window.scrollY, targetY, {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => window.scrollTo(0, v),
    })
  }, [])

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
                <motion.div
                  initial={{ opacity: 0, y: 28 }}
                  animate={
                    i === active
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 28 }
                  }
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  className="max-w-2xl xl:max-w-3xl flex flex-col gap-8 sm:gap-14 pb-24 sm:pb-28"
                >

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
                      <AnimatedAccent
                        text={slide.titleAccent}
                        color={slide.accentColor}
                        active={i === active}
                      />
                    </h1>

                    {/* Subtitle — más separado del título */}
                    <p className="mt-8 text-sm sm:text-base text-slate-300/90 leading-relaxed max-w-lg">
                      {slide.subtitle}
                    </p>
                  </div>

                  {/* CTA row — separado del copy */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      variant="accent"
                      size="lg"
                      onClick={() =>
                        slide.action === 'contact'
                          ? scrollToSection('contacto')
                          : onExploreLine(slide.line)
                      }
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
                  </div>

                </motion.div>
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

      {/* ── Slide dots (esquina superior derecha, fuera de los CTAs) ── */}
      <div className="absolute top-5 right-5 sm:top-6 sm:right-8 z-20 flex gap-2">
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
