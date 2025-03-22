import { useState } from 'react';
import styles from './Header.module.css';
import { Link, NavLink } from 'react-router-dom';
import HamburgerIcon from './icons/HamburgerIcon';
import logo from '/assets/sparsh-logo-dark.svg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        <img src={logo} alt="Website logo" className={styles.logoImage} />
      </Link>

      <nav className={`${styles.nav} ${isMenuOpen ? styles.showMenu : ''}`}>
        <div className={styles.nav_links_wrapper}>
          <NavLink
            to="/about-me"
            className={({ isActive }) =>
              `${styles.navLink} ${isActive ? styles.active : ''} ${styles.aboutButton}`
            }
          >
            <div className={styles.nav_icon}>
              <svg width="auto" height="auto" viewBox="0 0 277 277" fill="none">
                <circle cx="138.5" cy="138.5" r="127.5" stroke="currentColor" strokeWidth="22" />
                <circle cx="100" cy="116" r="19" fill="currentColor" />
                <circle cx="175" cy="116" r="19" fill="currentColor" />
                <path
                  d="M188.341 181C176.327 195.076 158.456 204 138.5 204C118.544 204 100.672 195.076 88.6582 181"
                  stroke="currentColor" strokeWidth="21" strokeLinecap="round"
                />
              </svg>
            </div>
            <div className={styles.nav_text}>About Me</div>
          </NavLink>

          <a 
            href="mailto:sparshbajaj97@gmail.com?subject=Let's Talk" 
            className={`${styles.lets_talk_link} ${styles.talkButton}`}
          >
            <span className={styles.button_background}></span>
            <div className={styles.nav_icon}>
              <svg width="auto" height="auto" viewBox="0 0 263 263" fill="none">
                <path
                  d="M191.459 131.524C191.459 164.654 164.599 191.514 131.469 191.514C98.3394 191.514 71.4794 164.654 71.4794 131.524C71.4794 98.3943 98.3394 71.5343 131.469 71.5343C164.599 71.5343 191.459 98.3943 191.459 131.524ZM191.459 131.524V161.324C191.459 177.994 204.969 191.514 221.649 191.514C238.329 191.514 251.839 178.004 251.839 161.324V131.524C251.839 65.0543 197.949 11.1643 131.479 11.1643C65.0094 11.1643 11.1094 65.0543 11.1094 131.524C11.1094 197.994 64.9994 251.884 131.469 251.884C153.449 251.884 174.059 245.994 191.799 235.694"
                  stroke="currentColor" strokeWidth="22" strokeMiterlimit="10" strokeLinecap="round"
                />
              </svg>
            </div>
            <div className={styles.nav_text}>Let's Talk</div>
          </a>
        </div>
      </nav>

      <div className={styles.mobileMenuButton} onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <HamburgerIcon />
      </div>
    </header>
  );
};

export default Header;