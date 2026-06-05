'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useInquire } from './InquireProvider'
import s from '@/app/winter-skiing/styles.module.css'

interface Trip {
  id: number
  title: string
  location: string
  region: 'Switzerland' | 'France' | 'Austria' | 'Italy'
  level: string
  style: 'On-piste' | 'Off-piste' | 'Touring'
  nights: number
  color: string
  description: string
  href?: string
}

const trips: Trip[] = [
  {
    id: 1,
    title: 'Verbier Classic Ski Week',
    location: 'Verbier, Switzerland',
    region: 'Switzerland',
    level: 'Advanced',
    style: 'Off-piste',
    nights: 7,
    color: '#162D72',
    description: "Access the 4 Vallées from a ski-in/ski-out chalet with a guide who's skied here for twelve winters.",
    href: '/winter-skiing/verbier',
  },
  {
    id: 2,
    title: 'Zermatt Ski & Glacier',
    location: 'Zermatt, Switzerland',
    region: 'Switzerland',
    level: 'Intermediate–Adv',
    style: 'On-piste',
    nights: 7,
    color: '#1a2840',
    description: 'Ski under the Matterhorn with a UIAGM-certified guide. Summer glacier access extends the season to May.',
  },
  {
    id: 3,
    title: "Val d'Isère & Tignes Powder Week",
    location: "Val d'Isère, France",
    region: 'France',
    level: 'Expert',
    style: 'Off-piste',
    nights: 7,
    color: '#1e2d45',
    description: "Espace Killy's 300km of piste and world-class off-piste terrain, led by a French National Ski School guide.",
  },
  {
    id: 4,
    title: 'Chamonix Freeride Week',
    location: 'Chamonix, France',
    region: 'France',
    level: 'Expert',
    style: 'Off-piste',
    nights: 6,
    color: '#111827',
    description: 'The Vallée Blanche, Grand Couloir, and Aiguille du Midi. For skiers who know what those names mean.',
  },
  {
    id: 5,
    title: 'St. Anton & Arlberg Classic',
    location: 'St. Anton, Austria',
    region: 'Austria',
    level: 'Advanced',
    style: 'Off-piste',
    nights: 7,
    color: '#1a2a1e',
    description: "The birthplace of Alpine skiing. 305km of marked runs and some of Europe's best off-piste terrain.",
  },
  {
    id: 6,
    title: "Cortina d'Ampezzo",
    location: 'Cortina, Italy',
    region: 'Italy',
    level: 'Intermediate',
    style: 'On-piste',
    nights: 5,
    color: '#2a1f18',
    description: "The Dolomites' most glamorous resort. Stunning scenery, excellent food, and 140km of varied terrain.",
  },
]

const regions = ['All', 'Switzerland', 'France', 'Austria', 'Italy'] as const
const levels  = ['All', 'Intermediate', 'Advanced', 'Expert'] as const
const styles  = ['All', 'On-piste', 'Off-piste', 'Touring'] as const

function MoonIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z" />
    </svg>
  )
}

function MountainIcon() {
  return (
    <svg width="72" height="72" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3 20 L9 8 L13 13 L16 7 L21 20 Z" />
      <path d="M14.5 7.5 L16 7 L17.5 7.5" fill="none" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
    </svg>
  )
}

function levelColor(level: string): string {
  if (level.startsWith('Expert'))       return '#E1251B'
  if (level.startsWith('Advanced'))     return '#1E40A8'
  if (level.startsWith('Intermediate')) return '#2F5C3A'
  return '#888888'
}

function levelBg(level: string): string {
  if (level.startsWith('Expert'))       return '#FCE5E3'
  if (level.startsWith('Advanced'))     return '#dce7ff'
  if (level.startsWith('Intermediate')) return '#E3EEDE'
  return '#EDF1F8'
}

export default function SkiTripsSection() {
  const { openInquire } = useInquire()
  const [region, setRegion] = useState<string>('All')
  const [level,  setLevel]  = useState<string>('All')
  const [style,  setStyle]  = useState<string>('All')

  const visible = trips.filter(t => {
    if (region !== 'All' && t.region !== region) return false
    if (style  !== 'All' && t.style  !== style)  return false
    if (level  !== 'All' && !t.level.toLowerCase().includes(level.toLowerCase())) return false
    return true
  })

  function filterBtn(active: boolean, onClick: () => void, label: string) {
    return (
      <button
        key={label}
        className={`${s.filterBtn}${active ? ` ${s.filterBtnActive}` : ''}`}
        onClick={onClick}
      >
        {label}
      </button>
    )
  }

  return (
    <>
      {/* Filter bar */}
      <div className={s.filters}>
        <div className="container">
          <div className={s.filterInner}>
            <div className={s.filterGroup}>
              <span className={s.filterLabel}>Region</span>
              {regions.map(r => filterBtn(region === r, () => setRegion(r), r))}
            </div>
            <div className={s.filterGroup}>
              <span className={s.filterLabel}>Level</span>
              {levels.map(l => filterBtn(level === l, () => setLevel(l), l))}
            </div>
            <div className={s.filterGroup}>
              <span className={s.filterLabel}>Style</span>
              {styles.map(st => filterBtn(style === st, () => setStyle(st), st))}
            </div>
          </div>
        </div>
      </div>

      {/* Trip grid */}
      <div className={s.gridSection}>
        <div className="container">
          {visible.length === 0 ? (
            <div className={s.emptyState}>
              <p>No trips match those filters.</p>
              <button
                className="btn btn-outline"
                onClick={() => { setRegion('All'); setLevel('All'); setStyle('All') }}
              >
                Clear filters
              </button>
            </div>
          ) : (
            <>
              <p className={s.tripCount}>{visible.length} {visible.length === 1 ? 'trip' : 'trips'}</p>
              <div className={s.tripsGrid}>
                {visible.map(trip => (
                  <div key={trip.id} className="xp-card">
                    <div className={s.thumb} style={{ background: trip.color }}>
                      <div className={s.thumbIcon}>
                        <MountainIcon />
                      </div>
                      <span className="xp-tag dark" style={{ fontSize: 11, background: 'rgba(0,0,0,.55)' }}>
                        {trip.location}
                      </span>
                      <span
                        className="xp-tag"
                        style={{ fontSize: 11, background: levelBg(trip.level), color: levelColor(trip.level) }}
                      >
                        {trip.level}
                      </span>
                    </div>

                    <div className="xp-body">
                      <h3 className="xp-title">{trip.title}</h3>
                      {trip.href && (
                        <Link href={trip.href} className={s.viewDest}>
                          View destination →
                        </Link>
                      )}
                      <p className="xp-desc">{trip.description}</p>
                      <div className={s.cardFoot}>
                        <span className={s.duration}>
                          <MoonIcon />
                          {trip.nights} nights
                        </span>
                        <button className="btn btn-primary" onClick={openInquire}>
                          Inquire
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  )
}
