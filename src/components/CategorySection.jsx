import React from 'react';
import MenuItem from './MenuItem';

const CategorySection = ({ id, title, items, delay = 0 }) => {
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
            </div>

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
        </section>
    );
};

export default CategorySection;
