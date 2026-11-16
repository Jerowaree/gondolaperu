// =============================================================================
// APP — Router
// Definición centralizada de rutas con lazy loading y ScrollToTop.
// =============================================================================

import { lazy, Suspense, useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Routes, Route, useLocation } from 'react-router-dom'
import { LoadingState } from '@/components/ui/LoadingState'
import { BrandLoader } from '@/components/ui/BrandLoader'
import { ErrorBoundary } from '@/components/ui/ErrorBoundary'

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
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname, hash])

  return null
}

const SPLASH_MIN_MS = 1800

export function AppRouter() {
  const [splashDone, setSplashDone] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setSplashDone(true), SPLASH_MIN_MS)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <ScrollToTop />
      <AnimatePresence>
        {!splashDone && <BrandLoader key="brand-splash" />}
      </AnimatePresence>
      <Suspense fallback={<RouteFallback />}>
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/nosotros" element={<AboutPage />} />
            <Route path="/catalogo" element={<CatalogPage />} />
            <Route path="/categorias/:slug" element={<CategoryPage />} />
            <Route path="/productos/:slug" element={<ProductPage />} />
            <Route path="/cotizar" element={<QuotePage />} />
            <Route path="/favoritos" element={<FavoritesPage />} />
            <Route path="/404" element={<NotFoundPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </ErrorBoundary>
      </Suspense>
    </>
  )
}
