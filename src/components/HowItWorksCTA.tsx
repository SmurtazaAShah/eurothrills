'use client'
import { useInquire } from './InquireProvider'
import s from '@/app/how-it-works/styles.module.css'

function CheckIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

function ArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  )
}

export default function HowItWorksCTA() {
  const { openInquire } = useInquire()

  return (
    <section className={s.cta}>
      <div className="container">
        <div className={s.ctaInner}>
          <p className={s.ctaTitle}>
            Ready to plan<br />
            <em>your trip?</em>
          </p>
          <p className={s.ctaSub}>
            Tell us your dates and what you have in mind. We reply within 24 hours.
          </p>
          <button className="btn btn-primary btn-lg" onClick={openInquire} style={{ marginTop: 8 }}>
            Inquire now <ArrowRight />
          </button>
          <div className={s.ctaMicro}>
            <span><CheckIcon /> No booking fees</span>
            <span><CheckIcon /> Full refund to 60 days</span>
            <span><CheckIcon /> Private trips available</span>
          </div>
        </div>
      </div>
    </section>
  )
}
