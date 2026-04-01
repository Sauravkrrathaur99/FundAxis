import { useState } from 'react'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { demoCredentialsHint } from '../auth/mockAuth'

function portalPath(role: string) {
  if (role === 'company') return '/portal/company'
  if (role === 'distributor') return '/portal/distributor'
  return '/portal/agent'
}

export function Login() {
  const { login, user } = useAuth()
  const nav = useNavigate()
  const loc = useLocation() as { state?: { from?: { pathname?: string } } }
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  if (user) {
    const dest = loc.state?.from?.pathname
    if (dest && dest.startsWith('/portal')) return <Navigate to={dest} replace />
    return <Navigate to={portalPath(user.role)} replace />
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    const r = login(email, password)
    if (!r.ok) {
      setError(r.error)
      return
    }
    const raw = localStorage.getItem('mf_demo_session')
    const u = raw ? (JSON.parse(raw) as { role: string }) : null
    const dest = loc.state?.from?.pathname
    if (dest && dest.startsWith('/portal')) nav(dest, { replace: true })
    else if (u) nav(portalPath(u.role), { replace: true })
  }

  return (
    <div className="auth-page">
      <div className="auth-card card">
        <h1>Sign in</h1>
        <p className="muted">Use demo logins or sign up to create a local sample user.</p>
        <form onSubmit={handleSubmit} className="auth-form">
          <label className="field">
            <span>Email</span>
            <input
              className="input"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label className="field">
            <span>Password</span>
            <input
              className="input"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          {error && <p className="form-error">{error}</p>}
          <button type="submit" className="btn btn-primary full">
            Sign in
          </button>
        </form>
        <p className="muted small hint-box">{demoCredentialsHint()}</p>
        <p className="auth-footer">
          No account? <Link to="/signup">Create one</Link>
        </p>
      </div>
    </div>
  )
}
