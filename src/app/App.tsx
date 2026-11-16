// =============================================================================
// APP — Punto de entrada de la aplicación
// Coordina providers y router. Mantener mínimo.
// =============================================================================

import { Providers } from './providers'
import { AppRouter } from './router'

export default function App() {
  return (
    <Providers>
      <AppRouter />
    </Providers>
  )
}
