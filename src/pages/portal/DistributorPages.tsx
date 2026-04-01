import { distributorClients, distributorStats } from '../../data/mockData'

export function DistributorOverview() {
  return (
    <div className="portal-page">
      <p className="muted intro">
        Distributor cockpit: book size, payout visibility, and network snapshot (sample).
      </p>
      <div className="stat-grid">
        <div className="stat-card">
          <span className="muted small">Active clients</span>
          <strong>{distributorStats.activeClients.toLocaleString('en-IN')}</strong>
        </div>
        <div className="stat-card">
          <span className="muted small">AUM (sample)</span>
          <strong>₹{distributorStats.aumCr} Cr</strong>
        </div>
        <div className="stat-card">
          <span className="muted small">MTD commission</span>
          <strong>₹{distributorStats.mtdCommissionLakh} L</strong>
        </div>
        <div className="stat-card">
          <span className="muted small">Mapped agents</span>
          <strong>{distributorStats.agents}</strong>
        </div>
      </div>
    </div>
  )
}

export function DistributorClients() {
  return (
    <div className="portal-page">
      <p className="muted intro">Client book with folio count and last transaction (static).</p>
      <div className="table-wrap">
        <table className="data-table">
          <thead>
            <tr>
              <th>Investor</th>
              <th>Folios</th>
              <th>AUM (₹ L)</th>
              <th>Last activity</th>
            </tr>
          </thead>
          <tbody>
            {distributorClients.map((c) => (
              <tr key={c.id}>
                <td>{c.name}</td>
                <td>{c.folios}</td>
                <td>{c.aumLakh.toFixed(1)}</td>
                <td className="muted small">{c.lastTxn}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export function DistributorCommissions() {
  return (
    <div className="portal-page">
      <p className="muted intro">Trail &amp; upfront statements — Excel/PDF export in production.</p>
      <div className="card panel">
        <table className="data-table">
          <thead>
            <tr>
              <th>Period</th>
              <th>Scheme</th>
              <th>Type</th>
              <th>Amount (₹)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mar 2026</td>
              <td>Vertex Flexi Cap</td>
              <td>Trail</td>
              <td>4,28,190</td>
            </tr>
            <tr>
              <td>Mar 2026</td>
              <td>Northstar ELSS</td>
              <td>Upfront</td>
              <td>1,02,400</td>
            </tr>
            <tr>
              <td>Feb 2026</td>
              <td>Harbor Balanced</td>
              <td>Trail</td>
              <td>3,91,050</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export function DistributorAgents() {
  return (
    <div className="portal-page">
      <p className="muted intro">Sub-broker hierarchy, targets, and licensing checks (future).</p>
      <ul className="simple-list">
        <li>
          <strong>Amit Kulkarni</strong> <span className="muted">— Pune Zone · Active</span>
        </li>
        <li>
          <strong>Neha Joshi</strong> <span className="muted">— Mumbai Zone · Active</span>
        </li>
        <li>
          <strong>Ravi Menon</strong> <span className="muted">— Bengaluru Zone · Onboarding</span>
        </li>
      </ul>
    </div>
  )
}
