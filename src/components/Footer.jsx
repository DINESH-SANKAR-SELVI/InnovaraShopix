// src/components/Footer.jsx 
import React from 'react';
<<<<<<< HEAD
import '../styles/Footer.css';
=======
import '../styles/fonts.css'
import { Helmet } from 'react-helmet';
>>>>>>> ea6c627 (base structure for next version)

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
<<<<<<< HEAD
        <footer>
            © 2023 InnovaraShopix. All rights reserved. {formattedString}
        </footer>
=======
        <>
            <Helmet>
                <title>Footer</title>
                <meta name="description" content="Footer For InnovaraShopix" />
            </Helmet>
            <footer className='dm-serif-text-regular-italic'>
                <p className='text text-center'>&copy; {new Date().getFullYear()} HashVeno & It's Team. All rights reserved. latest@V0.0.2-B01 Jan 15, 2025</p>
            </footer>
        </>
>>>>>>> ea6c627 (base structure for next version)
    );
};

export default Footer;