import type { Metadata } from 'next'
import UtilityBar from '@/components/UtilityBar'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CyclingTripsSection from '@/components/CyclingTripsSection'
import s from './styles.module.css'

export const metadata: Metadata = {
  title: 'Summer Cycling',
  description: "Guided road and gravel cycling across the iconic cols of the Tour de France, Giro d'Italia, and Vuelta routes.",
}

export default function SummerCyclingPage() {
  return (
    <>
      <UtilityBar />
      <Nav />

      <section className={s.hero}>
        <div className={s.heroBg} aria-hidden="true" />
        <div className={s.heroOverlay} aria-hidden="true" />
        <div className={`container ${s.heroContent}`}>
          <p className={s.eyebrow}>Summer 2027 Season</p>
          <h1 className={s.heroTitle}>
            Cycle the<br />
            <em>Alpine Passes</em>
          </h1>
          <p className={s.heroSub}>
            Guided road and gravel cycling across the iconic cols of the
            Tour de France, Giro d&apos;Italia, and Vuelta routes.
          </p>
        </div>
      </section>

      <CyclingTripsSection />

      <Footer />
    </>
  )
}
