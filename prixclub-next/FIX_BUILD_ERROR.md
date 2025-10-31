# 🔧 Решение ошибки сборки

## ❌ Ошибка

```
./app/page.tsx:44:9
Type error: Property 'className' does not exist on type...
```

## ✅ Причина

На сервере старая версия файла `app/page.tsx`, которая конфликтует. Нужно обновить код с GitHub.

## ✅ Решение

### На сервере выполните:

```bash
cd /var/www/sites/PrixClub/prixclub-next

# Обновите код с GitHub
git pull

# Пересоберите проект
npm run build
```

---

## 📋 Полная последовательность (если git pull не помогает)

```bash
cd /var/www/sites/PrixClub/prixclub-next

# Удалите старую версию
rm -rf app/page.tsx

# Обновите с GitHub
git pull

# Убедитесь, что файл удален
ls app/ | grep page.tsx
# Не должно быть: page.tsx
# Должно быть: page.tsx.backup (это нормально)

# Пересоберите
npm run build
```

---

## 🚀 Если всё равно ошибка

### Вариант 1: Полная переустановка

```bash
cd /var/www/sites/PrixClub/prixclub-next

# Остановите PM2 (если запущен)
pm2 stop prixclub 2>/dev/null

# Очистите всё
rm -rf node_modules .next

# Обновите с GitHub
git pull

# Переустановите
npm install
npm run build

# Запустите заново
pm2 start npm --name prixclub -- start
pm2 save
```

### Вариант 2: Удалить и заново клонировать

```bash
cd /var/www/sites/PrixClub

# Удалите старую версию
rm -rf prixclub-next

# Переклонируйте
git pull

# Вернитесь в проект
cd prixclub-next

# Переустановите
npm install
npm run build

# Запустите
pm2 start npm --name prixclub -- start
pm2 save
```

---

## ✅ Проверка

После успешной сборки должно быть:

```
✓ Compiled successfully
✓ Generating static pages
✓ Finalizing page optimization
```

**НЕ должно быть:**
- ❌ Failed to compile
- ❌ Type error
- ❌ Property 'className' does not exist

---

## 🎯 Что делать дальше

После успешной сборки:

```bash
# Запустите PM2
pm2 start npm --name prixclub -- start
pm2 save
pm2 startup

# Проверьте работу
pm2 status
curl http://localhost:3000
```

---

## 📞 Если не помогло

Проверьте логи:

```bash
npm run build 2>&1 | tee build-error.log
cat build-error.log
```

И пришлите ошибку.

