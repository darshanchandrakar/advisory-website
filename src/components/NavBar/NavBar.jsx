import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import styles from './NavBar.module.css';
import GetQuoteModal from '../GetQuoteModal/GetQuoteModal';

/**
 * Navigation Bar Component
 * Displays logo and navigation links. Includes scroll effect, responsive menu,
 * and hash links for smooth scrolling to sections on the homepage.
 */
const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  // Effect to handle navbar background change on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);
  
  // Close mobile menu when a link is clicked
  const closeMobileMenu = () => setMobileMenuOpen(false);

  // Smooth scroll function for NavHashLink
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80; // Offset for the fixed navbar
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
  };

  return (
    <>
      <header className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
        <div className={styles.navContainer}>
          {/* Logo */}
          <Link to="/" className={styles.logo} onClick={closeMobileMenu}>
            Advisory<span>360</span>
          </Link>

          {/* Hamburger Menu Icon */}
          <div className={styles.menuIcon} onClick={toggleMobileMenu}>
            <div className={`${styles.bar} ${isMobileMenuOpen ? styles.animateBar1 : ''}`}></div>
            <div className={`${styles.bar} ${isMobileMenuOpen ? styles.animateBar2 : ''}`}></div>
            <div className={`${styles.bar} ${isMobileMenuOpen ? styles.animateBar3 : ''}`}></div>
          </div>

          {/* Navigation Links */}
          <nav className={`${styles.navLinks} ${isMobileMenuOpen ? styles.active : ''}`}>
            <NavLink to="/about-us" className={({ isActive }) => (isActive ? styles.activeLink : '')} onClick={closeMobileMenu}>About Us</NavLink>
            
            {/* Use NavHashLink for scrolling to sections on the homepage */}
            <NavHashLink
              to="/#services"
              smooth
              scroll={scrollWithOffset}
              className={styles.navHashLink}
              onClick={closeMobileMenu}
            >
              Services
            </NavHashLink>
            <NavHashLink
              to="/#consultancy"
              smooth
              scroll={scrollWithOffset}
              className={styles.navHashLink}
              onClick={closeMobileMenu}
            >
              Consultancy
            </NavHashLink>
            
            <NavLink to="/contact-us" className={({ isActive }) => (isActive ? styles.activeLink : '')} onClick={closeMobileMenu}>Contact Us</NavLink>
            <button className="btn-outline" onClick={() => setIsQuoteModalOpen(true)}>Get a Quote</button>
          </nav>
        </div>
      </header>
      {isQuoteModalOpen && <GetQuoteModal onClose={() => setIsQuoteModalOpen(false)} />}
    </>
  );
};

export default NavBar;