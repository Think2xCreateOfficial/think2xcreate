import { Eye, ShoppingCart, Users, TrendingUp } from 'lucide-react';

/**
 * Returns the appropriate icon component for a given metric label.
 * Shared between RecentWorks (home) and OurWorkPage.
 *
 * @param {string} label - The metric label text (e.g. "Visitors", "ROAS")
 * @returns {JSX.Element} A Lucide icon with consistent yellow-600 styling
 */
export const getMetricIcon = (label) => {
  const text = label.toLowerCase();

  if (
    text.includes('visitor') ||
    text.includes('reach') ||
    text.includes('impression') ||
    text.includes('traffic')
  ) {
    return <Eye className="w-5 h-5 text-yellow-600" />;
  }

  if (text.includes('roas') || text.includes('roi')) {
    return <ShoppingCart className="w-5 h-5 text-yellow-600" />;
  }

  if (
    text.includes('lead') ||
    text.includes('customer') ||
    text.includes('user') ||
    text.includes('student') ||
    text.includes('order') ||
    text.includes('booking') ||
    text.includes('appointment') ||
    text.includes('follower') ||
    text.includes('engagement') ||
    text.includes('inquiry')
  ) {
    return <Users className="w-5 h-5 text-yellow-600" />;
  }

  return <TrendingUp className="w-5 h-5 text-yellow-600" />;
};
