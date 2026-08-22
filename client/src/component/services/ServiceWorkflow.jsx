import React from 'react';
import {
  Search, FileText, Layout, Code, Rocket, Headphones,
  Target, PenTool, BarChart2, Share2, Video, Film
} from 'lucide-react';

/**
 * Service Page Workflow Component (Reference C)
 * Renders the 6-Step process timeline (Discover -> Plan -> Design -> Develop -> Test & Launch -> Support & Grow).
 */
export const ServiceWorkflow = ({ data }) => {
  // Default 6-step workflow matching Reference C
  const defaultSteps = [
    {
      step: '01',
      title: 'Discover',
      description: 'We understand your business, audience and goals.',
      icon: Search,
    },
    {
      step: '02',
      title: 'Plan',
      description: 'We create a tailored strategy & roadmap for your project.',
      icon: FileText,
    },
    {
      step: '03',
      title: 'Design',
      description: 'We design engaging UI/UX that represents your brand.',
      icon: Layout,
    },
    {
      step: '04',
      title: 'Develop',
      description: 'We build a fast, secure & SEO-friendly solution.',
      icon: Code,
    },
    {
      step: '05',
      title: 'Test & Launch',
      description: 'We test everything thoroughly and launch your project.',
      icon: Rocket,
    },
    {
      step: '06',
      title: 'Support & Grow',
      description: 'We provide ongoing support and help you scale.',
      icon: Headphones,
    },
  ];

  const steps = data?.workflowSteps || defaultSteps;

  return (
    <section className="py-6 bg-[#FAF9F6] border-t border-gray-100 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Sub-header */}
        <div className="text-center mb-6">
          <span className="inline-block bg-yellow-100 text-yellow-800 text-xs font-black uppercase px-4 py-1 rounded-full tracking-widest border border-yellow-300 mb-3">
            OUR WORKFLOW
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
            Simple Process. Powerful Results.
          </h2>
        </div>

        {/* 6-Step Process Timeline Container */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 relative">
          {steps.map((item, idx) => {
            const IconComp = item.icon || Search;

            return (
              <div
                key={idx}
                className="flex flex-col items-center text-center group bg-white p-5 rounded-2xl border border-gray-100 shadow-xs hover:shadow-md transition-all relative"
              >
                {/* Step Circle with Badge */}
                <div className="relative mb-4">
                  <div className="w-14 h-14 rounded-full bg-yellow-50 border border-yellow-200/80 flex items-center justify-center text-yellow-800 group-hover:bg-yellow-400 group-hover:text-black transition-all shadow-xs">
                    <IconComp className="w-6 h-6 stroke-[2.2]" />
                  </div>

                  {/* Step Number Tag */}
                  <span className="absolute -top-2 -right-2 bg-black text-white text-[9px] font-black px-2 py-0.5 rounded-full border border-white">
                    {item.step || `0${idx + 1}`}
                  </span>
                </div>

                <h3 className="text-base font-extrabold text-gray-900 mb-1 tracking-tight">
                  {item.title}
                </h3>

                <p className="text-gray-500 text-xs font-medium leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ServiceWorkflow;
