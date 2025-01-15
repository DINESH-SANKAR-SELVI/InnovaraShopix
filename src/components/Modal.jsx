// Modal.js
import React from 'react';
import '../styles/Modal.css'; // Optional: Add your styles here
import { Helmet } from 'react-helmet';

const Modal = ({ isOpen, onClose, onInstall }) => {
    if (!isOpen) return null;

    return (
        <>
            <Helmet>
                <title>Install InnovaraShopix</title>
                <meta name="description" content="Use Easy With As Application" />
            </Helmet>
            <div className="modal-overlay">
                <div className="modal-content">
                    <h2>Install Our App</h2>
                    <p>Would you like to install our app for a better experience?</p>
                    <div className='w-50 d-flex justify-content-evenly align-items-center'>
                        <button onClick={onInstall} className="spectacledcoder-hover-fill-button2" ><div className="color-fill-2"></div><p>Install</p></button>
                        <button onClick={onClose} className="spectacledcoder-hover-fill-button2" ><div className="color-fill-2"></div><p>Close</p></button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;