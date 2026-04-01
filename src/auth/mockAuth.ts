import type { User, UserRole } from '../types'

const STORAGE_REGISTERED = 'mf_demo_registered_users'
const STORAGE_SESSION = 'mf_demo_session'

type StoredAccount = {
  email: string
  password: string
  user: User
}

const HARDCODED: StoredAccount[] = [
  {
    email: 'company@demo.com',
    password: 'demo123',
    user: {
      id: 'hc-company',
      email: 'company@demo.com',
      name: 'Priya Sharma',
      role: 'company',
      orgName: 'Vertex AMC Ltd.',
    },
  },
  {
    email: 'distributor@demo.com',
    password: 'demo123',
    user: {
      id: 'hc-dist',
      email: 'distributor@demo.com',
      name: 'Rajesh Khanna',
      role: 'distributor',
      orgName: 'WealthBridge Distributors Pvt. Ltd.',
    },
  },
  {
    email: 'agent@demo.com',
    password: 'demo123',
    user: {
      id: 'hc-agent',
      email: 'agent@demo.com',
      name: 'Amit Kulkarni',
      role: 'agent',
      orgName: 'WealthBridge — Pune Zone',
    },
  },
]

function readRegistered(): StoredAccount[] {
  try {
    const raw = localStorage.getItem(STORAGE_REGISTERED)
    if (!raw) return []
    const parsed = JSON.parse(raw) as StoredAccount[]
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

function writeRegistered(accounts: StoredAccount[]) {
  localStorage.setItem(STORAGE_REGISTERED, JSON.stringify(accounts))
}

function allAccounts(): StoredAccount[] {
  return [...HARDCODED, ...readRegistered()]
}

export function login(email: string, password: string): User | null {
  const e = email.trim().toLowerCase()
  const acc = allAccounts().find(
    (a) => a.email.toLowerCase() === e && a.password === password,
  )
  if (!acc) return null
  const user = acc.user
  localStorage.setItem(STORAGE_SESSION, JSON.stringify(user))
  return user
}

export function signup(
  email: string,
  password: string,
  name: string,
  role: UserRole,
  orgName: string,
): { ok: true; user: User } | { ok: false; error: string } {
  const e = email.trim().toLowerCase()
  if (allAccounts().some((a) => a.email.toLowerCase() === e)) {
    return { ok: false, error: 'An account with this email already exists.' }
  }
  if (password.length < 6) {
    return { ok: false, error: 'Password must be at least 6 characters.' }
  }
  const user: User = {
    id: `reg-${Date.now()}`,
    email: e,
    name: name.trim(),
    role,
    orgName: orgName.trim() || undefined,
  }
  const next = [...readRegistered(), { email: e, password, user }]
  writeRegistered(next)
  localStorage.setItem(STORAGE_SESSION, JSON.stringify(user))
  return { ok: true, user }
}

export function getSession(): User | null {
  try {
    const raw = localStorage.getItem(STORAGE_SESSION)
    if (!raw) return null
    return JSON.parse(raw) as User
  } catch {
    return null
  }
}

export function logout() {
  localStorage.removeItem(STORAGE_SESSION)
}

export function demoCredentialsHint(): string {
  return 'Demo: company@demo.com / distributor@demo.com / agent@demo.com — password: demo123'
}
