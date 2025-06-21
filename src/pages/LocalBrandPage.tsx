
import React from 'react';
import { Link } from 'react-router-dom';

const LocalBrandPage = () => {
  React.useEffect(() => {
    document.title = '🏥 VetCare | Our Products';
  }, []);

  // 30 product placeholders that can be easily edited
  const ourProducts = [
    {
      id: 1,
      name: 'Premium Pet Shampoo',
      description: 'Gentle, all-natural shampoo for sensitive skin with aloe vera and oatmeal extracts.',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
      price: '$19.99',
      inStock: true
    },
    {
      id: 2,
      name: 'Joint Support Supplement',
      description: 'Advanced glucosamine and chondroitin formula for improved mobility and joint health.',
      image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=300&fit=crop',
      price: '$34.99',
      inStock: true
    },
    {
      id: 3,
      name: 'Digestive Health Formula',
      description: 'Probiotic blend to support healthy digestion and nutrient absorption.',
      image: 'https://images.unsplash.com/photo-1576671081837-49000212a370?w=400&h=300&fit=crop',
      price: '$28.50',
      inStock: true
    },
    {
      id: 4,
      name: 'Immune System Booster',
      description: 'Natural immune support with essential vitamins and antioxidants.',
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop',
      price: '$31.99',
      inStock: true
    },
    {
      id: 5,
      name: 'Skin & Coat Oil',
      description: 'Omega-rich formula for healthy skin and shiny coat maintenance.',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop',
      price: '$25.75',
      inStock: true
    },
    {
      id: 6,
      name: 'Pain Relief Gel',
      description: 'Topical pain relief for muscle and joint discomfort with natural ingredients.',
      image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop',
      price: '$22.99',
      inStock: true
    },
    {
      id: 7,
      name: 'Eye Care Drops',
      description: 'Gentle eye drops for cleaning and soothing irritated eyes.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
      price: '$18.50',
      inStock: true
    },
    {
      id: 8,
      name: 'Ear Cleaning Solution',
      description: 'Professional ear cleaner for optimal hygiene and wax removal.',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
      price: '$16.99',
      inStock: true
    },
    {
      id: 9,
      name: 'Dental Care Gel',
      description: 'Enzymatic dental gel for tartar control and fresh breath.',
      image: 'https://images.unsplash.com/photo-1576671081837-49000212a370?w=400&h=300&fit=crop',
      price: '$24.99',
      inStock: false
    },
    {
      id: 10,
      name: 'Wound Healing Spray',
      description: 'Fast-acting wound care with antibacterial properties.',
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop',
      price: '$29.50',
      inStock: true
    },
    {
      id: 11,
      name: 'Probiotic Powder',
      description: 'High-potency probiotic powder for digestive balance.',
      image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=300&fit=crop',
      price: '$32.99',
      inStock: true
    },
    {
      id: 12,
      name: 'Multivitamin Complex',
      description: 'Complete vitamin and mineral supplement for overall health.',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop',
      price: '$27.50',
      inStock: true
    },
    {
      id: 13,
      name: 'Calming Treats',
      description: 'Natural calming treats with chamomile and L-theanine.',
      image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop',
      price: '$21.99',
      inStock: true
    },
    {
      id: 14,
      name: 'Flea Prevention Spray',
      description: 'Natural flea and tick prevention with essential oils.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
      price: '$23.75',
      inStock: true
    },
    {
      id: 15,
      name: 'Deworming Tablets',
      description: 'Effective deworming treatment with easy-to-give tablets.',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
      price: '$19.99',
      inStock: false
    },
    {
      id: 16,
      name: 'Recovery Supplement',
      description: 'Post-surgery recovery support with essential nutrients.',
      image: 'https://images.unsplash.com/photo-1576671081837-49000212a370?w=400&h=300&fit=crop',
      price: '$36.99',
      inStock: true
    },
    {
      id: 17,
      name: 'Senior Pet Formula',
      description: 'Specialized nutrition for aging pets with joint and cognitive support.',
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop',
      price: '$39.50',
      inStock: true
    },
    {
      id: 18,
      name: 'Puppy Growth Formula',
      description: 'Essential nutrients for healthy puppy development.',
      image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=300&fit=crop',
      price: '$33.25',
      inStock: true
    },
    {
      id: 19,
      name: 'Allergy Relief Tablets',
      description: 'Natural allergy relief for sensitive pets.',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop',
      price: '$35.99',
      inStock: true
    },
    {
      id: 20,
      name: 'First Aid Kit',
      description: 'Complete first aid kit with essential veterinary supplies.',
      image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop',
      price: '$84.99',
      inStock: true
    },
    {
      id: 21,
      name: 'Breath Freshening Spray',
      description: 'Instant breath freshener with antibacterial properties.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
      price: '$14.99',
      inStock: true
    },
    {
      id: 22,
      name: 'Nail Care Solution',
      description: 'Complete nail care system for healthy paws.',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
      price: '$17.50',
      inStock: true
    },
    {
      id: 23,
      name: 'Stress Relief Diffuser',
      description: 'Calming pheromone diffuser for anxious pets.',
      image: 'https://images.unsplash.com/photo-1576671081837-49000212a370?w=400&h=300&fit=crop',
      price: '$42.99',
      inStock: true
    },
    {
      id: 24,
      name: 'Hip & Joint Chews',
      description: 'Delicious chews with glucosamine for joint health.',
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop',
      price: '$29.99',
      inStock: false
    },
    {
      id: 25,
      name: 'Liver Support Formula',
      description: 'Natural liver detox and support supplement.',
      image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=300&fit=crop',
      price: '$38.75',
      inStock: true
    },
    {
      id: 26,
      name: 'Heart Health Support',
      description: 'Cardiovascular support with CoQ10 and taurine.',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop',
      price: '$41.50',
      inStock: true
    },
    {
      id: 27,
      name: 'Kidney Support Powder',
      description: 'Gentle kidney support formula for optimal function.',
      image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop',
      price: '$34.25',
      inStock: true
    },
    {
      id: 28,
      name: 'Energy Boost Treats',
      description: 'Natural energy treats with B-vitamins and ginseng.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
      price: '$26.99',
      inStock: true
    },
    {
      id: 29,
      name: 'Cognitive Support Formula',
      description: 'Brain health support for senior pets with omega-3.',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
      price: '$37.99',
      inStock: true
    },
    {
      id: 30,
      name: 'Complete Wellness Kit',
      description: 'Comprehensive health kit with multiple supplements.',
      image: 'https://images.unsplash.com/photo-1576671081837-49000212a370?w=400&h=300&fit=crop',
      price: '$125.99',
      inStock: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-theme-lightsky/30 to-theme-powder/30">
      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="glass-effect rounded-2xl p-8 mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-theme-deepsky mb-4">
              Our Products
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Discover our exclusive collection of premium pet care products. Each item is carefully 
              selected and formulated to provide the highest quality care for your beloved companions.
            </p>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {ourProducts.map((product) => (
            <div
              key={product.id}
              className="glass-effect rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover-lift"
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                {!product.inStock && (
                  <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                    Out of Stock
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-theme-deepsky">{product.price}</span>
                  <Link
                    to={`/our-products/products/${product.id}`}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 ${
                      product.inStock 
                        ? 'bg-theme-deepsky hover:bg-theme-sky text-white' 
                        : 'bg-gray-400 text-gray-200 cursor-not-allowed'
                    }`}
                  >
                    {product.inStock ? 'View Details' : 'Unavailable'}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LocalBrandPage;
