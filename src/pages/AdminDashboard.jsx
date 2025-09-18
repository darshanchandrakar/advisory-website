import React, { useState } from 'react';
import styles from './AdminDashboard.module.css';
// CORRECTED IMPORT PATH
import CrudFormModal from '../pages/CrudFormModal.jsx';

/**
 * Admin Dashboard Page for CRUD operations.
 * Manages the state for the CRUD modal.
 */
const AdminDashboard = ({ servicesData, onAddItem, onUpdateItem, onDeleteItem }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);

  // Open the modal in "add" mode
  const handleAddItemClick = () => {
    setCurrentItem(null); // No item to edit, so it's a new one
    setIsModalOpen(true);
  };

  // Open the modal in "edit" mode
  const handleEditItemClick = (item) => {
    setCurrentItem(item);
    setIsModalOpen(true);
  };

  // Close the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentItem(null);
  };

  // Handle saving the form data (either add or update)
  const handleSave = (formData) => {
    if (currentItem) {
      onUpdateItem({ ...formData, id: currentItem.id });
    } else {
      onAddItem(formData);
    }
    handleCloseModal();
  };

  return (
    <div className={styles.adminPage}>
      <div className="container">
        <h1 className={styles.title}>Admin Dashboard</h1>
        <p className={styles.subtitle}>Manage Services & Consultancy</p>
        
        <div className={styles.actionsHeader}>
          <button onClick={handleAddItemClick} className={styles.addButton}>
            + Add New Item
          </button>
        </div>

        <div className={styles.tableWrapper}>
          <table className={styles.adminTable}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Category</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {servicesData.map(item => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.serviceName}</td>
                  <td>{item.category}</td>
                  <td className={styles.actions}>
                    <button 
                      onClick={() => handleEditItemClick(item)}
                      className={styles.editButton}
                    >
                      Edit
                    </button>
                    <button 
                      onClick={() => onDeleteItem(item.id)} 
                      className={styles.deleteButton}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {isModalOpen && (
        <CrudFormModal
          item={currentItem}
          onSave={handleSave}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default AdminDashboard;