
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="gradient-bg text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <span className="text-3xl animate-float">🐾</span>
              <h3 className="text-2xl font-bold">VetCare</h3>
            </div>
            <p className="text-white/90 leading-relaxed">Professional veterinary care for your beloved pets. We provide the best medical treatments for dogs, cats, and birds with modern facilities and compassionate care.</p>
            <div className="flex items-center space-x-2 text-white/80">
              <Heart size={16} className="text-red-400" />
              <span className="text-sm">Caring for pets since 2020</span>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-theme-lightsky">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-white/80 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">Home</Link></li>
              <li><Link to="/services" className="text-white/80 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">Services</Link></li>
              <li><Link to="/about" className="text-white/80 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">About Us</Link></li>
              <li><Link to="/contact" className="text-white/80 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-theme-lightsky">Pet Categories</h3>
            <ul className="space-y-3">
              <li><Link to="/dogs" className="text-white/80 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">Dogs</Link></li>
              <li><Link to="/cats" className="text-white/80 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">Cats</Link></li>
              <li><Link to="/birds" className="text-white/80 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">Birds</Link></li>
              <li><Link to="/our-products/about" className="text-white/80 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">Our Local Brand Products</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-theme-lightsky">Contact Information</h3>
            <address className="not-italic text-white/90 space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-theme-lightsky mt-1 flex-shrink-0" />
                <div>
                  <p>J7F9+WP8, El Sheikh Zayed</p>
                  <p>Ismailia 3, Ismailia Governorate 8366004</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-theme-lightsky flex-shrink-0" />
                <p>info@petcarevet.com</p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-theme-lightsky flex-shrink-0" />
                <p>(123) 456-7890</p>
              </div>
              <div className="flex items-start space-x-3">
                <Clock size={18} className="text-theme-lightsky mt-1 flex-shrink-0" />
                <div>
                  <p>Sunday - Wednesday: 8:00 AM - 11:00 PM</p>
                  <p>Friday: Closed</p>
                </div>
              </div>
            </address>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/70 text-center md:text-left">
              &copy; {new Date().getFullYear()} VetCare. All rights reserved. Made with ❤️ for pet lovers.
            </p>
            <div className="flex space-x-4 text-white/70">
              <Link to="#" className="hover:text-white transition-colors duration-300">Privacy Policy</Link>
              <Link to="#" className="hover:text-white transition-colors duration-300">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
