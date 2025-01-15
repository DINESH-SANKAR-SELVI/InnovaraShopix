// src/components/ThemeSwitcher.js
import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeSwitcher = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <>
        <div>
            <div style={{ backgroundImage: `url(themes-logo.png)`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat',width: '30px',height: '30px' }} onClick={toggleTheme} >
                 {/*Switch to {theme === 'light' ? 'Dark': 'light'}{/*theme === 'light' ? 'Dark' : theme === 'dark' ? 'Colorful' : 'Light'*/}{/* Theme*/}
            </div>
        </div>
        </>
    );
};

export default ThemeSwitcher;