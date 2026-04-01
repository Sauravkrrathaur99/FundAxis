import { useMemo, useState } from 'react'

const MONTHS_IN_YEAR = 12

export function SIPCalculator() {
  const [monthly, setMonthly] = useState(5000)
  const [years, setYears] = useState(10)
  const [cagr, setCagr] = useState(12)

  const result = useMemo(() => {
    const r = cagr / 100 / MONTHS_IN_YEAR
    const n = years * MONTHS_IN_YEAR
    if (r === 0) return { invested: monthly * n, fv: monthly * n }
    const fv = monthly * ((Math.pow(1 + r, n) - 1) / r) * (1 + r)
    const invested = monthly * n
    return { invested, fv }
  }, [monthly, years, cagr])

  const gain = result.fv - result.invested

  return (
    <div className="page-sip">
      <header className="page-header">
        <h1>SIP calculator</h1>
        <p className="muted">
          Estimate future value using a flat assumed return (illustration only — not advice).
        </p>
      </header>

      <div className="sip-layout">
        <section className="card panel sip-controls">
          <label className="field">
            <span>Monthly SIP (₹)</span>
            <input
              type="range"
              min={500}
              max={100000}
              step={500}
              value={monthly}
              onChange={(e) => setMonthly(Number(e.target.value))}
            />
            <strong className="field-value">₹{monthly.toLocaleString('en-IN')}</strong>
          </label>
          <label className="field">
            <span>Duration (years)</span>
            <input
              type="range"
              min={1}
              max={30}
              step={1}
              value={years}
              onChange={(e) => setYears(Number(e.target.value))}
            />
            <strong className="field-value">{years} years</strong>
          </label>
          <label className="field">
            <span>Expected CAGR (%)</span>
            <input
              type="range"
              min={4}
              max={20}
              step={0.5}
              value={cagr}
              onChange={(e) => setCagr(Number(e.target.value))}
            />
            <strong className="field-value">{cagr}%</strong>
          </label>
        </section>

        <section className="card panel sip-result">
          <h2 className="h3">Projected corpus</h2>
          <p className="sip-big">₹{Math.round(result.fv).toLocaleString('en-IN')}</p>
          <dl className="sip-breakdown">
            <div>
              <dt>Total invested</dt>
              <dd>₹{Math.round(result.invested).toLocaleString('en-IN')}</dd>
            </div>
            <div>
              <dt>Estimated gains</dt>
              <dd className="text-gain">₹{Math.round(gain).toLocaleString('en-IN')}</dd>
            </div>
          </dl>
          <p className="muted small disclaimer-box">
            Formula: standard monthly SIP future value. Actual returns vary; taxes and loads not
            modeled in this demo.
          </p>
        </section>
      </div>
    </div>
  )
}
