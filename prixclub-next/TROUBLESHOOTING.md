# 🔧 Решение проблем с деплоем

## ❌ Проблема: Не могу открыть сайт по ссылке

### Симптомы:
```
https://testprix.ru/prixclub-next/app/blocale/cases/
```

### Ошибки в URL:
1. ❌ `/prixclub-next/app/` — неправильный путь
2. ❌ `blocale` — опечатка (должно быть `locale`)
3. ❌ Обычный хостинг не запускает Next.js

---

## ✅ Правильные ссылки

### Вариант 1: Если хостинг НАСТРОЕН правильно для Next.js

Структура URL должна быть:
```
https://testprix.ru/ru/cases/
https://testprix.ru/en/cases/
https://testprix.ru/ru/
https://testprix.ru/ru/about/
https://testprix.ru/ru/team/
```

**НО:** Обычный REG.RU хостинг НЕ РАБОТАЕТ таким образом!

---

## ⚠️ КРИТИЧЕСКАЯ ПРОБЛЕМА

### Вы загрузили файлы на обычный REG.RU хостинг?

Если да, то **это НЕ РАБОТАЕТ**!

Next.js - это Node.js приложение. Обычный PHP/Apache хостинг не может его запустить.

---

## ✅ ПРАВИЛЬНОЕ РЕШЕНИЕ

### 1. Проверьте, что у вас VPS с Node.js

```bash
# Подключитесь по SSH к вашему серверу
ssh root@testprix.ru

# Проверьте Node.js
node --version
npm --version

# Если команды не работают → у вас НЕТ Node.js → проект не запустится
```

### 2. Если Node.js НЕТ

**У вас 2 варианта:**

#### Вариант A: Настроить VPS на REG.RU

1. Зайдите в панель REG.RU
2. Проверьте, что у вас VPS (не обычный хостинг)
3. Установите Node.js (см. DEPLOY_REG_RU.md)
4. Запустите проект

#### Вариант B: Перейти на Vercel (РЕКОМЕНДУЮ)

1. Зарегистрируйтесь на https://vercel.com
2. Подключите GitHub
3. Выберите репозиторий
4. Root Directory: `prixclub-next`
5. Деплой → сайт будет работать по адресу: `https://ваш-сайт.vercel.app`

---

## 🚀 Как правильно запустить проект на REG.RU VPS

### Шаг 1: Подключитесь по SSH

```bash
ssh root@ваш-vps.ru
# или
ssh admin@ваш-vps.ru
```

### Шаг 2: Перейдите в папку с проектом

```bash
cd /path/to/prixclub-next
# или если в /var/www
cd /var/www/prixclub-next
```

### Шаг 3: Установите Node.js (если еще не установлен)

```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
node --version  # должно показать v18.x.x или выше
```

### Шаг 4: Установите зависимости

```bash
npm install
```

### Шаг 5: Соберите проект

```bash
npm run build
```

### Шаг 6: Запустите сервер

```bash
npm start
```

### Шаг 7: Проверьте локально

Откройте в браузере: `http://localhost:3000/ru/cases/`

Если работает → настройте Nginx/Apache для внешнего доступа.

---

## 🌐 Настройка домена (если VPS работает)

### Настройте Nginx (если установлен):

```bash
sudo nano /etc/nginx/sites-available/testprix
```

Добавьте:

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

## 📋 Проверочный список

- [ ] У вас VPS (не обычный хостинг)?
- [ ] Node.js установлен (`node --version`)?
- [ ] Проект загружен на сервер?
- [ ] Запущены команды: `npm install` → `npm run build` → `npm start`?
- [ ] Сервер работает на порту 3000?
- [ ] Nginx/Apache настроены как proxy?

---

## ⚡ Быстрое решение

**Если хотите, чтобы все работало за 5 минут:**

1. Перейдите на https://vercel.com
2. Войдите через GitHub
3. "Add New Project"
4. Выберите репозиторий
5. Root Directory: `prixclub-next`
6. Deploy
7. **Готово!** Сайт работает

Ссылка будет: `https://ваш-проект.vercel.app/ru/cases/`

---

## 📞 Что делать дальше?

1. **Если VPS есть** → следуйте DEPLOY_REG_RU.md
2. **Если VPS нет** → купите на REG.RU или перейдите на Vercel
3. **Если нужна помощь** → опишите, что вы видите в консоли при `npm start`

---

## 🐛 Типичные ошибки

### "Cannot find module"
**Решение:** Запустите `npm install`

### "Port 3000 is already in use"
**Решение:**
```bash
pkill -f "next start"
npm start
```

### "404 Not Found" при открытии через домен
**Решение:** Проверьте настройку Nginx/Apache proxy

### Белая страница или ошибка 502
**Решение:** Проверьте, что `npm start` запущен на фоне

---

## ✅ Успех

Если все настроено правильно, вы должны видеть:

```
✓ Ready on http://localhost:3000
```

И в браузере по адресу `https://testprix.ru/ru/cases/` должна открываться страница с кейсами.

