import { useState, useRef, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, Search, LayoutGrid, ChevronDown, ShoppingCart, Heart } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { Container } from '@/components/ui/Container'
import { Input } from '@/components/ui/input'
import { TopBar } from './TopBar'
import { MobileMenu } from './MobileMenu'
import { NavDropdown } from './NavDropdown'
import { useSiteContext } from '@/contexts/SiteContext'
import { useCart } from '@/contexts/CartContext'
import { useAuth } from '@/contexts/AuthContext'
import { LoginModal } from '@/components/auth/LoginModal'
import { getCategoriesByLine } from '@/lib/categories'
import { buildWhatsAppUrl } from '@/config/site'
import { cn } from '@/lib/utils'

const LINE_OPTIONS = [
  { value: '', label: 'Todas las líneas' },
  { value: 'automotriz', label: 'Automotriz' },
  { value: 'construccion', label: 'Construcción' },
]

function SearchLineSelect({
  value,
  onChange,
}: {
  value: string
  onChange: (v: string) => void
}) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const selected = LINE_OPTIONS.find((o) => o.value === value) ?? LINE_OPTIONS[0]

  // Cierra al hacer click fuera
  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [])

  return (
    <div ref={ref} className="relative shrink-0 self-stretch border-r border-slate-200">
      {/* Trigger */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={cn(
          'h-full flex items-center gap-2 px-3.5 text-sm font-medium transition-colors duration-150 whitespace-nowrap bg-slate-50 hover:bg-slate-100',
          open ? 'text-[#003865]' : 'text-slate-600'
        )}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span>{selected.label}</span>
        <ChevronDown
          className={cn(
            'w-3.5 h-3.5 text-slate-400 transition-transform duration-150',
            open && 'rotate-180'
          )}
        />
      </button>

      {/* Panel */}
      {open && (
        <div className="absolute top-full left-0 mt-1 w-44 bg-white border border-slate-200 shadow-lg z-50 overflow-hidden">
          {LINE_OPTIONS.map((opt) => (
            <button
              key={opt.value}
              type="button"
              role="option"
              aria-selected={value === opt.value}
              onClick={() => {
                onChange(opt.value)
                setOpen(false)
              }}
              className={cn(
                'w-full text-left px-4 py-2.5 text-sm transition-colors duration-100 flex items-center justify-between gap-2',
                value === opt.value
                  ? 'bg-[#003865] text-white font-semibold'
                  : 'text-slate-700 hover:bg-slate-50 hover:text-[#003865]'
              )}
            >
              <span>{opt.label}</span>
              {value === opt.value && (
                <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export function Header() {
  const { toggleMobileMenu } = useSiteContext()
  const { cartCount, setCartOpen, favoriteCount } = useCart()
  const { user, isAuthenticated, logout } = useAuth()
  const location = useLocation()
  const navigate = useNavigate()

  const [searchQuery, setSearchQuery] = useState('')
  const [searchLine, setSearchLine] = useState('')
  const [loginOpen, setLoginOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close user dropdown on outside click
  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [])

  const autoCategories = getCategoriesByLine('automotriz')
  const constCategories = getCategoriesByLine('construccion')

  const whatsappUrl = buildWhatsAppUrl(
    'Hola GÓNDOLA PERÚ, me gustaría solicitar información y cotización sobre sus productos.'
  )

  function handleSearchSubmit(e: React.FormEvent) {
    e.preventDefault()
    const q = searchQuery.trim()
    if (!q) return
    const params = new URLSearchParams({ q })
    if (searchLine) params.set('linea', searchLine)
    navigate(`/catalogo?${params.toString()}`)
  }

  const categoryGroups = [
    {
      label: 'Línea Automotriz',
      accentColor: 'blue' as const,
      items: autoCategories.map((c) => ({ id: c.id, name: c.name, href: `/categorias/${c.slug}` })),
      viewAllHref: '/catalogo?linea=automotriz',
      viewAllLabel: 'Ver todo Automotriz',
    },
    {
      label: 'Línea Construcción',
      accentColor: 'amber' as const,
      items: constCategories.map((c) => ({ id: c.id, name: c.name, href: `/categorias/${c.slug}` })),
      viewAllHref: '/catalogo?linea=construccion',
      viewAllLabel: 'Ver todo Construcción',
    },
  ]

  return (
    <header className="sticky top-0 z-40">
      {/* Nivel 1: TopBar */}
      <TopBar />

      {/* Nivel 2: Cabecera principal */}
      <div className="bg-white border-b border-slate-200">
        <Container>
          <div className="flex items-center justify-between h-16 sm:h-[72px] gap-4">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-3 shrink-0 group focus-visible:outline-2 focus-visible:outline-[#003865]"
              title="GÓNDOLA PERÚ — Inicio"
            >
              <div className="relative w-11 h-11 sm:w-12 sm:h-12 overflow-hidden border border-slate-200 p-0.5 bg-white group-hover:border-[#003865] transition-colors">
                <img
                  src="/logos/gondolalogo.png"
                  alt="GÓNDOLA PERÚ"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-bold text-[#003865] leading-none tracking-[-0.03em] group-hover:text-[#0082D6] transition-colors">
                  GÓNDOLA<span className="text-[#0082D6] ml-1">PERÚ</span>
                </span>
                <span className="text-[10px] sm:text-[11px] font-medium text-slate-400 uppercase tracking-wider mt-0.5 truncate max-w-[190px]">
                  VARIEDAD Y EXPERIENCIA S.A.C.
                </span>
              </div>
            </Link>

            {/* Buscador central */}
            <form
              onSubmit={handleSearchSubmit}
              className="hidden lg:flex flex-1 max-w-xl h-10 border border-slate-200 focus-within:border-[#003865] focus-within:ring-1 focus-within:ring-[#003865] transition-all overflow-visible relative"
            >
              {/* Selector custom */}
              <SearchLineSelect value={searchLine} onChange={setSearchLine} />

              <Input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar repuestos, materiales..."
                className="flex-1 border-0 rounded-none focus-visible:ring-0 h-full text-sm bg-white px-4 placeholder:text-slate-400"
              />
              <button
                type="submit"
                className="shrink-0 px-4 bg-[#FCB800] hover:bg-[#e0a800] text-[#172B3A] font-bold flex items-center gap-1.5 transition-colors duration-150"
                aria-label="Buscar"
              >
                <Search className="w-4 h-4" />
                <span className="text-xs hidden xl:inline">Buscar</span>
              </button>
            </form>

            {/* Acciones derecha */}
            <div className="flex items-center gap-1 sm:gap-2">
              {/* Favoritos */}
              <Link
                to="/favoritos"
                className="relative p-2 text-slate-500 hover:text-red-500 hover:bg-slate-100 transition-colors"
                aria-label="Mis favoritos"
                title="Mis favoritos"
              >
                <Heart className="w-5 h-5" />
                {favoriteCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-red-500 text-white text-[9px] font-bold rounded-full flex items-center justify-center">
                    {favoriteCount}
                  </span>
                )}
              </Link>

              {/* Carrito */}
              <button
                type="button"
                onClick={() => setCartOpen(true)}
                className="relative p-2 text-slate-500 hover:text-[#003865] hover:bg-slate-100 transition-colors"
                aria-label="Lista de cotización"
                title="Lista de cotización"
              >
                <ShoppingCart className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-[#003865] text-white text-[9px] font-bold rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Auth: login button or user dropdown */}
              {!isAuthenticated ? (
                <button
                  type="button"
                  onClick={() => setLoginOpen(true)}
                  className="hidden sm:inline-flex text-xs font-semibold border border-slate-300 px-3 py-1.5 hover:border-[#003865] hover:text-[#003865] transition-colors text-slate-600"
                >
                  Iniciar sesión
                </button>
              ) : (
                <div ref={dropdownRef} className="relative hidden sm:block">
                  <button
                    type="button"
                    onClick={() => setDropdownOpen((v) => !v)}
                    className="flex items-center gap-2 px-2 py-1 hover:bg-slate-100 transition-colors"
                  >
                    <span className="w-7 h-7 bg-[#003865] text-white text-xs font-bold flex items-center justify-center shrink-0">
                      {user!.name.charAt(0).toUpperCase()}
                    </span>
                    <span className="text-sm font-medium text-[#172B3A] truncate max-w-20">
                      {user!.name}
                    </span>
                    <ChevronDown className={cn('w-3.5 h-3.5 text-slate-400 transition-transform duration-150', dropdownOpen && 'rotate-180')} />
                  </button>

                  {dropdownOpen && (
                    <div className="absolute right-0 top-full mt-1 w-52 bg-white border border-slate-200 shadow-lg z-50">
                      <div className="px-4 py-3 border-b border-slate-100">
                        <p className="text-xs text-slate-400 truncate">{user!.email}</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          logout()
                          setDropdownOpen(false)
                        }}
                        className="w-full text-left px-4 py-2.5 text-sm text-red-500 hover:bg-red-50 transition-colors"
                      >
                        Cerrar sesión
                      </button>
                    </div>
                  )}
                </div>
              )}

              {/* WhatsApp */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-bold transition-colors duration-150 ml-1"
                title="Cotizar por WhatsApp"
              >
                <FaWhatsapp className="w-4 h-4 shrink-0" />
                <span className="hidden md:inline">Cotizar</span>
              </a>

              <button
                type="button"
                onClick={toggleMobileMenu}
                className="lg:hidden p-2 text-slate-600 hover:text-[#003865] hover:bg-slate-100 transition-colors"
                aria-label="Abrir menú"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </Container>
      </div>

      {/* Nivel 3: Barra de navegación */}
      <div className="bg-[#003865] hidden lg:block">
        <Container>
          <div className="flex items-center h-11 gap-0">
            {/* Dropdown de categorías — componente reutilizable */}
            <NavDropdown
              label="Nuestras Categorías"
              icon={<LayoutGrid className="w-4 h-4" />}
              groups={categoryGroups}
            />

            {/* Separador */}
            <div className="w-px h-5 bg-white/20 mx-2" />

            {/* Links de navegación */}
            {[
              { to: '/', label: 'Inicio', exact: true },
              { to: '/nosotros', label: 'Nosotros', exact: false },
              { to: '/catalogo', label: 'Catálogo', exact: false },
              { to: '/#servicios', label: 'Servicios', exact: false },
            ].map(({ to, label, exact }) => {
              const active = exact
                ? location.pathname === to
                : to !== '/' && location.pathname.startsWith(to)
              return (
                <Link
                  key={to}
                  to={to}
                  className={`px-4 h-11 inline-flex items-center text-sm font-semibold transition-colors duration-150 ${
                    active
                      ? 'text-[#FCB800] bg-white/10'
                      : 'text-white/85 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {label}
                </Link>
              )
            })}
          </div>
        </Container>
      </div>

      {/* Menú Móvil */}
      <MobileMenu />

      {/* Login Modal */}
      <LoginModal open={loginOpen} onClose={() => setLoginOpen(false)} />
    </header>
  )
}
