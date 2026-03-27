import { Link } from "react-router-dom";

function FooterLinks({ heading, links, styles }) {
  return (
    <div>
      <h4 className={styles.linkHeading}>{heading}</h4>
      <ul className={styles.linkList}>
        {links.map((link) => (
          <li key={link}>
            <Link
              to={{hash: link?.href}}
              className={styles.linkItem}
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterLinks;