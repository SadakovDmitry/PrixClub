"use client"
import Image from 'next/image'
import { useMemo, useState, useRef, useEffect } from 'react'
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
      footer: { contacts: 'Контакты', nav: 'Навигация', copy: ' PRIX Club, 2025' }
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
        <ClientsSection locale={locale} />
        <ServicesNew locale={locale} />
        <TestimonialsNew locale={locale} />
        <ContactSection locale={locale} />
        {/* <Team msg={msg} locale={locale} /> */}
      </main>
      <Footer msg={msg} locale={locale} />
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
    }
    : {
      industries: 'Отрасли,\nс которыми работаем',
      realised: 'Реализованные\nпроекты',
      years: 'Лет работы',
      awards: 'Награды',
      clients: 'Ключевые клиенты',
    }

  const list = locale === 'en'
    ? ['NCF', 'DEVELOPMENT', 'MEDIA', 'MARKETING', 'INTERNATIONAL', 'TRADE']
    : ['НКО', 'ДЕВЕЛОПМЕНТ', 'МЕДИА', 'МАРКЕТИНГ', 'МЕЖДУНАР.', 'ТОРГОВЛЯ']

  return (
    <section id="stats" className={`${geometria.className}`}>
      <div className="stats-root">
        {/* BG group */}
        <div className="bg-circle" />
        <div className="bg-hue" />

        {/* Cards (absolute layout) */}
        <div className="card tl" />
        <div className="card left-tall">
          <ul className="ind-list">
            {list.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </div>

        <div className="realised-box">
          <div className="num">52</div>
          <div className="label" dangerouslySetInnerHTML={{ __html: t.realised.replace('\n', '<br/>') }} />
        </div>

        <div className="card small-years">
          <div className="num dim">8</div>
          <div className="sub dim">{t.years}</div>
        </div>

        <div className="card small-awards">
          <div className="sub dim">{t.awards}</div>
          <div className="awards-logos">
            <Image src="/images/awards_logo.svg" alt="award" width={63} height={55} className="op" />
            <Image src="/images/awards_logo.svg" alt="award" width={63} height={55} className="op" />
            <Image src="/images/awards_logo.svg" alt="award" width={63} height={55} className="op" />
          </div>
        </div>

        <div className="card right-tall" />

        <div className="card bottom-wide">
          <Image src="/images/Heart_icon.svg" alt="heart" width={60} height={60} style={{ width: '4vw', height: '4vw', position: 'absolute', left: '4%', top: '18%', opacity: 0.99, zIndex: 2 }} />
          <div className="clients dim">{t.clients}</div>
          <div className="logos">
            {['/images/tryangle_logo.svg', '/images/ФРСК_logo.svg', '/images/tryangle_logo.svg', '/images/ФРСК_logo.svg', '/images/tryangle_logo.svg'].map((src, i) => (
              <Image key={i} src={src} alt="client" width={62} height={40} className="op" />
            ))}
          </div>
        </div>

        <div className="industries dim" dangerouslySetInnerHTML={{ __html: t.industries.replace('\n', '<br/>') }} />
      </div>

      <style jsx>{`
        .stats-root{position:relative;width:100vw;height:calc(100vw * 0.5625);margin:0 auto;background:transparent;overflow:hidden}

        .bg-circle{position:absolute;inset:0;background:url('/images/up_background_green.svg') center/cover no-repeat;opacity:1;z-index:0;pointer-events:none}
        .bg-hue{position:absolute;inset:0;background:#74AA9C;mix-blend-mode:color;opacity:.45;z-index:1;pointer-events:none}

        /* Cards positions as % of 1440x810 */
        .card{position:absolute;background:rgba(255,255,255,.04);border-radius:20px;overflow:hidden;z-index:2}
        @media (max-width:640px){
          .card{border-radius:12px}
        }
        .tl{left:8.333%;top:14.815%;width:19.583%;height:14.815%;background-image:url('/images/main/card_top_left_background.png');background-size:cover;background-position:center}
        .left-tall{left:8.333%;top:32.099%;width:19.583%;height:53.086%;background-image:url('/images/main/card_industries_we_serve_background.png');background-size:cover;background-position:center}
        .ind-list{position:absolute;left:8.854%;top:12.174%;width:77.305%;height:44.186%;margin:0;padding:0;list-style:none;color:#fff;opacity:.3;font-weight:700;font-size:1.49vw;line-height:130%;text-transform:uppercase}
        .ind-list li{margin:0.6vw 0}
        .right-tall{left:79.167%;top:14.815%;width:12.5%;height:28.889%;background-image:url('/images/main/card_right_up_background.png');background-size:cover;background-position:center}
        .small-years{left:57.917%;top:14.815%;width:19.583%;height:28.889%;background-image:url('/images/main/card_years_of_work_background.png');background-size:cover;background-position:center}
        .small-awards{left:57.917%;top:46.173%;width:33.75%;height:16.049%;background-image:url('/images/main/card_awards_background.png');background-size:cover;background-position:center}
        .bottom-wide{left:29.583%;top:64.691%;width:62.083%;height:20.494%;background-image:url('/images/main/card_major_clients_background.png');background-size:cover;background-position:center}

        .realised-box{position:absolute;left:29.583%;top:14.815%;width:26.667%;height:47.407%;background:linear-gradient(45deg,#53897B 0%,#2E6456 100%);box-shadow:0 0 40px rgba(134,188,174,.3);border-radius:20px;z-index:2}
        @media (max-width:640px){
          .realised-box{border-radius:12px}
        }
        .num{position:absolute;color:#fff;font-weight:300;font-size:5.73vw;line-height:1}
        .realised-box .num{left:8.854%;top:4.167%}
        .label{position:absolute;color:#fff;font-weight:400;font-size:1.944vw;line-height:0.9}
        .realised-box .label{left:8.854%;top:80.469%}

        .dim{opacity:.3;color:#fff}
        .small-years .num{left:10.638%;top:6.838%}
        .small-years .sub{position:absolute;left:12.056%;top:78.205%;font-size:1.944vw;line-height:0.9}
        .small-awards .sub{position:absolute;left:6.997%;top:58.462%;font-size:1.944vw;line-height:0.9}
        .awards-logos{position:absolute;right:17.997%;top:29.231%;display:flex;gap:14%}
        .awards-logos :global(img){width:4.2vw;height:auto}

        .industries{position:absolute;left:10.694%;top:76.296%;font-size:1.944vw;line-height:0.9;display:flex;align-items:flex-end;z-index:2}
        .clients{position:absolute;left:3.802%;top:71.686%;font-size:1.944vw;line-height:0.9;z-index:2}
        .logos{position:absolute;left:37.595%;top:33.133%;display:flex;gap:16.8%;z-index:2}
        .logos :global(img){width:4.2vw;height:auto;flex:0 0 auto}
        .heart{position:absolute;left:4.924%;top:15.663%;opacity:.99;z-index:2;width:6.71%;height:auto}
        .op{opacity:.3}
      `}</style>
    </section>
  )
}

function ClientsSection({ locale }: { locale: 'ru' | 'en' }) {
  const logos = ['/images/Frsk_logo.svg', '/images/Frsk_logo.svg', '/images/Frsk_logo.svg', '/images/Frsk_logo.svg', '/images/Frsk_logo.svg']
  const [idx, setIdx] = useState(0)
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const bgImgWrapRef = useRef<HTMLDivElement | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)')
    const update = () => setIsMobile(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  const title = locale === 'en' ? 'Our Clients' : 'Наши Клиенты'
  const desc = locale === 'en'
    ? 'The Foundation for the Advancement of Cosmonautics is a nonprofit organization that supports projects in space technology, science, and education.'
    : 'Фонд содействия развитию космонавтики — некоммерческая организация, поддерживающая проекты в области космических технологий, науки и образования.'

  return (
    <section id="clients" className={`relative ${geometria.className}`}>
      <div ref={sectionRef} className="relative">
        <div ref={bgImgWrapRef} className="relative">
          <Image
            src="/images/our_clients_background_green.svg"
            alt=""
            width={1920}
            height={1080}
            className="w-full h-auto select-none pointer-events-none"
            priority
          />
        </div>

        <div className="absolute inset-0 px-10">
          <div className={`h-full ${geometria.className}`}>
            <div className="flex h-full flex-col">
              <h2 className="pt-2 md:pt-20 text-center text-white text-4xl md:text-5xl font-medium clients-title">{title}</h2>

              <div className="flex-1 flex flex-col items-center justify-center">
                <div className="clients-row">
                  <button
                    type="button"
                    aria-label="Prev"
                    onClick={() => setIdx((p) => (p - 1 + logos.length) % logos.length)}
                    className="group arrow arrow-left"
                  >
                    <svg
                      viewBox="0 0 150 200"
                      preserveAspectRatio="xMidYMid meet"
                      className="opacity-80 group-hover:opacity-100 transition-opacity arrow-svg"
                    >
                      <defs>
                        {/* Опака в вершине (x=30), прозрачные концы (x=70) */}
                        <linearGradient id="gradLeft" x1="30" y1="0" x2="70" y2="0" gradientUnits="userSpaceOnUse">
                          <stop offset="0%" stopColor="rgba(255,255,255,1)" />
                          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                        </linearGradient>
                      </defs>
                      {/* Left chevron with 90° apex at (30,100) */}
                      <path d="M70 60 L30 100 L70 140" stroke="url(#gradLeft)" strokeWidth="1" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <div className="logo-box">
                    <Image src={logos[idx]} alt="client" width={1020} height={280} className="h-auto mx-auto clients-logo" />
                  </div>
                  <button
                    type="button"
                    aria-label="Next"
                    onClick={() => setIdx((p) => (p + 1) % logos.length)}
                    className="group arrow arrow-right"
                  >
                    <svg
                      viewBox="0 0 150 200"
                      preserveAspectRatio="xMidYMid meet"
                      className="opacity-80 group-hover:opacity-100 transition-opacity arrow-svg"
                    >
                      <defs>
                        {/* Опака в вершине (x=70), прозрачные концы (x=30) */}
                        <linearGradient id="gradRight" x1="70" y1="0" x2="30" y2="0" gradientUnits="userSpaceOnUse">
                          <stop offset="0%" stopColor="rgba(255,255,255,1)" />
                          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                        </linearGradient>
                      </defs>
                      {/* Right chevron with 90° apex at (70,100) */}
                      <path d="M30 60 L70 100 L30 140" stroke="url(#gradRight)" strokeWidth="1" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
                <div className="mt-2 md:mt-3 flex items-center justify-center gap-3">
                  {logos.map((_, i) => {
                    const dist = Math.abs(i - idx)
                    const op = dist === 0 ? 1 : dist === 1 ? 0.6 : dist === 2 ? 0.35 : 0.2
                    return (
                      <button
                        key={i}
                        aria-label={`Go to slide ${i + 1}`}
                        onClick={() => setIdx(i)}
                        style={{ opacity: op }}
                        className={`clients-dot rounded-full bg-white`}
                      />
                    )
                  })}
                </div>
              </div>

              <div className="flex-1 flex items-center">
                <div className="relative max-w-10xl w-full mx-auto">
                  <div className="h-px w-3/4 md:w-2/3 mx-auto bg-gradient-to-r from-transparent via-white to-transparent" />
                  <p
                    className="mt-3 md:mt-6 text-center font-light text-[20px] leading-[28px] mx-auto w-[1260px] max-w-full clients-desc"
                    style={{
                      background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.25) 0%, #FFFFFF 50%, rgba(255, 255, 255, 0.25) 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      color: 'transparent',
                    }}
                  >
                    {desc}
                  </p>
                  <div className="mt-3 md:mt-6 h-px w-3/4 md:w-2/3 mx-auto bg-gradient-to-r from-transparent via-white/90 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        /* Our Clients — fluid scaling using vw */
        .clients-title{ font-size: clamp(22px, 6.5vw, 48px); }
        /* Мобильные: логотип меньше, на десктопе растёт пропорционально */
        .clients-logo{ width: clamp(140px, 24vw, 1800px); }
        @media (min-width: 1440px){ .clients-logo{ width: min(28vw, 1600px); } }
        /* Меньший шрифт и line-height на мобильных */
        .clients-desc{ font-size: clamp(9px, 2.4vw, 38px); line-height: clamp(8px, 2.2vw, 46px); }
        @media (min-width: 900px){ .clients-desc{ font-size: clamp(18px, 2.2vw, 38px); line-height: clamp(16px, 2.2vw, 46px); } }
        /* Обычный CSS для блока стрелок и контейнера */
        .clients-row, .clients-carousel{ width: 80%; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; gap: 10px;}
        @media (max-width: 700px){ .clients-row, .clients-carousel{ width: 100%; gap: 10px; } }
        .arrow{ position: static; transform: none; padding: 0; }
        .arrow-left{ left: auto; }
        .arrow-right{ right: auto; }
        .logo-box{ padding: 0; }
        /* Больше стрелки без изменения занимаемого места: масштаб через transform */
        .arrow-svg{ width: clamp(28px, 6vw, 72px); height: auto; transform-origin: center; transform: translateX(10px) scale(1.95); }
        @media (min-width: 768px){ .arrow-svg{ transform: translateX(25px) scale(2.6); } }
        @media (min-width: 1440px){ .arrow-svg{ transform: translateX(40px) scale(3.8); } }
        /* Индикаторные точки: меньше на мобилке */
        .clients-dot{ width: clamp(6px, 1.6vw, 10px); height: clamp(6px, 1.6vw, 10px); }
      `}</style>
    </section>
  )
}

function ServicesNew({ locale }: { locale: 'ru' | 'en' }) {
  const items =
    locale === 'en'
      ? [
        { t: 'PR strategies', d: 'Development of long-term communication plans to strengthen reputation and increase brand awareness.' },
        { t: 'Crisis communications', d: 'Managing public image and communications in critical or unexpected situations.' },
        { t: 'Government relations', d: 'Building effective cooperation with government bodies and regulators.' },
        { t: 'Media relations', d: 'Building and maintaining positive relationships with journalists and media.' },
        { t: 'IT solutions', d: 'Creating specialized digital tools and platforms to support business tasks.' },
        { t: 'Digital and SMM', d: 'Brand promotion via digital platforms, social networks and targeted campaigns.' },
      ]
      : [
        { t: 'PR‑стратегии', d: 'Разработка долгосрочных коммуникационных планов для укрепления репутации и повышения узнаваемости бренда.' },
        { t: 'Антикризисные коммуникации', d: 'Управление публичным имиджем и коммуникацией в критических или неожиданных ситуациях.' },
        { t: 'Взаимодействие с государственными структурами', d: 'Развитие эффективного взаимодействия с государственными органами и регуляторами.' },
        { t: 'Медиа‑рилейшнз', d: 'Выстраивание и поддержание позитивных отношений с журналистами и СМИ.' },
        { t: 'Разработка IT‑решений', d: 'Создание специализированных цифровых инструментов и платформ для поддержки бизнес‑задач.' },
        { t: 'Digital и SMM', d: 'Продвижение брендов через цифровые платформы, социальные сети и таргетированные кампании.' },
      ]
  const title = locale === 'en' ? 'Our Services' : 'Наши Услуги'
  return (
    <section id="services-next" className={`relative ${geometria.className}`}>
      <div className="relative os-section">
        <div className="os-bg" />
        <div className="os-shade" />
        <div className="relative">
          <div className="container-max">
            <div className="py-16 md:py-24 flex flex-col items-center justify-center">
              <h2 className="text-center text-[#0a0a0a] os-title font-medium mb-8 md:mb-12">{title}</h2>
              <div className="mx-auto max-w-[1120px] grid grid-cols-1 md:grid-cols-3 gap-x-14 gap-y-12 text-[#0a0a0a] mt-10 md:mt-16">
                {items.map((it, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <span className="mt-1.5 inline-block h-3 w-3 rotate-45 bg-[#0a0a0a] os-bullet" />
                    <div>
                      <div className="leading-[1.25] font-semibold os-item-title md:text-[26px] md:leading-[1.25]">{it.t}</div>
                      <div className="mt-2 leading-[1.6] text-[#0a0a0a]/70 max-w-[340px] os-item-desc md:text-[21px]">{it.d}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        /* Make the section taller on mobile so cards stay inside; background may crop */
        .os-section{min-height: clamp(800px, 40vw, 1600px)}
        .os-bg{position:absolute;inset:0;background:url('/images/our_services_background.svg') center/cover no-repeat}
        .os-shade{position:absolute;inset:0;background:rgba(255,255,255,0.3)}
        /* Fluid text sizing on mobile */
        .os-title{font-size: clamp(22px, 6vw, 48px)}
        .os-bullet{width: clamp(8px, 2.5vw, 12px); height: clamp(8px, 2.5vw, 12px)}
        .os-item-title{font-size: clamp(16px, 4.5vw, 24px)}
        .os-item-desc{font-size: clamp(14px, 3.8vw, 20px)}
      `}</style>
    </section>
  )
}

function TestimonialsNew({ locale }: { locale: 'ru' | 'en' }) {
  const items =
    locale === 'en'
      ? [
        { name: 'John Doe', text: 'Professional, creative, and always one step ahead — they truly understand how to build a strong brand image.' },
        { name: 'John Doe', text: 'Professional, creative, and always one step ahead — they truly understand how to build a strong brand image.' },
        { name: 'John Doe', text: 'Professional, creative, and always one step ahead — they truly understand how to build a strong brand image.' },
      ]
      : [
        { name: 'Иван Иванов', text: 'Профессионально, креативно и всегда на шаг впереди — они действительно понимают, как построить сильный имидж бренда.' },
        { name: 'Иван Иванов', text: 'Профессионально, креативно и всегда на шаг впереди — они действительно понимают, как построить сильный имидж бренда.' },
        { name: 'Иван Иванов', text: 'Профессионально, креативно и всегда на шаг впереди — они действительно понимают, как построить сильный имидж бренда.' },
      ]
  return (
    <section id="testimonials" className={`relative ${geometria.className}`}>
      <div className="relative t-section">
        <div className="t-bg" />
        <div className="t-shade" />
        <div className="relative t-inner">
          <div className="container-max">
            <div className="grid items-center">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-7 md:gap-10 max-w-[1220px] mx-auto">
                {items.map((it, i) => (
                  <div key={i} className="relative rounded-[18px] border border-black/5 bg-white/35 backdrop-blur-[2px] shadow-[0_6px_24px_rgba(0,0,0,0.08),inset_0_0_0_1px_rgba(255,255,255,0.35)]">
                    <div className="absolute inset-0 rounded-[18px] pointer-events-none" style={{ background: 'radial-gradient(120% 120% at 30% 20%, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.2) 45%, rgba(255,255,255,0.08) 100%)' }} />
                    <svg className="absolute -top-7 left-4 text-black/70" width="72" height="56" viewBox="0 0 36 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16 2 L8 12 L16 22" stroke="currentColor" strokeWidth="1" fill="none" />
                      <path d="M28 2 L20 12 L28 22" stroke="currentColor" strokeWidth="1" fill="none" />
                    </svg>
                    <svg className="absolute -bottom-7 right-4 rotate-180 text-black/70" width="72" height="56" viewBox="0 0 36 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16 2 L8 12 L16 22" stroke="currentColor" strokeWidth="1" fill="none" />
                      <path d="M28 2 L20 12 L28 22" stroke="currentColor" strokeWidth="1" fill="none" />
                    </svg>
                    <div className="relative p-7 md:p-8 text-[#0a0a0a]">
                      <div className="font-semibold mb-4 tm-name">{it.name}</div>
                      <div className="tm-text text-[#0a0a0a]/75">{it.text}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        /* Testimonials — mobile like ServicesNew */
        .t-section{min-height: clamp(800px, 40vw, 1400px); position: relative}
        .t-inner{min-height: inherit; display: grid; align-items: center}
        .t-bg{position:absolute;inset:0;background:url('/images/team_background.svg') center/cover no-repeat}
        .t-shade{position:absolute;inset:0;background:rgba(255,255,255,0.30)}
        .tm-name{font-size: clamp(18px, 5vw, 24px)}
        .tm-text{font-size: clamp(14px, 4.2vw, 17px); line-height: clamp(20px, 6vw, 28px)}
      `}</style>
    </section>
  )
}

function ContactSection({ locale }: { locale: 'ru' | 'en' }) {
  const t = locale === 'en'
    ? {
      title: 'Contact us to discuss your tasks',
      cta: 'Get a consultation',
      dl1: 'Download company presentation',
      dl2: 'Request price list',
    }
    : {
      title: 'Свяжитесь с нами, чтобы\nобсудить ваши задачи',
      cta: 'Получить консультацию',
      dl1: 'Скачать презентацию компании',
      dl2: 'Запросить прайс‑лист',
    }
  return (
    <section id="contact" className={`relative overflow-hidden py-16 md:py-24 bg-white ${geometria.className}`}>
      <div className="container-max">
        <h2 className="text-center text-[34px] md:text-[54px] leading-[1.1] font-semibold mb-14 md:mb-20 max-w-[780px] mx-auto">
          <span
            className="inline-block bg-clip-text text-transparent"
            style={{
              background:
                'linear-gradient(89.26deg, #53897B 0.3%, #86BCAE 27.76%, #53897B 56.54%, #86BCAE 77.7%, #2E6456 99.68%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >{t.title}</span>
        </h2>

        <div className="mx-auto flex flex-col items-center gap-6">
          <button className="relative rounded-full px-8 md:px-10 py-4 md:py-5 text-white text-[18px] md:text-[20px] font-semibold shadow-[0_8px_24px_rgba(0,0,0,0.15)] overflow-hidden border border-black/20">
            {/* background image with filters (like Services) */}
            <span
              className="absolute inset-0 rounded-[14px] bg-center bg-cover blur-[0px] brightness-100 saturate-145"
              style={{ backgroundImage: "url('/images/button_background.svg')" }}
            />
            {/* dark overlay */}
            <span className="pointer-events-none absolute inset-0 rounded-[14px]" style={{
              background:
                'linear-gradient(180deg, rgba(27,44,39,0.82) 0%, rgba(27,44,39,0.74) 55%, rgba(27,44,39,0.8) 100%)',
            }} />
            {/* inner border with slight blur (bigger inset from edges) */}
            <span className="absolute inset-[7px] rounded-full border border-white/30 backdrop-blur-[1px]" />
            {/* glossy highlight */}
            <span className="absolute inset-x-2 top-0 h-6 rounded-full opacity-35" style={{
              background:
                'radial-gradient(120% 100% at 50% 0%, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.25) 65%, rgba(255,255,255,0) 100%)'
            }} />
            <span className="relative drop-shadow-[0_2px_0_rgba(0,0,0,0.35)]">{t.cta}</span>
          </button>

          <div className="text-center text-[#0a0a0a]">
            <a href="#" className="block underline underline-offset-2">{t.dl1}</a>
            <a href="#" className="block underline underline-offset-2 mt-2">{t.dl2}</a>
          </div>
        </div>
      </div>
    </section>
  )
}

function PhysicalLensCard({
  className,
  children,
  sectionRef,
  bgImgWrapRef,
  edgePx = 0,
  eyeOffsetX = 0,
  eyeOffsetY = 0,
}: {
  className?: string
  children?: React.ReactNode
  sectionRef: React.MutableRefObject<HTMLDivElement | null>
  bgImgWrapRef: React.MutableRefObject<HTMLDivElement | null>
  edgePx?: number
  eyeOffsetX?: number
  eyeOffsetY?: number
}) {
  const wrapRef = useRef<HTMLDivElement | null>(null)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  // Параметры «оптики» (единицы — CSS px)
  const IOR = 1.52            // показатель преломления стекла
  const R = 20               // радиус кривизны кромки (чуть мягче «выпуклость», меньше геометрического смещения)
  const THICK = 20            // толщина стекла — меньше, чтобы не «перегибало» центральные искажения
  const EYE_H = 3240           // ближе «зрачок» — сильнее параллакс и боковые деформации
  const BG_DEPTH = 10         // фон чуть дальше — больше рефракция относительно фона
  const TINT = [0, 0, 0] // #74AA9C в линейном приближении
  const UNFLIP = 1.0          // 1.0 — разворачиваем изображение обратно; 0.0 — чистая физика (перевёрнутое)

  useEffect(() => {
    const cardEl = wrapRef.current
    const canvas = canvasRef.current
    const bgWrap = bgImgWrapRef.current
    if (!cardEl || !canvas || !bgWrap) return

    const bgImg: HTMLImageElement | null = bgWrap.querySelector('img')
    if (!bgImg) return

    const gl = canvas.getContext('webgl', { premultipliedAlpha: true, alpha: true, antialias: true })
    if (!gl) return
    const glCtx = gl as WebGLRenderingContext

    // ---------- Shaders ----------
    const vertSrc = `
      attribute vec2 a_pos;
      varying vec2 v_uv;
      void main() {
        v_uv = a_pos * 0.5 + 0.5;
        gl_Position = vec4(a_pos, 0.0, 1.0);
      }
    `

    // ВАЖНО: добавили uniform u_unflip и разворот B.xy вокруг центра карточки
    const fragSrc = `
      precision highp float;
      varying vec2 v_uv;

      // Фон
      uniform sampler2D u_bg;
      uniform vec2 u_bgSize;           // размер отрисованного фона (px)
      uniform vec2 u_cardToBgOffset;   // вектор от левого-верхнего угла bg к левому-верхнему углу карточки (px)

      // Геометрия карточки
      uniform vec2 u_cardSize;         // размер карточки (px)
      uniform float u_edge;            // ширина линзовой кромки (px)

      // Оптика
      uniform float u_R;               // радиус кривизны кромки (px)
      uniform float u_thick;           // толщина стекла (px)
      uniform float u_eyeH;            // высота глаза (px)
      uniform vec2  u_eyeXY;           // положение глаза в локальных координатах карточки (px, центр = 0,0)
      uniform float u_bgDepth;         // расстояние до фона под стеклом (px)
      uniform float u_IOR;             // показатель преломления стекла
      uniform vec3  u_tint;            // зелёный тон для приближения mix-blend: color
      uniform float u_tintStrength;    // сила окраски (0..1)
      uniform float u_unflip;          // 1.0 — разворачиваем изображение обратно (инверсию убираем)
      uniform float u_flipX;
      uniform float u_maxBlurPx;       // максимальный ДОБАВОЧНЫЙ радиус блюра у внешнего края (px)
      uniform float u_baseBlurPx;      // базовый блюр по всей карточке (px)
      uniform float u_edgeZoom;        // коэффициент «рассеивающей линзы» у краёв (0..1), увеличивает картинку
      uniform float u_mirrorBandPx;    // ширина полосы у границы, в которой зеркалим Y (px)
      uniform float u_flip180;         // 1.0 => поворачиваем всё изображение под карточкой на 180° (инвертируем p)
      uniform float u_flipH;           // 1.0 => отзеркалить всю карточку по горизонтали (X)

      // SDF прямоугольника
      float sdBox(in vec2 p, in vec2 b) {
        vec2 q = abs(p) - b;
        return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0);
      }
      vec2 grad_sdBox(vec2 p, vec2 b) {
        float e = 1.0;
        float d  = sdBox(p, b);
        float dx = sdBox(p + vec2(e, 0.0), b) - d;
        float dy = sdBox(p + vec2(0.0, e), b) - d;
        return vec2(dx, dy) / e;
      }
      vec2 bgUV(vec2 worldPxOnBg) {
        return clamp(worldPxOnBg / u_bgSize, 0.0, 1.0);
      }

      void main() {
        vec2 halfSize = 0.5 * u_cardSize;
        vec2 p = (v_uv - 0.5) * u_cardSize;

        // SDF прямоугольника: d<0 внутри. Нам нужна глубина внутрь от границы.
        float d = sdBox(p, halfSize);
        float distIn = max(0.0, -d);               // 0 на самой границе, растёт к центру

        // Линейное затухание кривизны от края к внутренней границе эффекта
        float edgeW = max(u_edge, 0.001);
        float t = clamp(distIn / edgeW, 0.0, 1.0);
        float k = 1.0 - smoothstep(0.0, 1.0, t);
        // Отдельная мягкая полоса для зеркала по краю, независимая от edgePx
        float tMirror = clamp(distIn / max(u_mirrorBandPx, 0.001), 0.0, 1.0);
        float kMirror = 1.0 - smoothstep(0.0, 1.0, tMirror);

        float zTop = -((distIn*distIn) / (2.0 * u_R)) * k;

        vec2 g = grad_sdBox(p, halfSize);
        vec2 dz = ((distIn / u_R) * k) * g;
        vec3 nTop = normalize(vec3(-dz.x, -dz.y, 1.0));

        vec3 E = vec3(u_eyeXY, u_eyeH);
        vec3 P = vec3(p, zTop);
        vec3 I = normalize(P - E);

        float etaAir = 1.0;
        float etaGlass = u_IOR;
        vec3 T1 = refract(I, nTop, etaAir / etaGlass);
        if (length(T1) < 1e-5) T1 = reflect(I, nTop);

        float s1 = (-u_thick - P.z) / T1.z;
        vec3 Q = P + T1 * s1;

        vec3 nBottom = vec3(0.0, 0.0, 1.0);
        vec3 T2 = refract(T1, nBottom, etaGlass / etaAir);
        if (length(T2) < 1e-5) T2 = reflect(T1, nBottom);

        float s2 = (-u_thick - u_bgDepth - Q.z) / T2.z;
        vec3 B = Q + T2 * s2;

        // ----- АНТИ-ИНВЕРСИЯ -----
        // Реальная линза даёт перевёрнутую картинку относительно оптической оси (центра).
        // Чтобы «развернуть обратно», зеркалим локальные координаты попадания B.xy вокруг центра.
        // u_unflip = 1.0 => B.xy := -B.xy;  u_unflip = 0.0 => без изменений.
        vec2 BlocalBase = mix(B.xy, -B.xy, step(0.5, u_unflip));
        BlocalBase.x = mix(BlocalBase.x, -BlocalBase.x, step(0.5, u_flipX));
        // Отзеркаливаем кромку относительно диагонали (y = x): плавно меняем местами X и Y по весу kMirror
        vec2 Blocal = mix(BlocalBase, vec2(BlocalBase.y, BlocalBase.x), kMirror);

        vec2 hitOnBgPx = u_cardToBgOffset + (Blocal + halfSize);

        // Плавный вес эффекта у кромки (k уже посчитан выше)
        // Рассеивающая линза: у краёв увеличиваем изображение (zoom-in)
        // Реализуем через локальное «сжатие» координаты p -> p/(1+zoom), смешанное по k
        float zoom = clamp(u_edgeZoom, 0.0, 1.0);
        vec2 pZoom = p / (1.0 + zoom);             // центр без изменения, равномерный zoom-in
        vec2 pMixed = mix(p, pZoom, k);            // к центру -> исходное p, к краю -> pZoom
        // Глобальный поворот 180°: инвертируем локальные координаты выборки
        vec2 pMixedRot = mix(pMixed, -pMixed, step(0.5, u_flip180));
        // Глобальное горизонтальное зеркало
        float doFlipH = step(0.5, u_flipH);
        vec2 pMixedFinal = vec2(mix(pMixedRot.x, -pMixedRot.x, doFlipH), pMixedRot.y);
        vec2 baseHitPx = u_cardToBgOffset + (pMixedFinal + halfSize);
        vec2 uv = bgUV(baseHitPx);

        // --- Blur: базовый по всей карточке + усиление к краю ---
        float wEdge = k;
        float blurPx = u_baseBlurPx + wEdge * u_maxBlurPx;
        vec2 texel = 1.0 / u_bgSize;
        vec2 o = texel * blurPx;

        vec3 sharp = texture2D(u_bg, uv).rgb;
        // 9-tap box/gauss-ish blur вокруг uv
        vec3 blurSum = sharp * 0.2;
        blurSum += texture2D(u_bg, uv + vec2( o.x,  0.0)).rgb * 0.12;
        blurSum += texture2D(u_bg, uv + vec2(-o.x,  0.0)).rgb * 0.12;
        blurSum += texture2D(u_bg, uv + vec2( 0.0,  o.y)).rgb * 0.12;
        blurSum += texture2D(u_bg, uv + vec2( 0.0, -o.y)).rgb * 0.12;
        blurSum += texture2D(u_bg, uv + vec2( o.x,  o.y)).rgb * 0.08;
        blurSum += texture2D(u_bg, uv + vec2(-o.x,  o.y)).rgb * 0.08;
        blurSum += texture2D(u_bg, uv + vec2( o.x, -o.y)).rgb * 0.08;
        blurSum += texture2D(u_bg, uv + vec2(-o.x, -o.y)).rgb * 0.08;
        vec3 blurred = blurSum;

        vec3 samp = mix(sharp, blurred, wEdge);

        vec3 tinted = mix(samp, samp * u_tint, clamp(u_tintStrength, 0.0, 1.0));
        gl_FragColor = vec4(tinted, 1.0);
      }
    `

    const compile = (type: number, src: string) => {
      const sh = gl.createShader(type)!
      gl.shaderSource(sh, src)
      gl.compileShader(sh)
      if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
        console.error('Shader error:', gl.getShaderInfoLog(sh))
        gl.deleteShader(sh)
        return null
      }
      return sh
    }

    const vs = compile(glCtx.VERTEX_SHADER, vertSrc)
    const fs = compile(glCtx.FRAGMENT_SHADER, fragSrc)
    if (!vs || !fs) return

    const prog = glCtx.createProgram()!
    glCtx.attachShader(prog, vs)
    glCtx.attachShader(prog, fs)
    glCtx.linkProgram(prog)
    if (!glCtx.getProgramParameter(prog, glCtx.LINK_STATUS)) {
      console.error('Program link error:', glCtx.getProgramInfoLog(prog))
      return
    }
    glCtx.useProgram(prog)

    // Quad
    const buf = glCtx.createBuffer()
    glCtx.bindBuffer(glCtx.ARRAY_BUFFER, buf)
    glCtx.bufferData(glCtx.ARRAY_BUFFER, new Float32Array([
      -1, -1, 1, -1, -1, 1,
      1, -1, 1, 1, -1, 1,
    ]), glCtx.STATIC_DRAW)
    const locPos = glCtx.getAttribLocation(prog, 'a_pos')
    glCtx.enableVertexAttribArray(locPos)
    glCtx.vertexAttribPointer(locPos, 2, glCtx.FLOAT, false, 0, 0)

    // Текстура фона
    const tex = glCtx.createTexture()!
    glCtx.bindTexture(glCtx.TEXTURE_2D, tex)
    glCtx.texParameteri(glCtx.TEXTURE_2D, glCtx.TEXTURE_WRAP_S, glCtx.CLAMP_TO_EDGE)
    glCtx.texParameteri(glCtx.TEXTURE_2D, glCtx.TEXTURE_WRAP_T, glCtx.CLAMP_TO_EDGE)
    glCtx.texParameteri(glCtx.TEXTURE_2D, glCtx.TEXTURE_MIN_FILTER, glCtx.LINEAR)
    glCtx.texParameteri(glCtx.TEXTURE_2D, glCtx.TEXTURE_MAG_FILTER, glCtx.LINEAR)

    // Uniforms
    const u_bg = glCtx.getUniformLocation(prog, 'u_bg')
    const u_bgSize = glCtx.getUniformLocation(prog, 'u_bgSize')
    const u_cardToBgOffset = glCtx.getUniformLocation(prog, 'u_cardToBgOffset')
    const u_cardSize = glCtx.getUniformLocation(prog, 'u_cardSize')
    const u_edge = glCtx.getUniformLocation(prog, 'u_edge')
    const u_R = glCtx.getUniformLocation(prog, 'u_R')
    const u_thick = glCtx.getUniformLocation(prog, 'u_thick')
    const u_eyeH = glCtx.getUniformLocation(prog, 'u_eyeH')
    const u_eyeXY = glCtx.getUniformLocation(prog, 'u_eyeXY')
    const u_bgDepth = glCtx.getUniformLocation(prog, 'u_bgDepth')
    const u_IOR = glCtx.getUniformLocation(prog, 'u_IOR')
    const u_tint = glCtx.getUniformLocation(prog, 'u_tint')
    const u_tintStrength = glCtx.getUniformLocation(prog, 'u_tintStrength')
    const u_unflip = glCtx.getUniformLocation(prog, 'u_unflip')
    const u_flipX = glCtx.getUniformLocation(prog, 'u_flipX')
    const u_maxBlurPx = glCtx.getUniformLocation(prog, 'u_maxBlurPx')
    const u_baseBlurPx = glCtx.getUniformLocation(prog, 'u_baseBlurPx')
    const u_mirrorBandPx = glCtx.getUniformLocation(prog, 'u_mirrorBandPx')
    const u_flip180 = glCtx.getUniformLocation(prog, 'u_flip180')
    const u_flipH = glCtx.getUniformLocation(prog, 'u_flipH')

    glCtx.uniform1i(u_bg, 0)
    glCtx.uniform1f(u_edge, edgePx)
    glCtx.uniform1f(u_R, R)
    glCtx.uniform1f(u_thick, THICK)
    glCtx.uniform1f(u_eyeH, EYE_H)
    glCtx.uniform1f(u_bgDepth, BG_DEPTH)
    glCtx.uniform1f(u_IOR, IOR)
    glCtx.uniform3f(u_tint, TINT[0], TINT[1], TINT[2])
    // важное: не дублируем окраску — фон уже окрашен overlay'ем в Stats
    glCtx.uniform1f(u_tintStrength, 0.0)
    glCtx.uniform1f(u_unflip, UNFLIP) // ВКЛЮЧИЛ «анти-инверсию»
    glCtx.uniform1f(u_flipX, 1.0)
    // Поворот подложки на 180° (1.0 = включено)
    glCtx.uniform1f(u_flip180, 1.0)
    // Глобальное горизонтальное зеркало
    glCtx.uniform1f(u_flipH, 1.0)
    // Базовые значения (перезапишем при ресайзе от размеров карточки)
    glCtx.uniform1f(u_maxBlurPx, 5.0)
    glCtx.uniform1f(u_baseBlurPx, 1.5)
    // Полоса зеркалирования у кромки по умолчанию
    glCtx.uniform1f(u_mirrorBandPx, Math.max(40, edgePx || 60))

    function resizeAndDraw() {
      const dpr = Math.max(1, Math.min(3, window.devicePixelRatio || 1))
      const cardRect = cardEl!.getBoundingClientRect()
      const bgRect = bgImg!.getBoundingClientRect()

      const w = Math.max(1, Math.floor(cardRect.width))
      const h = Math.max(1, Math.floor(cardRect.height))
      canvas!.style.width = `${w}px`
      canvas!.style.height = `${h}px`
      canvas!.width = Math.max(1, Math.floor(w * dpr))
      canvas!.height = Math.max(1, Math.floor(h * dpr))
      glCtx.viewport(0, 0, canvas!.width, canvas!.height)

      glCtx.uniform2f(u_cardSize, w, h)
      // Адаптивный блюр: базовый по всему телу + добавка к краю
      const addEdgeBlur = Math.min(9.0, Math.max(3.0, Math.min(w, h) / 140))
      const baseBodyBlur = Math.min(3.0, Math.max(1.0, Math.min(w, h) / 420))
      glCtx.uniform1f(u_maxBlurPx, addEdgeBlur)
      glCtx.uniform1f(u_baseBlurPx, baseBodyBlur)
      // Ширина полосы зеркала: берём edgePx если задан, иначе адаптивно от размера
      const mirrorBand = (edgePx && edgePx > 0) ? edgePx : Math.max(40, Math.min(w, h) / 6)
      glCtx.uniform1f(u_mirrorBandPx, mirrorBand)
      // Положение зрачка в локальных координатах карточки: центр (0,0) + смещение из пропсов
      const eyeLocalX = eyeOffsetX
      const eyeLocalY = eyeOffsetY
      glCtx.uniform2f(u_eyeXY, eyeLocalX, eyeLocalY)

      const offsetX = cardRect.left - bgRect.left
      const offsetY = cardRect.top - bgRect.top
      glCtx.uniform2f(u_cardToBgOffset, offsetX, offsetY)

      glCtx.activeTexture(glCtx.TEXTURE0)
      glCtx.bindTexture(glCtx.TEXTURE_2D, tex)
      try {
        glCtx.texImage2D(glCtx.TEXTURE_2D, 0, glCtx.RGBA, glCtx.RGBA, glCtx.UNSIGNED_BYTE, bgImg as HTMLImageElement)
      } catch (_) {
        // Ок, Safari иногда капризничает с SVG → можно заменить на растровый фон
      }
      glCtx.uniform2f(u_bgSize, bgRect.width, bgRect.height)

      glCtx.drawArrays(glCtx.TRIANGLES, 0, 6)
    }

    const ro = new ResizeObserver(resizeAndDraw)
    ro.observe(cardEl)
    ro.observe(bgWrap)
    window.addEventListener('scroll', resizeAndDraw, { passive: true })
    const onLoad = () => resizeAndDraw()
    if (bgImg.complete) resizeAndDraw()
    else bgImg.addEventListener('load', onLoad)

    return () => {
      ro.disconnect()
      window.removeEventListener('scroll', resizeAndDraw)
      bgImg.removeEventListener('load', onLoad)
      glCtx.deleteProgram(prog)
      glCtx.deleteShader(vs)
      glCtx.deleteShader(fs)
      glCtx.deleteBuffer(buf)
      glCtx.deleteTexture(tex)
    }
  }, [edgePx, sectionRef, bgImgWrapRef])

  return (
    <div ref={wrapRef} className={`relative ${className || ''}`}>
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0 rounded-[inherit] z-0"
        aria-hidden
      />
      <div className="relative z-10 h-full w-full">{children}</div>
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
                <a href={`/${locale}`} className="font-semibold text-white hover:text-white">{msg.nav.main}</a>
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
      <div className={`container-max grid min-h-[680px] grid-cols-1 items-center gap-12 py-20 md:grid-cols-2 ${geometria.className}`}>
        <div>
          <h1 className="mb-16 font-bold leading-tight text-center md:text-left hero-title">
            PRIX Club
          </h1>
          <div className="space-y-1 font-semibold text-center md:text-left">
            <div className="text-white/90 hero-line">{lines[locale][0]}</div>
            <div
              className="inline-block bg-clip-text text-transparent leading-[1.15] pb-[2px] md:pb-[3px] hero-accent"
              style={{
                background: 'linear-gradient(89.26deg, #53897B 0.3%, #86BCAE 27.76%, #53897B 56.54%, #86BCAE 77.7%, #2E6456 99.68%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {lines[locale][1]}
            </div>
            <div className="text-white/90 hero-line">{lines[locale][2]}</div>
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
      </div>
      <style jsx>{`
        .hero-title{font-size:clamp(52px,10vw,96px)}
        .hero-line{font-size:clamp(28px,4.2vw,36px)}
        .hero-accent{font-size:clamp(34px,6vw,54px)}
      `}</style>
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
    { key: 'gov', img: '/images/our_clients_background.svg', title: locale === 'en' ? 'Government\nRelations' : 'Government\nRelations' },
    { key: 'it', img: '/images/The_Cabinet_table.svg', title: locale === 'en' ? 'IT solutions for\ncommunications' : 'IT‑решения для\nкоммуникаций' },
    { key: 'digital', img: '/images/digital_compagns.svg', title: locale === 'en' ? 'Digital\ncampaigns' : 'Digital\nкампании' },
  ]
  return (
    <section id="services" className="relative py-20 bg-white text-[#0a0a0a]">
      <div className="container-max">
        {/* Intro paragraph */}
        <p className="mx-auto mb-10 max-w-[820px] text-center text-[20px] leading-[28px] md:text-[27px] md:leading-[34px] font-medium">
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
            <div key={c.key} className="relative overflow-hidden rounded-[20px] bg-black srv-card mx-auto">
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
                <div className={`text-center srv-title leading-[1.1] font-semibold text-white whitespace-pre-line ${geometria.className}`}>
                  {c.title}
                </div>
              </div>
            </div>
          ))}
        </div>
        <style jsx>{`
          .srv-card{aspect-ratio:282/153;width:100%}
          @media (max-width:640px){
            .srv-card{width:80%;aspect-ratio:210/120;border-radius:12px}
            .srv-title{font-size:18px}
          }
          @media (min-width:641px){
            .srv-title{font-size:27px}
          }
        `}</style>
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

// function Team({ msg, locale }: { msg: any; locale: 'ru' | 'en' }) {
//   const people = locale === 'en'
//     ? [
//       { name: 'Maria', role: 'Strategist' },
//       { name: 'Alexey', role: 'Developer' },
//       { name: 'Elena', role: 'Designer' },
//       { name: 'Igor', role: 'Marketer' },
//     ]
//     : [
//       { name: 'Мария', role: 'Стратег' },
//       { name: 'Алексей', role: 'Разработчик' },
//       { name: 'Елена', role: 'Дизайнер' },
//       { name: 'Игорь', role: 'Маркетолог' },
//     ]
//   return (
//     <section id="team" className="section bg-gradient-to-b from-[var(--bg-2)] to-bg">
//       <Image src="/images/team_background.svg" alt="" fill className="-z-10 object-cover opacity-35" />
//       <div className="container-max">
//         <h2 className="section-title">{msg.sections.team}</h2>
//         <div className="grid gap-5 md:grid-cols-4">
//           {people.map((p) => (
//             <div key={p.name} className="card text-center">
//               <div className="mx-auto mb-3 h-24 w-24 rounded-full bg-gradient-to-br from-brand/60 to-brand-dark/60 shadow-inner" />
//               <div className="font-extrabold">{p.name}</div>
//               <div className="text-white/70">{p.role}<//   )
// }

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
            <a href={`/${locale}/works`} className="hover:text-white">{msg.nav.works}</a>
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
