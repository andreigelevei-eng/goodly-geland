# Goodly product study task plan

Date: 2026-06-01
Scope: goodly.obzornik.online / andreigelevei-eng/goodly-geland

## Safety and architecture boundaries

- Work only inside the public repository `andreigelevei-eng/goodly-geland` for Goodly/Geland site files.
- Keep the site independent: no public links or explanations that connect Goodly with other Obzornik directions.
- Do not create a public `obzornik.online` hub.
- Product reviews and SEO articles must live inside this subdomain only after research is ready.
- Use human-readable slugs for product and article pages.
- Keep private project mapping outside this repository.

## Current corrected goal

Do **not** write public product pages yet.

First, build a reusable research and content strategy scheme on the first 5 verified products:

1. product fact extraction;
2. target audience analysis;
3. audience segmentation by intent and pain;
4. offer/CTA logic;
5. SEO and content cluster logic;
6. analytics measurement plan;
7. only after that — page structure and copywriting.

## Products currently verified from page text

1. Вирусные видео: формулы создания и продвижения — https://geland.goodly.pro/store/1305hxkx
2. Система личного роста: развитие без перегруза — https://geland.goodly.pro/store/1i86cbqc
3. Как учиться быстрее: приложения для скорочтения, запоминания и визуального мышления — https://geland.goodly.pro/store/1wpc7k6d
4. Эмоциональная устойчивость лидера: управление реакциями и давлением — https://geland.goodly.pro/store/2fz3bxil
5. Шпаргалки «Пиши как профессионал» — https://geland.goodly.pro/store/16aapnpa

Products 6–12 remain planned but are not part of the current implementation stage.

## Stage 1 — fact base

Status: started.

- Keep verified facts in `PRODUCT_FACTS_FIRST_5_VERIFIED.md`.
- Facts include format, volume, price, rights, bonus, contents, audience, use cases and store URL.
- Do not invent anything that is not in the source text.

## Stage 2 — target audience analysis

Status: next.

For each of the first 5 products, define:

- primary buyer segments;
- secondary buyer segments;
- user/buyer distinction, if different;
- pains and desired outcomes;
- awareness level: problem-aware, solution-aware, product-aware;
- purchase motive: use personally, use as lead magnet, resell, use in agency/client work, train team;
- objections and trust gaps;
- CTA angle.

## Stage 3 — product-to-audience matrix

Status: pending.

Create a matrix showing which products fit which audiences:

- online entrepreneurs;
- experts and consultants;
- marketers and SMM specialists;
- online school/course owners;
- freelancers and agencies;
- copywriters/content managers;
- managers/leaders;
- people focused on self-development and learning.

## Stage 4 — analytics plan before publishing

Status: pending.

Before creating public SEO pages, define measurement events and analytics setup.

Minimum events:

- product page view;
- outbound click to Goodly store;
- CTA click above the fold;
- CTA click near price/summary;
- article-to-product click;
- product list click;
- scroll depth or engaged read signal;
- source/medium capture for traffic quality.

Analytics decisions needed:

- which analytics system to use;
- whether external scripts are allowed on GitHub Pages;
- whether cookie/privacy text needs update;
- event naming convention;
- UTM convention for outbound Goodly links, if used.

## Stage 5 — SEO structure after analysis

Status: pending.

Only after audience and analytics stages:

- decide whether to publish product pages first or cluster articles first;
- decide page templates;
- decide internal linking between products and articles;
- decide which search intents are worth targeting first;
- keep copy neutral, review-based and grounded in verified facts.

## Candidate page structure, not yet approved for writing

- `/products/<human-readable-product-slug>/`
- `/articles/<human-readable-seo-slug>/`

## Initial topic clusters

- Video content and social media reach.
- Personal growth, learning and emotional resilience.
- Copywriting and professional writing.
- Lead magnet and resale-rights product usage.
- Marketing assets for entrepreneurs, experts and small teams.

## Next action

Create `AUDIENCE_ANALYSIS_FIRST_5.md` with a grounded target audience analysis for the first 5 verified products before writing any public pages.
