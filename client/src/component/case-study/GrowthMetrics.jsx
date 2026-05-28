// src/component/case-study/GrowthMetrics.jsx
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { BarChart3, TrendingUp, Users, Target, IndianRupee, DollarSign, Activity } from 'lucide-react';

const getMetricIcon = (metricType) => {
  if (!metricType) return <BarChart3 size={28} />;
  
  const type = metricType.toLowerCase();
  if (type.includes('reach') || type.includes('engagement') || type.includes('followers') || type.includes('users')) 
    return <Users size={28} />;
  if (type.includes('roas') || type.includes('growth') || type.includes('sales') || type.includes('revenue') || type.includes('roi')) 
    return <TrendingUp size={28} />;
  if (type.includes('conversion') || type.includes('leads') || type.includes('ctr')) 
    return <Target size={28} />;
  if (type.includes('spending') || type.includes('spend')) 
    return <DollarSign size={28} />;
  return <BarChart3 size={28} />;
};

const formatMetricValue = (value) => {
  if (!value) return '0';
  if (typeof value === 'string') return value;
  if (typeof value === 'number') {
    if (value >= 1000000) return `${(value / 1000000).toFixed(1)}M+`;
    if (value >= 1000) return `${(value / 1000).toFixed(1)}K+`;
    return `${value}+`;
  }
  return String(value);
};

const GrowthMetrics = ({ brand }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [metrics, setMetrics] = useState([]);

  useEffect(() => {
    // Safely extract metrics with fallback
    const safeMetrics = brand?.metrics || [];
    setMetrics(safeMetrics);
    
    // Trigger visibility after mount for animation
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, [brand]);

  // Don't render if no metrics
  if (!metrics.length) {
    return (
      <section className="py-16 relative overflow-hidden bg-gradient-to-br from-yellow-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-500">No metrics available</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-20 relative overflow-hidden bg-gradient-to-br from-yellow-50 via-amber-50 to-yellow-50">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-300 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-300 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
              Measurable Growth
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The data behind the success. Key performance indicators driving the campaign.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {metrics.map((metric, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
              style={{
                animation: `fadeInUp 0.6s ease-out ${idx * 0.1}s both`
              }}
            >
              <div className="p-6 text-center">
                {/* Icon Circle */}
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ 
                    backgroundColor: `${brand.colors?.primary || '#F59E0B'}15`,
                    color: brand.colors?.primary || '#F59E0B'
                  }}
                >
                  {getMetricIcon(metric.label)}
                </div>

                {/* Value */}
                <h3 
                  className="text-3xl md:text-4xl font-black mb-2 tracking-tight"
                  style={{ color: brand.colors?.primary || '#1F2937' }}
                >
                  {formatMetricValue(metric.value)}
                </h3>

                {/* Label */}
                <p className="text-sm uppercase tracking-wider font-semibold text-gray-500">
                  {metric.label}
                </p>

                {/* Progress Bar Animation */}
                <div className="mt-4 h-1 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isVisible ? { width: '100%' } : {}}
                    transition={{ duration: 1, delay: idx * 0.1 }}
                    className="h-full rounded-full"
                    style={{ backgroundColor: brand.colors?.primary || '#F59E0B' }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add keyframes for animation */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default GrowthMetrics;