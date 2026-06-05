import Link from 'next/link'

function ArrowRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  )
}

const sideArticles = [
  {
    title: 'Verbier or Zermatt? How to choose your first Alps ski week',
    tag: 'Skiing',
    mins: '6 min read',
  },
  {
    title: "Alps vs Rockies: a skier's honest comparison after 10 winters",
    tag: 'Skiing',
    mins: '8 min read',
  },
  {
    title: 'Why every serious cyclist should ride the Dolomites before they die',
    tag: 'Cycling',
    mins: '7 min read',
  },
  {
    title: 'What to pack for an Alps ski week — and what to rent there',
    tag: 'Planning',
    mins: '5 min read',
  },
]

const rowArticles = [
  {
    img: 'act-media-alpine',
    tag: 'Skiing',
    title: "Zermatt in March: the guide to late-season glacier skiing",
    mins: '6 min read',
  },
  {
    img: 'act-media-cycling',
    tag: 'Cycling',
    title: "Col du Galibier: a profile of the Tour de France's hardest climb",
    mins: '5 min read',
  },
  {
    img: 'act-media-alpine',
    tag: 'Hotels',
    title: 'Character hotels of the Alps: why we have never booked a chain',
    mins: '7 min read',
  },
]

export default function Journal() {
  return (
    <section style={{ background: 'var(--et-paper)', borderTop: '1px solid var(--et-line)' }}>
      <div className="container">
        <div className="section-head">
          <div className="section-head-left">
            <p className="section-eyebrow">The EuroThrills Journal</p>
            <h2 className="section-title">
              Stories from <em>the Alps</em>
            </h2>
            <p className="section-sub">
              Field guides, destination deep-dives, and the knowledge you need before you fly.
            </p>
          </div>
          <div className="section-head-right">
            <Link href="/journal" className="btn btn-outline">
              All articles <ArrowRight />
            </Link>
          </div>
        </div>

        {/* Hero + side list */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 28, marginBottom: 28 }}>
          <Link href="/journal" style={{ display: 'flex', flexDirection: 'column', gap: 0, borderRadius: 14, overflow: 'hidden', border: '1px solid var(--et-line)', background: 'var(--et-paper)' }}>
            <div className="act-media-alpine" style={{ height: 320, position: 'relative', backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <span style={{
                position: 'absolute', top: 16, left: 16,
                background: 'var(--et-accent)', color: '#fff',
                fontSize: 11, fontWeight: 700, padding: '5px 10px', borderRadius: 9999,
                textTransform: 'uppercase', letterSpacing: '0.06em',
              }}>
                Field dispatch
              </span>
            </div>
            <div style={{ padding: '24px 28px 28px', display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div style={{ display: 'flex', gap: 12, fontSize: 12, color: 'var(--et-mute)', alignItems: 'center' }}>
                <span style={{ background: 'var(--et-cream-2)', color: 'var(--et-brand)', fontWeight: 600, fontSize: 11, padding: '3px 8px', borderRadius: 9999 }}>Skiing</span>
                <span>10 min read</span>
              </div>
              <h3 style={{ fontSize: 24, fontWeight: 700, letterSpacing: '-0.02em', margin: 0, lineHeight: 1.2, color: 'var(--et-ink)' }}>
                Why Americans are skiing Europe and not coming back to the Rockies
              </h3>
              <p style={{ margin: 0, fontSize: 14, lineHeight: 1.55, color: 'var(--et-ink-3)' }}>
                The food. The terrain. The lift ticket prices. The family hotels that have been in the same hands since 1923. We break down every reason the Alps keep winning.
              </p>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13.5, fontWeight: 600, color: 'var(--et-brand)', marginTop: 4 }}>
                Read the dispatch <ArrowRight />
              </div>
            </div>
          </Link>

          {/* Side list */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0, border: '1px solid var(--et-line)', borderRadius: 14, overflow: 'hidden', background: 'var(--et-paper)' }}>
            {sideArticles.map((a, i) => (
              <Link key={a.title} href="/journal" style={{
                padding: '20px 22px', display: 'flex', flexDirection: 'column', gap: 6,
                borderBottom: i < sideArticles.length - 1 ? '1px solid var(--et-line)' : 'none',
              }}>
                <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                  <span style={{ background: 'var(--et-cream-2)', color: 'var(--et-brand)', fontWeight: 600, fontSize: 11, padding: '3px 8px', borderRadius: 9999 }}>{a.tag}</span>
                  <span style={{ fontSize: 11.5, color: 'var(--et-mute)' }}>{a.mins}</span>
                </div>
                <p style={{ margin: 0, fontSize: 15, fontWeight: 600, letterSpacing: '-0.01em', color: 'var(--et-ink)', lineHeight: 1.25 }}>{a.title}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Card row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {rowArticles.map((a) => (
            <Link key={a.title} href="/journal" style={{ borderRadius: 14, overflow: 'hidden', border: '1px solid var(--et-line)', background: 'var(--et-paper)', display: 'flex', flexDirection: 'column' }}>
              <div className={a.img} style={{ height: 200, backgroundSize: 'cover', backgroundPosition: 'center' }} />
              <div style={{ padding: '18px 20px 20px', display: 'flex', flexDirection: 'column', gap: 8 }}>
                <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                  <span style={{ background: 'var(--et-cream-2)', color: 'var(--et-brand)', fontWeight: 600, fontSize: 11, padding: '3px 8px', borderRadius: 9999 }}>{a.tag}</span>
                  <span style={{ fontSize: 11.5, color: 'var(--et-mute)' }}>{a.mins}</span>
                </div>
                <p style={{ margin: 0, fontSize: 16.5, fontWeight: 700, letterSpacing: '-0.015em', lineHeight: 1.25, color: 'var(--et-ink)' }}>{a.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
