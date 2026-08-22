import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { contactFaqs } from '../../utils/constant/contactData';

/**
 * Section 3: Contact FAQ Section
 * Reusable accordion rendering customer-intent questions.
 */
export const ContactFaqSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="py-6 bg-[#FAFAFA] border-t border-gray-100" id="faq">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
          <span className="inline-block bg-yellow-100 text-yellow-800 text-xs font-black uppercase px-4 py-1.5 rounded-full mb-3 tracking-widest border border-yellow-300">
            GOT QUESTIONS?
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 tracking-tight leading-tight mb-2">
            Frequently Asked <span className="text-yellow-500">Questions</span>
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 font-medium leading-relaxed">
            Everything you need to know about starting a project with Think2xCreate.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-4">
          {contactFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className={`bg-white border rounded-2xl transition-all duration-300 overflow-hidden ${
                  isOpen ? 'border-yellow-400 shadow-md' : 'border-gray-200/80 shadow-xs hover:border-gray-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className={`w-5 h-5 flex-shrink-0 transition-colors ${isOpen ? 'text-yellow-500' : 'text-gray-400'}`} />
                    <span className="text-sm sm:text-base font-extrabold text-gray-900 leading-snug">
                      {faq.question}
                    </span>
                  </div>

                  <div className={`w-7 h-7 rounded-full flex items-center justify-center transition-transform duration-300 ${
                    isOpen ? 'bg-yellow-100 text-yellow-800 rotate-180' : 'bg-gray-100 text-gray-500'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-0 border-t border-gray-100/80 text-xs sm:text-sm text-gray-600 font-medium leading-relaxed mt-2">
                    <p className="pt-2">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ContactFaqSection;
