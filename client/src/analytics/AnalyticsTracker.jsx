import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import {
  trackPageView,
  trackWhatsappClick,
  trackPhoneClick,
  trackEmailClick,
  trackSocialClick,
  trackBookCallClick
} from './events';

/**
 * AnalyticsTracker Component
 * Mounted inside BrowserRouter to track SPA route transitions
 * and handle global click delegation for contact & CTA links.
 */
export const AnalyticsTracker = () => {
  const location = useLocation();
  const prevPathRef = useRef(null);

  // Track SPA Page Views on route change
  useEffect(() => {
    const currentPath = location.pathname + location.search;

    // Avoid duplicate page view on identical path
    if (prevPathRef.current === currentPath) return;
    prevPathRef.current = currentPath;

    // Small delay to allow react-helmet-async / SEO component to update document.title
    const timer = setTimeout(() => {
      trackPageView({
        page_path: currentPath,
        page_title: document.title,
        page_location: window.location.href
      });
    }, 100);

    return () => clearTimeout(timer);
  }, [location]);

  // Global Delegated Event Listener for CTAs (WhatsApp, Phone, Email, Social links)
  useEffect(() => {
    const handleGlobalClick = (event) => {
      const targetLink = event.target.closest('a, button');
      if (!targetLink) return;

      const href = targetLink.getAttribute('href') || '';
      const text = (targetLink.textContent || '').trim().toLowerCase();

      // Helper to identify link location container
      const getContainerLocation = (el) => {
        if (el.closest('header')) return 'header';
        if (el.closest('footer')) return 'footer';
        if (el.closest('nav')) return 'navigation';
        if (el.closest('[class*="chat"]')) return 'floating_chat';
        if (el.closest('#contact')) return 'contact_section';
        return 'content';
      };

      const locationTag = getContainerLocation(targetLink);

      // WhatsApp Click
      if (href.includes('wa.me') || href.includes('api.whatsapp.com') || href.includes('whatsapp')) {
        trackWhatsappClick(locationTag);
        return;
      }

      // Phone Click
      if (href.startsWith('tel:')) {
        trackPhoneClick(locationTag);
        return;
      }

      // Email Click
      if (href.startsWith('mailto:')) {
        trackEmailClick(locationTag);
        return;
      }

      // Book Growth Call / Book Consultation Click
      if (
        text.includes('book free growth call') ||
        text.includes('book a call') ||
        text.includes('book growth call') ||
        text.includes('book call')
      ) {
        trackBookCallClick(locationTag);
        return;
      }

      // Social Links
      if (href.includes('instagram.com')) {
        trackSocialClick('instagram', href);
        return;
      }
      if (href.includes('facebook.com')) {
        trackSocialClick('facebook', href);
        return;
      }
      if (href.includes('linkedin.com')) {
        trackSocialClick('linkedin', href);
        return;
      }
      if (href.includes('youtube.com')) {
        trackSocialClick('youtube', href);
      }
    };

    document.addEventListener('click', handleGlobalClick, { capture: true });
    return () => {
      document.removeEventListener('click', handleGlobalClick, { capture: true });
    };
  }, []);

  return null;
};

export default AnalyticsTracker;
