import { Component, type ReactNode } from 'react'
import { Helmet } from 'react-helmet-async'
import { CloudOff, RotateCcw } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { siteConfig } from '@/config/site'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
}

/**
 * Atrapa errores de renderizado y fallos de carga de chunks lazy.
 * Muestra una pantalla de recuperación en vez de dejar la app en blanco.
 */
export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false }

  static getDerivedStateFromError(): State {
    return { hasError: true }
  }

  handleRetry = () => {
    this.setState({ hasError: false })
    window.location.reload()
  }

  render() {
    if (!this.state.hasError) return this.props.children

    return (
      <div className="min-h-[70vh] flex items-center justify-center bg-[#f8fafc] px-4">
        <Helmet>
          <title>Error inesperado — {siteConfig.name}</title>
          <meta name="robots" content="noindex, nofollow" />
        </Helmet>
        <div className="max-w-md w-full text-center space-y-6">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-[#003865]/5 flex items-center justify-center">
            <CloudOff className="w-8 h-8 text-[#003865]" />
          </div>
          <div className="space-y-2">
            <h1 className="text-2xl font-extrabold text-[#003865]">
              Algo salió mal
            </h1>
            <p className="text-sm text-slate-600 leading-relaxed">
              Ocurrió un error inesperado al cargar esta sección. Puede ser un problema
              temporal de conexión — intenta recargar la página.
            </p>
          </div>
          <Button
            onClick={this.handleRetry}
            variant="primary"
            size="md"
            icon={<RotateCcw className="w-4 h-4" />}
          >
            Recargar página
          </Button>
        </div>
      </div>
    )
  }
}
