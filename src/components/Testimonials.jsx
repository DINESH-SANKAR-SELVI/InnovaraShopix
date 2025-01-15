// src/components/Testimonials.jsx
import React from 'react';
import '../styles/Testimonials.css';

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h2>Testimonials</h2>
      <blockquote>
        <p>"InnovaraShopix has transformed the way we manage our shop!"</p>
        <footer>- Happy Customer</footer>
      </blockquote>
      <blockquote>
        <p>"The best investment we've made for our business!"</p>
        <footer>- Satisfied Client</footer>
      </blockquote>
    </section>
  );
};

export default Testimonials;