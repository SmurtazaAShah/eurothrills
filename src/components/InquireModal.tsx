'use client'
import { useState, useTransition, useEffect } from 'react'
import { supabase } from '@/lib/supabase'

interface Props {
  isOpen: boolean
  onClose: () => void
}

const blank = {
  name: '',
  email: '',
  phone: '',
  interest: '',
  destination: '',
  travel_dates: '',
  group_size: '',
  message: '',
}

function XIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

export default function InquireModal({ isOpen, onClose }: Props) {
  const [form, setForm] = useState(blank)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isPending, startTransition] = useTransition()

  useEffect(() => {
    if (!isOpen) return
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [isOpen, onClose])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  if (!isOpen) return null

  function set(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    startTransition(async () => {
      const { error: dbError } = await supabase.from('inquiries').insert([{
        name: form.name,
        email: form.email,
        phone: form.phone || null,
        interest: form.interest,
        destination: form.destination || null,
        travel_dates: form.travel_dates || null,
        group_size: form.group_size || null,
        message: form.message || null,
      }])
      if (dbError) {
        setError('Something went wrong. Please email us at hello@eurothrills.com')
      } else {
        setSubmitted(true)
        setForm(blank)
      }
    })
  }

  function handleClose() {
    setSubmitted(false)
    setError(null)
    onClose()
  }

  return (
    <div
      className="modal-overlay"
      onClick={(e) => { if (e.target === e.currentTarget) handleClose() }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="inquire-title"
    >
      <div className="modal-panel">
        {submitted ? (
          <div className="modal-success">
            <div className="modal-success-icon">
              <CheckIcon />
            </div>
            <h3>We&apos;ll be in touch</h3>
            <p>
              Your inquiry has been received. We typically reply within 24 hours on weekdays.
            </p>
            <button className="btn btn-primary" onClick={handleClose}>Done</button>
          </div>
        ) : (
          <>
            <div className="modal-header">
              <div>
                <p className="section-eyebrow" style={{ marginBottom: 6 }}>Let&apos;s plan your trip</p>
                <h2 id="inquire-title" className="modal-title">Inquire now</h2>
              </div>
              <button className="modal-close" onClick={handleClose} aria-label="Close dialog">
                <XIcon />
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="modal-body">
                <div className="form-row">
                  <div className="form-field">
                    <label className="form-label" htmlFor="inq-name">
                      Full name<span className="req">*</span>
                    </label>
                    <input
                      id="inq-name" name="name" type="text" required
                      className="form-input" placeholder="Jane Smith"
                      value={form.name} onChange={set}
                    />
                  </div>
                  <div className="form-field">
                    <label className="form-label" htmlFor="inq-email">
                      Email<span className="req">*</span>
                    </label>
                    <input
                      id="inq-email" name="email" type="email" required
                      className="form-input" placeholder="jane@example.com"
                      value={form.email} onChange={set}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-field">
                    <label className="form-label" htmlFor="inq-phone">
                      Phone <span className="opt">(optional)</span>
                    </label>
                    <input
                      id="inq-phone" name="phone" type="tel"
                      className="form-input" placeholder="+1 555 000 0000"
                      value={form.phone} onChange={set}
                    />
                  </div>
                  <div className="form-field">
                    <label className="form-label" htmlFor="inq-interest">
                      Interested in<span className="req">*</span>
                    </label>
                    <select
                      id="inq-interest" name="interest" required
                      className="form-select"
                      value={form.interest} onChange={set}
                    >
                      <option value="">Select…</option>
                      <option value="ski">Winter skiing</option>
                      <option value="cycling">Summer cycling</option>
                      <option value="both">Both</option>
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-field">
                    <label className="form-label" htmlFor="inq-destination">
                      Destination <span className="opt">(optional)</span>
                    </label>
                    <input
                      id="inq-destination" name="destination" type="text"
                      className="form-input" placeholder="e.g. Verbier, Zermatt…"
                      value={form.destination} onChange={set}
                    />
                  </div>
                  <div className="form-field">
                    <label className="form-label" htmlFor="inq-dates">
                      Travel dates <span className="opt">(optional)</span>
                    </label>
                    <input
                      id="inq-dates" name="travel_dates" type="text"
                      className="form-input" placeholder="e.g. Jan 2027, flexible"
                      value={form.travel_dates} onChange={set}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-field">
                    <label className="form-label" htmlFor="inq-group">
                      Group size <span className="opt">(optional)</span>
                    </label>
                    <select
                      id="inq-group" name="group_size"
                      className="form-select"
                      value={form.group_size} onChange={set}
                    >
                      <option value="">Select…</option>
                      <option value="solo">Solo</option>
                      <option value="2">2 people</option>
                      <option value="3-4">3–4 people</option>
                      <option value="5-8">5–8 people</option>
                      <option value="9+">9+ people</option>
                    </select>
                  </div>
                </div>

                <div className="form-field">
                  <label className="form-label" htmlFor="inq-message">
                    Message <span className="opt">(optional)</span>
                  </label>
                  <textarea
                    id="inq-message" name="message"
                    className="form-textarea"
                    placeholder="Tell us about your trip goals, fitness level, or any special requests…"
                    value={form.message} onChange={set}
                  />
                </div>

                {error && <p className="form-error">{error}</p>}
              </div>

              <div className="modal-foot">
                <p className="modal-foot-note">We reply within 24 hours on weekdays.</p>
                <button type="submit" className="btn btn-primary btn-lg" disabled={isPending}>
                  {isPending ? 'Sending…' : 'Send inquiry'}
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
