# Запуск проекта

Устанавливаем зависимости и запуск сервера + фронтенда в dev режиме

```
npm install
npm run start:dev 
или
npm run start:dev:vite
```

# Скрипты

- Запуск в __development__ режиме
    - `npm run start` - Запуск  __frontend__ проектана __webpack dev server__
    - `npm run start:vite` - Запуск  __frontend__ проекта на __vite__
    - `npm run start:dev`: - Запуск  __frontend__ проектана __webpack dev server__ + __backend__
    - `npm run start:dev:vite` - Запуск __frontend__ проекта на__vite__ + __backend__
    - `npm run start:dev:vite` - Запуск __frontend__ проекта на__vite__ + __backend__
    - `npm run start:dev:server` - Запуск __backend__ проекта

- Сборка
    - `npm run build:prod` - Сборка в _propd_ режиме;
    - `npm run build:dev` - Сборка в _dev_ режиме (Не минимизирован);

- Тесты
    - `npm run test:unit` - Запуск юнит-тестов
    - `npm run test:ui` - Запуск скриншотных тестов с [loki](https://loki.js.org/getting-started.html)
    - `npm run test:ui:ok` - Сделать текущие скриншоты эталонными
    - `npm run test:ui:ci` - Запуск скриншотных тестов в CI
    - `npm run test:ui:report` - Генерация полного отчета для скриншотных тестов
    - `npm run test:ui:json` - Генерация JSON для скриншотных тестов
    - `npm run test:ui:html` - Генерация HTML для скриншотных тестов
    - `npm run sb`: - Запуск __storybook__
    - `npm run sb:build`: - Запуск генерации __storybook__-билда
- Проверка стиля
    - `npm run lint:ts` - Проверка __ts-файлов__ линтером
    - `npm run lint:ts:fix` - Исправление __ts-файлов__ линтером
    - `npm run lint:scss`  - Проверка файлов стилей линтером
    - `npm run lint:scss:fix` - Исправление файлов стилей линтером

- `npm run prepare` - прекоммитные хуки
- `npm run generate:slice`  - Скрипт для генерации FSD слайсов
