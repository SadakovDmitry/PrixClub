"use client"
import Image from "next/image"
import { useState } from "react"
import { usePathname, useRouter } from "next/navigation"
import { geometria } from '../../../src/fonts/geometria'

export default function CasesPage({ params: { locale } }: { params: { locale: "ru" | "en" } }) {
    const msg = {
        ru: {
            nav: { main: 'Главная', about: 'О нас', team: 'Команда', works: 'Работы', services: 'Услуги', contacts: 'Контакты', news: 'НОВОСТИ', reviews: 'ОТЗЫВЫ' },
            footer: { copy: '© PRIX Club, 2025' },
            title: 'Кейсы'
        },
        en: {
            nav: { main: 'Main Page', about: 'About Us', team: 'Team', works: 'Works', services: 'Services', contacts: 'Contacts', news: 'NEWS', reviews: 'REVIEWS' },
            footer: { copy: '© PRIX Club, 2025' },
            title: 'Cases'
        }
    }[locale]

    return (
        <div className={`${geometria.className} cases-font`}>
            <Header msg={msg} locale={locale} />

            {/* HERO — как на макете: фоновая мозаика + градиент + заголовок */}
            <section className="cases-hero">
                {/* Фоновое изображение — не обрезаем, фикс. ширина 1440, высота по картинке */}
                <img src="/images/cases/hero_background.png" alt="" className="hero-img" />

                {/* Тонировка */}
                <div className="tone hue" aria-hidden />
                <div className="tone dark" aria-hidden />

                {/* Заголовок по центру */}
                <h1 className="hero-title">{msg.title}</h1>
            </section>

            {/* Проекты секция */}
            <ProjectsSection locale={locale} />

            <Footer msg={msg} />

            <style jsx>{`
        .cases-hero{position:relative;width:100vw;margin:0 auto;background:#000;color:#fff}
        .hero-img{display:block;width:100vw;height:auto}
        .tone{position:absolute;left:0;top:0;width:100vw;height:100%;pointer-events:none}
        .hue{background:#74AA9C;mix-blend-mode:color;opacity:.45}
        .dark{background:rgba(0,0,0,.45)}
        .hero-title{
          position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);
          margin:0;text-align:center;
          font-family:'Geometria';font-weight:800;font-size:6.667vw;line-height:1;letter-spacing:.035vw;
          background:linear-gradient(89.26deg,#53897B .3%,#86BCAE 27.76%,#53897B 56.54%,#86BCAE 77.7%,#2E6456 99.68%);
          -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text
        }
      `}</style>
            <style jsx global>{`
        .cases-font, .cases-font *{font-family:${geometria.style.fontFamily},sans-serif !important;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}
      `}</style>
        </div>
    )
}

/* Projects Section Component */
function ProjectsSection({ locale }: { locale: "ru" | "en" }) {
    const [activeFilters, setActiveFilters] = useState<string[]>(['Event', 'Rebranding', 'Identity', 'Marketing', 'PR'])

    const filterData = locale === 'ru' ? [
        { label: 'Ивент', value: 'Event' },
        { label: 'Ребрендинг', value: 'Rebranding' },
        { label: 'Айдентика', value: 'Identity' },
        { label: 'Маркетинг', value: 'Marketing' },
        { label: 'PR', value: 'PR' },
        { label: 'SMM', value: 'SMM' },
        { label: 'GR', value: 'GR' },
        { label: 'Полиграфия', value: 'Polygraphy' },
        { label: 'Диджитал', value: 'Digital' }
    ] : [
        { label: 'Event', value: 'Event' },
        { label: 'Rebranding', value: 'Rebranding' },
        { label: 'Identity', value: 'Identity' },
        { label: 'Marketing', value: 'Marketing' },
        { label: 'PR', value: 'PR' },
        { label: 'SMM', value: 'SMM' },
        { label: 'GR', value: 'GR' },
        { label: 'Polygraphy', value: 'Polygraphy' },
        { label: 'Digital', value: 'Digital' }
    ]

    const caseProjects = [
        {
            title: locale === 'ru' ? 'Ассоциация Экспортеров и Импортеров' : 'Import & Export Association',
            description: locale === 'ru'
                ? 'Комплексный дизайн и коммуникации для ведущей международной выставки о бизнесе и торговле.'
                : 'Comprehensive Design and Communications for a Leading International Business and Trade Exhibition',
            filters: ['Event', 'Rebranding', 'Identity', 'Marketing', 'PR'],
            icon: '/images/cases/IEA_icon.svg',
            bgImage: '/images/cases/card_background.png',
            subBgImage: '/images/cases/sub_card_background.png'
        },
        {
            title: locale === 'ru' ? 'Фонд Содействия Развитию Космонавтики' : 'Fund for the Promotion of Cosmonautics',
            description: locale === 'ru'
                ? 'Полный ребрендинг Фонда Содействия Развитию Космонавтики: от новой айдентики до современного сайта.'
                : 'Complete rebranding of the Fund for the Promotion of Cosmonautics: from new identity to modern website.',
            filters: ['Rebranding', 'Identity', 'Marketing', 'PR'],
            icon: '/images/cases/FRSK_icon.svg',
            bgImage: '/images/cases/card_background_2.png',
            subBgImage: '/images/cases/sub_card_background_2.png'
        },
        {
            title: locale === 'ru' ? 'Проект Пхеньян Тревел' : 'Pyongyang Travel Project',
            description: locale === 'ru'
                ? 'Разработали фирменный стиль для туристической компании, специализирующейся на уникальном направлении — поездках в КНДР.'
                : 'Developed brand identity for a travel company specializing in unique destinations - trips to North Korea.',
            filters: ['Identity', 'Marketing'],
            icon: '/images/cases/PTP_icon.svg',
            bgImage: '/images/cases/card_background_3.png',
            subBgImage: '/images/cases/sub_card_background_3.png'
        },
        {
            title: locale === 'ru' ? 'Международный Культурный Деловой Центр' : 'International Cultural Business Center',
            description: locale === 'ru'
                ? 'Создали фирменный стиль для организации, сопровождающей официальные и деловые делегации.'
                : 'Created brand identity for an organization accompanying official and business delegations.',
            filters: ['Identity', 'PR'],
            icon: '/images/cases/ICBC_icon.svg',
            bgImage: '/images/cases/card_background_4.png',
            subBgImage: '/images/cases/sub_card_background_4.png'
        },
        {
            title: locale === 'ru' ? 'Международный Форум Космонавтики' : 'International Cosmonautics Forum',
            description: locale === 'ru'
                ? 'Разработали логотип и фирменный стиль форума, объединившего ведущие мировые силы в области космоса.'
                : 'Developed logo and brand identity for the forum that united leading global forces in space.',
            filters: ['Event', 'Identity', 'PR'],
            icon: '/images/cases/ICF_icon.svg',
            bgImage: '/images/cases/card_background_5.png',
            subBgImage: '/images/cases/sub_card_background_5.png'
        },
        {
            title: locale === 'ru' ? 'Мир Консалтинговых Решений' : 'World of Consulting Solutions',
            description: locale === 'ru'
                ? 'Провели ребрендинг с акцентом на цифровые коммуникации, обновив визуальный язык консалтинговой компании.'
                : 'Conducted rebranding focusing on digital communications, updating the visual language of the consulting company.',
            filters: ['Rebranding', 'Identity', 'Marketing'],
            icon: '/images/cases/WCS_icon.svg',
            bgImage: '/images/cases/card_background_6.png',
            subBgImage: '/images/cases/sub_card_background_6.png'
        },
        {
            title: locale === 'ru' ? 'Фонд Сохранения Исторического Культурного Наследия' : 'Fund for the Preservation of Historical Cultural Heritage',
            description: locale === 'ru'
                ? 'Создали новый фирменный стиль, провели ребрендинг и разработали сайт для фонда, чья миссия — сохранение культурного наследия'
                : 'Created new brand identity, conducted rebranding and developed website for the fund whose mission is preserving cultural heritage',
            filters: ['Rebranding', 'Identity', 'Marketing', 'PR'],
            icon: '/images/cases/FPHCH_icon.svg',
            bgImage: '/images/cases/card_background_7.png',
            subBgImage: '/images/cases/sub_card_background_7.png'
        }
    ]

    const toggleFilter = (filter: string) => {
        setActiveFilters(prev =>
            prev.includes(filter)
                ? prev.filter(f => f !== filter)
                : [...prev, filter]
        )
    }

    // Filter projects based on active filters
    const filteredProjects = caseProjects.filter(project => {
        // If no filters are active, show all projects
        if (activeFilters.length === 0) return true

        // Show project if it has at least one matching filter
        return project.filters.some(filter => activeFilters.includes(filter))
    })

    return (
        <section className="projects-section">
            {/* Title */}
            <div className="section-title-wrapper">
                <h2 className="section-title">
                    <span className="title-black">{locale === 'ru' ? 'Наши' : 'Our'}</span>
                    <span className="title-green"> {locale === 'ru' ? 'проекты' : 'projects'}</span>
                </h2>
            </div>

            {/* Filters */}
            <div className="filters-wrapper">
                {filterData.map((filter, index) => {
                    const isActive = activeFilters.includes(filter.value)
                    return (
                        <button
                            key={index}
                            className={`filter-btn ${isActive ? 'active' : ''}`}
                            onClick={() => toggleFilter(filter.value)}
                        >
                            {filter.label}
                        </button>
                    )
                })}
            </div>

            {/* Case Cards */}
            <div className="case-cards-container">
                {filteredProjects.map((project, index) => (
                    <div key={index} className="case-card-wrapper">
                        <div className="case-card">
                            {/* Background layers */}
                            <div className="case-bg-img" style={{ backgroundImage: `url(${project.bgImage})` }} />

                            {/* Sub card with icon */}
                            <div className="case-sub-card" style={{ backgroundImage: `url(${project.subBgImage})` }}>
                                <img src={project.icon} alt="" className="case-icon" />
                                <button className="view-case-btn">
                                    <span>{locale === 'ru' ? 'Смотреть кейс' : 'View Case'}</span>
                                    <div className="arrow-circle">
                                        <svg width="22" height="20" viewBox="0 0 22 20" fill="none">
                                            <path d="M21 10L11 0M21 10L11 20M21 10H0" stroke="currentColor" strokeWidth="1.5" />
                                        </svg>
                                    </div>
                                </button>
                            </div>

                            {/* Case content */}
                            <h3 className="case-title">{project.title}</h3>
                            <p className="case-description">{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* To Top Button */}
            <div className="to-top-wrapper">
                <button className="to-top-btn" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <div className="to-top-bg-1" />
                    <div className="to-top-bg-2" />
                    <div className="to-top-overlay" />
                    <div className="to-top-glass" />
                    <span className="to-top-text">{locale === 'ru' ? 'Наверх' : 'Up'}</span>
                </button>
            </div>

            <style jsx>{`
                .projects-section {
                    position: relative;
                    width: 100vw;
                    min-height: 55.556vw; /* 800px */
                    margin: 0 auto;
                    background: #FFFFFF;
                    padding-bottom: 6.944vw; /* 100px */
                }

                .section-title-wrapper {
                    position: relative;
                    width: 100vw;
                    padding: 5.556vw 0 2.778vw; /* 80px 0 40px */
                    text-align: center;
                }

                .section-title {
                    margin: 0;
                    font-family: 'Geometria';
                    font-weight: 700;
                    font-size: 4.167vw; /* 60px */
                    line-height: 1;
                }

                .title-black {
                    color: #000000;
                }

                .title-green {
                    color: #86BCAE;
                }

                .filters-wrapper {
                    position: relative;
                    width: 100%;
                    padding-left: 25%;
                    padding-right: 25%;
                    display: flex;
                    flex-wrap: wrap;
                    gap: 1.389vw; /* 20px */
                    justify-content: space-between;
                    margin-bottom: 4.167vw; /* 60px */
                }

                .filter-btn {
                    padding: 0.139vw 1.944vw; /* 2px 28px */
                    border-radius: 6.944vw; /* 100px */
                    border: none;
                    font-family: 'Geometria';
                    font-weight: 700;
                    font-size: 1.667vw; /* 24px */
                    cursor: pointer;
                    transition: all 0.3s;
                    background: linear-gradient(90deg, #565656 0%, #DFDFDF 100%);
                    color: #FFFFFF;
                }

                .filter-btn.active {
                    background: #000000;
                    color: #86BCAE;
                }

                .case-cards-container {
                    position: relative;
                    width: 100vw;
                    padding: 0 8.333vw; /* 0 120px */
                    display: flex;
                    flex-direction: column;
                    gap: 2.778vw; /* 40px */
                }

                .case-card-wrapper {
                    position: relative;
                }

                .case-card {
                    position: relative;
                    width: 83.333vw; /* 1200px */
                    height: 26.389vw; /* 380px */
                    background: #000000;
                    border-radius: 1.389vw; /* 20px */
                    overflow: hidden;
                }

                .case-bg-card {
                    position: absolute;
                    inset: 0;
                    background: #000000;
                    border-radius: 20px;
                }

                .case-bg-hue {
                    position: absolute;
                    width: 83.333vw; /* 1200px */
                    height: 26.389vw; /* 380px */
                    background: #74AA9C;
                    mix-blend-mode: color;
                    transform: matrix(-1, 0, 0, 1, 0, 0);
                }

                .case-bg-img {
                    position: absolute;
                    inset: 0;
                    background-size: cover;
                    background-position: center;
                    opacity: 1;
                }

                .case-bg-img-right {
                    position: absolute;
                    width: 41.667vw; /* 600px */
                    height: 27.778vw; /* 400px */
                    left: 41.667vw; /* 600px */
                    top: -0.694vw; /* -10px */
                    background: url('/images/cases/card_background.png');
                    background-size: cover;
                    opacity: 0.3;
                    transform: matrix(-1, 0, 0, 1, 0, 0);
                }

                .case-bg-color {
                    position: absolute;
                    width: 41.667vw; /* 600px */
                    height: 26.389vw; /* 380px */
                    left: 41.667vw; /* 600px */
                    top: 0;
                    background: #2E6456;
                    mix-blend-mode: color;
                    transform: matrix(-1, 0, 0, 1, 0, 0);
                }

                .case-bg-gradient-right {
                    position: absolute;
                    width: 27.708vw; /* 399px */
                    height: 26.389vw; /* 380px */
                    left: 13.958vw; /* 201px */
                    top: 0;
                    background: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
                }

                .case-bg-gradient-left {
                    position: absolute;
                    width: 27.708vw; /* 399px */
                    height: 26.389vw; /* 380px */
                    left: 41.667vw; /* 600px */
                    top: 0;
                    background: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
                    transform: matrix(-1, 0, 0, 1, 0, 0);
                }

                .case-sub-card {
                    position: absolute;
                    width: 26.389vw; /* 380px */
                    height: 22.917vw; /* 330px */
                    left: 1.736vw; /* 25px */
                    top: 1.736vw; /* 25px */
                    background-size: cover;
                    background-position: center;
                    border-radius: 1.389vw; /* 20px */
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    gap: 2.778vw; /* 40px */
                    z-index: 2;
                }

                .case-icon {
                    width: 10.208vw; /* 147px */
                    height: 11.042vw; /* 159px */
                }

                .view-case-btn {
                    position: relative;
                    width: 18.846vw; /* 271.62px */
                    height: 3.676vw; /* 52.93px */
                    border-radius: 1.977vw; /* 28.4634px */
                    border: none;
                    background: linear-gradient(45deg, #53897B 0%, #2E6456 100%);
                    box-shadow: 0px 0px 2.259vw rgba(134, 188, 174, 0.3); /* 32.5297px */
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .view-case-btn span {
                    font-family: 'Geometria';
                    font-weight: 500;
                    font-size: 1.573vw; /* 22.635px */
                    line-height: 90%;
                    color: #FFFFFF;
                    padding-right: 3.472vw; /* 50px */
                }

                .arrow-circle {
                    position: absolute;
                    right: 0.694vw; /* 10px */
                    width: 2.653vw; /* 38.22px */
                    height: 2.653vw; /* 38.22px */
                    border-radius: 50%;
                    background: #FFFFFF;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .arrow-circle svg {
                    color: #000000;
                }

                .case-title {
                    position: absolute;
                    width: 39.931vw; /* 575px */
                    right: 10.417vw; /* 150px */
                    top: 4.167vw; /* 60px */
                    font-family: 'Geometria';
                    font-weight: 700;
                    font-size: 2.639vw; /* 38px */
                    line-height: 105%;
                    color: #FFFFFF;
                    margin: 0;
                    z-index: 2;
                }

                .case-description {
                    position: absolute;
                    width: 39.931vw; /* 575px */
                    right: 10.417vw; /* 150px */
                    bottom: 3.472vw; /* 50px */
                    font-family: 'Geometria';
                    font-weight: 400;
                    font-size: 1.806vw; /* 26px */
                    line-height: 2.292vw; /* 33px */
                    color: #FFFFFF;
                    margin: 0;
                    z-index: 2;
                }

                .to-top-wrapper {
                    position: relative;
                    width: 100vw;
                    padding: 8.333vw 0 5.556vw; /* 120px 0 80px */
                    display: flex;
                    justify-content: center;
                }

                .to-top-btn {
                    position: relative;
                    width: 26.667vw; /* 384px */
                    height: 6.939vw; /* 99.92px */
                    border-radius: 4.533vw; /* 65.3061px */
                    border: none;
                    cursor: pointer;
                    overflow: hidden;
                }

                .to-top-bg-1 {
                    position: absolute;
                    width: 58.681vw; /* 845px */
                    height: 39.167vw; /* 564px */
                    left: -16.042vw; /* -231px */
                    top: -16.111vw; /* -232px */
                    background: #2E6456;
                }

                .to-top-bg-2 {
                    position: absolute;
                    width: 42.778vw; /* 616px */
                    height: 28.542vw; /* 411px */
                    left: calc(50% - 21.389vw - 8.056vw); /* 616/2 + 116 */
                    top: calc(50% - 14.271vw + 2.778vw); /* 411/2 and +40 */
                    background: radial-gradient(63.35% 17.27% at 69.16% 40.75%, rgba(0, 0, 0, 0) 0%, #000000 100%);
                    mix-blend-mode: luminosity;
                }

                .to-top-overlay {
                    position: absolute;
                    width: 26.667vw; /* 384px */
                    height: 6.939vw; /* 99.92px */
                    left: 0;
                    top: 0;
                    background: #2E6456;
                    mix-blend-mode: multiply;
                    opacity: 0.75;
                }

                .to-top-glass {
                    position: absolute;
                    width: 23.611vw; /* 340px */
                    height: 4.861vw; /* 70px */
                    left: calc(50% - 11.806vw); /* 340/2 */
                    top: calc(50% - 2.431vw); /* 70/2 */
                    background: rgba(255, 255, 255, 0.05);
                    border-radius: 3.629vw; /* 52.2449px */
                    border: 0.069vw solid #555555; /* 1px */
                }

                .to-top-text {
                    position: absolute;
                    width: 7.639vw; /* 110px */
                    height: 2.014vw; /* 29px */
                    left: calc(50% - 3.819vw); /* 110/2 */
                    top: calc(50% - 1.007vw); /* 29/2 */
                    font-family: 'Geometria';
                    font-weight: 700;
                    font-size: 2.036vw; /* 29.3127px */
                    line-height: 100%;
                    text-align: center;
                    color: #FFFFFF;
                    z-index: 10;
                }

                /* no additional media queries needed; using vw units keeps proportions */
            `}</style>
        </section>
    )
}

function Header({ msg, locale }: { msg: any; locale: "ru" | "en" }) {
    const pathname = usePathname()
    return (
        <>
            <style jsx>{`
                .header-wrap{width:85vw;margin:0 auto;padding:0.833vw 1.389vw}
                .header-pill{height:2.778vw;border-radius:2.778vw}
                .header-nav{font-size:0.903vw}
                .header-actions{font-size:0.903vw}
            `}</style>
            <header className="sticky top-0 z-20 bg-black">
                <div className="header-wrap">
                    <div className="flex items-center" style={{ gap: '1.389vw' }}>
                        <Image src="/images/header_logo.svg" alt="PRIX Club" width={120} height={40} style={{ height: '2.778vw', width: 'auto' }} priority />
                        <div className="flex-1 border border-white/15 bg-black/40 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)] backdrop-blur px-4 header-pill">
                            <div className={`flex items-center justify-between ${geometria.className}`} style={{ height: '2.778vw', gap: '1.111vw' }}>
                                <nav className="flex items-center text-white/80 header-nav" style={{ gap: '1.667vw' }}>
                                    <a href={`/${locale}`} className="hover:text-white">{msg.nav.main}</a>
                                    <a href={`/${locale}/about`} className={`hover:text-white ${pathname?.endsWith('/about') ? 'text-white' : ''}`}>{msg.nav.about}</a>
                                    <a href={`/${locale}/team`} className="hover:text-white">{msg.nav.team}</a>
                                    <a href={`/${locale}#works`} className="hover:text-white">{msg.nav.works}</a>
                                    <a href={`/${locale}/services`} className="hover:text-white">{msg.nav.services}</a>
                                    <a href={`/${locale}#contacts`} className="hover:text-white">{msg.nav.contacts}</a>
                                </nav>
                                <div className="flex items-center header-actions" style={{ gap: '1.667vw' }}>
                                    <a href={`/${locale}#news`} className="tracking-wide text-white/80 hover:text-white">{msg.nav.news}</a>
                                    <a href={`/${locale}#reviews`} className="tracking-wide text-white/80 hover:text-white">{msg.nav.reviews}</a>
                                    <LanguageSwitch />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
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

function Footer({ msg }: { msg: any }) {
    return (
        <>
            <style jsx>{`
                .footer-wrap{width:85vw;margin:0 auto;padding:2.222vw 1.389vw}
                .footer-logo{height:5vw}
                .footer-title{font-size:1.111vw}
                .footer-text-sm{font-size:0.903vw}
            `}</style>
            <footer id="contacts" className="bg-black text-white">
                <div className="footer-wrap">
                    <div className="grid items-start gap-2 md:gap-3 md:grid-cols-[auto,1fr,1fr,1fr,1fr,1fr,1fr,auto]">
                        <div className="pt-2 md:mr-24 -mt-2 md:-mt-3">
                            <Image src="/images/footer_logo.svg" alt="PRIX Club" width={72} height={72} className="opacity-80 footer-logo" style={{ width: 'auto' }} />
                        </div>
                        <FooterColumn title="Навигация" rows={['Главная', 'О нас', 'Команда']} />
                        <FooterColumn title="Разделы" rows={['Работы', 'Услуги', 'Контакты']} />
                        <FooterColumn title="Инфо" rows={['Новости', 'Отзывы']} />
                        <div className="md:col-span-3" />
                        <div className="text-right">
                            <a className="block font-semibold tracking-wide footer-title" href="tel:+74244242442">
                                <span className="inline-flex items-center gap-2">
                                    <span>+7 424 424 42 42</span>
                                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-white/30 text-white/80">☎</span>
                                </span>
                            </a>
                            <a className="mt-2 inline-flex items-center gap-2 font-semibold footer-title" href="mailto:prix@prixclub.ru">
                                <span>prix@prixclub.ru</span>
                                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-white/30 text-white/80">✉</span>
                            </a>
                        </div>
                    </div>
                    <div className="mt-8 h-px w-full bg-white/25" />
                    <div className="pt-3 text-center text-white/60 footer-text-sm">{msg.footer.copy}</div>
                </div>
            </footer>
        </>
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
