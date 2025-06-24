
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
                  <p className="text-gray-600">J7F9+WP8, El Sheikh Zayed, Ismailia 3, Ismailia Governorate 8366004</p>
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
                  <p className="text-gray-600">Sun-Wed: 8:00 AM - 11:00 PM</p>
                  <p className="text-gray-600">Fri: Closed</p>
                </div>
              </div>
            </div>
            
            <div className="glass-effect rounded-lg p-6 hover-lift">
              <div className="flex items-center space-x-4">
                <div className="bg-theme-deepsky text-white p-3 rounded-full">
                  <Phone size={24} />
                </div>
              <div className="space-y-2">
  <a
    href="tel:+201286472342"
    className="flex items-center text-theme-deepsky font-semibold hover:underline"
  >
    <img
      src="https://cdn-icons-png.flaticon.com/512/724/724664.png"
      alt="Phone"
      className="w-5 h-5 mr-2"
    />
    0128 647 2342
  </a>

  <a
    href="https://wa.me/201272151734"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center text-green-600 font-semibold hover:underline"
  >
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
      alt="WhatsApp"
      className="w-5 h-5 mr-2"
    />
    0127 215 1734
  </a>

  <a
    href="/contact"
    className="text-gray-700 font-semibold hover:underline block"
  >
    m.dgamal456@gmail.com
  </a>
</div>

              </div>
            </div>
          </div>
          
          <div className="glass-effect rounded-lg overflow-hidden hover-lift">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3433.32581284351!2d32.267235870015476!3d30.624774064139142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f85981bc0575c9%3A0x79c5e695041c526d!2z2YPZhNmK2Kkg2KfZhNi32Kgg2KfZhNio2YrYt9ix2Yk!5e0!3m2!1sen!2seg!4v1749036344795!5m2!1sen!2seg"
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
