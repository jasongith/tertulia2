import React from 'react';

const AlcoholNav = ({ subcategories, categoryId }) => {
    const scrollToSubcategory = (subcategoryId) => {
        const element = document.getElementById(`subcategory-${categoryId}-${subcategoryId}`);
        if (element) {
            const offset = 250; // Ajuste para header + nav principal + este nav
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <nav className="mb-8 sm:mb-10">
            <div className="bg-tertulia-cream/95 backdrop-blur-md shadow-lg rounded-xl border border-tertulia-tan/30 p-4 sm:p-5">
                <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
                    {subcategories.map((subcategory) => (
                        <button
                            key={subcategory.id}
                            onClick={() => scrollToSubcategory(subcategory.id)}
                            className="font-sans text-sm sm:text-base px-4 sm:px-5 py-2 sm:py-2.5 bg-tertulia-beige hover:bg-tertulia-tan text-tertulia-coffee hover:text-tertulia-dark-brown rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-md border border-tertulia-tan/50"
                        >
                            {subcategory.title}
                        </button>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default AlcoholNav;
