# Домашнє завдання №1 — Основи TypeScript

Проєкт створений на **Vite + TypeScript**. Усі 8 завдань розміщені в окремих файлах папки `src`.

> **Увага:** на скриншотах є умови завдань, але немає початкових фрагментів коду. Тому для змінних, об'єктів, масивів і прикладів виклику використані демонстраційні значення. Якщо викладач надав окремі файли-заготовки, потрібно перенести в них типізацію та зберегти саме їхні початкові значення/виклики.

## Як запустити

Встановіть Node.js (LTS), а потім у терміналі VS Code:

```bash
npm install
npm run dev
```

Перейдіть за адресою, яку виведе Vite (зазвичай `http://localhost:5173/`), і відкрийте консоль браузера: **F12 → Console**.

Перевірка TypeScript та збірки:

```bash
npm run typecheck
npm run build
```

Форматування:

```bash
npm run format
```

## Файли

- `src/task-1.ts` — явні типи `string`, `number`, `boolean`.
- `src/task-2.ts` — `interface Product`, `readonly`, необов'язкове поле.
- `src/task-3.ts` — масиви рядків, чисел та об'єктів.
- `src/task-4.ts` — типізація аргументів, `email?`, `void`.
- `src/task-5.ts` — union type `Status`.
- `src/task-6.ts` — generic `getFirstElement<T>`.
- `src/task-7.ts` — `Promise<string>`.
- `src/task-8.ts` — `axios.get<Post[]>`, `Promise<Post[]>`.

`src/main.ts` підключає модулі, щоб їхні приклади виконувалися на сторінці.

## Як завантажити на GitHub

Створіть **порожній** публічний репозиторій `01-ts-basics` на GitHub (не додавайте README або .gitignore на сайті, бо вони вже є в проєкті), далі в папці проєкту:

```bash
git init
git add .
git commit -m "Complete TypeScript basics homework"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/01-ts-basics.git
git push -u origin main
```

Замініть `YOUR_USERNAME` на свій логін GitHub. Папка `node_modules` і `dist` не потраплять до репозиторію.
