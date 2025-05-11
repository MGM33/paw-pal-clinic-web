
import React from 'react';
import { Link } from 'react-router-dom';
import { Dog, Cat, Bird } from 'lucide-react';

const FeaturedPets = () => {
  const petCategories = [
    {
      id: 'dogs',
      name: 'Dogs',
      icon: <Dog size={40} />,
      image: 'https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a?q=80&w=2776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Complete healthcare solutions for your canine companions.',
      color: 'bg-vet-blue',
      hoverColor: 'hover:bg-vet-darkblue'
    },
    {
      id: 'cats',
      name: 'Cats',
      icon: <Cat size={40} />,
      image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=2786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Specialized treatments and care for your feline friends.',
      color: 'bg-vet-green',
      hoverColor: 'hover:bg-vet-darkgreen'
    },
    {
      id: 'birds',
      name: 'Birds',
      icon: <Bird size={40} />,
      image: 'https://images.unsplash.com/photo-1522858547137-f1dcec554f26?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Expert medical attention for your avian pets.',
      color: 'bg-vet-orange',
      hoverColor: 'hover:bg-vet-darkorange'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Pet Categories</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {petCategories.map((category) => (
            <Link 
              key={category.id}
              to={`/${category.id}`} 
              className="group bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="w-full h-full object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-bold">{category.name}</h3>
                </div>
              </div>
              <div className="p-6">
                <div className={`rounded-full ${category.color} text-white p-3 inline-block mb-4`}>
                  {category.icon}
                </div>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <div className={`flex justify-end ${category.color} ${category.hoverColor} text-white rounded px-4 py-2 transition-colors`}>
                  View Details
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPets;
