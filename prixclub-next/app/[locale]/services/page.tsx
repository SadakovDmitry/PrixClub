"use client"
import Image from "next/image"
import { useState } from "react"
import { usePathname, useRouter } from "next/navigation"
import { geometria } from '../../../src/fonts/geometria'

export default function ServicesPage({ params: { locale } }: { params: { locale: "ru" | "en" } }) {
    const t = (locale === "en")
        ? {
            title: "PRIX Club",
            text1: "Offers a comprehensive approach to communications, combining expertise in PR, digital, and technological solutions.",
            text2: "We believe that today's challenges demand the synergy of creativity, technology, and strategic thinking.",
            text3: "The project team operates at the intersection of multiple disciplines to achieve the client's goals with maximum precision and impact."
        }
        : {
            title: "PRIX Club",
            text1: "Предлагает комплексный подход к коммуникациям, объединяя экспертизу в PR, digital и технологических решениях.",
            text2: "Мы уверены, что современные вызовы требуют синергии креатива, технологий и стратегического мышления.",
            text3: "Команда проекта работает на стыке нескольких дисциплин, чтобы реализовать цель клиента с максимальной точностью и эффектом."
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
        <div className={`${geometria.className} services-font`}>
            {/* Header */}
            <Header msg={msg} locale={locale} />

            {/* Main content section - 1440x957px */}
            <section className="services-hero">
                {/* Background image layer */}
                <img
                    src="/images/services/services_background.svg"
                    alt=""
                    className="bg-photo"
                />

                {/* Hue overlay with multiply blend mode */}
                {/* <div className="rectangle-3296" aria-hidden />
                <div className="rectangle-3295" aria-hidden />
                <div className="rectangle-3292-dark" aria-hidden />
                <div className="rectangle-3290-dark" aria-hidden />
                <div className="rectangle-3291-left" aria-hidden />
                <div className="rectangle-3291-right" aria-hidden />
                <div className="rectangle-3265" aria-hidden /> */}

                {/* Main Title */}
                <h1 className="hero-title">{t.title}</h1>

                {/* Text paragraphs */}
                <p className="hero-text1">{t.text1}</p>
                <p className="hero-text2">{t.text2}</p>
                <p className="hero-text3">{t.text3}</p>
            </section>

            {/* Services Sections */}
            <ServicesSection locale={locale} />
            <LastSection locale={locale} />

            {/* Footer */}
            <Footer msg={msg} locale={locale} />

            <style jsx>{`
        /* Main container - height determined by background image */
        .services-hero {
          position: relative;
          width: 1440px;
          height: 790px; /* Match background image height */
          margin: 0 auto;
          background: #000000;
          color: #fff;
          overflow: hidden;
        }

        /* Background photo layer: natural size, no cropping */
        .bg-photo {
          position: absolute;
          width: 1813px;
          height: 957px;
          right: 0px;
          top: -90px;
          object-fit: none; /* Do not scale/crop the image */
          pointer-events: none;
        }

        /* Rectangle 3296: width 145px, height 957px, left 1295px, top 0px */
        .rectangle-3296 {
          position: absolute;
          width: 145px;
          height: 957px;
          left: 1295px;
          top: 0px;
          background: #74AA9C;
          mix-blend-mode: multiply;
          transform: matrix(-1, 0, 0, 1, 0, 0);
          pointer-events: none;
        }

        /* Rectangle 3295: width 841px, height 957px, left 0px, top 0px */
        .rectangle-3295 {
          position: absolute;
          width: 841px;
          height: 957px;
          left: 0px;
          top: 0px;
          background: #74AA9C;
          mix-blend-mode: multiply;
          transform: matrix(-1, 0, 0, 1, 0, 0);
          pointer-events: none;
        }

        /* Rectangle 3292: width 145px, height 957px, left 1295px, top 0px - dark overlay */
        .rectangle-3292-dark {
          position: absolute;
          width: 145px;
          height: 957px;
          left: 1295px;
          top: 0px;
          background: #000000;
          mix-blend-mode: multiply;
          opacity: 0.15;
          transform: matrix(-1, 0, 0, 1, 0, 0);
          pointer-events: none;
        }

        /* Rectangle 3290: width 841px, height 957px, left 0px, top 0px - dark overlay */
        .rectangle-3290-dark {
          position: absolute;
          width: 841px;
          height: 957px;
          left: 0px;
          top: 0px;
          background: #000000;
          mix-blend-mode: multiply;
          opacity: 0.15;
          transform: matrix(-1, 0, 0, 1, 0, 0);
          pointer-events: none;
        }

        /* Rectangle 3291 left: width 260px, height 957px */
        .rectangle-3291-left {
          position: absolute;
          width: 260px;
          height: 957px;
          left: calc(50% - 260px/2 - 9px);
          top: 0px;
          background: linear-gradient(90deg, #000000 0%, rgba(0, 0, 0, 0) 100%);
          transform: matrix(-1, 0, 0, 1, 0, 0);
          pointer-events: none;
        }

        /* Rectangle 3291 right: width 260px, height 957px */
        .rectangle-3291-right {
          position: absolute;
          width: 260px;
          height: 957px;
          left: calc(50% - 260px/2 + 705px);
          top: 0px;
          background: linear-gradient(90deg, #000000 0%, rgba(0, 0, 0, 0) 100%);
          pointer-events: none;
        }

        /* Rectangle 3265: full width hue overlay */
        .rectangle-3265 {
          position: absolute;
          width: 1440px;
          height: 957px;
          left: calc(50% - 1440px/2);
          top: calc(50% - 957px/2 + 0.5px);
          background: #74AA9C;
          mix-blend-mode: hue;
          pointer-events: none;
        }

        /* Main Title: width 408px, height 104px, left 120px, top 169px */
        .hero-title {
          position: absolute;
          width: 408px;
          height: 104px;
          left: 120px;
          top: 169px;
          margin: 0;
          font-family: 'Geometria';
          font-style: normal;
          font-weight: 700;
          font-size: 82.5208px;
          line-height: 104px;
          color: #FFFFFF;
        }

        /* Text 1: width 606px, height 102px, left 120px, top 354px */
        .hero-text1 {
          position: absolute;
          width: 606px;
          height: 102px;
          left: 120px;
          top: 354px;
          margin: 0;
          font-family: 'Geometria';
          font-style: normal;
          font-weight: 700;
          font-size: 27px;
          line-height: 34px;
          color: #FFFFFF;
        }

        /* Text 2: width 579px, height 50px, left 120px, top 559px */
        .hero-text2 {
          position: absolute;
          width: 579px;
          height: 50px;
          left: 120px;
          top: 559px;
          margin: 0;
          font-family: 'Geometria';
          font-style: normal;
          font-weight: 400;
          font-size: 20px;
          line-height: 25px;
          color: #FFFFFF;
        }

        /* Text 3: width 500px, height 75px, left 120px, top 631px */
        .hero-text3 {
          position: absolute;
          width: 500px;
          height: 75px;
          left: 120px;
          top: 631px;
          margin: 0;
          font-family: 'Geometria';
          font-style: normal;
          font-weight: 400;
          font-size: 20px;
          line-height: 25px;
          color: #FFFFFF;
        }

        /* Scaling for screens <1440px - maintain proportions */
        @media (max-width: 1440px) {
          .services-hero {
            transform: scale(calc(100vw / 1440));
            transform-origin: top center;
            height: calc(957px * (100vw / 1440));
          }
        }

        /* Mobile layout */
        @media (max-width: 768px) {
          .services-hero {
            transform: none;
            width: 100%;
            height: auto;
            min-height: 520px;
            padding: 64px 20px 40px;
          }
          .services-hero::after {
            content: "";
            position: absolute;
            inset: 0;
            background: linear-gradient(180deg, rgba(0,0,0,.55) 0%, rgba(0,0,0,.35) 100%);
            pointer-events: none;
          }
          .bg-photo {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            top: 0;
            right: auto;
            object-fit: cover;
            opacity: .9;
          }
          .hero-title,
          .hero-text1,
          .hero-text2,
          .hero-text3 {
            position: relative;
            left: auto;
            top: auto;
            width: auto;
            height: auto;
            z-index: 1;
          }
          .hero-title {
            font-size: 40px;
            line-height: 1.1;
            margin: 0 0 16px 0;
          }
          .hero-text1 {
            font-size: 18px;
            line-height: 1.35;
            margin: 0 0 10px 0;
            max-width: none;
          }
          .hero-text2,
          .hero-text3 {
            font-size: 15px;
            line-height: 1.5;
            margin: 0 0 8px 0;
            max-width: none;
          }
        }
      `}</style>
            <style jsx global>{`
          /* Apply Geometria font to all elements */
          .services-font, .services-font * {
            font-family: ${geometria.style.fontFamily}, sans-serif !important;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
        `}</style>
        </div>
    )
}

/* Services Section — MULTI without style changes */
function ServicesSection({ locale }: { locale: "ru" | "en" }) {
    type Item = {
        title: string
        desc: string
        icon: string
        headerBg: string
        cards: string[]
        cardBgs: string[]
    }

    const items: Item[] = (locale === "en")
        ? [
            {
                title: "PR and Strategic Communications",
                desc: "Development of PR strategies, target audience audits, brand positioning",
                icon: "/images/services/megaphone_logo.svg",
                headerBg: "/images/services/hidden_block_photo.svg",
                cards: ["Consulting", "Crisis Communications", "Media Training and Support"],
                cardBgs: [
                    "/images/services/card_background.svg",
                    "/images/services/card_background_2.svg",
                    "/images/services/card_background_3.svg",
                ],
            },
            {
                title: "GR and Government Relations",
                desc: "Development of information campaigns for national projects",
                icon: "/images/services/theater_logo.svg",
                headerBg: "/images/services/hidden_block_photo.svg",
                cards: ["Government Relations", "GR Support", "Business–Government Dialogue"],
                cardBgs: [
                    "/images/services/card_background_2.svg",
                    "/images/services/card_background_3.svg",
                    "/images/services/card_background.svg",
                ],
            },
            {
                title: "Digital PR and SMM",
                desc: "Comprehensive promotion in the digital environment",
                icon: "/images/services/phone_logo.svg",
                headerBg: "/images/services/hidden_block_photo.svg",
                cards: ["Social Media", "Influencer Marketing", "Online Reputation Management", "Native Advertising"],
                cardBgs: [
                    "/images/services/card_background.svg",
                    "/images/services/card_background_2.svg",
                    "/images/services/card_background_3.svg",
                    "/images/services/card_background_2.svg",
                ],
            },
            {
                title: "IT Solutions and Digital Infrastructure",
                desc: "Integration of analytics and communication automation",
                icon: "/images/services/laptop_logo.svg",
                headerBg: "/images/services/hidden_block_photo.svg",
                cards: ["Website and Landing Page Development for Campaigns", "Mobile App Development", "Telegram Bots", "CRM Systems"],
                cardBgs: [
                    "/images/services/card_background_3.svg",
                    "/images/services/card_background.svg",
                    "/images/services/card_background_2.svg",
                    "/images/services/card_background_3.svg",
                ],
            },
            {
                title: "Creative and Video Production",
                desc: "Creative Concepts",
                icon: "/images/services/camera_logo.svg",
                headerBg: "/images/services/hidden_block_photo.svg",
                cards: ["Identity Development", "Video", "Brand Content", "Presentations", "Advertising Materials"],
                cardBgs: [
                    "/images/services/card_background.svg",
                    "/images/services/card_background_2.svg",
                    "/images/services/card_background_3.svg",
                    "/images/services/card_background_2.svg",
                    "/images/services/card_background.svg",
                ],
            },
            {
                title: "Event Marketing and Offline Activations",
                desc: "Full cycle of product launch: from concept to post-analysis",
                icon: "/images/services/microphone_logo.svg",
                headerBg: "/images/services/hidden_block_photo.svg",
                cards: ["Event Organization", "Press Tours", "Exhibitions", "Forums"],
                cardBgs: [
                    "/images/services/card_background_2.svg",
                    "/images/services/card_background_3.svg",
                    "/images/services/card_background.svg",
                    "/images/services/card_background_2.svg",
                ],
            },
        ]
        : [
            {
                title: "PR и стратегические коммуникации",
                desc: "Разработка PR-стратегий, аудит целевых аудиторий, позиционирование бренда",
                icon: "/images/services/megaphone_logo.svg",
                headerBg: "/images/services/hidden_block_photo.svg",
                cards: ["Консалтинг", "Кризисные коммуникации", "Медиатренинги и поддержка"],
                cardBgs: [
                    "/images/services/card_background.svg",
                    "/images/services/card_background_2.svg",
                    "/images/services/card_background_3.svg",
                ],
            },
            {
                title: "GR и Government Relations",
                desc: "Разработка инфокампаний для нацпроектов",
                icon: "/images/services/theater_logo.svg",
                headerBg: "/images/services/hidden_block_photo.svg",
                cards: ["Government Relations", "GR Support", "Бизнес-власть диалог"],
                cardBgs: [
                    "/images/services/card_background_2.svg",
                    "/images/services/card_background_3.svg",
                    "/images/services/card_background.svg",
                ],
            },
            {
                title: "Digital PR и SMM",
                desc: "Комплексное продвижение в цифровой среде",
                icon: "/images/services/phone_logo.svg",
                headerBg: "/images/services/hidden_block_photo.svg",
                cards: ["Социальные сети", "Influencer Marketing", "Управление репутацией (ORM)", "Нативная реклама"],
                cardBgs: [
                    "/images/services/card_background.svg",
                    "/images/services/card_background_2.svg",
                    "/images/services/card_background_3.svg",
                    "/images/services/card_background_2.svg",
                ],
            },
            {
                title: "IT-решения и цифровая инфраструктура",
                desc: "Интеграция аналитики и автоматизация коммуникаций",
                icon: "/images/services/laptop_logo.svg",
                headerBg: "/images/services/hidden_block_photo.svg",
                cards: ["Сайты и лендинги для кампаний", "Мобильные приложения", "Telegram-боты", "CRM-системы"],
                cardBgs: [
                    "/images/services/card_background_3.svg",
                    "/images/services/card_background.svg",
                    "/images/services/card_background_2.svg",
                    "/images/services/card_background_3.svg",
                ],
            },
            {
                title: "Креатив и видеопродакшн",
                desc: "Креативные концепции",
                icon: "/images/services/camera_logo.svg",
                headerBg: "/images/services/hidden_block_photo.svg",
                cards: ["Айдентика", "Видео", "Бренд-контент", "Презентации", "Рекламные материалы"],
                cardBgs: [
                    "/images/services/card_background.svg",
                    "/images/services/card_background_2.svg",
                    "/images/services/card_background_3.svg",
                    "/images/services/card_background_2.svg",
                    "/images/services/card_background.svg",
                ],
            },
            {
                title: "Event-маркетинг и офлайн-активации",
                desc: "Полный цикл запуска продукта — от концепции до пост-аналитики",
                icon: "/images/services/microphone_logo.svg",
                headerBg: "/images/services/hidden_block_photo.svg",
                cards: ["Организация событий", "Пресс-туры", "Выставки", "Форумы"],
                cardBgs: [
                    "/images/services/card_background_2.svg",
                    "/images/services/card_background_3.svg",
                    "/images/services/card_background.svg",
                    "/images/services/card_background_2.svg",
                ],
            },
        ]

    return (
        <section className="srv-acc">
            {items.map((it, i) => (
                <AccordionItem key={i} it={it} />
            ))}

            {/* масштаб под 1440 — оставляем как было */}
            <style jsx>{`
        .srv-acc{
          position: relative;
          width: 1440px;
          margin: 0 auto 0px;
        }
        @media (max-width:1440px){
          .srv-acc{
            transform: scale(calc(100vw / 1440));
            transform-origin: top center;
          }
        }
        @media (max-width: 768px){
          .srv-acc{
            width: 100%;
            transform: none;
          }
        }
      `}</style>
        </section>
    )
}

/* ——— под секцией ——— */
function AccordionItem({ it }: {
    it: {
        title: string; desc: string; icon: string; headerBg: string; cards: string[]; cardBgs: string[];
    }
}) {
    const [open, setOpen] = useState(false)

    return (
        <div className="acc-block">
            {/* HEADER (оставляем точные классы и стили как у твоего блока) */}
            <button type="button" className={`head ${open ? "open" : ""}`} onClick={() => setOpen(v => !v)} aria-expanded={open}>
                <div className="head-bg" />
                <h2 className="head-title">{it.title}</h2>
                <span className="arrow" aria-hidden />
            </button>

            {/* PANEL (те же стили) */}
            <div className={`panel ${open ? "open" : ""}`}>
                <div className="panel-inner">
                    <div className="lead">
                        <img className="lead-ico" src={it.icon} alt="" />
                        <p className="lead-text">{it.desc}</p>
                    </div>

                    <div className="cards">
                        {it.cards.map((txt, idx) => (
                            <div key={idx} className="card">
                                <div className="card-photo" style={{ backgroundImage: `url(${it.cardBgs[idx % it.cardBgs.length]})` }} />
                                <div className="card-border" />
                                <div className="card-text">{txt}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Стили — точная копия твоих, без изменений */}
            <style jsx>{`
        :root { --padX: 120px; }
        .acc-block{ margin-bottom: -8px; }

        .head{ position: relative; width: 100%; height: 150px; border: 0; background: transparent; padding: 0; cursor: pointer; }
        .head-bg{ position: absolute; inset: 0; background: url(${it.headerBg}) center/cover no-repeat; opacity: .95; }
        .head::before{ content:""; position:absolute; inset:0; background:#74AA9C; mix-blend-mode:hue; }
        .head-title{
          position:absolute; left: 10%; top:50%; transform: translateY(-50%);
          margin:0; font-weight:700; font-size:40px; line-height:50px;
          background: linear-gradient(89.26deg,#53897B .3%,#86BCAE 27.76%,#53897B 56.54%,#86BCAE 77.7%,#2E6456 99.68%);
          -webkit-background-clip:text; background-clip:text; -webkit-text-fill-color: transparent; letter-spacing: .2px; z-index:1;
        }
        .arrow{
          position:absolute; right: 100px; top: 50%; width: 38px; height: 22px;
          transform: translateY(-50%) rotate(0deg); transition: transform .24s ease; z-index:1;
        }
        .arrow::before{
          content:""; position:absolute; inset:0;
          clip-path: polygon(50% 100%, 0 0, 100% 0);
          background: linear-gradient(330.84deg,#53897B 27.91%,#86BCAE 54.09%,#2E6456 84.62%);
          border-radius: 2px; box-shadow: 0 2px 0 rgba(0,0,0,.35);
        }
        .head.open .arrow{ transform: translateY(-50%) rotate(180deg); }

        .panel{ overflow:hidden; max-height:0; transition:max-height .35s ease; }
        .panel.open{ max-height: 1180px; }

        .panel-inner{
          position: relative; padding: 64px var(--padX) 72px;
          box-shadow: 0 24px 48px rgba(0,0,0,.25); background:#CBE8DE;
        }

        .lead{ display:grid; grid-template-columns: 292px 1fr; gap: 58px; align-items:center; margin-bottom: 60px; padding-top: 60px; }
        .lead-ico{ width:92px; height:auto; justify-self:end; }
        .lead-text{ margin:0; max-width: 640px; font-weight:600; font-size:32px; line-height:40px; color:#1a1a1a; }

        .cards{
          display:grid; grid-template-columns: repeat(3, 384px); gap:24px;
          width: fit-content; margin:0 auto; padding-bottom:160px; justify-content:center;
        }
        .card{ position:relative; width:384px; height:153px; border-radius:22px; overflow:hidden; background:#0b0b0b; box-shadow: 0 6px 0 rgba(0,0,0,.45) inset; }
        .card-photo{ position:absolute; inset:0; background-position:center; background-size:cover; background-repeat:no-repeat; opacity:.48; }
        .card-border{ position:absolute; inset:10px; border-radius:14px; border:2px solid rgba(255,255,255,.12); pointer-events:none; }
        .card-text{ position:absolute; inset:0; display:flex; align-items:center; justify-content:center; padding:0 16px; text-align:center; font-weight:800; font-size:28px; line-height:1.15; color:#fff; letter-spacing:.2px; z-index:1; text-shadow:0 1px 0 rgba(0,0,0,.45); }

        /* Mobile overrides */
        @media (max-width: 768px){
          :root { --padX: 16px; }
          .head{ height: 88px; }
          .head-bg{ opacity: .9; }
          .head-title{ left: 20px; font-size: 24px; line-height: 30px; max-width: 75%; }
          .arrow{ right: 20px; width: 28px; height: 16px; }

          .panel{ max-height: 0; }
          .panel.open{ max-height: 9999px; }

          .panel-inner{ padding: 24px 16px 32px; }
          .panel-inner{ padding: 24px 16px 32px; text-align: center; }
          .lead{ grid-template-columns: 1fr; gap: 16px; align-items: center; justify-items: center; margin-bottom: 24px; padding-top: 8px; }
          .lead-ico{ width: 56px; justify-self: center; }
          .lead-text{ max-width: none; font-size: 18px; line-height: 24px; text-align: center; }

          .cards{ grid-template-columns: 1fr; gap: 12px; width: 100%; padding-bottom: 40px; justify-items: center; }
          .card{ width: 100%; height: 112px; border-radius: 16px; margin: 0 auto; }
          .card-border{ inset: 8px; border-radius: 12px; }
          .card-text{ font-size: 18px; padding: 0 12px; }
        }
      `}</style>
        </div>
    )
}

/* === Last Section at the very end === */
function LastSection({ locale }: { locale: "ru" | "en" }) {
    const text = (locale === "en")
        ? `We work with concrete metrics and a clear logic. For every project, we establish KPIs — whether it’s reach, media mentions, clicks, or engagement. Clients receive transparent analytics and regular reporting. This approach strengthens trust and makes every service tangible in numbers.`
        : `Мы работаем с конкретными метриками и понятной логикой. Для каждого проекта мы фиксируем KPI — будь то охват, упоминания в СМИ, клики или вовлечённость. Клиент получает прозрачную аналитику и регулярную отчётность. Такой подход укрепляет доверие и делает каждую услугу измеримой в цифрах.`

    return (
        <section className="last-wrap">
            {/* <div className="shade" /> */}
            <p className="last-text">{text}</p>

            <style jsx>{`
        .last-wrap{
          position: relative;
          width: 1440px;
          height: 760px;                 /* пропорции под макет */
          margin: 0 auto;
          background: url('/images/services/last_section_background.svg') center/cover no-repeat;
          overflow: hidden;
        }
        /* затемнение и лёгкая виньетка как на скрине */
        .shade{
          position: absolute; inset: 0;
          background:
            radial-gradient(120% 80% at 60% 70%, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.85) 70%),
            linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.65) 100%);
          pointer-events: none;
        }
        .last-text{
          position: absolute;
          left: 50%; top: 50%;
          transform: translate(-50%,-50%);
          margin: 0;
          width: 1080px;                 /* ширина блока текста как на фото */
          text-align: center;
          color: #FFF;
          font-weight: 700;
          font-size: 36px;               /* визуально соответствует скрину */
          line-height: 1.32;
          letter-spacing: .2px;
          text-shadow: 0 2px 2px rgba(0,0,0,.35);
        }
        @media (max-width:1440px){
          .last-wrap{
            transform: scale(calc(100vw / 1440));
            transform-origin: top center;
            height: calc(760px * (100vw / 1440));
          }
        }
        @media (max-width: 768px){
          .last-wrap{
            transform: none;
            width: 100%;
            height: auto;
            min-height: 500px;
            background-position: center;
          }
          .last-text{
            width: calc(100% - 40px);
            font-size: 20px;
            line-height: 1.35;
            padding: 0 20px;
          }
        }
      `}</style>
        </section>
    )
}





/* Header component */
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
