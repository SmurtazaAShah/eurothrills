import type { Metadata } from 'next'
import './globals.css'
import InquireProvider from '@/components/InquireProvider'

export const metadata: Metadata = {
  title: {
    default: "EuroThrills — Europe's most thrilling experiences, curated.",
    template: '%s | EuroThrills',
  },
  description: 'Hand-vetted adventure experiences across 47 European destinations. Skiing, cycling, paragliding and more.',
  icons: {
    icon: '/logo-mark.png',
    apple: '/logo-mark.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Instrument+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <InquireProvider>
          {children}
        </InquireProvider>
        {/* Botpress webchat */}
        <script src="https://cdn.botpress.cloud/webchat/v3.6/inject.js"></script>
        <script src="https://files.bpcontent.cloud/2026/06/05/02/20260605025003-84UMJWH0.js" defer></script>
      </body>
    </html>
  )
}
