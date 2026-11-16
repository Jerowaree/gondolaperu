// =============================================================================
// CONTEXT — SiteContext
// Estado global del sitio: navegación móvil, configuración de UI.
// =============================================================================

import { createContext, useContext, useState, useCallback, type ReactNode } from 'react'

interface SiteContextValue {
  /** Menú móvil abierto o cerrado */
  isMobileMenuOpen: boolean
  openMobileMenu: () => void
  closeMobileMenu: () => void
  toggleMobileMenu: () => void
}

const SiteContext = createContext<SiteContextValue | null>(null)

export function SiteProvider({ children }: { children: ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const openMobileMenu = useCallback(() => setIsMobileMenuOpen(true), [])
  const closeMobileMenu = useCallback(() => setIsMobileMenuOpen(false), [])
  const toggleMobileMenu = useCallback(() => setIsMobileMenuOpen((prev) => !prev), [])

  return (
    <SiteContext.Provider
      value={{ isMobileMenuOpen, openMobileMenu, closeMobileMenu, toggleMobileMenu }}
    >
      {children}
    </SiteContext.Provider>
  )
}

export function useSiteContext(): SiteContextValue {
  const context = useContext(SiteContext)
  if (!context) {
    throw new Error('useSiteContext debe usarse dentro de <SiteProvider>')
  }
  return context
}
