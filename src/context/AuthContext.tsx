import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import type { User, UserRole } from '../types'
import * as mockAuth from '../auth/mockAuth'

type AuthContextValue = {
  user: User | null
  loading: boolean
  login: (email: string, password: string) => { ok: true } | { ok: false; error: string }
  signup: (
    email: string,
    password: string,
    name: string,
    role: UserRole,
    orgName: string,
  ) => { ok: true } | { ok: false; error: string }
  logout: () => void
}

const AuthContext = createContext<AuthContextValue | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setUser(mockAuth.getSession())
    setLoading(false)
  }, [])

  const login = useCallback((email: string, password: string) => {
    const u = mockAuth.login(email, password)
    if (!u) return { ok: false as const, error: 'Invalid email or password.' }
    setUser(u)
    return { ok: true as const }
  }, [])

  const signup = useCallback(
    (email: string, password: string, name: string, role: UserRole, orgName: string) => {
      const r = mockAuth.signup(email, password, name, role, orgName)
      if (!r.ok) return r
      setUser(r.user)
      return { ok: true as const }
    },
    [],
  )

  const logout = useCallback(() => {
    mockAuth.logout()
    setUser(null)
  }, [])

  const value = useMemo(
    () => ({ user, loading, login, signup, logout }),
    [user, loading, login, signup, logout],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
