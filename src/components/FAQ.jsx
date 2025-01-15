// src/components/FAQ.jsx
import React from 'react';
import '../styles/FAQ.css';

const FAQ = () => {
  return (
    <section id="faq">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-item">
        <h3>What is InnovaraShopix?</h3>
        <p>InnovaraShopix is a comprehensive shop management solution designed to streamline your business operations.</p>
      </div>
      <div className="faq-item">
        <h3>How can I contact support?</h3>
        <p>You can reach our support team at support@innovarashopix.com.</p>
      </div>
    </section>
  );
};

export default FAQ;