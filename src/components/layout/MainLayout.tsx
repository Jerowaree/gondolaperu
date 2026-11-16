import { type ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'
import { WhatsAppFloatButton } from '@/components/whatsapp/WhatsAppFloatButton'
import { CartDrawer } from '@/components/commerce/CartDrawer'

interface MainLayoutProps {
  children: ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      {/* En la home móvil el hero ya tiene CTA de WhatsApp; el flotante taparía los botones */}
      {isHome ? (
        <div className="hidden sm:contents">
          <WhatsAppFloatButton />
        </div>
      ) : (
        <WhatsAppFloatButton />
      )}
      <CartDrawer />
    </div>
  )
}
