import React from 'react';
import '../styles/Clients.css';
import { Helmet } from 'react-helmet';

const Clients = () => {
    const clients = [
        { name: "Client 1", logo: "client1-logo.png" },
        { name: "Client 2", logo: "client2-logo.png" },
        { name: "Client 3", logo: "client3-logo.png" },
    ];

    return (
        <>
            <Helmet>
                <title>Clients</title>
                <meta name="description" content="Clients Of InnovaraShopix" />
            </Helmet>
            <section id="clients" style={{ padding: '20px' }}>
                <h2>Our Clients</h2>
                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                    {clients.map((client, index) => (
                        <div key={index} style={{ textAlign: 'center' }}>
                            <img src={client.logo} alt={client.name} style={{ width: '100px', height: 'auto' }} />
                            <p>{client.name}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Clients;