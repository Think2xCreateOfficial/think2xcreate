import React from 'react';
import { leadformContent } from '../../../utils/constant/homeConstant';
import { leadformStyles } from '../../../utils/styles/homeStyle';
import LeadformHeader from './LeadformHeader';
import ContactForm from '../../common/ContactForm';

function Leadform() {
  const content = leadformContent;
  const styles  = leadformStyles;

  return (
    <section id="contact" className={styles.section}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <LeadformHeader content={content.header} styles={styles} />
        <ContactForm className="shadow-lg border-gray-200" />
      </div>
    </section>
  );
}

export default Leadform;