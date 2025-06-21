
import React from 'react';
import { Shield, Clock, Award, Heart, Stethoscope, Truck, Phone, Star } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Shield size={40} />,
      title: "Certified Professionals",
      description: "Licensed veterinarians with years of experience in animal care.",
      color: "bg-blue-500"
    },
    {
      icon: <Clock size={40} />,
      title: "24/7 Emergency Care",
      description: "Round-the-clock emergency services for urgent pet health needs.",
      color: "bg-red-500"
    },
    {
      icon: <Award size={40} />,
      title: "Award-Winning Clinic",
      description: "Recognized for excellence in veterinary care and customer service.",
      color: "bg-yellow-500"
    },
    {
      icon: <Heart size={40} />,
      title: "Compassionate Care",
      description: "We treat every pet with love and care as if they were our own.",
      color: "bg-pink-500"
    },
    {
      icon: <Stethoscope size={40} />,
      title: "Advanced Equipment",
      description: "State-of-the-art medical equipment for accurate diagnosis and treatment.",
      color: "bg-green-500"
    },
    {
      icon: <Truck size={40} />,
      title: "Home Visits Available",
      description: "Convenient home visit services for pets who need special care.",
      color: "bg-purple-500"
    },
    {
      icon: <Phone size={40} />,
      title: "Telemedicine Consultations",
      description: "Virtual consultations for follow-ups and minor health concerns.",
      color: "bg-indigo-500"
    },
    {
      icon: <Star size={40} />,
      title: "Premium Services",
      description: "Grooming, boarding, and specialized treatments all under one roof.",
      color: "bg-orange-500"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-theme-lightsky/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-theme-deepsky mb-4 animate-fade-in-up">Why Choose VetCare?</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">We provide comprehensive veterinary services with modern facilities, experienced professionals, and a commitment to your pet's health and happiness.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-effect rounded-xl p-6 text-center hover-lift group animate-bounce-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`${feature.color} text-white p-4 rounded-full inline-block mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-theme-deepsky mb-3 group-hover:text-theme-sky transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
