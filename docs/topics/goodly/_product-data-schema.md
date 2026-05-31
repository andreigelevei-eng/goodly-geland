# Goodly Product Data Schema

Структура данных для сбора карточек продуктов Goodly перед генерацией страниц.

## JSON-массив

Каждый продукт хранится объектом:

```json
{
  "topic": "goodly",
  "source_page": "geland.goodly.pro first store page",
  "title": "Название продукта",
  "slug": "url-slug-for-site",
  "url": "https://geland.goodly.pro/store/...",
  "price": {
    "current": null,
    "old": null,
    "currency": "RUB",
    "raw": ""
  },
  "format": "PDF-гайд / курс / чек-лист / шпаргалки / другое",
  "resale": {
    "enabled": null,
    "percent": null,
    "raw": ""
  },
  "tagline": "1–2 предложения: боль или проблема из начала описания",
  "what_you_get": "1–3 предложения: суть продукта и результат изучения",
  "for_whom": [],
  "contents": [],
  "use_cases": [],
  "og_image": "",
  "category": "",
  "seo": {
    "title": "",
    "description": "",
    "keywords": []
  },
  "cta": {
    "text": "Перейти к продукту",
    "url": "https://geland.goodly.pro/store/..."
  },
  "status": "raw"
}
```

## Поля от Андрея

Базовые поля, которые обязательно извлекать:

1. `title` — название продукта.
2. `url` — ссылка на карточку.
3. `price` — текущая и старая цена, если есть.
4. `format` — формат продукта.
5. `resale` — права перепродажи: true/false + процент, если указан.
6. `tagline` — боль/проблема из начала описания.
7. `what_you_get` — что получает покупатель.
8. `for_whom` — целевая аудитория.
9. `contents` — разделы/главы.
10. `use_cases` — применение.
11. `og_image` — обложка из meta og:image.

## Дополнительные поля для шаблонизации

Добавлены поля:

- `topic` — всегда `goodly` для этой темы.
- `source_page` — откуда взята карточка.
- `slug` — будущий URL страницы на Obzornik.
- `category` — категория продукта.
- `seo` — заготовки title, description, keywords.
- `cta` — кнопка и URL.
- `status` — raw / enriched / page-ready / published.

## Статусы

```text
raw          данные только собраны
enriched     данные дополнены SEO и структурой
page-ready   можно генерировать страницу
published    страница опубликована
```

## Правило

Сначала собрать JSON по продуктам. Потом на основе JSON создавать страницы. Не писать страницы напрямую из списка ссылок без промежуточного product data.
