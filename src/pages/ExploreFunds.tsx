import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { mutualFunds } from '../data/mockData'
import type { MutualFund } from '../types'

const categories = ['All', ...Array.from(new Set(mutualFunds.map((f) => f.category)))]

export function ExploreFunds() {
  const [cat, setCat] = useState('All')
  const [q, setQ] = useState('')

  const filtered = useMemo(() => {
    let list: MutualFund[] = mutualFunds
    if (cat !== 'All') list = list.filter((f) => f.category === cat)
    if (q.trim()) {
      const s = q.toLowerCase()
      list = list.filter(
        (f) =>
          f.name.toLowerCase().includes(s) ||
          f.amc.toLowerCase().includes(s) ||
          f.category.toLowerCase().includes(s),
      )
    }
    return list
  }, [cat, q])

  return (
    <div className="page-funds">
      <header className="page-header">
        <h1>Explore Indian mutual funds</h1>
        <p className="muted">
          Filter by category and search by scheme name or AMC. Data is static and for demo only.
        </p>
      </header>

      <div className="toolbar">
        <div className="search-wrap">
          <label htmlFor="fund-search" className="sr-only">
            Search funds
          </label>
          <input
            id="fund-search"
            type="search"
            className="input"
            placeholder="Search by scheme, AMC, category..."
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
        </div>
        <div className="chips" role="group" aria-label="Category">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              className={`chip ${cat === c ? 'active' : ''}`}
              onClick={() => setCat(c)}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="table-wrap">
        <table className="data-table">
          <thead>
            <tr>
              <th>Scheme</th>
              <th>Category</th>
              <th>Risk</th>
              <th>NAV</th>
              <th>1Y</th>
              <th>3Y</th>
              <th>Min SIP</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {filtered.map((f) => (
              <tr key={f.id}>
                <td>
                  <strong>{f.name}</strong>
                  <span className="muted small block">{f.amc}</span>
                </td>
                <td>{f.category}</td>
                <td>
                  <span className={`badge badge-${f.risk.toLowerCase()}`}>{f.risk}</span>
                </td>
                <td>₹{f.nav.toFixed(2)}</td>
                <td>{f.returns1y}%</td>
                <td>{f.returns3y}%</td>
                <td>₹{f.minSip.toLocaleString('en-IN')}</td>
                <td>
                  <Link to={`/funds/${f.id}`} className="btn btn-sm btn-ghost">
                    Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filtered.length === 0 && <p className="empty-state">No funds match your filters.</p>}
      </div>
    </div>
  )
}
