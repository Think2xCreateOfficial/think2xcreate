import { pushDataLayer } from './dataLayer';

/**
 * Centralized Business Analytics Events for Think2xCreate
 */

/**
 * Track SPA Route Page View
 * @param {Object} params { page_path, page_title, page_location }
 */
export const trackPageView = ({ page_path, page_title, page_location } = {}) => {
  const currentPath = page_path || window.location.pathname;
  const currentTitle = page_title || document.title;
  const currentLocation = page_location || window.location.href;

  pushDataLayer({
    event: 'page_view',
    page_path: currentPath,
    page_title: currentTitle,
    page_location: currentLocation
  });
};

/**
 * Track Contact Form Interaction Start
 */
export const trackContactFormStart = (formType = 'lead_inquiry') => {
  pushDataLayer({
    event: 'contact_form_start',
    form_type: formType,
    page_path: window.location.pathname
  });
};

/**
 * Track Contact Form Submission Attempt
 */
export const trackContactFormSubmit = (formType = 'lead_inquiry', serviceCategory = '') => {
  pushDataLayer({
    event: 'contact_form_submit',
    form_type: formType,
    service_category: serviceCategory || 'general',
    page_path: window.location.pathname
  });
};

/**
 * Track Contact Form Successful Submission (Lead Conversion)
 * NO PII (name, email, phone, message) is sent in event parameters.
 */
export const trackContactFormSuccess = (formType = 'lead_inquiry', serviceCategory = '', businessType = '') => {
  pushDataLayer({
    event: 'contact_form_success',
    form_type: formType,
    service_category: serviceCategory || 'general',
    business_type: businessType || 'unspecified',
    page_path: window.location.pathname
  });
};

/**
 * Track WhatsApp CTA Click
 */
export const trackWhatsappClick = (linkLocation = 'general') => {
  pushDataLayer({
    event: 'whatsapp_click',
    link_location: linkLocation,
    page_path: window.location.pathname
  });
};

/**
 * Track Phone Call Click
 */
export const trackPhoneClick = (linkLocation = 'general') => {
  pushDataLayer({
    event: 'phone_click',
    link_location: linkLocation,
    page_path: window.location.pathname
  });
};

/**
 * Track Email Link Click
 */
export const trackEmailClick = (linkLocation = 'general') => {
  pushDataLayer({
    event: 'email_click',
    link_location: linkLocation,
    page_path: window.location.pathname
  });
};

/**
 * Track "Book Growth Call" CTA Click
 */
export const trackBookCallClick = (linkLocation = 'general') => {
  pushDataLayer({
    event: 'book_call_click',
    link_location: linkLocation,
    page_path: window.location.pathname
  });
};

/**
 * Track Service View
 */
export const trackServiceView = (serviceId, serviceTitle) => {
  pushDataLayer({
    event: 'service_view',
    service_id: serviceId,
    service_name: serviceTitle,
    page_path: window.location.pathname
  });
};

/**
 * Track Portfolio Project View
 */
export const trackProjectView = (projectId, projectTitle, category = '') => {
  pushDataLayer({
    event: 'project_view',
    project_id: projectId,
    project_name: projectTitle,
    project_category: category,
    page_path: window.location.pathname
  });
};

/**
 * Track Video Showcase Playback
 */
export const trackVideoPlay = (videoTitle, videoSource = '') => {
  pushDataLayer({
    event: 'video_play',
    video_title: videoTitle,
    video_source: videoSource,
    page_path: window.location.pathname
  });
};

/**
 * Track Social Profile Click
 */
export const trackSocialClick = (platform, profileUrl = '') => {
  pushDataLayer({
    event: 'social_profile_click',
    platform: platform,
    profile_url: profileUrl,
    page_path: window.location.pathname
  });
};
