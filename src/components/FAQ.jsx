<<<<<<< HEAD
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
=======
import React, { useState } from 'react';
import '../styles/FAQ.css';
import { Helmet } from 'react-helmet';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const faqs = [
        { question: "What is your mission?", answer: "Our mission is to..." },
        { question: "How can I get involved?", answer: "You can get involved by..." },
        { question: "Where do my donations go?", answer: "Your donations go to..." },
    ];

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <>
            <Helmet>
                <title>FAQ</title>
                <meta name="description" content="FAQ Of InnovaraShopix" />
            </Helmet>
            <section id="faq" style={{ padding: '20px' }}>
                <h2>Frequently Asked Questions</h2>
                {faqs.map((faq, index) => (
                    <div key={index}>
                        <h3 onClick={() => toggleFAQ(index)} style={{ cursor: 'pointer' }}>
                            {faq.question}
                        </h3>
                        {activeIndex === index && <p>{faq.answer}</p>}
                    </div>
                ))}
            </section>
        </>
    );
>>>>>>> ea6c627 (base structure for next version)
};

export default FAQ;