# Analytics and indexing runbook

Date: 2026-06-01
Repository: `andreigelevei-eng/goodly-geland`
Public site: `https://goodly.obzornik.online`
Status: required before writing/publishing product pages

## Chosen tracking architecture

Use a **minimal Google setup**:

- Google Search Console: yes, for Google indexing/search data only.
- Google Analytics 4: no.
- Google Tag Manager: no.
- Google tracking scripts on the public site: no.

Primary analytics and behavior tracking:

- Yandex Metrica.

Primary Russian search/indexing tools:

- Yandex Webmaster.
- IndexNow where appropriate.

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

1. Google Search Console, minimal mode
   - Property: `https://goodly.obzornik.online/` URL-prefix property or DNS/domain property if Андрей prefers DNS verification.
   - Purpose: Google indexing status, Google search queries, impressions, clicks, CTR, average position, sitemap status, URL inspection.
   - No GA4, no GTM, no Google analytics script.

2. Yandex Webmaster
   - Host: `https://goodly.obzornik.online/`.
   - Purpose: Yandex indexation, sitemap status, diagnostics, search queries, recrawl requests.

3. Yandex Metrica
   - Counter for `goodly.obzornik.online`.
   - Purpose: visits, traffic sources, page depth, engagement, outbound CTA goals.

4. GitHub Pages / Astro build
   - Purpose: stable static output, sitemap generation, canonical URLs.

### Optional but not selected now

5. GA4
   - Not used at this stage.
   - Do not add GA4 script or measurement ID unless explicitly approved later.

6. Plausible / Umami
   - Optional later, not required for first stage.

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
- Google Search Console HTML verification file or meta tag only if Андрей chooses that verification method;
- sitemap URL;
- page URLs;
- non-secret status summaries.

## What must be installed or configured

### 1. Google Search Console — minimal mode

Manual setup options:

#### Preferred option A — DNS verification

1. Add a Search Console property.
2. Choose Domain property if verifying the whole domain, or URL-prefix if verifying only `https://goodly.obzornik.online/`.
3. Add the TXT record provided by Google to DNS.
4. Keep the DNS record after verification.
5. Submit sitemap after site pages are ready.

Pros:

- no Google code on the site;
- stable verification;
- good long-term option.

Cons:

- requires DNS access.

#### Option B — HTML file verification

1. Add a URL-prefix property for `https://goodly.obzornik.online/`.
2. Download the verification HTML file from Search Console.
3. Commit it unchanged into `public/` so it is published at the exact root URL Google requests.
4. Verify in Search Console.
5. Keep the file in `public/` permanently.

Pros:

- no Google analytics/tracking script;
- easy with GitHub Pages.

Cons:

- Андрей must provide the exact verification file name and content.

#### Option C — HTML meta tag verification

Allowed only if Андрей provides the exact meta tag.

This adds a single verification meta tag in `<head>`, not analytics.

Important:

- Google Indexing API must **not** be used for normal Goodly product/article pages. Google documents it for JobPosting and livestreaming VideoObject pages only.
- For normal pages, use sitemap submission, internal links, canonical URLs, manual URL inspection when needed, and Search Console reports.
- Search Console verification does not require GA4 or GTM.

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
- optional Google Search Console HTML verification file in `public/`, only if that method is chosen.

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
9. Submit changed URLs through IndexNow if configured.
10. Update the service summary file for each changed page.
11. After data delay, update metrics: impressions, clicks, CTR, position, index status, top queries.

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
    primary_tool: yandex_metrica
    events: []
    metrica_goals: []
    ga4_enabled: false
    ga4_events: []
  indexing:
    google:
      tracking_tool: search_console_only
      ga4_enabled: false
      gtm_enabled: false
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
    indexnow:
      enabled: false
      submitted: false
      last_submitted:
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

## What I need from Андрей before connecting real analytics/indexing

1. Create/confirm Google Search Console property for `goodly.obzornik.online`.
2. Choose GSC verification method:
   - DNS TXT record, preferred; or
   - HTML file; or
   - HTML meta tag.
3. If HTML file/meta method is chosen, provide the exact verification file or meta tag.
4. Create/confirm access to Yandex Webmaster for `goodly.obzornik.online`.
5. Create Yandex Metrica counter and provide public counter ID.
6. Confirm privacy/cookie wording before Metrica script is embedded.

## What I will do after analytics/indexing inputs exist

1. Add public Metrica counter ID to site config.
2. Add Metrica script component conditionally.
3. Add GSC verification file/meta only if that method is chosen.
4. Add event dispatch for CTA clicks and scroll depth.
5. Keep UTM builder as the source of truth for outbound links.
6. Create `ops/pages/<slug>.md` for every public page.
7. Keep page summaries updated after publish and after index/performance checks.

## What I will not do

- I will not commit secrets.
- I will not add GA4 unless explicitly requested later.
- I will not add Google Tag Manager unless explicitly requested later.
- I will not add Google tracking scripts in the current stage.
- I will not use Google Indexing API for normal product/article pages.
- I will not publish clean outbound Goodly links.
- I will not claim indexation is guaranteed.
- I will not mix private Obzornik project map into public files.
