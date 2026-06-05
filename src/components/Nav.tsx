'use client'
import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useInquire } from './InquireProvider'
import s from './Nav.module.css'

/* ── Mega menu data ── */
type MegaItem = { label: string; sublabel?: string; param: string }
type MegaCol  = { label: string; items: MegaItem[] }
type MegaData = {
  cols: MegaCol[]
  featured: { badge: string; title: string; desc: string; href: string }
}

const megaMenus: Record<string, MegaData> = {
  '/winter-skiing': {
    cols: [
      {
        label: 'BY REGION',
        items: [
          { label: 'Verbier',     sublabel: 'Switzerland', param: 'region=verbier'    },
          { label: 'Zermatt',     sublabel: 'Switzerland', param: 'region=zermatt'    },
          { label: "Val d'Isère", sublabel: 'France',      param: 'region=val-disere' },
          { label: 'Chamonix',    sublabel: 'France',      param: 'region=chamonix'   },
          { label: 'St. Anton',   sublabel: 'Austria',     param: 'region=st-anton'   },
          { label: 'Cortina',     sublabel: 'Italy',       param: 'region=cortina'    },
        ],
      },
      {
        label: 'BY LEVEL',
        items: [
          { label: 'Intermediate', param: 'level=intermediate' },
          { label: 'Advanced',     param: 'level=advanced'     },
          { label: 'Expert',       param: 'level=expert'       },
        ],
      },
      {
        label: 'BY STYLE',
        items: [
          { label: 'On-piste',  param: 'style=on-piste'  },
          { label: 'Off-piste', param: 'style=off-piste' },
          { label: 'Touring',   param: 'style=touring'   },
        ],
      },
    ],
    featured: {
      badge: "EDITOR'S PICK",
      title: 'Verbier Freeride Week',
      desc:  'Seven days, four valleys, and the best off-piste terrain in the Alps. Our most requested winter trip.',
      href:  '/winter-skiing',
    },
  },
  '/summer-cycling': {
    cols: [
      {
        label: 'BY REGION',
        items: [
          { label: 'French Alps', param: 'region=french-alps'                        },
          { label: 'Dolomites',   sublabel: 'Italy',        param: 'region=dolomites' },
          { label: 'Swiss Alps',  param: 'region=swiss-alps'                         },
          { label: 'Pyrenees',    sublabel: 'Spain/France', param: 'region=pyrenees'  },
          { label: 'Provence',    sublabel: 'France',       param: 'region=provence'  },
        ],
      },
      {
        label: 'BY LEVEL',
        items: [
          { label: 'Sportive', param: 'level=sportive' },
          { label: 'Advanced', param: 'level=advanced' },
          { label: 'Expert',   param: 'level=expert'   },
        ],
      },
      {
        label: 'BY STYLE',
        items: [
          { label: 'Road',   param: 'style=road'   },
          { label: 'Gravel', param: 'style=gravel' },
          { label: 'Mixed',  param: 'style=mixed'  },
        ],
      },
    ],
    featured: {
      badge: "EDITOR'S PICK",
      title: 'Tour de France Cols',
      desc:  "Alpe d'Huez, Col du Galibier, and Col de la Croix de Fer. The iconic climbs, fully guided.",
      href:  '/summer-cycling',
    },
  },
}

const navLinks = [
  { href: '/winter-skiing',  label: 'Winter Skiing',  dropdown: true },
  { href: '/summer-cycling', label: 'Summer Cycling', dropdown: true },
  { href: '/how-it-works',   label: 'How it works'                   },
  { href: '/our-story',      label: 'Our story'                      },
  { href: '/journal',        label: 'Journal'                        },
]

function ChevronDown({ open }: { open: boolean }) {
  return (
    <svg
      width="11" height="11" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ opacity: 0.55, transition: 'transform 0.18s', transform: open ? 'rotate(180deg)' : 'none' }}
    >
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

function MenuIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 12h18M3 6h18M3 18h18" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  )
}

export default function Nav() {
  const [mobileOpen,     setMobileOpen]     = useState(false)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  const [openMega,       setOpenMega]       = useState<string | null>(null)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const { openInquire } = useInquire()

  /* Body scroll lock while mobile drawer is open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  /* Close mobile menu on resize to desktop */
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMobileOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  /* Desktop mega menu hover handlers */
  const clearPending = () => { if (closeTimer.current) clearTimeout(closeTimer.current) }
  const openMenu     = (href: string) => { clearPending(); setOpenMega(href) }
  const scheduleClose = () => {
    clearPending()
    closeTimer.current = setTimeout(() => setOpenMega(null), 120)
  }

  const closeMobile = () => { setMobileOpen(false); setMobileExpanded(null) }

  const activeMega = openMega ? megaMenus[openMega] : null

  return (
    <header className="hdr" role="banner" onMouseLeave={scheduleClose}>
      <div className="hdr-inner">
        <Link href="/" className="brand" aria-label="EuroThrills home" onClick={closeMobile}>
          <Image src="/logo-mark.png" alt="" width={28} height={28} className="brand-logo" />
          <span className="brand-word">
            <span className="r">EURO</span><span className="b">THRILLS</span>
          </span>
        </Link>

        {/* Desktop nav — hidden on mobile via CSS */}
        <nav className={`nav ${s.desktopNav}`} aria-label="Primary">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div key={link.href} className={s.navItem} onMouseEnter={() => openMenu(link.href)}>
                <Link
                  href={link.href}
                  className={`nav-link${openMega === link.href ? ` ${s.navLinkOpen}` : ''}`}
                >
                  {link.label}
                  <ChevronDown open={openMega === link.href} />
                </Link>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="nav-link"
                onMouseEnter={() => { clearPending(); setOpenMega(null) }}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* Desktop CTA buttons — hidden on mobile via CSS */}
        <div className={`hdr-right ${s.desktopRight}`}>
          <Link href="/signin" className="btn btn-ghost">Sign in</Link>
          <button className="btn btn-primary" onClick={openInquire}>
            Inquire now <ArrowRight />
          </button>
        </div>

        {/* Mobile: compact Inquire + hamburger — shown on mobile only */}
        <div className={s.mobileRight}>
          <button
            className="btn btn-primary"
            style={{ height: 36, padding: '0 14px', fontSize: 13 }}
            onClick={openInquire}
          >
            Inquire
          </button>
          <button
            className="btn btn-ghost"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* ── Desktop mega menu panel ── */}
      {openMega && activeMega && (
        <div
          className={s.panel}
          onMouseEnter={clearPending}
          onMouseLeave={scheduleClose}
          role="navigation"
          aria-label={`${openMega === '/winter-skiing' ? 'Winter Skiing' : 'Summer Cycling'} menu`}
        >
          <div className={s.panelInner}>
            <div className={s.cols}>
              {activeMega.cols.map((col) => (
                <div key={col.label} className={s.col}>
                  <p className={s.colLabel}>{col.label}</p>
                  <ul className={s.colList}>
                    {col.items.map((item) => (
                      <li key={item.label}>
                        <Link
                          href={`${openMega}?${item.param}`}
                          className={s.colLink}
                          onClick={() => setOpenMega(null)}
                        >
                          <span className={s.colLinkName}>{item.label}</span>
                          {item.sublabel && <span className={s.colLinkSub}>{item.sublabel}</span>}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className={s.divider} />
            <div className={s.featured}>
              <div className={s.featuredImg} />
              <span className={s.featuredBadge}>{activeMega.featured.badge}</span>
              <p className={s.featuredTitle}>{activeMega.featured.title}</p>
              <p className={s.featuredDesc}>{activeMega.featured.desc}</p>
              <Link
                href={activeMega.featured.href}
                className={s.featuredLink}
                onClick={() => setOpenMega(null)}
              >
                View trip →
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* ── Mobile drawer ── */}
      {mobileOpen && (
        <div className={s.drawer} aria-label="Mobile navigation">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div key={link.href}>
                {/* Row: page link + expand toggle */}
                <div className={s.drawerItem}>
                  <Link
                    href={link.href}
                    className={s.drawerMainLink}
                    onClick={closeMobile}
                  >
                    {link.label}
                  </Link>
                  <button
                    className={`${s.drawerToggle}${mobileExpanded === link.href ? ` ${s.drawerToggleOpen}` : ''}`}
                    onClick={() => setMobileExpanded((prev) => prev === link.href ? null : link.href)}
                    aria-expanded={mobileExpanded === link.href}
                    aria-label={`${link.label} filters`}
                  >
                    <ChevronDown open={mobileExpanded === link.href} />
                  </button>
                </div>

                {/* Accordion — filter links */}
                {mobileExpanded === link.href && (
                  <div className={s.accordion}>
                    {megaMenus[link.href].cols.map((col) => (
                      <div key={col.label} className={s.accordionGroup}>
                        <p className={s.accordionGroupLabel}>{col.label}</p>
                        <ul className={s.accordionList}>
                          {col.items.map((item) => (
                            <li key={item.label}>
                              <Link
                                href={`${link.href}?${item.param}`}
                                className={s.accordionLink}
                                onClick={closeMobile}
                              >
                                <span>{item.label}</span>
                                {item.sublabel && (
                                  <span className={s.accordionLinkSub}>{item.sublabel}</span>
                                )}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                    <div className={s.accordionViewAllWrap}>
                      <Link
                        href={link.href}
                        className={s.accordionViewAll}
                        onClick={closeMobile}
                      >
                        View all {link.label} trips →
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={s.drawerSimpleLink}
                onClick={closeMobile}
              >
                {link.label}
              </Link>
            )
          )}

          <div className={s.drawerFooter}>
            <button
              className={`btn btn-primary ${s.drawerInquireBtn}`}
              onClick={() => { closeMobile(); openInquire() }}
            >
              Inquire now <ArrowRight />
            </button>
            <Link href="/signin" className={s.drawerSignIn} onClick={closeMobile}>
              Sign in
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
