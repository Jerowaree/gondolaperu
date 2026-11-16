import { Helmet } from 'react-helmet-async'
import { Home, ShoppingBag } from 'lucide-react'
import { MainLayout } from '@/components/layout/MainLayout'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { siteConfig } from '@/config/site'

export default function NotFoundPage() {
  return (
    <MainLayout>
      <Helmet>
        <title>Página no encontrada (404) — {siteConfig.name}</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <section className="py-20 sm:py-32 bg-[#f8fafc] text-center">
        <Container>
          <div className="max-w-md mx-auto space-y-6">
            <span className="inline-block text-6xl sm:text-8xl font-black text-[#003865]/20 select-none">
              404
            </span>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#003865]">
              Página no encontrada
            </h1>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              La dirección que buscas no existe o ha sido movida. Puedes volver al inicio o explorar nuestro catálogo digital de productos.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button
                to="/"
                variant="primary"
                size="md"
                icon={<Home className="w-4 h-4" />}
                className="w-full sm:w-auto"
              >
                Ir al Inicio
              </Button>

              <Button
                to="/catalogo"
                variant="outline"
                size="md"
                icon={<ShoppingBag className="w-4 h-4" />}
                className="w-full sm:w-auto"
              >
                Ver Catálogo
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </MainLayout>
  )
}
