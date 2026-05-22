import { jsPDF } from 'jspdf';

export const generateQuotationPDF = (clientData, budgetDetails) => {
  const { name, businessName, phone } = clientData;
  const { totalBudget, businessType, allocations } = budgetDetails;

  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  // Color Palette
  const primaryColor = [17, 24, 39]; // Gray 900
  const accentColor = [245, 158, 11]; // Yellow 500
  const secondaryColor = [75, 85, 99]; // Gray 600
  const lightBgColor = [249, 250, 251]; // Gray 50
  const borderColor = [229, 231, 235]; // Gray 200

  // Helper: Draw horizontal line
  const drawLine = (y) => {
    doc.setDrawColor(borderColor[0], borderColor[1], borderColor[2]);
    doc.setLineWidth(0.3);
    doc.line(20, y, 190, y);
  };

  // 1. PAGE HEADER (Branding)
  doc.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.rect(0, 0, 210, 40, 'F');

  // Accent line at the bottom of header
  doc.setFillColor(accentColor[0], accentColor[1], accentColor[2]);
  doc.rect(0, 40, 210, 2, 'F');

  // Agency Brand Text
  doc.setTextColor(255, 255, 255);
  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(22);
  doc.text('THINK2XCREATE', 20, 20);

  doc.setFont('Helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(200, 200, 200);
  doc.text('Premium Digital Marketing & Creative Agency', 20, 26);
  doc.text('Tirunelveli, Tamil Nadu, India | admin@think2xcreate.com', 20, 31);

  // Document Title (Right-aligned in header)
  doc.setTextColor(accentColor[0], accentColor[1], accentColor[2]);
  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(14);
  doc.text('BUSINESS QUOTATION', 190, 22, { align: 'right' });

  // Date and Quote Info
  const today = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  doc.setTextColor(255, 255, 255);
  doc.setFont('Helvetica', 'normal');
  doc.setFontSize(8);
  doc.text(`Date: ${today}`, 190, 28, { align: 'right' });
  doc.text(`Quote Ref: T2XC-${Math.floor(100000 + Math.random() * 900000)}`, 190, 33, { align: 'right' });

  // Reset text color
  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);

  let currentY = 55;

  // 2. CLIENT INFORMATION
  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(11);
  doc.text('PREPARED FOR:', 20, currentY);

  doc.setFont('Helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(secondaryColor[0], secondaryColor[1], secondaryColor[2]);
  doc.text(`Client Name: ${name}`, 20, currentY + 6);
  doc.text(`Business Name: ${businessName}`, 20, currentY + 11);
  doc.text(`Phone Number: ${phone}`, 20, currentY + 16);
  doc.text(`Business Sector: ${businessType || 'General'}`, 20, currentY + 21);

  // Agency Contact Details Box (On the right of Prepared For)
  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.setFont('Helvetica', 'bold');
  doc.text('PREPARED BY:', 120, currentY);
  doc.setFont('Helvetica', 'normal');
  doc.setTextColor(secondaryColor[0], secondaryColor[1], secondaryColor[2]);
  doc.text('Think2xCreate Agency Team', 120, currentY + 6);
  doc.text('WhatsApp Support: +91 78259 62962', 120, currentY + 11);
  doc.text('Website: www.think2xcreate.com', 120, currentY + 16);

  currentY += 30;
  drawLine(currentY);
  currentY += 10;

  // 3. SERVICE ALLOCATIONS TABLE
  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(12);
  doc.text('BUDGET ALLOCATIONS & DELIVERABLES', 20, currentY);
  currentY += 8;

  // Table Header Row
  doc.setFillColor(243, 244, 246);
  doc.rect(20, currentY, 170, 8, 'F');
  
  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.text('Service Name', 25, currentY + 5.5);
  doc.text('Deliverables Summary', 75, currentY + 5.5);
  doc.text('Monthly Budget', 185, currentY + 5.5, { align: 'right' });
  
  currentY += 8;

  // Standard Deliverables Mapping per Service Type
  const deliverablesMap = {
    'website-development': 'React/Next.js dynamic site, custom UI/UX, SEO polish, mobile layout',
    'meta-ads': 'Meta Ads campaign setup, creative copywriting, pixel integration, weekly optimization',
    'social-media': 'Social media content pillars, 3 reels scripts, grid layout, comments management',
    'video-editing': 'Cinematic grading, transitions/effects, motion captions, sync audio'
  };

  const serviceLabels = {
    'website-development': 'Website Development',
    'meta-ads': 'Meta Ads Management',
    'social-media': 'Social Media Management',
    'video-editing': 'Photo & Video Editing'
  };

  // Loop Allocations
  allocations.forEach((item) => {
    doc.setFont('Helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);

    // Service Name column
    const label = serviceLabels[item.service] || item.service;
    doc.text(label, 25, currentY + 6);

    // Deliverables summary column
    const deliverables = deliverablesMap[item.service] || 'Professional agency service delivery';
    const splitText = doc.splitTextToSize(deliverables, 100);
    doc.text(splitText, 75, currentY + 6);

    // Budget column
    const amount = `₹${item.amount.toLocaleString('en-IN')}`;
    doc.text(amount, 185, currentY + 6, { align: 'right' });

    // Move Y based on deliverables split text height
    const lineOffset = splitText.length * 4.5;
    currentY += Math.max(8, lineOffset + 2);
    drawLine(currentY);
  });

  currentY += 6;

  // 4. METRICS AND SUMMARY SECTION
  doc.setFillColor(lightBgColor[0], lightBgColor[1], lightBgColor[2]);
  doc.rect(20, currentY, 170, 32, 'F');
  doc.setDrawColor(borderColor[0], borderColor[1], borderColor[2]);
  doc.rect(20, currentY, 170, 32, 'S');

  // Total Budget Text
  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(10);
  doc.text('TOTAL MONTHLY INVESTMENT:', 25, currentY + 8);
  
  doc.setFontSize(14);
  doc.setTextColor(accentColor[0], accentColor[1], accentColor[2]);
  doc.text(`₹${totalBudget.toLocaleString('en-IN')}`, 25, currentY + 16);

  // Estimates columns (Right side of summary box)
  let estReach = 0;
  let estLeads = 0;

  // Simple conversion estimation algorithm based on selected budget
  if (totalBudget <= 15000) {
    estReach = totalBudget * 3.5;
    estLeads = Math.floor(totalBudget * 0.005);
  } else if (totalBudget <= 40000) {
    estReach = totalBudget * 4.2;
    estLeads = Math.floor(totalBudget * 0.007);
  } else {
    estReach = totalBudget * 5.0;
    estLeads = Math.floor(totalBudget * 0.009);
  }

  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.text('ESTIMATED MONTHLY PERFORMANCE METRICS:', 95, currentY + 8);

  doc.setFont('Helvetica', 'normal');
  doc.setTextColor(secondaryColor[0], secondaryColor[1], secondaryColor[2]);
  doc.text(`Estimated Ad / Brand Reach:`, 95, currentY + 14);
  doc.setFont('Helvetica', 'bold');
  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.text(`${Math.floor(estReach).toLocaleString('en-IN')}+ Users`, 152, currentY + 14);

  doc.setFont('Helvetica', 'normal');
  doc.setTextColor(secondaryColor[0], secondaryColor[1], secondaryColor[2]);
  doc.text(`Estimated High-Intent Inquiries:`, 95, currentY + 20);
  doc.setFont('Helvetica', 'bold');
  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.text(`${Math.floor(estLeads)} - ${Math.floor(estLeads * 1.5)} Leads`, 152, currentY + 20);

  doc.setFont('Helvetica', 'normal');
  doc.setTextColor(secondaryColor[0], secondaryColor[1], secondaryColor[2]);
  doc.text(`Estimated Conversion ROI Rate:`, 95, currentY + 26);
  doc.setFont('Helvetica', 'bold');
  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.text('3.5x to 5.2x ROI', 152, currentY + 26);

  currentY += 42;

  // 5. TERMS & CONDITIONS AND NEXT STEPS
  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(10);
  doc.text('PROPOSED NEXT STEPS & TIMELINE:', 20, currentY);

  doc.setFont('Helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(secondaryColor[0], secondaryColor[1], secondaryColor[2]);
  const steps = [
    '1. Finalize and sign the service level agreement contract.',
    '2. Kickoff call & client onboarding questionnaire submission.',
    '3. Brand guidelines setup, asset transfer, and competitor research phase (5-7 days).',
    '4. Campaign setup / draft designs sent for feedback & approvals (10-12 days).',
    '5. Live deployment, ads trigger, and organic content publication (Week 3).'
  ];
  steps.forEach((step, idx) => {
    doc.text(step, 20, currentY + 6 + (idx * 4.5));
  });

  currentY += 32;

  // 6. FOOTER/SIGN-OFF BRANDING
  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(9);
  doc.text('Thank you for considering Think2xCreate!', 20, currentY);

  doc.setFont('Helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(secondaryColor[0], secondaryColor[1], secondaryColor[2]);
  doc.text('This quotation is an estimated proposal based on current agency client bandwidth and advertising market rates. Valid for 7 days.', 20, currentY + 5);

  // Professional digital signature placeholder on right
  doc.setDrawColor(borderColor[0], borderColor[1], borderColor[2]);
  doc.line(140, currentY + 6, 185, currentY + 6);
  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(8);
  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.text('Authorized Signatory', 140, currentY + 10);
  doc.setFont('Helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.text('Think2xCreate Agency Team', 140, currentY + 14);

  // SAVE FILE
  doc.save(`Think2xCreate-Quotation-${businessName.replace(/\s+/g, '_')}.pdf`);
};
