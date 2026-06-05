'use client'
import { useState } from 'react'
import { useInquire } from './InquireProvider'
import s from '@/app/summer-cycling/styles.module.css'

interface Trip {
  id: number
  title: string
  location: string
  region: 'France' | 'Italy' | 'Switzerland' | 'Spain'
  level: string
  style: 'Road' | 'Gravel' | 'Mixed'
  nights: number
  color: string
  description: string
}

const trips: Trip[] = [
  {
    id: 1,
    title: 'Tour de France Cols',
    location: 'French Alps, France',
    region: 'France',
    level: 'Advanced',
    style: 'Road',
    nights: 7,
    color: '#1a3a28',
    description: "Ride Alpe d'Huez, Col du Galibier, and Col de la Croix de Fer. Fully supported with a guide van and mechanic.",
  },
  {
    id: 2,
    title: 'Giro d\'Italia Classics',
    location: 'Dolomites, Italy',
    region: 'Italy',
    level: 'Expert',
    style: 'Road',
    nights: 8,
    color: '#4a2818',
    description: 'Passo dello Stelvio, Passo di Gavia, and the Mortirolo. The hardest climbs in professional cycling.',
  },
  {
    id: 3,
    title: 'Swiss Alps Grand Tour',
    location: 'Swiss Alps, Switzerland',
    region: 'Switzerland',
    level: 'Advanced',
    style: 'Road',
    nights: 7,
    color: '#1a2f3a',
    description: 'Gotthard Pass, Furka Pass, and Grimsel Pass. Three of the most scenic cols in the Alps.',
  },
  {
    id: 4,
    title: 'Pyrenees Challenge',
    location: 'Pyrenees, Spain/France',
    region: 'Spain',
    level: 'Expert',
    style: 'Road',
    nights: 7,
    color: '#2a2218',
    description: "Col du Tourmalet, Luz Ardiden, and Hautacam. The climbs that define the Tour's mountain stages.",
  },
  {
    id: 5,
    title: 'Gravel Alps Explorer',
    location: 'Chamonix, France',
    region: 'France',
    level: 'Sportive',
    style: 'Gravel',
    nights: 6,
    color: '#1a3020',
    description: 'Off-road Alpine adventure on gravel bikes. Forest tracks, mountain passes, and high-altitude single trails.',
  },
  {
    id: 6,
    title: 'Ventoux & Provence',
    location: 'Provence, France',
    region: 'France',
    level: 'Advanced',
    style: 'Mixed',
    nights: 5,
    color: '#2a1a30',
    description: "Mont Ventoux from all three sides, plus the cols of the Luberon. Based in a Provençal village.",
  },
]

const regions = ['All', 'France', 'Italy', 'Switzerland', 'Spain'] as const
const levels  = ['All', 'Sportive', 'Advanced', 'Expert'] as const
const styles  = ['All', 'Road', 'Gravel', 'Mixed'] as const

function ClockIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}

function BikeIcon() {
  return (
    <svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.7" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="5.5" cy="17.5" r="3.5" />
      <circle cx="18.5" cy="17.5" r="3.5" />
      <path d="M15 6a1 1 0 0 0-1-1h-1l-5 8.5M15 6l1.5 4M15 6H9" />
      <path d="M12 6l-2 5.5h7.5" />
    </svg>
  )
}

function levelColor(level: string): string {
  if (level === 'Expert')   return '#E1251B'
  if (level === 'Advanced') return '#1E40A8'
  if (level === 'Sportive') return '#2F5C3A'
  return '#888888'
}

function levelBg(level: string): string {
  if (level === 'Expert')   return '#FCE5E3'
  if (level === 'Advanced') return '#dce7ff'
  if (level === 'Sportive') return '#E3EEDE'
  return '#EDF1F8'
}

export default function CyclingTripsSection() {
  const { openInquire } = useInquire()
  const [region, setRegion] = useState<string>('All')
  const [level,  setLevel]  = useState<string>('All')
  const [style,  setStyle]  = useState<string>('All')

  const visible = trips.filter(t => {
    if (region !== 'All' && t.region !== region) return false
    if (style  !== 'All' && t.style  !== style)  return false
    if (level  !== 'All' && t.level  !== level)  return false
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
                        <BikeIcon />
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
                      <p className="xp-desc">{trip.description}</p>
                      <div className={s.cardFoot}>
                        <span className={s.duration}>
                          <ClockIcon />
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
