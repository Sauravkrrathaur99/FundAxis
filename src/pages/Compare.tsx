import { useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { mutualFunds } from '../data/mockData'

const MAX = 4

export function Compare() {
  const [params, setParams] = useSearchParams()
  const ids = useMemo(() => {
    const raw = params.get('ids') || ''
    const add = params.get('add')
    const set = new Set(
      raw
        .split(',')
        .map((s) => s.trim())
        .filter(Boolean),
    )
    if (add) set.add(add)
    return Array.from(set).slice(0, MAX)
  }, [params])

  const selected = useMemo(
    () => ids.map((id) => mutualFunds.find((f) => f.id === id)).filter(Boolean),
    [ids],
  )

  function setIds(next: string[]) {
    const p = new URLSearchParams(params)
    p.delete('add')
    if (next.length) p.set('ids', next.join(','))
    else p.delete('ids')
    setParams(p)
  }

  function toggle(id: string) {
    if (ids.includes(id)) setIds(ids.filter((x) => x !== id))
    else if (ids.length < MAX) setIds([...ids, id])
  }

  return (
    <div className="page-compare">
      <header className="page-header">
        <h1>Compare Indian schemes</h1>
        <p className="muted">Pick up to {MAX} schemes. Selection is stored in the URL for sharing.</p>
      </header>

      <section className="card panel">
        <h2 className="h3">Quick add</h2>
        <div className="compare-picks">
          {mutualFunds.map((f) => (
            <label key={f.id} className="pick-row">
              <input
                type="checkbox"
                checked={ids.includes(f.id)}
                onChange={() => toggle(f.id)}
                disabled={!ids.includes(f.id) && ids.length >= MAX}
              />
              <span>{f.name}</span>
            </label>
          ))}
        </div>
      </section>

      {selected.length === 0 ? (
        <p className="empty-state">Select at least one fund to see a comparison table.</p>
      ) : (
        <div className="table-wrap compare-table-wrap">
          <table className="data-table compare-table">
            <thead>
              <tr>
                <th>Metric</th>
                {selected.map((f) => (
                  <th key={f!.id}>{f!.name}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>AMC</td>
                {selected.map((f) => (
                  <td key={f!.id}>{f!.amc}</td>
                ))}
              </tr>
              <tr>
                <td>Category</td>
                {selected.map((f) => (
                  <td key={f!.id}>{f!.category}</td>
                ))}
              </tr>
              <tr>
                <td>Risk</td>
                {selected.map((f) => (
                  <td key={f!.id}>
                    <span className={`badge badge-${f!.risk.toLowerCase()}`}>{f!.risk}</span>
                  </td>
                ))}
              </tr>
              <tr>
                <td>NAV</td>
                {selected.map((f) => (
                  <td key={f!.id}>₹{f!.nav.toFixed(2)}</td>
                ))}
              </tr>
              <tr>
                <td>Expense ratio</td>
                {selected.map((f) => (
                  <td key={f!.id}>{f!.expenseRatio}%</td>
                ))}
              </tr>
              <tr>
                <td>1Y return</td>
                {selected.map((f) => (
                  <td key={f!.id}>{f!.returns1y}%</td>
                ))}
              </tr>
              <tr>
                <td>3Y CAGR</td>
                {selected.map((f) => (
                  <td key={f!.id}>{f!.returns3y}%</td>
                ))}
              </tr>
              <tr>
                <td>Min SIP</td>
                {selected.map((f) => (
                  <td key={f!.id}>₹{f!.minSip.toLocaleString('en-IN')}</td>
                ))}
              </tr>
              <tr>
                <td />
                {selected.map((f) => (
                  <td key={f!.id}>
                    <Link to={`/funds/${f!.id}`} className="btn btn-sm btn-ghost">
                      View
                    </Link>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
