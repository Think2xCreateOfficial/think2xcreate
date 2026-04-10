import { useEffect, useState } from "react";

function PolicyTOC({ sections, styles }) {
  const [activeSection, setActiveSection] = useState(sections[0]?.id || "");

  useEffect(() => {
    const handleScroll = () => {
      const sectionsElements = sections.map(section => ({
        id: section.id,
        element: document.getElementById(section.id)
      }));

      const scrollPosition = window.scrollY + 120;

      for (let i = sectionsElements.length - 1; i >= 0; i--) {
        const { id, element } = sectionsElements[i];
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const handleClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className={styles.tocContainer}>
      <h4 className={styles.tocTitle}>Contents</h4>
      <nav className={styles.tocList}>
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => handleClick(section.id)}
            className={`${styles.tocItem} ${
              activeSection === section.id
                ? styles.tocItemActive
                : styles.tocItemInactive
            }`}
            aria-label={`Scroll to ${section.title}`}
          >
            {section.title}
          </button>
        ))}
      </nav>
    </div>
  );
}

export default PolicyTOC;