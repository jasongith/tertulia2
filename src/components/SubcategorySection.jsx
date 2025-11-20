import React from 'react';
import MenuItem from './MenuItem';

const SubcategorySection = ({ title, items }) => {
    return (
        <div className="mb-8">
            <h3 className="font-serif text-2xl sm:text-3xl text-tertulia-dark-brown text-center mb-4 sm:mb-6">
                {title}
            </h3>
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
        </div>
    );
};

export default SubcategorySection;
