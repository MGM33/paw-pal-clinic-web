import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Dog, Cat, Bird, Package, FileText} from 'lucide-react';

const CategorySlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isManualChange, setIsManualChange] = useState(false);
  const [dragStartX, setDragStartX] = useState<number | null>(null);
  const [dragDistance, setDragDistance] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const slides = [
    {
      id: 'hero',
      title: 'Your Pet\'s Health Is Our Priority',
      description: 'Professional veterinary care for your dogs, cats, and birds. We offer quality medical services and treatments with modern facilities and expert care.',
      image: 'https://images.unsplash.com/photo-1581888227599-779811939961?q=80&w=1000&auto=format&fit=crop',
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
      link: '/our-products/about',
      buttonText: 'View Products',
      color: 'bg-purple-600'
    },
{
    id: 'articles-about',
    title: 'Our Articles',
    description: 'Explore helpful veterinary articles about pet care, vaccinations, nutrition, health tips, and more.',
    image: 'https://videos.openai.com/vg-assets/assets%2Ftask_01jydmz7gef6nazgc723hnzjj2%2F1750657437_img_2.webp?st=2025-06-23T03%3A49%3A59Z&se=2025-06-29T04%3A49%3A59Z&sks=b&skt=2025-06-23T03%3A49%3A59Z&ske=2025-06-29T04%3A49%3A59Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=3d249c53-07fa-4ba4-9b65-0bf8eb4ea46a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=qzdI1UAiSAXXsFDo8uRxRTeq4lvnYPVIj49XqpWsDhk%3D&az=oaivgprodscus',
    icon: <FileText size={40} />,
    link: '/articles/about',
    buttonText: 'View Articles',
    color: 'bg-Yellow-600'
  }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    resetManualChangeTimer();
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    resetManualChangeTimer();
  };

  const resetManualChangeTimer = () => {
    setIsManualChange(true);
    if (timerRef.current) clearInterval(timerRef.current);
    setTimeout(() => setIsManualChange(false), 8000);
  };

  const startAutoplay = () => {
    timerRef.current = setInterval(() => {
      if (!isManualChange) {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }
    }, 5000);
  };

  const handleTouchStart = (e: React.TouchEvent | React.MouseEvent) => {
    const clientX = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    setDragStartX(clientX);
  };

  const handleTouchMove = (e: React.TouchEvent | React.MouseEvent) => {
    if (dragStartX === null) return;
    const clientX = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    setDragDistance(clientX - dragStartX);
  };

  const handleTouchEnd = () => {
    if (dragDistance > 50) {
      prevSlide();
    } else if (dragDistance < -50) {
      nextSlide();
    }
    setDragStartX(null);
    setDragDistance(0);
  };

  const handleDoubleClick = (e: React.MouseEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    if (clickX > rect.width / 2) {
      nextSlide();
    } else {
      prevSlide();
    }
  };

  useEffect(() => {
    startAutoplay();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isManualChange]);

  return (
    <div
      className="relative h-[90vh] w-full overflow-hidden cursor-default select-none"
      onMouseDown={handleTouchStart}
      onMouseMove={(e) => dragStartX !== null && handleTouchMove(e)}
      onMouseUp={handleTouchEnd}
      onMouseLeave={() => dragStartX !== null && handleTouchEnd()}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onDoubleClick={handleDoubleClick}
    >
      {/* Slide Container */}
      <div
        className="flex transition-transform duration-700 ease-in-out h-full w-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className="min-w-full h-full bg-cover bg-center relative"
            style={{ backgroundImage: `url('${slide.image}')` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent z-0" />
            <div className="absolute inset-0 z-10 container mx-auto px-4 h-full flex items-center">
              <div className="text-white max-w-3xl">
                {slide.icon && <div className="mb-6">{slide.icon}</div>}
                <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 font-serif">{slide.title}</h1>
                <p className="text-xl md:text-2xl mb-8 font-light leading-relaxed">{slide.description}</p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    to={slide.link}
                    className={`${slide.color} hover:scale-105 hover:shadow-xl text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 text-lg shadow-lg`}
                  >
                    {slide.buttonText}
                  </Link>
                  {index === 0 && (
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
          </div>
        ))}
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 z-5 pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-theme-sky/20 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-theme-lightsky/30 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-white/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentSlide(index);
              resetManualChangeTimer();
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
