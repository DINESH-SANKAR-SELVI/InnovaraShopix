// src/components/Header.jsx
import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li><a href="#features">Features</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#support">Support</a></li>
          </ul>
        </nav>
      </header>

      <h1>Welcome to InnovaraShopix</h1>
      <p>Your ultimate solution for shop management.</p>
    </>
  );
};

export default Header;