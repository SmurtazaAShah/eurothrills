import Link from 'next/link'

function StarIcon() {
  return (
    <svg className="star" width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}

function ArrowRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  )
}

const trips = [
  {
    img: 'img-alpine',
    tag: 'Skiing',
    hot: true,
    grade: 'Intermediate–Adv.',
    location: 'Verbier, Switzerland',
    duration: '7 nights',
    title: 'Verbier Classic Ski Week',
    desc: "Access the 4 Vallées from a ski-in/ski-out chalet hotel with a guide who's skied here for twelve winters.",
    price: '9,800',
    rating: '4.9',
    reviews: '28 guests',
  },
  {
    img: 'img-zermatt',
    tag: 'Skiing',
    hot: false,
    grade: 'All Levels',
    location: 'Zermatt, Switzerland',
    duration: '7 nights',
    title: 'Zermatt Ski & Glacier',
    desc: 'Ski under the Matterhorn with a UIAGM-certified guide. Summer glacier access extends the season to May.',
    price: '11,200',
    rating: '5.0',
    reviews: '19 guests',
  },
  {
    img: 'img-chamonix',
    tag: 'Skiing',
    hot: false,
    grade: 'Advanced',
    location: "Val d'Isère, France",
    duration: '7 nights',
    title: "Val d'Isère & Tignes Powder Week",
    desc: "Espace Killy's 300km of piste and world-class off-piste terrain, led by a French National Ski School guide.",
    price: '9,400',
    rating: '4.9',
    reviews: '22 guests',
  },
  {
    img: 'img-cycling-dolomites',
    tag: 'Road Cycling',
    hot: false,
    grade: 'Intermediate',
    location: 'The Dolomites, Italy',
    duration: '7 nights',
    title: 'Dolomites Road Cycling Classic',
    desc: 'The Sella Ronda. The Passo Gardena. The Falzarego. Support van follows. Your luggage meets you at the next hotel.',
    price: '8,500',
    rating: '4.9',
    reviews: '31 guests',
  },
  {
    img: 'img-cycling-engadin',
    tag: 'Gravel Cycling',
    hot: false,
    grade: 'Moderate',
    location: 'Engadin Valley, Switzerland',
    duration: '8 nights',
    title: 'Engadin Valley Gravel Adventure',
    desc: 'High alpine passes, minimal traffic, and 2,000-year-old Roman roads. Part road, part gravel, all extraordinary.',
    price: '9,200',
    rating: '4.9',
    reviews: '17 guests',
  },
  {
    img: 'img-cycling-french',
    tag: 'Road Cycling',
    hot: true,
    grade: 'Advanced',
    location: 'French Alps, France',
    duration: '8 nights',
    title: 'French Alps — Tour de France Climbs',
    desc: "Alpe d'Huez. Col du Galibier. Col de la Croix de Fer. Three legendary climbs in eight days, plus a live Tour stage.",
    price: '9,800',
    rating: '5.0',
    reviews: '12 guests',
  },
]

export default function Experiences() {
  return (
    <section id="trips">
      <div className="container">
        <div className="section-head">
          <div className="section-head-left">
            <p className="section-eyebrow">Ski weeks and cycling tours</p>
            <h2 className="section-title">
              Featured <em>trips</em>
            </h2>
            <p className="section-sub">
              Every itinerary is built, not picked from a brochure. Small groups, named guides, character hotels.
            </p>
          </div>
          <div className="section-head-right">
            <Link href="/winter-skiing" className="btn btn-outline">
              All trips <ArrowRight />
            </Link>
          </div>
        </div>

        <div className="xp-grid">
          {trips.map((trip) => (
            <article key={trip.title} className="xp-card">
              <div className={`xp-img ${trip.img}`}>
                <div className="xp-img-top">
                  <span className={`xp-tag${trip.hot ? ' hot' : ''}`}>{trip.tag}</span>
                  <span className="xp-tag grade">{trip.grade}</span>
                </div>
                <div className="xp-img-bot">
                  <span className="xp-tag dark">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    {trip.location}
                  </span>
                  <span className="xp-tag dark">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                    {trip.duration}
                  </span>
                </div>
              </div>
              <div className="xp-body">
                <h3 className="xp-title">{trip.title}</h3>
                <p className="xp-desc">{trip.desc}</p>
                <div className="xp-foot">
                  <div className="xp-price">
                    <span className="from">from</span>
                    <span className="amt">${trip.price}</span>
                    <span className="per">/ person</span>
                  </div>
                  <div className="xp-rating">
                    <StarIcon />
                    <strong>{trip.rating}</strong>
                    <span className="count">({trip.reviews})</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
