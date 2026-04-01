import type { ReactNode } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import type { UserRole } from '../types'
import { useAuth } from '../context/AuthContext'

export function ProtectedRoute({
  children,
  roles,
}: {
  children: ReactNode
  roles?: UserRole[]
}) {
  const { user, loading } = useAuth()
  const loc = useLocation()

  if (loading) {
    return (
      <div className="page-loading">
        <span className="spinner" aria-hidden />
        <p>Loading…</p>
      </div>
    )
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: loc }} replace />
  }

  if (roles && !roles.includes(user.role)) {
    return <Navigate to="/portal" replace />
  }

  return <>{children}</>
}
