'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useInquire } from './InquireProvider'

const navLinks = [
  { href: '/winter-skiing', label: 'Winter Skiing', dropdown: true },
  { href: '/summer-cycling', label: 'Summer Cycling', dropdown: true },
  { href: '/how-it-works', label: 'How it works' },
  { href: '/our-story', label: 'Our story' },
  { href: '/journal', label: 'Journal' },
]

function ChevronDown() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.55 }}>
      <path d="M6 9l6 6 6-6" />
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

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { openInquire } = useInquire()

  return (
    <header className="hdr" role="banner">
      <div className="hdr-inner">
        <Link href="/" className="brand" aria-label="EuroThrills home">
          <Image src="/logo-mark.png" alt="" width={28} height={28} className="brand-logo" />
          <span className="brand-word">
            <span className="r">EURO</span><span className="b">THRILLS</span>
          </span>
        </Link>

        <nav className="nav" aria-label="Primary">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="nav-link">
              {link.label}
              {link.dropdown && <ChevronDown />}
            </Link>
          ))}
        </nav>

        <div className="hdr-right">
          <Link href="/signin" className="btn btn-ghost">Sign in</Link>
          <button className="btn btn-primary" onClick={openInquire}>
            Inquire now <ArrowRight />
          </button>
        </div>

        <button
          className="btn btn-ghost"
          style={{ display: 'none' }}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 12h18M3 6h18M3 18h18" />
          </svg>
        </button>
      </div>
    </header>
  )
}
