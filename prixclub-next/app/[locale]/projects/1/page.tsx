"use client"
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'
import { geometria } from '../../../../src/fonts/geometria'

type CaseItem = {
  icon: React.ReactNode;     // твоя серебристая иконка (svg)
  bg: string;                // путь к .png подложке
  href?: string;
};

function CaseCard({ icon, bg, href = "#" }: CaseItem) {
  return (
    <article
      className="
        relative
        w-full
        overflow-hidden
        rounded-[26px]
        ring-1 ring-white/10
        shadow-[0_14px_40px_rgba(0,0,0,0.3)]
        aspect-[4/3]
      "
    >
      {/* ФОН - ПРОСТО PNG, ВНИЗУ */}
      <Image
        src={bg}
        alt=""
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-cover"
        priority={false}
      />

      {/* СЛОЙ ДЛЯ КОНТЕНТА */}
      <div
        className="
          absolute inset-0
          flex flex-col items-center justify-center
          gap-6
          px-4
        "
      >
        {/* иконка СТРОГО по центру картинки */}
        <div className="w-[35%] aspect-square text-[#E5E7EB] flex items-center justify-center relative">
          {icon}
        </div>

        {/* кнопка под иконкой */}
        <a
          href={href}
          className="
            inline-flex items-center justify-center gap-[8%]
            rounded-full
            w-[40%] py-[3%]
            bg-gradient-to-r from-[#1D5DFF] to-[#56A7FF]
            text-white text-base font-medium
          "
        >
          <span className="text-[clamp(16px,2.5vw,20px)]">Смотреть кейс</span>
          <span className="inline-flex w-[10%] aspect-square items-center justify-center rounded-full bg-white text-[#0b1623] text-[clamp(16px,2.5vw,20px)]">
            →
          </span>
        </a>
      </div>
    </article>
  );
}

export default function ProjectsPage({ params: { locale } }: { params: { locale: 'ru' | 'en' } }) {
  const msg = {
    ru: { nav: { main: 'Главная', about: 'О нас', team: 'Команда', works: 'Работы', services: 'Услуги', contacts: 'Контакты', news: 'НОВОСТИ', reviews: 'ОТЗЫВЫ' }, footer: { copy: '© PRIX Club, 2025' } },
    en: { nav: { main: 'Main Page', about: 'About Us', team: 'Team', works: 'Works', services: 'Services', contacts: 'Contacts', news: 'NEWS', reviews: 'REVIEWS' }, footer: { copy: '© PRIX Club, 2025' } },
  }[locale]
  // Прозрачность синего фильтра для hero (0..1)
  const heroFilterAlpha = 0.15
  // Интенсивность затемнения (0..1), влияет на яркость
  const heroDarkenAlpha = 0.9
  // Яркость фона под смартфонами (0..1), 0.15 = 15% прозрачности, больше = светлее
  const phonesBgBrightness = 1
  // Прозрачность вертикальных линий под смартфонами (0..1), 0.5 = 50% прозрачности
  const linesOpacity = 0.25

  // Компоненты иконок для карточек
  const Icon1 = () => <Image src="/images/projects/Vector.svg" alt="" fill className="object-contain" style={{ filter: 'brightness(1.1) contrast(0.85) grayscale(0.3)' }} />
  const Icon2 = () => <Image src="/images/projects/Union(1).svg" alt="" fill className="object-contain" style={{ filter: 'brightness(1.1) contrast(0.85) grayscale(0.3)' }} />
  const Icon3 = () => <Image src="/images/projects/Union.svg" alt="" fill className="object-contain" style={{ filter: 'brightness(1.1) contrast(0.85) grayscale(0.3)' }} />

  const cases: CaseItem[] = [
    {
      icon: <Icon1 />,
      bg: "/images/projects/case_1.png",
      href: `/${locale}/projects/2`
    },
    {
      icon: <Icon2 />,
      bg: "/images/projects/case_2.png"
    },
    {
      icon: <Icon3 />,
      bg: "/images/projects/case_3.png"
    },
  ];

  return (
    <div className={geometria.className}>
      <Header msg={msg} locale={locale} />

      {/* Frame 173 — HERO full-bleed с сохранением пропорций */}
      <section className="relative isolate w-screen left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] bg-transparent opacity-100">
        <div className="relative w-full aspect-[16/9]">
          <div className="absolute inset-0 -z-10 bg-transparent" />
          <Image
            src="/images/projects/kosmos-solnce-yarkost-svet.png"
            alt=""
            fill
            sizes="100vw"
            priority
            className="object-cover z-10 mix-blend-normal filter-none"
          />
          {/* Синий фильтр поверх изображения (настройка через CSS-переменную) */}
          <div className="blue-filter z-20" style={{ ['--blue-a' as any]: heroFilterAlpha }} />
          {/* Дополнительное затемнение без изменения прозрачности (умножение) */}
          <div className="darken-filter z-25" style={{ ['--dark-a' as any]: heroDarkenAlpha }} />
          <div className="absolute inset-0 grid place-items-center px-4 z-30">
            <h1 className="hero-title" dangerouslySetInnerHTML={{ __html: (locale === 'en' ? 'Cosmonautics<br/>Development Foundation' : 'Фонд Содействия<br/>Развитию Космонавтики') }} />
          </div>
        </div>
      </section>

      {/* Frame 174 — белый блок (full-width) */}
      <section className="bg-white text-[#0a0a0a] w-full px-4 lg:px-8 py-12">
        <p className="mx-auto max-w-[1200px] text-[20px] leading-[25px] font-bold">
          <span className="blue-text">Lorem ipsum</span>
          — dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </section>

      {/* Frame 175 — чёрный блок с двумя изображениями (full-bleed, пропорции) */}
      <section className="relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] w-screen bg-black">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Левое фото с синим фильтром и логотипом */}
          <div className="relative w-full aspect-[16/9]">
            <Image src="/images/projects/photo-1678782307359-064ba12b45ba.png" alt="" fill sizes="100vw" className="object-cover" />
            <div className="blue-filter" />
            <Image src="/images/projects/Group 2085662458.svg" alt="logo" width={420} height={420} className="left-logo" priority />
          </div>
          {/* Правое изображение */}
          <div className="relative w-full aspect-[16/9]">
            <Image src="/images/projects/ФСРК Logo_Mockup 1.png" alt="" fill sizes="100vw" className="object-cover" />
          </div>
        </div>
      </section>

      {/* Frame 176 — заключительный блок (full-width) */}
      <section className="w-full px-4 lg:px-8 py-12 bg-black text-white text-center">
        <p className="mx-auto max-w-[980px] font-semibold text-[20px] leading-[28px]">
          <span className="blue-text">Lorem ipsum</span>
          — dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </section>

      {/* Frame 179 — верхняя секция с космическим фоном (full-bleed) */}
      <section className="relative isolate w-screen left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] bg-black">
        <div className="relative w-full" style={{ aspectRatio: '1440/608' }}>
          <Image
            src="/images/projects/kosmos-solnce-yarkost-svet 1.png"
            alt=""
            fill
            sizes="100vw"
            className="object-cover z-10"
          />
        </div>
      </section>

      {/* Frame 177 — секция со смартфонами и декоративными линиями (full-bleed) */}
      <section className="relative isolate w-screen left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] bg-black overflow-hidden">
        <div className="relative w-full phones-section">
          {/* Фоновое изображение с прозрачностью */}
          <Image
            src="/images/projects/beyond-boundaries-captivating-abstract-creation-5k-7c-2160x3840.png"
            alt=""
            fill
            sizes="100vw"
            className="object-cover z-0 phones-bg-image"
            style={{ opacity: phonesBgBrightness }}
          />
          {/* Градиентный оверлей с mix-blend-mode: color */}
          <div className="gradient-overlay" />

          {/* Декоративные вертикальные линии - используем border как в CSS */}
          <div className="vertical-line line-7" style={{ opacity: linesOpacity }} />
          <div className="vertical-line line-8" style={{ opacity: linesOpacity }} />
          <div className="vertical-line line-6" style={{ opacity: linesOpacity }} />

          {/* Изображения смартфонов */}
          <div className="phone-wrapper phone-left">
            <Image
              src="/images/projects/ФСРК website 1.png"
              alt=""
              fill
              sizes="(max-width: 768px) 40vw, (max-width: 1440px) 41vw, 588px"
              className="object-contain drop-shadow-[0px_10px_55px_rgba(0,0,0,0.85)] rounded-[20px]"
            />
          </div>
          {/* Правый передний смартфон (показывает hero) */}
          <div className="phone-wrapper phone-right-front">
            <Image
              src="/images/projects/PSD1 1 1.png"
              alt=""
              fill
              sizes="(max-width: 768px) 18vw, (max-width: 1440px) 19vw, 272px"
              className="object-contain"
            />
          </div>
          {/* Правый задний смартфон (показывает projects) */}
          <div className="phone-wrapper phone-right-back">
            <Image
              src="/images/projects/PSD1 1 — копия 1.png"
              alt=""
              fill
              sizes="(max-width: 768px) 18vw, (max-width: 1440px) 19vw, 272px"
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* Frame 178 — заглушка вместо модуля */}
      <section className="relative w-full bg-white py-0">
        <div className="relative mx-auto max-w-[1440px]" style={{ aspectRatio: '1440/840' }}>
          <Image src="/images/projects/Frame 178.svg" alt="Frame 178 placeholder" fill sizes="100vw" className="object-contain" />
        </div>
      </section>

      {/* Секция "Еще кейсы" */}
      <section id="more-cases" className="w-full px-4 lg:px-8 py-12 bg-black">
        <h2 className="text-center text-2xl md:text-3xl font-semibold text-white mb-8">Еще кейсы</h2>

        <div className="grid gap-6 md:grid-cols-3">
          {cases.map((c, i) => (
            <CaseCard key={i} {...c} />
          ))}
        </div>
      </section>

      <Footer msg={msg} locale={locale} />

      {/* Styles (hero full-bleed; убраны фиксированные размеры у секций) */}
      <style jsx>{`
        .hero-title{ margin:0; text-align:center; font-weight:700; font-size:76px; line-height:1.1;
          background: linear-gradient(90deg,#1e40af 0%, #2563eb 45%, #1d4ed8 100%);
          -webkit-background-clip:text; background-clip:text; -webkit-text-fill-color:transparent; color:transparent; letter-spacing:.2px; }

        /* Синий фильтр на левом фото */
        .blue-filter{ position:absolute; inset:0; background: linear-gradient(0deg, rgba(28,66,178,var(--blue-a,0.70)), rgba(28,66,178,var(--blue-a,0.70))); mix-blend-mode: color; pointer-events:none; }
        .darken-filter{ position:absolute; inset:0; background: rgba(0,0,0,var(--dark-a,0.25)); mix-blend-mode: multiply; pointer-events:none; }
        :global(img.left-logo){ position:absolute; left:50%; top:50%; transform:translate(-50%,-50%); width:420px; height:auto; max-width:62%; }

        .blue-text{ display:inline-block; background: linear-gradient(90deg,#1e40af 0%, #2563eb 45%, #1d4ed8 100%); -webkit-background-clip:text; background-clip:text; -webkit-text-fill-color:transparent; color:transparent; }

        /* Frame 177 стили - адаптивные размеры */
        .phones-section{ position:relative; aspect-ratio:1440/1850; width:100%; }

        .gradient-overlay{ position:absolute; inset:0; background: linear-gradient(31.25deg, #4E51BC 0%, #00C7F3 100%); mix-blend-mode: color; z-index:1; pointer-events:none; }

        .vertical-line{ position:absolute; top:0; bottom:0; width:0; height:100%; border-left:0.5px solid #FFFFFF; z-index:2; pointer-events:none; }
        .line-7{ left:22.5%; }
        .line-8{ left:49.17%; }
        .line-6{ left:72.78%; }

        .phone-wrapper{ position:absolute; z-index:3; }
        /* Левый большой смартфон - вертикальный, слева */
        .phone-left{ width:40.83%; height:85.35%; left:15%; top:7.3%; aspect-ratio:588/1579; }

        /* Правый передний смартфон - наклонен, показывает hero */
        .phone-right-front{ width:18.89%; height:26.49%; left:60%; top:24%; aspect-ratio:272/490;
          transform:perspective(1000px) rotateY(-8deg) rotateX(2deg); z-index:4; }

        /* Правый задний смартфон - сильнее наклонен, показывает projects */
        .phone-right-back{ width:18.89%; height:26.43%; left:70%; top:32%; aspect-ratio:272/489;
          transform:perspective(1000px) rotateY(-12deg) rotateX(3deg); z-index:3; opacity:0.95; }
          width:var(--sub-card-width, 26.389vw);
          max-width:var(--sub-card-max-width, 380px);
          height:var(--sub-card-height, 22.917vw);
          max-height:var(--sub-card-max-height, 330px);
          left:1.736vw;
          top:1.736vw;
          z-index:2;
        }
        @media (max-width:768px){ .case-sub-card-wrapper{ width:80%; height:auto; aspect-ratio:380/330; left:50%; top:5%; transform:translateX(-50%); } }
        .case-sub-card{ position:relative; width:100%; height:100%; background-size:cover; background-position:center; border-radius:1.389vw; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:2.778vw; padding:2vw; }
        @media (max-width:768px){ .case-sub-card{ border-radius:20px; gap:20px; padding:15px; } }
        .case-icon{ width:var(--icon-size, 10.208vw); max-width:var(--icon-max-size, 147px); height:auto; }
        @media (max-width:768px){ .case-icon{ width:80px; } }
        .view-case-btn{
          position:relative;
          width:var(--button-width, 18.846vw);
          max-width:var(--button-max-width, 271.62px);
          height:var(--button-height, 3.676vw);
          max-height:var(--button-max-height, 52.93px);
          border-radius:1.977vw;
          border:none;
          background:linear-gradient(45deg, #53897B 0%, #2E6456 100%);
          box-shadow:0px 0px 2.259vw rgba(134, 188, 174, 0.3);
          cursor:pointer;
          display:flex;
          align-items:center;
          justify-content:center;
          transition:all 0.3s;
        }
        .view-case-btn:hover{ transform:scale(1.05); }
        @media (max-width:768px){ .view-case-btn{ width:90%; height:44px; border-radius:22px; box-shadow:0px 0px 20px rgba(134, 188, 174, 0.3); } }
        .view-case-btn span{ font-family:'Geometria',sans-serif; font-weight:500; font-size:1.573vw; max-font-size:22.635px; line-height:90%; color:#FFFFFF; padding-right:3.472vw; white-space:nowrap; }
        @media (max-width:768px){ .view-case-btn span{ font-size:14px; padding-right:40px; } }
        .arrow-circle{
          position:absolute;
          right:0.694vw;
          width:var(--arrow-circle-size, 2.653vw);
          max-width:var(--arrow-circle-max-size, 38.22px);
          height:var(--arrow-circle-size, 2.653vw);
          max-height:var(--arrow-circle-max-size, 38.22px);
          border-radius:50%;
          background:#FFFFFF;
          display:flex;
          align-items:center;
          justify-content:center;
        }
        @media (max-width:768px){ .arrow-circle{ right:5px; width:32px; height:32px; } }
        .arrow-circle svg{ color:#000000; }

      `}</style>
    </div>
  )
}

function Header({ msg, locale }: { msg: any; locale: 'ru' | 'en' }) {
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
        <div className="md:hidden flex items-center justify-between">
          <Image src="/images/header_logo.svg" alt="PRIX Club" width={112} height={36} className="h-9 w-auto" priority />
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((v) => !v)}
            className="group relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white"
          >
            <span className={`absolute h-0.5 w-5 bg-white transition-all duration-200 ${isMenuOpen ? 'translate-y-0 rotate-45' : '-translate-y-1.5'}`} />
            <span className={`absolute h-0.5 w-5 bg-white transition-opacity duration-200 ${isMenuOpen ? 'opacity-0' : 'opacity-90'}`} />
            <span className={`absolute h-0.5 w-5 bg-white transition-all duration-200 ${isMenuOpen ? 'translate-y-0 -rotate-45' : 'translate-y-1.5'}`} />
          </button>
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
                <a href={`/${locale}/team`} className="hover:text-white">{msg.nav.team}</a>
                <a href={`/${locale}/cases`} className="hover:text-white">{msg.nav.works}</a>
                <a href={`/${locale}/services`} className="hover:text-white">{msg.nav.services}</a>
                <a href={`/${locale}/contacts`} className="hover:text-white">{msg.nav.contacts}</a>
              </nav>
              <div className="flex items-center gap-6 text-[13px]" >
                <a href={`/${locale}/news`} className="tracking-wide text-white/80 hover:text-white">{msg.nav.news}</a>
                <a href={`/${locale}/reviews`} className="tracking-wide text-white/80 hover:text-white">{msg.nav.reviews}</a>
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
            <a href={`/${locale}/team`} className="hover:text-white">{msg.nav.team}</a>
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
          <FooterColumn title="Навигация" rows={[msg.nav.main, msg.nav.about, msg.nav.team]} />
          <FooterColumn title="Разделы" rows={[msg.nav.works, msg.nav.services, msg.nav.contacts]} />
          <FooterColumn title="Инфо" rows={[msg.nav.news, msg.nav.reviews]} />
          <div className="md:col-span-3" />
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
        <div className="pt-3 text-center text-white/60 text-[12px]">{msg.footer.copy}</div>
      </div>
    </footer>
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
