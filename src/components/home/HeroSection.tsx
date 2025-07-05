
import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="relative h-[80vh] w-full">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1599443015574-be5fe8a05783?q=80&w=1000&auto=format&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 h-full flex items-center">
        <div className="text-white max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 font-serif">Comprehensive Veterinary Medicine Database</h1>
          <p className="text-xl md:text-2xl mb-8 font-light">Explore our extensive collection of veterinary medicines for dogs, cats, and poultry birds with detailed information and educational resources.</p>
          <div className="flex flex-wrap gap-4">
            <Link 
              to="/services" 
              className="bg-white text-vet-blue hover:bg-gray-100 px-8 py-3 rounded-md font-semibold transition-colors text-lg"
            >
              Browse Database
            </Link>
            <Link 
              to="/contact" 
              className="border-2 border-white hover:bg-white hover:text-vet-blue px-8 py-3 rounded-md font-semibold transition-colors text-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
