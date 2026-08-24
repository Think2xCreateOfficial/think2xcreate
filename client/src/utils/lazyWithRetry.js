import { lazy } from 'react';

/**
 * Resilient React.lazy wrapper with automatic chunk load retry logic.
 * Handles stale production deployment chunks (404s) and transient network failures.
 *
 * @param {Function} componentImport Function returning dynamic import e.g. () => import('./MyPage')
 * @returns {React.Component} Lazy loaded React component with retry safety
 */
export const lazyWithRetry = (componentImport) =>
  lazy(async () => {
    const pageHasAlreadyBeenRefreshed = JSON.parse(
      window.sessionStorage.getItem('page_has_been_refreshed') || 'false'
    );

    try {
      return await componentImport();
    } catch (error) {
      if (!pageHasAlreadyBeenRefreshed) {
        // Chunk failed to load (likely new build deployed). Refresh session & retry.
        window.sessionStorage.setItem('page_has_been_refreshed', 'true');
        window.location.reload();
        return new Promise(() => {}); // Hold until reload
      }

      // Reset for future navigations and throw error to ErrorBoundary
      window.sessionStorage.setItem('page_has_been_refreshed', 'false');
      throw error;
    }
  });

export default lazyWithRetry;
