// =============================================================================
// APP — Router
// Definición centralizada de rutas con lazy loading y ScrollToTop.
// =============================================================================

import { lazy, Suspense, useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { LoadingState } from '@/components/ui/LoadingState'
import { BrandLoader } from '@/components/ui/BrandLoader'

let brandLoaderShown = false

function RouteFallback() {
  const [showBrand] = useState(() => !brandLoaderShown)

  useEffect(() => {
    brandLoaderShown = true
  }, [])

  if (!showBrand) {
    return <LoadingState message="Cargando contenido..." className="min-h-[60vh]" />
  }
  return <BrandLoader />
}

const HomePage = lazy(() => import('@/pages/HomePage'))
const AboutPage = lazy(() => import('@/pages/AboutPage'))
const CatalogPage = lazy(() => import('@/pages/CatalogPage'))
const CategoryPage = lazy(() => import('@/pages/CategoryPage'))
const ProductPage = lazy(() => import('@/pages/ProductPage'))
const QuotePage = lazy(() => import('@/pages/QuotePage'))
const FavoritesPage = lazy(() => import('@/pages/FavoritesPage'))
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'))

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])

  return null
}

export function AppRouter() {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<RouteFallback />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/nosotros" element={<AboutPage />} />
          <Route path="/catalogo" element={<CatalogPage />} />
          <Route path="/categorias/:slug" element={<CategoryPage />} />
          <Route path="/productos/:slug" element={<ProductPage />} />
          <Route path="/cotizar" element={<QuotePage />} />
          <Route path="/favoritos" element={<FavoritesPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  )
}
