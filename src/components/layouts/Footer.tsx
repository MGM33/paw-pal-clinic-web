
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">PetCare Vet</h3>
            <p className="text-gray-300">Professional veterinary care for your beloved pets. We provide the best medical treatments for dogs, cats, and birds.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Pet Categories</h3>
            <ul className="space-y-2">
              <li><Link to="/dogs" className="text-gray-300 hover:text-white transition-colors">Dogs</Link></li>
              <li><Link to="/cats" className="text-gray-300 hover:text-white transition-colors">Cats</Link></li>
              <li><Link to="/birds" className="text-gray-300 hover:text-white transition-colors">Birds</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <address className="not-italic text-gray-300">
              <p>123 Pet Street</p>
              <p>Vet City, VC 12345</p>
              <p>Email: info@petcarevet.com</p>
              <p>Phone: (123) 456-7890</p>
            </address>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} PetCare Vet. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
