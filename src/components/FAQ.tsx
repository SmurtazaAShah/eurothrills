'use client'
import { useState } from 'react'

function PlusIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
    </svg>
  )
}

const faqs = [
  {
    q: "What's included in the trip price?",
    a: "Everything except your flights. The price covers 7–9 nights in a hand-picked character hotel, all breakfasts and most dinners, lift passes or cycling support van, airport transfers in-country, your UIAGM-certified guide for the full trip, and a pre-trip planning call. Ski or cycling equipment rental is available at cost — we can arrange it in advance so it's waiting for you.",
  },
  {
    q: "What fitness level do I need?",
    a: "Each trip lists an honest ability level: Moderate, Intermediate, or Advanced. For skiing, Intermediate means comfortable on blue/red runs at a US resort. Advanced means you're looking for off-piste. For cycling, we list estimated daily elevation and distance. Your trip advisor will discuss your fitness on the planning call and will tell you straight if a trip isn't the right match.",
  },
  {
    q: "How many guests per departure?",
    a: "Between 12 and 20, always. We cap every departure at 20. This isn't a sliding-scale policy — it's structural. Our logistics, guides, and hotels are built for small groups. We don't run the same week with 8 one trip and 28 the next.",
  },
  {
    q: "Can I join as a solo traveler?",
    a: "Yes, and it's more common than you'd think. Many guests join solo and leave with people they've skied or ridden with for a week. Solo travelers pay the same per-person price. We can request single rooms at most properties — ask on your inquiry form.",
  },
  {
    q: "Can you run a private trip for my group?",
    a: "Yes. Private departures are available for groups of 6–20. Same destinations, same character hotels, your dates. Private pricing carries a 25–40% premium over Signature group pricing. We can also design fully custom itineraries — different route, different pacing, different hotels — for groups that want something built from scratch.",
  },
  {
    q: "What happens if bad weather ruins a day?",
    a: "Weather is part of the Alps. Your guide will adapt the plan: an alternative valley, a rest day in a village, a different route. If an entire trip is cancelled due to weather or safety (e.g., avalanche closure), you receive a full refund or free rescheduling — your choice. We don't issue credit notes.",
  },
  {
    q: "We usually ski in the US. Why would we go to Europe?",
    a: "The terrain, the food, the cost, and the atmosphere. European ski resorts are not owned by two or three corporations — every mountain restaurant is run by a family with different ingredients and a different menu. Lift tickets are cheaper. The Alps have altitude without the altitude sickness most guests experience in Colorado. And Verbier is simply a different category of skiing from anything in North America.",
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section style={{ background: 'var(--et-paper)', borderTop: '1px solid var(--et-line)' }} id="faq">
      <div className="container">
        <div className="faq-grid">
          {/* Sticky sidebar */}
          <div className="faq-side">
            <p className="section-eyebrow">Before you book</p>
            <h2 className="section-title">
              Everything you need to <em>know</em>
            </h2>
            <p className="section-sub">
              Still have questions? Our team replies within 24 hours on weekdays.
            </p>
            <div style={{ marginTop: 28, display: 'flex', gap: 12 }}>
              <a href="/inquire" className="btn btn-primary">
                Inquire now
              </a>
              <a href="mailto:hello@eurothrills.com" className="btn btn-outline">
                Email us
              </a>
            </div>
          </div>

          {/* Accordion */}
          <div className="faq-list">
            {faqs.map((faq, i) => (
              <div key={i} className={`faq-item${open === i ? ' open' : ''}`}>
                <button className="faq-q" onClick={() => setOpen(open === i ? null : i)}>
                  {faq.q}
                  <span className="ic">
                    <PlusIcon />
                  </span>
                </button>
                <div className="faq-a">
                  <div>
                    <p>{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
