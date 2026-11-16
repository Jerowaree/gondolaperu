import { Grid3X3, Headphones, Users, MessageCircle } from 'lucide-react'

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
    <section className="bg-[#0d1f2d] w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {blocks.map((block, i) => {
            const Icon = block.icon
            const isLast = i === blocks.length - 1
            return (
              <div
                key={block.id}
                className={`p-6 sm:p-8 hover:bg-white/5 transition-colors ${
                  !isLast ? 'border-b sm:border-b-0 sm:border-r border-white/10 lg:border-b-0 lg:border-r' : ''
                }`}
              >
                <div className="mb-4 w-12 h-12 rounded-xl bg-[#FCB800]/20 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-[#FCB800]" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{block.title}</h3>
                <p className="text-slate-300/90 text-sm leading-relaxed">{block.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
