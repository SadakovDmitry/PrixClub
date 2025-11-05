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
    <article className="relative rounded-[26px] overflow-hidden aspect-[1/0.9] bg-[#061018]">
      {/* фон */}
      <div className="absolute inset-0">
        <Image
          src={bg}
          alt=""
          fill
          className="object-contain object-center"
          sizes="(max-width: 768px) 100vw, 33vw"
          priority={false}
        />
      </div>

      {/* лёгкое затемнение, чтобы кнопка читалась */}
      <div className="absolute inset-0 bg-black/10" />

      {/* контент по центру */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center gap-6 px-4">
        {/* иконка */}
        <div className="w-44 h-24 text-[#E5E7EB] flex items-center justify-center relative">
          {icon}
        </div>

        {/* кнопка */}
        <a href={href} className="block">
          <button
            className="relative inline-flex items-center justify-center"
            style={{
              height: 'clamp(84px, 4vw, 64px)',
              width: 'clamp(240px, 15vw, 240px)'
            }}
          >
            {/* фон-кнопка */}
            <Image
              src="/images/projects/Rectangle 3270.svg"
              alt=""
              width={380}
              height={120}
              className="pointer-events-none select-none w-full h-full"
              style={{ objectFit: 'fill' }}
            />

            {/* текст по центру */}
            <span
              className="absolute inset-y-0 flex items-center text-white whitespace-nowrap"
              style={{
                left: 'clamp(40px, 2vw, 32px)',
                fontSize: 'clamp(14px, 1.5vw, 18px)'
              }}
            >
              Смотреть кейс
            </span>

            {/* стрелочка справа */}
            <span
              className="absolute inset-y-0 flex items-center"
              style={{ left: 'clamp(180px, 1.5vw, 24px)' }}
            >
              <Image
                src="/images/projects/Exclude.svg"
                alt=""
                width={24}
                height={24}
                style={{
                  width: 'clamp(18px, 1.5vw, 24px)',
                  height: 'clamp(18px, 1.5vw, 24px)'
                }}
              />
            </span>
          </button>
        </a>
      </div>
    </article>
  );
}

export default function Projects2Page({ params: { locale } }: { params: { locale: 'ru' | 'en' } }) {
  const msg = {
    ru: { nav: { main: 'Главная', about: 'О нас', team: 'Команда', works: 'Работы', services: 'Услуги', contacts: 'Контакты', news: 'НОВОСТИ', reviews: 'ОТЗЫВЫ' }, footer: { copy: '© PRIX Club, 2025' } },
    en: { nav: { main: 'Main Page', about: 'About Us', team: 'Team', works: 'Works', services: 'Services', contacts: 'Contacts', news: 'NEWS', reviews: 'REVIEWS' }, footer: { copy: '© PRIX Club, 2025' } },
  }[locale]
  // Прозрачность темного фильтра на первой фотографии (0..1), меньше значение = больше прозрачности
  const heroDarkenAlpha = 0.7

  // Компоненты иконок для карточек
  const Icon1 = () => <Image src="/images/projects/Vector.svg" alt="" fill className="object-contain" style={{ filter: 'brightness(1.1) contrast(0.85) grayscale(0.3)' }} />
  const Icon2 = () => <Image src="/images/projects/Union(1).svg" alt="" fill className="object-contain" style={{ filter: 'brightness(1.1) contrast(0.85) grayscale(0.3)' }} />
  const Icon3 = () => <Image src="/images/projects/Union.svg" alt="" fill className="object-contain" style={{ filter: 'brightness(1.1) contrast(0.85) grayscale(0.3)' }} />

  const cases: CaseItem[] = [
    {
      icon: <Icon1 />,
      bg: "/images/projects/case_1.png"
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

      {/* Frame 187 — Hero section с фоном и наложениями */}
      <section className="hero-section relative isolate w-screen left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] bg-black">
        <div className="relative w-full" style={{ height: '810px' }}>
          {/* Черный оверлей с прозрачностью */}
          <div className="hero-overlay absolute inset-0 bg-black opacity-15" />

          {/* Фоновое изображение */}
          <div className="hero-bg-image absolute inset-0 z-10">
            <Image
              src="/images/projects/DSC07362-111.png"
              alt=""
              fill
              sizes="100vw"
              className="object-cover opacity-75"
              priority
            />
          </div>

          {/* Первый градиентный прямоугольник (mix-blend-mode: normal) */}
          <div className="hero-gradient-1 absolute inset-0 z-10" style={{ opacity: 0.3 }}>
            <Image
              src="/images/projects/Rectangle 3257.svg"
              alt=""
              fill
              sizes="100vw"
              className="object-cover"
              style={{ mixBlendMode: 'normal' }}
            />
          </div>

          {/* Второй градиентный прямоугольник (mix-blend-mode: multiply) */}
          <div className="hero-gradient-2 absolute inset-0 z-10" style={{ opacity: 0.4 }}>
            <Image
              src="/images/projects/Rectangle 3256.svg"
              alt=""
              fill
              sizes="100vw"
              className="object-cover"
              style={{ mixBlendMode: 'multiply' }}
            />
          </div>

          {/* Темный фильтр поверх прямоугольников, но под текстом */}
          <div className="hero-darken-filter absolute inset-0 bg-black" style={{ opacity: heroDarkenAlpha, zIndex: 15 }} />

          {/* Заголовок */}
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <h1 className="hero-title">Ассоциация Экспортеров и Импортеров</h1>
          </div>
        </div>
      </section>

      {/* Frame 2087328042 — Белая секция с текстом */}
      <section className="w-full bg-white py-24 px-4 lg:px-8">
        <div className="mx-auto max-w-[1020px]">
          <p className="text-[26.9995px] leading-[34px] font-extrabold text-[#000000]">
            <span className="text-[#1B4499]">Lorem ipsum</span> — dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </section>

      {/* Frame 2087328045 — Черная секция с SVG и повернутыми картинками */}
      <section className="relative isolate w-screen left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] bg-black overflow-hidden">
        <div className="relative w-full">
          <div className="rotated-images-container">
            <Image
              src="/images/projects/Frame 2087328045.svg"
              alt=""
              fill
              sizes="100vw"
              className="object-cover"
              priority={false}
            />
          </div>
        </div>
      </section>

      {/* Frame 2087328046 — Нижняя черная секция с текстом */}
      <section className="w-full bg-black py-12 px-4 lg:px-8">
        <div className="mx-auto max-w-[846px]">
          <p className="text-[26.9995px] leading-[34px] font-extrabold">
            <span className="text-[#4A84FB]">Lorem ipsum</span> <span className="text-white">— dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
          </p>
        </div>
      </section>

      {/* Frame 2087328057 — Верхняя секция с двумя изображениями */}
      <section className="relative isolate w-screen left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] bg-black">
        <div className="relative w-full grid grid-cols-2" style={{ aspectRatio: '1440/720' }}>
          {/* Левое изображение */}
          <div className="relative w-full h-full">
            <Image
              src="/images/projects/2.png"
              alt=""
              fill
              sizes="50vw"
              className="object-contain"
              priority={false}
            />
          </div>
          {/* Правое изображение */}
          <div className="relative w-full h-full">
            <Image
              src="/images/projects/4.png"
              alt=""
              fill
              sizes="50vw"
              className="object-contain"
              priority={false}
            />
          </div>
        </div>
      </section>

      {/* Frame 2087328056 — Секция с изображением корабля и синим фильтром */}
      <section className="relative isolate w-screen left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] bg-black">
        <div className="relative w-full" style={{ aspectRatio: '1440/809' }}>
          {/* Фоновое изображение корабля */}
          <div className="absolute inset-0">
            <Image
              src="/images/projects/shutterstock_2477024391 2.png"
              alt=""
              fill
              sizes="100vw"
              className="object-contain"
              priority={false}
            />
          </div>
          {/* Синий фильтр */}
          <div className="absolute inset-0">
            <Image
              src="/images/projects/Rectangle 3321.png"
              alt=""
              fill
              sizes="100vw"
              className="object-contain"
              style={{ mixBlendMode: 'soft-light' }}
            />
          </div>
        </div>
      </section>

      {/* Frame 2087328055 — Секция с двумя изображениями снизу */}
      <section className="relative isolate w-screen left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] bg-black">
        <div className="relative w-full grid grid-cols-2" style={{ aspectRatio: '1440/509' }}>
          {/* Левое изображение */}
          <div className="relative w-full h-full">
            <Image
              src="/images/projects/5.png"
              alt=""
              fill
              sizes="50vw"
              className="object-cover"
              priority={false}
            />
          </div>
          {/* Правое изображение */}
          <div className="relative w-full h-full">
            <Image
              src="/images/projects/3.png"
              alt=""
              fill
              sizes="50vw"
              className="object-cover"
              priority={false}
            />
          </div>
        </div>
      </section>

      {/* Frame 2087328054 — Нижняя секция с одним изображением */}
      <section className="relative isolate w-screen left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] bg-black">
        <div className="relative w-full" style={{ aspectRatio: '1440/626' }}>
          <Image
            src="/images/projects/1.png"
            alt=""
            fill
            sizes="100vw"
            className="object-contain"
            priority={false}
          />
        </div>
      </section>

      {/* Frame 178 — заглушка вместо модуля */}
      <section className="relative w-full bg-white py-0">
        <div className="relative mx-auto max-w-[1440px]" style={{ aspectRatio: '1440/840' }}>
          <Image src="/images/projects/Frame 178.svg" alt="Frame 178 placeholder" fill sizes="100vw" className="object-contain" />
        </div>
      </section>

      {/* Секция "Еще кейсы" */}
      <section
        id="more-cases"
        className="w-full px-4 md:px-8 lg:px-12 py-16 bg-black"
      >
        <h2 className="text-center text-2xl md:text-3xl font-semibold text-white mb-10">
          Еще кейсы
        </h2>

        <div
          className="
            mx-auto
            grid
            gap-20
            sm:grid-cols-2
            lg:grid-cols-3
            max-w-6xl
          "
        >
          {cases.map((c, i) => (
            <CaseCard key={i} {...c} />
          ))}
        </div>
      </section>

      <Footer msg={msg} />

      <style jsx>{`
        .hero-section {
          min-height: 810px;
        }
        .hero-overlay {
          position: absolute;
          inset: 0;
          background: #000000;
          opacity: 0.25;
        }
        .hero-bg-image {
          position: absolute;
          inset: 0;
        }
        .hero-gradient-1,
        .hero-gradient-2 {
          position: absolute;
          inset: 0;
        }
        .hero-title {
          font-family: 'Geometria', sans-serif;
          font-weight: 700;
          font-size: 75.7703px;
          line-height: 100%;
          text-align: center;
          background: linear-gradient(73.41deg, #1B4499 4.02%, #4A84FB 84.71%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          max-width: 1094px;
          margin: 0 auto;
        }
        .rotated-images-container {
          position: relative;
          width: 100%;
          aspect-ratio: 1440/909;
          min-height: 0;
        }
        @media (max-width: 768px) {
          .hero-title {
            font-size: clamp(32px, 8vw, 75.7703px);
            padding: 0 1rem;
          }
        }
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
