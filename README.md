# DNM Shop (Vite + React + Redux Toolkit + TailwindCSS)

Мини‑интернет‑магазин реализованный для промежуточного экзамена по ТЗ.

Особенности:
- State management: **Redux Toolkit**
- Styling: **TailwindCSS**
- Pages: Products, Cart, Auth (login), Profile, Home(Главная страница)
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
- Проект использует Tailwind; если впервые — выполните `npx tailwindcss init -p`


## Скриншоты страниц
![Home]<img width="1900" height="869" alt="{C69AB348-E2CA-4E5D-BABA-992C1E914754}" src="https://github.com/user-attachments/assets/41504e25-c8dc-43ae-9b39-ca5a3da69ddb" />
!<img width="1901" height="878" alt="{CE60DC87-C6F9-470F-BA85-EC75FDE6C6CB}" src="https://github.com/user-attachments/assets/346ebde8-2ac7-404d-ae18-43534a49291e" />
!<img width="1897" height="873" alt="{3893F5E6-B9CB-4259-9639-91907B0D0B1F}" src="https://github.com/user-attachments/assets/30318996-0425-4226-ae66-70dd2aa9a65e" />
!<img width="1898" height="873" alt="{0543129B-D6D8-4616-9568-4B688080E4F6}" src="https://github.com/user-attachments/assets/6930344a-22fb-48db-a325-1d9f921eb23b" />



