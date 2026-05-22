import React, { useEffect, useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { serviceData } from '../utils/constant/serviceData';
import { ServiceHero } from '../component/services/ServiceHero';
import { ServiceProcess } from '../component/services/ServiceProcess';
import { ServiceTools } from '../component/services/ServiceTools';
import { ProofShowcase } from '../component/services/ProofShowcase';
import { VideoProof } from '../component/services/VideoProof';
import LeadformSection from "../component/home/LeadformSection";
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Calendar, ArrowRight, Star, Heart } from 'lucide-react';

export const ServicePage = () => {
  const { serviceId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const data = serviceData[serviceId];

  useEffect(() => {
    // Smooth scroll and loading transition when routing
    setIsLoading(true);
    window.scrollTo({ top: 0, behavior: 'instant' });
    const timer = setTimeout(() => setIsLoading(false), 400);
    return () => clearTimeout(timer);
  }, [serviceId]);

  if (!data && !isLoading) {
    return <Navigate to="/" replace />;
  }

  // Construct dynamic SEO metadata based on service details
  const pageTitle = data?.seo?.title || `${data?.title || 'Service'} | High-End Agency Services | Think2xCreate`;
  const pageDescription = data?.seo?.description || data?.description || 'Premium high-converting digital marketing and development services in Tamil Nadu.';
  const canonicalUrl = `https://think2xcreate.com/services/${serviceId}`;

  return (
    <div className="min-h-screen text-gray-800 selection:bg-yellow-200 selection:text-gray-900 overflow-x-hidden">
      {data && (
        <Helmet>
          <title>{pageTitle}</title>
          <meta name="description" content={pageDescription} />
          <link rel="canonical" href={canonicalUrl} />
          <meta property="og:title" content={pageTitle} />
          <meta property="og:description" content={pageDescription} />
          <meta property="og:url" content={canonicalUrl} />
          <meta property="og:type" content="article" />
          <meta name="twitter:title" content={pageTitle} />
          <meta name="twitter:description" content={pageDescription} />
        </Helmet>
      )}

      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div 
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#FDFBF4]"
          >
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 border-4 border-yellow-200 border-t-yellow-500 rounded-full animate-spin" />
              <motion.p 
                initial={{ opacity: 0.5 }}
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="text-xs uppercase tracking-widest font-bold text-gray-400"
              >
                Curating Experience...
              </motion.p>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            {/* Ambient Background Glows */}
            <div className="relative">
              <div className="absolute top-[-10%] right-[-10%] w-[60vw] h-[60vw] max-w-[600px] bg-yellow-200/20 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse" style={{ animationDuration: '8s' }} />
              <div className="absolute top-[40%] left-[-10%] w-[50vw] h-[50vw] max-w-[500px] bg-yellow-100/30 rounded-full blur-[100px] pointer-events-none -z-10" />
              
              <ServiceHero data={data} />
              <ServiceProcess data={data} />
              <ServiceTools data={data} />
              <ProofShowcase data={data} />
              <VideoProof data={data} />
              
              <LeadformSection />

              {/* Premium High-Conversion CTA Section */}
              <section className="py-6 relative overflow-hidden bg-white border-t border-gray-100">
                {/* Background mesh grid & decorative circle */}
                <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />
                <div className="absolute bottom-[-150px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-yellow-200/30 rounded-full blur-[100px] pointer-events-none" />

                <div className="container mx-auto px-6 relative z-10 max-w-5xl text-center">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 bg-yellow-100/60 border border-yellow-200/50 rounded-full px-4 py-1.5 text-xs font-bold text-yellow-800 uppercase tracking-widest mb-6"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    Let's Build Something Premium
                  </motion.div>

                  <motion.h2 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-4xl md:text-5xl font-display font-black text-gray-900 leading-tight mb-6"
                  >
                    Ready to scale your business <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-amber-500">
                      with 2x performance?
                    </span>
                  </motion.h2>

                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-gray-500 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10"
                  >
                    Stop guessing. Partner with our digital creative team to create systems, ads, and visuals that command attention and drive real profit.
                  </motion.p>

                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4"
                  >
                    <a 
                      href="#contact" 
                      onClick={(e) => {
                        e.preventDefault();
                        document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="group relative inline-flex items-center justify-center bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-10 py-5 rounded-2xl shadow-[0_10px_30px_rgba(234,179,8,0.2)] hover:shadow-[0_15px_35px_rgba(234,179,8,0.4)] transition-all duration-300 transform hover:-translate-y-0.5 w-full sm:w-auto"
                    >
                      <span>Book Free Consultation</span>
                      <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>

                    <a 
                      href="https://wa.me/917825962962?text=Hi%20Think2xCreate%2C%20I%20want%20to%20learn%20more%20about%20your%20services."
                      target="_blank" 
                      rel="noreferrer"
                      className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-gray-50 hover:text-gray-100 font-bold px-10 py-5 rounded-2xl transition-all duration-300 w-full sm:w-auto hover:shadow-lg"
                    >
                      Chat on WhatsApp
                    </a>
                  </motion.div>

                  {/* Trust indicator */}
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400 border-t border-gray-100 pt-4"
                  >
                    <div className="flex items-center gap-1.5">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                      <span className="font-bold text-gray-700 ml-1">5.0 Star Agency</span>
                    </div>
                    <div className="hidden sm:block text-gray-200">|</div>
                    <div>100% Satisfaction Guarantee</div>
                    <div className="hidden sm:block text-gray-200">|</div>
                    <div>Free 30-Minute Growth Strategy Call</div>
                  </motion.div>
                </div>
              </section>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
