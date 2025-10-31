# ⚡ Что делать дальше на сервере

## ✅ Текущее состояние

Вы уже:
- ✅ Подключились к серверу
- ✅ Установили Node.js (v18.19.1)
- ✅ Клонировали репозиторий
- ✅ Находитесь в `/var/www/sites/PrixClub`

## ⚠️ Ошибка

```bash
npm install
# ❌ Ошибка: нет package.json в /var/www/sites/
```

**Проблема:** `package.json` находится в `/var/www/sites/PrixClub/prixclub-next/`

## ✅ Правильные команды

### 1. Перейдите в папку проекта

```bash
cd PrixClub/prixclub-next
```

### 2. Проверьте, что вы в правильной папке

```bash
ls -la
# Должно быть: package.json, app/, public/, src/ и т.д.
```

### 3. Установите зависимости

```bash
npm install
```

### 4. Соберите проект

```bash
npm run build
```

### 5. Установите PM2

```bash
sudo npm install -g pm2
```

### 6. Запустите сайт через PM2

```bash
pm2 start npm --name prixclub -- start
```

### 7. Сохраните конфигурацию

```bash
pm2 save
```

### 8. Настройте автозапуск

```bash
pm2 startup
# Скопируйте и выполните команду, которую покажет PM2
```

---

## 📋 Полная последовательность команд

Скопируйте и выполните все команды:

```bash
cd PrixClub/prixclub-next
npm install
npm run build
sudo npm install -g pm2
pm2 start npm --name prixclub -- start
pm2 save
pm2 startup
```

После `pm2 startup` PM2 покажет команду вроде:
```bash
sudo env PATH=$PATH:/usr/bin /usr/lib/node_modules/pm2/bin/pm2 startup systemd -u deploy --hp /home/deploy
```

**Скопируйте и выполните эту команду!**

---

## 🔍 Проверка

### Проверьте, что сайт работает:

```bash
pm2 status
pm2 logs prixclub
curl http://localhost:3000
```

### Проверьте в браузере:

Откройте:
```
https://testprix.ru/ru/
https://testprix.ru/ru/cases/
```

---

## ⚠️ Если что-то не работает

### Ошибка "Permission denied" при pm2 startup

```bash
# Выполните команду, которую показал pm2 startup
# Обычно это что-то вроде:
sudo env PATH=$PATH:/usr/bin /usr/lib/node_modules/pm2/bin/pm2 startup systemd -u deploy --hp /home/deploy

# Затем еще раз:
pm2 save
```

### Сайт не отвечает

```bash
# Проверьте логи
pm2 logs prixclub

# Проверьте статус
pm2 status

# Перезапустите
pm2 restart prixclub
```

### Порт 3000 занят

```bash
# Найдите процесс
sudo lsof -i :3000

# Убейте его
pkill -f "next start"

# Запустите заново
pm2 restart prixclub
```

---

## 🎯 Итоговая структура

```
/var/www/sites/
└── PrixClub/
    ├── .git/
    ├── prixclub-next/          ← ВЫ ЗДЕСЬ
    │   ├── app/
    │   ├── public/
    │   ├── src/
    │   ├── package.json        ← Ищем здесь!
    │   └── node_modules/       ← Создастся после npm install
```

---

## 📝 Краткая версия

```bash
cd PrixClub/prixclub-next
npm install
npm run build
sudo npm install -g pm2
pm2 start npm --name prixclub -- start
pm2 save
pm2 startup
# Скопируйте и выполните команду от PM2
pm2 save
```

**После этого ваш сайт будет работать!** ✅

