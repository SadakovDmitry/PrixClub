import type { Metadata } from 'next'
import '../globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://prixclub.example'),
  title: {
    default: 'PRIX Club — Digital-агентство',
    template: '%s | PRIX Club',
  },
  description: 'Digital-агентство полного цикла: реклама, PR, разработка сайтов.',
}

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  return (
    <html lang={locale} className="bg-bg text-white">
      <body className="min-h-screen bg-bg selection:bg-brand/30 selection:text-white">
        {children}
      </body>
    </html>
  )
}
