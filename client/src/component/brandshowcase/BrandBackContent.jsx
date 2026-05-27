// src/components/brand/showcase/BrandBackContent.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, BarChart3, ExternalLink, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const BrandBackContent = ({ brand, onClose }) => {
  const getMetricIcon = (metricType) => {
    if (metricType.includes('Reach') || metricType.includes('Engagement') || metricType.includes('Followers') || metricType.includes('Users')) return <Users size={16} />;
    if (metricType.includes('ROAS') || metricType.includes('Growth') || metricType.includes('Sales') || metricType.includes('Revenue') || metricType.includes('ROI')) return <TrendingUp size={16} />;
    return <BarChart3 size={16} />;
  };

  return (
    <div 
      className="relative w-full h-full bg-cover bg-center no-flip" 
      style={{ backgroundImage: `url(${brand.backgroundImage})`, transform: 'translateZ(1px)' }}
      onClick={(e) => e.stopPropagation()}
      onTouchStart={(e) => e.stopPropagation()}
    >
      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/80 pointer-events-none" />
      
      {/* Close Button for Mobile */}
      {onClose && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          onTouchStart={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-colors border border-white/20 md:hidden pointer-events-auto"
        >
          <X size={16} />
        </button>
      )}

      <div className="relative h-full flex flex-col p-6 md:p-8 text-white z-10">
        {/* Brand Info */}
        <div className="mb-4">
          <h4 className="text-xl font-bold mb-1">{brand.brandName}</h4>
          <p className="text-xs text-white/70">{brand.category}</p>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          {brand.metrics.map((metric, idx) => (
            <div
              key={idx}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-2 border border-white/20"
            >
              <div className="flex items-center gap-1.5 mb-1">
                {getMetricIcon(metric.label)}
                <span className="text-xs font-medium text-amber-300">{metric.label}</span>
              </div>
              <p className="text-sm font-bold">{metric.value}</p>
            </div>
          ))}
        </div>

        {/* Services */}
        <div className="mb-4">
          <h5 className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
            Services Provided
          </h5>
          <div className="flex flex-wrap gap-2">
            {brand.services.map((service, idx) => (
              <span
                key={idx}
                className="text-xs px-2 py-1 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
              >
                {service}
              </span>
            ))}
          </div>
        </div>

        {/* CTA Button - Standard Link for robust routing */}
        <div className="mt-auto relative z-50 pointer-events-auto">
          <Link
            to={brand.caseStudyLink}
            onClick={(e) => {
               // Let React Router handle the routing, just stop the event from flipping the card
               e.stopPropagation();
            }}
            className="inline-flex w-full items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-lg text-sm font-bold text-white hover:shadow-lg hover:scale-[1.02] active:scale-95 transition-all duration-300 group cursor-pointer no-flip pointer-events-auto"
            style={{ 
              touchAction: 'manipulation'
            }}
          >
            <span>View Case Study</span>
            <ExternalLink size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* Decorative Element */}
        <div className="absolute bottom-4 right-4 opacity-20 pointer-events-none">
          <div className="w-12 h-12 border-2 border-white rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default BrandBackContent;