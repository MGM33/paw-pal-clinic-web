
import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-r from-vet-blue to-vet-darkblue text-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">Your Pet's Health Is Our Priority</h1>
            <p className="text-xl mb-8">Professional veterinary care for your dogs, cats, and birds. We offer quality medical services and treatments.</p>
            <div className="flex space-x-4">
              <Link 
                to="/services" 
                className="bg-white text-vet-blue hover:bg-gray-100 px-6 py-3 rounded-md font-semibold transition-colors"
              >
                Our Services
              </Link>
              <Link 
                to="/contact" 
                className="border-2 border-white hover:bg-white hover:text-vet-blue px-6 py-3 rounded-md font-semibold transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://source.unsplash.com/random/800x600/?veterinarian" 
              alt="Veterinary Care" 
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
