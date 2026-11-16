// =============================================================================
// LOGIN MODAL — Autenticación simulada
// Props: open (boolean), onClose (callback)
// =============================================================================

import { useState, type FormEvent } from 'react'
import { X, Eye, EyeOff, Loader2 } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { useAuth } from '@/contexts/AuthContext'

interface LoginModalProps {
  open: boolean
  onClose: () => void
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function LoginModal({ open, onClose }: LoginModalProps) {
  const { login, isLoading } = useAuth()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

  if (!open) return null

  function validate(): boolean {
    let valid = true

    if (!email.trim()) {
      setEmailError('El correo es requerido.')
      valid = false
    } else if (!EMAIL_REGEX.test(email.trim())) {
      setEmailError('Ingresa un correo electrónico válido.')
      valid = false
    } else {
      setEmailError('')
    }

    if (!password) {
      setPasswordError('La contraseña es requerida.')
      valid = false
    } else if (password.length < 6) {
      setPasswordError('La contraseña debe tener al menos 6 caracteres.')
      valid = false
    } else {
      setPasswordError('')
    }

    return valid
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!validate()) return
    await login(email.trim(), password)
    // Reset fields and close
    setEmail('')
    setPassword('')
    setEmailError('')
    setPasswordError('')
    onClose()
  }

  function handleBackdropClick() {
    onClose()
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onMouseDown={handleBackdropClick}
    >
      {/* Panel — stop propagation so clicking inside doesn't close */}
      <div
        className="relative bg-white w-full max-w-sm mx-4 shadow-xl"
        onMouseDown={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Cerrar"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 px-6 pt-6 pb-5 border-b border-slate-100">
          <img
            src="/logos/gondolalogo.png"
            alt="GÓNDOLA PERÚ"
            className="w-8 h-8 object-contain"
          />
          <h2 className="text-base font-bold text-[#172B3A]">Iniciar sesión</h2>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} noValidate className="px-6 py-5 flex flex-col gap-4">
          {/* Email */}
          <div className="flex flex-col gap-1">
            <label htmlFor="login-email" className="text-sm font-medium text-[#172B3A]">
              Correo electrónico
            </label>
            <Input
              id="login-email"
              type="email"
              placeholder="tucorreo@ejemplo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              className="h-9 rounded-none border-slate-300 focus-visible:border-[#003865] focus-visible:ring-[#003865]/20"
            />
            {emailError && (
              <span className="text-xs text-red-500">{emailError}</span>
            )}
          </div>

          {/* Password */}
          <div className="flex flex-col gap-1">
            <label htmlFor="login-password" className="text-sm font-medium text-[#172B3A]">
              Contraseña
            </label>
            <div className="relative">
              <Input
                id="login-password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Mínimo 6 caracteres"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                className="h-9 rounded-none border-slate-300 focus-visible:border-[#003865] focus-visible:ring-[#003865]/20 pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
                tabIndex={-1}
              >
                {showPassword ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Eye className="w-4 h-4" />
                )}
              </button>
            </div>
            {passwordError && (
              <span className="text-xs text-red-500">{passwordError}</span>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full flex items-center justify-center gap-2 py-2.5 bg-[#003865] hover:bg-[#002647] text-white font-semibold text-sm transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Ingresando...
              </>
            ) : (
              'Ingresar'
            )}
          </button>

          {/* Demo note */}
          <p className="text-xs text-slate-400 text-center leading-relaxed">
            Sistema de demostración — cualquier correo y contraseña válidos funcionan.
          </p>
        </form>
      </div>
    </div>
  )
}
