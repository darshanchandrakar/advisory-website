import React from 'react';
import Card from '../components/Card/Card';
import styles from './PageStyles.module.css';

//
// Services Page
// Displays a complete list of all available services from props.
//
const Services = ({ servicesData }) => {
  const services = servicesData.filter(item => item.category === 'Service');

  return (
    <div className={styles.page}>
      <div className="container">
        <h1 className={styles.pageTitle}>All Services</h1>
        <div className={styles.grid}>
          {services.map(service => (
            <Card
              key={service.id}
              id={service.id}
              title={service.serviceName}
              description={service.description}
              imageUrl={service.imageUrl}
              type="service"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;