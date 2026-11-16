import { Shield, Wrench } from 'lucide-react'
import { StackzeroBanner } from '@/components/commerce/StackzeroBanner'

export function CommercialLinesBanner() {
  return (
    <section className="bg-[#F5F7F9] py-0">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Banner Línea Automotriz */}
        <StackzeroBanner
          badge="Línea Automotriz"
          variant="automotriz"
          icon={<Shield className="w-3.5 h-3.5 inline text-[#bae6fd]" />}
          title="Repuestos, Autopartes y"
          highlightText="Accesorios"
          description="Baterías, pastillas de freno, amortiguadores, lubricantes, fajas y componentes mecánicos para vehículos ligeros, camionetas y transporte comercial."
          linkText="Explorar Repuestos Automotrices"
          linkTo="/catalogo?linea=automotriz"
          imageUrl="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=900&h=600&fit=crop&q=85"
        />

        {/* Banner Línea Construcción */}
        <StackzeroBanner
          badge="Línea Construcción"
          variant="construccion"
          icon={<Wrench className="w-3.5 h-3.5 inline text-amber-300" />}
          title="Materiales de Obra y"
          highlightText="Ferretería"
          description="Cemento, herramientas manuales y eléctricas, tuberías de PVC, pernería, aditivos y suministros para proyectos de construcción civil y refacción."
          linkText="Explorar Materiales de Construcción"
          linkTo="/catalogo?linea=construccion"
          imageUrl="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&h=600&fit=crop&q=85"
        />
      </div>
    </section>
  )
}
