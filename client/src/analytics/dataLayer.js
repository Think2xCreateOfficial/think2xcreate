/**
 * Safe DataLayer Utility for Google Tag Manager
 * Handles dataLayer initialization and event dispatching with non-blocking error guards.
 */

// Initialize window.dataLayer safely
if (typeof window !== 'undefined') {
  window.dataLayer = window.dataLayer || [];
}

/**
 * Push an event payload to GTM dataLayer safely.
 * @param {Object} payload Event object to push
 */
export const pushDataLayer = (payload) => {
  if (typeof window === 'undefined') return;

  try {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(payload);
  } catch (error) {
    // Non-blocking catch to prevent analytics from breaking app execution
    if (import.meta.env.DEV) {
      console.warn('[Analytics Error]', error);
    }
  }
};
