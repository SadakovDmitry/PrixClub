"use client"
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'
import { geometria } from '../../../src/fonts/geometria'

export default function ContactsPage({ params: { locale } }: { params: { locale: 'ru' | 'en' } }) {
  const msg = {
    ru: { nav: { main: 'Главная', about: 'О нас', team: 'Команда', works: 'Работы', services: 'Услуги', contacts: 'Контакты', news: 'НОВОСТИ', reviews: 'ОТЗЫВЫ' }, footer: { copy: '© PRIX Club, 2025' } },
    en: { nav: { main: 'Main Page', about: 'About Us', team: 'Team', works: 'Works', services: 'Services', contacts: 'Contacts', news: 'NEWS', reviews: 'REVIEWS' }, footer: { copy: '© PRIX Club, 2025' } },
  }[locale]

  return (
    <div className={geometria.className}>
      <Header msg={msg} locale={locale} />

      {/* Hero Section - черный фон с изображением и фильтрами */}
      <section className="contacts-hero-section">
        {/* Фоновое изображение */}
        <div className="absolute contacts-bg-image">
          <Image
            src="/images/contacts/shutterstock_2651762307 1.svg"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>

        {/* Фильтр 1 - черный с multiply, opacity 0.5 */}
        <div className="absolute contacts-filter-dark">
          <Image
            src="/images/contacts/Rectangle 3266.svg"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>

        {/* Фильтр 2 - зеленый с hue */}
        <div className="absolute contacts-filter-green">
          <Image
            src="/images/contacts/Rectangle 3265.svg"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>

        {/* Заголовок "Контакты" */}
        <div className="absolute contacts-title-wrapper">
          <h1 className="contacts-title">
            {locale === 'en' ? 'Contacts' : 'Контакты'}
          </h1>
        </div>
      </section>

      {/* Map Section - белый фон с картой */}
      <section className="contacts-map-section">
        {/* Канвас карты - контейнер с фиксированным соотношением сторон */}
        <div className="relative w-full overflow-hidden aspect-[4/5] sm:aspect-[3/4] md:aspect-[16/9]">
          {/* Фон-карта - равномерное сжатие */}
          <Image
            src="/images/contacts/Screenshot_23 1.svg"
            alt="Карта"
            fill
            sizes="100vw"
            className="absolute inset-0 z-0 h-full w-full object-cover"
            style={{ objectPosition: 'center center' }}
          />

          {/* Красный пин - фиксированное позиционирование в процентах */}
          <Image
            src="/images/contacts/Group 2085662473.svg"
            alt="Метка"
            width={40}
            height={40}
            className="absolute z-15"
            style={{
              left: '77.5%',
              top: '44.29%',
              transform: 'translate(-50%, -100%)',
              width: 'clamp(16px, 2.78vw, 72px)',
              height: 'clamp(16px, 2.78vw, 72px)',
              objectFit: 'contain'
            }}
          />

          {/* Зеленое окошко с информацией */}
          <div className="absolute z-10 contacts-info-wrapper">
          {/* Подложка с blur */}
          <div className="absolute contacts-info-backdrop">
            <Image
              src="/images/contacts/Rectangle 3270(1).svg"
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 768px) 90vw, 46.53vw"
            />
          </div>

          {/* Основной блок - зеленый градиент */}
          <div className="absolute contacts-info-card">
            <Image
              src="/images/contacts/Rectangle 3270.svg"
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 768px) 90vw, 40.83vw"
            />

            {/* Эллипс - радиальный градиент */}
            <div className="absolute contacts-info-ellipse">
              <Image
                src="/images/contacts/Ellipse 18.svg"
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 768px) 90vw, 51.94vw"
              />
            </div>

            {/* Логотип и надпись */}
            <div className="absolute contacts-info-logo">
              {/* Логотип Vector */}
              <div className="absolute contacts-logo-icon">
                <Image
                  src="/images/contacts/Vector(1).svg"
                  alt="Logo"
                  width={65.44}
                  height={82.98}
                />
              </div>
              {/* Надпись PRIX CLUB */}
              <div className="absolute contacts-logo-text">
                <Image
                  src="/images/contacts/PRIX CLUB.svg"
                  alt="PRIX CLUB"
                  width={82.15}
                  height={50.4}
                />
              </div>
            </div>

            {/* Адрес */}
            <div className="absolute contacts-info-address">
              <p className="contacts-text-address">
                {locale === 'en' 
                  ? 'Moscow, Novaya Square, building 8, building 1, 4th floor, office 414'
                  : 'Москва, Новая площадь, дом 8 стр 1, 4 этаж, офис 414'}
              </p>
            </div>

            {/* Телефон */}
            <div className="absolute contacts-info-phone">
              <a href="tel:+79778848332" className="contacts-link-phone">
                +7 977 884 83 32
              </a>
            </div>

            {/* Email */}
            <div className="absolute contacts-info-email">
              <a href="mailto:info@prixclub.com" className="contacts-link-email">
                info@prixclub.com
              </a>
            </div>

            {/* Иконки WhatsApp и Telegram */}
            <div className="absolute contacts-info-whatsapp">
              <a href="https://wa.me/79778848332" target="_blank" rel="noopener noreferrer" className="block">
                <Image
                  src="/images/contacts/Vector.svg"
                  alt="WhatsApp"
                  width={49.92}
                  height={49.92}
                />
              </a>
            </div>
            <div className="absolute contacts-info-telegram">
              <a href="https://t.me/prixclub" target="_blank" rel="noopener noreferrer" className="block">
                <Image
                  src="/images/contacts/Exclude.svg"
                  alt="Telegram"
                  width={49.92}
                  height={49.92}
                />
              </a>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Consultation Form Section */}
      <section className="contacts-form-section relative w-full overflow-hidden">
        {/* Background image layer */}
        <img
          src="/images/contacts/24dd3bf728c9e9d524d682914c982bff.svg"
          alt=""
          className="absolute inset-0 z-0 w-full h-full object-cover select-none pointer-events-none"
        />

        {/* Фильтр */}
        <div className="absolute inset-0 contacts-form-filter">
          <Image
            src="/images/contacts/Rectangle 3265.svg"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>

        {/* Контент формы */}
        <div className="relative z-10 contacts-form-content">
          {/* Заголовок */}
          <h2 className="contacts-form-title">
            {locale === 'en' 
              ? 'Do you have a task for PR or digital? Tell us — we are ready to consult'
              : 'Есть задача по PR или digital? Расскажите нам – мы готовы проконсультировать'}
          </h2>

          {/* Форма */}
          <form className="contacts-form">
            {/* Ваше имя */}
            <input
              type="text"
              placeholder={locale === 'en' ? 'Your name' : 'Ваше имя'}
              className="contacts-form-input"
            />

            {/* E-mail */}
            <input
              type="email"
              placeholder="E-mail"
              className="contacts-form-input"
            />

            {/* Номер телефона */}
            <input
              type="tel"
              placeholder={locale === 'en' ? 'Phone number' : 'Номер телефона'}
              className="contacts-form-input"
            />

            {/* Название компании */}
            <input
              type="text"
              placeholder={locale === 'en' ? 'Company name' : 'Название компании'}
              className="contacts-form-input"
            />

            {/* Описание задачи */}
            <textarea
              placeholder={locale === 'en' ? 'Task description' : 'Описание задачи'}
              className="contacts-form-textarea"
              rows={4}
            />

            {/* Кнопка отправки */}
            <button type="submit" className="contacts-form-button">
              {locale === 'en' ? 'Send request' : 'Отправить запрос'}
            </button>
          </form>
        </div>
      </section>

      {/* Email Subscription Section */}
      <section className="contacts-email-section relative w-full min-h-[820px] md:min-h-[920px] py-16 md:py-24 pb-28 md:pb-36 overflow-visible">
        {/* Background image */}
        <img
          src="/images/contacts/fc21c6a2cfabe44c24a03a6c32f2a6dd2cdef7b1.jpg"
          alt=""
          className="absolute inset-0 z-0 w-full h-full object-cover object-[50%_32%] pointer-events-none"
        />

        {/* Content wrapper */}
        <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6 md:px-10 flex flex-col items-center justify-center text-center gap-6 md:gap-8 md:pt-8">
          {/* Menu container with logo */}
          <div className="contacts-email-menu relative mx-auto w-full max-w-[1100px] mt-6 md:mt-8 mb-6 md:mb-8 rounded-[28px] bg-white backdrop-blur-xl backdrop-saturate-150 border border-white/25 ring-1 ring-white/10 shadow-[0_10px_50px_rgba(0,0,0,0.35)]" style={{ opacity: 'var(--logo-container-opacity, 0.8)' }}>
            <div className="contacts-email-logo-wrapper">
              <Image
                src="/images/contacts/Vector(2).svg"
                alt="Logo"
                width={276}
                height={334}
                className="contacts-email-logo"
              />
            </div>
          </div>

          {/* Title */}
          <h2 className="contacts-email-title mx-auto text-center leading-tight max-w-[1100px]">
            {locale === 'en' 
              ? 'Leave your e-mail — we will send you a presentation and a basic price list of our services'
              : 'Оставьте свой e-mail – мы пришлём презентацию и базовый прайс-лист наших услуг'}
          </h2>

          {/* Email form */}
          <div className="contacts-email-form-wrapper relative z-10 mx-auto w-full max-w-[960px] mt-6 md:mt-8">
            <form className="contacts-email-form">
              <input
                type="email"
                placeholder="E-mail"
                className="contacts-email-input block w-full mx-auto text-center placeholder:text-center"
              />
              <button type="submit" className="contacts-email-button block mx-auto w-full max-w-[720px]">
                {locale === 'en' ? 'Send request' : 'Отправить запрос'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="contacts-reviews-section">
        {/* Background image */}
        <div className="absolute contacts-reviews-bg-image">
          <Image
            src="/images/contacts/4d8b9dcac971793fd83201905f7049305447bbf1.jpg"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>

        {/* Filter 1 - green with color blend */}
        <div className="absolute contacts-reviews-filter-green">
          <Image
            src="/images/contacts/Rectangle 3265(1).svg"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>

        {/* Filter 2 - gradient with multiply blend */}
        <div className="absolute contacts-reviews-filter-gradient">
          <Image
            src="/images/contacts/Rectangle 3266 (копия).svg"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>

        {/* Reviews */}
        <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6 md:px-10 text-center space-y-4 md:space-y-6 pt-16 md:pt-24">
          {/* Title */}
          <h2 className="contacts-reviews-title">
            {locale === 'en' ? 'Reviews' : 'Отзывы'}
          </h2>
          {/* Review 1 */}
          <article className="mx-auto w-full max-w-[720px] px-4 py-6 md:py-8 text-center space-y-3 md:space-y-4">
            <h3 className="contacts-review-org">
              {locale === 'en' ? 'Space Development Support Foundation' : 'Фонд Содействия Развитию Космонавтики'}
            </h3>
            <div className="contacts-review-line-gradient"></div>
            <p className="contacts-review-text">
              {locale === 'en' 
                ? 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
            </p>
            <div className="contacts-review-line-gradient"></div>
          </article>

          {/* Review 2 */}
          <article className="mx-auto w-full max-w-[720px] px-4 py-6 md:py-8 text-center space-y-3 md:space-y-4">
            <h3 className="contacts-review-org">
              {locale === 'en' ? 'Exporters and Importers Association' : 'Ассоциация Экспортеров и Импортеров'}
            </h3>
            <div className="contacts-review-line-gradient"></div>
            <p className="contacts-review-text">
              {locale === 'en' 
                ? 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
            </p>
            <div className="contacts-review-line-gradient"></div>
          </article>

          {/* Review 3 */}
          <article className="mx-auto w-full max-w-[720px] px-4 py-6 md:py-8 text-center space-y-3 md:space-y-4">
            <h3 className="contacts-review-org">
              {locale === 'en' ? 'Russian Industrialist' : 'Российкий Промышленник'}
            </h3>
            <div className="contacts-review-line-gradient"></div>
            <p className="contacts-review-text">
              {locale === 'en' 
                ? 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
            </p>
            <div className="contacts-review-line-gradient"></div>
          </article>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="contacts-faq-section">
        <h2 className="contacts-faq-title">
          {locale === 'en' ? 'FAQ: Most Frequently Asked Questions' : 'FAQ: Наиболее часто задаваемые вопросы'}
        </h2>

        {/* Question buttons */}
        <button className="contacts-faq-question contacts-faq-question-1">
          {locale === 'en' ? 'Question Name #1' : 'Название вопроса №1'}
        </button>

        {/* Expanded answer card for question #1 */}
        <div className="contacts-faq-card">
          <p className="contacts-faq-text">
            {locale === 'en' 
              ? 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
              : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
          </p>
        </div>
        <button className="contacts-faq-question contacts-faq-question-2">
          {locale === 'en' ? 'Question Name #2' : 'Название вопроса №2'}
        </button>
        <button className="contacts-faq-question contacts-faq-question-3">
          {locale === 'en' ? 'Question Name #3' : 'Название вопроса №3'}
        </button>
        <button className="contacts-faq-question contacts-faq-question-4">
          {locale === 'en' ? 'Question Name #4' : 'Название вопроса №4'}
        </button>
        <button className="contacts-faq-question contacts-faq-question-5">
          {locale === 'en' ? 'Question Name #5' : 'Название вопроса №5'}
        </button>
        <button className="contacts-faq-question contacts-faq-question-6">
          {locale === 'en' ? 'Question Name #6' : 'Название вопроса №6'}
        </button>
        <button className="contacts-faq-question contacts-faq-question-7">
          {locale === 'en' ? 'Question Name #7' : 'Название вопроса №7'}
        </button>
      </section>

      {/* News Carousel Section */}
      <section className="contacts-news-section">
        {/* Background image */}
        <div className="absolute contacts-news-bg-image">
          <Image
            src="/images/contacts/fc21c6a2cfabe44c24a03a6c32f2a6dd2cdef7b1.jpg"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            style={{ transform: 'matrix(1, 0, 0, -1, 0, 0)' }}
          />
        </div>

        {/* Filter 1 - green with color blend */}
        <div className="absolute contacts-news-filter-green">
          <Image
            src="/images/contacts/Rectangle 3265(1) (копия).svg"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>

        {/* Filter 2 - gradient with multiply blend */}
        <div className="absolute contacts-news-filter-gradient">
          <Image
            src="/images/contacts/Rectangle 3266 (другая копия).svg"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>

        {/* News card container */}
        <div className="absolute contacts-news-card">
          {/* News image */}
          <div className="absolute contacts-news-image">
            <Image
              src="/images/contacts/shutterstock_1254971608 1.svg"
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 768px) 90vw, 745.06px"
            />
          </div>
        </div>

        {/* News content */}
        <h3 className="absolute contacts-news-title">
          {locale === 'en' ? 'News #1' : 'Новость №1'}
        </h3>
        <h4 className="absolute contacts-news-subtitle">
          {locale === 'en' 
            ? 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
        </h4>
        <p className="absolute contacts-news-text">
          {locale === 'en' 
            ? 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            : 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
        </p>

        {/* Navigation arrows */}
        <button className="absolute contacts-news-arrow-right" aria-label="Next">
          <Image
            src="/images/contacts/Group 45.svg"
            alt="Next"
            width={73.04}
            height={145}
          />
        </button>
        <button className="absolute contacts-news-arrow-left" aria-label="Previous">
          <Image
            src="/images/contacts/Group 46.svg"
            alt="Previous"
            width={73.04}
            height={145}
          />
        </button>

        {/* Dots indicator */}
        <div className="absolute contacts-news-dots">
          <Image
            src="/images/contacts/Group 49.svg"
            alt=""
            width={135}
            height={7}
          />
        </div>
      </section>

      <Footer msg={msg} locale={locale} />

      <style jsx>{`
        /* Hero Section - на весь экран */
        .contacts-hero-section {
          width: 100vw;
          height: 56.25vw; /* 16:9 aspect ratio */
          min-height: 100vh;
          background: #000000;
          position: relative;
          overflow: hidden;
        }

        /* Фоновое изображение - на весь экран */
        .contacts-bg-image {
          width: 100%;
          height: 100%;
          inset: 0;
        }

        /* Фильтр 1 - черный с multiply - на весь экран */
        .contacts-filter-dark {
          width: 100%;
          height: 100%;
          inset: 0;
          mix-blend-mode: multiply;
          opacity: 0.5;
        }

        /* Фильтр 2 - зеленый с hue - на весь экран */
        .contacts-filter-green {
          width: 100%;
          height: 100%;
          inset: 0;
          mix-blend-mode: hue;
        }

        /* Заголовок */
        .contacts-title-wrapper {
          width: 25.76vw;
          max-width: 371px;
          height: auto;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          position: absolute;
        }

        .contacts-title {
          margin: 0;
          font-family: 'Geometria';
          font-style: normal;
          font-weight: 700;
          font-size: clamp(24px, 4vw, 55px);
          line-height: 100%;
          text-align: center;
          background: linear-gradient(89.26deg, #53897B 0.3%, #86BCAE 27.76%, #53897B 56.54%, #86BCAE 77.7%, #2E6456 99.68%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          color: transparent;
        }

        /* Map Section - на весь экран */
        .contacts-map-section {
          width: 100vw;
          background: #FFFFFF;
          position: relative;
          padding: 0;
        }

        /* Зеленое окошко - обертка */
        .contacts-info-wrapper {
          width: 46.53vw;
          max-width: 670px;
          height: 38.06vw;
          max-height: 548px;
          left: 5.49%;
          top: 10.86%;
          position: absolute;
        }

        /* Подложка с blur */
        .contacts-info-backdrop {
          width: 100%;
          height: 100%;
          inset: 0;
          filter: blur(3.47vw);
          position: absolute;
        }

        /* Основной блок - зеленый градиент */
        .contacts-info-card {
          position: relative;
          width: 87.76%;
          height: 87.59%;
          left: 6.12%;
          top: 6.2%;
          border-radius: clamp(12px, 1.39vw, 20px);
          box-shadow: 0px 0px clamp(20px, 2.78vw, 40px) rgba(134, 188, 174, 0.3);
          overflow: hidden;
        }

        /* Эллипс */
        .contacts-info-ellipse {
          width: 127.55%;
          height: 155.83%;
          left: 47.28%;
          top: -91.25%;
          opacity: 0.5;
          position: absolute;
        }

        /* Логотип и надпись - обертка */
        .contacts-info-logo {
          position: absolute;
          width: 27.04%;
          height: 17.29%;
          left: 7.65%;
          top: 9.38%;
        }

        .contacts-logo-icon {
          position: absolute;
          width: 41.16%;
          height: 100%;
          left: 0;
          top: 0;
        }

        .contacts-logo-text {
          position: absolute;
          width: 51.67%;
          height: 60.78%;
          left: 48.33%;
          top: 38.92%;
        }

        /* Адрес */
        .contacts-info-address {
          width: 81.63%;
          height: auto;
          left: 7.65%;
          top: 50%;
          transform: translateY(-50%);
          position: absolute;
        }

        .contacts-text-address {
          margin: 0;
          font-family: 'Geometria';
          font-style: normal;
          font-weight: 400;
          font-size: clamp(16px, 2.32vw, 33.44px);
          line-height: 110%;
          color: #FFFFFF;
        }

        /* Телефон */
        .contacts-info-phone {
          width: 51.02%;
          height: auto;
          left: 7.65%;
          top: 72.92%;
          position: absolute;
        }

        .contacts-link-phone {
          font-family: 'Geometria';
          font-style: normal;
          font-weight: 700;
          font-size: clamp(18px, 2.51vw, 36.18px);
          line-height: 120%;
          color: #FFFFFF;
          text-decoration: none;
          transition: opacity 0.2s;
          display: block;
        }

        .contacts-link-phone:hover {
          opacity: 0.8;
        }

        /* Email */
        .contacts-info-email {
          width: 37.24%;
          height: auto;
          left: 7.65%;
          top: 82.71%;
          position: absolute;
        }

        .contacts-link-email {
          font-family: 'Geometria';
          font-style: normal;
          font-weight: 400;
          font-size: clamp(14px, 1.69vw, 24.37px);
          line-height: 110%;
          color: #FFFFFF;
          text-decoration: none;
          transition: opacity 0.2s;
          display: block;
        }

        .contacts-link-email:hover {
          opacity: 0.8;
        }

        /* Иконки */
        .contacts-info-whatsapp {
          width: clamp(30px, 3.47vw, 49.92px);
          height: clamp(30px, 3.47vw, 49.92px);
          left: 80.8%;
          top: 78.02%;
          position: absolute;
        }

        .contacts-info-telegram {
          width: clamp(30px, 3.47vw, 49.92px);
          height: clamp(30px, 3.47vw, 49.92px);
          left: 89.29%;
          top: 78.02%;
          position: absolute;
        }

        /* Consultation Form Section */
        .contacts-form-section {
          background: #FFFFFF;
        }

        /* Group 42 - контейнер для фона */
        .contacts-form-group42 {
          width: 100vw; /* Покрываем всю ширину секции */
          height: 100%; /* Покрываем всю высоту секции */
          left: 0;
          top: 0;
          position: absolute;
        }

        /* Фоновое изображение */
        /* Скорректировано для покрытия всей секции формы */
        .contacts-form-bg {
          width: 100%; /* Покрываем всю ширину Group 42 */
          height: 100%; /* Покрываем всю высоту Group 42 */
          left: 0;
          top: 0;
          opacity: 1;
          transform: rotate(90deg);
          pointer-events: none;
          z-index: 0;
        }

        .contacts-form-bg :global(img) {
          opacity: 0.15;
          object-fit: cover;
        }

        /* Фильтр */
        .contacts-form-filter {
          width: 100vw; /* Растягиваем на всю ширину секции */
          height: 100%; /* Растягиваем на всю высоту секции */
          left: 0;
          top: 0;
          mix-blend-mode: color;
          pointer-events: none;
          z-index: 1;
        }

        .contacts-form-filter :global(img) {
          mix-blend-mode: color;
          object-fit: cover;
          width: 100%;
          height: 100%;
        }

        /* Контент формы */
        .contacts-form-content {
          width: 83.33vw; /* 1200/1440 * 100 */
          max-width: 1200px;
          margin: 0 auto;
          padding-top: clamp(40px, 9.33vw, 88px);
          padding-bottom: clamp(40px, 9.33vw, 88px);
        }

        /* Заголовок */
        .contacts-form-title {
          width: 74.44vw; /* 1072/1440 * 100 */
          max-width: 1072px;
          margin: 0 auto clamp(30px, 7.37vw, 84px);
          font-family: 'Geometria';
          font-style: normal;
          font-weight: 400;
          font-size: clamp(24px, 2.92vw, 42px);
          line-height: 100%;
          text-align: center;
          color: #000000;
        }

        /* Форма */
        .contacts-form {
          display: flex;
          flex-direction: column;
          gap: clamp(12px, 1.39vw, 20px);
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
        }

        /* Поля ввода */
        .contacts-form-input,
        .contacts-form-textarea {
          width: 100%;
          height: clamp(50px, 4.17vw, 60px);
          padding: 0 clamp(20px, 2.78vw, 40px);
          border: 1px solid #74AA9C;
          border-radius: 50px;
          background: transparent; /* Прозрачный фон */
          font-family: 'Geometria';
          font-style: normal;
          font-weight: 300;
          font-size: clamp(18px, 2.39vw, 34.45px);
          line-height: 110%;
          color: #53897B;
          outline: none;
          transition: border-color 0.2s;
        }

        .contacts-form-input::placeholder,
        .contacts-form-textarea::placeholder {
          color: #53897B;
          opacity: 0.7;
          text-align: center;
        }

        .contacts-form-input:focus,
        .contacts-form-textarea:focus {
          border-color: #2E6456;
        }

        /* Textarea */
        .contacts-form-textarea {
          height: clamp(200px, 26.32vw, 250px);
          border-radius: 50px;
          padding-top: clamp(15px, 1.39vw, 20px);
          padding-bottom: clamp(15px, 1.39vw, 20px);
          resize: vertical;
        }

        /* Кнопка */
        .contacts-form-button {
          width: 100%;
          height: clamp(50px, 4.17vw, 60px);
          margin-top: clamp(10px, 1.39vw, 20px);
          border: none;
          border-radius: 50px;
          background: linear-gradient(89.26deg, #53897B 0.3%, #86BCAE 27.76%, #53897B 56.54%, #86BCAE 77.7%, #2E6456 99.68%);
          font-family: 'Geometria';
          font-style: normal;
          font-weight: 700;
          font-size: clamp(18px, 2.39vw, 34.45px);
          line-height: 110%;
          color: #FFFFFF;
          cursor: pointer;
          transition: transform 0.2s, opacity 0.2s;
        }

        .contacts-form-button:hover {
          transform: scale(1.02);
          opacity: 0.95;
        }

        .contacts-form-button:active {
          transform: scale(0.98);
        }

        /* Адаптивность для мобильных */
        @media (max-width: 768px) {
          .contacts-hero-section {
            height: 100vh;
            min-height: 500px;
          }

          .contacts-title-wrapper {
            width: 90%;
            max-width: none;
          }

          .contacts-title {
            font-size: clamp(22px, 6vw, 40px);
          }

          .contacts-info-wrapper {
            position: relative;
            left: auto;
            top: auto;
            width: 90%;
            max-width: 500px;
            height: auto;
            aspect-ratio: 670/548;
            margin: 40px auto;
          }

          .contacts-text-address {
            font-size: clamp(14px, 4vw, 24px);
          }

          .contacts-link-phone {
            font-size: clamp(16px, 4.5vw, 28px);
          }

          .contacts-link-email {
            font-size: clamp(14px, 3.5vw, 20px);
          }

          .contacts-form-section {
            height: auto;
            min-height: 600px;
            padding: clamp(40px, 8vw, 60px) clamp(16px, 4vw, 24px);
          }

          .contacts-form-content {
            width: 100%;
            padding-top: 0;
            padding-bottom: 0;
          }

          .contacts-form-title {
            width: 100%;
            font-size: clamp(20px, 5vw, 32px);
            margin-bottom: clamp(24px, 6vw, 40px);
          }

          .contacts-form {
            gap: clamp(10px, 2.5vw, 16px);
          }

          .contacts-form-input,
          .contacts-form-textarea {
            height: clamp(48px, 8vw, 56px);
            font-size: clamp(16px, 4vw, 24px);
            padding: 0 clamp(16px, 4vw, 24px);
          }

          .contacts-form-textarea {
            height: clamp(150px, 30vw, 200px);
          }

          .contacts-form-button {
            height: clamp(48px, 8vw, 56px);
            font-size: clamp(16px, 4vw, 24px);
          }
        }

        @media (max-width: 480px) {
          .contacts-info-wrapper {
            width: 95%;
            margin: 20px auto;
          }

          .contacts-info-logo {
            width: 35%;
          }

          .contacts-info-address {
            width: 90%;
          }

          .contacts-info-phone {
            width: 80%;
          }

          .contacts-info-email {
            width: 70%;
          }

          .contacts-info-whatsapp,
          .contacts-info-telegram {
            width: clamp(24px, 5vw, 40px);
            height: clamp(24px, 5vw, 40px);
          }
        }

        /* Email Subscription Section */
        .contacts-email-section {
          width: 100vw;
          height: 70.83vw; /* 1020/1440 * 100 */
          min-height: 100vh;
          position: relative;
        }

        /* Background image - позиционирование */
        .contacts-email-bg-image {
          left: calc(50% - 50% - 11.8%);
          top: calc(50% - 50% - 25.24%);
          width: 230.05vw; /* 3312.75/1440 * 100 */
          height: 230.05vw;
          object-fit: cover;
        }

        /* Menu container with logo */
        .contacts-email-menu {
          width: 83.4vw; /* 1201/1440 * 100 */
          max-width: 1201px;
          height: 36.81vw; /* 530/1440 * 100 */
          max-height: 530px;
          left: 50%;
          top: calc(50% - 16.08% - 8.33%); /* 50% - 164px/1020px*100 - 530px/2/1020px*100 */
          transform: translateX(-50%);
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          padding: clamp(3px, 0.38vw, 5.46px);
          gap: clamp(5px, 0.76vw, 10.92px);
          background: rgba(255, 255, 255, 0.6);
          background-blend-mode: soft-light;
          box-shadow: -2.73px 5.46px 5.46px rgba(0, 0, 0, 0.06), inset -1.37px 1.37px 0px rgba(255, 255, 255, 0.25), inset 1.37px 1.37px 0px rgba(0, 0, 0, 0.25);
          backdrop-filter: blur(46.875px);
          border-radius: clamp(20px, 2.6vw, 37.5px);
          z-index: 10;
        }

        .contacts-email-logo-wrapper {
          width: clamp(138px, 19.16vw, 275.9px);
          height: clamp(167px, 23.2vw, 334.14px);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .contacts-email-logo {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        /* Title */
        .contacts-email-title {
          max-width: 1100px;
          width: 100%;
          font-family: 'Geometria';
          font-style: normal;
          font-weight: 800;
          font-size: clamp(24px, 3.36vw, 48.33px);
          line-height: 110%;
          text-align: center;
          color: #FFFFFF;
          margin: 0 auto;
        }

        /* Email form wrapper */
        .contacts-email-form-wrapper {
          width: 100%;
          max-width: 960px;
          margin: 0 auto;
        }

        .contacts-email-form {
          display: flex;
          flex-direction: column;
          gap: clamp(10px, 1.39vw, 20px);
        }

        /* Email input */
        .contacts-email-input {
          width: 100%;
          height: clamp(50px, 4.17vw, 60px);
          padding: 0 clamp(20px, 2.78vw, 40px);
          border: 2px solid #FFFFFF;
          border-radius: 50px;
          background: transparent;
          font-family: 'Geometria';
          font-style: normal;
          font-weight: 300;
          font-size: clamp(18px, 2.39vw, 34.45px);
          line-height: 110%;
          text-align: center;
          color: #FFFFFF;
          outline: none;
          transition: border-color 0.2s;
        }

        .contacts-email-input::placeholder {
          color: #FFFFFF;
          opacity: 0.7;
        }

        .contacts-email-input:focus {
          border-color: rgba(255, 255, 255, 0.8);
        }

        /* Submit button */
        .contacts-email-button {
          width: 100%;
          max-width: 720px;
          height: clamp(50px, 4.17vw, 60px);
          margin: clamp(10px, 1.39vw, 20px) auto 0;
          border: none;
          border-radius: 50px;
          background: #FFFFFF;
          font-family: 'Geometria';
          font-style: normal;
          font-weight: 700;
          font-size: clamp(18px, 2.39vw, 34.45px);
          line-height: 110%;
          text-align: center;
          color: #000000;
          cursor: pointer;
          transition: transform 0.2s, opacity 0.2s;
        }

        .contacts-email-button:hover {
          transform: scale(1.02);
          opacity: 0.95;
        }

        .contacts-email-button:active {
          transform: scale(0.98);
        }

        /* Адаптивность для email секции */
        @media (max-width: 768px) {
          .contacts-email-section {
            height: auto;
            min-height: 100vh;
            padding: clamp(40px, 8vw, 60px) clamp(16px, 4vw, 24px);
          }

          .contacts-email-menu {
            width: 90%;
            height: auto;
            min-height: 200px;
            position: relative;
            left: auto;
            top: auto;
            transform: none;
            margin: 0 auto clamp(30px, 6vw, 50px);
          }

          .contacts-email-title {
            width: 90%;
            position: relative;
            left: auto;
            top: auto;
            transform: none;
            margin: 0 auto clamp(30px, 6vw, 50px);
          }

          .contacts-email-form-wrapper {
            width: 90%;
            position: relative;
            left: auto;
            top: auto;
            margin: 0 auto;
          }
        }

        /* Reviews Section */
        .contacts-reviews-section {
          width: 100vw;
          height: auto;
          min-height: 2000px;
          background: #000000;
          position: relative;
          overflow: hidden;
          padding-bottom: clamp(40px, 8vw, 80px);
        }

        .contacts-reviews-bg-image {
          width: 245.83vw; /* 3540/1440 * 100 */
          height: 143.06vw; /* 2062/1440 * 100 */
          left: calc(50% - 245.83vw / 2);
          top: -2.15vw; /* -31/1440 * 100 */
          opacity: 0.15;
          transform: matrix(-1, 0, 0, 1, 0, 0);
        }

        .contacts-reviews-filter-green {
          width: 120.69vw; /* 1738/1440 * 100 */
          height: 142.01vw; /* 2045/1440 * 100 */
          left: -10.35vw; /* -149/1440 * 100 */
          top: -0.97vw; /* -14/1440 * 100 */
          mix-blend-mode: color;
        }

        .contacts-reviews-filter-gradient {
          width: 245.83vw; /* 3540/1440 * 100 */
          height: 142.01vw; /* 2045/1440 * 100 */
          left: -72.92vw; /* -1050/1440 * 100 */
          top: -0.97vw; /* -14/1440 * 100 */
          mix-blend-mode: multiply;
        }

        .contacts-reviews-title {
          font-family: 'Geometria';
          font-style: normal;
          font-weight: 500;
          font-size: clamp(20px, 4.17vw, 60px);
          line-height: clamp(25px, 5.21vw, 75px);
          text-align: center;
          color: #FFFFFF;
          margin: 0 auto;
        }

        .contacts-review-org {
          font-family: 'Geometria';
          font-style: normal;
          font-weight: 300;
          font-size: clamp(14px, 2.91vw, 41.924px);
          line-height: 100%;
          text-align: center;
          background: linear-gradient(90deg, rgba(255, 255, 255, 0.75) 0%, #FFFFFF 50%, rgba(255, 255, 255, 0.75) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          color: transparent;
          margin: 0;
        }

        .contacts-review-text {
          font-family: 'Geometria';
          font-style: normal;
          font-weight: 400;
          font-size: clamp(12px, 1.56vw, 22.5207px);
          line-height: clamp(16px, 1.94vw, 28px);
          text-align: center;
          background: linear-gradient(90deg, rgba(255, 255, 255, 0.5) 0%, #FFFFFF 50%, rgba(255, 255, 255, 0.5) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          color: transparent;
          margin: 0;
        }

        .contacts-review-line-gradient {
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.3) 20%, rgba(255, 255, 255, 0.3) 80%, transparent 100%);
          margin: 0;
        }

        /* News Carousel Section */
        .contacts-news-section {
          width: 100vw;
          height: 43.06vw; /* 620/1440 * 100 */
          min-height: 620px;
          background: #000000;
          position: relative;
          overflow: hidden;
        }

        .contacts-news-bg-image {
          width: 100vw;
          height: 100vw; /* 1440/1440 * 100 */
          left: calc(50% - 50vw);
          top: 0;
          opacity: 0.5;
        }

        .contacts-news-filter-green {
          width: 100vw;
          height: 83.33vw; /* 1200/1440 * 100 */
          left: 0;
          top: 0;
          mix-blend-mode: color;
        }

        .contacts-news-filter-gradient {
          width: 100vw;
          height: 83.33vw; /* 1200/1440 * 100 */
          left: 0;
          top: 0;
          mix-blend-mode: multiply;
        }

        .contacts-news-card {
          position: absolute;
          width: 25.73vw; /* 370.55/1440 * 100 */
          max-width: 370.55px;
          height: 19.77vw; /* 284.66/1440 * 100 */
          max-height: 284.66px;
          left: calc(50% - 25.73vw / 2 - 18.52vw); /* calc(50% - 370.55px/2 - 266.73px) */
          top: calc(50% - 19.77vw / 2 - 0.43%); /* calc(50% - 284.66px/2 - 2.67px) */
          background: rgba(255, 255, 255, 0.04);
          border-radius: clamp(12px, 1.34vw, 19.2993px);
          z-index: 10;
          overflow: hidden;
        }

        .contacts-news-image {
          position: absolute;
          width: 201.05%; /* 745.06/370.55 * 100 */
          max-width: 745.06px;
          height: 105.88%; /* 301.41/284.66 * 100 */
          max-height: 301.41px;
          left: -55.35%; /* -205.1/370.55 * 100 */
          top: -2.68%; /* -7.62/284.66 * 100 */
        }

        .contacts-news-title {
          position: absolute;
          width: 19.03vw; /* 274/1440 * 100 */
          max-width: 274px;
          height: auto;
          min-height: 58px;
          left: calc(50% - 19.03vw / 2 + 8.68vw); /* calc(50% - 274px/2 + 125px) */
          top: 26.61%; /* 165/620 * 100 */
          font-family: 'Geometria';
          font-style: normal;
          font-weight: 500;
          font-size: clamp(24px, 3.18vw, 45.7464px);
          line-height: clamp(30px, 4.03vw, 58px);
          color: #FFFFFF;
          margin: 0;
          z-index: 10;
        }

        .contacts-news-subtitle {
          position: absolute;
          width: 35.42vw; /* 510/1440 * 100 */
          max-width: 510px;
          height: auto;
          min-height: 81px;
          left: calc(50% - 35.42vw / 2 + 16.88vw); /* calc(50% - 510px/2 + 243px) */
          top: 43.12%; /* 267.37/620 * 100 */
          font-family: 'Geometria';
          font-style: normal;
          font-weight: 700;
          font-size: clamp(14px, 1.49vw, 21.4633px);
          line-height: clamp(18px, 1.88vw, 27px);
          color: #FFFFFF;
          margin: 0;
          z-index: 10;
        }

        .contacts-news-text {
          position: absolute;
          width: 35.42vw; /* 510/1440 * 100 */
          max-width: 510px;
          height: auto;
          min-height: 90px;
          left: calc(50% - 35.42vw / 2 + 16.88vw); /* calc(50% - 510px/2 + 243px) */
          top: 58.77%; /* 364.37/620 * 100 */
          font-family: 'Geometria';
          font-style: normal;
          font-weight: 400;
          font-size: clamp(12px, 0.98vw, 14.0644px);
          line-height: clamp(15px, 1.25vw, 18px);
          color: #FFFFFF;
          margin: 0;
          z-index: 10;
        }

        .contacts-news-arrow-right {
          position: absolute;
          width: 5.07vw; /* 73.04/1440 * 100 */
          max-width: 73.04px;
          height: 10.07vw; /* 145/1440 * 100 */
          max-height: 145px;
          left: 86.6vw; /* 1247.04/1440 * 100 */
          top: 37.64%; /* 233.37/620 * 100 */
          background: transparent;
          border: none;
          cursor: pointer;
          z-index: 20;
          padding: 0;
        }

        .contacts-news-arrow-left {
          position: absolute;
          width: 5.07vw; /* 73.04/1440 * 100 */
          max-width: 73.04px;
          height: 10.07vw; /* 145/1440 * 100 */
          max-height: 145px;
          left: 8.33vw; /* 120/1440 * 100 */
          top: 37.64%; /* 233.37/620 * 100 */
          background: transparent;
          border: none;
          cursor: pointer;
          z-index: 20;
          padding: 0;
        }

        .contacts-news-dots {
          position: absolute;
          width: 9.38vw; /* 135/1440 * 100 */
          max-width: 135px;
          height: auto;
          min-height: 7px;
          left: calc(50% - 9.38vw / 2);
          top: 80.48%; /* 499/620 * 100 */
          z-index: 20;
        }

        /* Responsive for news section */
        @media (max-width: 768px) {
          .contacts-news-section {
            height: auto;
            min-height: 500px;
            padding: clamp(40px, 8vw, 60px) clamp(16px, 4vw, 24px);
          }

          .contacts-news-card {
            position: relative;
            width: 90%;
            max-width: 370.55px;
            height: auto;
            min-height: 200px;
            left: auto;
            top: auto;
            margin: 0 auto clamp(30px, 6vw, 50px);
          }

          .contacts-news-image {
            position: relative;
            width: 100%;
            height: auto;
            min-height: 200px;
            left: auto;
            top: auto;
          }

          .contacts-news-title,
          .contacts-news-subtitle,
          .contacts-news-text {
            position: relative;
            width: 90%;
            max-width: 510px;
            left: auto;
            top: auto;
            margin: 0 auto clamp(15px, 3vw, 25px);
            text-align: center;
          }

          .contacts-news-arrow-right,
          .contacts-news-arrow-left {
            position: relative;
            display: inline-block;
            width: clamp(40px, 8vw, 73.04px);
            height: clamp(60px, 12vw, 145px);
            left: auto;
            top: auto;
            margin: clamp(20px, 4vw, 30px) auto;
          }

          .contacts-news-dots {
            position: relative;
            width: clamp(100px, 20vw, 135px);
            height: auto;
            left: auto;
            top: auto;
            margin: clamp(20px, 4vw, 30px) auto;
          }
        }

        /* FAQ Section */
        .contacts-faq-section {
          width: 100vw;
          height: 83.33vw; /* 1200/1440 * 100 */
          min-height: 1200px;
          background: #FFFFFF;
          position: relative;
        }

        .contacts-faq-title {
          position: absolute;
          width: 65.56vw; /* 944/1440 * 100 */
          max-width: 944px;
          height: auto;
          left: 50%;
          transform: translateX(-50%);
          top: calc(50% - 3.75vw - 31.67vw); /* calc(50% - 54px/2 - 456px) */
          font-family: 'Geometria';
          font-style: normal;
          font-weight: 700;
          font-size: clamp(28px, 3vw, 43.2261px);
          line-height: clamp(35px, 3.75vw, 54px);
          color: #53897B;
          margin: 0;
          text-align: center;
          z-index: 10;
        }

        .contacts-faq-card {
          box-sizing: border-box;
          position: absolute;
          width: 83.33vw; /* 1200/1440 * 100 */
          max-width: 1200px;
          height: auto;
          min-height: 23.47vw; /* 338/1440 * 100 */
          max-height: 338px;
          left: 50%;
          transform: translateX(-50%);
          top: 20.43vw; /* 294.43/1440 * 100 */
          border-radius: 50px;
          background: #FFFFFF;
          border: 2px solid #53897B;
          padding: clamp(30px, 3.5vw, 50px) clamp(25px, 3vw, 40px);
          overflow: visible;
        }

        .contacts-faq-text {
          width: 100%;
          max-width: 1101px;
          height: auto;
          margin: 0 auto;
          font-family: 'Geometria';
          font-style: normal;
          font-weight: 300;
          font-size: clamp(20px, 2.39vw, 34.453px);
          line-height: 110%;
          color: #53897B;
        }

        .contacts-faq-question {
          position: absolute;
          width: 83.33vw; /* 1200/1440 * 100 */
          max-width: 1200px;
          height: 4.17vw; /* 60/1440 * 100 */
          max-height: 60px;
          left: 50%;
          transform: translateX(-50%);
          border: none;
          border-radius: 50px;
          background: linear-gradient(89.26deg, #53897B 0.3%, #86BCAE 27.76%, #53897B 56.54%, #86BCAE 77.7%, #2E6456 99.68%);
          font-family: 'Geometria';
          font-style: normal;
          font-weight: 700;
          font-size: clamp(18px, 2.39vw, 34.453px);
          line-height: 110%;
          text-align: center;
          color: #FFFFFF;
          cursor: pointer;
          transition: transform 0.2s, opacity 0.2s;
        }

        .contacts-faq-question:hover {
          transform: translateX(-50%) scale(1.02);
          opacity: 0.95;
        }

        .contacts-faq-question:active {
          transform: translateX(-50%) scale(0.98);
        }

        .contacts-faq-question-1 {
          top: 15.24vw; /* 219.43/1440 * 100 */
        }

        .contacts-faq-question-2 {
          top: 44.96vw; /* 647.43/1440 * 100 */
        }

        .contacts-faq-question-3 {
          top: 50.17vw; /* 722.43/1440 * 100 */
        }

        .contacts-faq-question-4 {
          top: 55.38vw; /* 797.43/1440 * 100 */
        }

        .contacts-faq-question-5 {
          top: 60.59vw; /* 872.43/1440 * 100 */
        }

        .contacts-faq-question-6 {
          top: 65.8vw; /* 947.43/1440 * 100 */
        }

        .contacts-faq-question-7 {
          top: 71.01vw; /* 1022.43/1440 * 100 */
        }

        /* Responsive for reviews and FAQ */
        @media (max-width: 1300px) {
          .contacts-faq-section {
            height: auto;
            min-height: auto;
            padding: clamp(40px, 6vw, 60px) clamp(20px, 4vw, 40px);
            display: flex;
            flex-direction: column;
          }

          .contacts-faq-title {
            position: relative;
            left: auto;
            top: auto;
            transform: none;
            width: 100%;
            margin: 0 auto clamp(30px, 5vw, 50px);
            text-align: center;
            z-index: auto;
          }

          .contacts-faq-card {
            position: relative;
            width: 100%;
            height: auto;
            min-height: auto;
            max-height: none;
            left: auto;
            transform: none;
            top: auto;
            margin: 0 auto clamp(20px, 3vw, 30px);
            padding: clamp(25px, 4vw, 35px) clamp(20px, 3vw, 30px);
          }

          .contacts-faq-question {
            position: relative;
            width: 100%;
            height: auto;
            min-height: 50px;
            left: auto;
            transform: none;
            top: auto !important;
            margin-bottom: clamp(12px, 1.5vw, 16px);
            display: block;
          }

          .contacts-faq-question:hover {
            transform: scale(1.02);
          }

          .contacts-faq-question:active {
            transform: scale(0.98);
          }
        }

        @media (max-width: 1024px) {
          .contacts-faq-section {
            height: auto;
            min-height: auto;
            padding: clamp(40px, 6vw, 60px) clamp(20px, 4vw, 40px);
            display: flex;
            flex-direction: column;
          }
        }

        @media (max-width: 768px) {
          .contacts-reviews-section {
            height: auto;
            min-height: auto;
            padding: clamp(40px, 8vw, 60px) clamp(16px, 4vw, 24px);
            padding-bottom: clamp(40px, 8vw, 60px);
          }

          .contacts-faq-section {
            height: auto;
            min-height: auto;
            padding: clamp(40px, 8vw, 60px) clamp(16px, 4vw, 24px);
            display: flex;
            flex-direction: column;
          }

          .contacts-faq-title {
            position: relative;
            left: auto;
            top: auto;
            transform: none;
            width: 100%;
            margin: 0 auto clamp(30px, 6vw, 40px);
            text-align: center;
            z-index: auto;
          }

          .contacts-faq-card {
            position: relative;
            width: 100%;
            height: auto;
            min-height: auto;
            max-height: none;
            left: auto;
            top: auto;
            margin: 0 auto clamp(20px, 4vw, 30px);
            padding: clamp(25px, 5vw, 35px) clamp(20px, 4vw, 30px);
          }

          .contacts-faq-text {
            position: relative;
            width: 100%;
            left: auto;
            top: auto;
            padding: 0;
          }

          .contacts-faq-question {
            position: relative;
            width: 100%;
            height: auto;
            min-height: 50px;
            left: auto;
            top: auto;
            margin-bottom: clamp(12px, 2vw, 16px);
            display: block;
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

