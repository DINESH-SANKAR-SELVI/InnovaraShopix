// src/components/Footer.jsx 
import React from 'react';
import '../styles/Footer.css';

const Footer = () => {

    // Create a new Date object
const currentDate = new Date();

// Define options for formatting the date
const options = { year: 'numeric', month: 'long', day: 'numeric' };

// Format the date to "January 14, 2024"
const formattedDate = currentDate.toLocaleDateString('en-US', options);

// Format the final string
const formattedString = `latest@V0.0.1-B01 ${formattedDate}`;

    return (
        <footer>
            © 2023 InnovaraShopix. All rights reserved. {formattedString}
        </footer>
    );
};

export default Footer;