# SEO pain-to-product mapping rules

Date: 2026-06-01
Repository: `andreigelevei-eng/goodly-geland`
Scope: Goodly product review and SEO content strategy

## Core principle

The goal is not to simply retell a Goodly product page.

The goal is to make each SEO-optimized text match:

1. a real user pain or search query;
2. the search intent behind that query;
3. the target audience segment that has this pain;
4. verified product facts from the Goodly product page;
5. a clear, honest CTA with mandatory UTM.

If the pain/query and the product do not naturally match, do not force the product into the text.

## Required mapping before writing any page

Every product page or article must have a mapping table before copywriting.

| Layer | Required answer |
|---|---|
| Search query | What does the user type? |
| User pain | What problem is behind the query? |
| Search intent | Informational / commercial / comparison / tool-seeking / purchase-ready |
| Audience segment | Who has this pain? |
| Product fit | Which verified product facts match the pain? |
| Safe promise | What can we honestly say? |
| Unsafe claim | What must not be said? |
| CTA angle | topic_value / lead_magnet_use / resale_rights / bonus / general |
| UTM content | `<product_slug>__<source_page_type>__<cta_location>__<cta_angle>` |

## The fit test

Before writing, answer these questions:

1. Does the user pain appear in the market/search context?
2. Does the Goodly product page verify that the product addresses this pain?
3. Can we connect the pain to a specific guide section, benefit or use case?
4. Can the CTA be useful without exaggeration?
5. Can we avoid promising a guaranteed result?

If any answer is “no”, the page angle must be changed.

## Product facts are the boundary

Allowed product claims must come from:

- provided Goodly product page text;
- verified product facts file;
- future manually checked product page content.

Market research can guide:

- headings;
- query targeting;
- objections;
- examples of user pains;
- structure;
- competitor gaps.

Market research cannot create new product promises.

## Example: viral videos product

### Good mapping

Search query:

- `как удерживать внимание в коротких видео`

User pain:

- Videos are skipped quickly; viewers do not watch to the end.

Verified product fit:

- The product page says the guide covers holding attention from the first seconds, pace, rhythm, editing and creating the feeling that viewers want to watch until the end.

Safe promise:

- “The guide may be useful if you need a structured approach to hooks, rhythm, retention and short-video formats.”

Unsafe claim:

- “This guide will make your videos viral.”

CTA angle:

- `topic_value`

### Weak mapping

Search query:

- `как заработать миллион на тиктоке`

Problem:

- User wants a guaranteed income path.

Verified product fit:

- The product page does not promise guaranteed income.

Decision:

- Do not target this query with this product page.

## Page structure rule

Every public SEO/product page should follow this logic:

1. Start from the user pain/query.
2. Explain the topic context briefly.
3. Introduce the product only where verified product facts match the pain.
4. Show what is inside the product using verified facts.
5. Explain who it may fit and who should check carefully.
6. Include CTA with UTM.
7. Add FAQ based on common objections and verified facts.

## CTA rule

CTA must reflect the query/pain, not just say “buy”.

Examples:

- Pain: low video retention → CTA angle: `topic_value`.
- Pain: need a ready PDF for audience building → CTA angle: `lead_magnet_use`.
- Pain: need a resale product → CTA angle: `resale_rights`.

All CTA links must be generated through `buildGoodlyStoreUrl()`.

## Content quality rule

Good page:

- answers the searcher’s real question;
- makes clear what the product is;
- gives verified details;
- does not overpromise;
- helps the user decide whether to click.

Bad page:

- repeats the sales page mechanically;
- targets a query that does not match the product;
- adds promises not present in the source;
- hides commercial intent;
- sends clean non-UTM store links.

## Next use

Before writing each product page, create a short mapping section inside the product research file or page draft:

```text
Query → Pain → Segment → Verified product fit → Safe promise → CTA angle → UTM content
```

No final public text should be written until this mapping is clear.
