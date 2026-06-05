import Link from 'next/link'

function ArrowRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  )
}

function MapPin({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  )
}

const destCards = [
  { key: 'verbier',   img: 'img-chamonix',  name: 'Verbier',         country: 'Switzerland', count: '3 ski departures', season: 'winter' },
  { key: 'zermatt',   img: 'img-zermatt',   name: 'Zermatt',         country: 'Switzerland', count: '2 ski departures', season: 'winter' },
  { key: 'valdisere', img: 'img-interlak',  name: "Val d'Isère",     country: 'France',      count: '2 ski departures', season: 'winter' },
  { key: 'stanton',   img: 'img-faroe',     name: 'St. Anton',       country: 'Austria',     count: '2 ski departures', season: 'winter' },
  { key: 'cortina',   img: 'img-dolomite',  name: 'Cortina d\'Ampezzo', country: 'Italy',   count: '2 ski departures', season: 'winter' },
  { key: 'dolomites',  img: 'img-cycling-dolomites', name: 'The Dolomites',  country: 'Italy',       count: '3 cycling departures', season: 'summer' },
  { key: 'engadin',    img: 'img-cycling-engadin',   name: 'Engadin Valley', country: 'Switzerland', count: '2 cycling departures', season: 'summer' },
  { key: 'frenchalps', img: 'img-cycling-french',    name: 'French Alps',    country: 'France',       count: '2 cycling departures', season: 'summer' },
]

export default function Destinations() {
  return (
    <section className="dest-bg" id="destinations">
      <div className="container">
        <div className="section-head">
          <div className="section-head-left">
            <p className="section-eyebrow">5 ski resorts · 5 cycling regions</p>
            <h2 className="section-title">
              The Alps, mapped for <em>adventure</em>
            </h2>
            <p className="section-sub">
              Verbier to the Dolomites, Zermatt to the Engadin — we know every pass, every hotel, every shortcut.
            </p>
          </div>
          <div className="section-head-right">
            <Link href="/winter-skiing" className="btn btn-outline">
              All destinations <ArrowRight />
            </Link>
          </div>
        </div>

        {/* Featured spotlight */}
        <div className="dest-spot">
          <div className="dest-spot-media img-alpine" style={{ minHeight: 360 }}>
            <div style={{ position: 'absolute', top: 18, left: 18, zIndex: 1 }}>
              <span className="dest-spot-pin">
                <MapPin size={12} />
                Winter Spotlight
              </span>
            </div>
            <div className="dest-spot-stats" style={{ position: 'absolute', bottom: 18, left: 18, zIndex: 1 }}>
              <div className="dest-spot-stat">
                <span className="val">410<em>km</em></span>
                <span className="lab">Piste in the 4 Vallées</span>
              </div>
              <div className="dest-spot-stat">
                <span className="val">4.9</span>
                <span className="lab">Avg. guest rating</span>
              </div>
              <div className="dest-spot-stat">
                <span className="val">3</span>
                <span className="lab">Departures this season</span>
              </div>
            </div>
          </div>
          <div className="dest-spot-body">
            <p className="dest-spot-eyebrow">December–March spotlight</p>
            <h3 className="dest-spot-title">
              Verbier &amp;<br />
              <em>The 4 Vallées</em>
            </h3>
            <p className="dest-spot-desc">
              Switzerland&apos;s most celebrated freeride destination. 410km of piste, legendary off-piste terrain, and a village that has never lost its soul to the corporate ski industry.
            </p>
            <div className="dest-spot-chips">
              {['Off-piste', 'Ski touring', 'Glacier runs', 'Après ski', 'Boutique hotels'].map(c => (
                <span key={c} className="dest-spot-chip">{c}</span>
              ))}
            </div>
            <div className="dest-spot-cta">
              <Link href="/winter-skiing/verbier" className="btn btn-primary btn-lg">
                Verbier ski weeks <ArrowRight />
              </Link>
            </div>
          </div>
        </div>

        {/* Destination grid */}
        <div className="dest-grid">
          {destCards.map((d) => (
            <Link key={d.key} href={`/${d.season === 'winter' ? 'winter-skiing' : 'summer-cycling'}/${d.key}`} className={`dest-card ${d.img}`}>
              <span className="dest-count">{d.count}</span>
              <div className="dest-foot">
                <div className="dest-name">{d.name}</div>
                <div className="dest-country">
                  <MapPin size={11} />
                  {' '}{d.country} · {d.season === 'winter' ? 'Skiing' : 'Cycling'}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
