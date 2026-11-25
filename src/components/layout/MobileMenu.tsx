import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { X, Phone, MapPin, ChevronRight, Home, Info, ShoppingBag, Wrench, Shield, Search, User, LogOut } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { useSiteContext } from '@/contexts/SiteContext'
import { useAuth } from '@/contexts/AuthContext'
import { getCategoriesByLine } from '@/lib/categories'
import { company } from '@/data/company'
import { buildWhatsAppUrl, whatsappConfig } from '@/config/site'

export function MobileMenu() {
  const { isMobileMenuOpen, closeMobileMenu } = useSiteContext()
  const { user, isAuthenticated, logout } = useAuth()
  const location = useLocation()
  const navigate = useNavigate()
  const autoCategories = getCategoriesByLine('automotriz')
  const constCategories = getCategoriesByLine('construccion')

  const [mobileQuery, setMobileQuery] = useState('')

  // Bloquea el scroll del body mientras el menú está abierto
  useEffect(() => {
    if (!isMobileMenuOpen) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previous
    }
  }, [isMobileMenuOpen])

  if (!isMobileMenuOpen) return null

  const whatsappUrl = buildWhatsAppUrl('Hola GÓNDOLA PERÚ, me gustaría realizar una consulta comercial.')

  function handleMobileSearch(e: React.FormEvent) {
    e.preventDefault()
    const q = mobileQuery.trim()
    if (!q) return
    closeMobileMenu()
    navigate(`/catalogo?q=${encodeURIComponent(q)}`)
  }

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Fondo oscuro backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={closeMobileMenu}
        aria-hidden="true"
      />

      {/* Drawer lateral */}
      <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-2xl flex flex-col z-10 animate-in slide-in-from-right duration-300">
        {/* Header del menú */}
        <div className="p-4 bg-[#003865] text-white flex items-center justify-between border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <img
              src="/logos/gondolalogo.png"
              alt="GÓNDOLA PERÚ"
              className="w-8 h-8 rounded-md bg-white p-0.5 object-contain"
            />
            <div>
              <span className="font-extrabold text-sm tracking-tight block">GÓNDOLA PERÚ</span>
              <span className="text-[9px] text-white/70 block uppercase tracking-wider truncate max-w-[170px]">
                VARIEDAD Y EXPERIENCIA S.A.C.
              </span>
            </div>
          </div>
          <button
            type="button"
            onClick={closeMobileMenu}
            className="p-1.5 text-white/80 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Cerrar menú"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Buscador */}
        <div className="px-4 pt-4 pb-2">
          <form onSubmit={handleMobileSearch} className="flex items-stretch h-9 rounded-lg overflow-hidden border border-slate-300 focus-within:border-[#003865] transition-all">
            <input
              type="text"
              value={mobileQuery}
              onChange={(e) => setMobileQuery(e.target.value)}
              placeholder="Buscar repuestos, materiales..."
              className="flex-1 px-3 text-sm text-slate-700 placeholder-slate-400 bg-white focus:outline-none"
            />
            <button
              type="submit"
              className="shrink-0 px-3 bg-[#FCB800] hover:bg-yellow-400 text-slate-900 flex items-center justify-center transition-colors"
              aria-label="Buscar"
            >
              <Search className="w-4 h-4" />
            </button>
          </form>
        </div>

        {/* Auth en menú móvil */}
        <div className="px-4 py-2 border-b border-slate-100">
          {!isAuthenticated ? (
            <Link
              to="/login"
              onClick={closeMobileMenu}
              className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-slate-100 hover:bg-[#003865] hover:text-white text-xs font-bold text-[#003865] transition-colors"
            >
              <User className="w-4 h-4 text-[#0082D6]" />
              <span>Iniciar sesión</span>
            </Link>
          ) : (
            <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-2 truncate">
                <span className="w-7 h-7 bg-[#003865] text-white text-xs font-bold rounded-full flex items-center justify-center shrink-0">
                  {user!.name.charAt(0).toUpperCase()}
                </span>
                <div className="truncate">
                  <div className="text-xs font-bold text-slate-900 truncate">{user!.name}</div>
                  <div className="text-[10px] text-slate-500 truncate">{user!.email}</div>
                </div>
              </div>
              <button
                type="button"
                onClick={() => {
                  logout()
                  closeMobileMenu()
                }}
                className="text-slate-400 hover:text-rose-600 p-1.5 transition-colors"
                title="Cerrar sesión"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>

        {/* Links principales */}
        <div className="flex-1 overflow-y-auto py-2 px-4 space-y-5">
          <nav className="space-y-1">
            <Link
              to="/"
              onClick={closeMobileMenu}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium text-sm transition-colors ${
                location.pathname === '/'
                  ? 'bg-[#003865] text-white font-semibold'
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              <Home className="w-4 h-4 text-[#0082D6]" />
              <span>Inicio</span>
            </Link>

            <Link
              to="/catalogo"
              onClick={closeMobileMenu}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium text-sm transition-colors ${
                location.pathname === '/catalogo'
                  ? 'bg-[#003865] text-white font-semibold'
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              <ShoppingBag className="w-4 h-4 text-[#0082D6]" />
              <span>Catálogo Completo</span>
            </Link>

            <Link
              to="/nosotros"
              onClick={closeMobileMenu}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium text-sm transition-colors ${
                location.pathname === '/nosotros'
                  ? 'bg-[#003865] text-white font-semibold'
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              <Info className="w-4 h-4 text-[#0082D6]" />
              <span>Sobre Nosotros</span>
            </Link>
          </nav>

          {/* Categorías Automotriz */}
          <div>
            <div className="flex items-center gap-2 px-3 mb-2 text-xs font-bold uppercase tracking-wider text-[#003865]">
              <Shield className="w-3.5 h-3.5" />
              <span>Línea Automotriz</span>
            </div>
            <div className="space-y-0.5">
              {autoCategories.map((cat) => (
                <Link
                  key={cat.id}
                  to={`/categorias/${cat.slug}`}
                  onClick={closeMobileMenu}
                  className="flex items-center justify-between px-3 py-1.5 rounded-lg text-xs font-medium text-slate-600 hover:text-[#003865] hover:bg-slate-50 transition-colors"
                >
                  <span className="truncate">{cat.name}</span>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                </Link>
              ))}
            </div>
          </div>

          {/* Categorías Construcción */}
          {constCategories.length > 0 && (
          <div>
            <div className="flex items-center gap-2 px-3 mb-2 text-xs font-bold uppercase tracking-wider text-amber-700">
              <Wrench className="w-3.5 h-3.5" />
              <span>Línea Construcción</span>
            </div>
            <div className="space-y-0.5">
              {constCategories.map((cat) => (
                <Link
                  key={cat.id}
                  to={`/categorias/${cat.slug}`}
                  onClick={closeMobileMenu}
                  className="flex items-center justify-between px-3 py-1.5 rounded-lg text-xs font-medium text-slate-600 hover:text-amber-800 hover:bg-amber-50 transition-colors"
                >
                  <span className="truncate">{cat.name}</span>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                </Link>
              ))}
            </div>
          </div>
          )}

          {/* Información de contacto */}
          <div className="pt-4 border-t border-slate-200 text-xs space-y-2 text-slate-500">
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#0082D6]" />
              <span>{company.district}, {company.city}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-[#0082D6]" />
              <span>{whatsappConfig.displayNumber}</span>
            </div>
          </div>
        </div>

        {/* Footer con CTA de WhatsApp */}
        <div className="p-4 bg-slate-50 border-t border-slate-200">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold bg-emerald-500 hover:bg-emerald-600 text-white shadow-sm transition-colors"
          >
            <FaWhatsapp className="w-4 h-4" />
            <span>Consultar por WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  )
}
