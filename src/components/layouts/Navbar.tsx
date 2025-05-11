
import React from 'react';
import { Link } from 'react-router-dom';
import { Dog, Cat, Bird, Home, Phone } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-vet-blue">PetCare</span>
            <span className="text-2xl font-bold text-vet-green">Vet</span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="flex items-center space-x-1 text-gray-600 hover:text-vet-blue transition-colors">
              <Home size={18} />
              <span>Home</span>
            </Link>
            <Link to="/services" className="text-gray-600 hover:text-vet-blue transition-colors">Services</Link>
            <div className="group relative">
              <Link to="/dogs" className="flex items-center space-x-1 text-gray-600 hover:text-vet-blue transition-colors">
                <Dog size={18} />
                <span>Dogs</span>
              </Link>
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md hidden group-hover:block">
                <Link to="/dogs/medicines" className="block px-4 py-2 text-sm text-gray-700 hover:bg-vet-blue hover:text-white">Medicines</Link>
              </div>
            </div>
            <div className="group relative">
              <Link to="/cats" className="flex items-center space-x-1 text-gray-600 hover:text-vet-blue transition-colors">
                <Cat size={18} />
                <span>Cats</span>
              </Link>
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md hidden group-hover:block">
                <Link to="/cats/medicines" className="block px-4 py-2 text-sm text-gray-700 hover:bg-vet-blue hover:text-white">Medicines</Link>
              </div>
            </div>
            <div className="group relative">
              <Link to="/birds" className="flex items-center space-x-1 text-gray-600 hover:text-vet-blue transition-colors">
                <Bird size={18} />
                <span>Birds</span>
              </Link>
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md hidden group-hover:block">
                <Link to="/birds/medicines" className="block px-4 py-2 text-sm text-gray-700 hover:bg-vet-blue hover:text-white">Medicines</Link>
              </div>
            </div>
            <Link to="/about" className="text-gray-600 hover:text-vet-blue transition-colors">About Us</Link>
            <Link to="/contact" className="flex items-center space-x-1 text-gray-600 hover:text-vet-blue transition-colors">
              <Phone size={18} />
              <span>Contact</span>
            </Link>
          </div>
          
          <div className="md:hidden">
            <button className="text-gray-600 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
