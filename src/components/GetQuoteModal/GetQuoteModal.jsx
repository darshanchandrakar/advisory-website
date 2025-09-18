import React, { useState } from 'react';
import styles from './GetQuoteModal.module.css';

const GetQuoteModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: 'General Inquiry',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would handle the form submission here (e.g., send to an API)
    alert(`Thank you, ${formData.name}! Your quote request has been submitted.`);
    onClose(); // Close the modal after submission
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
        <h2>Request a Quote</h2>
        <p className={styles.subtitle}>Let's build something great together. Fill out the form below to get started.</p>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="company">Company (Optional)</label>
            <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="service">Service of Interest</label>
            <select id="service" name="service" value={formData.service} onChange={handleChange}>
              <option>General Inquiry</option>
              <option>IT Consulting</option>
              <option>Financial Planning</option>
              <option>Health Services</option>
              <option>Career Services</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Project Details</label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="4" required></textarea>
          </div>
          <div className={styles.formActions}>
            <button type="button" onClick={onClose} className={styles.cancelButton}>Cancel</button>
            <button type="submit" className={styles.submitButton}>Submit Request</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GetQuoteModal;