"use client"
import Image from 'next/image'
import { useMemo, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { geometria } from '../../src/fonts/geometria'

export default function Page() {
  const pathname = usePathname()
  const locale = pathname?.split('/')?.[1] === 'en' ? 'en' : 'ru'
  const msg = useMemo(() => ({
    ru: {
      nav: {
        main: 'Главная', about: 'О нас', team: 'Команда', works: 'Работы', services: 'Услуги', contacts: 'Контакты', news: 'НОВОСТИ', reviews: 'ОТЗЫВЫ'
      },
      hero: {
        title: 'Digital-агентство полного цикла',
        subtitle: 'Продвигаем бренды, создаём сайты и настраиваем рекламу, чтобы вы росли быстрее.',
        cta: 'Получить консультацию'
      },
      sections: { services: 'Наши услуги', clients: 'Наши клиенты', team: 'Команда' },
      footer: { contacts: 'Контакты', nav: 'Навигация', copy: '© PRIX Club, 2025' }
    },
    en: {
      nav: {
        main: 'Main Page', about: 'About Us', team: 'Team', works: 'Works', services: 'Services', contacts: 'Contacts', news: 'NEWS', reviews: 'REVIEWS'
      },
      hero: {
        title: 'Full-cycle digital agency',
        subtitle: 'We grow brands with websites, campaigns and measurable advertising.',
        cta: 'Get a consultation'
      },
      sections: { services: 'Our Services', clients: 'Our Clients', team: 'Team' },
      footer: { contacts: 'Contacts', nav: 'Navigation', copy: '© PRIX Club, 2025' }
    }
  })[locale], [locale])
  return (
    <>
      <Header msg={msg} locale={locale} />
      <main>
        <Hero msg={msg} locale={locale} />
        <Services msg={msg} locale={locale} />
        <Stats locale={locale} />
        {/* <Clients msg={msg} /> */}
        <Team msg={msg} locale={locale} />
      </main>
      <Footer msg={msg} />
    </>
  )
}

function Stats({ locale }: { locale: 'ru' | 'en' }) {
  const t = locale === 'en'
    ? {
      industries: 'Industries\nwe serve',
      realised: 'Realised\nprojects',
      years: 'Years of work',
      awards: 'Awards',
      clients: 'Major clients',
      list: ['NCF', 'DEVELOPMENT', 'MEDIA', 'MARKETING', 'INTERNATIONAL', 'TRADE'],
    }
    : {
      industries: 'Отрасли,\nс которыми работаем',
      realised: 'Реализованные\nпроекты',
      years: 'Лет работы',
      awards: 'Награды',
      clients: 'Ключевые клиенты',
      list: ['НКО', 'ДЕВЕЛОПМЕНТ', 'МЕДИА', 'МАРКЕТИНГ', 'МЕЖДУНАР.', 'ТОРГОВЛЯ'],
    }
  return (
    <section id="stats" className="relative">
      {/* Background image defines height; no cropping */}
      <div className="relative">
        <Image
          src="/images/up_background.svg"
          alt=""
          width={1920}
          height={1080}
          className="w-full h-auto select-none pointer-events-none [filter:saturate(1)_contrast(1)]"
          priority
        />
        {/* Green multiply overlay over entire block */}
        <div className="absolute inset-0" style={{ background: '#74AA9C', mixBlendMode: 'color', opacity: 0.75 }} />
        {/* Content overlays the image */}
        <div className="absolute inset-0">
          <div className={`container-max h-full py-8 md:py-14 ${geometria.className}`}>
            {/* Grid mimicking layout with explicit placement */}
            <div className="grid grid-cols-1 gap-5 md:grid-cols-12 md:auto-rows-[120px]">
              {/* Left small top card (empty decorative) - slightly narrower */}
              <div className="md:col-start-1 md:col-span-2 md:row-start-1 md:row-span-1 rounded-[14px] border border-white/20 bg-white/5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)]" />

              {/* Center big number card - typography per reference */}
              <div className={`md:col-start-3 md:col-span-4 md:row-start-1 md:row-span-3 rounded-[18px] border border-white/20 bg-white/5 p-8 flex flex-col`}>
                <div className="text-white/95 text-[72px] md:text-[88px] leading-none font-light">52</div>
                <div className="mt-auto text-white whitespace-pre-line text-[24px] md:text-[28px] font-light">{t.realised}</div>
              </div>

              {/* Right top: Years of work - number top-left, label bottom-left */}
              <div className={`md:col-start-7 md:col-span-4 md:row-start-1 md:row-span-2 rounded-[14px] border border-white/20 bg-white/5 p-6 flex flex-col`}>
                <div className="text-white/90 text-[72px] md:text-[88px] leading-none font-light">8</div>
                <div className="mt-auto text-white/80 text-[24px] md:text-[28px] font-light">{t.years}</div>
              </div>

              {/* Right top small decorative card - widened */}
              <div className="md:col-start-11 md:col-span-2 md:row-start-1 md:row-span-2 rounded-[14px] border border-white/20 bg-white/5" />

              {/* Left tall list card - uppercase list, label at bottom */}
              <div className="md:col-start-1 md:col-span-2 md:row-start-2 md:row-span-4 rounded-[18px] border border-white/20 bg-white/5 p-6 flex flex-col">
                <ul className="text-white/80 space-y-2 uppercase tracking-wide text-[15px] md:text-[16px] font-medium">
                  {t.list.map((x) => (
                    <li key={x} className="tracking-wide">{x}</li>
                  ))}
                </ul>
                <div className="mt-auto text-white/70 whitespace-pre-line text-[24px] md:text-[28px] font-light normal-case">{t.industries}</div>
              </div>

              {/* Right middle: Awards - label left, icons right */}
              <div className="md:col-start-7 md:col-span-6 md:row-start-3 md:row-span-1 rounded-[14px] border border-white/20 bg-white/5 p-6 flex items-center justify-between">
                <div className="text-white/85 text-[24px] md:text-[28px] font-light">{t.awards}</div>
                <div className="flex items-center gap-8 opacity-90">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <Image key={i} src="/images/awards_logo.svg" alt="award" width={72} height={44} className="opacity-85" />
                  ))}
                </div>
              </div>

              {/* Bottom wide: Major clients - big heart top-left, label bottom-left */}
              <div className="relative md:col-start-3 md:col-span-10 md:row-start-4 md:row-span-2 rounded-[14px] border border-white/20 bg-white/5 p-6 overflow-hidden">
                {/* Big heart icon in top-left (larger) */}
                <Image src="/images/Heart_icon.svg" alt="heart" width={120} height={120} className="absolute left-6 top-5 opacity-90" />

                {/* Client logos row (aligned to the right) */}
                <div className="h-full flex items-center justify-end gap-10 pr-2 opacity-90">
                  {['/images/tryangle_logo.svg', '/images/ФРСК_logo.svg', '/images/tryangle_logo.svg', '/images/ФРСК_logo.svg', '/images/tryangle_logo.svg'].map((p, i) => (
                    <Image key={i} src={p} alt="client" width={72} height={40} className="opacity-85" />
                  ))}
                </div>

                {/* Label in bottom-left */}
                <div className="absolute left-5 bottom-4 text-white/80 text-[24px] md:text-[28px] font-light">
                  {t.clients}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Header({ msg, locale }: { msg: any; locale: 'ru' | 'en' }) {
  return (
    <header className="sticky top-0 z-20 bg-black">
      <div className="container-max py-3">
        <div className="flex items-center gap-2">
          {/* Logo to the left, same height as the nav bar */}
          <Image
            src="/images/header_logo.svg"
            alt="PRIX Club"
            width={120}
            height={40}
            className="h-10 w-auto"
            priority
          />
          {/* Pill-shaped navigation bar */}
          <div className="flex-1 rounded-full border border-white/15 bg-black/40 px-4 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)] backdrop-blur">
            <div className={`flex h-10 items-center justify-between gap-4 ${geometria.className}`}>
              {/* Left aligned links */}
              <nav className="flex items-center gap-6 text-white/80 text-[13px]">
                <a href="#" className="font-semibold text-white hover:text-white">{msg.nav.main}</a>
                <a href="#about" className="hover:text-white">{msg.nav.about}</a>
                <a href="#team" className="hover:text-white">{msg.nav.team}</a>
                <a href="#works" className="hover:text-white">{msg.nav.works}</a>
                <a href="#services" className="hover:text-white">{msg.nav.services}</a>
                <a href="#contacts" className="hover:text-white">{msg.nav.contacts}</a>
              </nav>
              {/* Right aligned: NEWS, REVIEWS, language switch */}
              <div className="flex items-center gap-6 text-[13px]" >
                <a href="#news" className="tracking-wide text-white/80 hover:text-white">{msg.nav.news}</a>
                <a href="#reviews" className="tracking-wide text-white/80 hover:text-white">{msg.nav.reviews}</a>
                <LanguageSwitch />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

function LanguageSwitch() {
  const router = useRouter()
  const pathname = usePathname()
  const current = pathname?.split('/')?.[1] === 'en' ? 'en' : 'ru'
  const [isEN, setIsEN] = useState(current === 'en')
  return (
    <button
      type="button"
      aria-label="Language switch"
      onClick={() => {
        const nextLocale = isEN ? 'ru' : 'en'
        setIsEN(!isEN)
        // Build new path by replacing the first segment
        let newPath = pathname || '/'
        const segs = newPath.split('/').filter(Boolean)
        if (segs.length && (segs[0] === 'ru' || segs[0] === 'en')) {
          segs[0] = nextLocale
          newPath = '/' + segs.join('/')
        } else {
          newPath = '/' + nextLocale + (newPath.startsWith('/') ? newPath : '/' + newPath)
        }
        router.push(newPath)
      }}
      className={`relative inline-flex h-6 w-16 select-none items-center rounded-full border border-white/25 bg-black text-[11px] text-white/80 overflow-hidden ${geometria.className}`}
    >
      {/* Labels above the knob */}
      <span className={`pointer-events-none absolute inset-y-0 left-0 z-10 flex w-1/2 items-center justify-center ${isEN ? 'opacity-60' : 'text-white'}`}>RU</span>
      <span className={`pointer-events-none absolute inset-y-0 right-0 z-10 flex w-1/2 items-center justify-center ${isEN ? 'text-white' : 'opacity-60'}`}>EN</span>

      {/* Knob occupies exactly half and slides to edges */}
      <span
        className={`absolute inset-y-0 left-0 w-1/2 rounded-full border border-white/70 transition-transform duration-200 ease-out ${isEN ? 'translate-x-full' : 'translate-x-0'}`}
        style={{
          background: 'linear-gradient(135deg, var(--brand, #5FE1C5), var(--brand-dark, #1AA58A))',
          boxShadow: '0 0 0 1px rgba(255,255,255,0.08), 0 1px 2px rgba(0,0,0,0.4)'
        }}
      />
    </button>
  )
}

function Hero({ msg, locale }: { msg: any; locale: 'ru' | 'en' }) {
  const lines = {
    ru: [
      'Соединяем',
      'Информацию',
      'для роста бизнеса',
    ],
    en: [
      'Connecting',
      'Information',
      'to grow your business',
    ],
  }
  return (
    <section className="relative overflow-hidden bg-black">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={`container-max grid min-h-[680px] grid-cols-1 items-center gap-12 py-20 md:grid-cols-2 ${geometria.className}`}
      >
        <div>
          <h1 className="mb-16 text-7xl font-bold leading-tight md:text-8xl">
            PRIX Club
          </h1>
          <div className="space-y-1 text-3xl font-semibold md:text-4xl">
            <div className="text-white/90">{lines[locale][0]}</div>
            <div
              className="inline-block bg-clip-text text-transparent text-[54px] md:text-[48px] leading-[1.15] pb-[2px] md:pb-[3px]"
              style={{
                background: 'linear-gradient(89.26deg, #53897B 0.3%, #86BCAE 27.76%, #53897B 56.54%, #86BCAE 77.7%, #2E6456 99.68%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {lines[locale][1]}
            </div>
            <div className="text-white/90">{lines[locale][2]}</div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Image
            src="/images/main_logo.svg"
            alt="Main art"
            width={640}
            height={520}
            className="max-h-[520px] drop-shadow-[0_30px_60px_rgba(0,0,0,0.45)]"
            priority
          />
        </div>
      </motion.div>
    </section>
  )
}

function Services({ msg, locale }: { msg: any; locale: 'ru' | 'en' }) {
  const intro =
    locale === 'en'
      ? `PRIX Club is a reputation management agency that combines classic PR with IT tools to achieve our clients’ goals. We help businesses and government institutions build dialogue with their audiences in today’s digital world.`
      : `PRIX Club — агентство управления репутацией, которое сочетает классический PR с ИТ‑инструментами для достижения целей клиентов. Мы помогаем бизнесу и госорганизациям выстраивать диалог с аудиторией в цифровой среде.`
  const cards = [
    { key: 'pr', img: '/images/public_media_starateges_card.svg', title: locale === 'en' ? 'Public Relations\nstrategies' : 'Public Relations\nстратегии' },
    { key: 'gov', img: '/images/our_clients_background.png', title: locale === 'en' ? 'Government\nRelations' : 'Government\nRelations' },
    { key: 'it', img: '/images/The_Cabinet_table.svg', title: locale === 'en' ? 'IT solutions for\ncommunications' : 'IT‑решения для\nкоммуникаций' },
    { key: 'digital', img: '/images/digital_compagns.svg', title: locale === 'en' ? 'Digital\ncampaigns' : 'Digital\nкампании' },
  ]
  return (
    <section id="services" className="relative py-20 bg-white text-[#0a0a0a]">
      <div className="container-max">
        {/* Intro paragraph */}
        <p className="mx-auto mb-10 max-w-[820px] text-center text-[27px] leading-[34px] font-medium">
          <span
            className="inline-block bg-clip-text text-transparent"
            style={{
              background: 'linear-gradient(89.26deg, #53897B 0.3%, #86BCAE 27.76%, #53897B 56.54%, #86BCAE 77.7%, #2E6456 99.68%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            PRIX Club
          </span>
          {` `}{intro.replace(/^PRIX Club ?/, '')}
        </p>

        {/* Cards */}
        <div className="mx-auto grid max-w-[1120px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c) => (
            <div key={c.key} className="relative overflow-hidden rounded-[20px] bg-black" style={{ aspectRatio: '282/153' }}>
              <Image src={c.img} alt="" fill className="object-cover [filter:contrast(1.05)_saturate(0.9)]" />
              <div className="absolute inset-0" style={{ background: '#2E6456', mixBlendMode: 'multiply', opacity: 0.75 }} />
              <div className="absolute inset-0 grid place-items-center p-4">
                <div className="h-full w-full rounded-[14px] border border-white/20 relative overflow-hidden shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05),inset_0_0_0_2px_rgba(255,255,255,0.06)]" style={{ background: 'rgba(255,255,255,0.05)' }}>
                  <div
                    className="pointer-events-none absolute inset-0 rounded-[14px] mix-blend-screen"
                    style={{
                      background:
                        'radial-gradient(120% 120% at 50% 50%, rgba(255,255,255,0) 60%, rgba(255,255,255,0.08) 78%, rgba(255,255,255,0.12) 100%)'
                    }}
                  />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-0 grid place-items-center p-6">
                <div className={`text-center text-[27px] leading-[1.1] font-semibold text-white whitespace-pre-line ${geometria.className}`}>
                  {c.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// function Clients({ msg }: { msg: any }) {
//   return (
//     <section id="clients" className="section">
//       <div className="container-max relative z-[1]">
//         <h2 className="section-title">{msg.sections.clients}</h2>
//         <div className="grid grid-cols-2 gap-4 md:grid-cols-6">
//           {Array.from({ length: 6 }).map((_, i) => (
//             <div key={i} className="h-16 rounded-xl border border-white/10 bg-white/10" />
//           ))}
//         </div>
//       </div>
//       <Image src="/images/our_clients_background.png" alt="" fill className="-z-10 object-cover opacity-60" />
//     </section>
//   )
// }

function Team({ msg, locale }: { msg: any; locale: 'ru' | 'en' }) {
  const people = locale === 'en'
    ? [
      { name: 'Maria', role: 'Strategist' },
      { name: 'Alexey', role: 'Developer' },
      { name: 'Elena', role: 'Designer' },
      { name: 'Igor', role: 'Marketer' },
    ]
    : [
      { name: 'Мария', role: 'Стратег' },
      { name: 'Алексей', role: 'Разработчик' },
      { name: 'Елена', role: 'Дизайнер' },
      { name: 'Игорь', role: 'Маркетолог' },
    ]
  return (
    <section id="team" className="section bg-gradient-to-b from-[var(--bg-2)] to-bg">
      <Image src="/images/team_background.svg" alt="" fill className="-z-10 object-cover opacity-35" />
      <div className="container-max">
        <h2 className="section-title">{msg.sections.team}</h2>
        <div className="grid gap-5 md:grid-cols-4">
          {people.map((p) => (
            <div key={p.name} className="card text-center">
              <div className="mx-auto mb-3 h-24 w-24 rounded-full bg-gradient-to-br from-brand/60 to-brand-dark/60 shadow-inner" />
              <div className="font-extrabold">{p.name}</div>
              <div className="text-white/70">{p.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Footer({ msg }: { msg: any }) {
  return (
    <footer id="contacts" className="border-t border-white/10 bg-[#0a221e] py-7">
      <div className="container-max grid items-start gap-6 md:grid-cols-[auto,1fr,1fr]">
        <Image src="/images/footer_logo.svg" alt="PRIX Club" width={72} height={72} className="h-18 w-auto" />
        <div>
          <div className="mb-1 font-extrabold">{msg.footer.contacts}</div>
          <a className="block text-white/80 hover:text-white" href="mailto:info@prixclub.ru">info@prixclub.ru</a>
          <a className="block text-white/80 hover:text-white" href="tel:+79999999999">+7 999 999-99-99</a>
        </div>
        <div>
          <div className="mb-1 font-extrabold">{msg.footer.nav}</div>
          <a className="block text-white/80 hover:text-white" href="#services">{msg.sections.services}</a>
          <a className="block text-white/80 hover:text-white" href="#clients">{msg.sections.clients}</a>
          <a className="block text-white/80 hover:text-white" href="#team">{msg.sections.team}</a>
        </div>
        <div className="col-span-full text-white/60">{msg.footer.copy}</div>
      </div>
    </footer>
  )
}
