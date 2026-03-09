export const GA_MEASUREMENT_ID = "G-XCJQ1C8Y4C";

type GtagCommand = "config" | "event" | "js";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: [GtagCommand, ...unknown[]]) => void;
  }
}

export function trackEvent(
  action: string,
  params?: Record<string, string | number | boolean | undefined>
) {
  if (typeof window === "undefined" || !window.gtag) {
    return;
  }

  window.gtag("event", action, params ?? {});
}
