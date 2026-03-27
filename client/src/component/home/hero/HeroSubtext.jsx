function HeroSubtext({ content, styles }) {
  return (
    <p className={styles.subtext}>
      {content.subtext.text}
      {content.subtext.locations.map((location, index) => (
        <span key={location}>
          <strong className={styles.strongText}>{location}</strong>
          {index < content.subtext.locations.length - 1 && ", "}
          {index === content.subtext.locations.length - 2 && " & "}
        </span>
      ))}
      {content.subtext.suffix}
    </p>
  );
}

export default HeroSubtext;