import type { Metadata } from 'next'
import Image from 'next/image'
import UtilityBar from '@/components/UtilityBar'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import OurStoryCTA from '@/components/OurStoryCTA'
import s from './styles.module.css'

export const metadata: Metadata = {
  title: 'Our Story',
  description: 'EuroThrills was built by people who couldn\'t find the Alpine trip they wanted — so they built it themselves.',
}

function MountainPlaceholder() {
  return (
    <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3 20 L9 7 L13 13 L16 6 L21 20 Z" />
      <path d="M14.5 6.5 L16 6 L17.5 6.5" fill="none" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" />
    </svg>
  )
}

function PersonPlaceholder() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}

const stats = [
  { num: '12+',  label: 'Years running Alpine expeditions' },
  { num: '340+', label: 'Trips completed' },
  { num: '6',    label: 'Alpine countries covered' },
  { num: '98%',  label: 'Clients who return or refer' },
]

const values = [
  {
    num: '01',
    name: 'Specificity over scale',
    desc: 'We work with fewer clients so we can know each trip inside out.',
  },
  {
    num: '02',
    name: 'Guides, not escorts',
    desc: 'Every person leading your trip is a certified expert, not a coordinator with a clipboard.',
  },
  {
    num: '03',
    name: 'Honest advice',
    desc: "If a destination isn't right for your group, we'll tell you. Then we'll find one that is.",
  },
]

const team = [
  {
    initials: 'SB',
    name: 'Sarah Brennan',
    role: 'Head Cycling Advisor',
    bio: 'Ex-professional cyclist, 12 years guiding in the Alps and Pyrenees.',
  },
  {
    initials: 'MD',
    name: 'Marco Delacroix',
    role: 'Operations Director',
    bio: 'Born in Annecy, raised in the mountains. Manages all ground logistics across 6 countries.',
  },
]

export default function OurStoryPage() {
  return (
    <>
      <UtilityBar />
      <Nav />

      {/* Hero */}
      <section className={s.hero}>
        <div className="container">
          <p className="section-eyebrow">Our story</p>
          <h1 className={s.heroTitle}>
            Built by people who couldn&apos;t find{' '}
            <em>the trip they&nbsp;wanted</em>
          </h1>
          <p className={s.heroSub} style={{ color: '#555', fontSize: 18, lineHeight: 1.55, maxWidth: 560, margin: 0 }}>
            Not a tour operator that scales. An advisory firm that goes deep.
          </p>
        </div>
      </section>

      {/* Story — two columns */}
      <section className={s.story}>
        <div className="container">
          <div className={s.storyGrid}>
            <div>
              <h2 className={s.storyHeadline}>We kept booking the wrong trips.</h2>
              <p className={s.storyBody}>
                After years of package ski holidays and cycling tours that promised adventure
                but delivered crowds, our founder decided to build something different. Not a
                tour operator that scales — an advisory firm that goes deep. Into one region,
                one season, one group at a time.
              </p>
            </div>
            <div className={s.storyImgPlaceholder}>
              <div className={s.storyImgOverlay} />
              <MountainPlaceholder />
            </div>
          </div>
        </div>
      </section>

      {/* Founder + Team */}
      <section className={s.founderSection}>
        <div className="container">
          <p className="section-eyebrow" style={{ textAlign: 'center', display: 'flex', justifyContent: 'center' }}>
            The team
          </p>
          <h2 className="section-title" style={{ textAlign: 'center', margin: '14px auto 48px', maxWidth: 480 }}>
            People who live <em>in the mountains</em>
          </h2>

          {/* Founder card */}
          <div className={s.founderCard}>
            <div className={s.founderImgWrap}>
              <Image
                src="/ceo.png"
                alt="Raza Hassan"
                width={200}
                height={200}
                style={{ objectFit: 'cover', borderRadius: '9999px' }}
              />
            </div>
            <p className={s.founderName}>Raza Hassan</p>
            <p className={s.founderRole}>Founder &amp; CEO</p>
            <p className={s.founderBio}>
              Raza has spent two decades skiing and cycling across the European Alps. After too
              many disappointing package tours, he built EuroThrills to offer the kind of trip
              he always wanted — expert-led, deeply personal, and built around the mountains he loves.
            </p>
          </div>

          {/* Team cards */}
          <div className={s.teamGrid}>
            {team.map(member => (
              <div key={member.name} className={s.teamCard}>
                <div className={s.teamAvatar}>{member.initials}</div>
                <p className={s.teamName}>{member.name}</p>
                <p className={s.teamRole}>{member.role}</p>
                <p className={s.teamBio}>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats — navy */}
      <section className={s.statsSection}>
        <div className="container">
          <div className={s.statsGrid}>
            {stats.map(stat => (
              <div key={stat.num} className={s.stat}>
                <span className={s.statNum}>{stat.num}</span>
                <span className={s.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className={s.valuesSection}>
        <div className="container">
          <p className="section-eyebrow">What we believe</p>
          <h2 className="section-title">
            The mountains deserve more<br />
            <em>than a brochure</em>
          </h2>
          <div className={s.valuesGrid}>
            {values.map(v => (
              <div key={v.num} className={s.valueCard}>
                <span className={s.valueNum}>{v.num}</span>
                <div className={s.valueLine} />
                <h3 className={s.valueName}>{v.name}</h3>
                <p className={s.valueDesc}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <OurStoryCTA />

      <Footer />
    </>
  )
}
