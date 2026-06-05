import type { Metadata } from 'next'
import UtilityBar from '@/components/UtilityBar'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import HowItWorksCTA from '@/components/HowItWorksCTA'
import s from './styles.module.css'

export const metadata: Metadata = {
  title: 'How It Works',
  description: 'Every EuroThrills trip starts with a conversation. No brochures, no packages — a custom itinerary built around your goals.',
}

function GuideIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}

function LodgingIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}

function LogisticsIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 11 12 14 22 4" />
      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
    </svg>
  )
}

const steps = [
  {
    num: '01',
    title: 'Inquire',
    desc: 'Tell us your dates, group size, and what kind of trip you have in mind. Takes 2 minutes.',
  },
  {
    num: '02',
    title: 'Discovery Call',
    desc: 'A 30-minute call with your advisor. We learn exactly what you want, you learn exactly what\'s possible.',
  },
  {
    num: '03',
    title: 'Custom Itinerary',
    desc: 'We design your trip from scratch — routes, lodging, guides, transfers — built around your goals, not a template.',
  },
  {
    num: '04',
    title: 'Your Expedition',
    desc: 'We handle every detail on the ground. You focus entirely on the mountains.',
  },
]

const included = [
  {
    icon: <GuideIcon />,
    title: 'Expert Local Guides',
    desc: 'Every guide is UIAGM or nationally certified with deep knowledge of their specific region.',
  },
  {
    icon: <LodgingIcon />,
    title: 'Handpicked Lodging',
    desc: 'Character hotels and mountain chalets — chosen for location and quality, not star ratings.',
  },
  {
    icon: <LogisticsIcon />,
    title: 'Full Logistics',
    desc: 'Transfers, lift passes, equipment rental, restaurant reservations. Everything arranged in advance.',
  },
]

export default function HowItWorksPage() {
  return (
    <>
      <UtilityBar />
      <Nav />

      {/* Hero */}
      <section className={s.hero}>
        <div className="container">
          <p className="section-eyebrow">The process</p>
          <h1 className={s.heroTitle}>
            How EuroThrills <em>works</em>
          </h1>
          <p className={s.heroSub}>
            Every trip starts with a conversation. No brochures, no packages, no guessing.
          </p>
        </div>
      </section>

      {/* Steps — reuses existing how-bg + how-grid from globals.css */}
      <section className="how-bg">
        <div className="container">
          <p className="section-eyebrow">Step by step</p>
          <h2 className="section-title" style={{ color: '#fff', marginBottom: 0 }}>
            From first message to<br /><em>first descent</em>
          </h2>
          <div className="how-grid">
            {steps.map((step) => (
              <div key={step.num} className="how-step">
                <span className="how-num">{step.num}</span>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section style={{ background: '#fff', borderBottom: '1px solid #E6E6E6' }}>
        <div className="container">
          <div className="section-head">
            <div className="section-head-left">
              <p className="section-eyebrow">Every trip includes</p>
              <h2 className="section-title">
                What&apos;s <em>included</em>
              </h2>
              <p className="section-sub">
                One price covers everything except your flights.
              </p>
            </div>
          </div>
          <div className={s.includedGrid}>
            {included.map((item) => (
              <div key={item.title} className={s.card}>
                <div className={s.iconWrap}>{item.icon}</div>
                <h3 className={s.cardTitle}>{item.title}</h3>
                <p className={s.cardDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HowItWorksCTA />

      <Footer />
    </>
  )
}
