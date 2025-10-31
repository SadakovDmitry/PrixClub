import type { Metadata } from 'next'
import './globals.css'
import { geometria } from '../src/fonts/geometria'

export const metadata: Metadata = {
  metadataBase: new URL('https://prixclub.example'),
  title: {
    default: 'PRIX Club — Digital-агентство',
    template: '%s | PRIX Club',
  },
  description: 'Digital-агентство полного цикла: реклама, PR, разработка сайтов.',
  openGraph: {
    title: 'PRIX Club',
    description: 'Digital-агентство полного цикла',
    type: 'website',
    url: '/',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`bg-bg text-white ${geometria.className}`}>
      <body className="min-h-screen bg-bg selection:bg-brand/30 selection:text-white">
        {children}
      </body>
    </html>
  )
}
