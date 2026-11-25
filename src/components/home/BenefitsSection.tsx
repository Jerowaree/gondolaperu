import { Grid3X3, Headphones, Users, MessageCircle } from 'lucide-react'
import { Separator } from '@/components/ui/separator'

const blocks = [
  {
    id: 'catalogo',
    icon: Grid3X3,
    title: 'Amplio Catálogo',
    description:
      'Repuestos automotrices, materiales de construcción y herramientas organizadas en dos líneas especializadas.',
  },
  {
    id: 'asesoria',
    icon: Headphones,
    title: 'Asesoría Técnica',
    description:
      'Orientación especializada para elegir el repuesto exacto o los materiales precisos para su proyecto.',
  },
  {
    id: 'atencion',
    icon: Users,
    title: 'Atención Personalizada',
    description:
      'Trato directo con asesores comerciales capacitados para resolver sus necesidades de abastecimiento.',
  },
  {
    id: 'cotizacion',
    icon: MessageCircle,
    title: 'Cotización Inmediata',
    description:
      'Canal directo por WhatsApp para consultar disponibilidad, especificaciones y obtener cotizaciones al instante.',
  },
]

export function BenefitsSection() {
  return (
    <section className="bg-[#001c36] w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top accent stripe */}
        <div className="h-0.5 bg-gradient-to-r from-transparent via-[#FCB800] to-transparent opacity-40 mb-0" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/8">
          {blocks.map((block) => {
            const Icon = block.icon
            return (
              <div
                key={block.id}
                className="group p-7 sm:p-8 hover:bg-white/4 transition-colors"
              >
                <div className="mb-5 w-11 h-11 rounded-2xl bg-[#FCB800]/15 border border-[#FCB800]/20 flex items-center justify-center group-hover:bg-[#FCB800]/25 transition-colors">
                  <Icon className="w-5 h-5 text-[#FCB800]" />
                </div>
                <Separator className="mb-4 opacity-10" />
                <h3 className="text-white font-bold text-base mb-2 tracking-tight">
                  {block.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {block.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
