import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, TrendingUp, Users, Target, IndianRupee } from 'lucide-react';

const getMetricIcon = (metricType) => {
  if (metricType.includes('Reach') || metricType.includes('Engagement') || metricType.includes('Followers') || metricType.includes('Users')) return <Users size={28} />;
  if (metricType.includes('ROAS') || metricType.includes('Growth') || metricType.includes('Sales') || metricType.includes('Revenue') || metricType.includes('ROI')) return <TrendingUp size={28} />;
  if (metricType.includes('Conversion') || metricType.includes('Leads')) return <Target size={28} />;
  return <BarChart3 size={28} />;
};

const GrowthMetrics = ({ brand }) => {
  const metrics = brand.metrics || [];

  if (metrics.length === 0) return null;

  return (
    <section className="py-8 relative overflow-hidden bg-yellow-300">
      {/* Background Glow */}
      {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[150px] opacity-20 pointer-events-none"
           style={{ background: brand.colors?.primary || '#F59E0B' }} /> */}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight"
          >
            Measurable Growth
          </motion.h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The data behind the success. Key performance indicators driving the campaign.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {metrics.map((metric, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-gray-50 border border-white/10 rounded-2xl p-8 flex flex-col items-center justify-center text-center relative group transition-colors"
            >
              {/* Progress Circle Visual */}
              <div className="relative mb-6">
                <svg className="w-24 h-24 transform -rotate-90">
                  <circle cx="48" cy="48" r="45" fill="none" stroke="currentColor" strokeWidth="4" className="text-gray-800" />
                  <motion.circle 
                    cx="48" cy="48" r="45" fill="none" stroke="currentColor" strokeWidth="4"
                    strokeDasharray="283"
                    initial={{ strokeDashoffset: 283 }}
                    whileInView={{ strokeDashoffset: 283 * 0.25 }} /* Simulate 75% fill */
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    style={{ color: brand.colors?.primary || '#F59E0B', strokeLinecap: 'round' }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-gray-900 group-hover:scale-110 transition-transform">
                  {getMetricIcon(metric.label)}
                </div>
              </div>

              <h4 className="text-4xl font-black mb-2 tracking-tight truncate"
                  style={{ color: brand.colors?.secondary || 'bg-yellow-400' }}>
                {metric.value}
              </h4>
              <p className="text-sm uppercase tracking-widest font-semibold text-gray-400">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default GrowthMetrics;
