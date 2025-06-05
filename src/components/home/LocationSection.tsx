
import React from 'react';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

const LocationSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-theme-lightsky to-theme-powder">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-theme-deepsky mb-4 animate-fade-in-up">Visit Our Clinic</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">Find us at our convenient location with modern facilities and expert veterinary care.</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="glass-effect rounded-lg p-6 hover-lift">
              <div className="flex items-center space-x-4">
                <div className="bg-theme-deepsky text-white p-3 rounded-full">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-theme-deepsky">Address</h3>
                  <p className="text-gray-600">123 Pet Care Street, Veterinary District, VC 12345</p>
                </div>
              </div>
            </div>
            
            <div className="glass-effect rounded-lg p-6 hover-lift">
              <div className="flex items-center space-x-4">
                <div className="bg-theme-deepsky text-white p-3 rounded-full">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-theme-deepsky">Opening Hours</h3>
                  <p className="text-gray-600">Mon-Fri: 8:00 AM - 8:00 PM</p>
                  <p className="text-gray-600">Sat-Sun: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
            
            <div className="glass-effect rounded-lg p-6 hover-lift">
              <div className="flex items-center space-x-4">
                <div className="bg-theme-deepsky text-white p-3 rounded-full">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-theme-deepsky">Contact</h3>
                  <p className="text-gray-600">Phone: (123) 456-7890</p>
                  <p className="text-gray-600">Email: info@vetcare.com</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="glass-effect rounded-lg overflow-hidden hover-lift">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.123456789!2d-73.987654!3d40.712345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ0LjQiTiA3M8KwNTknMTUuNiJX!5e0!3m2!1sen!2sus!4v1234567890123"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-96"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
