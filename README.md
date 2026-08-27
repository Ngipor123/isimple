# iSimple.lv Astro + Sanity CMS + Netlify

Этот проект представляет собой быстрый, современный и SEO-оптимизированный сайт для сервисного центра iSimple.lv по ремонту iPhone, iPad и других устройств в Риге (Dreiliņi).

## Стек
- **Astro**
- **Sanity CMS**
- **Tailwind CSS**
- **Netlify**
- **TypeScript**

## Установка и запуск

1. Установите зависимости:
```bash
npm install
```

2. Запустите в режиме разработки:
```bash
npm run dev
```

3. Сборка для продакшена:
```bash
npm run build
```

## Переменные окружения (.env)
Создайте файл `.env` в корневой папке проекта:
```env
SANITY_PROJECT_ID=your_project_id
SANITY_DATASET=production
SANITY_API_TOKEN=your_token_if_needed
```
*Примечание: Если переменные окружения отсутствуют или проект ID равен "placeholder", сайт будет автоматически использовать качественные моковые данные, чтобы сборка и демонстрация работали мгновенно без настройки Sanity!*
