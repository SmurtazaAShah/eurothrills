import type { Metadata } from 'next'
import Link from 'next/link'
import UtilityBar from '@/components/UtilityBar'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import s from './styles.module.css'

export const metadata: Metadata = {
  title: 'Journal',
  description: 'Trip reports, route guides, and honest advice from the Alps.',
}

function ImagePlaceholder() {
  return (
    <svg className={s.imgPlaceholderInner} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <path d="M21 15l-5-5L5 21" />
    </svg>
  )
}

const articles = [
  {
    category: 'Skiing',
    title: 'The best off-piste runs in Verbier that nobody talks about',
    excerpt: 'After twelve seasons guiding in the 4 Vallées, our advisor James shares the lines that don\'t appear on any piste map.',
    date: 'March 2026',
  },
  {
    category: 'Cycling',
    title: 'Climbing Alpe d\'Huez: what nobody tells first-timers',
    excerpt: 'The gradient, the crowds, the heat, and the 21 hairpins. A honest guide to cycling\'s most famous climb.',
    date: 'February 2026',
  },
  {
    category: 'Gear',
    title: 'The ski boot fitting guide we wish existed when we started',
    excerpt: 'A poorly fitted boot ruins every run. Here\'s exactly what to look for, and what to avoid.',
    date: 'January 2026',
  },
  {
    category: 'Cycling',
    title: 'Stelvio vs Gavia: which pass should you ride first?',
    excerpt: 'Two of Italy\'s greatest climbs, an hour apart. We\'ve guided both hundreds of times. Here\'s our honest comparison.',
    date: 'December 2025',
  },
  {
    category: 'Skiing',
    title: 'Why we always recommend arriving a day early',
    excerpt: 'Acclimatisation, equipment checks, and a quiet dinner before the week begins. The small things that make a big difference.',
    date: 'November 2025',
  },
  {
    category: 'Travel',
    title: 'How to pick the right Alpine resort for your group',
    excerpt: 'Verbier for experts, Zermatt for scenery, Val d\'Isère for intermediates who want to improve. The honest breakdown.',
    date: 'October 2025',
  },
]

export default function JournalPage() {
  return (
    <>
      <UtilityBar />
      <Nav />

      {/* Hero */}
      <section className={s.hero}>
        <div className="container">
          <p className={s.eyebrow}>Journal</p>
          <h1 className={s.heroTitle}>
            Notes from the <em>mountains</em>
          </h1>
          <p className={s.heroSub}>
            Trip reports, route guides, and honest advice from the Alps.
          </p>
        </div>
      </section>

      {/* Articles grid */}
      <section className={s.gridSection}>
        <div className="container">
          <div className={s.grid}>
            {articles.map((article) => (
              <article key={article.title} className={s.card}>
                <div className={s.imgPlaceholder}>
                  <ImagePlaceholder />
                </div>
                <div className={s.cardBody}>
                  <span className={s.badge}>{article.category}</span>
                  <h2 className={s.cardTitle}>{article.title}</h2>
                  <p className={s.cardExcerpt}>{article.excerpt}</p>
                  <div className={s.cardFoot}>
                    <span className={s.cardDate}>{article.date}</span>
                    <Link href="#" className={s.readMore}>Read more →</Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Email signup strip */}
      <section className={s.signup}>
        <div className="container">
          <div className={s.signupInner}>
            <h2 className={s.signupTitle}>Get notes from the mountains</h2>
            <p className={s.signupSub}>New routes, seasonal conditions, and trip ideas. No spam.</p>
            <div className={s.signupForm}>
              <input
                type="email"
                placeholder="Your email address"
                className={s.signupInput}
                aria-label="Email address"
              />
              <button type="button" className={s.signupBtn}>Subscribe</button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
