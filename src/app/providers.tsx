// =============================================================================
// APP — Providers
// Composición de todos los proveedores de contexto.
// Agregar nuevos providers aquí sin modificar App.tsx.
// =============================================================================

import { type ReactNode } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { SiteProvider } from '@/contexts/SiteContext'
import { CartProvider } from '@/contexts/CartContext'
import { AuthProvider } from '@/contexts/AuthContext'

interface ProvidersProps {
  children: ReactNode
}

export function Providers({ children }: ProvidersProps) {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <SiteProvider>
          <CartProvider>
            <AuthProvider>
              {children}
            </AuthProvider>
          </CartProvider>
        </SiteProvider>
      </BrowserRouter>
    </HelmetProvider>
  )
}
