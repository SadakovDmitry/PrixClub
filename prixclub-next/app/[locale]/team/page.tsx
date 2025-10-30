"use client"
import Image from "next/image"
import { useState } from "react"
import { usePathname, useRouter } from "next/navigation"
import { geometria } from '../../../src/fonts/geometria'

/* ──────────────────────────────────────────────────────────────
   TEAM PAGE (первый экран 1440×810 в точности как на макете)
   Хедер/футер взяты из страницы "О нас".
   ────────────────────────────────────────────────────────────── */

export default function TeamPage({ params: { locale } }: { params: { locale: "ru" | "en" } }) {
  const t = (locale === "en")
    ? {
      title: "PRIX Club\nproudly presents its team",
      text:
        "A union of exceptional professionals where PR strategists, IT experts, analysts, and visionary creatives converge under one roof. Their energy and interdisciplinary mastery intertwine in a shared pursuit: to craft bold concepts, bring innovative solutions to life, and pave the way to truly remarkable achievements."
    }
    : {
      title: "PRIX Club\nс гордостью представляет\nсвою команду",
      text:
        "Союз уникальных профессионалов, где под одной крышей собрались PR-стратеги, IT-специалисты, аналитики и творцы новых идей. Их энергия и междисциплинарное мастерство переплетаются в едином стремлении — создавать смелые концепции, воплощать нестандартные решения и прокладывать путь к выдающимся результатам."
    }

  const msg = {
    ru: {
      nav: { main: 'Главная', about: 'О нас', team: 'Команда', works: 'Работы', services: 'Услуги', contacts: 'Контакты', news: 'НОВОСТИ', reviews: 'ОТЗЫВЫ' },
      footer: { copy: '© PRIX Club, 2025' }
    },
    en: {
      nav: { main: 'Main Page', about: 'About Us', team: 'Team', works: 'Works', services: 'Services', contacts: 'Contacts', news: 'NEWS', reviews: 'REVIEWS' },
      footer: { copy: '© PRIX Club, 2025' }
    }
  }[locale]

  return (
    <div className={`${geometria.className} team-font`}>
      {/* Готовый хедер как на странице «О нас» */}
      <Header msg={msg} locale={locale} />

      {/* ───────────────────────── HERO 1440×810 (pixel-perfect) ───────────────────────── */}
      <section className="team-hero">
        {/* Фоновая фотография строго по координатам макета */}
        <div className="bg-photo" aria-hidden>
          <Image
            src="/images/team/Hero_background.svg"
            alt=""
            fill
            priority
            sizes="1440px"
            className="object-cover"
            style={{ opacity: 1 }}
          />
        </div>

        {/* Hue-оверлей (#74AA9C, mix-blend: hue) как в фигме */}
        {/* <div className="hue-layer" aria-hidden /> */}

        {/* Градиентный заголовок в точных координатах */}
        <h1
          className="hero-title"
          dangerouslySetInnerHTML={{ __html: t.title.replace(/\n/g, "<br/>") }}
        />

        {/* Описание в точных координатах */}
        <p className="hero-sub">{t.text}</p>
      </section>

      {/* Готовый футер как на странице «О нас» */}
      <PhotoSection />
      <OurTeam />
      <CultureSection />
      <Footer msg={msg} locale={locale} />

      <style jsx>{`
        /* Канва 1440×810 по центру, чтобы соблюсти пиксели */
        .team-hero {
          position: relative;
          width: 100vw;
          height: calc(100vw * 0.493);
          margin: 0 0;
          background: #000; /* как в макете */
          color: #fff;
          overflow: hidden;
        }

        /* shutterstock слой: 1440×958; top = center + 74px */
        .bg-photo {
          position: absolute;
          width: 100vw;
          height: calc(100vw * 0.596);
          left: calc(50% - 50vw);
          top: -13%;
          pointer-events: none;
        }

        /* Rectangle 3265 — hue */
        .hue-layer {
          position: absolute;
          width: 100vw;
          height: calc(100vw * 0.494);
          left: calc(50% - 50vw);
          top: 0;
          background: #74AA9C;
          mix-blend-mode: hue;
          pointer-events: none;
        }

        /* Заголовок: 963×152, top: 206 px, центрированный */
        .hero-title {
          position: absolute;
          width: 86.875%;
          max-width: 1963px;
          height: auto;
          left: 6.5625%;
          top: clamp(33px, 5.36vw, 106px);
          margin: 0;
          text-align: center;
          font-family: 'Geometria';
          font-style: normal;
          font-weight: 700;
          font-size: clamp(12px, 4.26vw, 75.77px);
          line-height: 100%;
          background: linear-gradient(89.26deg, #53897B 0.3%, #86BCAE 27.76%, #53897B 56.54%, #86BCAE 77.7%, #2E6456 99.68%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-fill-color: transparent;
          white-space: pre-line;
        }

        @media (max-width: 523px) {
          .hero-title {
             top: clamp(13px, 1.36vw, 106px);
          }
        }

        /* Параграф: 1189×230, top: 433.71 px, центрированный */
        .hero-sub {
          position: absolute;
          width: 82.57%;
          height: calc(100vw * 0.16);
          max-height: 230px;
          left: 8.715%;
          top: clamp(37px, 25.15vw, 333px);
          margin: 0;
          text-align: center;
          font-family: 'Geometria';
          font-style: normal;
          font-weight: 300;
          font-size: clamp(12px, 2.52vw, 36.22px);
          line-height: clamp(12px, 2.79vw, 46px);
          color: #FFFFFF;
        }

        @media (max-width: 523px) {
          .hero-sub {
              top: clamp(27px, 20.15vw, 333px);
              font-size: clamp(8px, 2.52vw, 36.22px);
          }
        }

      `}</style>
      <style jsx global>{`
          /* Принудительно применяем загруженный next/font Geometria ко ВСЕМ элементам страницы */
          .team-font, .team-font * {
            font-family: ${geometria.style.fontFamily}, sans-serif !important;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
        `}</style>
    </div>
  )
}

/* ──────────────────────────────────────────────────────────────
   Ниже — ХЕДЕР и ФУТЕР, перенесённые из страницы «О нас»
   (без изменений визуального поведения).
   Источник: файл about/page.tsx.  :contentReference[oaicite:1]{index=1}
   ────────────────────────────────────────────────────────────── */

function Header({ msg, locale }: { msg: any; locale: "ru" | "en" }) {
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

function PhotoSection() {
  return (
    <section className="photo-section" aria-label="Team photo section">
      {/* Отрисовываем SVG в точном масштабе макета — 1440×810, по центру */}
      <div className="photo-wrap">
        <img
          src="/images/team/Photo_section.svg"
          alt=""
          className="photo-image"
        />
      </div>

      <style jsx>{`
        .photo-section {
          background: #000;              /* на случай прозрачностей в SVG */
        }
        .photo-wrap {
          width: 100vw;
          max-width: 1840px;
          margin: 0 auto;
          /* если у макета точно 1440×810 — фиксируем высоту для «пиксель в пиксель» */
          height: calc(100vw * 0.5625);
          max-height: 1810px;
          display: grid;
          place-items: center;
          overflow: hidden;
        }
        .photo-image {
          width: 100vw;
          max-width: 1840px;
          height: calc(100vw * 0.5625);
          max-height: 1810px;
          object-fit: cover;
        }
      `}</style>
    </section>
  )
}

function OurTeam() {
  return (
    <>
      {/* Desktop версия */}
      <section className="ourteam ourteam-desktop">
        <div className="ourteam-wrap">
          {/* ВЕРТИКАЛЬНЫЕ ЛИНИИ (как в фигме: 50% - 1305 + 846/1305/1764) */}
          <span className="vline v1" />
          <span className="vline v2" />
          <span className="vline v3" />

          {/* ───────── ТОП, ЦЕНТР ───────── */}
          <TeamCard className="card c-top" name="Name Surname" />
          <div className="pos pos-top">Position</div>
          <p className="txt txt-top">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat.
          </p>

          {/* ───────── РЯД 2: ЛЕВО / ПРАВО ───────── */}
          <TeamCard className="card c-leftTop" name="Name Surname" />
          <div className="pos pos-leftTop">Position</div>
          <p className="txt txt-leftTop">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <TeamCard className="card c-rightTop" name="Name Surname" />
          <div className="pos pos-rightTop">Position</div>
          <p className="txt txt-rightTop">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          {/* ───────── РЯД 3: СМЕЩЁННЫЙ ЦЕНТР-ЛЕВО ───────── */}
          <TeamCard className="card c-mid" name="Name Surname" />
          <div className="pos pos-mid">Position</div>
          <p className="txt txt-mid">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          {/* ───────── РЯД 4: НИЗ ЛЕВО / ПРАВО ───────── */}
          <TeamCard className="card c-leftBottom" name="Name Surname" />
          <div className="pos pos-leftBottom">Position</div>
          <p className="txt txt-leftBottom">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <TeamCard className="card c-rightBottom" name="Name Surname" />
          <div className="pos pos-rightBottom">Position</div>
          <p className="txt txt-rightBottom">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </section>

      {/* Mobile версия */}
      <section className="ourteam ourteam-mobile">
        <div className="ourteam-mobile-wrap">
          <div className="team-mobile-item">
            <TeamCard className="card" name="Name Surname" />
            <div className="pos">Position</div>
            <p className="txt">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <div className="team-mobile-item">
            <TeamCard className="card" name="Name Surname" />
            <div className="pos">Position</div>
            <p className="txt">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="team-mobile-item">
            <TeamCard className="card" name="Name Surname" />
            <div className="pos">Position</div>
            <p className="txt">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="team-mobile-item">
            <TeamCard className="card" name="Name Surname" />
            <div className="pos">Position</div>
            <p className="txt">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="team-mobile-item">
            <TeamCard className="card" name="Name Surname" />
            <div className="pos">Position</div>
            <p className="txt">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="team-mobile-item">
            <TeamCard className="card" name="Name Surname" />
            <div className="pos">Position</div>
            <p className="txt">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </section>

      {/* ЛОКАЛЬНЫЕ стили */}
      <style jsx>{`
        .ourteam { background:#fff; }

        /* Desktop версия */
        .ourteam-desktop {
          display: block;
        }
        .ourteam-mobile {
          display: none;
        }
        .ourteam-wrap {
          position:relative;
          width:100vw;
          max-width:1440px;
          height:calc(100vw * 1.8125);
          max-height:2610px;
          margin:0 auto;
        }

        .vline{
          position:absolute;
          top:0;
          height:100%;
          width:calc(100vw * 0.000694);
          max-width:1px;
          background:#2E6456;
          opacity:.45;
          z-index:0;
          pointer-events:none;
        }
        .v1{ left:calc(50% - 31.875%); }
        .v2{ left:50%; transform:translateX(-50%); }
        .v3{ left:calc(50% + 31.875%); }

        .pos{
          position:absolute;
          font-family:'Geometria';
          font-weight:500;
          font-size:clamp(12px, 1.75vw, 25.26px);
          line-height:110%;
          color:#000;
          z-index:2;
        }
        .pos-top{ width:21.458%; max-width:309px; left:calc(50% - 10.729% + .5px); top:23.18%; text-align:center; }
        .pos-leftTop{ width:14.65%; max-width:211px; left:29.58%; top:33.56%; }
        .pos-rightTop{ width:14.65%; max-width:211px; left:55.76%; top:45.63%; text-align:right; }
        .pos-mid{ width:14.65%; max-width:211px; left:50.83%; top:61.74%; }
        .pos-leftBottom{ width:14.65%; max-width:211px; left:29.58%; top:77.85%; }
        .pos-rightBottom{ width:14.65%; max-width:211px; left:55.76%; top:89.92%; text-align:right; }

        .txt{
          position:absolute;
          font-family:'Geometria';
          font-weight:300;
          font-size:clamp(12px, 1.53vw, 22px);
          line-height:110%;
          color:#000;
          z-index:2;
        }
        .txt-top{ width:45.625%; max-width:657px; left:calc(50% - 22.8125% + .5px); top:25.29%; text-align:center; }
        .txt-leftTop{ width:24.03%; max-width:346px; left:29.58%; top:36.28%; }
        .txt-rightTop{ width:34.097%; max-width:491px; left:36.32%; top:48.35%; text-align:right; }
        .txt-mid{ width:24.167%; max-width:348px; left:50.83%; top:64.44%; }
        .txt-leftBottom{ width:29.236%; max-width:421px; left:29.58%; top:80.57%; }
        .txt-rightBottom{ width:35.486%; max-width:511px; left:34.93%; top:92.64%; text-align:right; }

        /* Mobile версия */
        @media (max-width: 1023px) {
          .ourteam-desktop {
            display: none;
          }
          .ourteam-mobile {
            display: block;
          }
          .ourteam-mobile-wrap {
            display: flex;
            flex-wrap: wrap;
            flex-direction: row;
            justify-content: center;
            align-items: flex-start;
            gap: 20px;
            padding: 40px 20px;
            width: 100%;
          }
          .team-mobile-item {
            width: calc(50% - 10px);
            max-width: 160px;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 8px;
          }
          .team-mobile-item .card {
            position: relative;
            width: 100%;
            max-width: 140px;
            aspect-ratio: 282/458;
          }
          .team-mobile-item .pos,
          .team-mobile-item .txt {
            position: relative;
            text-align: center;
            font-size: clamp(10px, 2vw, 14px);
            line-height: 140%;
            width: 100%;
            color: #000;
          }
          .team-mobile-item .txt {
            font-size: clamp(9px, 1.5vw, 12px);
          }
        }
      `}</style>

      {/* ГЛОБАЛЬНЫЕ стили ДЛЯ КАРТОЧЕК (только desktop) */}
      <style jsx global>{`
        .ourteam-wrap .card{
          position:absolute;
          width:clamp(140px, 19.58vw, 282px);
          height:clamp(232px, 31.81vw, 458px);
          z-index:1;
        }
        .ourteam-wrap .c-top{ left:calc(50% - clamp(70.5px, 9.79vw, 141px)); top:4.6%; }
        .ourteam-wrap .c-leftTop{ left:8%; top:33.56%; }
        .ourteam-wrap .c-rightTop{ left:72%; top:33.56%; }
        .ourteam-wrap .c-mid{ left:30%; top:55.71%; }
        .ourteam-wrap .c-leftBottom{ left:8%; top:77.85%; }
        .ourteam-wrap .c-rightBottom{ left:72%; top:77.85%; }
      `}</style>
    </>
  )
}

function TeamCard({ className, name }: { className?: string; name: string }) {
  return (
    <div className={className} style={{ padding: 0 }} >
      <div className="inner">
        <img src="/images/team/man.png" alt="" className="photo" width={282} height={458} />

        <div className="fade" />

        <div className="name-wrap">
          <div className="name-base" />
          <div className="name-texture" />
          {/* <div className="name-green" />
          <div className="name-glass" /> */}
          <div className="name">{name}</div>
        </div>
      </div>

      <style jsx>{`
        .inner{
          position:relative;
          width:100%; height:100%;
          border-radius:clamp(10px, 1.39vw, 20px); overflow:hidden; background:#000;
        }
        .photo{
          display:block; width:100%; height:100%; object-fit:cover;
        }
        .fade{
          position:absolute; left:0; top:63.32%; width:100%; height:36.68%;
          background:linear-gradient(180deg, rgba(0,0,0,0) 0%, #000 100%);
          pointer-events:none;
        }
        .name-wrap{
          position:absolute;
          left:5.32%;
          top:77.07%;
          width:89.36%;
          max-width:252px;
          height:19.65%;
          max-height:90px;
        }
        .name-base{ position:absolute; inset:0; border-radius:clamp(7.5px, 1.04vw, 15px); background:#000; }
        .name-texture{
          position:absolute; inset:0; border-radius:clamp(7.5px, 1.04vw, 15px); opacity:.99;
          background-image:url('/images/team/sub_card_background.png'); background-size:cover; background-position:center;
        }
        .name-green{ position:absolute; inset:0; border-radius:clamp(7.5px, 1.04vw, 15px); background:#2E6456; opacity:.75; mix-blend-mode:multiply; }
        .name-glass{ position:absolute; inset:0; border-radius:clamp(7px, 0.97vw, 14px); background:rgba(255,255,255,.05); }
        .name{
          position:absolute; left:50%; top:27%; transform:translate(-50%,-50%);
          width:55.67%; max-width:157px; height:13.1%; max-height:60px; display:grid; place-items:center;
          font-family:'Geometria'; font-weight:700; font-size:clamp(14px, 1.88vw, 27px); line-height:110%; color:#fff; text-align:center;
        }
      `}</style>
    </ div>
  )
}

function CultureSection() {
  return (
    <section className="culture">
      <div className="frame">
        {/* 1) Фон — НЕ обрезаем: 100vw × auto */}
        <img
          src="/images/team/culture_and_comand_background.svg"
          alt=""
          className="bg-img"
        />

        {/* 2) Оверлеи поверх фона, но ниже контента */}
        {/* <div className="overlay-hue" /> */}
        {/* <div className="overlay-multiply" /> */}

        {/* 3) «Артборд» 1440×960, масштабируем к ширине экрана */}
        <div className="board">
          {/* Подложка и фото слева */}
          <div className="photo-shadow" />
          <img
            src="/images/team/culture_and_command_photo.png"
            alt=""
            className="photo-el"
            width={486}
            height={374}
          />

          {/* Текст справа */}
          <h2 className="title">Культура и команда</h2>
          <p className="lead">
            В PRIX Club царит атмосфера сотрудничества и взаимного доверия.
            Каждый специалист не просто вносит свою экспертизу, но и ежедневно
            учится у коллег, обогащая общий опыт команды. Этот дух постоянного
            развития и открытого диалога помогает нам создавать решения,
            которые действительно работают на успех клиента.
          </p>

          {/* Цитата снизу */}
          <div className="quote-left">«</div>
          <p className="quote-text">
            Мы верим, что сила команды заключается в умении делиться знаниями и
            расти вместе. Именно это позволяет нам предлагать лучшие стратегии и
            реализовывать проекты, которые превосходят ожидания
          </p>
          <div className="quote-right">»</div>
        </div>
      </div>

      <style jsx>{`
        .culture {
          background: #000;
        }

        /* Контейнер: по ширине экрана; высота равна высоте фоновой картинки */
        .frame {
          position: relative;
          width: 100vw;
          margin: 0 auto;
          overflow: hidden;
          isolation: isolate;
          font-family: 'Geometria';
        }

        /* Фон — без обрезки */
        .bg-img {
          display: block;
          width: 100vw;
          height: auto;
          opacity: 1; /* как в фигме */
        }

        /* Оверлеи притягиваем к рамке фона (растягиваются по его фактической высоте) */
        .overlay-hue,
        .overlay-multiply,
        .board {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          /* Высота берём равной высоте фонового <img> через 100%,
             т.к. родитель .frame подстраивается под <img> */
          height: 100%;
        }

        .overlay-hue {
          background: #74aa9c;
          mix-blend-mode: color;
          z-index: 1;
          pointer-events: none;
        }
        .overlay-multiply {
          background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0) 0%,
            rgba(0, 0, 0, 0.5) 100%
          );
          mix-blend-mode: multiply;
          z-index: 2;
          pointer-events: none;
        }

        /* Артборд 1440×960: масштабируем к 100vw,
           тем самым сохраняем фигмовские координаты */
        .board {
          z-index: 3; /* выше оверлеев */
          width: 100vw;
          height: calc(100vw * 0.6667);
          transform-origin: top left;
          transform: scale(calc(100vw / 1440));
        }

        /* Подложка и фото (точные координаты из макета) */
        .photo-shadow {
          position: absolute;
          left: 8.33%;
          top: 13.33%;
          width: 33.75%;
          max-width: 486px;
          height: 38.9%;
          max-height: 373.36px;
          background: rgba(255, 255, 255, 0.04);
          border-radius: clamp(12px, 1.76vw, 25.31px);
        }
        .photo-el {
          position: absolute;
          left: 8.33%;
          top: 13.33%;
          width: 33.75%;
          max-width: 486px;
          height: 38.9%;
          max-height: 373.36px;
          object-fit: cover;
          border-radius: clamp(12px, 1.76vw, 25.31px);
          display: block;
          z-index: 1; /* над подложкой, внутри board */
        }

        /* Текст справа */
        .title {
          position: absolute;
          width: 42.15%;
          max-width: 607px;
          left: 50.85%;
          top: 13.33%;
          margin: 0;
          font-weight: 500;
          font-size: clamp(12px, 4.17vw, 60px);
          line-height: clamp(15px, 5.21vw, 75px);
          color: #fff;
        }
        .lead {
          position: absolute;
          width: 42.15%;
          max-width: 607px;
          left: 50.85%;
          top: 32.5%;
          margin: 0;
          font-weight: 400;
          font-size: clamp(7px, 1.56vw, 22.52px);
          line-height: clamp(8px, 1.94vw, 28px);
          color: #fff;
        }
        @media (max-width: 423px) {
          .lead {
            top: 22.5%;
            width: 49.15%;
            left: 45.85%;
          }
          .title {
            width: 49.15%;
            left: 45.85%;
          }
        }

        /* Цитата */
        .quote-left,
        .quote-right {
          position: absolute;
          width: clamp(24px, 3.33vw, 48px);
          height: clamp(53px, 11.15vw, 107px);
          font-weight: 400;
          font-size: clamp(10px, 5.93vw, 85.33px);
          line-height: clamp(33px, 7.43vw, 107px);
          text-align: center;
          color: #fff;
        }
        .quote-left {
          left: calc(50% - clamp(300px, 41.67vw, 600px));
          top: 62.5%;
        }
        .quote-right {
          left: calc(50% + clamp(300px, 41.67vw, 600px));
          top: 80.52%;
        }

        @media (max-width: 723px) {
          .quote-left {
            left: 10%;
          }
          .quote-right {
            left: 90%;
          }
        }
        .quote-text {
          position: absolute;
          width: 66.875%;
          max-width: 963px;
          left: 16.5625%;
          top: 69.48%;
          height: 16.67%;
          max-height: 160px;
          margin: 0;
          font-weight: 500;
          font-size: clamp(8px, 2.22vw, 32px);
          line-height: clamp(10px, 2.78vw, 40px);
          text-align: center;
          color: #fff;
        }
      `}</style>
    </section>
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
