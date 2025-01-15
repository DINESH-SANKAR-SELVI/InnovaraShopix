import React from 'react';
import '../styles/Team.css';
import { Helmet } from 'react-helmet';

const Team = () => {
    const teamMembers = [
        { name: "Alice", role: "Founder", image: "alice.jpg" },
        { name: "Bob", role: "Developer", image: "bob.jpg" },
        { name: "Charlie", role: "Designer", image: "charlie.jpg" },
    ];

    return (
        <>
            <Helmet>
                <title>Team</title>
                <meta name="description" content="Team For InnovaraShopix" />
            </Helmet>
            <section id="team" style={{ padding: '20px' }}>
                <h2>Meet Our Special Team</h2>
                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                    {teamMembers.map((member, index) => (
                        <div key={index} style={{ textAlign: 'center' }}>
                            <img src={member.image} alt={member.name} style={{ width: '100px', height: 'auto', borderRadius: '50%' }} />
                            <h3>{member.name}</h3>
                            <p>{member.role}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Team;