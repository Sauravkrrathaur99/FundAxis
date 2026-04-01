import { Link, useParams } from 'react-router-dom'
import { getFundById } from '../data/mockData'

export function FundDetail() {
  const { id } = useParams()
  const f = id ? getFundById(id) : undefined

  if (!f) {
    return (
      <div className="page-narrow">
        <h1>Fund not found</h1>
        <Link to="/funds">Back to explorer</Link>
      </div>
    )
  }

  return (
    <div className="page-detail">
      <nav className="breadcrumb">
        <Link to="/funds">Funds</Link>
        <span aria-hidden>/</span>
        <span>{f.name}</span>
      </nav>

      <header className="detail-header">
        <div>
          <span className={`badge badge-${f.risk.toLowerCase()}`}>{f.risk} risk</span>
          <h1>{f.name}</h1>
          <p className="muted">
            {f.amc} · {f.category}
          </p>
        </div>
        <div className="detail-actions">
          <Link to={`/compare?add=${f.id}`} className="btn btn-outline">
            Add to compare
          </Link>
          <button type="button" className="btn btn-primary" disabled title="Invest flow — future">
            Start investment (sample)
          </button>
        </div>
      </header>

      <div className="detail-grid">
        <section className="card panel">
          <h2>Key metrics</h2>
          <dl className="metric-dl">
            <div>
              <dt>NAV</dt>
              <dd>₹{f.nav.toFixed(2)}</dd>
            </div>
            <div>
              <dt>AUM</dt>
              <dd>₹{f.aumCr.toLocaleString('en-IN')} Cr</dd>
            </div>
            <div>
              <dt>Expense ratio</dt>
              <dd>{f.expenseRatio}%</dd>
            </div>
            <div>
              <dt>Min SIP</dt>
              <dd>₹{f.minSip.toLocaleString('en-IN')}</dd>
            </div>
            <div>
              <dt>Rating (sample)</dt>
              <dd>{'★'.repeat(f.rating)}{'☆'.repeat(5 - f.rating)}</dd>
            </div>
          </dl>
        </section>

        <section className="card panel">
          <h2>Returns (illustrative)</h2>
          <div className="returns-bars">
            <div>
              <span>1 year</span>
              <div className="bar">
                <span style={{ width: `${Math.min(100, f.returns1y * 3)}%` }} />
              </div>
              <strong>{f.returns1y}%</strong>
            </div>
            <div>
              <span>3 year CAGR</span>
              <div className="bar">
                <span style={{ width: `${Math.min(100, f.returns3y * 4)}%` }} />
              </div>
              <strong>{f.returns3y}%</strong>
            </div>
            <div>
              <span>5 year CAGR</span>
              <div className="bar">
                <span style={{ width: `${Math.min(100, f.returns5y * 4)}%` }} />
              </div>
              <strong>{f.returns5y}%</strong>
            </div>
          </div>
        </section>

        <section className="card panel wide">
          <h2>Investment objective</h2>
          <p>{f.objective}</p>
          <p className="muted small disclaimer-box">
            Past performance may or may not be sustained in future. This is a demo UI only. Live
            factsheet, SID, KIM, riskometer, and scheme documents will be integrated in production.
          </p>
        </section>
      </div>
    </div>
  )
}
