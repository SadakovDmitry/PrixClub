# PrixClub

Рабочее приложение находится в `prixclub-next`.

## Запуск локально

```bash
cd prixclub-next
npm install
cp .env.local.example .env.local
npm run dev
```

После запуска сайт будет доступен на `http://localhost:3000`.

## Production

```bash
cd prixclub-next
npm run build
npm run start
```

## Переменные окружения

В `.env.local` при необходимости укажите:

```env
NEXT_PUBLIC_FORMSPREE_ENDPOINT=...
```
