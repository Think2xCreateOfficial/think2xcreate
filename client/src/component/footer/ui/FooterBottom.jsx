function FooterBottom({ content, styles }) {
  const currentYear = new Date().getFullYear();
  
  const copyrightText = content.copyright.replace("2026", currentYear);

  return (
    <div className={styles.bottomBar}>
      <p className={styles.copyright}>{copyrightText}</p>
      <p className={styles.credit}>{content.credit}</p>
    </div>
  );
}

export default FooterBottom;