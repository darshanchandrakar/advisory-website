import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Hero.module.css';

/**
 * Hero Section Component
 * A modern, animated hero section to capture user attention.
 */
const Hero = () => {
  return (
    <section className={styles.hero}>
      {/* Animated background effect */}
      <div className={styles.backgroundShapes}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={`container ${styles.heroContent}`}>
        <h1 className={styles.title}>
          Empowering Your Vision with <span>Expert Guidance</span>
        </h1>
        <p className={styles.subtitle}>
          At Advisory360, we turn challenges into opportunities. Discover tailored strategies that drive growth, innovation, and success.
        </p>
        <Link to="/#services" className="btn-outline">
          Explore Our Solutions
        </Link>
      </div>
    </section>
  );
};

export default Hero;