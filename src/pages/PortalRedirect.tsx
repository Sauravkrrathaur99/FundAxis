import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function portalPath(role: string) {
  if (role === 'company') return '/portal/company'
  if (role === 'distributor') return '/portal/distributor'
  return '/portal/agent'
}

export function PortalRedirect() {
  const { user, loading } = useAuth()

  if (loading) {
    return (
      <div className="page-loading">
        <span className="spinner" aria-hidden />
      </div>
    )
  }

  if (!user) return <Navigate to="/login" replace />
  return <Navigate to={portalPath(user.role)} replace />
}
