import type { Metadata } from 'next'
import UtilityBar from '@/components/UtilityBar'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import SkiTripsSection from '@/components/SkiTripsSection'
import s from './styles.module.css'

export const metadata: Metadata = {
  title: 'Winter Skiing',
  description: "Expert-guided ski weeks in Verbier, Zermatt, Val d'Isère, Chamonix and St. Anton. Small groups, named guides, character hotels.",
}

export default function WinterSkiingPage() {
  return (
    <>
      <UtilityBar />
      <Nav />

      <section className={s.hero}>
        <div className={s.heroBg} aria-hidden="true" />
        <div className={s.heroOverlay} aria-hidden="true" />
        <div className={`container ${s.heroContent}`}>
          <p className={s.eyebrow}>Winter 2026–27 Season</p>
          <h1 className={s.heroTitle}>
            Ski the<br />
            <em>European Alps</em>
          </h1>
          <p className={s.heroSub}>
            Expert-guided ski weeks in Verbier, Zermatt, Val d&apos;Isère,
            Chamonix and St. Anton.
          </p>
        </div>
      </section>

      <SkiTripsSection />

      <Footer />
    </>
  )
}
