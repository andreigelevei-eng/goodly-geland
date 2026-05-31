type AnalyticsValue = string | number | boolean;

export type AnalyticsParams = Record<string, AnalyticsValue>;

declare global {
  interface Window {
    plausible?: (eventName: string, options?: { props?: AnalyticsParams }) => void;
    gtag?: (command: 'event', eventName: string, params?: AnalyticsParams) => void;
  }
}

export function trackEvent(name: string, params: AnalyticsParams = {}) {
  if (typeof window === 'undefined') {
    return;
  }

  if (typeof window.plausible === 'function') {
    window.plausible(name, { props: params });
  }

  if (typeof window.gtag === 'function') {
    window.gtag('event', name, params);
  }
}
