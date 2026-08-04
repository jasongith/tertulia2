import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isInAlcoholSection, setIsInAlcoholSection] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Mostrar botón si el scroll es mayor a 300px
            setIsVisible(window.scrollY > 300);

            // Verificar si estamos en la sección de alcoholes Y ya hemos scrolleado dentro de ella
            const alcoholSection = document.getElementById('category-10'); // ID de alcoholes
            if (alcoholSection) {
                const rect = alcoholSection.getBoundingClientRect();
                const sectionTop = alcoholSection.offsetTop;
                const currentScroll = window.scrollY;

                // Estamos "metidos" en alcoholes si:
                // 1. La sección está en viewport
                // 2. Hemos scrolleado al menos 400px dentro de la sección
                const isInSection = rect.top < 0 && rect.bottom > 0;
                const scrolledIntoSection = currentScroll > sectionTop + 400;

                setIsInAlcoholSection(isInSection && scrolledIntoSection);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Ejecutar una vez al inicio
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        if (isInAlcoholSection) {
            // Si estamos en alcoholes, ir al inicio de esa sección
            const alcoholSection = document.getElementById('category-10');
            if (alcoholSection) {
                const offset = 150;
                const elementPosition = alcoholSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        } else {
            // Si no, ir al principio de la página
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-6 right-6 z-50 p-3 sm:p-4 bg-tertulia-amber hover:bg-tertulia-coffee text-tertulia-dark-brown hover:text-tertulia-cream rounded-full shadow-lg transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16 pointer-events-none'
                } hover:scale-110`}
            aria-label="Ir arriba"
        >
            <ArrowUp size={24} strokeWidth={2.5} />
        </button>
    );
};

export default ScrollToTopButton;
