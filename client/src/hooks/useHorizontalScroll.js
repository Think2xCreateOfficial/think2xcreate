// src/hooks/useHorizontalScroll.js
import { useState, useEffect, useCallback } from 'react';

const useHorizontalScroll = (scrollContainerRef) => {
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollButtons = useCallback(() => {
    const container = scrollContainerRef.current;
    if (container) {
      setCanScrollLeft(container.scrollLeft > 20);
      setCanScrollRight(
        container.scrollLeft < container.scrollWidth - container.clientWidth - 20
      );
    }
  }, [scrollContainerRef]);

  const scrollLeft = useCallback(() => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = container.clientWidth * 0.8;
      container.scrollTo({
        left: container.scrollLeft - scrollAmount,
        behavior: 'smooth'
      });
    }
  }, [scrollContainerRef]);

  const scrollRight = useCallback(() => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = container.clientWidth * 0.8;
      container.scrollTo({
        left: container.scrollLeft + scrollAmount,
        behavior: 'smooth'
      });
    }
  }, [scrollContainerRef]);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      checkScrollButtons();
      container.addEventListener('scroll', checkScrollButtons);
      window.addEventListener('resize', checkScrollButtons);
      
      // Disable mouse wheel horizontal scroll
      const handleWheel = (e) => {
        // Prevent horizontal scrolling via wheel
        if (container.scrollWidth > container.clientWidth) {
          e.preventDefault();
          // Do not add scroll - completely block wheel scrolling
          return false;
        }
      };
      
      // Disable drag scrolling
      const preventDragScroll = (e) => {
        e.preventDefault();
        return false;
      };
      
      // Disable default drag behavior
      container.addEventListener('dragstart', preventDragScroll);
      container.addEventListener('mousedown', preventDragScroll);
      
      // Wheel event with passive false to prevent page scroll
      // container.addEventListener('wheel', handleWheel, { passive: false });
      
      // Remove grab cursor since drag is disabled
      container.style.cursor = 'default';
      
      return () => {
        container.removeEventListener('scroll', checkScrollButtons);
        window.removeEventListener('resize', checkScrollButtons);
        container.removeEventListener('wheel', handleWheel);
        container.removeEventListener('dragstart', preventDragScroll);
        container.removeEventListener('mousedown', preventDragScroll);
        container.style.cursor = '';
      };
    }
  }, [scrollContainerRef, checkScrollButtons]);

  return {
    scrollLeft,
    scrollRight,
    canScrollLeft,
    canScrollRight
  };
};

export default useHorizontalScroll;