function StarFilled() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{ color: 'hsl(38 92% 52%)' }}>
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}

const testimonials = [
  {
    feature: false,
    rating: 5,
    quote: "I've skied Vail, Jackson, Whistler — all of it. The Verbier week with EuroThrills was the best guided ski trip of my life. The guide skied every off-piste line from memory. That's not something you get from a booking platform.",
    name: 'Marcus T.',
    meta: 'Verbier Classic Ski Week',
    initial: 'M',
  },
  {
    feature: true,
    rating: 5,
    quote: "EuroThrills didn't just book us a trip — they designed a week we'd been trying to plan for three years and couldn't. Verbier in the morning, Val d'Isère by Thursday. Our bags were at the next hotel before we finished lunch.",
    name: 'Sophie & Julien R.',
    meta: 'Two-Resort Traverse, Switzerland/France',
    initial: 'S',
  },
  {
    feature: false,
    rating: 5,
    quote: "The Dolomites cycling trip converted me. I thought I was a skier. Turns out I was a cyclist who hadn't found the right mountains yet. Already booked the ski week for January.",
    name: 'Anika H.',
    meta: 'Dolomites Road Cycling Classic',
    initial: 'A',
  },
]

export default function Testimonials() {
  return (
    <section style={{ background: 'var(--et-bg)' }} id="reviews">
      <div className="container">
        <div style={{ marginBottom: 48 }}>
          <p className="section-eyebrow">From our guests</p>
          <h2 className="section-title">
            What people say after <em>the trip</em>
          </h2>
          <p className="section-sub">
            Not at the brochure stage. After seven days on skis or a saddle in the Alps.
          </p>
        </div>
        <div className="tm-grid">
          {testimonials.map((t) => (
            <article key={t.name} className={`tm-card${t.feature ? ' feature' : ''}`}>
              <div className="tm-stars">
                {Array.from({ length: t.rating }).map((_, i) => <StarFilled key={i} />)}
              </div>
              <p className="tm-quote">&ldquo;{t.quote}&rdquo;</p>
              <div className="tm-foot">
                <div className="tm-avatar">{t.initial}</div>
                <div>
                  <div className="tm-name">{t.name}</div>
                  <div className="tm-meta">{t.meta}</div>
                  <div className="tm-source">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/></svg>
                    Verified post-trip review
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
