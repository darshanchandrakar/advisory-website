import React, { useState, useEffect } from 'react';
import styles from './CrudFormModal.module.css';

const CrudFormModal = ({ item, onSave, onClose }) => {
  const [formData, setFormData] = useState({
    serviceName: '',
    category: 'Service',
    description: '',
    imageUrl: '',
    featuredServices: '',
  });

  // Check if we are in "edit" mode (an item is passed) or "add" mode (item is null)
  const isEditMode = item !== null;

  // When the component mounts or the item to edit changes, populate the form
  useEffect(() => {
    if (isEditMode) {
      setFormData({
        ...item,
        // Convert the array back to a comma-separated string for the input field
        featuredServices: item.featuredServices.join(', '),
      });
    } else {
      // Reset form for "add" mode
      setFormData({
        serviceName: '',
        category: 'Service',
        description: '',
        imageUrl: '',
        featuredServices: '',
      });
    }
  }, [item]);

  // Handle changes in form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2>{isEditMode ? 'Edit Item' : 'Add New Item'}</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="serviceName">Service Name</label>
            <input
              type="text"
              id="serviceName"
              name="serviceName"
              value={formData.serviceName}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="category">Category</label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
            >
              <option value="Service">Service</option>
              <option value="Consulting">Consulting</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="3"
              required
            ></textarea>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="imageUrl">Image URL</label>
            <input
              type="text"
              id="imageUrl"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="featuredServices">Featured Services (comma-separated)</label>
            <input
              type="text"
              id="featuredServices"
              name="featuredServices"
              value={formData.featuredServices}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formActions}>
            <button type="button" onClick={onClose} className={styles.cancelButton}>
              Cancel
            </button>
            <button type="submit" className={styles.saveButton}>
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CrudFormModal;