// src/pages/ServiceDetail.jsx
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchItemById } from '../api/mockApi';
import styles from './DetailPage.module.css';

/**
 * Displays the full details of a specific service.
 */
const ServiceDetail = () => {
  const { id } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadService = async () => {
      setLoading(true);
      const item = await fetchItemById(id);
      setService(item);
      setLoading(false);
    };
    loadService();
  }, [id]);

  if (loading) {
    return <div className="container"><p>Loading details...</p></div>;
  }

  if (!service) {
    return <div className="container"><p>Service not found.</p></div>;
  }

  return (
    <div className={styles.detailPage}>
      <div className="container">
        <Link to="/services" className={styles.backLink}>&larr; Back to Services</Link>
        <div className={styles.contentWrapper}>
          <div className={styles.imageColumn}>
            <img src={service.imageUrl} alt={service.serviceName} className={styles.detailImage} />
          </div>
          <div className={styles.textColumn}>
            <h1 className={styles.title}>{service.serviceName}</h1>
            <p className={styles.description}>{service.description}</p>
            <div className={styles.infoGrid}>
              <div className={styles.infoItem}><strong>Location:</strong> {service.location}</div>
              <div className={styles.infoItem}><strong>Rating:</strong> {service.rating} ({service.reviewsCount} reviews)</div>
              <div className={styles.infoItem}><strong>Pricing:</strong> {service.averagePricing}</div>
              <div className={styles.infoItem}><strong>Founded:</strong> {service.foundedYear}</div>
            </div>
            <h3 className={styles.featuredTitle}>Key Features</h3>
            <ul className={styles.featuredList}>
              {service.featuredServices.map((feat, index) => (
                <li key={index}>{feat}</li>
              ))}
            </ul>
            <Link to="/get-a-quote" className="btn">Get a Quote</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;