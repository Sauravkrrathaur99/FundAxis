import { Link } from 'react-router-dom'
import { mutualFunds } from '../data/mockData'

export function Home() {
  const top = mutualFunds.slice(0, 3)

  return (
    <>
      <section className="hero-section">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Mutual fund marketplace · Sample build</p>
            <h1 className="hero-title">
              Compare, plan, and invest — <em>with clarity</em>
            </h1>
            <p className="hero-lead">
              One place to explore schemes, run SIP scenarios, and align with your distributor or
              agent — built for a PolicyBazaar-style journey, tailored for mutual funds.
            </p>
            <div className="hero-cta">
              <Link to="/funds" className="btn btn-primary btn-lg">
                Explore funds
              </Link>
              <Link to="/sip-calculator" className="btn btn-outline btn-lg">
                SIP calculator
              </Link>
            </div>
            <ul className="hero-trust">
              <li>Sample NAVs &amp; returns (illustrative)</li>
              <li>Role-based portals: AMC, distributor, agent</li>
              <li>Ready to plug into live APIs later</li>
            </ul>
          </div>
          <div className="hero-panel" aria-hidden>
            <div className="hero-card">
              <span className="hero-card-label">Today&apos;s snapshot</span>
              <div className="hero-stat">
                <span className="hero-stat-value">6</span>
                <span className="hero-stat-unit">sample schemes</span>
              </div>
              <div className="hero-mini-rows">
                <div>
                  <span>Flexi cap (1Y)</span>
                  <strong>+18.4%</strong>
                </div>
                <div>
                  <span>Liquid (1Y)</span>
                  <strong>+6.8%</strong>
                </div>
                <div>
                  <span>ELSS (3Y)</span>
                  <strong>+13.1% CAGR</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <h2>Featured funds</h2>
          <Link to="/funds" className="link-arrow">
            View all
          </Link>
        </div>
        <div className="card-grid">
          {top.map((f) => (
            <Link key={f.id} to={`/funds/${f.id}`} className="fund-card">
              <span className={`risk-dot risk-${f.risk.toLowerCase()}`} />
              <h3>{f.name}</h3>
              <p className="muted">{f.category} · {f.amc}</p>
              <div className="fund-card-metrics">
                <div>
                  <span className="muted small">1Y return</span>
                  <strong>{f.returns1y}%</strong>
                </div>
                <div>
                  <span className="muted small">Min SIP</span>
                  <strong>₹{f.minSip.toLocaleString('en-IN')}</strong>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="section section-alt">
        <div className="split-2">
          <div>
            <h2>How stakeholders use FundAxis</h2>
            <p className="muted">
              The same public experience can connect to three partner workspaces — each with its own
              login and future permissions.
            </p>
          </div>
          <ul className="stake-list">
            <li>
              <strong>AMC / Company</strong>
              <span className="muted">Scheme shelf, lead funnel, compliance &amp; reporting hooks.</span>
            </li>
            <li>
              <strong>Distributor</strong>
              <span className="muted">Client book, commission view, agent hierarchy.</span>
            </li>
            <li>
              <strong>Agent</strong>
              <span className="muted">Pipeline, KYC queue, SIP &amp; lumpsum applications.</span>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}
