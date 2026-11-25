// =============================================================================
// AUTH CONTEXT — Autenticación simulada frontend
// Cualquier email válido + contraseña mínimo 6 caracteres funciona.
// Persistencia en localStorage key: gondola_user
// =============================================================================

import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'

interface User {
  name: string
  email: string
}

interface AuthContextValue {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
  login: (email: string, _password: string, name?: string) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextValue | null>(null)

const STORAGE_KEY = 'gondola_user'

function extractNameFromEmail(email: string): string {
  const local = email.split('@')[0]
  // Convert dots/underscores/hyphens to spaces and capitalize each word
  return local
    .replace(/[._-]+/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase())
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  // Load persisted session on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) {
        const parsed = JSON.parse(stored) as User
        if (parsed.email && parsed.name) {
          setUser(parsed)
        }
      }
    } catch {
      localStorage.removeItem(STORAGE_KEY)
    }
  }, [])

  async function login(email: string, _password: string, name?: string): Promise<void> {
    setIsLoading(true)
    // Simular tiempo de respuesta del servidor
    await new Promise((resolve) => setTimeout(resolve, 500))
    const userName = name && name.trim() ? name.trim() : extractNameFromEmail(email)
    const newUser: User = {
      name: userName,
      email: email.trim(),
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newUser))
    setUser(newUser)
    setIsLoading(false)
  }

  function logout() {
    localStorage.removeItem(STORAGE_KEY)
    setUser(null)
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: user !== null,
        isLoading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext)
  if (!ctx) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return ctx
}
