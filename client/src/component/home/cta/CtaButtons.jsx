function CtaButtons({ buttons, styles }) {
  const PrimaryIcon = buttons.primary.icon;
  const SecondaryIcon = buttons.secondary.icon;
  
  const isWhatsApp = buttons.secondary.href.includes("wa.me");
  
  return (
    <div className={styles.buttonContainer}>
      <a
        href={buttons.primary.href}
        className={styles.button(buttons.primary.color)}
      >
        <PrimaryIcon size={18} />
        {buttons.primary.text}
      </a>
      
      <a
        href={buttons.secondary.href}
        target={isWhatsApp ? "_blank" : undefined}
        rel={isWhatsApp ? "noopener noreferrer" : undefined}
        className={styles.button(buttons.secondary.color)}
      >
        <SecondaryIcon size={18} />
        {buttons.secondary.text}
      </a>
    </div>
  );
}

export default CtaButtons;