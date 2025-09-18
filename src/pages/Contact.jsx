// src/pages/Contact.jsx
import React from 'react';
import styles from './PageStyles.module.css';

const Contact = () => {
  return (
    <div className={styles.page}>
      <div className="container">
        <h1 className={styles.pageTitle}>Contact Us</h1>
        <p className={styles.pageContent}>
          Contact form and details for getting in touch with Advisory360 will be available on this page.
        </p>
      </div>
    </div>
  );
};

export default Contact;