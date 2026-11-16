import { ShoppingCart, X, Plus, Minus, Trash2, ArrowRight, PackageCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useCart } from '@/contexts/CartContext'
import { handleImageError, cn } from '@/lib/utils'

export function CartDrawer() {
  const { cartItems, cartOpen, setCartOpen, removeFromCart, updateQuantity, clearCart, cartCount } = useCart()

  if (!cartOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
        onClick={() => setCartOpen(false)}
      />

      {/* Panel */}
      <div className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-md bg-white shadow-2xl flex flex-col">

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200">
          <div className="flex items-center gap-2.5">
            <ShoppingCart className="w-5 h-5 text-[#003865]" />
            <span
              className="text-base font-bold text-[#172B3A]"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Solicitud de cotización
            </span>
            {cartCount > 0 && (
              <span className="bg-[#003865] text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </div>
          <button
            onClick={() => setCartOpen(false)}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Cerrar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-3 text-center py-16">
              <ShoppingCart className="w-12 h-12 text-slate-200" />
              <p className="text-sm font-semibold text-slate-400">Tu lista está vacía</p>
              <p className="text-xs text-slate-400">Agrega productos para cotizar en WhatsApp</p>
              <button
                onClick={() => setCartOpen(false)}
                className="mt-2 text-xs font-bold text-[#003865] hover:underline"
              >
                Explorar catálogo
              </button>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item.product.id} className="flex gap-3 pb-4 border-b border-slate-100 last:border-0">
                {/* Imagen */}
                <Link
                  to={`/productos/${item.product.slug}`}
                  onClick={() => setCartOpen(false)}
                  className="shrink-0 w-16 h-16 bg-slate-50 border border-slate-200 overflow-hidden"
                >
                  <img
                    src={item.product.images[0]}
                    alt={item.product.name}
                    onError={handleImageError}
                    className="w-full h-full object-contain"
                  />
                </Link>

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
                  <Link
                    to={`/productos/${item.product.slug}`}
                    onClick={() => setCartOpen(false)}
                    className="block text-sm font-semibold text-[#172B3A] hover:text-[#003865] line-clamp-2 leading-snug transition-colors"
                  >
                    {item.product.name}
                  </Link>

                  {/* Quantity + remove */}
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center border border-slate-200">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                        className="w-7 h-7 flex items-center justify-center text-slate-500 hover:bg-slate-100 disabled:opacity-30 transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-8 text-center text-sm font-semibold text-[#172B3A]">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="w-7 h-7 flex items-center justify-center text-slate-500 hover:bg-slate-100 transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.product.id)}
                      className="p-1.5 text-slate-400 hover:text-red-500 transition-colors"
                      aria-label="Eliminar"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="px-6 py-4 border-t border-slate-200 space-y-3 bg-slate-50">
            {/* Resumen */}
            <div className="flex items-center gap-2 p-3 bg-white border border-slate-200">
              <PackageCheck className="w-4 h-4 text-[#003865] shrink-0" />
              <p className="text-xs text-slate-600">
                <span className="font-semibold text-[#003865]">{cartItems.length} {cartItems.length === 1 ? 'producto' : 'productos'}</span>
                {' '}— completa el formulario para armar tu mensaje
              </p>
            </div>

            {/* CTA → página de cotización */}
            <Link
              to="/cotizar"
              onClick={() => setCartOpen(false)}
              className="flex items-center justify-center gap-2.5 w-full py-3.5 bg-[#003865] hover:bg-[#002647] text-white font-bold text-sm transition-colors"
            >
              <PackageCheck className="w-4 h-4" />
              Completar cotización
              <ArrowRight className="w-4 h-4" />
            </Link>

            <button
              onClick={clearCart}
              className="w-full text-xs text-slate-400 hover:text-red-500 transition-colors py-1"
            >
              Vaciar lista
            </button>
          </div>
        )}
      </div>
    </>
  )
}
