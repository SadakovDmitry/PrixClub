# Деплой на REG.RU

## ⚠️ Важно!

REG.RU — это обычный хостинг с PHP/Apache. Для Next.js нужен **Node.js сервер**!

## 🎯 Варианты деплоя на REG.RU

### Вариант 1: REG.RU VPS с Node.js (РЕКОМЕНДУЕТСЯ)

Если у вас есть VPS на REG.RU с поддержкой Node.js:

#### Шаги:

1. **Подключитесь к VPS по SSH**

2. **Установите Node.js (если еще не установлен):**
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
node --version  # проверка (должна быть 18+)
```

3. **Скопируйте проект на сервер:**
   - Через FTP/SFTP загрузите всю папку `prixclub-next/` в `/var/www/prixclub`
   - Или используйте git clone:
```bash
cd /var/www
git clone <ваш-репозиторий> prixclub
cd prixclub/prixclub-next
```

4. **Установите зависимости:**
```bash
npm install --production
```

5. **Соберите проект:**
```bash
npm run build
```

6. **Запустите сайт через PM2 (для постоянной работы):**
```bash
npm install -g pm2
pm2 start npm --name "prixclub" -- start
pm2 save
pm2 startup  # настройка автозапуска
```

7. **Настройте Nginx/Apache как reverse proxy:**
```bash
sudo nano /etc/nginx/sites-available/prixclub
```

Добавьте конфиг:
```nginx
server {
    listen 80;
    server_name yourdomain.ru www.yourdomain.ru;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

```bash
sudo ln -s /etc/nginx/sites-available/prixclub /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

---

### Вариант 2: Статический экспорт (НЕ ПОДХОДИТ для этого проекта)

Этот проект использует:
- `use client` компоненты
- Динамические маршруты (`[locale]`)
- Middleware

**Статический экспорт не будет работать корректно!**

---

### Вариант 3: REG.RU хостинг без Node.js (НЕ ВОЗМОЖНО)

Обычный REG.RU хостинг (PHP/Apache) **не поддерживает** Next.js.

---

## ✅ ЛУЧШИЙ ВАРИАНТ: Перенести на Vercel

REG.RU не идеален для Next.js. Рекомендую:

1. Зарегистрироваться на [vercel.com](https://vercel.com) (бесплатно)
2. Подключить GitHub репозиторий
3. Root Directory: `prixclub-next`
4. Vercel автоматически задеплоит проект

**Преимущества Vercel:**
- ✅ Создан специально для Next.js
- ✅ Автоматический деплой из Git
- ✅ CDN по всему миру
- ✅ SSL сертификат
- ✅ Бесплатный тариф
- ✅ Автоматическое обновление при push в Git

---

## 📋 Что выгружать на REG.RU VPS

### Файлы проекта:

```
prixclub-next/
├── app/                      # ✅ НУЖНО
├── public/                   # ✅ НУЖНО
├── src/                      # ✅ НУЖНО
├── package.json              # ✅ НУЖНО
├── next.config.mjs           # ✅ НУЖНО
├── tsconfig.json             # ✅ НУЖНО
├── tailwind.config.ts        # ✅ НУЖНО
├── postcss.config.js         # ✅ НУЖНО
├── middleware.ts             # ✅ НУЖНО
├── messages/                 # ✅ НУЖНО
└── i18n.ts                   # ✅ НУЖНО

```

### НЕ загружайте:
- ❌ `node_modules/` — установится через npm install
- ❌ `.next/` — создастся при сборке
- ❌ `.git/` — не нужен на продакшене

---

## 🔧 После деплоя на VPS

### 1. Проверьте работу сайта:
```bash
curl http://localhost:3000
```

### 2. Настройте firewall:
```bash
sudo ufw allow 3000
sudo ufw enable
```

### 3. Мониторинг через PM2:
```bash
pm2 status        # статус
pm2 logs prixclub # логи
pm2 restart prixclub # перезапуск
```

### 4. Обновление сайта:
```bash
cd /var/www/prixclub/prixclub-next
git pull
npm install --production
npm run build
pm2 restart prixclub
```

---

## 📞 Поддержка REG.RU

Если у вас проблемы с VPS на REG.RU:
1. Проверьте, что Node.js установлен: `node --version`
2. Проверьте логи: `pm2 logs prixclub`
3. Проверьте, что порт 3000 не занят: `netstat -tulpn | grep 3000`

---

## ⚡ Рекомендация

**Для Next.js используйте специализированные платформы:**
- **Vercel** (бесплатно для небольших проектов) — ИДЕАЛЬНО
- **Netlify** (бесплатно)
- **Railway** (бесплатный тариф)
- **Render** (бесплатный тариф)

REG.RU VPS подойдет, если вы уверены в администрировании серверов.

