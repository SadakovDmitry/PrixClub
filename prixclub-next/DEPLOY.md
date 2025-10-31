# Инструкция по деплою PRIX Club

## Что нужно выгрузить на хостинг

### Вариант 1: Vercel (Рекомендуется для Next.js)

1. **Подключить репозиторий к Vercel:**
   - Зарегистрируйтесь на https://vercel.com
   - Импортируйте репозиторий из GitHub
   - Vercel автоматически определит Next.js проект

2. **Настройки билда:**
   - Root Directory: `prixclub-next`
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

3. **Переменные окружения (если нужны):**
   - Обычно не требуются для статического контента

4. **Деплой:**
   - После настройки нажмите "Deploy"
   - Vercel автоматически задеплоит проект

### Вариант 2: Другие хостинги (VPS, Cloud и т.д.)

#### Файлы для загрузки:
```
prixclub-next/
├── app/                    # Исходники React/Next.js
├── public/                 # Статические файлы (изображения, SVG)
├── src/                    # Шрифты и дополнительные файлы
├── next.config.mjs         # Конфиг Next.js
├── package.json            # Зависимости
├── tsconfig.json           # TypeScript конфиг
├── tailwind.config.ts      # Tailwind конфиг
└── postcss.config.js       # PostCSS конфиг
```

#### НЕ загружайте на сервер:
- `node_modules/` - установятся через npm install
- `.next/` - создастся при билде
- `.git/` - служебная папка git

#### Процесс деплоя:

1. **На сервере установите Node.js (18+):**
```bash
node --version  # проверка версии
```

2. **Скопируйте файлы проекта на сервер**

3. **Установите зависимости:**
```bash
cd prixclub-next
npm install
```

4. **Соберите проект:**
```bash
npm run build
```

5. **Запустите продакшн версию:**
```bash
npm start
```

Для постоянной работы используйте PM2:
```bash
npm install -g pm2
pm2 start npm --name "prixclub" -- start
pm2 save
pm2 startup
```

## Решение проблемы с "убогой страницей без стилей"

### Проблема
При первой загрузке страница показывается без стилей (FOUT - Flash of Unstyled Text), затем резко становится красивой.

### Причина
Шрифт Geometria не был подключен в корневом layout, поэтому он подгружался асинхронно в клиентских компонентах.

### Решение (уже применено)
✅ Шрифт Geometria теперь подключен в корневых layout файлах:
- `app/layout.tsx`
- `app/[locale]/layout.tsx`

Теперь шрифт будет предзагружаться вместе с HTML, и проблема FOUT исчезнет.

### Дополнительная оптимизация (опционально)

Для еще большей скорости можно добавить в `app/layout.tsx`:

```typescript
import { geometria } from '../src/fonts/geometria'

export const metadata: Metadata = {
  // ... существующие настройки
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`bg-bg text-white ${geometria.className}`}>
      <head>
        <link rel="preload" href="/fonts/geometria.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen bg-bg selection:bg-brand/30 selection:text-white">
        {children}
      </body>
    </html>
  )
}
```

Но так как вы используете `next/font/local`, это уже не требуется - Next.js делает предзагрузку автоматически.

## Проверка после деплоя

1. Откройте сайт в браузере
2. Проверьте, что шрифт загружается сразу без "мерцания"
3. Проверьте все страницы: главная, О нас, Команда, Кейсы, Услуги
4. Проверьте мобильную версию (нажмите F12 → Toggle device toolbar)
5. Проверьте переключение языка (RU/EN)

## Структура проекта

```
prixclub-next/
├── app/                      # Next.js App Router
│   ├── [locale]/            # Локализация (ru/en)
│   │   ├── about/           # Страница "О нас"
│   │   ├── cases/           # Страница "Кейсы"
│   │   ├── projects/        # Страницы проектов
│   │   ├── services/        # Страница "Услуги"
│   │   ├── team/            # Страница "Команда"
│   │   ├── layout.tsx       # Layout с шрифтом
│   │   └── page.tsx         # Главная страница
│   ├── globals.css          # Глобальные стили
│   └── layout.tsx           # Корневой layout
├── public/                   # Статические файлы
│   └── images/              # Изображения для сайта
├── src/
│   └── fonts/               # Шрифты Geometria
├── package.json             # Зависимости
├── next.config.mjs          # Конфиг Next.js
└── tsconfig.json            # TypeScript конфиг
```

## Возможные проблемы

### 1. Ошибка сборки
**Решение:** Убедитесь, что все файлы на месте, особенно шрифты в `src/fonts/Geometria/`

### 2. Изображения не загружаются
**Решение:** Проверьте, что папка `public/images/` скопирована на сервер

### 3. Шрифт не работает
**Решение:** Убедитесь, что папка `src/fonts/Geometria/` со всеми `.otf` файлами на месте

### 4. Ошибка при запуске
**Решение:** Проверьте версию Node.js (должна быть 18 или выше)

## Полезные команды

```bash
# Разработка (локально)
npm run dev

# Продакшн билд
npm run build

# Запуск продакшн версии
npm start

# Проверка кода
npm run lint
```

## Контакты для поддержки

Если возникли проблемы с деплоем, проверьте:
1. Логи сервера: `pm2 logs prixclub`
2. Консоль браузера: F12 → Console
3. Network вкладка: проверьте статус загрузки файлов

