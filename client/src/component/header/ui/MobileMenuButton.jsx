import { Menu, X } from "lucide-react";

function MobileMenuButton({ isOpen, onClick, styles }) {
  return (
    <button
      onClick={onClick}
      className={styles.mobileMenuButton}
      aria-label="Toggle menu"
    >
      {isOpen ? <X size={22} /> : <Menu size={22} />}
    </button>
  )
}

export default MobileMenuButton