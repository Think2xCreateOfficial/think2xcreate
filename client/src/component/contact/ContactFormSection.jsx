import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { businessInfo } from '../../utils/constant/contactData';
import ContactForm from '../common/ContactForm';

/**
 * Section 1: Contact Form + Office Information Cards
 * Uses unified shared ContactForm component with radio business type options & multi-select services.
 */
export const ContactFormSection = () => {
  return (
    <section className="pt-20 pb-10 bg-[#FAFAFA] border-t border-gray-100" id="contact-form">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <span className="inline-block bg-yellow-100 text-yellow-800 text-xs font-black uppercase px-4 py-1.5 rounded-full mb-3 tracking-widest border border-yellow-300">
            CONNECT WITH US
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight leading-tight mb-3">
            Let's Scale Your Business <span className="text-yellow-500">Together.</span>
          </h1>
          <p className="text-sm sm:text-base text-gray-500 font-medium leading-relaxed">
            Fill out the form below or contact our office team directly in Tirunelveli.
          </p>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Office Information Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Office Contact Card */}
            <div className="bg-white border border-gray-200/80 rounded-3xl p-6 sm:p-8 shadow-xs">
              <h2 className="text-lg font-black text-gray-900 mb-6 uppercase tracking-tight">
                Think2xCreate Office
              </h2>

              <div className="space-y-5">
                {/* Phone Numbers */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-yellow-100 text-yellow-800 flex items-center justify-center font-black flex-shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-black uppercase text-gray-400 tracking-wider block">Phone / WhatsApp</span>
                    <a href={`tel:${businessInfo.phoneRaw}`} className="text-sm font-black text-gray-900 hover:text-yellow-600 transition-colors block">
                      {businessInfo.phone}
                    </a>
                    <a href={`tel:${businessInfo.secondaryPhoneRaw}`} className="text-xs font-bold text-gray-500 hover:text-yellow-600 transition-colors block mt-0.5">
                      {businessInfo.secondaryPhone}
                    </a>
                  </div>
                </div>

                {/* Email Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-yellow-100 text-yellow-800 flex items-center justify-center font-black flex-shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-black uppercase text-gray-400 tracking-wider block">Email Address</span>
                    <a href={`mailto:${businessInfo.email}`} className="text-sm font-black text-gray-900 hover:text-yellow-600 transition-colors block break-all">
                      {businessInfo.email}
                    </a>
                  </div>
                </div>

                {/* Office Location */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-yellow-100 text-yellow-800 flex items-center justify-center font-black flex-shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-black uppercase text-gray-400 tracking-wider block">Office Location</span>
                    <p className="text-sm font-black text-gray-900 leading-snug">
                      {businessInfo.address}
                    </p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-yellow-100 text-yellow-800 flex items-center justify-center font-black flex-shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-black uppercase text-gray-400 tracking-wider block">Working Hours</span>
                    <p className="text-xs font-bold text-gray-700">
                      {businessInfo.operatingHours}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Connect Quick Banner */}
            <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-3xl p-6 text-gray-950 shadow-md">
              <h3 className="text-base font-black uppercase tracking-tight mb-2">
                Need Fast Consultation?
              </h3>
              <p className="text-xs font-semibold leading-relaxed mb-4 text-gray-900">
                Connect directly with our strategy leads on WhatsApp for immediate campaign inquiries.
              </p>
              <a
                href={businessInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gray-950 hover:bg-black text-white font-extrabold text-xs px-5 py-3 rounded-2xl shadow-md transition-transform transform active:scale-95"
              >
                <span>WhatsApp Instant Support</span>
              </a>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactFormSection;
