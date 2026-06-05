function CheckIcon() {
  return (
    <svg className="why-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

function CurateIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
  )
}

const MapPinIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
)

const PersonIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
    <circle cx="12" cy="7" r="4"/>
  </svg>
)

const cards = [
  {
    icon: <CurateIcon />,
    title: 'Curated, not catalogued',
    desc: 'Every itinerary is built, not picked from a brochure. We have favorites — a chalet hotel in Verbier, a pasta place in Cortina — that no ranking algorithm knows about.',
    points: [
      'Built around your group, the conditions, and the season',
      'We say no to trips we cannot do well',
      'Character properties, never chain hotels',
      'Named guide on every departure — not a rotating roster',
    ],
  },
  {
    icon: <MapPinIcon />,
    title: 'Local, not laminated',
    desc: 'We live in the European Alps year-round. Our recommendations come from relationships, not Booking.com rankings.',
    points: [
      'On-ground presence in Europe — not a call center',
      'We know which lift opens in late March in Zermatt',
      'We know which road in the Dolomites was repaved this summer',
      'Pre-trip planning call with the person who runs your trip',
    ],
  },
  {
    icon: <PersonIcon />,
    title: 'Effortless, not corporate',
    desc: 'A premium experience should feel personal — like a well-traveled friend with extraordinary access — not like a transaction with a tour operator.',
    points: [
      'Small groups: typically 12–20, always fewer than 20',
      '24/7 in-trip support from a guide you\'ve already met on Zoom',
      'Flexible itineraries that adjust for weather and conditions',
      'Full refund if we cancel — no vouchers, no credit notes',
    ],
  },
]

export default function WhyUs() {
  return (
    <section id="why-us">
      <div className="container">
        <div style={{ marginBottom: 48 }}>
          <p className="section-eyebrow">Why EuroThrills</p>
          <h2 className="section-title">
            We do things <em>differently</em>
          </h2>
          <p className="section-sub">
            We&apos;re not a tour operator that scales through volume. We&apos;re a boutique advisor who goes deeper — into one region, for one kind of traveler.
          </p>
        </div>
        <div className="why-grid">
          {cards.map((c) => (
            <div key={c.title} className="why-card">
              <div className="why-icon">{c.icon}</div>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
              <ul>
                {c.points.map((pt) => (
                  <li key={pt}>
                    <CheckIcon />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
