// src/pages/GetAQuote.jsx
import React from 'react';
import styles from './PageStyles.module.css';

const GetAQuote = () => {
  return (
    <div className={styles.page}>
      <div className="container">
        <h1 className={styles.pageTitle}>Get a Quote</h1>
        <p className={styles.pageContent}>
          A detailed form for requesting a quote for our services and consultancy will be provided here.
        </p>
      </div>
    </div>
  );
};

export default GetAQuote;