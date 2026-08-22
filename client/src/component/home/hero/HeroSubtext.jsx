function HeroSubtext({ content, styles }) {
  return (
    <div className={styles.subtextContainer}>
      <div className={styles.heroLeftImageContainer}>
        <div className={styles.wastingMoneyText}>
          Without wasting money on random{' '}
          <span className="relative inline-block">
            marketing.
            <svg 
              className="absolute left-0 w-[105%] -bottom-1 sm:-bottom-2 text-yellow-400" 
              viewBox="0 0 100 20" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path 
                d="M5,15 Q50,5 95,12 Q60,18 10,18" 
                stroke="currentColor" 
                strokeWidth="3.5" 
                strokeLinecap="round"
              />
            </svg>
          </span>
        </div>
      </div>
      <p className={styles.descriptionText}>
        {content.subtext.description}
      </p>
    </div>
  );
}

export default HeroSubtext;