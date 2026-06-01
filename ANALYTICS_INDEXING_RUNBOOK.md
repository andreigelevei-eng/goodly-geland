# Analytics and indexing runbook

Date: 2026-06-01
Repository: `andreigelevei-eng/goodly-geland`
Public site: `https://goodly.obzornik.online`
Status: required before writing/publishing product pages

## Goal

Before publishing SEO/product pages, the site needs an observation loop:

1. pages are generated with predictable URLs and metadata;
2. sitemap/robots/canonical/schema are correct;
3. every Goodly outbound link has UTM;
4. analytics can see page views and CTA clicks;
5. search tools can see sitemap/indexation status;
6. every page has a service summary file that an AI agent can read later.

## External accounts and tools to connect

### Required

1. Google Search Console
   - Property: `https://goodly.obzornik.online/` or DNS/domain property if possible.
   - Purpose: Google indexing, queries, impressions, clicks, CTR, average position, sitemap status, URL inspection.

2. Yandex Webmaster
   - Host: `https://goodly.obzornik.online/`.
   - Purpose: Yandex indexation, sitemap status, diagnostics, search queries, recrawl requests.

3. Yandex Metrica
   - Counter for `goodly.obzornik.online`.
   - Purpose: visits, traffic sources, page depth, engagement, outbound CTA goals.

4. GitHub Pages / Astro build
   - Purpose: stable static output, sitemap generation, canonical URLs.

### Optional but useful

5. GA4
   - Purpose: Google-side campaign analytics and event reporting.
   - Use only if Андрей wants Google analytics in addition to Yandex Metrica.

6. Plausible / Umami
   - Purpose: lightweight event analytics.
   - Use only if privacy-friendly analytics is preferred.

7. Bing Webmaster Tools
   - Optional later, not required for first stage.

## Secrets and access rules

Do not commit tokens, credentials, OAuth secrets, API keys or counter private values into the repo.

If automation is added later, secrets must live in:

- GitHub Actions Secrets; or
- server environment variables; or
- local private operator environment.

Allowed public values:

- public Metrica counter ID if embedded on site;
- public GA measurement ID if GA4 is approved;
- sitemap URL;
- page URLs;
- non-secret status summaries.

## What must be installed or configured

### 1. Google Search Console

Manual setup:

1. Add property for `goodly.obzornik.online`.
2. Verify ownership using DNS or HTML file/meta tag.
3. Submit sitemap: `https://goodly.obzornik.online/sitemap-index.xml` or actual Astro sitemap URL.
4. Enable Search Console API in Google Cloud if automated reporting is needed.
5. Configure OAuth 2.0 access with read-only scope when possible.

Important:

- Google Indexing API must **not** be used for normal Goodly product/article pages. Google documents it for JobPosting and livestreaming VideoObject pages only.
- For normal pages, use sitemap submission, internal links, canonical URLs, manual URL inspection when needed, and Search Console reports.

### 2. Yandex Webmaster

Manual setup:

1. Add host `https://goodly.obzornik.online/`.
2. Verify rights.
3. Submit sitemap.
4. Get `user-id` and `host-id` if API automation is needed.
5. Use recrawl API for changed/new URLs when publishing important pages.

### 3. Yandex Metrica

Manual setup:

1. Create counter for `goodly.obzornik.online`.
2. Add counter script to site layout only after privacy/cookie text is updated if needed.
3. Create goals/events:
   - `product_page_view`
   - `product_cta_click`
   - `store_outbound_click`
   - `article_product_click`
   - `product_list_click`
   - `engaged_scroll`
4. Track outbound UTM clicks to `geland.goodly.pro`.

### 4. Repo/site files to add or verify

Required before public product page publishing:

- `public/robots.txt` with sitemap line.
- generated `sitemap.xml` or `sitemap-index.xml`.
- canonical URL on every page.
- JSON-LD for product/review/FAQ where appropriate.
- `llms.txt` for agent-readable site summary.
- `/.well-known/agent-description.md` for agent-readable operating rules.
- optional `search-index.json` for agent/local search.
- service page summaries in `ops/pages/`.

## Deployment flow

For each publish/update:

1. Update source content.
2. Run build locally or via CI.
3. Confirm all outbound Goodly links contain UTM.
4. Confirm canonical URLs and sitemap include the page.
5. Deploy to GitHub Pages.
6. Record changed URLs.
7. Submit or refresh sitemap in Google Search Console if needed.
8. Submit changed URLs to Yandex recrawl if quota allows.
9. Update the service summary file for each changed page.
10. After data delay, update metrics: impressions, clicks, CTR, position, index status, top queries.

## Page service summary model

Each public page gets a service summary file:

```text
ops/pages/<page-slug>.md
```

It must include:

- page URL;
- source file path;
- status: draft / published / updated / archived;
- page type: product / article / index / legal / utility;
- target query cluster;
- pain-to-product mapping;
- canonical URL;
- sitemap status;
- robots status;
- JSON-LD status;
- UTM CTA map;
- analytics events;
- indexation status in Google and Yandex;
- last submitted to recrawl;
- last checked date;
- performance notes;
- next action.

## Required fields per page

```yaml
page:
  title:
  slug:
  url:
  source_path:
  page_type:
  status:
  canonical:
  robots: index,follow
  sitemap_included: false
  jsonld:
    product: false
    faq: false
    breadcrumb: false
  llm_summary:
  target_queries: []
  user_pains: []
  audience_segments: []
  product_fit:
    source_verified: false
    verified_facts_file:
    unsafe_claims_blocked: []
  cta:
    store_base_url:
    utm_required: true
    links: []
  analytics:
    events: []
    metrica_goals: []
    ga4_events: []
  indexing:
    google:
      submitted_sitemap: false
      indexed_status: unknown
      last_checked:
      clicks_28d:
      impressions_28d:
      ctr_28d:
      avg_position_28d:
      top_queries: []
    yandex:
      sitemap_seen: unknown
      recrawl_submitted: false
      recrawl_task_id:
      indexed_status: unknown
      last_checked:
      top_queries: []
  change_log: []
  next_action:
```

## Minimum analytics event contract

All public pages should support:

- `product_page_view` for product pages;
- `product_cta_click` for product CTAs;
- `store_outbound_click` for any Goodly store exit;
- `product_list_click` on product index;
- `article_product_click` from article to product;
- `engaged_scroll` for content engagement.

All Goodly outbound clicks must include:

- `utm_source=goodly_obzornik`
- `utm_medium=seo_review`
- `utm_campaign=goodly_products`
- `utm_content=<product_slug>__<source_page_type>__<cta_location>__<cta_angle>`

## Indexation tracking cadence

### Immediately after publish

- Check page returns 200.
- Check canonical points to itself.
- Check it is in sitemap.
- Check robots does not block it.
- Submit sitemap / recrawl where appropriate.
- Record page as `published_pending_index`.

### 24–72 hours after publish

- Check Google Search Console URL Inspection manually or via API if configured.
- Check Yandex Webmaster page/search status if available.
- Record initial index status.

### Weekly for first month

- Update impressions, clicks, CTR, average position.
- Update top queries.
- Compare actual queries with target pain/query map.
- Mark whether title/H1/intro need adjustment.

### Monthly after stabilization

- Refresh service summary.
- Decide: keep, improve, add supporting article, or change internal links.

## What I need from Андрей before connecting real analytics

1. Confirm which analytics tool to use first:
   - Yandex Metrica only;
   - Yandex Metrica + GA4;
   - Yandex Metrica + Plausible/Umami;
   - all of the above later.
2. Create/confirm access to Google Search Console for `goodly.obzornik.online`.
3. Create/confirm access to Yandex Webmaster for `goodly.obzornik.online`.
4. Create Yandex Metrica counter and provide public counter ID.
5. Decide if GA4 is needed now; if yes, provide measurement ID.
6. Confirm privacy/cookie wording before scripts are embedded.

## What I will do after analytics access exists

1. Add public counter IDs to site config.
2. Add analytics script component conditionally.
3. Add event dispatch for CTA clicks and scroll depth.
4. Keep UTM builder as the source of truth for outbound links.
5. Create `ops/pages/<slug>.md` for every public page.
6. Keep page summaries updated after publish and after index/performance checks.

## What I will not do

- I will not commit secrets.
- I will not use Google Indexing API for normal product/article pages.
- I will not publish clean outbound Goodly links.
- I will not claim indexation is guaranteed.
- I will not mix private Obzornik project map into public files.
