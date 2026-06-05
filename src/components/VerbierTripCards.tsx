'use client'
import { useInquire } from './InquireProvider'
import s from '@/app/winter-skiing/verbier/styles.module.css'

const trips = [
  {
    title:       'Verbier Classic Ski Week',
    nights:      7,
    level:       'Advanced',
    levelColor:  '#1E40A8',
    levelBg:     '#dce7ff',
    color:       '#162D72',
    description: "Access the 4 Vallées from a ski-in/ski-out chalet with a guide who's skied here for twelve winters.",
  },
  {
    title:       'Verbier Off-Piste Intensive',
    nights:      5,
    level:       'Expert',
    levelColor:  '#E1251B',
    levelBg:     '#FCE5E3',
    color:       '#1a3550',
    description: 'Five days focused entirely on off-piste technique and terrain. Small group, maximum 4 skiers.',
  },
]

function MountainIcon() {
  return (
    <svg width="72" height="72" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3 20 L9 8 L13 13 L16 7 L21 20 Z" />
      <path d="M14.5 7.5 L16 7 L17.5 7.5" fill="none" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z" />
    </svg>
  )
}

export default function VerbierTripCards() {
  const { openInquire } = useInquire()
  return (
    <div className={s.tripsGrid}>
      {trips.map((trip) => (
        <div key={trip.title} className="xp-card">
          <div className={s.tripThumb} style={{ background: trip.color }}>
            <div className={s.tripThumbIcon}>
              <MountainIcon />
            </div>
            <span
              className="xp-tag"
              style={{ fontSize: 11, background: trip.levelBg, color: trip.levelColor }}
            >
              {trip.level}
            </span>
          </div>
          <div className="xp-body">
            <h3 className="xp-title">{trip.title}</h3>
            <p className="xp-desc">{trip.description}</p>
            <div className={s.tripFoot}>
              <span className={s.tripNights}>
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
  )
}
