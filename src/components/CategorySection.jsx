import React from 'react';
import { Info } from 'lucide-react';
import MenuItem from './MenuItem';
import SubcategorySection from './SubcategorySection';

const CategorySection = ({ id, title, description, items, subcategories, delay = 0 }) => {
    return (
        <section
            id={`category-${id}`}
            className="animate-slide-up mb-10 sm:mb-12 scroll-mt-48"
            style={{ animationDelay: `${delay}ms` }}
        >
            <div className="mb-6 sm:mb-8">
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-tertulia-coffee text-center mb-2">
                    {title}
                </h2>
                <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-transparent via-tertulia-amber to-transparent mx-auto rounded-full"></div>

                {/* Descripción/Nota de la categoría */}
                {description && (
                    <div className="mt-4 text-center">
                        <p className="font-sans text-sm sm:text-base text-tertulia-amber font-medium bg-tertulia-beige/50 rounded-lg px-4 py-2 inline-flex items-center gap-2 border border-tertulia-tan/30">
                            <Info size={18} className="flex-shrink-0" />
                            <span>{description}</span>
                        </p>
                    </div>
                )}
            </div>

            {/* Si tiene items directos (sin subcategorías) */}
            {items && (
                <div className="grid gap-4 sm:gap-5">
                    {items.map((item, index) => (
                        <MenuItem
                            key={index}
                            name={item.name}
                            description={item.description}
                            price={item.price}
                        />
                    ))}
                </div>
            )}

            {/* Si tiene subcategorías */}
            {subcategories && (
                <div className="space-y-8 sm:space-y-10">
                    {subcategories.map((subcategory) => (
                        <SubcategorySection
                            key={subcategory.id}
                            title={subcategory.title}
                            items={subcategory.items}
                        />
                    ))}
                </div>
            )}
        </section>
    );
};

export default CategorySection;
