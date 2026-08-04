import React, { useState, useEffect } from 'react';
import logo from '../assets/images/logo1_no_bg.png';

const Header = () => {
    const [isCompact, setIsCompact] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Si hacemos scroll más de 50px, hacemos el header compacto
            if (window.scrollY > 50) {
                setIsCompact(true);
            } else {
                setIsCompact(false);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className="sticky top-0 z-50 bg-gradient-to-b from-tertulia-coffee to-tertulia-dark-brown shadow-lg transition-all duration-300">
            <div className={`max-w-4xl mx-auto px-4 transition-all duration-300 ${isCompact ? 'py-3 sm:py-4' : 'py-6 sm:py-8'
                }`}>
                <div className="flex justify-center items-center">
                    <img
                        src={logo}
                        alt="La Tertulia"
                        className={`transition-all duration-300 object-contain ${isCompact ? 'h-11 sm:h-12 max-w-[160px] sm:max-w-[190px]' : 'h-18 sm:h-20 max-w-[220px] sm:max-w-[260px]'
                            }`}
                    />
                </div>
                <p className={`font-sans text-center text-tertulia-tan tracking-widest uppercase transition-all duration-300 ${isCompact ? 'text-xs sm:text-sm mt-0.5' : 'text-sm sm:text-base mt-4'
                    }`}>
                    Carta Digital
                </p>
            </div>
        </header>
    );
};

export default Header;
