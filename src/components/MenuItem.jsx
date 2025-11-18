import React from 'react';

const MenuItem = ({ name, description, price }) => {
    return (
        <div className="group bg-tertulia-cream/50 backdrop-blur-sm rounded-lg p-4 sm:p-5 transition-all duration-300 hover:bg-tertulia-beige/60 hover:shadow-md hover:scale-[1.01] border border-tertulia-tan/20">
            <div className="flex justify-between items-start gap-3">
                <div className="flex-1">
                    <h3 className="font-serif text-xl sm:text-2xl text-tertulia-coffee font-semibold mb-1.5 group-hover:text-tertulia-dark-brown transition-colors">
                        {name}
                    </h3>
                    <p className="font-sans text-sm sm:text-base text-tertulia-warm-gray leading-relaxed">
                        {description}
                    </p>
                </div>
                <div className="flex-shrink-0">
                    <span className="font-sans text-xl sm:text-2xl font-bold text-tertulia-amber">
                        {price}€
                    </span>
                </div>
            </div>
        </div>
    );
};

export default MenuItem;
