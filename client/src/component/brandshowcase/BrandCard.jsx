import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const BrandCard = ({ brand, index }) => {
  // Alternate layout for desktop: even index has image on left, odd has image on right
  const isEven = index % 2 === 0;

  return (
    <div className={`relative flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center group`}>
      
      {/* Numbered Badge (Process Motif) */}
      <div className={`absolute top-0 ${isEven ? 'left-0 -ml-4 md:-ml-8' : 'right-0 -mr-4 md:-mr-8'} -mt-4 md:-mt-6 z-30 w-12 h-12 md:w-16 md:h-16 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center font-black text-xl md:text-2xl shadow-lg border-4 border-white`}>
        {String(index + 1).padStart(2, '0')}
      </div>

      {/* Image Container */}
      <div className="w-full lg:w-1/2 relative overflow-hidden rounded-2xl bg-gray-100 aspect-[4/3] md:aspect-[16/10] lg:aspect-[4/3]">
        <Link to="/our-work" className="absolute inset-0 z-20">
          <span className="sr-only">View {brand.brandName} Portfolio</span>
        </Link>
        <img 
          src={brand.backgroundImage} 
          alt={`${brand.brandName} project showcase`} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        {/* Subtle Brand Logo overlay */}
        <div className="absolute top-4 right-4 md:top-6 md:right-6 w-12 h-12 md:w-16 md:h-16 bg-white rounded-xl p-2 md:p-3 shadow-lg z-10 flex items-center justify-center pointer-events-none">
          <img src={brand.logo} alt="" className="w-full h-full object-contain" />
        </div>
      </div>

      {/* Content Container */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center">
        <div className="mb-4 flex items-center gap-3">
          <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full">
            {brand.category}
          </span>
        </div>
        
        <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
          {brand.brandName}
        </h3>
        
        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
          {brand.tagline || brand.description}
        </p>

        {/* Results/Metrics Highlights */}
        {brand.metrics && brand.metrics.length > 0 && (
          <div className="grid grid-cols-2 gap-4 mb-8">
            {brand.metrics.slice(0, 2).map((metric, idx) => (
              <div key={idx} className="border-l-2 border-yellow-400 pl-4">
                <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
                <p className="text-sm text-gray-500 font-medium">{metric.label}</p>
              </div>
            ))}
          </div>
        )}

        {/* Services */}
        {brand.services && (
          <div className="flex flex-wrap gap-2 mb-8">
            {brand.services.map((service, idx) => (
              <span key={idx} className="text-sm text-gray-600 bg-white border border-gray-200 px-3 py-1 rounded-md">
                {service}
              </span>
            ))}
          </div>
        )}

        <div>
          <Link 
            to="/our-work"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-yellow-400 hover:text-black transition-all duration-300 relative z-30"
          >
            Explore Project
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>

    </div>
  );
};

export default BrandCard;