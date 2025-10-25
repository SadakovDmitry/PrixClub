"use client"
import Image from 'next/image'
import { useState, useId } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { geometria } from '../../../src/fonts/geometria'

export default function AboutPage({ params: { locale } }: { params: { locale: 'ru' | 'en' } }) {
  const msg = {
    ru: {
      nav: { main: 'Главная', about: 'О нас', team: 'Команда', works: 'Работы', services: 'Услуги', contacts: 'Контакты', news: 'НОВОСТИ', reviews: 'ОТЗЫВЫ' },
      sections: { services: 'Наши услуги', clients: 'Наши клиенты', team: 'Команда' },
      footer: { contacts: 'Контакты', nav: 'Навигация', copy: '© PRIX Club, 2025' }
    },
    en: {
      nav: { main: 'Main Page', about: 'About Us', team: 'Team', works: 'Works', services: 'Services', contacts: 'Contacts', news: 'NEWS', reviews: 'REVIEWS' },
      sections: { services: 'Our Services', clients: 'Our Clients', team: 'Team' },
      footer: { contacts: 'Contacts', nav: 'Navigation', copy: '© PRIX Club, 2025' }
    }
  }[locale]

  const t = locale === 'en'
    ? {
      title: 'Our mission',
      subtitle:
        'Build strong relationships between people and brands through a combination of proven PR methods and the latest technologies',
      cards: [
        { key: 'trust', title: 'Trust', icon: '/images/about_us/isolated_hand_shaking_3d_chrome_icon_against_black_background_tpub2s82m1c2ctmpfkxl_3%202.svg' },
        { key: 'innov', title: 'Innovation', icon: '/images/about_us/isolated_light_bulb_3d_chrome_icon_against_black_background_ky74b0it1ybt946e6770_4%202.svg' },
        { key: 'result', title: 'Effectiveness', icon: '/images/about_us/isolated_rising_graph_3d_chrome_icon_against_black_background_27exlmvp1ltesty983mp_9.svg' },
        { key: 'conf', title: 'Confidentiality', icon: '/images/about_us/isolated_lock_3d_chrome_icon_against_black_background_qxpqbdwom9ch0yaqxknt_5.svg' },
      ],
    }
    : {
      title: 'Наша миссия',
      subtitle:
        'Строить прочные связи между людьми и брендами через сочетание проверенных PR‑методов и новейших технологий',
      cards: [
        { key: 'trust', title: 'Доверие', icon: '/images/about_us/isolated_hand_shaking_3d_chrome_icon_against_black_background_tpub2s82m1c2ctmpfkxl_3%202.svg' },
        { key: 'innov', title: 'Инновационность', icon: '/images/about_us/isolated_light_bulb_3d_chrome_icon_against_black_background_ky74b0it1ybt946e6770_4%202.svg' },
        { key: 'result', title: 'Результативность', icon: '/images/about_us/isolated_rising_graph_3d_chrome_icon_against_black_background_27exlmvp1ltesty983mp_9.svg' },
        { key: 'conf', title: 'Конфиденциальность', icon: '/images/about_us/isolated_lock_3d_chrome_icon_against_black_background_qxpqbdwom9ch0yaqxknt_5.svg' },
      ],
    }

  return (
    <div className={geometria.className}>
      <Header msg={msg} locale={locale} />
      <section className={`relative min-h-[80vh] py-16 md:py-24 ${geometria.className}`}>
        {/* Background image as real background */}
        <Image
          src="/images/about_us/Hero_background.svg"
          alt=""
          fill
          className="z-0 object-cover"
          priority
        />
        {/* No overlay to keep original colors */}

        <div className="container-max relative z-10">
          <div className="mx-auto max-w-[980px] text-center">
            <h1 className="text-[42px] md:text-[64px] font-semibold leading-[1.1]">
              <span
                className="inline-block bg-clip-text text-transparent"
                style={{
                  background:
                    'linear-gradient(89.26deg, #53897B 0.3%, #86BCAE 27.76%, #53897B 56.54%, #86BCAE 77.7%, #2E6456 99.68%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {t.title}
              </span>
            </h1>
            <p className="mt-6 text-[20px] md:text-[28px] leading-[1.35] text-white/95">
              {t.subtitle}
            </p>
          </div>

          {/* Cards row */}
          <div className="mx-auto mt-10 md:mt-14 grid max-w-[1120px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {t.cards.map((c) => (
              <div key={c.key} className="relative overflow-hidden rounded-[20px] bg-black" style={{ aspectRatio: '282/153' }}>
                {/* same layers as Services cards */}
                <Image src="/images/our_services_background.svg" alt="" fill className="object-cover [filter:contrast(1.05)_saturate(0.9)]" />
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
                {/* Icon and title */}
                <div className="pointer-events-none absolute inset-0 grid place-items-center p-6">
                  <div className="flex flex-col items-center gap-3">
                    <Image src={c.icon} alt="" width={56} height={56} className="h-14 w-14 object-contain" />
                    <div className="text-center text-[20px] font-semibold text-white whitespace-pre-line">{c.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className={`relative overflow-hidden ${geometria.className}`}>
        {/* Фоновая картинка секции */}
        <img
          src="/images/about_us/background_second.svg"
          alt=""
          className="block w-full h-auto"
        />

        {/* Вертикальная левая линия — как на макете */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10">
          <div className="absolute inset-y-0 left-[124px] w-[5px] rounded-full bg-[#2E6456]" />
        </div>

        {/* Контент с правильными верх/низ отступами */}
        <div className="absolute inset-0">
          {/* py задаёт зазор сверху/снизу как на скрине; регулируется на md+ */}
          <div
            className="relative mx-0 h-full max-w-[1100px] px-0 md:px-10 py-10 md:py-20 text-[#0a0a0a]"
            // линия стоит на 124px; гуттер между линией и текстом = 24px
            style={{ paddingLeft: 'calc(124px + 24px)' }}
          >
            <div className="md:w-4/5 max-w-[860px]">
              <h2 className="mb-[10%] pl-[15%] text-[32px] md:text-[44px] font-semibold leading-tight">
                <span
                  className="inline-block bg-clip-text text-transparent"
                  style={{
                    background:
                      'linear-gradient(89.26deg, #53897B 0.3%, #86BCAE 27.76%, #53897B 56.54%, #86BCAE 77.7%, #2E6456 99.68%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {locale === 'en' ? 'What makes us different?' : 'Что в нас особенного?'}
                </span>
              </h2>

              <div className="mt-8 md:mt-10 space-y-7 md:space-y-8">
                <ParagraphBlock>
                  {locale === 'en'
                    ? 'The company stands at the intersection of PR and IT — we solve communication challenges not only with words but also with technology.'
                    : 'Компания стоит на стыке PR и IT – умеет решать коммуникационные задачи не только словами, но и технологиями'}
                </ParagraphBlock>

                <ParagraphBlock>
                  {locale === 'en'
                    ? 'We use data and analytics to make decisions (data-driven PR) and apply an individual approach to each project.'
                    : 'Используются данные и аналитика для принятия решений (data-driven PR), а также индивидуальный подход к каждому проекту.'}
                </ParagraphBlock>

                <ParagraphBlock className="pb-2">
                  {locale === 'en'
                    ? 'Teams of different profiles are integrated (PR specialists work hand in hand with IT developers) — this synergy increases the effectiveness of solutions.'
                    : 'Команды разных профилей интегрируются (PR-специалисты работают рука об руку с IT-разработчиками) – такая синергия повышает эффективность решений'}
                </ParagraphBlock>
              </div>
            </div>
          </div>
        </div>
      </section>
      <VideoSection />
      <PhotoSection />
      <WhyUsSection locale={locale} />
      <Footer msg={msg} />
    </div>
  )
}

function Header({ msg, locale }: { msg: any; locale: 'ru' | 'en' }) {
  const pathname = usePathname()
  return (
    <header className="sticky top-0 z-20 bg-black">
      <div className="container-max py-3">
        <div className="flex items-center gap-2">
          <Image src="/images/header_logo.svg" alt="PRIX Club" width={120} height={40} className="h-10 w-auto" priority />
          <div className="flex-1 rounded-full border border-white/15 bg-black/40 px-4 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)] backdrop-blur">
            <div className={`flex h-10 items-center justify-between gap-4 ${geometria.className}`}>
              <nav className="flex items-center gap-6 text-white/80 text-[13px]">
                <a href={`/${locale}`} className="font-semibold text-white hover:text-white">{msg.nav.main}</a>
                <a href={`/${locale}/about`} className={`hover:text-white ${pathname?.endsWith('/about') ? 'text-white' : ''}`}>{msg.nav.about}</a>
                <a href={`/${locale}#team`} className="hover:text-white">{msg.nav.team}</a>
                <a href={`/${locale}#works`} className="hover:text-white">{msg.nav.works}</a>
                <a href={`/${locale}#services`} className="hover:text-white">{msg.nav.services}</a>
                <a href={`/${locale}#contacts`} className="hover:text-white">{msg.nav.contacts}</a>
              </nav>
              <div className="flex items-center gap-6 text-[13px]" >
                <a href={`/${locale}#news`} className="tracking-wide text-white/80 hover:text-white">{msg.nav.news}</a>
                <a href={`/${locale}#reviews`} className="tracking-wide text-white/80 hover:text-white">{msg.nav.reviews}</a>
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
      <span className={`pointer-events-none absolute inset-y-0 left-0 z-10 flex w-1/2 items-center justify-center ${isEN ? 'opacity-60' : 'text-white'}`}>RU</span>
      <span className={`pointer-events-none absolute inset-y-0 right-0 z-10 flex w-1/2 items-center justify-center ${isEN ? 'text-white' : 'opacity-60'}`}>EN</span>
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

function FooterColumn({ title, rows }: { title: string; rows: string[] }) {
  return (
    <div>
      <div className="mb-2 text-[16px] font-semibold text-white">{title}</div>
      <div className="space-y-1 text-[13px] text-white/60">
        {rows.map((r, i) => (
          <div key={i}>{r}</div>
        ))}
      </div>
    </div>
  )
}

function ParagraphBlock({
  children,
  className = '',
}: React.PropsWithChildren<{ className?: string }>) {
  // у каждого абзаца одинаковый гуттер справа от линии = 24px (pl-6)
  return (
    <div className={`relative pl-[15%] ${className}`}>
      {/* Треугольник: развернут "влево" и вершиной лежит на линии */}
      <span
        className="
          absolute top-[6px]
          left-[calc(-24px+2.5px+0px)]  /* -gutter + line/2 + triangleWidth */
          h-0 w-0
          border-y-[9px] border-y-transparent  /* было 7px → стало выше */
          border-l-[16px] border-l-[#2E6456]   /* было 12px → стало шире */
        "
      />
      <p className="text-[clamp(18px,2.2vw,27px)] leading-[1.6]">
        {children}
      </p>
    </div>
  )
}

function VideoSection() {
  const poster = "/images/our_services_background.svg"; // можно заменить

  return (
    // широкие «letterbox»-полосы сверху/снизу — просто увеличенные py
    <section className="relative bg-black py-[8vw] md:py-[10vw]">
      {/* full-bleed: без container, блок 16:9 растягивается на всю ширину */}
      <div className="relative w-full overflow-hidden" style={{ aspectRatio: "19 / 9" }}>
        {/* Постер заполняет весь кадр с обрезкой под 16:9 */}
        <Image src={poster} alt="" fill className="object-cover" priority />

        {/* Затемнение */}
        <div className="absolute inset-0 bg-black/80" />

        {/* Большая круглая кнопка Play по центру */}
        <button
          type="button"
          aria-label="Play video"
          className="group absolute left-1/2 top-1/2 grid h-[132px] w-[132px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full ring-2 ring-white/85"
          style={{
            background: "linear-gradient(180deg,#74AA9C 0%,#53897B 100%)",
            boxShadow: "0 12px 32px rgba(0,0,0,.45), inset 0 0 0 2px rgba(0,0,0,.15)",
          }}
          onClick={(e) => e.preventDefault()}
        >
          <span
            className="
              block
              [width:0] [height:0]
              [border-top:20px_solid_transparent]
              [border-bottom:20px_solid_transparent]
              [border-left:32px_solid_white]
              translate-x-[4px]
            "
          />
        </button>
      </div>
    </section>
  );
}


function PhotoSection() {
  const pics = [
    "/images/about_us/photos/1.png", "/images/about_us/photos/2.png", "/images/about_us/photos/3.png",
    "/images/about_us/photos/4.png", "/images/about_us/photos/5.png", "/images/about_us/photos/6.png",
    "/images/about_us/photos/7.png", "/images/about_us/photos/8.png", "/images/about_us/photos/9.png",
  ]

  return (
    <section className="relative isolate overflow-hidden">
      {/* фон секции */}
      <div className="absolute inset-0 -z-10 bg-[#07231f]" />
      <img
        src="/images/about_us/PhotoSection_background.svg"
        alt=""
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover"
      />

      {/* сетка 3x3 */}
      <div className="mx-auto max-w-[1180px] px-6 md:px-10 py-14 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8">
          {pics.map((src, i) => (
            <div
              key={i}
              className="relative aspect-[4/3] overflow-hidden rounded-[22px] shadow-[0_10px_30px_rgba(0,0,0,.35)] ring-1 ring-black/20"
            >
              <SvgFilteredImage
                src={src}
                overlay={`/images/about_us/filters/${i + 1}.svg`}  // ← вот это добавили
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/** Инлайн-SVG с фильтром (3-й способ) */
function SvgFilteredImage({ src, overlay }: { src: string; overlay: string }) {
  const uid = useId();
  const fid = `photoFX-${uid}`;

  return (
    <svg viewBox="0 0 1200 900" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <filter id={fid} colorInterpolationFilters="sRGB">
          <feComponentTransfer>
            <feFuncR type="gamma" amplitude="1.05" exponent="0.9" offset="0" />
            <feFuncG type="gamma" amplitude="1.05" exponent="0.9" offset="0" />
            <feFuncB type="gamma" amplitude="1.05" exponent="0.9" offset="0" />
          </feComponentTransfer>
          <feColorMatrix type="matrix" values="
            1.03 0    0    0 0
            0    1.00 0    0 0
            0    0    0.96 0 0
            0    0    0    1 0" />
          <feConvolveMatrix order="3" kernelMatrix="
            0 -1  0
           -1  5 -1
            0 -1  0" edgeMode="duplicate" />
        </filter>
      </defs>

      {/* Фото с SVG-фильтром (3-й способ) */}
      <image
        href={src}
        x="0" y="0" width="1200" height="900"
        preserveAspectRatio="xMidYMid slice"
        filter={`url(#${fid})`}
      />

      {/* Персональный SVG-оверлей для этой карточки */}
      <image
        href={overlay}
        x="0" y="0" width="1200" height="900"
        preserveAspectRatio="xMidYMid slice"
        style={{
          mixBlendMode: 'multiply', // при желании: 'multiply' | 'screen' | 'overlay'
          opacity: 1                // подстрой, если нужно слабее/сильнее
        }}
        pointerEvents="none"
      />
    </svg>
  )
}

function WhyUsSection({ locale }: { locale: 'ru' | 'en' }) {
  const txt =
    locale === 'en'
      ? {
        title: 'Why us?',
        bullets: [
          '10 years on the market',
          'Expertise in PR and software development',
          'Working with both government and commercial clients',
          'Creative turnkey solutions',
        ],
      }
      : {
        title: 'Почему мы?',
        bullets: [
          '10 лет на рынке',
          'Экспертиза в PR и разработке ПО',
          'Работаем и с гос., и с коммерческими клиентами',
          'Креативные решения «под ключ»',
        ],
      };

  return (
    <section className="relative w-full">
      {/* Холст 1440×810, чтобы всё масштабировалось как в макете */}
      <div className="relative w-full" style={{ aspectRatio: '1440 / 810' }}>
        {/* Фон из макета */}
        <Image src="/images/about_us/why_us_background.svg" alt="" fill className="object-cover" priority />

        {/* Цветовой слой как в фигме (mix-blend: color) */}
        <div className="absolute inset-0" style={{ background: '#74AA9C', mixBlendMode: 'color' }} />

        {/* Заголовок */}
        <h2
          className="absolute font-extrabold text-black leading-[1.25]"
          style={{
            /* left: 222/1440, top: 128.33/810, width: 183/1440 */
            left: '15.417%',
            top: '15.866%',
            width: '12.708%',
            fontSize: 'min(3vw,44px)',
          }}
        >
          {txt.title}
        </h2>

        {/* Единорог */}
        <Image
          src="/images/about_us/unicorn.svg"
          alt=""
          width={192}
          height={240}
          className="absolute"
          style={{
            left: '14.402%', // 207.7 / 1440
            top: '27.962%',  // 226.47 / 810
            width: '13.32%', // 191.84 / 1440
            height: 'auto',
          }}
        />

        {/* Список — позиция блока как в макете */}
        <div
          className="absolute text-black"
          style={{
            left: '15.417%',     // 222px
            top: '64.198%',      // точка начала списка
            width: '42.157%',    // 607.22px
            fontSize: 'min(1.875vw,27px)',
            lineHeight: '34px',
          }}
        >
          <ul className="space-y-[16px]">
            {txt.bullets.map((line, i) => (
              <li key={i} className="inline-flex items-start gap-3">
                {/* Треугольник-маркер: слева от текста, направлен ВПРАВО */}
                <span
                  aria-hidden
                  className="
                    mt-[8px] inline-block
                    [width:0] [height:0]
                    [border-top:8.24px_solid_transparent]
                    [border-bottom:8.24px_solid_transparent]
                    [border-left:9.515px_solid_#000]
                  "
                />
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}





function Footer({ msg }: { msg: any }) {
  return (
    <footer id="contacts" className="bg-black py-8 md:py-10 text-white">
      <div className="container-max">
        <div className="grid items-start gap-2 md:gap-3 md:grid-cols-[auto,1fr,1fr,1fr,1fr,1fr,1fr,auto]">
          <div className="pt-2 md:mr-24 -mt-2 md:-mt-3">
            <Image src="/images/footer_logo.svg" alt="PRIX Club" width={72} height={72} className="h-18 w-auto opacity-80" />
          </div>
          <FooterColumn title={msg.nav.main} rows={[msg.nav.main, msg.nav.main, msg.nav.main]} />
          <FooterColumn title={msg.nav.about} rows={[msg.nav.about, msg.nav.about, msg.nav.about]} />
          <FooterColumn title={msg.nav.team} rows={[msg.nav.team, msg.nav.team, msg.nav.team]} />
          <FooterColumn title={msg.nav.works} rows={[msg.nav.works, msg.nav.works, msg.nav.works]} />
          <FooterColumn title={msg.nav.services} rows={[msg.nav.services, msg.nav.services, msg.nav.services]} />
          <FooterColumn title={msg.nav.contacts} rows={[msg.nav.contacts, msg.nav.contacts, msg.nav.contacts]} />
          <div className="text-right">
            <a className="block text-[16px] font-semibold tracking-wide" href="tel:+74244242442">
              <span className="inline-flex items-center gap-2">
                <span>+7 424 424 42 42</span>
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-white/30 text-white/80">☎</span>
              </span>
            </a>
            <a className="mt-2 inline-flex items-center gap-2 font-semibold text-[16px]" href="mailto:prix@prixclub.ru">
              <span>prix@prixclub.ru</span>
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-white/30 text-white/80">✉</span>
            </a>
          </div>
        </div>
        <div className="mt-8 h-px w-full bg-white/25" />
      </div>
    </footer>
  )
}
