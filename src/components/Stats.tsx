const stats = [
  { num: '2',    suffix: '',    em: false, label: 'Sports. Skiing and cycling. Nothing else.', sub: 'One region, two seasons' },
  { num: '10',   suffix: '+',   em: false, label: 'Anchor destinations in the Alps',           sub: '5 ski resorts · 5 cycling regions' },
  { num: '4.9',  suffix: '',    em: true,  label: 'Average post-trip guest rating',            sub: 'From verified post-trip reviews' },
  { num: '12',   suffix: '–20', em: false, label: 'Guests per departure — always',             sub: 'Never scaled beyond the boutique promise' },
]

export default function Stats() {
  return (
    <section className="stats">
      <div className="container stats-inner">
        <div className="stats-grid">
          {stats.map((s) => (
            <div key={s.label} className="stat">
              <div className="stat-num">
                {s.num}{s.em ? <em>★</em> : s.suffix}
              </div>
              <div className="stat-label">{s.label}</div>
              <div className="stat-sub">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
