// src/pages/About.jsx
import React from 'react';
import styles from './PageStyles.module.css';

const About = () => {
  return (
    <div className={styles.page}>
      <div className="container">
        <h1 className={styles.pageTitle}>About Us</h1>
        <p className={styles.pageContent}>
          Our Mission
At Advisory360, our mission is to empower businesses to navigate the complexities of the modern landscape with confidence. We provide comprehensive, 360-degree solutions that transform challenges into growth opportunities, driving innovation and ensuring sustainable success for our clients.

Our Story
Founded in the dynamic tech hub of Pune, Maharashtra, Advisory360 was born from a vision to bridge the gap between business potential and market achievement. We saw a need for a consultancy that was not only strategic but also deeply integrated with the technological realities of the digital age. Since our inception, we have been committed to providing clear, actionable, and data-driven guidance that delivers measurable results.

Our Approach
We believe in a partnership, not a prescription. Our approach is built on three core pillars:

Holistic Analysis: We look at your business from every angle—operations, finance, technology, and market position—to develop strategies that benefit the entire organization.

Data-Driven Insights: Intuition is important, but decisions should be backed by data. We leverage advanced analytics to uncover hidden opportunities and mitigate risks.

Collaborative Execution: We work with you, not just for you. Our team integrates with yours to ensure strategies are not only well-designed but also flawlessly implemented.
        </p>
      </div>
    </div>
  );
};

export default About;