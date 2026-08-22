import React from 'react';
import Modal from '../../../ui/Modal';
import { FileSpreadsheet, Download } from 'lucide-react';

/**
 * Meta Ads Excel Spreadsheet Modal Component
 * Refactored to consume the unified Modal primitive.
 */
export const MetaAdsExcelModal = ({ isOpen, onClose, data }) => {
  if (!isOpen) return null;

  const metrics = data?.summaryMetrics || {
    reach: '453,792',
    reachChange: '+28.4%',
    conversions: '712',
    conversionsChange: '+14.2%',
    amountSpent: '₹67,350.33',
    spentChange: '-2.4%',
    roas: '3.58x',
    roasChange: '+18.7%'
  };

  const tableRows = data?.tableRows || [
    { campaign: 'AKSHA-MAIN-LEAD', impressions: '178,400', reach: '136,150', clicks: '6,680', ctr: '3.67%', cpc: '₹1.80', conversions: '312', cpr: '₹38.50', roas: '4.20' },
    { campaign: 'Local-Tirunelveli', impressions: '135,200', reach: '105,900', clicks: '4,020', ctr: '2.97%', cpc: '₹2.10', conversions: '185', cpr: '₹45.20', roas: '3.10' },
    { campaign: 'Retargeting-Lead', impressions: '82,450', reach: '68,400', clicks: '3,850', ctr: '4.67%', cpc: '₹1.50', conversions: '142', cpr: '₹31.00', roas: '4.95' },
    { campaign: 'Reels-Awareness', impressions: '57,742', reach: '43,342', clicks: '2,045', ctr: '3.54%', cpc: '₹1.90', conversions: '73', cpr: '₹52.10', roas: '2.05' }
  ];

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Meta Ads Performance Report"
      subtitle="Interactive Performance Report"
      icon={FileSpreadsheet}
      maxWidth="max-w-5xl"
    >
      <div className="p-4 sm:p-8 space-y-6">
        {/* Top Metric Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          <div className="bg-emerald-50/60 border border-emerald-200/80 p-3 sm:p-4 rounded-2xl">
            <span className="text-[10px] font-extrabold text-emerald-700 uppercase tracking-wider block mb-1">
              Total Impressions & Reach
            </span>
            <div className="text-xl sm:text-2xl font-black text-gray-900">{metrics.reach}</div>
            <span className="text-xs font-bold text-emerald-600 mt-0.5 inline-block">{metrics.reachChange}</span>
          </div>

          <div className="bg-emerald-50/60 border border-emerald-200/80 p-3 sm:p-4 rounded-2xl">
            <span className="text-[10px] font-extrabold text-emerald-700 uppercase tracking-wider block mb-1">
              Total Lead Conversions
            </span>
            <div className="text-xl sm:text-2xl font-black text-emerald-700">{metrics.conversions}</div>
            <span className="text-xs font-bold text-emerald-600 mt-0.5 inline-block">{metrics.conversionsChange}</span>
          </div>

          <div className="bg-emerald-50/60 border border-emerald-200/80 p-3 sm:p-4 rounded-2xl">
            <span className="text-[10px] font-extrabold text-emerald-700 uppercase tracking-wider block mb-1">
              Total Ad Spend
            </span>
            <div className="text-xl sm:text-2xl font-black text-gray-900">{metrics.amountSpent}</div>
            <span className="text-xs font-bold text-emerald-600 mt-0.5 inline-block">{metrics.spentChange}</span>
          </div>

          <div className="bg-yellow-50/60 border border-yellow-200/80 p-3 sm:p-4 rounded-2xl">
            <span className="text-[10px] font-extrabold text-yellow-800 uppercase tracking-wider block mb-1">
              Overall ROAS
            </span>
            <div className="text-xl sm:text-2xl font-black text-yellow-600">{metrics.roas}</div>
            <span className="text-xs font-bold text-yellow-600 mt-0.5 inline-block">{metrics.roasChange}</span>
          </div>
        </div>

        {/* Excel Sheet Table */}
        <div className="border border-gray-200 rounded-2xl overflow-hidden shadow-xs">
          <div className="bg-gray-100 px-4 py-2.5 border-b border-gray-200 flex items-center justify-between text-xs font-extrabold text-gray-700">
            <span>Sheet 1: Campaign_Breakdown</span>
            <span className="text-gray-400 font-semibold">4 Active Campaigns</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-emerald-700 text-white font-black text-[11px] uppercase tracking-wider">
                  <th className="py-3 px-4 border-r border-emerald-600">Campaign Name</th>
                  <th className="py-3 px-4 border-r border-emerald-600">Impressions</th>
                  <th className="py-3 px-4 border-r border-emerald-600">Reach</th>
                  <th className="py-3 px-4 border-r border-emerald-600">Clicks</th>
                  <th className="py-3 px-4 border-r border-emerald-600">CTR (%)</th>
                  <th className="py-3 px-4 border-r border-emerald-600">CPC (₹)</th>
                  <th className="py-3 px-4 border-r border-emerald-600">Conversions</th>
                  <th className="py-3 px-4 border-r border-emerald-600">Cost / Result</th>
                  <th className="py-3 px-4">ROAS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 font-semibold text-gray-800 bg-white">
                {tableRows.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/70'}>
                    <td className="py-3 px-4 font-black text-gray-900 border-r border-gray-200 whitespace-nowrap">{row.campaign}</td>
                    <td className="py-3 px-4 border-r border-gray-200">{row.impressions}</td>
                    <td className="py-3 px-4 border-r border-gray-200">{row.reach}</td>
                    <td className="py-3 px-4 border-r border-gray-200">{row.clicks}</td>
                    <td className="py-3 px-4 font-bold text-gray-900 border-r border-gray-200">{row.ctr}</td>
                    <td className="py-3 px-4 border-r border-gray-200">{row.cpc}</td>
                    <td className="py-3 px-4 font-black text-emerald-700 border-r border-gray-200">{row.conversions}</td>
                    <td className="py-3 px-4 border-r border-gray-200">{row.cpr}</td>
                    <td className="py-3 px-4 font-black text-yellow-600">{row.roas}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 border-t border-gray-100 p-4 -mx-4 sm:-mx-8 -mb-4 sm:-mb-8 flex flex-wrap items-center justify-between gap-3">
          <span className="text-xs text-gray-500 font-semibold">
            Verified Meta Ads Performance Data • Think2xCreate Analytics
          </span>
        </div>
      </div>
    </Modal>
  );
};

export default MetaAdsExcelModal;
