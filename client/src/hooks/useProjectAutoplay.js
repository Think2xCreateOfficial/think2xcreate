import { useState, useRef, useEffect, useCallback } from 'react';
import { useReducedMotion } from 'framer-motion';

/**
 * Custom hook to handle automatic project rotation with safe pause/resume
 * controls when the user manually interacts with logos or navigation controls.
 *
 * @param {number} totalItems Total number of projects in the current active list
 * @param {number} autoInterval Duration in ms before rotating to next project (default 5000ms)
 * @param {number} resumeDelay Duration in ms to pause autoplay after user interaction (default 8000ms)
 */
export const useProjectAutoplay = (totalItems, autoInterval = 5000, resumeDelay = 8000) => {
  const prefersReduced = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);

  const timerRef = useRef(null);
  const resumeRef = useRef(null);

  // Clear all running timers
  const clearTimers = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (resumeRef.current) clearTimeout(resumeRef.current);
  }, []);

  // Start automatic interval
  const startAutoplay = useCallback(() => {
    clearTimers();
    if (prefersReduced || totalItems <= 1) return;

    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalItems);
    }, autoInterval);
  }, [totalItems, autoInterval, prefersReduced, clearTimers]);

  // Handle manual index selection with auto-resume delay
  const goToIndex = useCallback(
    (index) => {
      if (totalItems === 0) return;
      const targetIndex = (index + totalItems) % totalItems;
      setActiveIndex(targetIndex);

      clearTimers();
      // Resume autoplay after user interaction delay
      resumeRef.current = setTimeout(() => {
        startAutoplay();
      }, resumeDelay);
    },
    [totalItems, clearTimers, startAutoplay, resumeDelay],
  );

  const nextProject = useCallback(() => {
    goToIndex(activeIndex + 1);
  }, [activeIndex, goToIndex]);

  const prevProject = useCallback(() => {
    goToIndex(activeIndex - 1);
  }, [activeIndex, goToIndex]);

  // Pause autoplay on hover/focus
  const pauseAutoplay = useCallback(() => {
    clearTimers();
  }, [clearTimers]);

  // Resume autoplay on mouse leave/blur
  const resumeAutoplay = useCallback(() => {
    startAutoplay();
  }, [startAutoplay]);

  // Initialize and reset when totalItems changes
  useEffect(() => {
    setActiveIndex((prev) => (prev >= totalItems ? 0 : prev));
    startAutoplay();
    return () => clearTimers();
  }, [totalItems, startAutoplay, clearTimers]);

  return {
    activeIndex,
    setActiveIndex: goToIndex,
    nextProject,
    prevProject,
    pauseAutoplay,
    resumeAutoplay,
  };
};

export default useProjectAutoplay;
