import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Card from '../Card/Card';
import SearchBar from '../SearchBar/SearchBar';
import styles from './ServicesSection.module.css';

/**
 * Displays a filtered, searchable section of services from the main app state.
 * @param {string} title - The title of the section.
 * @param {string} category - The category to filter by ('Service' or 'Consulting').
 * @param {string} viewAllLink - The link to the full page for this category.
 * @param {Array} servicesData - The full list of services from App.jsx.
 */
const ServicesSection = ({ title, category, viewAllLink, servicesData }) => {
  const [searchQuery, setSearchQuery] = useState('');

  // Memoize the filtering logic to avoid re-computation on every render
  const filteredItems = useMemo(() => {
    const categoryItems = servicesData.filter(item => item.category === category);
    
    if (!searchQuery) {
      return categoryItems.slice(0, 6); // Show initial 6 items
    }
    
    const lowercasedQuery = searchQuery.toLowerCase();
    return categoryItems.filter(item =>
      item.serviceName.toLowerCase().includes(lowercasedQuery) ||
      item.description.toLowerCase().includes(lowercasedQuery) ||
      item.featuredServices.some(s => s.toLowerCase().includes(lowercasedQuery))
    ).slice(0, 6); // Show up to 6 search results
  }, [searchQuery, servicesData, category]);

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          <SearchBar onSearch={setSearchQuery} />
        </div>
        <div className={styles.cardGrid}>
          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => (
              <Card
                key={item.id}
                id={item.id}
                title={item.serviceName}
                description={item.description}
                imageUrl={item.imageUrl}
                type={category.toLowerCase()}
              />
            ))
          ) : (
            <p className={styles.noResults}>No matching services found.</p>
          )}
        </div>
        <div className={styles.actions}>
          <Link to={viewAllLink} className="btn-outline">
            Explore All {title}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;