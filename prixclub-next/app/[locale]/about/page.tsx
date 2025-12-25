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
        'To build sustainable brand reputations through systematic work with the media and modern communication technologies.',
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
        'Формировать устойчивую репутацию брендов через системную работу с медиа и современными коммуникационными технологиями.',
      cards: [
        { key: 'trust', title: 'Доверие', icon: '/images/about_us/isolated_hand_shaking_3d_chrome_icon_against_black_background_tpub2s82m1c2ctmpfkxl_3%202.svg' },
        { key: 'innov', title: 'Инновационность', icon: '/images/about_us/isolated_light_bulb_3d_chrome_icon_against_black_background_ky74b0it1ybt946e6770_4%202.svg' },
        { key: 'result', title: 'Результативность', icon: '/images/about_us/isolated_rising_graph_3d_chrome_icon_against_black_background_27exlmvp1ltesty983mp_9.svg' },
        { key: 'conf', title: 'Конфиденциальность', icon: '/images/about_us/isolated_lock_3d_chrome_icon_against_black_background_qxpqbdwom9ch0yaqxknt_5.svg' },
      ],
    }

  return (
    <div className={geometria.className}>
      <Header msg={msg} locale={locale} title={msg.nav.about} />
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
          <div className="mx-auto max-w-[980px] text-center px-4">
            <h1 className="text-[clamp(28px,8vw,64px)] font-semibold leading-[1.1]">
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
            <p className="mt-6 text-[clamp(16px,5vw,28px)] leading-[1.35] text-white/95">
              {t.subtitle}
            </p>
          </div>

          {/* Cards row */}
          <div className="mx-auto mt-10 md:mt-14 grid max-w-[1280px] grid-cols-2 gap-4 px-2 sm:gap-7 sm:px-4 lg:grid-cols-4">
            {t.cards.map((c) => (
              <div
                key={c.key}
                className="mission-card relative w-full min-w-0 overflow-hidden rounded-[20px] bg-black sm:min-w-[260px]"
                style={{
                  margin: '0 auto',
                }}
              >
                {/* same layers as Services cards */}
                <Image src="/images/about_us/hero_card_background.png" alt="" fill className="object-cover [filter:contrast(1.05)_saturate(0.9)]" />
                <div className="absolute inset-0" style={{ background: '#2E6456', mixBlendMode: 'multiply', opacity: 0.75 }} />
                {/* <div className="absolute inset-0 grid place-items-center p-4"> */}
                  <div className="h-full w-full rounded-[14px] border border-white/20 relative overflow-hidden shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05),inset_0_0_0_2px_rgba(255,255,255,0.06)]" style={{ background: 'rgba(255,255,255,0.05)' }}>
                    <div
                      className="pointer-events-none absolute inset-0 rounded-[14px] mix-blend-screen"
                      style={{
                        background:
                          'radial-gradient(120% 120% at 50% 50%, rgba(255,255,255,0) 60%, rgba(255,255,255,0.08) 78%, rgba(255,255,255,0.12) 100%)'
                      }}
                    />
                  </div>
                {/* </div> */}
                {/* Icon and title */}
                <div className="mission-content pointer-events-none absolute inset-0 grid place-items-center p-6">
                  <div className="mission-stack flex flex-col items-center gap-3">
                    <Image src={c.icon} alt="" width={56} height={56} className="mission-icon h-14 w-14 object-contain" style={{ height: 'clamp(10px, 8vw, 34px)' }} />
                    <div className="mission-title text-center text-[clamp(12px,2.2vw,16px)] font-semibold text-white">{c.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <style jsx>{`
            .mission-icon{
              display:block;
              margin:0 auto;
              object-fit:contain;
              width: clamp(64px, 12vw, 86px);
              height: clamp(64px, 12vw, 86px);
            }
            .mission-title{
              text-align:center;
              white-space: nowrap;
              overflow: visible;
              line-height:1.2;
              max-width:100%;
            }
            .mission-card{
              aspect-ratio: 282 / 153;
            }
            @media (max-width: 640px){
              .mission-card{
                aspect-ratio: 282 / 148;
                border-radius: 15px;
              }
              .mission-content{
                padding: 10px;
              }
              .mission-stack{
                gap: 6px;
              }
              .mission-icon{
                width: clamp(20px, 8vw, 34px);
                height: clamp(20px, 8vw, 34px);
              }
              .mission-title{
                font-size: clamp(10px, 3vw, 12px);
                white-space: normal;
              }
            }
          `}</style>
        </div>
      </section>
      <section className={`relative overflow-hidden ${geometria.className} diff-section`}>
        {/* Фоновая картинка секции */}
        <img
          src="/images/about_us/background_second.svg"
          alt=""
          className="block w-full h-auto diff-bg"
        />

        {/* Вертикальная левая линия — как на макете */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10">
          <div className="absolute inset-y-0 left-[clamp(24px,8vw,124px)] w-[5px] rounded-full bg-[#2E6456]" />
        </div>

        {/* Контент с правильными верх/низ отступами */}
        <div className="absolute inset-0 diff-overlay">
          {/* py задаёт зазор сверху/снизу как на скрине; регулируется на md+ */}
          <div
            className="relative mx-0 h-full max-w-[1100px] px-4 md:px-10 py-[clamp(40px,10vw,80px)] text-[#0a0a0a] section-tight diff-content"
            // линия стоит на 124px; гуттер между линией и текстом = 24px
            style={{ paddingLeft: 'max(calc(clamp(24px,8vw,124px) + clamp(12px,3vw,24px)), 16px)' }}
          >
            <div className="md:w-4/5 max-w-[860px]">
              <h2 className="mb-[clamp(24px,6vw,80px)] pl-0 md:pl-[15%] text-[clamp(20px,6vw,44px)] font-semibold leading-tight">
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

              <div className="mt-[clamp(24px,6vw,40px)] space-y-[clamp(16px,4vw,32px)]">
                <ParagraphBlock>
                  {locale === 'en'
                    ? 'PRIX Club operates at the intersection of PR and technology, addressing reputation and communication challenges not only through messaging, but also through digital tools.'
                    : 'PRIX Club работает на стыке PR и технологий, решая репутационные и коммуникационные задачи не только за счёт смыслов, но и с помощью цифровых инструментов.'}
                </ParagraphBlock>

                <ParagraphBlock>
                  {locale === 'en'
                    ? 'Our work is grounded in analytics and verified data. We make decisions based on facts and develop tailored strategies aligned with the objectives of each project.'
                    : 'В основе нашей работы — аналитика и проверенные данные. Мы принимаем решения на основе фактов и выстраиваем индивидуальные стратегии под задачи каждого проекта.'}
                </ParagraphBlock>

                <ParagraphBlock className="pb-2">
                  {locale === 'en'
                    ? 'We bring together multidisciplinary teams: PR specialists, GR consultants, and IT developers work as one integrated system to maximize the effectiveness of communication solutions.'
                    : 'Мы объединяем команды разных профилей: PR-специалисты, GR-консультанты и IT-разработчики работают как единая система, повышая эффективность коммуникационных решений.'}
                </ParagraphBlock>
              </div>
            </div>
          </div>
        </div>
        <style jsx>{`
          @media (max-width: 400px){
            .section-tight{padding-top:20px}
          }
          @media (min-width: 750px) and (max-width: 1300px){
            .diff-section{overflow:visible}
            .diff-bg{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:0}
            .diff-overlay{position:relative; inset:auto; z-index:1}
            .diff-content{padding-bottom:90px}
          }
        `}</style>
      </section>
      {/* <VideoSection /> */}
      {/* <PhotoSection /> */}
      <WhyUsSection locale={locale} />
      <Footer msg={msg} locale={locale} />
    </div>
  )
}

function Header({ msg, locale, title }: { msg: any; locale: 'ru' | 'en'; title: string }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const link = (href: string, label: string) => (
    <a href={href} className="block py-2 px-3 rounded-lg text-[14px] text-white/90 hover:text-white hover:bg-white/10 transition-colors text-center w-full" onClick={() => setIsMenuOpen(false)}>
      {label}
    </a>
  )
  return (
    <header className="sticky top-0 z-20 bg-black/85 backdrop-blur supports-[backdrop-filter]:bg-black/70 relative">
      <div className="container-max py-3">
        {/* Mobile bar */}
        <div className="md:hidden flex items-center gap-3">
          <Image src="/images/header_logo.svg" alt="PRIX Club" width={112} height={36} className="h-[50px] w-auto" priority />
          <div
            className="relative flex-1 h-[50px] rounded-full border border-white/10 text-white overflow-hidden bg-center bg-cover"
            style={{ backgroundImage: 'url(/images/mobile_menu_background.png)' }}
          >
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((v) => !v)}
              className="absolute left-4 top-1/2 -translate-y-1/2 h-6 w-6 text-white z-10"
            >
              <span className="block w-[22px] h-[2px] bg-white mb-[5px]" />
              <span className="block w-[22px] h-[2px] bg-white mb-[5px]" />
              <span className="block w-[22px] h-[2px] bg-white" />
            </button>
            <div className={`absolute inset-0 flex items-center justify-center text-[21px] font-semibold -translate-x-2 pointer-events-none ${geometria.className}`}>
              {title}
            </div>
            <div className="absolute right-2 top-1/2 -translate-y-1/2 z-10">
              <MobileLangSwitch />
            </div>
          </div>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-2">
          <Image
            src="/images/header_logo.svg"
            alt="PRIX Club"
            width={120}
            height={40}
            className="h-10 w-auto"
            priority
          />
          <div className="flex-1 rounded-full border border-white/15 bg-black/40 px-4 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)] backdrop-blur">
            <div className={`flex h-10 items-center justify-between gap-4 ${geometria.className}`}>
              <nav className="flex items-center gap-6 text-white/80 text-[13px]">
                <a href={`/${locale}`} className="hover:text-white">{msg.nav.main}</a>
                <a href={`/${locale}/about`} className="hover:text-white">{msg.nav.about}</a>
                {/*<a href={`/${locale}/team`} className="hover:text-white">{msg.nav.team}</a>*/}
                <a href={`/${locale}/cases`} className="hover:text-white">{msg.nav.works}</a>
                <a href={`/${locale}/services`} className="hover:text-white">{msg.nav.services}</a>
                <a href={`/${locale}/contacts`} className="hover:text-white">{msg.nav.contacts}</a>
              </nav>
              <div className="flex items-center gap-6 text-[13px]" >
                {/*<a href={`/${locale}/news`} className="tracking-wide text-white/80 hover:text-white">{msg.nav.news}</a>*/}
                {/*<a href={`/${locale}/reviews`} className="tracking-wide text-white/80 hover:text-white">{msg.nav.reviews}</a>*/}
                <LanguageSwitch />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile dropdown */}
        <div className={`${isMenuOpen ? 'md:hidden' : 'hidden'} mt-2`}>
          <div className="rounded-xl border border-white/10 bg-white/8 p-1.5 backdrop-blur shadow-[0_8px_24px_rgba(0,0,0,0.25)]">
            <div className="rounded-lg bg-gradient-to-b from-white/8 to-white/3 p-1.5">
              <nav className={`flex flex-col items-center ${geometria.className}`}>
                {link(`/${locale}`, msg.nav.main)}
                {link(`/${locale}/about`, msg.nav.about)}
                {link(`/${locale}/team`, msg.nav.team)}
                {link(`/${locale}/cases`, msg.nav.works)}
                {link(`/${locale}/services`, msg.nav.services)}
                {link(`/${locale}/contacts`, msg.nav.contacts)}
              </nav>
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

function MobileLangSwitch() {
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
      className={`relative h-[40px] w-[69px] overflow-hidden rounded-full text-center text-[20px] font-medium text-white shadow-[inset_0_2px_6px_rgba(0,0,0,0.6)] transition-transform duration-100 active:scale-[0.96] ${geometria.className}`}
    >
      <Image
        src="/images/mobile_switch_lang_icon.png"
        alt=""
        width={69}
        height={40}
        className="absolute inset-0 h-full w-full"
        aria-hidden
      />
      <span className="relative z-10 flex h-full w-full items-center justify-center">
        {isEN ? 'EN' : 'RU'}
      </span>
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
    <div className={`relative pl-0 md:pl-[15%] ${className}`}>
      {/* Треугольник: развернут "влево" и вершиной лежит на линии */}
      <span
        className="
          hidden md:block absolute top-[6px]
          left-[calc(-24px+2.5px+0px)]  /* -gutter + line/2 + triangleWidth */
          h-0 w-0
          border-y-[9px] border-y-transparent  /* было 7px → стало выше */
          border-l-[16px] border-l-[#2E6456]   /* было 12px → стало шире */
        "
      />
      <p className="text-[clamp(8px,2.5vw,27px)] leading-[1.2]">
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
          className="group absolute left-1/2 top-1/2 grid -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full ring-2 ring-white/85"
          style={{
            width: 'clamp(60px, 16vw, 132px)',
            height: 'clamp(60px, 16vw, 132px)',
            background: "linear-gradient(180deg,#74AA9C 0%,#53897B 100%)",
            boxShadow: "0 12px 32px rgba(0,0,0,.45), inset 0 0 0 2px rgba(0,0,0,.15)",
          }}
          onClick={(e) => e.preventDefault()}
        >
          <span
            className="
              block
              [width:0] [height:0]
              translate-x-[4px]
            "
            style={{
              borderTop: 'clamp(10px, 3vw, 20px) solid transparent',
              borderBottom: 'clamp(10px, 3vw, 20px) solid transparent',
              borderLeft: 'clamp(16px, 4.5vw, 32px) solid white',
            }}
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
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4 md:gap-x-8 md:gap-y-8">
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
        title: 'Why PRIX Club?',
        bullets: [
          'Over 10 years of experience in reputation management across media and the public sphere',
          'Expertise in PR, GR, and digital communications, strengthened by proprietary IT solutions',
          'Proven track record working with businesses, public institutions, and non-profit organizations',
          'Comprehensive image and reputation solutions delivered end-to-end',
        ],
      }
      : {
        title: 'Почему PRIX Club?',
        bullets: [
          'Более 10 лет работы с репутацией в медиа и публичном пространстве',
          'Экспертиза в PR, GR и цифровых коммуникациях, усиленная собственными IT-решениями',
          'Опыт работы с бизнесом, государственными структурами и общественными институтами',
          'Комплексные имиджевые и репутационные решения «под ключ»',
        ],
      };

  return (
    <section className="relative w-full">
      {/* Холст 1440×810, чтобы всё масштабировалось как в макете */}
      <div className="relative w-full whyus-canvas whyus-stack">
        {/* Фон из макета */}
        <div className="whyus-layers" aria-hidden>
          <div className="whyus-bg" />
          <div className="whyus-overlay" style={{ background: '#74AA9C', mixBlendMode: 'color' }} />
        </div>

        <div className="whyus-content">
          {/* Заголовок */}
          <h2 className="font-extrabold text-black leading-[1.25] whyus-title">
            {txt.title}
          </h2>

          {/* Единорог */}
          <div className="whyus-unicorn-wrap">
            <Image
              src="/images/about_us/unicorn.png"
              alt=""
              fill
              className="whyus-unicorn object-contain"
              style={{ pointerEvents: 'none' }}
              unoptimized
            />
          </div>

          {/* Список — позиция блока как в макете */}
          <div className="text-black whyus-list">
            <ul className="space-y-[clamp(8px, 2vw, 16px)]">
              {txt.bullets.map((line, i) => (
                <li key={i} className="flex items-start" style={{ gap: 'clamp(6px, 1.5vw, 12px)' }}>
                  <span
                    aria-hidden
                    className="mt-[clamp(4px, 1vw, 8px)] inline-block [width:0] [height:0] -rotate-45"
                    style={{
                      borderTop: 'clamp(5px, 1.5vw, 8.24px) solid transparent',
                      borderBottom: 'clamp(5px, 1.5vw, 8.24px) solid transparent',
                      borderLeft: 'clamp(6px, 1.8vw, 9.515px) solid #000',
                    }}
                  />
                  <span className="leading-[1.25]">{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <style jsx>{`
        .whyus-canvas{aspect-ratio:auto;isolation:isolate}
        .whyus-stack{position:relative;z-index:0}
        .whyus-layers{position:absolute;inset:0;z-index:0;pointer-events:none}
        .whyus-bg{
          position:absolute;
          inset:0;
          background:url('/images/about_us/why_us_background.svg') center/cover no-repeat;
        }
        .whyus-overlay{position:absolute;inset:0}
        .whyus-content{
          position:relative;
          z-index:1;
          width:100%;
          height:100%;
          display:flex;
          flex-direction:column;
          align-items:flex-start;
          gap:32px;
          padding:clamp(24px, 6vw, 120px) clamp(16px, 8vw, 220px) clamp(16px, 6vw, 220px);
        }
        .whyus-title{
          position:static;
          width:100%;
          white-space:normal;
          font-size:clamp(20px, 4.4vw, 42px);
        }
        .whyus-unicorn-wrap{
          position:relative;
          width:200px;
          aspect-ratio:4/5;
          max-width:100%;
        }
        .whyus-unicorn{
          position:absolute;
          inset:0;
        }
        .whyus-list{
          position:static;
          width:100%;
          font-size:clamp(10px, 2.5vw, 27px);
          line-height:clamp(10px, 3.5vw, 34px);
        }
        @media (max-width: 1300px){
          .whyus-canvas{min-height:0}
        }
        @media (max-width: 640px){
          .whyus-stack{aspect-ratio:auto;min-height:0;height:auto}
          .whyus-content{
            // padding:20px 16px 20px;
            gap:10px;
          }
          .whyus-unicorn-wrap{width:64px}
          .whyus-unicorn{
            opacity:1;
            mix-blend-mode:normal;
            filter:brightness(0) saturate(100%) drop-shadow(0 2px 6px rgba(0,0,0,0.25));
          }
          .whyus-list ul{gap:8px}
        }
      `}</style>
    </section>
  );
}





function Footer({ msg, locale }: { msg: any; locale: 'ru' | 'en' }) {
  return (
    <footer id="contacts" className="bg-black py-8 md:py-10 text-white">
      <div className="container-max">
        {/* Mobile layout */}
        <div className="md:hidden flex flex-col items-center text-center gap-4">
          <Image src="/images/footer_logo.svg" alt="PRIX Club" width={72} height={72} className="h-16 w-auto opacity-80" />
          <nav className={`flex flex-col items-center gap-2 text-white/80 ${geometria.className}`}>
            <a href={`/${locale}`} className="hover:text-white">{msg.nav.main}</a>
            <a href={`/${locale}/about`} className="hover:text-white">{msg.nav.about}</a>
            {/*<a href={`/${locale}/team`} className="hover:text-white">{msg.nav.team}</a>*/}
            <a href={`/${locale}/cases`} className="hover:text-white">{msg.nav.works}</a>
            <a href={`/${locale}/services`} className="hover:text-white">{msg.nav.services}</a>
            <a href={`/${locale}/contacts`} className="hover:text-white">{msg.nav.contacts}</a>
          </nav>
          <div className="mt-2">
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

        {/* Desktop layout */}
        <div className="hidden md:grid items-start gap-2 md:gap-3 md:grid-cols-[auto,1fr,1fr,1fr,1fr,1fr,1fr,auto]">
          <div className="pt-2 md:mr-24 -mt-2 md:-mt-3">
            <Image src="/images/footer_logo.svg" alt="PRIX Club" width={72} height={72} className="h-18 w-auto opacity-80" />
          </div>
          <FooterColumn title={msg.nav.main} rows={[msg.nav.main, msg.nav.main, msg.nav.main]} />
          <FooterColumn title={msg.nav.about} rows={[msg.nav.about, msg.nav.about, msg.nav.about]} />
          {/*<FooterColumn title={msg.nav.team} rows={[msg.nav.team, msg.nav.team, msg.nav.team]} />*/}
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
