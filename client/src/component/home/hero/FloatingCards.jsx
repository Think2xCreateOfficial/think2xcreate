function FloatingCards({ content, styles }) {
  const WebsiteIcon = content.website.icon;
  const MetaAdsIcon = content.metaAds.icon;
  const GoogleSearchIcon = content.googleSearch.icon;
  const WhatsappIcon = content.whatsapp.icon;

  return (
    <>
      <div className={`${styles.floatingCard} ${styles.floatingWebsite}`}>
        <div className={styles.cardHeader}>
          <div className={styles.cardIconBox}>
            <WebsiteIcon size={14} className="text-gray-700" />
          </div>
          {content.website.label}
        </div>
        <div className={styles.websiteVisual}>
          {content.website.text}
        </div>
      </div>

      <div className={`${styles.floatingCard} ${styles.floatingMeta}`}>
        <div className={styles.cardHeader}>
          <div className={styles.cardIconBox}>
            <MetaAdsIcon size={14} className="text-blue-600" />
          </div>
          {content.metaAds.label}
        </div>
        <div className={styles.metaVisual}>
          <div className={styles.metaIcons}>
            <div className={`${styles.metaIcon} bg-blue-600 text-[10px]`}>f</div>
            <div className={`${styles.metaIcon} bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 -ml-2 text-[10px]`}>in</div>
          </div>
          <span className={styles.metaGrowth}>{content.metaAds.leads} Leads</span>
        </div>
      </div>

      <div className={`${styles.floatingCard} ${styles.floatingGoogle}`}>
        <div className={styles.cardHeader}>
          <div className={styles.cardIconBox}>
            <GoogleSearchIcon size={14} className="text-blue-500" />
          </div>
          {content.googleSearch.label}
        </div>
        <div className={styles.googleVisual}>
          <GoogleSearchIcon className={styles.googleSearchIcon} />
          <span className={styles.googleText}>Your Business</span>
        </div>
        <div className={styles.googleResultBadge}>
          <div className="w-3 h-3 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-[8px]">✓</div>
          {content.googleSearch.badge}
        </div>
      </div>

      <div className={`${styles.floatingCard} ${styles.floatingWhatsapp}`}>
        <div className={styles.cardHeader}>
          <div className={styles.cardIconBox}>
            <WhatsappIcon size={14} className="text-green-500" />
          </div>
          {content.whatsapp.label}
        </div>
        <div className={styles.whatsappBadge}>
          <div className="w-3 h-3 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-[8px]">✓</div>
          {content.whatsapp.badge}
        </div>
      </div>
    </>
  );
}

export default FloatingCards;