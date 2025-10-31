# 🚀 Простая инструкция для REG.RU

## ❌ ПРОБЛЕМА

REG.RU обычный хостинг НЕ поддерживает Next.js напрямую!

Next.js нужен Node.js сервер, а REG.RU — это PHP/Apache хостинг.

---

## ✅ РЕШЕНИЕ: 3 варианта

### 1️⃣ Перейти на Vercel (РЕКОМЕНДУЮ) ⭐

**Бесплатно и проще всего:**

1. Зарегистрируйтесь на https://vercel.com
2. Войдите через GitHub
3. Нажмите "Add New Project"
4. Выберите ваш репозиторий
5. Установите Root Directory: `prixclub-next`
6. Нажмите "Deploy"
7. **Готово!** Сайт будет работать через 2 минуты

**Плюсы:**
- ✅ Бесплатно
- ✅ Автоматический SSL
- ✅ Автоматическое обновление при push в Git
- ✅ Работает из коробки

---

### 2️⃣ Использовать REG.RU VPS

Если у вас уже есть VPS на REG.RU:

#### Быстрая инструкция:

```bash
# 1. Подключитесь к VPS через SSH
ssh root@ваш-vps.ru

# 2. Установите Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# 3. Загрузите проект (через Git или FTP)
cd /var/www
git clone <ваш-репозиторий> prixclub
cd prixclub/prixclub-next

# 4. Установите зависимости и соберите
npm install
npm run build

# 5. Запустите через PM2
npm install -g pm2
pm2 start npm --name prixclub -- start
pm2 save

# 6. Настройте Nginx (см. DEPLOY_REG_RU.md)
```

**Подробная инструкция:** см. `DEPLOY_REG_RU.md`

---

### 3️⃣ Купить VPS на REG.RU с Node.js

Если у вас нет VPS, но есть обычный хостинг:

1. Зайдите на REG.RU
2. Купите VPS с Ubuntu
3. Выберите минимум 1GB RAM
4. Следуйте инструкции из варианта 2️⃣

**Примерная стоимость:** от 99₽/месяц

---

## 📦 Что выгружать на REG.RU VPS

### Загрузите всю папку `prixclub-next/`:

```bash
prixclub-next/
├── app/              # весь код сайта
├── public/           # все изображения
├── src/              # шрифты
├── package.json      # зависимости
├── next.config.mjs   # конфиг
└── остальные файлы
```

### НЕ загружайте:
- `node_modules/` — не нужен
- `.next/` — создастся сам
- `.git/` — не нужен

---

## 🎯 Команды для деплоя

После загрузки файлов на VPS:

```bash
cd /var/www/prixclub/prixclub-next

# Установка
npm install

# Сборка
npm run build

# Запуск
npm run start
```

---

## ⚡ Вывод

**Для Next.js лучше всего использовать Vercel!**

REG.RU VPS подойдет, но потребует больше усилий.

Хотите простое решение → **Vercel**
Нужно именно REG.RU → купите **VPS** и следуйте инструкции

---

## 📞 Нужна помощь?

Читайте подробную инструкцию: `DEPLOY_REG_RU.md`

