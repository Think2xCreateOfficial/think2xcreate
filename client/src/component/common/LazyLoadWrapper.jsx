import { Suspense, useEffect } from 'react';
import LoadingSpinner from './LoadingSpinner';

function LazyLoadWrapper({ children, preload }) {
  useEffect(() => {
    if (preload) {
      // Preload the component when route is hovered or when near in viewport
      const timeout = setTimeout(() => {
        // Trigger preloading logic here if needed
      }, 100);
      
      return () => clearTimeout(timeout);
    }
  }, [preload]);

  return (
    <Suspense fallback={<LoadingSpinner />}>
      {children}
    </Suspense>
  );
}

export default LazyLoadWrapper