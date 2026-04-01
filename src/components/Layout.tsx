import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function portalPath(role: string) {
  if (role === 'company') return '/portal/company'
  if (role === 'distributor') return '/portal/distributor'
  return '/portal/agent'
}

export function PublicLayout() {
  const { user, logout } = useAuth()
  const nav = useNavigate()

  return (
    <div className="shell">
      <header className="topbar">
        <Link to="/" className="brand">
          <span className="brand-mark" aria-hidden />
          <span className="brand-text">FundAxis</span>
        </Link>
        <nav className="nav-main" aria-label="Primary">
          <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
            Home
          </NavLink>
          <NavLink to="/funds" className={({ isActive }) => (isActive ? 'active' : '')}>
            Explore funds
          </NavLink>
          <NavLink to="/compare" className={({ isActive }) => (isActive ? 'active' : '')}>
            Compare
          </NavLink>
          <NavLink to="/sip-calculator" className={({ isActive }) => (isActive ? 'active' : '')}>
            SIP calculator
          </NavLink>
        </nav>
        <div className="nav-actions">
          {user ? (
            <>
              <button
                type="button"
                className="btn btn-ghost"
                onClick={() => nav(portalPath(user.role))}
              >
                Portal
              </button>
              <button type="button" className="btn btn-outline" onClick={() => logout()}>
                Sign out
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn btn-ghost">
                Sign in
              </Link>
              <Link to="/signup" className="btn btn-primary">
                Get started
              </Link>
            </>
          )}
        </div>
      </header>
      <main className="main-public">
        <Outlet />
      </main>
      <footer className="footer">
        <div className="footer-grid">
          <div>
            <strong className="footer-brand">FundAxis</strong>
            <p className="footer-tag">
              Sample marketplace UI for mutual fund discovery — demo data only, not investment advice.
            </p>
          </div>
          <div>
            <span className="footer-heading">Product (sample)</span>
            <ul>
              <li>
                <Link to="/funds">Fund explorer</Link>
              </li>
              <li>
                <Link to="/compare">Compare funds</Link>
              </li>
              <li>
                <Link to="/sip-calculator">SIP calculator</Link>
              </li>
            </ul>
          </div>
          <div>
            <span className="footer-heading">Portals (sample)</span>
            <ul>
              <li>AMC / Company</li>
              <li>Distributor</li>
              <li>Agent</li>
            </ul>
          </div>
        </div>
        <p className="footer-disclaimer">
          SEBI registration, KYC, and risk disclosures will appear here in production. This build uses
          hardcoded authentication for stakeholder review only.
        </p>
      </footer>
    </div>
  )
}

export function PortalLayout() {
  const { user, logout } = useAuth()
  const nav = useNavigate()

  if (!user) return null

  const links =
    user.role === 'company'
      ? [
          { to: '/portal/company', label: 'Overview' },
          { to: '/portal/company/schemes', label: 'Schemes' },
          { to: '/portal/company/leads', label: 'Leads' },
          { to: '/portal/company/compliance', label: 'Compliance' },
        ]
      : user.role === 'distributor'
        ? [
            { to: '/portal/distributor', label: 'Overview' },
            { to: '/portal/distributor/clients', label: 'Clients' },
            { to: '/portal/distributor/commissions', label: 'Commissions' },
            { to: '/portal/distributor/agents', label: 'Agents' },
          ]
        : [
            { to: '/portal/agent', label: 'Overview' },
            { to: '/portal/agent/pipeline', label: 'Pipeline' },
            { to: '/portal/agent/kyc', label: 'KYC queue' },
            { to: '/portal/agent/earnings', label: 'Earnings' },
          ]

  return (
    <div className="shell portal-shell">
      <aside className="portal-sidebar">
        <Link to="/" className="brand brand-compact">
          <span className="brand-mark sm" aria-hidden />
          <span className="brand-text">FundAxis</span>
        </Link>
        <div className="portal-user">
          <span className="portal-role">{roleLabel(user.role)}</span>
          <strong>{user.name}</strong>
          {user.orgName && <span className="muted small">{user.orgName}</span>}
        </div>
        <nav className="portal-nav" aria-label="Portal">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
        <div className="portal-sidebar-foot">
          <button type="button" className="btn btn-ghost full" onClick={() => nav('/')}>
            Public site
          </button>
          <button type="button" className="btn btn-outline full" onClick={() => logout()}>
            Sign out
          </button>
        </div>
      </aside>
      <div className="portal-body">
        <header className="portal-top">
          <h1 className="portal-title">Partner workspace</h1>
          <span className="pill pill-demo">Demo data</span>
        </header>
        <main className="main-portal">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

function roleLabel(role: string) {
  if (role === 'company') return 'AMC / Company'
  if (role === 'distributor') return 'Distributor'
  return 'Agent'
}
