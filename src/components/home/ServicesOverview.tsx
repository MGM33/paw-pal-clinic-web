
import React from 'react';
import { Link } from 'react-router-dom';

const ServicesOverview = () => {
  const services = [
    {
      id: 1,
      title: 'Veterinary Consultation',
      description: 'Professional consultation with our experienced veterinarians.',
      icon: '🩺'
    },
    {
      id: 2,
      title: 'Medical Treatment',
      description: 'Comprehensive medical care for all types of pets.',
      icon: '💊'
    },
    {
      id: 3,
      title: 'Surgical Procedures',
      description: 'Advanced surgical treatments with state-of-the-art equipment.',
      icon: '🔬'
    },
    {
      id: 4,
      title: 'Preventive Care',
      description: 'Regular check-ups and vaccines to keep your pets healthy.',
      icon: '🛡️'
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">We provide a wide range of veterinary services to ensure your pets receive the best care possible.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link 
            to="/services" 
            className="inline-block bg-vet-blue hover:bg-vet-darkblue text-white px-6 py-3 rounded-md font-semibold transition-colors"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
