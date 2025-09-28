/**
 * Track page view in Google Analytics
 * @param page - The page path to track
 */
export const trackPageView = (page: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    const gaId = import.meta.env.VITE_GA_MEASUREMENT_ID;
    if (gaId) {
      window.gtag("config", gaId, {
        page_path: page,
      });
    }
  }
};

/**
 * Track custom events in Google Analytics
 * @param action - The action being tracked
 * @param category - The category of the event
 * @param label - Optional label for the event
 */
export const trackEvent = (
  action: string,
  category: string,
  label?: string
) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
    });
  }
};

/**
 * Track survey link clicks
 */
export const trackSurveyClick = () => {
  trackEvent("survey_click", "engagement", "survey_link");
};

/**
 * Track navigation clicks
 * @param page - The page being navigated to
 */
export const trackNavigation = (page: string) => {
  trackEvent("navigation", "user_interaction", page);
};
