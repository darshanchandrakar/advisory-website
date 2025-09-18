import React from 'react';
import Hero from '../components/Hero/Hero';
import ServicesSection from '../components/ServicesSection/ServicesSection';

/**
 * The Home Page component.
 * It assembles the main sections of the landing page and passes down data.
 */
const Home = ({ servicesData }) => {
  return (
    <>
      <Hero />
      {/* Add IDs for hash link scrolling */}
      <div id="services">
        <ServicesSection
          title="Our Services"
          category="Service"
          viewAllLink="/services"
          servicesData={servicesData}
        />
      </div>
      <div id="consultancy">
        <ServicesSection
          title="Our Consultancy"
          category="Consulting"
          viewAllLink="/consultancy"
          servicesData={servicesData}
        />
      </div>
    </>
  );
};

export default Home;
