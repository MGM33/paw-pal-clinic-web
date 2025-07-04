
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';

const ResourcesPage = () => {
  useEffect(() => {
    document.title = 'VetCare | Resources';
  }, []);

  const books = [
    {
      id: 1,
      title: 'Veterinary Medicine Handbook',
      author: 'Dr. Sarah Johnson',
      cover: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=1000&auto=format&fit=crop',
      description: 'Comprehensive guide to modern veterinary practices and treatments.'
    },
    {
      id: 2,
      title: 'Small Animal Internal Medicine',
      author: 'Dr. Michael Roberts',
      cover: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop',
      description: 'Essential reference for diagnosing and treating small animals.'
    },
    {
      id: 3,
      title: 'Poultry Health Management',
      author: 'Dr. Emily Chen',
      cover: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=1000&auto=format&fit=crop',
      description: 'Complete guide to maintaining healthy poultry populations.'
    },
    {
      id: 4,
      title: 'Veterinary Pharmacology',
      author: 'Dr. David Wilson',
      cover: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1000&auto=format&fit=crop',
      description: 'Understanding drug mechanisms and therapeutic applications.'
    },
    {
      id: 5,
      title: 'Animal Nutrition Fundamentals',
      author: 'Dr. Lisa Martinez',
      cover: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=1000&auto=format&fit=crop',
      description: 'Nutritional requirements and feeding strategies for animals.'
    },
    {
      id: 6,
      title: 'Veterinary Surgery Techniques',
      author: 'Dr. James Thompson',
      cover: 'https://images.unsplash.com/photo-1520637836862-4d197d17c24a?q=80&w=1000&auto=format&fit=crop',
      description: 'Modern surgical procedures and post-operative care.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-theme-lightsky/30 to-theme-powder/30">
      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="glass-effect rounded-2xl p-8 mb-8">
            <div className="flex justify-center mb-4">
              <BookOpen size={48} className="text-theme-deepsky" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-theme-deepsky mb-4">
              Resources
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Our comprehensive library of veterinary resources and reference materials. 
              These books form the foundation of knowledge that guides our practice and expertise.
            </p>
          </div>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {books.map((book) => (
            <Link
              key={book.id}
              to={`/resources/books/${book.id}`}
              className="group bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              {/* Book Cover with proper book dimensions */}
              <div className="relative h-80 w-full bg-gradient-to-b from-gray-100 to-gray-200 overflow-hidden">
                <img
                  src={book.cover}
                  alt={book.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
              
              {/* Book Details */}
              <div className="p-6 bg-white/90 backdrop-blur-sm">
                <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-theme-deepsky transition-colors duration-300">
                  {book.title}
                </h3>
                <p className="text-sm text-gray-600 mb-2 font-medium">
                  by {book.author}
                </p>
                <p className="text-sm text-gray-600 line-clamp-3">
                  {book.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;
