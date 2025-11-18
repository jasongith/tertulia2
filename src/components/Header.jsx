import React, { useState, useEffect } from 'react';

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
                <h1 className={`font-serif text-center text-tertulia-cream tracking-wide transition-all duration-300 ${isCompact ? 'text-2xl sm:text-3xl md:text-4xl' : 'text-4xl sm:text-5xl md:text-6xl'
                    }`}>
                    La Tertulia
                </h1>
                <p className={`font-sans text-center text-tertulia-tan tracking-widest uppercase transition-all duration-300 ${isCompact ? 'text-xs sm:text-sm mt-1' : 'text-sm sm:text-base mt-2'
                    }`}>
                    Carta Digital
                </p>
            </div>
        </header>
    );
};

export default Header;
