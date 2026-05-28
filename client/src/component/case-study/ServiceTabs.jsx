import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const ServiceTabs = ({ brand }) => {
  const services = brand.detailedServices || [];
  const [activeTab, setActiveTab] = useState(0);

  if (services.length === 0) return null;

  return (
    <section className="py-10 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight"
          >
            How We Achieved It
          </motion.h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive breakdown of the strategies and deliverables executed for {brand.brandName}.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* LEFT: Tabs List */}
          <div className="w-full lg:w-1/3 flex lg:flex-col overflow-x-auto lg:overflow-visible gap-2 pb-4 lg:pb-0 hide-scrollbar snap-x">
            {services.map((service, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`relative flex-shrink-0 snap-start text-left px-6 py-4 rounded-lg transition-all duration-300 font-semibold text-lg md:text-xl ouline-none
                  ${activeTab === idx
                    ? 'text-gray-900 shadow-lg bg-white scale-100 border border-gray-100'
                    : 'text-gray-500 hover:text-gray-700 bg-white scale-95 border border-transparent hover:bg-gray-50'}
                `}
              >
                {activeTab === idx && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute inset-0 rounded-lg border-l-4 ouline-none"
                    style={{ borderColor: brand.colors?.primary || 'bg-yellow-400' }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{service.title}</span>
              </button>
            ))}
          </div>

          {/* RIGHT: Tab Content */}
          <div className="w-full lg:w-2/3 min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl p-8 lg:p-12 border border-gray-100 shadow-sm"
              >
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  {services[activeTab].title}
                </h3>

                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {services[activeTab].description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-widest text-gray-900 mb-4">
                      Deliverables
                    </h4>
                    <ul className="space-y-3">
                      {services[activeTab].deliverables.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-700 font-medium">
                          <CheckCircle2 size={20} className="mt-0.5 flex-shrink-0" style={{ color: brand.colors?.primary || '#F59E0B' }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <h4 className="text-sm font-bold uppercase tracking-widest text-gray-900 mb-4">
                      Results
                    </h4>
                    <p className="text-xl font-semibold text-gray-900 leading-tight">
                      {services[activeTab].results}
                    </p>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </div>

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default ServiceTabs;
