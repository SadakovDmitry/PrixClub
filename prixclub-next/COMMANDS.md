# ⚡ Быстрая шпаргалка команд

## 🚀 Первый деплой (копируйте все команды в терминал на сервере)

```bash
# 1. Подключитесь к серверу
ssh deploy@92.242.60.85

# 2. Перейдите в папку sites и создайте папку для сайта
cd /var/www/sites
mkdir prixclub-site
cd prixclub-site

# 3. Клонируйте репозиторий из GitHub
git clone https://github.com/SadakovDmitry/PrixClub.git .

# 4. Перейдите в проект Next.js
cd prixclub-next

# 5. Проверьте Node.js (должно быть v18+)
node --version

# 6. Если Node.js нет, установите
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# 7. Установите зависимости
npm install

# 8. Соберите проект
npm run build

# 9. Установите PM2
sudo npm install -g pm2

# 10. Запустите проект через PM2
pm2 start npm --name prixclub -- start

# 11. Сохраните конфигурацию PM2
pm2 save

# 12. Настройте автозапуск при перезагрузке
pm2 startup

# ✅ ГОТОВО! Сайт работает на http://localhost:3000
```

---

## 🔄 Обновление сайта (после изменений в коде)

```bash
# 1. На вашем компьютере закоммитьте изменения
cd prixclub-next
git add .
git commit -m "Update"
git push

# 2. На сервере обновите код
ssh deploy@92.242.60.85
cd /var/www/sites/prixclub-site/prixclub-next

# 3. Скачайте изменения
git pull

# 4. Обновите зависимости (если нужно)
npm install

# 5. Пересоберите проект
npm run build

# 6. Перезапустите сайт
pm2 restart prixclub

# ✅ ГОТОВО!
```

---

## 🔍 Проверка работы

```bash
# Проверьте статус
pm2 status

# Посмотрите логи
pm2 logs prixclub

# Проверьте в браузере
curl http://localhost:3000
```

---

## 🛠️ Управление PM2

```bash
pm2 list              # Список всех процессов
pm2 status            # Статус процессов
pm2 logs prixclub     # Показать логи
pm2 stop prixclub     # Остановить
pm2 start prixclub    # Запустить
pm2 restart prixclub  # Перезапустить
pm2 delete prixclub   # Удалить из PM2
```

---

## 🔧 Решение проблем

### Сайт не запускается

```bash
# Проверьте логи
pm2 logs prixclub --err

# Остановите и запустите заново
pm2 delete prixclub
cd /var/www/sites/prixclub-site/prixclub-next
pm2 start npm --name prixclub -- start
```

### Порт 3000 занят

```bash
# Найдите процесс
sudo lsof -i :3000

# Убейте процесс
pkill -f "next start"

# Запустите заново
pm2 restart prixclub
```

### Node.js не найден

```bash
# Установите Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Проверьте
node --version
npm --version
```

### npm install не работает

```bash
# Очистите кэш
npm cache clean --force

# Удалите node_modules и переустановите
rm -rf node_modules package-lock.json
npm install
```

### Сборка падает

```bash
# Проверьте логи сборки
npm run build 2>&1 | tee build.log

# Проверьте версию Node.js (должна быть 18+)
node --version
```

---

## 🌐 Настройка Nginx (опционально)

### Создайте конфиг

```bash
sudo nano /etc/nginx/sites-available/testprix
```

### Скопируйте это:

```nginx
server {
    listen 80;
    server_name testprix.ru www.testprix.ru;

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

### Активируйте:

```bash
sudo ln -s /etc/nginx/sites-available/testprix /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

---

## 📂 Структура файлов на сервере

```
/var/www/sites/prixclub-site/
├── .git/                  # Git репозиторий (не нужен на продакшене)
├── src/                   # Исходники из корня репозитория
├── pages_photo/           # Фото страниц
├── README.md              # README
├── prixclub-next/         # ← ВАШ ПРОЕКТ ЗДЕСЬ
│   ├── app/               # ← ВСЕ СТРАНИЦЫ
│   ├── public/            # ← ВСЕ ИЗОБРАЖЕНИЯ
│   ├── src/               # ← ШРИФТЫ
│   ├── node_modules/      # Создается через npm install
│   ├── .next/             # Создается через npm run build
│   ├── package.json       # ← НУЖЕН
│   └── next.config.mjs    # ← НУЖЕН
└── другие файлы...
```

---

## ⚠️ Важно помнить

1. **Всегда работайте в папке** `/var/www/sites/prixclub-site/prixclub-next`
2. **После изменений** делайте `git pull` → `npm run build` → `pm2 restart prixclub`
3. **PM2 держит сайт запущенным** в фоне, не нужно держать терминал открытым
4. **Логи смотрятся через** `pm2 logs prixclub`
5. **Сайт работает на** `http://localhost:3000`, а через домен через Nginx

---

## 📞 Полезные ссылки

- Подробная инструкция: `DEPLOY_GITHUB.md`
- Решение проблем: `TROUBLESHOOTING.md`
- Деплой на REG.RU: `DEPLOY_REG_RU.md`
- Быстрый старт: `QUICK_START.md`

---

## ✨ Быстрый деплой одной командой (для опытных)

```bash
ssh deploy@92.242.60.85 'cd /var/www/sites && rm -rf prixclub-site && mkdir prixclub-site && cd prixclub-site && git clone https://github.com/SadakovDmitry/PrixClub.git . && cd prixclub-next && npm install && npm run build && sudo npm install -g pm2 && pm2 delete prixclub 2>/dev/null; pm2 start npm --name prixclub -- start && pm2 save'
```

⚠️ **Внимание:** эта команда удалит старую папку и создаст все заново!

