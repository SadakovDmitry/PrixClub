# 🚀 Деплой через GitHub на VPS

## 📋 Что нужно сделать на сервере

### 1. Подключитесь к серверу

```bash
ssh deploy@92.242.60.85
```

### 2. Создайте папку для сайта

```bash
cd /var/www/sites

# Создайте папку для сайта
mkdir prixclub-site
cd prixclub-site
```

### 3. Клонируйте репозиторий

```bash
# Клонируйте репозиторий из GitHub
git clone https://github.com/SadakovDmitry/PrixClub.git .

# Перейдите в папку с проектом
cd prixclub-next
```

### 4. Установите Node.js (если еще не установлен)

```bash
# Проверьте, установлен ли Node.js
node --version

# Если нет, установите:
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

### 5. Установите зависимости

```bash
npm install
```

### 6. Соберите проект

```bash
npm run build
```

### 7. Запустите через PM2

```bash
# Установите PM2
sudo npm install -g pm2

# Запустите проект
pm2 start npm --name prixclub -- start

# Сохраните конфигурацию
pm2 save

# Настройте автозапуск при перезагрузке сервера
pm2 startup
```

### 8. Настройте Nginx (если нужно)

```bash
sudo nano /etc/nginx/sites-available/testprix
```

Добавьте конфиг:

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

Активируйте:

```bash
sudo ln -s /etc/nginx/sites-available/testprix /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

---

## 📂 Итоговая структура на сервере

```
/var/www/sites/prixclub-site/
├── PrixClub/                      # Весь репозиторий с GitHub
│   └── prixclub-next/            # Проект Next.js
│       ├── app/                   # ✅ Из GitHub
│       ├── public/                # ✅ Из GitHub
│       ├── src/                   # ✅ Из GitHub
│       ├── package.json           # ✅ Из GitHub
│       ├── next.config.mjs        # ✅ Из GitHub
│       ├── node_modules/          # ⚠️ Создается через npm install
│       └── .next/                 # ⚠️ Создается через npm run build
```

---

## 🔄 Обновление сайта

### Если вы изменили код локально:

```bash
# 1. На вашем компьютере
cd prixclub-next
git add .
git commit -m "Update site"
git push

# 2. На сервере
cd /var/www/sites/prixclub-site/prixclub-next
git pull
npm install
npm run build
pm2 restart prixclub
```

---

## 🔍 Проверка работы

### На сервере:

```bash
# Проверьте статус PM2
pm2 status

# Посмотрите логи
pm2 logs prixclub

# Проверьте, что сервер запущен
curl http://localhost:3000
```

### В браузере:

Откройте:
```
https://testprix.ru/ru/
https://testprix.ru/ru/cases/
https://testprix.ru/en/about/
```

---

## 🎯 Важные команды

### Управление PM2:

```bash
pm2 list              # Список процессов
pm2 stop prixclub     # Остановить
pm2 start prixclub    # Запустить
pm2 restart prixclub  # Перезапустить
pm2 delete prixclub   # Удалить
pm2 logs prixclub     # Логи
```

### Проверка портов:

```bash
netstat -tulpn | grep 3000    # Проверка порта 3000
sudo lsof -i :3000            # Процессы на порту 3000
```

### Рестарт при зависании:

```bash
pm2 restart prixclub
# или
pkill -f "next start"
cd /var/www/sites/prixclub-site/prixclub-next
pm2 start npm --name prixclub -- start
```

---

## ⚠️ Если что-то не работает

### Проверьте:

1. **Node.js установлен?**
```bash
node --version
```

2. **Проект собран?**
```bash
ls -la /var/www/sites/prixclub-site/prixclub-next/.next
```

3. **PM2 запущен?**
```bash
pm2 status
```

4. **Порт 3000 занят?**
```bash
curl http://localhost:3000
```

5. **Логи ошибок:**
```bash
pm2 logs prixclub --err
```

---

## 📝 Быстрая шпаргалка

```bash
# Первый деплой:
cd /var/www/sites
mkdir prixclub-site && cd prixclub-site
git clone https://github.com/SadakovDmitry/PrixClub.git .
cd prixclub-next
npm install
npm run build
npm install -g pm2
pm2 start npm --name prixclub -- start
pm2 save
pm2 startup

# Обновление:
cd /var/www/sites/prixclub-site/prixclub-next
git pull
npm install
npm run build
pm2 restart prixclub
```

---

## ✨ Готово!

После выполнения всех команд ваш сайт будет доступен на:
- `https://testprix.ru/ru/`
- `https://testprix.ru/en/`

