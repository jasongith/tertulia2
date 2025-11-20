import React from 'react';

const MenuItem = ({ name, description, price }) => {
    return (
        <div className="group bg-tertulia-cream/50 backdrop-blur-sm rounded-lg p-4 sm:p-5 transition-all duration-300 hover:bg-tertulia-beige/60 hover:shadow-md hover:scale-[1.01] border border-tertulia-tan/20">
            <div className="flex justify-between items-center gap-3">
                <div className="flex-1">
                    <h3 className="font-serif text-xl sm:text-2xl text-tertulia-coffee font-semibold group-hover:text-tertulia-dark-brown transition-colors">
                        {name}
                    </h3>
                </div>
                <div className="flex-shrink-0">
                    <span className="font-serif price-size font-bold text-tertulia-amber">
                        {price}€
                    </span>
                </div>
            </div>
        </div>
    );
};

export default MenuItem;
