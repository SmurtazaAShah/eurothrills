import type { Metadata } from 'next'
import UtilityBar from '@/components/UtilityBar'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import VerbierTripCards from '@/components/VerbierTripCards'
import VerbierCTA from '@/components/VerbierCTA'
import s from './styles.module.css'

export const metadata: Metadata = {
  title: 'Verbier Ski Holidays',
  description: "Expert-guided ski weeks in Verbier, Switzerland. Access the 4 Vallées with a local guide who knows every line, in every condition.",
}

function MountainPlaceholder() {
  return (
    <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3 20 L9 7 L13 13 L16 6 L21 20 Z" />
      <path d="M14.5 6.5 L16 6 L17.5 6.5" fill="none" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" />
    </svg>
  )
}

const stats = [
  { key: 'Season',   value: 'Dec – Apr'         },
  { key: 'Altitude', value: '1,500 – 3,330m'    },
  { key: 'Ski Area', value: '412km'              },
  { key: 'Best For', value: 'Advanced & Expert'  },
]

const expect = [
  {
    num:   '01',
    title: 'The Mountain',
    body:  '412km of marked runs across 4 resorts. The best off-piste in the Alps when conditions are right.',
  },
  {
    num:   '02',
    title: 'The Village',
    body:  'A proper Alpine village with excellent restaurants and a lively après scene. Not cheap, but worth it.',
  },
  {
    num:   '03',
    title: 'Getting There',
    body:  'Geneva Airport is 2 hours by road or rail. We arrange all transfers as part of your trip.',
  },
]

export default function VerbierPage() {
  return (
    <>
      <UtilityBar />
      <Nav />

      {/* Hero */}
      <div className={s.hero}>
        <div className={s.heroPlaceholder} aria-hidden="true" />
        <div className={s.heroOverlay}     aria-hidden="true" />
        <div className={`container ${s.heroContent}`}>
          <p className={s.heroEyebrow}>Winter Skiing · Switzerland</p>
          <h1 className={s.heroTitle}>Verbier</h1>
          <p className={s.heroSub}>4 Vallées · 412km of piste · 1,500m–3,330m</p>
        </div>
      </div>

      {/* Quick stats bar */}
      <div className={s.statsBar}>
        <div className="container">
          <div className={s.statsRow}>
            {stats.map((stat) => (
              <div key={stat.key} className={s.statItem}>
                <span className={s.statKey}>{stat.key}</span>
                <span className={s.statVal}>{stat.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Verbier — two column */}
      <section className={s.about}>
        <div className="container">
          <div className={s.aboutGrid}>
            <div>
              <p className="section-eyebrow">The destination</p>
              <h2 className="section-title">Why Verbier?</h2>
              <p className={s.aboutBody}>
                Verbier sits at the heart of the 4 Vallées — one of the largest linked ski areas
                in the world. But the reason serious skiers come here isn&apos;t the piste count.
                It&apos;s the off-piste. The Vallon d&apos;Arby, the Col des Gentianes, the
                Backside — terrain that rewards experience and punishes overconfidence. Our guides
                have skied every line, in every condition, for over a decade.
              </p>
            </div>
            <div className={s.aboutImgPlaceholder}>
              <MountainPlaceholder />
            </div>
          </div>
        </div>
      </section>

      {/* Trips from Verbier */}
      <section className={s.tripsSection}>
        <div className="container">
          <p className="section-eyebrow">Guided trips</p>
          <h2 className="section-title">
            Trips from <em>Verbier</em>
          </h2>
          <VerbierTripCards />
        </div>
      </section>

      {/* What to expect — 3 columns */}
      <section className={s.expectSection}>
        <div className="container">
          <p className="section-eyebrow">What to expect</p>
          <h2 className="section-title">
            Everything you need to<br />
            <em>know before you go</em>
          </h2>
          <div className={s.expectGrid}>
            {expect.map((item) => (
              <div key={item.title} className={s.expectCard}>
                <span className={s.expectNum}>{item.num}</span>
                <div className={s.expectDivider} />
                <h3 className={s.expectTitle}>{item.title}</h3>
                <p className={s.expectBody}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <VerbierCTA />

      <Footer />
    </>
  )
}
