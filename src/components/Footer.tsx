import Image from 'next/image'

function XIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.857L1.258 2.25h6.907l4.297 5.679zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  )
}
function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  )
}
function YoutubeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/>
    </svg>
  )
}

const cols = [
  {
    heading: 'Winter Skiing',
    links: ['Verbier Classic Week', 'Zermatt Ski & Glacier', "Val d'Isère Powder Week", 'St. Anton Off-Piste', 'Cortina d\'Ampezzo', 'Two-Resort Traverse', 'The Haute Route Lite'],
  },
  {
    heading: 'Summer Cycling',
    links: ['Dolomites Road Classic', 'Engadin Gravel Adventure', 'French Alps Climbs', 'Tour de France Stages', 'Slovenia Hidden Gem', 'Austrian Tyrol', 'Gravel + Wine Trip'],
  },
  {
    heading: 'Company',
    links: ['About EuroThrills', 'Our Story', 'Our Guides', 'Journal', 'Press & Media', 'Careers', 'Gift Cards'],
  },
  {
    heading: 'Support',
    links: ['How It Works', 'Inquire', 'Private Group Trips', 'Cancellation Policy', 'What\'s Included', 'Contact Us', 'Partnerships'],
  },
]

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="ft-grid">
          {/* Brand column */}
          <div>
            <div className="ft-brand">
              <Image src="/logo-mark.png" alt="" width={28} height={28} style={{ filter: 'brightness(0) invert(1)' }} />
              <span className="brand-word">
                <span className="r" style={{ color: '#E1251B' }}>EURO</span>
                <span className="b" style={{ color: '#fff' }}>THRILLS</span>
              </span>
            </div>
            <p className="ft-tag">
              Alpine skiing in winter. Road and gravel cycling in summer. Small groups, named guides, character hotels.
            </p>
            <div className="ft-social">
              <a href="https://twitter.com" aria-label="X / Twitter"><XIcon /></a>
              <a href="https://instagram.com" aria-label="Instagram"><InstagramIcon /></a>
              <a href="https://youtube.com" aria-label="YouTube"><YoutubeIcon /></a>
            </div>
          </div>

          {/* Link columns */}
          {cols.map((col) => (
            <div key={col.heading} className="ft-col">
              <h4>{col.heading}</h4>
              <ul>
                {col.links.map((link) => (
                  <li key={link}><a href="#">{link}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="ft-bot">
          <span>© 2026 EuroThrills LLC. All rights reserved.</span>
          <div className="ft-bot-links">
            <a href="#">Privacy policy</a>
            <a href="#">Terms of service</a>
            <a href="#">Cookie settings</a>
            <a href="#">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
