import Link from 'next/link'
import UtilityBar from '@/components/UtilityBar'
import Nav from '@/components/Nav'
import Press from '@/components/Press'
import Experiences from '@/components/Experiences'
import Activities from '@/components/Activities'
import Destinations from '@/components/Destinations'
import WhyUs from '@/components/WhyUs'
import HowItWorks from '@/components/HowItWorks'
import Stats from '@/components/Stats'
import Testimonials from '@/components/Testimonials'
import Comparison from '@/components/Comparison'
import Journal from '@/components/Journal'
import FAQ from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <>
      <UtilityBar />
      <Nav />

      {/* Hero */}
      <section className="bhero" id="home">
        <div className="bhero-bg" aria-hidden="true" />
        <div className="bhero-wrap">
          <div className="bhero-center">
            <span className="eyebrow">
              <span className="dot" aria-hidden="true" />
              Winter 2026 open — Verbier, Zermatt &amp; Val d&apos;Isère
            </span>
            <h1 className="bhero-title">
              <span className="line1">Seven days in the Alps.</span>
              <span className="strong">Your guide </span>
              <em>is already there.</em>
            </h1>
            <div className="bhero-ctas">
              <Link href="/winter-skiing" className="bhero-btn primary">
                Browse ski trips
                <span className="arrow" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
              <Link href="/how-it-works" className="bhero-btn glass">
                <span className="play" aria-hidden="true">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </span>
                How it works
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Press />
      <Experiences />
      <Activities />
      <Destinations />
      <WhyUs />
      <Stats />
      <HowItWorks />
      <Testimonials />
      <Comparison />
      <Journal />
      <FAQ />
      <FinalCTA />
      <Footer />
    </>
  )
}
