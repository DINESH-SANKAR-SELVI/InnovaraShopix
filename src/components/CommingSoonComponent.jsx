import React from 'react';

const CommingSoonComponent = () => {

    return (
        <section>
        <div style={{width:'100vw', height: '80vh', display: 'flex',flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <div style={{ backgroundImage: `url(construction-work.png)`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundColor: 'white', border: '10px solid white', backgroundRepeat: 'no-repeat',width: '100px', height: '150px' }} />
            Comming soon...!
        </div>
        </section>
    );
};

export default CommingSoonComponent;