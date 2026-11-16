import { createContext, useContext, useState, useCallback, type ReactNode } from 'react'
import type { Product } from '@/types/product'

// ── Types ────────────────────────────────────────────────────────────────────

export interface CartItem {
  product: Product
  quantity: number
}

interface CartContextValue {
  // Cart
  cartItems: CartItem[]
  cartCount: number
  addToCart: (product: Product) => void
  removeFromCart: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
  isInCart: (productId: string) => boolean
  cartOpen: boolean
  setCartOpen: (open: boolean) => void

  // Favorites
  favorites: Set<string>
  toggleFavorite: (productId: string) => void
  isFavorite: (productId: string) => boolean
  favoriteCount: number
}

// ── Context ──────────────────────────────────────────────────────────────────

const CartContext = createContext<CartContextValue | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [cartOpen, setCartOpen] = useState(false)
  const [favorites, setFavorites] = useState<Set<string>>(new Set())

  // ── Cart ──────────────────────────────────────────────────────────────────

  const addToCart = useCallback((product: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.product.id === product.id)
      if (existing) {
        return prev.map((i) =>
          i.product.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
        )
      }
      return [...prev, { product, quantity: 1 }]
    })
    setCartOpen(true)
  }, [])

  const removeFromCart = useCallback((productId: string) => {
    setCartItems((prev) => prev.filter((i) => i.product.id !== productId))
  }, [])

  const updateQuantity = useCallback((productId: string, quantity: number) => {
    if (quantity < 1) return
    setCartItems((prev) =>
      prev.map((i) => (i.product.id === productId ? { ...i, quantity } : i))
    )
  }, [])

  const clearCart = useCallback(() => setCartItems([]), [])

  const isInCart = useCallback(
    (productId: string) => cartItems.some((i) => i.product.id === productId),
    [cartItems]
  )

  const cartCount = cartItems.reduce((acc, i) => acc + i.quantity, 0)

  // ── Favorites ────────────────────────────────────────────────────────────

  const toggleFavorite = useCallback((productId: string) => {
    setFavorites((prev) => {
      const next = new Set(prev)
      if (next.has(productId)) next.delete(productId)
      else next.add(productId)
      return next
    })
  }, [])

  const isFavorite = useCallback(
    (productId: string) => favorites.has(productId),
    [favorites]
  )

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartCount,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isInCart,
        cartOpen,
        setCartOpen,
        favorites,
        toggleFavorite,
        isFavorite,
        favoriteCount: favorites.size,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
