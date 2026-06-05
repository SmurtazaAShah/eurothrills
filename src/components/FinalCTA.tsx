import Link from 'next/link'

function ArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--et-accent)' }}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

export default function FinalCTA() {
  return (
    <section style={{ padding: '80px 0' }}>
      <div className="container">
        <div className="cta-final">
          <div className="cta-final-inner">
            <h2>
              Show up.<br />
              <em>We&apos;ve handled</em> the rest.
            </h2>
            <p>
              Guided ski trips and cycling tours in the European Alps. Designed for Americans who&apos;d rather ski than plan.
            </p>
            <div className="cta-final-row">
              <Link href="/winter-skiing" className="btn btn-primary btn-lg">
                Browse ski trips <ArrowRight />
              </Link>
              <Link href="/summer-cycling" className="btn btn-outline btn-lg">
                Summer cycling
              </Link>
            </div>
            <div className="cta-micro">
              <span><CheckIcon /> No booking fees</span>
              <span><CheckIcon /> Full refund to 60 days</span>
              <span><CheckIcon /> Private trips available</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
