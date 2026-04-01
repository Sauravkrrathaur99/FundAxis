import { Link } from 'react-router-dom'
import { mutualFunds } from '../data/mockData'

export function Home() {
  const top = mutualFunds.slice(0, 3)

  return (
    <>
      <section className="hero-section">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">India-focused mutual fund platform · Demo build</p>
            <h1 className="hero-title">
              Mutual fund investing for India - <em>clear, compliant, and guided</em>
            </h1>
            <p className="hero-lead">
              Explore Indian AMCs, compare schemes, run SIP projections in INR, and connect with
              your distributor or ARN agent. The journey is inspired by Indian investment platforms.
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
              <li>Sample NAVs and returns for Indian schemes (illustrative)</li>
              <li>Role-based portals: AMC, distributor, agent</li>
              <li>Terms aligned to Indian mutual fund workflows</li>
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
                  <span>Large &amp; Flexi Cap (1Y)</span>
                  <strong>+22.1%</strong>
                </div>
                <div>
                  <span>Liquid (1Y)</span>
                  <strong>+7.2%</strong>
                </div>
                <div>
                  <span>ELSS (3Y)</span>
                  <strong>+14.3% CAGR</strong>
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
              The public investor journey connects to three partner workspaces with India-specific
              operations, terminology, and compliance placeholders.
            </p>
          </div>
          <ul className="stake-list">
            <li>
              <strong>AMC / Company</strong>
              <span className="muted">Scheme setup, AUM tracking, SID/KIM and compliance workflow.</span>
            </li>
            <li>
              <strong>Distributor</strong>
              <span className="muted">Client folios, ARN hierarchy, commission and payout view.</span>
            </li>
            <li>
              <strong>Agent</strong>
              <span className="muted">Lead pipeline, CKYC/eKYC queue, SIP/lumpsum application tracking.</span>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}
