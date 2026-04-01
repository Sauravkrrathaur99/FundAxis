import { agentPipeline, agentStats } from '../../data/mockData'

export function AgentOverview() {
  return (
    <div className="portal-page">
      <p className="muted intro">
        Agent workspace: monthly funnel, KYC backlog, and SIP productivity (illustrative).
      </p>
      <div className="stat-grid">
        <div className="stat-card">
          <span className="muted small">Leads (MTD)</span>
          <strong>{agentStats.leadsMonth}</strong>
        </div>
        <div className="stat-card">
          <span className="muted small">KYC pending</span>
          <strong>{agentStats.kycPending}</strong>
        </div>
        <div className="stat-card">
          <span className="muted small">SIPs booked (MTD)</span>
          <strong>{agentStats.sipBookedMonth}</strong>
        </div>
        <div className="stat-card">
          <span className="muted small">Target progress</span>
          <strong>{agentStats.targetPercent}%</strong>
        </div>
      </div>
      <div className="progress-wrap">
        <div className="progress-label">
          <span>Monthly target</span>
          <span>{agentStats.targetPercent}%</span>
        </div>
        <div className="progress-bar">
          <span style={{ width: `${agentStats.targetPercent}%` }} />
        </div>
      </div>
    </div>
  )
}

export function AgentPipeline() {
  return (
    <div className="portal-page">
      <p className="muted intro">Deal stages from proposal to payment — CRM integration later.</p>
      <div className="table-wrap">
        <table className="data-table">
          <thead>
            <tr>
              <th>Investor</th>
              <th>Product</th>
              <th>Stage</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {agentPipeline.map((p) => (
              <tr key={p.id}>
                <td>{p.investor}</td>
                <td>{p.product}</td>
                <td>
                  <span className="pill pill-soft">{p.stage}</span>
                </td>
                <td>{p.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export function AgentKYC() {
  return (
    <div className="portal-page">
      <p className="muted intro">eKYC / CKYC / PAN verification queue (placeholder).</p>
      <ul className="check-list">
        <li>8 applications awaiting document upload</li>
        <li>Video KYC slots: integrated calendar (future)</li>
        <li>AML name match exceptions: 2 (sample)</li>
      </ul>
    </div>
  )
}

export function AgentEarnings() {
  return (
    <div className="portal-page">
      <p className="muted intro">Incentive statements and TDS certificates — static preview.</p>
      <div className="card panel">
        <table className="data-table">
          <thead>
            <tr>
              <th>Month</th>
              <th>Gross (₹)</th>
              <th>TDS (₹)</th>
              <th>Net (₹)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mar 2026</td>
              <td>1,18,400</td>
              <td>11,840</td>
              <td>1,06,560</td>
            </tr>
            <tr>
              <td>Feb 2026</td>
              <td>1,04,200</td>
              <td>10,420</td>
              <td>93,780</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
