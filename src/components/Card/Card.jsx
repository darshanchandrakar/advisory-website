import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './Card.module.css';

/**
 * Reusable Card component with scroll-triggered fade-in animation.
 * @param {string} id - The item's ID for linking.
 * @param {string} title - The card title.
 * @param {string} description - A short description.
 * @param {string} imageUrl - URL for the card image.
 * @param {string} type - 'service' or 'consultancy' for the link path.
 */
const Card = ({ id, title, description, imageUrl, type }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  // Observer to detect when the card is in the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // When the card is 50px into the viewport, trigger the animation
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.unobserve(cardRef.current); // Stop observing after it's visible
        }
      },
      { rootMargin: "0px 0px -50px 0px" } // trigger point
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  // Correctly determine the link path to fix routing bug
  const linkPath = `/${type === 'consultancy' ? 'consultancy' : 'services'}/${id}`;

  return (
    // Add the ref and conditional class to the Link element for the animation
    <div 
      className={`${styles.cardWrapper} ${isVisible ? styles.isVisible : ''}`} 
      ref={cardRef}
    >
      <Link to={linkPath} className={styles.cardLink}>
        <div className={styles.card}>
          <div className={styles.imageContainer}>
            <img src={imageUrl} alt={title} className={styles.cardImage} />
          </div>
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>{title}</h3>
            <p className={styles.cardDescription}>
              {description.substring(0, 100)}...
            </p>
            <span className={styles.readMore}>
              Learn More <span>&rarr;</span>
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;