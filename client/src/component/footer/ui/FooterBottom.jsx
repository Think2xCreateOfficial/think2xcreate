function FooterBottom({ content, styles }) {
  return (
    <div className={styles.bottomBar}>
      <p className={styles.copyright}>{content.copyright}</p>
      <p className={styles.credit}>{content.credit}</p>
    </div>
  );
}

export default FooterBottom;