
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Dog, Cat, Bird, Package } from 'lucide-react';

const CategorySlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isManualChange, setIsManualChange] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const slides = [
    {
      id: 'hero',
      title: 'Your Pet\'s Health Is Our Priority',
      description: 'Professional veterinary care for your dogs, cats, and birds. We offer quality medical services and treatments with modern facilities and expert care.',
      image: 'https://images.unsplash.com/photo-1599443015574-be5fe8a05783?q=80&w=1000&auto=format&fit=crop',
      link: '/services',
      buttonText: 'Our Services',
      color: 'bg-theme-deepsky'
    },
    {
      id: 'dogs',
      title: 'Dog Care Excellence',
      description: 'Complete healthcare solutions for your canine companions with specialized treatments and preventive care.',
      image: 'https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      icon: <Dog size={40} />,
      link: '/dogs',
      buttonText: 'View Dog Care',
      color: 'bg-theme-deepsky'
    },
    {
      id: 'cats',
      title: 'Feline Health Specialists',
      description: 'Specialized treatments and care for your feline friends with gentle handling and expert knowledge.',
      image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=2786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      icon: <Cat size={40} />,
      link: '/cats',
      buttonText: 'View Cat Care',
      color: 'bg-theme-sky'
    },
    {
      id: 'birds',
      title: 'Avian Care Experts',
      description: 'Expert medical attention for your poultry and farm birds with specialized equipment and knowledge.',
      image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      icon: <Bird size={40} />,
      link: '/birds',
      buttonText: 'View Bird Care',
      color: 'bg-orange-500'
    },
    {
      id: 'local-brand',
      title: 'Premium Local Products',
      description: 'Our exclusive veterinary products created with care and backed by years of expertise.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      icon: <Package size={40} />,
      link: '/local-brand',
      buttonText: 'View Products',
      color: 'bg-purple-600'
    }
  ];

  const startTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    timerRef.current = setInterval(() => {
      if (!isManualChange) {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }
    }, 8000); // Increased from 6000ms to 8000ms
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsManualChange(true);
    setTimeout(() => setIsManualChange(false), 8000); // Reset manual change flag after 8 seconds
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsManualChange(true);
    setTimeout(() => setIsManualChange(false), 8000); // Reset manual change flag after 8 seconds
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  const handleDoubleClick = () => {
    nextSlide();
  };

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isManualChange]);

  const currentSlideData = slides[currentSlide];

  return (
    <div 
      className="relative h-[90vh] w-full overflow-hidden cursor-pointer"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onDoubleClick={handleDoubleClick}
    >
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 transition-all duration-1000"
        style={{ 
          backgroundImage: `url('${currentSlideData.image}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-5">
        <div className="absolute top-20 left-10 w-20 h-20 bg-theme-sky/20 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-theme-lightsky/30 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-white/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 h-full flex items-center">
        <div className="text-white max-w-3xl animate-slide-in">
          {currentSlideData.icon && (
            <div className="mb-6 animate-bounce-in" style={{ animationDelay: '0.5s' }}>
              {currentSlideData.icon}
            </div>
          )}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 font-serif animate-fade-in-up">
            {currentSlideData.title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            {currentSlideData.description}
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Link 
              to={currentSlideData.link} 
              className={`${currentSlideData.color} hover:scale-105 hover:shadow-xl text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 text-lg shadow-lg`}
            >
              {currentSlideData.buttonText}
            </Link>
            {currentSlide === 0 && (
              <Link 
                to="/contact" 
                className="border-2 border-white hover:bg-white hover:text-theme-deepsky px-8 py-4 rounded-full font-semibold transition-all duration-300 text-lg hover:scale-105"
              >
                Contact Us
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentSlide(index);
              setIsManualChange(true);
              setTimeout(() => setIsManualChange(false), 8000);
            }}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default CategorySlideshow;
