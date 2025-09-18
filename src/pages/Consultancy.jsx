// src/pages/Consultancy.jsx
import React, { useState, useEffect } from 'react';
import { fetchData } from '../api/mockApi';
import Card from '../components/Card/Card';
import styles from './PageStyles.module.css';

/**
 * Consultancy Page
 * Displays a complete list of all available consultancy offerings.
 */
const Consultancy = () => {
  const [consultancies, setConsultancies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const allData = await fetchData();
      setConsultancies(allData.filter(item => item.category === 'Consulting'));
      setLoading(false);
    };
    loadData();
  }, []);

  return (
    <div className={styles.page}>
      <div className="container">
        <h1 className={styles.pageTitle}>All Consultancy</h1>
        {loading ? (
          <p>Loading consultancies...</p>
        ) : (
          <div className={styles.grid}>
            {consultancies.map(item => (
              <Card
                key={item.id}
                id={item.id}
                title={item.serviceName}
                description={item.description}
                imageUrl={item.imageUrl}
                type="consultancy"
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Consultancy;