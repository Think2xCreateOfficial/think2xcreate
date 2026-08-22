import { Link } from 'react-router-dom';

function FooterBottom({ content, styles }) {
  const currentYear = new Date().getFullYear();
  
  const copyrightText = content.copyright.replace("2026", currentYear);

  return (
    <div className={styles.bottomBar}>
      <p className={styles.copyright}>{copyrightText}</p>
      
      {content.bottomLinks && (
        <div className="flex gap-4">
          {content.bottomLinks.map(link => (
            <Link key={link.name} to={link.href} className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
              {link.name}
            </Link>
          ))}
        </div>
      )}
      
      <p className={styles.credit}>{content.credit}</p>
    </div>
  );
}

export default FooterBottom;