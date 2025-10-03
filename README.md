# Redux Shop (Vite + React + Redux Toolkit + TailwindCSS)

Мини‑интернет‑магазин реализованный для промежуточного экзамена по ТЗ.

Особенности:
- State management: **Redux Toolkit**
- Styling: **TailwindCSS**
- Pages: Products, Cart, Auth (login), Profile
- Products загружаются из https://dummyjson.com/products
- Auth через https://dummyjson.com/auth/login
- Cart и Auth сохраняются в localStorage (ключи: `cart_v1`, `auth_v1`)

## Быстрый старт
1. Распаковать архив или склонировать репозиторий
2. Выполнить:
   ```bash
   npm install
   npm run dev
   ```
3. Открыть http://localhost:5173

## Примечания
- Для логина можно использовать тестовые данные:
  - username: `kminchelle`
  - password: `0lelplR`
- Проект использует Tailwind; если впервые — выполните `npx tailwindcss init -p` (скрипт prepare указан), но `postcss.config.cjs` и `tailwind.config.js` уже добавлены.
