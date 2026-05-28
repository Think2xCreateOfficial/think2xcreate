
function PolicySection({ section, styles }) {
  const renderContent = (content) => {
    // Plain text paragraph
    if (typeof content === 'string') {
      return <p className={styles.paragraph}>{content}</p>;
    }
    
    // List type content
    if (content.type === 'list') {
      return (
        <div className={styles.listContainer}>
          {content.title && <p className={styles.listTitle}>{content.title}</p>}
          <ul className="space-y-2">
            {content.items.map((item, idx) => (
              <li key={idx} className={styles.listItem}>
                <span className={styles.listBullet}>•</span>
                <span className={styles.listText}>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      );
    }
    
    // Contact type content
    if (content.type === 'contact') {
      return (
        <div className={styles.contactCard}>
          <div className={styles.contactItem}>
            <span className={styles.contactLabel}>Email:</span>
            <a href={`mailto:${content.email}`} className={styles.contactLink}>
              {content.email}
            </a>
          </div>
          <div className={styles.contactItem}>
            <span className={styles.contactLabel}>Phone:</span>
            <a href={`tel:${content.phone}`} className={styles.contactLink}>
              {content.phone}
            </a>
          </div>
          <div className={styles.contactItem}>
            <span className={styles.contactLabel}>Address:</span>
            <span className={styles.contactValue}>{content.address}</span>
          </div>
          <div className={styles.contactItem}>
            <span className={styles.contactLabel}>Website:</span>
            <a href={content.href} className={styles.contactLink} target="_blank" rel="noopener noreferrer">
              {content.website}
            </a>
          </div>
          <div className={styles.contactItem}>
            <span className={styles.contactLabel}>Response Time:</span>
            <span className={styles.contactValue}>{content.responseTime}</span>
          </div>
        </div>
      );
    }
    
    return null;
  };

  return (
    <div id={section.id} className={styles.sectionCard}>
      <div className={styles.sectionInner}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionIcon}>{section.icon}</span>
          <h2 className={styles.sectionTitle}>{section.title}</h2>
        </div>
        <div className={styles.sectionContent}>
          {section.content.map((item, idx) => (
            <div key={idx}>{renderContent(item)}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PolicySection;