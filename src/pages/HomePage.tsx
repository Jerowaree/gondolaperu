import { Helmet } from 'react-helmet-async'
import { MainLayout } from '@/components/layout/MainLayout'
import { HeroSection } from '@/components/home/HeroSection'
import { CommercialLinesBanner } from '@/components/home/CommercialLinesBanner'
import { CategorySection } from '@/components/home/CategorySection'
import { FeaturedProducts } from '@/components/home/FeaturedProducts'
import { ServicesSection } from '@/components/home/ServicesSection'
import { BenefitsSection } from '@/components/home/BenefitsSection'
import { ContactCTA } from '@/components/home/ContactCTA'
import { siteConfig } from '@/config/site'

export default function HomePage() {
  return (
    <MainLayout>
      <Helmet>
        <title>{siteConfig.name} — Repuestos Automotrices y Materiales de Construcción en Piura</title>
        <meta
          name="description"
          content="GÓNDOLA VARIEDAD Y EXPERIENCIA S.A.C. — Catálogo comercial de repuestos automotrices, partes y piezas, accesorios vehiculares, materiales de construcción y servicios de taller en Piura, Perú."
        />
        <meta property="og:title" content={`${siteConfig.name} — Repuestos Automotrices y Construcción`} />
        <meta property="og:description" content={siteConfig.description} />
      </Helmet>

      {/* 1. Hero Comercial */}
      <HeroSection />

      {/* 2. Franja Comercial Oscura — Pilares de Confianza */}
      <BenefitsSection />

      {/* 3. Presentación de las Líneas Comerciales Principales */}
      <CommercialLinesBanner />

      {/* 4. Categorías por Rubro (con pestañas Automotriz / Construcción) */}
      <CategorySection />

      {/* 5. Productos Destacados (Stackzero Product Card Pattern) */}
      <FeaturedProducts />

      {/* 6. Línea Complementaria: Servicios Automotrices y Taller */}
      <ServicesSection />

      {/* 7. Llamado a la Acción y Cotización Directa */}
      <ContactCTA />
    </MainLayout>
  )
}
