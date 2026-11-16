import { useState, useMemo } from 'react'
import { Helmet } from 'react-helmet-async'
import { useNavigate, Link } from 'react-router-dom'
import {
  ShoppingCart, Trash2, Plus, Minus, ArrowLeft,
  User, Phone, Building2, MessageSquare, ArrowRight,
  PackageCheck, CheckCircle2,
} from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { MainLayout } from '@/components/layout/MainLayout'
import { Container } from '@/components/ui/Container'
import { Input } from '@/components/ui/input'
import { useCart } from '@/contexts/CartContext'
import { buildWhatsAppUrl, siteConfig } from '@/config/site'
import { handleImageError, cn } from '@/lib/utils'

// ── Types ────────────────────────────────────────────────────────────────────

interface QuoteForm {
  name: string
  phone: string
  company: string
  notes: string
}

type FormErrors = Partial<Record<keyof QuoteForm, string>>

// ── Helpers ──────────────────────────────────────────────────────────────────

function validate(form: QuoteForm): FormErrors {
  const errors: FormErrors = {}
  if (!form.name.trim()) errors.name = 'Ingresa tu nombre completo'
  if (!form.phone.trim()) errors.phone = 'Ingresa tu número de contacto'
  else if (!/^\+?[\d\s\-()]{7,}$/.test(form.phone.trim()))
    errors.phone = 'Número inválido'
  return errors
}

function buildMessage(form: QuoteForm, items: { product: { name: string }; quantity: number }[]): string {
  const lines: string[] = [
    `Hola GÓNDOLA PERÚ 👋`,
    ``,
    `Soy *${form.name.trim()}*${form.company.trim() ? ` de *${form.company.trim()}*` : ''} y quisiera cotizar los siguientes productos:`,
    ``,
    ...items.map((i, idx) => `${idx + 1}. ${i.product.name} — Cantidad: ${i.quantity}`),
    ``,
    form.notes.trim() ? `📝 Nota adicional: ${form.notes.trim()}` : '',
    form.notes.trim() ? `` : '',
    `📞 Mi número de contacto: ${form.phone.trim()}`,
    ``,
    `¿Pueden confirmar disponibilidad y precios? Muchas gracias.`,
  ].filter((l) => l !== undefined) as string[]

  return lines.join('\n')
}

// ── Component ────────────────────────────────────────────────────────────────

export default function QuotePage() {
  const navigate = useNavigate()
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart()

  const [form, setForm] = useState<QuoteForm>({
    name: '',
    phone: '',
    company: '',
    notes: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)

  const message = useMemo(() => buildMessage(form, cartItems), [form, cartItems])
  const whatsappUrl = useMemo(() => buildWhatsAppUrl(message), [message])

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof QuoteForm]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (cartItems.length === 0) return
    const errs = validate(form)
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setSubmitted(true)
  }

  // ── Empty cart ────────────────────────────────────────────────────────────

  if (cartItems.length === 0 && !submitted) {
    return (
      <MainLayout>
        <Helmet>
          <title>Cotizar — {siteConfig.name}</title>
        </Helmet>
        <section className="py-20 bg-white">
          <Container>
            <div className="max-w-md mx-auto text-center space-y-5">
              <div className="w-16 h-16 bg-slate-100 flex items-center justify-center mx-auto">
                <ShoppingCart className="w-8 h-8 text-slate-400" />
              </div>
              <h1
                className="text-2xl font-bold text-[#172B3A]"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Tu lista está vacía
              </h1>
              <p className="text-sm text-slate-500">
                Agrega productos desde el catálogo para armar tu solicitud de cotización.
              </p>
              <Link
                to="/catalogo"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#003865] text-white text-sm font-semibold hover:bg-[#002647] transition-colors"
              >
                Explorar catálogo
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </Container>
        </section>
      </MainLayout>
    )
  }

  // ── Success screen ────────────────────────────────────────────────────────

  if (submitted) {
    return (
      <MainLayout>
        <Helmet>
          <title>Cotización lista — {siteConfig.name}</title>
        </Helmet>
        <section className="py-20 bg-white">
          <Container>
            <div className="max-w-lg mx-auto text-center space-y-6">
              <div className="w-16 h-16 bg-emerald-100 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8 text-emerald-600" />
              </div>
              <div>
                <h1
                  className="text-2xl font-bold text-[#172B3A]"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  ¡Tu cotización está lista!
                </h1>
                <p className="mt-2 text-sm text-slate-500">
                  Hemos preparado el mensaje con tus datos y productos. Haz clic para enviarlo directamente a WhatsApp.
                </p>
              </div>

              {/* Preview del mensaje */}
              <div className="text-left bg-[#F5F7F9] border border-slate-200 p-4 space-y-1">
                <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-2">
                  Vista previa del mensaje
                </p>
                <pre className="text-xs text-slate-600 whitespace-pre-wrap font-sans leading-relaxed">
                  {message}
                </pre>
              </div>

              {/* CTA */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 w-full py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-base transition-colors"
                onClick={() => { clearCart(); navigate('/') }}
              >
                <FaWhatsapp className="w-5 h-5" />
                Enviar por WhatsApp
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={() => setSubmitted(false)}
                className="text-xs text-slate-400 hover:text-slate-600 transition-colors"
              >
                ← Volver y editar
              </button>
            </div>
          </Container>
        </section>
      </MainLayout>
    )
  }

  // ── Main form ─────────────────────────────────────────────────────────────

  return (
    <MainLayout>
      <Helmet>
        <title>Cotizar productos — {siteConfig.name}</title>
        <meta name="description" content="Arma tu solicitud de cotización y envíala por WhatsApp." />
      </Helmet>

      {/* Page header */}
      <div className="bg-[#003865] text-white py-8 border-b-4 border-[#FCB800]">
        <Container>
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate(-1)}
              className="p-1.5 text-white/60 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <h1
                className="text-xl sm:text-2xl font-bold leading-tight"
                style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: '-0.02em' }}
              >
                Solicitud de cotización
              </h1>
              <p className="text-sm text-white/60 mt-0.5">
                Completa el formulario y te generamos el mensaje para WhatsApp
              </p>
            </div>
          </div>
        </Container>
      </div>

      <section className="py-10 sm:py-14 bg-[#F5F7F9]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

            {/* ── Formulario (7 cols) ──────────────────────────────────── */}
            <div className="lg:col-span-7">
              <form onSubmit={handleSubmit} noValidate className="space-y-6">

                {/* Datos de contacto */}
                <div className="bg-white border border-slate-200 p-6 space-y-5">
                  <h2
                    className="text-base font-bold text-[#172B3A] flex items-center gap-2"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    <User className="w-4 h-4 text-[#003865]" />
                    Tus datos de contacto
                  </h2>

                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Nombre */}
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="block text-xs font-semibold text-slate-600 uppercase tracking-wider">
                        Nombre completo <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Ej. Juan Pérez"
                        className={cn(
                          'h-10 rounded-none border-slate-300 focus-visible:ring-[#003865] focus-visible:border-[#003865]',
                          errors.name && 'border-red-400 focus-visible:ring-red-400'
                        )}
                      />
                      {errors.name && (
                        <p className="text-xs text-red-500">{errors.name}</p>
                      )}
                    </div>

                    {/* Teléfono */}
                    <div className="space-y-1.5">
                      <label htmlFor="phone" className="block text-xs font-semibold text-slate-600 uppercase tracking-wider">
                        Número de contacto <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+51 999 000 000"
                          className={cn(
                            'h-10 pl-9 rounded-none border-slate-300 focus-visible:ring-[#003865] focus-visible:border-[#003865]',
                            errors.phone && 'border-red-400 focus-visible:ring-red-400'
                          )}
                        />
                      </div>
                      {errors.phone && (
                        <p className="text-xs text-red-500">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  {/* Empresa (opcional) */}
                  <div className="space-y-1.5">
                    <label htmlFor="company" className="block text-xs font-semibold text-slate-600 uppercase tracking-wider">
                      Empresa / Taller
                      <span className="ml-1.5 text-slate-400 normal-case font-normal">(opcional)</span>
                    </label>
                    <div className="relative">
                      <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
                      <Input
                        id="company"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Nombre de tu empresa o taller"
                        className="h-10 pl-9 rounded-none border-slate-300 focus-visible:ring-[#003865] focus-visible:border-[#003865]"
                      />
                    </div>
                  </div>

                  {/* Notas */}
                  <div className="space-y-1.5">
                    <label htmlFor="notes" className="block text-xs font-semibold text-slate-600 uppercase tracking-wider">
                      Nota adicional
                      <span className="ml-1.5 text-slate-400 normal-case font-normal">(opcional)</span>
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 w-3.5 h-3.5 text-slate-400" />
                      <textarea
                        id="notes"
                        name="notes"
                        value={form.notes}
                        onChange={handleChange}
                        placeholder="Especificaciones especiales, urgencia, compatibilidad de vehículo..."
                        rows={3}
                        className="w-full pl-9 pr-3 py-2.5 text-sm border border-slate-300 bg-white focus:outline-none focus:ring-1 focus:ring-[#003865] focus:border-[#003865] placeholder:text-slate-400 resize-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={cartItems.length === 0}
                  className="w-full flex items-center justify-center gap-2.5 py-3.5 bg-[#003865] hover:bg-[#002647] disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold text-sm transition-colors"
                >
                  <PackageCheck className="w-4 h-4" />
                  Generar mensaje de cotización
                  <ArrowRight className="w-4 h-4" />
                </button>

                <p className="text-xs text-slate-400 text-center">
                  Se generará un mensaje prearmado que podrás enviar por WhatsApp. No se envía ningún dato a un servidor.
                </p>
              </form>
            </div>

            {/* ── Resumen del carrito (5 cols) ─────────────────────────── */}
            <div className="lg:col-span-5">
              <div className="bg-white border border-slate-200 sticky top-32">
                {/* Header */}
                <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
                  <h2
                    className="text-sm font-bold text-[#172B3A] flex items-center gap-2"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    <ShoppingCart className="w-4 h-4 text-[#003865]" />
                    Productos a cotizar
                    <span className="ml-1 bg-[#003865] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                      {cartItems.length}
                    </span>
                  </h2>
                  <button
                    onClick={clearCart}
                    className="text-[11px] text-slate-400 hover:text-red-500 transition-colors font-medium"
                  >
                    Vaciar lista
                  </button>
                </div>

                {/* Items */}
                <div className="divide-y divide-slate-100 max-h-[420px] overflow-y-auto">
                  {cartItems.map((item) => (
                    <div key={item.product.id} className="flex gap-3 p-4">
                      {/* Imagen */}
                      <div className="shrink-0 w-14 h-14 bg-slate-50 border border-slate-200 overflow-hidden">
                        <img
                          src={item.product.images[0]}
                          alt={item.product.name}
                          onError={handleImageError}
                          className="w-full h-full object-contain"
                        />
                      </div>

                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <span className={cn(
                          'inline-block text-[9px] font-bold uppercase tracking-widest px-1.5 py-0.5 mb-1',
                          item.product.line === 'automotriz'
                            ? 'bg-[#003865] text-white'
                            : 'bg-[#FCB800] text-[#172B3A]'
                        )}>
                          {item.product.line === 'automotriz' ? 'Automotriz' : 'Construcción'}
                        </span>
                        <p className="text-xs font-semibold text-[#172B3A] line-clamp-2 leading-snug">
                          {item.product.name}
                        </p>

                        {/* Quantity controls */}
                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center border border-slate-200">
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                              disabled={item.quantity <= 1}
                              className="w-6 h-6 flex items-center justify-center text-slate-500 hover:bg-slate-100 disabled:opacity-30 transition-colors"
                            >
                              <Minus className="w-2.5 h-2.5" />
                            </button>
                            <span className="w-7 text-center text-xs font-semibold text-[#172B3A]">
                              {item.quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                              className="w-6 h-6 flex items-center justify-center text-slate-500 hover:bg-slate-100 transition-colors"
                            >
                              <Plus className="w-2.5 h-2.5" />
                            </button>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeFromCart(item.product.id)}
                            className="p-1 text-slate-300 hover:text-red-500 transition-colors"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div className="px-5 py-4 border-t border-slate-100 bg-slate-50">
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <PackageCheck className="w-4 h-4 text-[#003865] shrink-0" />
                    <span>
                      El mensaje incluirá <strong className="text-[#003865]">{cartItems.reduce((a, i) => a + i.quantity, 0)} unidades</strong> de {cartItems.length} {cartItems.length === 1 ? 'producto' : 'productos'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </Container>
      </section>
    </MainLayout>
  )
}
