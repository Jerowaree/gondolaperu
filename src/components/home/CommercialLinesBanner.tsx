import { Sparkles, Wrench } from 'lucide-react'
import { StackzeroBanner } from '@/components/commerce/StackzeroBanner'

export function CommercialLinesBanner() {
  return (
    <section className="bg-[#F5F7F9] py-0">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Banner Línea Detailing Automotriz */}
        <StackzeroBanner
          badge="Línea Detailing"
          variant="automotriz"
          icon={<Sparkles className="w-3.5 h-3.5 inline text-[#bae6fd]" />}
          title="Cuidado, Lavado y"
          highlightText="Detailing Premium"
          description="Shampoos pH neutro, ceras hidrofóbicas, acondicionadores, desengrasantes y accesorios profesionales Auto Premium para vehículos de todos los tamaños."
          linkText="Explorar Productos de Detailing"
          linkTo="/catalogo?linea=automotriz"
          imageUrl="/products/champu-con-cera-ph-neutro-shampoo-ultra-wax-20-litros.jpg"
        />

        {/* Banner Línea Complementaria: Servicios de Taller */}
        <StackzeroBanner
          badge="Línea Complementaria"
          variant="automotriz"
          icon={<Wrench className="w-3.5 h-3.5 inline text-[#bae6fd]" />}
          title="Servicios de Taller y"
          highlightText="Mantenimiento"
          description="Mantenimiento preventivo, sistema de frenos, suspensión y dirección, y diagnóstico del sistema eléctrico con técnicos especializados en Piura."
          linkText="Ver Servicios de Taller"
          linkTo="/#servicios"
          imageUrl="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=900&h=600&fit=crop&q=85"
          contentAlign="right"
        />
      </div>
    </section>
  )
}
