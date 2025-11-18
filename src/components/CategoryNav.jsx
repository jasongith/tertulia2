import React, { useState, useEffect } from 'react';

const CategoryNav = ({ categories }) => {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isCompact, setIsCompact] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Detectar si el header está compacto
            setIsCompact(currentScrollY > 50);

            // Si estamos en el top, siempre mostrar
            if (currentScrollY < 100) {
                setIsVisible(true);
            } else {
                // Scroll hacia arriba -> mostrar, hacia abajo -> ocultar
                if (currentScrollY < lastScrollY) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    const scrollToCategory = (categoryId) => {
        const element = document.getElementById(`category-${categoryId}`);
        if (element) {
            const offset = 150; // Ajuste reducido para el header compacto
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <nav
            className={`sticky z-40 transition-all duration-300 mb-8 sm:mb-12 ${isCompact ? 'top-20 sm:top-20' : 'top-28 sm:top-32'
                } ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
                }`}
        >
            <div className="bg-tertulia-cream/95 backdrop-blur-md shadow-lg rounded-xl border border-tertulia-tan/30 p-4 sm:p-5">
                <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => scrollToCategory(category.id)}
                            className="font-sans text-sm sm:text-base px-4 sm:px-5 py-2 sm:py-2.5 bg-tertulia-beige hover:bg-tertulia-tan text-tertulia-coffee hover:text-tertulia-dark-brown rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-md border border-tertulia-tan/50"
                        >
                            {category.title}
                        </button>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default CategoryNav;
