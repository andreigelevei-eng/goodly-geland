# Analytics plan before Goodly page writing

Date: 2026-06-01
Repository: `andreigelevei-eng/goodly-geland`
Public site: `https://goodly.obzornik.online`

## Purpose

Before writing and publishing product review pages, define what we need to measure.

The current project is not only an SEO site. It must help understand:

1. which product topics attract useful traffic;
2. which audience segments click through to Goodly;
3. whether users click because of the product topic or because of resale/lead-magnet value;
4. which page blocks create action;
5. which future article clusters deserve expansion.

## Current stage

Public product pages are **not ready for writing yet**.

Current verified inputs:

- `PRODUCT_FACTS_FIRST_5_VERIFIED.md`
- `AUDIENCE_ANALYSIS_FIRST_5.md`

Next step after this file:

- decide analytics tool;
- add a minimal event helper;
- define CTA components with event attributes;
- only then build product page templates.

## Recommended analytics setup

### Option A — Plausible Analytics

Best fit if the priority is simple, privacy-friendly analytics.

Pros:

- lightweight;
- cookie-light/cookie-free style depending on setup;
- good for page views and custom events;
- easier privacy story.

Cons:

- paid in most normal setups;
- less detailed than GA4.

### Option B — Google Analytics 4

Best fit if the priority is deep campaign and event tracking.

Pros:

- detailed event tracking;
- UTM/source reporting;
- familiar marketing reports;
- can later connect with Ads/Search Console workflows.

Cons:

- heavier script;
- more privacy/cookie considerations;
- more setup complexity.

### Option C — No external analytics yet, event-ready markup only

Best fit for the next coding step if we want to avoid committing to a tool immediately.

Pros:

- no privacy/cookie changes yet;
- pages can be built with stable `data-*` attributes;
- analytics can be attached later without rewriting content.

Cons:

- no actual measurement until a tool is connected.

## Recommendation

Start with **Option C** in code structure, then choose Plausible or GA4.

Reason: we still have only 5 verified products and no public page template. The safest next step is to design trackable components and event names first.

## Event naming convention

Use lowercase snake_case.

Format:

```text
<object>_<action>
```

Examples:

- `product_page_view`
- `product_cta_click`
- `product_list_click`
- `article_product_click`
- `store_outbound_click`
- `engaged_scroll`

## Required events

### 1. product_page_view

Triggered when a product review page loads.

Parameters:

- `product_slug`
- `product_title`
- `topic_cluster`
- `price`
- `source_verified`

Purpose:

- understand which products attract views;
- compare topic clusters;
- segment future SEO traffic by product.

### 2. product_cta_click

Triggered when a user clicks a CTA on a product page.

Parameters:

- `product_slug`
- `product_title`
- `cta_location`
- `cta_angle`
- `store_url`

Allowed `cta_location` values:

- `hero`
- `summary`
- `price_block`
- `rights_block`
- `bottom`

Allowed `cta_angle` values:

- `topic_value`
- `lead_magnet_use`
- `resale_rights`
- `bonus`
- `general`

Purpose:

- distinguish why people click;
- compare topic-value CTAs vs resale-rights CTAs;
- find best CTA placement.

### 3. store_outbound_click

Triggered for any outbound click to `geland.goodly.pro`.

Parameters:

- `target_url`
- `source_page_type`
- `source_slug`
- `product_slug`
- `link_location`

Purpose:

- count all external Goodly store exits;
- verify that CTA tracking is not missing clicks.

### 4. product_list_click

Triggered when a user clicks a product from `/products/`.

Parameters:

- `product_slug`
- `product_title`
- `topic_cluster`
- `list_position`
- `source_page`

Purpose:

- understand which product cards get attention;
- improve ordering and card text.

### 5. article_product_click

Triggered when a user clicks from an SEO article to a product page.

Parameters:

- `article_slug`
- `article_topic`
- `product_slug`
- `link_location`
- `anchor_type`

Allowed `anchor_type` values:

- `contextual`
- `cta_block`
- `related_product`
- `inline`

Purpose:

- measure which articles move users toward product reviews;
- decide which content clusters deserve more articles.

### 6. engaged_scroll

Triggered at meaningful scroll milestones.

Recommended thresholds:

- 50%;
- 75%;
- 90%.

Parameters:

- `page_type`
- `slug`
- `scroll_depth`

Purpose:

- separate accidental visits from engaged reading;
- compare page structures.

## Product-specific tracking parameters for first 5 products

### Viral videos

- `product_slug`: `virusnye-video-formuly-sozdaniya-i-prodvizheniya`
- `topic_cluster`: `video_content`
- CTA angles to test:
  - `topic_value`: formulas, hooks, retention, reach;
  - `resale_rights`: 100% resale rights;
  - `lead_magnet_use`: use PDF as a lead magnet.

### Personal growth without overload

- `product_slug`: `sistema-lichnogo-rosta-razvitie-bez-peregruza`
- `topic_cluster`: `personal_growth`
- CTA angles to test:
  - `topic_value`: development without burnout;
  - `lead_magnet_use`: PDF for audience growth;
  - `resale_rights`: resale rights.

### Faster learning

- `product_slug`: `kak-uchitsya-bystree-prilozheniya-dlya-skorochteniya-zapominaniya-i-vizualnogo-myshleniya`
- `topic_cluster`: `learning_productivity`
- CTA angles to test:
  - `topic_value`: apps, memory, focus;
  - `lead_magnet_use`: education/productivity lead magnet;
  - `resale_rights`: resale rights.

### Emotional resilience for leaders

- `product_slug`: `emotsionalnaya-ustoychivost-lidera-upravlenie-reaktsiyami-i-davleniem`
- `topic_cluster`: `leadership_resilience`
- CTA angles to test:
  - `topic_value`: pressure, stress, decisions;
  - `lead_magnet_use`: leadership/self-management lead magnet;
  - `resale_rights`: resale rights.

### Writing cheat sheets

- `product_slug`: `shpargalki-pishi-kak-professional`
- `topic_cluster`: `copywriting`
- CTA angles to test:
  - `topic_value`: hooks, formulas, posts, emails;
  - `lead_magnet_use`: copywriting lead magnet;
  - `resale_rights`: resale rights.

## UTM convention for outbound Goodly links

Use UTMs only if Андрей approves adding them to store URLs.

Recommended pattern:

```text
utm_source=goodly_obzornik
utm_medium=seo_review
utm_campaign=goodly_products
utm_content=<product_slug>__<cta_location>__<cta_angle>
```

Example:

```text
https://geland.goodly.pro/store/1305hxkx?utm_source=goodly_obzornik&utm_medium=seo_review&utm_campaign=goodly_products&utm_content=virusnye-video-formuly-sozdaniya-i-prodvizheniya__hero__topic_value
```

Open question:

- confirm whether Goodly store URLs should stay clean or include UTMs.

## Privacy and cookie considerations

If analytics is added:

1. Check whether the tool uses cookies.
2. Update privacy/cookie text if needed.
3. Do not add unnecessary trackers.
4. Do not expose private project architecture in public policy text.
5. Keep analytics text specific to this standalone Goodly review site.

## Minimal technical implementation idea

### Analytics helper

Create a small client-side helper later, for example:

```ts
export function trackEvent(name: string, params: Record<string, string | number | boolean>) {
  if (typeof window === 'undefined') return;

  // Plausible example:
  // window.plausible?.(name, { props: params });

  // GA4 example:
  // window.gtag?.('event', name, params);
}
```

### Trackable CTA attributes

CTA links should have stable data attributes even before analytics is connected:

```html
<a
  href="https://geland.goodly.pro/store/..."
  data-event="product_cta_click"
  data-product-slug="..."
  data-cta-location="hero"
  data-cta-angle="topic_value"
>
  Смотреть продукт на Goodly
</a>
```

## Page template implications

Product pages should have separate CTA blocks so analytics can compare intent:

1. Hero CTA — broad topic value.
2. Summary/contents CTA — after user sees what is inside.
3. Rights CTA — after 100% resale rights explanation.
4. Bottom CTA — after full review.

Each CTA must have different `cta_location` and, where useful, different `cta_angle`.

## What not to do yet

- Do not write final public review copy yet.
- Do not create pages before analytics/component structure is clear.
- Do not add analytics scripts before choosing a tool.
- Do not add UTM parameters before approval.
- Do not make cross-project references.

## Next proposed implementation step

Create a non-public technical scaffold in code:

1. product data model for the first 5 verified products;
2. reusable CTA component with tracking attributes;
3. analytics helper stub without external script;
4. page template draft behind data structure, but no aggressive final SEO copy yet.

This keeps future pages measurable without locking into Plausible or GA4 too early.
