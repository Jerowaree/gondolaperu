import { Sparkles, Headphones } from 'lucide-react'
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
          imageUrl="https://images.unsplash.com/photo-1633014041037-f5446fb4ce99?w=900&h=600&fit=crop&q=85"
        />

        {/* Banner Atención Directa: Asesoría y Cotización */}
        <StackzeroBanner
          badge="Atención Directa"
          variant="automotriz"
          icon={<Headphones className="w-3.5 h-3.5 inline text-[#bae6fd]" />}
          title="Asesoría y"
          highlightText="Cotización Directa"
          description="Te ayudamos a elegir el producto exacto según tu vehículo y necesidad. Atención personalizada por WhatsApp y teléfono, con cobertura en toda Piura."
          linkText="Contáctanos"
          linkTo="/#contacto"
          imageUrl="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=900&h=600&fit=crop&q=85"
          contentAlign="right"
        />
      </div>
    </section>
  )
}
