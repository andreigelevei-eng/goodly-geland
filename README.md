# goodly-geland

SEO-слой для проекта Obzornik / Geland / Goodly.

## Назначение

Репозиторий предназначен только для статического сайта с обзорами обучающих продуктов, SEO-статьями и CTA-ссылками на магазин Geland в Goodly.

Рабочая схема:

```text
PDF / описание продукта / документ
        ↓
SEO-обзор или статья
        ↓
GitHub Pages
        ↓
CTA на магазин Geland в Goodly
```

## Границы проекта

- Не смешивать с `ai-memory`, концертными проектами, mama-server, n8n, Twenty CRM, Beget и другими контурами.
- Все файлы сайта, статьи, обзоры, robots, sitemap, JSON-LD и шаблоны Goodly/Geland живут только здесь.
- Публичное позиционирование: обзор обучающих материалов и переход к продукту в магазине Geland.

## Техническая база

- Astro
- Static output
- GitHub Pages
- Markdown-контент для продуктов и статей

## Быстрый старт локально

```bash
npm install
npm run dev
```

Сборка:

```bash
npm run build
```

## Структура

```text
src/
  pages/       страницы сайта
  layouts/     базовые шаблоны
  components/  CTA, карточки, JSON-LD
  content/     продукты и статьи
public/        robots.txt, изображения, статические файлы
.github/       GitHub Actions
```
