const steps = [
  {
    num: '01',
    title: 'Inquire',
    body: 'Submit a short form — season, destination, dates, group size. A human responds within 24 hours. Not a bot. Not a template.',
  },
  {
    num: '02',
    title: 'Plan together',
    body: 'A discovery call with the advisor who runs your trip. An itinerary draft. A refinement. Your bags, your fitness, your preferences — all of it accounted for.',
  },
  {
    num: '03',
    title: 'Fly and show up',
    body: 'Your guide meets you at the airport or hotel. Every transfer, every booking, every kit rental — handled before you land.',
  },
  {
    num: '04',
    title: 'Ski or ride',
    body: 'Seven days in the Alps. Your guide sets the pace, reads the conditions, and knows the mountain. You just ski or ride.',
  },
]

export default function HowItWorks() {
  return (
    <section className="how-bg" id="how-it-works">
      <div className="container">
        <p className="section-eyebrow">Simple, from inquiry to summit</p>
        <h2 className="section-title">
          How a trip <em>works</em>
        </h2>
        <p className="section-sub">
          From your first email to the last day in the Alps — here&apos;s what the process looks like.
        </p>

        <div className="how-grid">
          {steps.map((s) => (
            <div key={s.num} className="how-step">
              <span className="how-num">{s.num}</span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
