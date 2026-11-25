// =============================================================================
// LOGIN PAGE — Portal de Acceso a Clientes y Talleres
// GÓNDOLA PERÚ (GÓNDOLA VARIEDAD Y EXPERIENCIA S.A.C.)
// =============================================================================

import { useState, type FormEvent } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { User, Mail, Lock, Eye, EyeOff, Loader2, ArrowLeft, ShieldCheck, CheckCircle2 } from 'lucide-react'
import { useAuth } from '@/contexts/AuthContext'
import { company } from '@/data/company'
import { siteConfig } from '@/config/site'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function LoginPage() {
  const { login, isLoading, isAuthenticated, user, logout } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  // Retorno a la ruta previa o al catálogo principal
  const from = (location.state as { from?: { pathname: string } })?.from?.pathname || '/'

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(true)
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setErrorMsg('')

    const cleanEmail = email.trim()

    if (!cleanEmail) {
      setErrorMsg('Por favor, ingresa tu correo electrónico.')
      return
    }

    if (!EMAIL_REGEX.test(cleanEmail)) {
      setErrorMsg('Ingresa un correo electrónico válido (ej: contacto@empresa.com).')
      return
    }

    if (!password) {
      setErrorMsg('Por favor, ingresa tu contraseña.')
      return
    }

    if (password.length < 6) {
      setErrorMsg('La contraseña debe tener al menos 6 caracteres.')
      return
    }

    try {
      await login(cleanEmail, password, name)
      navigate(from, { replace: true })
    } catch {
      setErrorMsg('No se pudo iniciar sesión. Por favor, verifica tus datos.')
    }
  }

  // Vista cuando ya hay una sesión activa
  if (isAuthenticated && user) {
    return (
      <div className="min-h-screen bg-[#F5F7FA] flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:px-8">
        <Helmet>
          <title>Mi Cuenta — {siteConfig.name}</title>
        </Helmet>

        <div className="max-w-md w-full bg-white rounded-3xl shadow-xl border border-slate-200/80 p-8 text-center">
          <div className="w-16 h-16 bg-[#e6eff7] rounded-full flex items-center justify-center mx-auto mb-4 border border-[#0082D6]/20">
            <CheckCircle2 className="w-9 h-9 text-[#003865]" />
          </div>

          <h2 className="text-2xl font-black text-[#003865] tracking-tight">Sesión Iniciada</h2>
          <p className="text-sm text-slate-500 mt-1 mb-6">
            Has ingresado correctamente a la plataforma:
          </p>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 mb-6 text-left">
            <div className="text-[11px] text-slate-400 font-bold uppercase tracking-wider mb-1">Usuario / Taller</div>
            <div className="text-base font-bold text-[#172B3A]">{user.name}</div>
            <div className="text-sm text-[#0082D6] font-medium">{user.email}</div>
          </div>

          <div className="space-y-3">
            <Link
              to={from}
              className="w-full inline-flex items-center justify-center py-3.5 px-4 rounded-xl text-sm font-bold text-white bg-[#003865] hover:bg-[#002647] shadow-md transition-colors"
            >
              Continuar navegando
            </Link>

            <button
              type="button"
              onClick={logout}
              className="w-full inline-flex items-center justify-center py-3 px-4 rounded-xl text-sm font-semibold text-rose-600 hover:bg-rose-50 border border-rose-200 transition-colors"
            >
              Cerrar sesión
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#F5F7FA] flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <Helmet>
        <title>Iniciar Sesión — {siteConfig.name}</title>
        <meta
          name="description"
          content="Accede a la plataforma de GÓNDOLA PERÚ para cotizar repuestos automotrices y consultar disponibilidad en Piura."
        />
      </Helmet>

      {/* Volver */}
      <div className="max-w-md w-full mx-auto px-4 mb-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-[#003865] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver al inicio</span>
        </Link>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md px-4">
        {/* Tarjeta de Login */}
        <div className="bg-white py-9 px-6 sm:px-10 rounded-3xl shadow-xl border border-slate-200/80">
          {/* Logo y Encabezado */}
          <div className="text-center mb-8">
            <Link to="/" className="inline-block group mb-3">
              <div className="w-16 h-16 rounded-2xl bg-white border border-slate-200 p-1 mx-auto shadow-xs group-hover:border-[#003865] transition-colors">
                <img
                  src="/logos/gondolalogo.png"
                  alt="GÓNDOLA PERÚ"
                  className="w-full h-full object-contain"
                />
              </div>
            </Link>
            <h1 className="text-2xl font-black text-[#003865] tracking-tight">
              Iniciar Sesión
            </h1>
            <p className="text-xs text-slate-500 mt-1 max-w-xs mx-auto leading-relaxed">
              Ingresa a tu cuenta para gestionar cotizaciones y pedidos en {company.legalName}
            </p>
          </div>

          {/* Error */}
          {errorMsg && (
            <div className="mb-5 p-3 rounded-xl bg-rose-50 border border-rose-200 text-xs font-semibold text-rose-700">
              {errorMsg}
            </div>
          )}

          {/* Formulario */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Campo: Nombre o Empresa */}
            <div>
              <label
                htmlFor="name"
                className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
              >
                Nombre o Empresa
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <User className="w-4 h-4" />
                </div>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ej: Carlos Silva o Taller San José"
                  autoComplete="name"
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#003865] focus:border-transparent transition-all"
                />
              </div>
            </div>

            {/* Campo: Correo Electrónico */}
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
              >
                Correo Electrónico
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Mail className="w-4 h-4" />
                </div>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="correo@ejemplo.com"
                  autoComplete="email"
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#003865] focus:border-transparent transition-all"
                />
              </div>
            </div>

            {/* Campo: Contraseña */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label
                  htmlFor="password"
                  className="block text-xs font-bold uppercase tracking-wider text-slate-700"
                >
                  Contraseña
                </label>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Lock className="w-4 h-4" />
                </div>
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  autoComplete="current-password"
                  className="w-full pl-10 pr-10 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#003865] focus:border-transparent transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600 transition-colors"
                  aria-label={showPassword ? 'Ocultar contraseña' : 'Ver contraseña'}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Recordar sesión */}
            <div className="flex items-center justify-between pt-1">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded text-[#003865] border-slate-300 focus:ring-[#003865]"
                />
                <span className="text-xs text-slate-600 font-medium select-none">
                  Recordar mi cuenta
                </span>
              </label>
            </div>

            {/* Botón de ingreso */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold text-white bg-[#003865] hover:bg-[#002647] active:scale-[0.99] shadow-lg shadow-[#003865]/20 transition-all disabled:opacity-70 disabled:pointer-events-none cursor-pointer"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Ingresando...</span>
                  </>
                ) : (
                  <span>Ingresar a mi cuenta</span>
                )}
              </button>
            </div>
          </form>

          {/* Pie institucional */}
          <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-center gap-2 text-xs text-slate-500 text-center">
            <ShieldCheck className="w-4 h-4 text-[#0082D6] shrink-0" />
            <span>Plataforma Oficial {company.tradeName} — Distrito Veintiséis de Octubre, Piura</span>
          </div>
        </div>

        {/* Acceso libre */}
        <p className="mt-6 text-center text-xs text-slate-500">
          ¿Deseas consultar productos sin registrarte?{' '}
          <Link to="/catalogo" className="font-bold text-[#0082D6] hover:underline">
            Explora el catálogo libremente
          </Link>
        </p>
      </div>
    </div>
  )
}
