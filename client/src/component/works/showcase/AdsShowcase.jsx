import React, { useState } from 'react';
import { ExternalLink, ArrowRight, FileSpreadsheet, CheckCircle2 } from 'lucide-react';
import MetaAdsExcelModal from './modals/MetaAdsExcelModal';
import { PROJECTS_MASTER } from '../../../utils/data/portfolioData';

/**
 * Meta Ads Performance Reports Showcase Component (Reference Image 03)
 * Displays report visual representation + opens interactive Excel Spreadsheet modal on click.
 * Supports showViewAll prop (defaults to true).
 */
export const AdsShowcase = ({ className = '', showViewAll = true }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const adsProject = PROJECTS_MASTER.find((p) => p.serviceId === 'meta-ads-management') || {};
  const metrics = adsProject.summaryMetrics || {
    reach: '453,792',
    reachChange: '+28.4%',
    conversions: '712',
    conversionsChange: '+14.2%',
    amountSpent: '₹67,350.33',
    spentChange: '-2.4%',
    roas: '3.58x',
    roasChange: '+18.7%'
  };

  const tableRows = adsProject.tableRows || [
    { campaign: 'AKSHA-MAIN-LEAD', impressions: '178,400', reach: '136,150', clicks: '6,680', ctr: '3.67%', cpc: '₹1.80', conversions: '312', cpr: '₹38.50', roas: '4.20' },
    { campaign: 'Local-Tirunelveli', impressions: '135,200', reach: '105,900', clicks: '4,020', ctr: '2.97%', cpc: '₹2.10', conversions: '185', cpr: '₹45.20', roas: '3.10' },
    { campaign: 'Retargeting-Lead', impressions: '82,450', reach: '68,400', clicks: '3,850', ctr: '4.67%', cpc: '₹1.50', conversions: '142', cpr: '₹31.00', roas: '4.95' },
    { campaign: 'Reels-Awareness', impressions: '57,742', reach: '43,342', clicks: '2,045', ctr: '3.54%', cpc: '₹1.90', conversions: '73', cpr: '₹52.10', roas: '2.05' }
  ];

  return (
    <>
      <div className={`bg-white border border-gray-200/80 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xs mb-4 ${className}`}>
        {/* ── Section Header ─────────────────────────────────────────── */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 border-b border-gray-100 pb-4">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-yellow-100 text-yellow-800 font-black text-sm flex items-center justify-center flex-shrink-0 mt-1">
              03
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight uppercase">
                META ADS PERFORMANCE REPORTS
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 font-medium leading-relaxed mt-0.5">
                Data-driven ad campaigns with trackable leads, engagement and conversions as showcased below.
              </p>
            </div>
          </div>

          {showViewAll && (
            <button
              onClick={() => setIsModalOpen(true)}
              className="text-xs font-extrabold text-gray-700 hover:text-yellow-600 flex items-center gap-1.5 transition-colors self-start sm:self-center cursor-pointer"
            >
              <span>View All Reports</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* ── Dashboard Showcase Grid ────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
          {/* LEFT: Excel Report Box Card */}
          <div className="lg:col-span-4 bg-gray-50/80 border border-gray-200/80 rounded-2xl p-6 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-black shadow-md flex-shrink-0">
                  <FileSpreadsheet className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-black text-gray-900 leading-tight">
                    Excel Ad Report
                  </h4>
                  <span className="text-[11px] font-bold text-gray-400">
                    Live Client Campaign Data
                  </span>
                </div>
              </div>

              <p className="text-xs text-gray-600 font-medium leading-relaxed mb-6">
                Click below to open the complete interactive Excel spreadsheet breakdown showing impressions, reach, CPC, CPR, CTR and ROAS metrics.
              </p>
            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-extrabold text-xs px-5 py-3.5 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <FileSpreadsheet className="w-4 h-4" />
              <span>Open Interactive Excel Report</span>
            </button>
          </div>

          {/* RIGHT: Performance Data Table Representation */}
          <div
            onClick={() => setIsModalOpen(true)}
            className="lg:col-span-8 bg-white border border-gray-200/80 rounded-2xl overflow-hidden shadow-xs cursor-pointer hover:border-yellow-400 transition-colors"
          >
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-emerald-800 text-white font-extrabold uppercase text-[10px] tracking-wider">
                    <th className="py-3 px-3">CAMPAIGN NAME</th>
                    <th className="py-3 px-3">IMPRESSIONS</th>
                    <th className="py-3 px-3">REACH</th>
                    <th className="py-3 px-3">CLICKS</th>
                    <th className="py-3 px-3">CTR (%)</th>
                    <th className="py-3 px-3">CPC (₹)</th>
                    <th className="py-3 px-3">CONVERSIONS</th>
                    <th className="py-3 px-3">COST/RESULT</th>
                    <th className="py-3 px-3">ROAS</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 font-semibold text-gray-700">
                  {tableRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-yellow-50/50 transition-colors">
                      <td className="py-2.5 px-3 font-extrabold text-gray-900">{row.campaign}</td>
                      <td className="py-2.5 px-3">{row.impressions}</td>
                      <td className="py-2.5 px-3">{row.reach}</td>
                      <td className="py-2.5 px-3">{row.clicks}</td>
                      <td className="py-2.5 px-3 font-bold text-gray-900">{row.ctr}</td>
                      <td className="py-2.5 px-3">{row.cpc}</td>
                      <td className="py-2.5 px-3 font-extrabold text-emerald-700">{row.conversions}</td>
                      <td className="py-2.5 px-3">{row.cpr}</td>
                      <td className="py-2.5 px-3 font-black text-gray-900">{row.roas}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* ── Summary Metric Counter Cards ────────────────────────────── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-gray-50/80 border border-gray-200/80 rounded-2xl p-4 text-center">
            <span className="text-[10px] font-extrabold text-gray-400 uppercase tracking-wider block mb-1">
              Total Reach
            </span>
            <div className="text-xl sm:text-2xl font-black text-gray-900">
              {metrics.reach}
            </div>
            <span className="text-[10px] font-bold text-emerald-600 mt-0.5 inline-block">
              {metrics.reachChange}
            </span>
          </div>

          <div className="bg-gray-50/80 border border-gray-200/80 rounded-2xl p-4 text-center">
            <span className="text-[10px] font-extrabold text-gray-400 uppercase tracking-wider block mb-1">
              Total Conversions
            </span>
            <div className="text-xl sm:text-2xl font-black text-emerald-700">
              {metrics.conversions}
            </div>
            <span className="text-[10px] font-bold text-emerald-600 mt-0.5 inline-block">
              {metrics.conversionsChange}
            </span>
          </div>

          <div className="bg-gray-50/80 border border-gray-200/80 rounded-2xl p-4 text-center">
            <span className="text-[10px] font-extrabold text-gray-400 uppercase tracking-wider block mb-1">
              Amount Spent
            </span>
            <div className="text-xl sm:text-2xl font-black text-gray-900">
              {metrics.amountSpent}
            </div>
            <span className="text-[10px] font-bold text-emerald-600 mt-0.5 inline-block">
              {metrics.spentChange}
            </span>
          </div>

          <div className="bg-gray-50/80 border border-gray-200/80 rounded-2xl p-4 text-center">
            <span className="text-[10px] font-extrabold text-gray-400 uppercase tracking-wider block mb-1">
              ROAS Achieved
            </span>
            <div className="text-xl sm:text-2xl font-black text-yellow-600">
              {metrics.roas}
            </div>
            <span className="text-[10px] font-bold text-emerald-600 mt-0.5 inline-block">
              {metrics.roasChange}
            </span>
          </div>
        </div>
      </div>

      {/* Meta Ads Excel Modal */}
      <MetaAdsExcelModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        data={adsProject}
      />
    </>
  );
};

export default AdsShowcase;
