import { useEffect } from "react";
import { trackPageView } from "../utils/analytics";

/**
 * Hook to track page views automatically
 * @param page - The page path to track
 */
export function useAnalytics(page: string) {
  useEffect(() => {
    trackPageView(page);
  }, [page]);
}

/**
 * Hook to initialize Google Analytics
 */
export function useGoogleAnalytics() {
  useEffect(() => {
    const gaId = import.meta.env.VITE_GA_MEASUREMENT_ID;

    if (!gaId) {
      console.warn(
        "Google Analytics ID not found. Analytics will not be tracked."
      );
      return;
    }

    // Load Google Analytics script
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
    document.head.appendChild(script);

    // Initialize gtag
    window.gtag = function (...args: unknown[]) {
      (window as unknown as Record<string, unknown>).dataLayer =
        (window as unknown as Record<string, unknown>).dataLayer || [];
      (
        (window as unknown as Record<string, unknown>).dataLayer as unknown[]
      ).push(args);
    };

    window.gtag("js", new Date().toISOString());
    window.gtag("config", gaId, {
      page_title: document.title,
      page_location: window.location.href,
    });

    return () => {
      // Cleanup if needed
      const existingScript = document.querySelector(
        `script[src*="googletagmanager.com"]`
      );
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);
}
