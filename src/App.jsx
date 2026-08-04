import React from 'react';
import Header from './components/Header';
import CategoryNav from './components/CategoryNav';
import CategorySection from './components/CategorySection';
import ScrollToTopButton from './components/ScrollToTopButton';
import menuData from './data/menu.json';

function App() {
    return (
        <div className="min-h-screen">
            <Header />

            <main className="max-w-4xl mx-auto px-4 py-8 sm:py-12 animate-fade-in">
                {/* Category Navigation */}
                <CategoryNav categories={menuData.categories} />

                {/* Categories */}
                <div className="space-y-12 sm:space-y-16">
                    {menuData.categories.map((category, index) => (
                        <CategorySection
                            key={category.id}
                            id={category.id}
                            title={category.title}
                            description={category.description}
                            items={category.items}
                            subcategories={category.subcategories}
                            delay={index * 100}
                        />
                    ))}
                </div>

                {/* Footer */}
                <footer className="mt-16 sm:mt-20 pb-8 text-center border-t border-tertulia-tan/30 pt-8">
                    <p className="font-sans text-sm text-tertulia-warm-gray">
                        La Tertulia © {new Date().getFullYear()}
                    </p>
                    <p className="font-sans text-xs text-tertulia-warm-gray/70 mt-2">
                        Gracias por visitarnos
                    </p>
                </footer>
            </main>

            {/* Botón flotante para ir arriba */}
            <ScrollToTopButton />
        </div>
    );
}

export default App;
