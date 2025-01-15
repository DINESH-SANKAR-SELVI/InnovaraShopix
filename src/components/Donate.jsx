import React from 'react';
import '../styles/Donate.css';
import { Helmet } from 'react-helmet';

const Donate = () => {
    return (<>
        <Helmet>
            <title>Donate</title>
            <meta name="description" content="Donate For InnovaraShopix" />
        </Helmet>
        <section id="donate" style={{ padding: '20px' }}>
            <h2>Support Us</h2>
            <p>Your contributions help us make a difference. Please consider donating.</p>
            <button onClick={() => alert('Thank you for your donation!')}>Donate Now</button>
        </section>
    </>
    );
};

export default Donate;