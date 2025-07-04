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
      title: 'WSAVA List of Essential Medicines for Cats and Dogs',
      cover: 'https://i.postimg.cc/vHq0y9bt/WASAVA-image.png',
      description: 'A comprehensive list of essential medicines for the treatment of cats and dogs.'
    },
    {
      id: 2,
      title: 'Manual of Commonly Used Drugs in Pet Practice',
      cover: 'https://i.postimg.cc/x87Nx0VM/UVAS.png',
      description: 'Prepared by DVM students, this guide lists common drugs used in pet veterinary practice.'
    },
    {
      id: 3,
      title: 'Medicines for Pets',
      cover: 'https://i.postimg.cc/dVRDdR38/medicine-for-pets.png',
      description: 'A science investigation pack to teach children (ages 9–11) how pet medicines are made.'
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
              {/* Book Cover */}
              <div className="relative h-80 w-full bg-white flex items-center justify-center overflow-hidden">
              <img
                src={book.cover}
                alt={book.title}
                className="w-full h-full object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
              
              {/* Book Details */}
              <div className="p-6 bg-white/90 backdrop-blur-sm">
                <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-theme-deepsky transition-colors duration-300">
                  {book.title}
                </h3>
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
