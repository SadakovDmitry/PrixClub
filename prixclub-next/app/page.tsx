import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Clients />
        <Team />
      </main>
      <Footer />
    </>
  )
}

function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-bg/70 backdrop-blur">
      <div className="container-max flex h-16 items-center justify-between gap-6">
        <Image src="/images/header_logo.svg" alt="PRIX Club" width={40} height={40} className="h-10 w-10" />
        <nav className="hidden items-center gap-6 text-white/80 md:flex">
          <a href="#services" className="hover:text-white">Услуги</a>
          <a href="#clients" className="hover:text-white">Клиенты</a>
          <a href="#team" className="hover:text-white">Команда</a>
          <a href="#contacts" className="hover:text-white">Контакты</a>
        </nav>
        <a className="btn-outline" href="#contacts">Войти</a>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--bg-2)]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="container-max grid min-h-[520px] grid-cols-1 items-center gap-6 py-12 md:grid-cols-2"
      >
        <div>
          <h1 className="mb-4 text-4xl font-extrabold leading-tight md:text-5xl">
            Digital-агентство полного цикла
          </h1>
          <p className="mb-7 max-w-[560px] text-white/80">
            Продвигаем бренды, создаём сайты и настраиваем рекламу, чтобы вы росли быстрее.
          </p>
          <a href="#consult" className="btn-primary">Получить консультацию</a>
        </div>
        <div className="flex items-center justify-center">
          <Image
            src="/images/main_logo.svg"
            alt="Main art"
            width={560}
            height={440}
            className="max-h-[440px] drop-shadow-[0_30px_60px_rgba(0,0,0,0.35)]"
            priority
          />
        </div>
      </motion.div>
      <Image src="/images/up_background.svg" alt="" fill className="pointer-events-none -z-10 object-cover opacity-30" />
    </section>
  )
}

function Services() {
  const cards = [
    { key: 'pr', img: '/images/public_media_starateges_card.svg', title: 'Public Relations\nstrategies' },
    { key: 'gov', img: '/images/our_clients_background.png', title: 'Government\nRelations' },
    { key: 'it', img: '/images/The_Cabinet_table.svg', title: 'IT solutions for\ncommunications' },
    { key: 'digital', img: '/images/digital_compagns.svg', title: 'Digital\ncampaigns' },
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
          {` is a reputation management agency that combines classic PR with IT tools to achieve our clients’ goals. We help businesses and government institutions build dialogue with their audiences in today’s digital world.`}
        </p>

        {/* Cards */}
        <div className="mx-auto grid max-w-[1120px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c) => (
            <div key={c.key} className="relative overflow-hidden rounded-[20px] bg-black" style={{aspectRatio:'282/153'}}>
              {/* Background image covers entire card */}
              <Image src={c.img} alt="" fill className="object-cover [filter:contrast(1.05)_saturate(0.9)]" />
              {/* Outer overlay: solid rgba(46,100,86,0.75) */}
              <div className="absolute inset-0" style={{background:'rgba(46, 100, 86, 0.75)'}} />
              {/* Inner rounded translucent panel (no blur) */}
              <div className="absolute inset-0 grid place-items-center p-4">
                <div className="h-full w-full rounded-[14px] border border-white/20 relative overflow-hidden shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06),inset_0_0_0_2px_rgba(46,100,86,0.35)]" style={{background:'rgba(46, 100, 86, 0.75)'}}>
                  {/* Edge highlight to simulate glass, without blur */}
                  <div
                    className="pointer-events-none absolute inset-0 rounded-[14px] mix-blend-screen"
                    style={{
                      background:
                        'radial-gradient(120% 120% at 50% 50%, rgba(255,255,255,0) 60%, rgba(255,255,255,0.08) 78%, rgba(255,255,255,0.12) 100%)'
                    }}
                  />
                </div>
              </div>
              {/* Centered title only */}
              <div className="pointer-events-none absolute inset-0 grid place-items-center p-6">
                <div className="text-center text-[27px] leading-[1.1] font-semibold text-white whitespace-pre-line" style={{fontFamily:'Geometria, Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif'}}>
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

function Clients() {
  return (
    <section id="clients" className="section">
      <div className="container-max relative z-[1]">
        <h2 className="section-title">Наши клиенты</h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-16 rounded-xl border border-white/10 bg-white/10" />
          ))}
        </div>
      </div>
      <Image src="/images/our_clients_background.png" alt="" fill className="-z-10 object-cover opacity-60" />
    </section>
  )
}

function Team() {
  const people = [
    { name: 'Мария', role: 'Стратег' },
    { name: 'Алексей', role: 'Разработчик' },
    { name: 'Елена', role: 'Дизайнер' },
    { name: 'Игорь', role: 'Маркетолог' },
  ]
  return (
    <section id="team" className="section bg-gradient-to-b from-[var(--bg-2)] to-bg">
      <Image src="/images/team_background.svg" alt="" fill className="-z-10 object-cover opacity-35" />
      <div className="container-max">
        <h2 className="section-title">Команда</h2>
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

function Footer() {
  return (
    <footer id="contacts" className="border-t border-white/10 bg-[#0a221e] py-7">
      <div className="container-max grid items-start gap-6 md:grid-cols-[auto,1fr,1fr]">
        <Image src="/images/footer_logo.svg" alt="PRIX Club" width={72} height={72} className="h-18 w-auto" />
        <div>
          <div className="mb-1 font-extrabold">Контакты</div>
          <a className="block text-white/80 hover:text-white" href="mailto:info@prixclub.ru">info@prixclub.ru</a>
          <a className="block text-white/80 hover:text-white" href="tel:+79999999999">+7 999 999-99-99</a>
        </div>
        <div>
          <div className="mb-1 font-extrabold">Навигация</div>
          <a className="block text-white/80 hover:text-white" href="#services">Услуги</a>
          <a className="block text-white/80 hover:text-white" href="#clients">Клиенты</a>
          <a className="block text-white/80 hover:text-white" href="#team">Команда</a>
        </div>
        <div className="col-span-full text-white/60">© PRIX Club, 2025</div>
      </div>
    </footer>
  )
}
