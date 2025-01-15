// src/components/Header.jsx
import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <>
<<<<<<< HEAD
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
=======
      <nav className="navbar">
        <div className="logo-container">
          <img src="LOGO.png" alt="Logo" className="logo" />
        </div>
        <div className="nav-icons">
          <a href="#home" className="nav-item">
            <FaHome className="icon" />
            <span>{t('home')}</span>
          </a>
          <a href="#about" className="nav-item">
            <FaInfoCircle className="icon" />
            <span>{t('about.title')}</span>
          </a>
          <a href="#services" className="nav-item">
            <FaServicestack className="icon" />
            <span>{t('services.title')}</span>
          </a>
          <a href="#products" className="nav-item">
            <FaBox className="icon" />
            <span>{t('products.title')}</span>
          </a>
          <a href="#contact" className="nav-item">
            <FaEnvelope className="icon" />
            <span>{t('contact.title')}</span>
          </a>
          <div className="nav-item">
            <ThemeSwitcher />
          </div>
          <div className="lang-dropdown cardo-regular nav-item">
            <button className="lang-dropbtn"><FaLanguage className='icon' /></button>
            <div className="lang-dropdown-content">
              <a onClick={() => changeLanguage('en')}>English</a>
              <a onClick={() => changeLanguage('hin')}>हिन्दी</a>
              <a onClick={() => changeLanguage('tam')}>தமிழ்</a>
            </div>
          </div>
        </div>
      </nav>
>>>>>>> ea6c627 (base structure for next version)
    </>
  );
};

export default Header;