import { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import type { UserRole } from '../types'
import { demoCredentialsHint } from '../auth/mockAuth'

function portalPath(role: UserRole) {
  if (role === 'company') return '/portal/company'
  if (role === 'distributor') return '/portal/distributor'
  return '/portal/agent'
}

const roles: { value: UserRole; label: string }[] = [
  { value: 'company', label: 'AMC / Company' },
  { value: 'distributor', label: 'Distributor' },
  { value: 'agent', label: 'Agent' },
]

export function Signup() {
  const { signup, user } = useAuth()
  const nav = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [orgName, setOrgName] = useState('')
  const [role, setRole] = useState<UserRole>('distributor')
  const [error, setError] = useState('')

  if (user) {
    return <Navigate to={portalPath(user.role)} replace />
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    const r = signup(email, password, name, role, orgName)
    if (!r.ok) {
      setError(r.error)
      return
    }
    nav(portalPath(role), { replace: true })
  }

  return (
    <div className="auth-page">
      <div className="auth-card card auth-card-wide">
        <h1>Create account</h1>
        <p className="muted">
          Registrations are saved in this browser only (localStorage) — no server.
        </p>
        <form onSubmit={handleSubmit} className="auth-form">
          <label className="field">
            <span>Full name</span>
            <input
              className="input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <label className="field">
            <span>Work email</span>
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
            <span>Password (min 6 chars)</span>
            <input
              className="input"
              type="password"
              autoComplete="new-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
            />
          </label>
          <label className="field">
            <span>Organisation / ARN code (optional)</span>
            <input
              className="input"
              value={orgName}
              onChange={(e) => setOrgName(e.target.value)}
              placeholder="e.g. ARN-123456 or ABC Distributors Pvt Ltd"
            />
          </label>
          <fieldset className="field role-field">
            <legend>Account type</legend>
            <div className="role-radios">
              {roles.map((o) => (
                <label key={o.value} className={`role-option ${role === o.value ? 'active' : ''}`}>
                  <input
                    type="radio"
                    name="role"
                    value={o.value}
                    checked={role === o.value}
                    onChange={() => setRole(o.value)}
                  />
                  <span>{o.label}</span>
                </label>
              ))}
            </div>
          </fieldset>
          {error && <p className="form-error">{error}</p>}
          <button type="submit" className="btn btn-primary full">
            Create account &amp; enter portal
          </button>
        </form>
        <p className="muted small hint-box">{demoCredentialsHint()}</p>
        <p className="auth-footer">
          Already registered? <Link to="/login">Sign in</Link>
        </p>
      </div>
    </div>
  )
}
