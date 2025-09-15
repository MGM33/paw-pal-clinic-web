
import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      pet: "Golden Retriever - Max",
      rating: 5,
      comment: "VetCare provided exceptional care for Max. The staff was professional and caring throughout the entire treatment process.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b632?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Michael Chen",
      pet: "Persian Cat - Luna",
      rating: 5,
      comment: "Amazing service! Dr. Smith was incredibly knowledgeable and helped Luna recover quickly from her illness.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      pet: "Parrot - Charlie",
      rating: 5,
      comment: "The specialized bird care at VetCare is outstanding. Charlie received the best treatment possible.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 4,
      name: "David Williams",
      pet: "Labrador - Buddy",
      rating: 5,
      comment: "Professional, caring, and affordable. VetCare has been our family's trusted veterinary clinic for over 5 years.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 5000);
    return () => clearInterval(timer);
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={20}
        className={i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}
      />
    ));
  };

  return (
    <section className="py-16 glass-effect">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-theme-deepsky mb-4 animate-fade-in-up">What Our Clients Say</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">Read testimonials from our satisfied pet owners and their beloved companions.</p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="glass-effect rounded-2xl shadow-2xl p-8 hover-lift">
            <Quote className="text-theme-sky text-6xl mb-6 mx-auto" />
            
            <div className="text-center">
              <div className="flex justify-center mb-4">
                {renderStars(testimonials[currentTestimonial].rating)}
              </div>
              
              <p className="text-lg text-gray-700 mb-8 italic leading-relaxed">
                "{testimonials[currentTestimonial].comment}"
              </p>
              
              <div className="flex items-center justify-center space-x-4">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-theme-sky"
                />
                <div className="text-left">
                  <h4 className="font-semibold text-theme-deepsky text-lg">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-gray-600">
                    Owner of {testimonials[currentTestimonial].pet}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-theme-deepsky text-white p-3 rounded-full hover:bg-theme-sky transition-colors duration-300 shadow-lg"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-theme-deepsky text-white p-3 rounded-full hover:bg-theme-sky transition-colors duration-300 shadow-lg"
          >
            <ChevronRight size={24} />
          </button>
          
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial ? 'bg-theme-deepsky' : 'bg-theme-sky/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
