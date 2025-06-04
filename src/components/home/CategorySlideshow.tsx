
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Dog, Cat, Bird, Package, ChevronLeft, ChevronRight } from 'lucide-react';

const CategorySlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 'hero',
      title: 'Your Pet\'s Health Is Our Priority',
      description: 'Professional veterinary care for your dogs, cats, and birds. We offer quality medical services and treatments.',
      image: 'https://images.unsplash.com/photo-1599443015574-be5fe8a05783?q=80&w=1000&auto=format&fit=crop',
      link: '/services',
      buttonText: 'Our Services',
      color: 'bg-vet-blue'
    },
    {
      id: 'dogs',
      title: 'Dog Care',
      description: 'Complete healthcare solutions for your canine companions.',
      image: 'https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      icon: <Dog size={40} />,
      link: '/dogs',
      buttonText: 'View Dog Care',
      color: 'bg-vet-blue'
    },
    {
      id: 'cats',
      title: 'Cat Care',
      description: 'Specialized treatments and care for your feline friends.',
      image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=2786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      icon: <Cat size={40} />,
      link: '/cats',
      buttonText: 'View Cat Care',
      color: 'bg-vet-green'
    },
    {
      id: 'birds',
      title: 'Poultry Bird Care',
      description: 'Expert medical attention for your poultry and farm birds.',
      image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      icon: <Bird size={40} />,
      link: '/birds',
      buttonText: 'View Bird Care',
      color: 'bg-vet-orange'
    },
    {
      id: 'local-brand',
      title: 'Local Brand Products',
      description: 'Our exclusive veterinary products created with care.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      icon: <Package size={40} />,
      link: '/local-brand',
      buttonText: 'View Products',
      color: 'bg-purple-600'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  const currentSlideData = slides[currentSlide];

  return (
    <div className="relative h-[80vh] w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 transition-all duration-1000"
        style={{ 
          backgroundImage: `url('${currentSlideData.image}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 h-full flex items-center">
        <div className="text-white max-w-2xl">
          {currentSlideData.icon && (
            <div className="mb-4">
              {currentSlideData.icon}
            </div>
          )}
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 font-serif">
            {currentSlideData.title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light">
            {currentSlideData.description}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              to={currentSlideData.link} 
              className={`${currentSlideData.color} hover:opacity-90 text-white px-8 py-3 rounded-md font-semibold transition-colors text-lg`}
            >
              {currentSlideData.buttonText}
            </Link>
            {currentSlide === 0 && (
              <Link 
                to="/contact" 
                className="border-2 border-white hover:bg-white hover:text-vet-blue px-8 py-3 rounded-md font-semibold transition-colors text-lg"
              >
                Contact Us
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-40 text-white p-2 rounded-full transition-all z-20"
      >
        <ChevronLeft size={24} />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-40 text-white p-2 rounded-full transition-all z-20"
      >
        <ChevronRight size={24} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default CategorySlideshow;
