import { useState } from 'react';
import { useScrollDetection } from '../../hooks/useNavbar';
import { navbarContent } from '../../utils/constant/navbarConstant';
import { navbarStyles } from '../../utils/styles/navbarStyle';
import Logo from './ui/Logo';
import DesktopNav from './ui/DesktopNav';
import MobileNav from './ui/MobileNav';
import MobileMenuButton from './ui/MobileMenuButton';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = useScrollDetection();
  const content = navbarContent;
  const styles = navbarStyles;

  return (
    <header className={styles.header(scrolled)}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <Logo content={content.logo} styles={styles} />
          
          <div className={styles.mobileNav}>
            <DesktopNav content={content} styles={styles} />
            <MobileMenuButton 
              isOpen={menuOpen} 
              onClick={() => setMenuOpen(!menuOpen)} 
              styles={styles}
            />
          </div>
        </div>
      </div>
      
      <MobileNav 
        content={content}
        isOpen={menuOpen} 
        onClose={() => setMenuOpen(false)} 
        styles={styles}
      />
    </header>
  )
}

export default Navbar