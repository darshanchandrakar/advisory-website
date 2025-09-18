import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import styles from './DetailPage.module.css';

//
// Displays the full details of a specific consultancy service.
//
const ConsultancyDetail = ({ servicesData }) => {
  const { id } = useParams();
  
  // Find the item from the servicesData prop
  const consultancy = servicesData.find(item => item.id.toString() === id);

  // If no item is found, redirect or show a 'not found' message
  if (!consultancy) {
    return <Navigate to="/404" />; // Or render a "Not Found" component
  }

  return (
    <div className={styles.detailPage}>
      <div className="container">
        <Link to="/consultancy" className={styles.backLink}>&larr; Back to Consultancy</Link>
        <div className={styles.contentWrapper}>
          <div className={styles.imageColumn}>
            <img src={consultancy.imageUrl} alt={consultancy.serviceName} className={styles.detailImage} />
          </div>
          <div className={styles.textColumn}>
            <h1 className={styles.title}>{consultancy.serviceName}</h1>
            <p className={styles.description}>{consultancy.description}</p>
            <div className={styles.infoGrid}>
              <div className={styles.infoItem}><strong>Location:</strong> {consultancy.location}</div>
              <div className={styles.infoItem}><strong>Rating:</strong> {consultancy.rating} ({consultancy.reviewsCount} reviews)</div>
              <div className={styles.infoItem}><strong>Pricing:</strong> {consultancy.averagePricing}</div>
              <div className={styles.infoItem}><strong>Founded:</strong> {consultancy.foundedYear}</div>
            </div>
            <h3 className={styles.featuredTitle}>Key Offerings</h3>
            <ul className={styles.featuredList}>
              {consultancy.featuredServices.map((feat, index) => (
                <li key={index}>{feat}</li>
              ))}
            </ul>
             <Link to="/get-a-quote" className="btn">Inquire Now</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultancyDetail;