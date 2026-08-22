import React from 'react';
import SEO from '../component/common/SEO';
import ContactFormSection from '../component/contact/ContactFormSection';
import OfficeMapSection from '../component/contact/OfficeMapSection';
import ContactFaqSection from '../component/contact/ContactFaqSection';

/**
 * Contact Us Page Component
 * Contains EXACTLY 3 sections as required:
 * 1. Contact Form + Office Information Cards
 * 2. Office Location Map Section
 * 3. Customer-Intent FAQ Accordion
 */
export const ContactPage = () => {
  return (
    <>
      <SEO />
      <ContactFormSection />
      <OfficeMapSection />
      <ContactFaqSection />
    </>
  );
};

export default ContactPage;
