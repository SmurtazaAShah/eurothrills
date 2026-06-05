function Yes() {
  return (
    <svg className="cmp-icon-yes" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}
function No() {
  return (
    <svg className="cmp-icon-no" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  )
}
function Partial() {
  return (
    <svg className="cmp-icon-partial" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
      <line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
    </svg>
  )
}

const rows = [
  {
    feature: 'Alps-only specialist (ski + cycling)',
    us: <Yes />, backroads: <No />, diy: <No />,
  },
  {
    feature: 'On-ground guide accompanies every trip',
    us: <Yes />, backroads: <Yes />, diy: <No />,
  },
  {
    feature: 'Small groups (12–20 max)',
    us: <Yes />, backroads: <Partial />, diy: <Yes />,
  },
  {
    feature: 'American-market expertise & cultural translation',
    us: <Yes />, backroads: <Partial />, diy: <No />,
  },
  {
    feature: 'Character hotels — never a chain property',
    us: <Yes />, backroads: <Partial />, diy: <No />,
  },
  {
    feature: 'Itinerary flexes for weather & conditions',
    us: <Yes />, backroads: <No />, diy: <Partial />,
  },
  {
    feature: 'Pre-trip planning call with your guide',
    us: <Yes />, backroads: <No />, diy: <No />,
  },
  {
    feature: 'Dual-season relationship (ski + cycling)',
    us: <Yes />, backroads: <No />, diy: <No />,
  },
]

export default function Comparison() {
  return (
    <section style={{ background: 'var(--et-cream)' }}>
      <div className="container">
        <div style={{ marginBottom: 48 }}>
          <p className="section-eyebrow">The honest comparison</p>
          <h2 className="section-title">
            Why not just <em>book elsewhere?</em>
          </h2>
          <p className="section-sub">
            Backroads is great. So is Butterfield &amp; Robinson. Here&apos;s how we&apos;re different — honestly.
          </p>
        </div>
        <div className="cmp-table">
          <div className="cmp-row head">
            <div className="cmp-cell">Feature</div>
            <div className="cmp-cell us">EuroThrills</div>
            <div className="cmp-cell">Backroads / Trek Travel</div>
            <div className="cmp-cell">DIY planning</div>
          </div>
          {rows.map((r) => (
            <div key={r.feature} className="cmp-row">
              <div className="cmp-cell feature">{r.feature}</div>
              <div className="cmp-cell us">{r.us}</div>
              <div className="cmp-cell">{r.backroads}</div>
              <div className="cmp-cell">{r.diy}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
