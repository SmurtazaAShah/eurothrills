'use client'
import { useInquire } from './InquireProvider'
import s from '@/app/winter-skiing/verbier/styles.module.css'

function ArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  )
}

export default function VerbierCTA() {
  const { openInquire } = useInquire()
  return (
    <section className={s.cta}>
      <div className="container">
        <div className={s.ctaInner}>
          <p className={s.ctaTitle}>
            Ready to ski <em>Verbier?</em>
          </p>
          <p className={s.ctaSub}>
            Tell us your dates and group size. Your advisor will reply within 24 hours.
          </p>
          <button className="btn btn-primary btn-lg" onClick={openInquire} style={{ marginTop: 8 }}>
            Inquire now <ArrowRight />
          </button>
        </div>
      </div>
    </section>
  )
}
