export const GOODLY_UTM_SOURCE = 'goodly_obzornik';
export const GOODLY_UTM_MEDIUM = 'seo_review';
export const GOODLY_UTM_CAMPAIGN = 'goodly_products';

export type GoodlySourcePageType =
  | 'home'
  | 'product_list'
  | 'product_page'
  | 'article'
  | 'footer'
  | 'banner';

export type GoodlyCtaLocation =
  | 'hero'
  | 'summary'
  | 'price_block'
  | 'rights_block'
  | 'bottom'
  | 'card'
  | 'nav'
  | 'footer'
  | 'inline';

export type GoodlyCtaAngle =
  | 'topic_value'
  | 'lead_magnet_use'
  | 'resale_rights'
  | 'bonus'
  | 'general';

interface BuildGoodlyStoreUrlParams {
  baseUrl: string;
  productSlug: string;
  sourcePageType: GoodlySourcePageType;
  ctaLocation: GoodlyCtaLocation;
  ctaAngle: GoodlyCtaAngle;
}

export function buildGoodlyUtmContent(params: Omit<BuildGoodlyStoreUrlParams, 'baseUrl'>) {
  return [
    params.productSlug,
    params.sourcePageType,
    params.ctaLocation,
    params.ctaAngle,
  ].join('__');
}

export function buildGoodlyStoreUrl(params: BuildGoodlyStoreUrlParams) {
  const url = new URL(params.baseUrl);
  const utmContent = buildGoodlyUtmContent(params);

  url.searchParams.set('utm_source', GOODLY_UTM_SOURCE);
  url.searchParams.set('utm_medium', GOODLY_UTM_MEDIUM);
  url.searchParams.set('utm_campaign', GOODLY_UTM_CAMPAIGN);
  url.searchParams.set('utm_content', utmContent);

  return url.toString();
}

export function assertGoodlyUrlHasUtm(url: string) {
  if (!url.includes('geland.goodly.pro')) {
    return;
  }

  const parsedUrl = new URL(url);
  const requiredParams = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content'];
  const missingParams = requiredParams.filter((param) => !parsedUrl.searchParams.get(param));

  if (missingParams.length > 0) {
    throw new Error(`Goodly store URL is missing required UTM params: ${missingParams.join(', ')}`);
  }
}
