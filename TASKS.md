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
2. topic and target audience research;
3. audience segmentation by intent and pain;
4. reference analysis: what strong review/affiliate/product pages do structurally;
5. competitor/SERP analysis by topic and intent;
6. offer/CTA logic;
7. SEO and content cluster logic;
8. analytics measurement plan;
9. only after that — page structure and copywriting.

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

Status: started.

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

Status: started.

Create a matrix showing which products fit which audiences:

- online entrepreneurs;
- experts and consultants;
- marketers and SMM specialists;
- online school/course owners;
- freelancers and agencies;
- copywriters/content managers;
- managers/leaders;
- people focused on self-development and learning.

## Stage 4 — reference analysis

Status: next.

Before designing product pages, collect and analyze references:

- review/affiliate pages with strong comparison structure;
- digital product landing pages;
- SEO article pages that move readers to product CTAs;
- lead magnet landing pages;
- pages that explain resale rights or PLR/MRR-style products clearly.

For every reference, capture:

- URL;
- page type;
- main structure;
- CTA placement;
- trust elements;
- SEO elements;
- what to borrow structurally;
- what to avoid.

Do not copy wording or design directly.

## Stage 5 — competitor and SERP analysis

Status: next.

For each topic cluster, analyze search competitors and adjacent content:

- viral videos / short video formulas;
- personal growth without burnout;
- faster learning / memory apps / speed reading;
- emotional resilience for leaders;
- writing templates / copywriting cheat sheets.

For every cluster, capture:

- dominant search intents;
- competitor page types;
- common headings and content gaps;
- monetization/CTA patterns;
- trust signals;
- opportunities for a more useful review page;
- keywords and article angles to test later.

## Stage 6 — analytics plan before publishing

Status: started.

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

Analytics decisions:

- all outbound Goodly links must include UTM;
- choose analytics system later;
- external scripts are not required for initial technical scaffold;
- event naming convention is defined in `ANALYTICS_PLAN.md`;
- UTM builder is mandatory in code.

## Stage 7 — SEO structure after research

Status: pending.

Only after audience, reference, competitor and analytics stages:

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

Create `REFERENCE_AND_COMPETITOR_RESEARCH.md` with the method, query map and first findings plan before writing any public product pages.
