import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { animate } from 'framer-motion'
import { MainLayout } from '@/components/layout/MainLayout'
import { HeroSection } from '@/components/home/HeroSection'
import { CommercialLinesBanner } from '@/components/home/CommercialLinesBanner'
import { CategorySection } from '@/components/home/CategorySection'
import { FeaturedProducts } from '@/components/home/FeaturedProducts'
import { ServicesSection } from '@/components/home/ServicesSection'
import { BenefitsSection } from '@/components/home/BenefitsSection'
import { ContactCTA } from '@/components/home/ContactCTA'
import { siteConfig } from '@/config/site'
import type { CommercialLine } from '@/types/category'
import type { CategoryFilter } from '@/components/home/CategorySection'

export default function HomePage() {
  const [categoryFilter, setCategoryFilter] = useState<CategoryFilter>('todas')

  const handleExploreLine = (line: CommercialLine) => {
    setCategoryFilter(line)
    const el = document.getElementById('categorias')
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
  }

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
      <HeroSection onExploreLine={handleExploreLine} />

      {/* 2. Franja Comercial Oscura — Pilares de Confianza */}
      <BenefitsSection />

      {/* 3. Presentación de las Líneas Comerciales Principales */}
      <CommercialLinesBanner />

      {/* 4. Categorías por Rubro (con pestañas Automotriz / Construcción) */}
      <CategorySection selected={categoryFilter} onSelect={setCategoryFilter} />

      {/* 5. Productos Destacados (Stackzero Product Card Pattern) */}
      <FeaturedProducts />

      {/* 6. Línea Complementaria: Servicios Automotrices y Taller */}
      <ServicesSection />

      {/* 7. Llamado a la Acción y Cotización Directa */}
      <ContactCTA />
    </MainLayout>
  )
}
