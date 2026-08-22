import React from 'react';
import { MapPin, Navigation, ExternalLink } from 'lucide-react';
import { businessInfo } from '../../utils/constant/contactData';

/**
 * Section 2: Office Location & Map Section
 * Displays responsive Google Maps embed with location details and direct directions CTA.
 */
export const OfficeMapSection = () => {
  return (
    <section className="py-6 bg-white border-t border-gray-100" id="office-location">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="inline-block bg-yellow-100 text-yellow-800 text-xs font-black uppercase px-4 py-1.5 rounded-full mb-3 tracking-widest border border-yellow-300">
              OFFICE LOCATION
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 tracking-tight leading-tight">
              Visit Our <span className="text-yellow-500">Tirunelveli Headquarters</span>
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 font-medium mt-1">
              Located in the heart of Tirunelveli, Tamil Nadu, India.
            </p>
          </div>

          <a
            href={businessInfo.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gray-900 hover:bg-black text-white font-extrabold text-xs px-5 py-3 rounded-2xl shadow-md transition-all self-start md:self-auto cursor-pointer"
          >
            <Navigation className="w-4 h-4 text-yellow-400" />
            <span>Get Directions on Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-70" />
          </a>
        </div>

        {/* Map Frame Container */}
        <div className="bg-gray-100 rounded overflow-hidden border border-gray-200/80 shadow-xs relative min-h-[360px] md:min-h-[420px]">
          <iframe
            title="Think2xCreate Office Location Map"
            src={businessInfo.mapEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 w-full h-full"
          />
        </div>

        {/* Address Footer Bar */}
        <div className="mt-4 bg-gray-50 border border-gray-200/80 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2.5 text-gray-800 font-extrabold">
            <MapPin className="w-4 h-4 text-yellow-600 flex-shrink-0" />
            <span>{businessInfo.address}</span>
          </div>
          <span className="text-gray-500 font-semibold">
            Serving clients across Tirunelveli, Chennai, Coimbatore & all Tamil Nadu.
          </span>
        </div>

      </div>
    </section>
  );
};

export default OfficeMapSection;
