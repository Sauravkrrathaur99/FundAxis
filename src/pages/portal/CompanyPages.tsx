import { mutualFunds, companyLeads, companyStats } from '../../data/mockData'

export function CompanyOverview() {
  return (
    <div className="portal-page">
      <p className="muted intro">
        AMC console preview for India: scheme performance, inflows, and compliance queues (sample).
      </p>
      <div className="stat-grid">
        <div className="stat-card">
          <span className="muted small">Schemes live</span>
          <strong>{companyStats.schemesLive}</strong>
        </div>
        <div className="stat-card">
          <span className="muted small">AUM (sample)</span>
          <strong>₹{companyStats.aumCr.toLocaleString('en-IN')} Cr</strong>
        </div>
        <div className="stat-card">
          <span className="muted small">Net inflow (MTD)</span>
          <strong>₹{companyStats.monthlyInflowCr} Cr</strong>
        </div>
        <div className="stat-card">
          <span className="muted small">Pending approvals</span>
          <strong>{companyStats.pendingApprovals}</strong>
        </div>
      </div>
      <section className="card panel">
        <h2 className="h3">Recent investor activity</h2>
        <ul className="simple-list">
          {companyLeads.map((l) => (
            <li key={l.id}>
              <strong>{l.name}</strong>
              <span className="muted"> · {l.city} · {l.interest}</span>
              <span className="pill pill-soft">{l.status}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

export function CompanySchemes() {
  return (
    <div className="portal-page">
      <p className="muted intro">Scheme master view — links to public fund pages (demo).</p>
      <div className="table-wrap">
        <table className="data-table">
          <thead>
            <tr>
              <th>Scheme</th>
              <th>Category</th>
              <th>NAV</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {mutualFunds.map((f) => (
              <tr key={f.id}>
                <td>{f.name}</td>
                <td>{f.category}</td>
                <td>₹{f.nav.toFixed(2)}</td>
                <td>
                  <span className="pill pill-soft">Open</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export function CompanyLeads() {
  return (
    <div className="portal-page">
      <p className="muted intro">CRM-style lead inbox with city, category, and KYC status (demo).</p>
      <div className="card panel">
        <table className="data-table">
          <thead>
            <tr>
              <th>Lead</th>
              <th>Location</th>
              <th>Interest</th>
              <th>Status</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {companyLeads.map((l) => (
              <tr key={l.id}>
                <td>{l.name}</td>
                <td>{l.city}</td>
                <td>{l.interest}</td>
                <td>{l.status}</td>
                <td>
                  <button type="button" className="btn btn-sm btn-ghost" disabled>
                    Assign (sample)
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export function CompanyCompliance() {
  return (
    <div className="portal-page">
      <p className="muted intro">
        Placeholder for SID/KIM hosting, AMFI disclosures, audit trails, and e-sign workflows.
      </p>
      <ul className="check-list">
        <li>SEBI registration document vault</li>
        <li>Riskometer and scheme document versioning</li>
        <li>Investor communication templates</li>
        <li>Regulatory filing calendar (future)</li>
      </ul>
    </div>
  )
}
