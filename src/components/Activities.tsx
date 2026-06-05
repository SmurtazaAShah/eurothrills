import Link from 'next/link'

function ArrowRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  )
}

const SnowflakeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="2" y1="12" x2="22" y2="12"/>
    <line x1="12" y1="2" x2="12" y2="22"/>
    <path d="M20 16l-4-4 4-4M4 8l4 4-4 4M16 4l-4 4-4-4M8 20l4-4 4 4"/>
  </svg>
)

const BikeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="5.5" cy="17.5" r="3.5"/><circle cx="18.5" cy="17.5" r="3.5"/>
    <path d="M15 6a1 1 0 0 0 0-2h-3l-3 9 3 0 2-6 3 0"/>
    <path d="M5.5 14h8.5l3-8"/>
  </svg>
)

const MountainIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="3 18 9 6 15 12 18 8 21 18 3 18"/>
  </svg>
)

const RouteIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="6" cy="19" r="3"/><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"/>
    <circle cx="18" cy="5" r="3"/>
  </svg>
)

const UsersIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
)

const activities = [
  {
    key: 'skiing',
    cls: 'feature',
    media: 'act-media-alpine',
    icon: <SnowflakeIcon />,
    count: '5 ski destinations',
    tag: 'December–April',
    name: 'Winter Skiing',
    desc: 'Verbier, Zermatt, Val d\'Isère, St. Anton, Cortina — small-group ski weeks led by on-ground guides who live in the Alps.',
    fromLabel: 'from',
    price: '$9,800',
    dest: '7-night departures',
  },
  {
    key: 'cycling',
    cls: 'feature',
    media: 'act-media-cycling',
    icon: <BikeIcon />,
    count: '5 cycling regions',
    tag: 'May–September',
    name: 'Summer Cycling',
    desc: 'Road and gravel tours across the Dolomites, Engadin, French Alps, Slovenia, and the Austrian Tyrol.',
    fromLabel: 'from',
    price: '$8,500',
    dest: '7–9 night departures',
  },
  {
    key: 'classic',
    cls: 'compact',
    media: 'act-media-alpine',
    icon: <MountainIcon />,
    count: '5 departures',
    tag: 'Most popular',
    name: 'The Classic Week',
    desc: '',
    fromLabel: 'from',
    price: '$9,800',
    dest: 'One resort, deep immersion',
  },
  {
    key: 'traverse',
    cls: 'compact',
    media: 'act-media-paraglide',
    icon: <RouteIcon />,
    count: '3 departures',
    tag: 'Ski two resorts',
    name: 'Two-Resort Traverse',
    desc: '',
    fromLabel: 'from',
    price: '$11,200',
    dest: 'Range and variety',
  },
  {
    key: 'gravel',
    cls: 'compact',
    media: 'act-media-cycling',
    icon: <BikeIcon />,
    count: '4 departures',
    tag: 'Lower intensity',
    name: 'Gravel + Wine Trip',
    desc: '',
    fromLabel: 'from',
    price: '$8,500',
    dest: 'Longer evenings',
  },
  {
    key: 'private',
    cls: 'compact',
    media: 'act-media-supercar',
    icon: <UsersIcon />,
    count: 'Year-round',
    tag: 'Your group only',
    name: 'Private Group Trips',
    desc: '',
    fromLabel: 'from',
    price: '$12,000',
    dest: '6–20 guests',
  },
]

export default function Activities() {
  return (
    <section className="act-bg" id="seasons">
      <div className="container">
        <div className="section-head">
          <div className="section-head-left">
            <p className="section-eyebrow">Two sports, one region</p>
            <h2 className="section-title">
              Browse by <em>season</em>
            </h2>
            <p className="section-sub">
              We guide exactly two activities in the European Alps — and we&apos;ve spent years going deeper into both.
            </p>
          </div>
        </div>

        <div className="act-grid">
          {activities.map((act) => (
            <Link href={act.key === 'cycling' || act.key === 'gravel' ? '/summer-cycling' : '/winter-skiing'} key={act.key} className={`act-card${act.cls ? ' ' + act.cls : ''}`}>
              <div className={`act-card-media ${act.media}`}>
                <div className="act-card-icon">{act.icon}</div>
                <span className="act-card-count">{act.count}</span>
                <span className="act-card-tag">
                  <span className="dot" />
                  {act.tag}
                </span>
              </div>
              <div className="act-card-body">
                <h3 className="act-card-name">
                  {act.name}
                  <ArrowRight />
                </h3>
                {act.desc && <p className="act-card-desc">{act.desc}</p>}
                <div className="act-card-meta">
                  <span>{act.dest}</span>
                  <span className="from">
                    <em>{act.fromLabel}</em> {act.price}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
