# Запуск проекта

Устанавливаем зависимости и запуск сервера + фронтенда в dev режиме

```
npm install
npm run start:dev
или
npm run start:dev:vite
```

# Скрипты

-   Запуск в **development** режиме

    -   `npm run start` - Запуск **frontend** проектана **webpack dev server**
    -   `npm run start:vite` - Запуск **frontend** проекта на **vite**
    -   `npm run start:dev`: - Запуск **frontend** проектана **webpack dev server** + **backend**
    -   `npm run start:dev:vite` - Запуск **frontend** проекта на**vite** + **backend**
    -   `npm run start:dev:vite` - Запуск **frontend** проекта на**vite** + **backend**
    -   `npm run start:dev:server` - Запуск **backend** проекта

-   Сборка

    -   `npm run build:prod` - Сборка в _propd_ режиме;
    -   `npm run build:dev` - Сборка в _dev_ режиме (Не минимизирован);

-   Тесты
    -   `npm run test:unit` - Запуск юнит-тестов
    -   `npm run test:ui` - Запуск скриншотных тестов с [loki](https://loki.js.org/getting-started.html)
    -   `npm run test:ui:ok` - Сделать текущие скриншоты эталонными
    -   `npm run test:ui:ci` - Запуск скриншотных тестов в CI
    -   `npm run test:ui:report` - Генерация полного отчета для скриншотных тестов
    -   `npm run test:ui:json` - Генерация JSON для скриншотных тестов
    -   `npm run test:ui:html` - Генерация HTML для скриншотных тестов
    -   `npm run sb`: - Запуск **storybook**
    -   `npm run sb:build`: - Запуск генерации **storybook**-билда
-   Проверка стиля

    -   `npm run lint:ts` - Проверка **ts-файлов** линтером
    -   `npm run lint:ts:fix` - Исправление **ts-файлов** линтером
    -   `npm run lint:scss` - Проверка файлов стилей линтером
    -   `npm run lint:scss:fix` - Исправление файлов стилей линтером

-   `npm run prepare` - прекоммитные хуки
-   `npm run generate:slice` - Скрипт для генерации FSD слайсов
