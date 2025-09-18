// src/components/Footer/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

/**
 * Footer component with company details, links, and social icons.
 */
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        {/* About Section */}
        <div className={styles.footerCol}>
          <h3 className={styles.footerLogo}>advisory<span>360</span></h3>
          <p>Driving growth through strategic insights and innovative solutions. Your success is our mission.</p>
        </div>

        {/* Quick Links */}
        <div className={styles.footerCol}>
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/about-us">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/consultancy">Consultancy</Link></li>
            <li><Link to="/contact-us">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className={styles.footerCol}>
          <h4>Contact Us</h4>
          <p>Qspiders - Hadapsar, Pune, MH, India (411028)</p>
          <p>Email: <a href="mailto:contact@advisory360.com">contact@advisory360.com</a></p>
          <p>Phone: <a href="tel:+911234567890">+91 9322207602</a></p>
        </div>

        {/* Social Media */}
        <div className={styles.footerCol}>
          <h4>Follow Us</h4>
          <div className={styles.socialIcons}>
            {/* Replace with actual icons */}
            <a href="" aria-label="Facebook"><i class="fa-brands fa-facebook"></i></a>
            <a href="#" aria-label="Twitter"><i class="fa-brands fa-x-twitter"></i></a>
            <a href="#" aria-label="LinkedIn"><i class="fa-brands fa-linkedin"></i></a>
            <a href="#" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; {new Date().getFullYear()} Advisory360. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;