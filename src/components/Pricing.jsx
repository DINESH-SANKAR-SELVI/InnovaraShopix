// src/components/Pricing.jsx
import React from 'react';
import '../styles/Pricing.css';

const Pricing = () => {
  return (
    <section id="pricing">
      <h2>Pricing Plans</h2>
      <div className="pricing-plan">
        <h3>Basic Plan</h3>
        <p>$19/month</p>
        <p>Includes basic features for small businesses.</p>
      </div>
      <div className="pricing-plan">
        <h3>Pro Plan</h3>
        <p>$49/month</p>
        <p>Advanced features for growing businesses.</p>
      </div>
      <div className="pricing-plan">
        <h3>Enterprise Plan</h3>
        <p>Contact us for pricing</p>
        <p>Custom solutions for large enterprises.</p>
      </div>
    </section>
  );
};

export default Pricing;