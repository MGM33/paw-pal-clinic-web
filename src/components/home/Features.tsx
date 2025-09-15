
import React from 'react';
import { Shield, Clock, Award, Heart, Stethoscope, BookOpen, Search, Star } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Shield size={40} />,
      title: "Verified Information",
      description: "All medicine information is carefully researched and verified from reliable sources.",
      color: "bg-blue-500"
    },
    {
      icon: <Clock size={40} />,
      title: "Always Updated",
      description: "Regular updates to ensure the most current medicine information and guidelines.",
      color: "bg-red-500"
    },
    {
      icon: <Award size={40} />,
      title: "Quality Content",
      description: "High-quality educational content prepared by veterinary medicine students.",
      color: "bg-yellow-500"
    },
    {
      icon: <Heart size={40} />,
      title: "Animal Focused",
      description: "Dedicated to improving animal health through accessible medicine information.",
      color: "bg-pink-500"
    },
    {
      icon: <Stethoscope size={40} />,
      title: "Comprehensive Database",
      description: "Extensive collection of medicines for dogs, cats, and poultry birds.",
      color: "bg-green-500"
    },
    {
      icon: <BookOpen size={40} />,
      title: "Educational Resources",
      description: "Articles, guides, and reference materials for learning about veterinary medicine.",
      color: "bg-purple-500"
    },
    {
      icon: <Search size={40} />,
      title: "Easy Access",
      description: "Quick and efficient access to our specific medicines and information.",
      color: "bg-indigo-500"
    },
    {
      icon: <Star size={40} />,
      title: "User-Friendly",
      description: "Intuitive interface designed for easy navigation and information access.",
      color: "bg-orange-500"
    }
  ];

  return (
    <section className="py-16 transparent-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-theme-deepsky mb-4 animate-fade-in-up">Why Choose VetCare?</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">We provide a comprehensive veterinary medicine database with reliable information, educational resources, and easy-to-use tools for learning about animal healthcare.</p>
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
