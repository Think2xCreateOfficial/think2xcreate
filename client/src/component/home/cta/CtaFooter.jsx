function CtaFooter({ text, styles }) {
  if (!text) return null;
  return <p className={styles.footerText}>{text}</p>;
}

export default CtaFooter;