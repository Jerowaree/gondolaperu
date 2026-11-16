import { ArrowRight, ShoppingBag } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { ProductGrid } from '@/components/ui/ProductGrid'
import { Button } from '@/components/ui/Button'
import { getFeaturedProducts } from '@/lib/products'

export function FeaturedProducts() {
  const featured = getFeaturedProducts()

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <Container>
        <SectionTitle
          pretitle="Selección especial"
          title="Productos Destacados del Catálogo"
          subtitle="Autopartes de alta rotación y materiales de construcción demandados en Piura, listos para cotización inmediata."
          action={
            <Button
              to="/catalogo"
              variant="primary"
              size="sm"
              icon={<ShoppingBag className="w-4 h-4" />}
              iconRight={<ArrowRight className="w-4 h-4" />}
            >
              Explorar Catálogo Completo
            </Button>
          }
        />

        <ProductGrid products={featured} />
      </Container>
    </section>
  )
}
