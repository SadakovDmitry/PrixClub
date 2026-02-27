import type { Metadata } from 'next'
import Script from 'next/script'
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
        <Script id="yandex-metrika" strategy="afterInteractive">
          {`
            (function(m,e,t,r,i,k,a){
                m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();
                for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
            })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=107041286', 'ym');

            ym(107041286, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", referrer: document.referrer, url: location.href, accurateTrackBounce:true, trackLinks:true});
          `}
        </Script>
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/107041286"
              style={{ position: 'absolute', left: '-9999px' }}
              alt=""
            />
          </div>
        </noscript>
        {children}
      </body>
    </html>
  )
}
