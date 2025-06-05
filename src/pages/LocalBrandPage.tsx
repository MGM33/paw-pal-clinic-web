
import React from 'react';
import { Link } from 'react-router-dom';

const LocalBrandPage = () => {
  React.useEffect(() => {
    document.title = '🏥 VetCare | Our Local Brand Products';
  }, []);

  const localBrandProducts = [
    {
      id: 1,
      name: 'VetCare Premium Antiseptic',
      description: 'Professional-grade antiseptic solution for wound cleaning and disinfection.',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
      category: 'Antiseptics',
      price: '$24.99'
    },
    {
      id: 2,
      name: 'VetCare Joint Support Formula',
      description: 'Advanced joint health supplement for improved mobility and comfort.',
      image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=300&fit=crop',
      category: 'Supplements',
      price: '$32.99'
    },
    {
      id: 3,
      name: 'VetCare Digestive Aid Plus',
      description: 'Natural digestive support formula for optimal gut health and nutrition absorption.',
      image: 'https://images.unsplash.com/photo-1576671081837-49000212a370?w=400&h=300&fit=crop',
      category: 'Digestive Health',
      price: '$28.50'
    },
    {
      id: 4,
      name: 'VetCare Immune Booster Complex',
      description: 'Comprehensive immune system support with essential vitamins and minerals.',
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop',
      category: 'Immune Support',
      price: '$35.99'
    },
    {
      id: 5,
      name: 'VetCare Skin & Coat Formula',
      description: 'Premium formula for healthy skin and shiny coat maintenance with omega oils.',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop',
      category: 'Skin Care',
      price: '$29.99'
    },
    {
      id: 6,
      name: 'VetCare Pain Relief Gel',
      description: 'Topical pain relief gel for muscle and joint discomfort with natural ingredients.',
      image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop',
      category: 'Pain Management',
      price: '$22.75'
    },
    {
      id: 7,
      name: 'VetCare Eye Care Drops',
      description: 'Gentle eye drops for cleaning and soothing irritated eyes with sterile formula.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
      category: 'Eye Care',
      price: '$18.99'
    },
    {
      id: 8,
      name: 'VetCare Ear Cleaner Solution',
      description: 'Professional ear cleaning solution for optimal ear hygiene and wax removal.',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
      category: 'Ear Care',
      price: '$19.50'
    },
    {
      id: 9,
      name: 'VetCare Dental Care Gel',
      description: 'Advanced dental gel for tartar control and fresh breath with enzymatic action.',
      image: 'https://images.unsplash.com/photo-1576671081837-49000212a370?w=400&h=300&fit=crop',
      category: 'Dental Care',
      price: '$26.99'
    },
    {
      id: 10,
      name: 'VetCare Wound Healing Spray',
      description: 'Fast-acting wound healing spray with natural antibacterial properties.',
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop',
      category: 'Wound Care',
      price: '$31.25'
    },
    {
      id: 11,
      name: 'VetCare Probiotic Powder',
      description: 'High-quality probiotic powder for digestive balance and gut flora support.',
      image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=300&fit=crop',
      category: 'Probiotics',
      price: '$33.50'
    },
    {
      id: 12,
      name: 'VetCare Vitamin Complex',
      description: 'Complete vitamin and mineral supplement for overall health and vitality.',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop',
      category: 'Vitamins',
      price: '$27.99'
    },
    {
      id: 13,
      name: 'VetCare Calming Formula',
      description: 'Natural calming supplement for stress and anxiety relief during storms or travel.',
      image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop',
      category: 'Behavioral Support',
      price: '$30.75'
    },
    {
      id: 14,
      name: 'VetCare Flea & Tick Spray',
      description: 'Effective flea and tick prevention with natural ingredients and pleasant scent.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
      category: 'Parasite Control',
      price: '$25.99'
    },
    {
      id: 15,
      name: 'VetCare Deworming Tablets',
      description: 'Comprehensive deworming treatment for internal parasites with easy dosing.',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
      category: 'Parasite Control',
      price: '$23.50'
    },
    {
      id: 16,
      name: 'VetCare Recovery Supplement',
      description: 'Post-surgery recovery supplement with essential nutrients for faster healing.',
      image: 'https://images.unsplash.com/photo-1576671081837-49000212a370?w=400&h=300&fit=crop',
      category: 'Recovery Support',
      price: '$38.99'
    },
    {
      id: 17,
      name: 'VetCare Senior Pet Formula',
      description: 'Specialized nutrition support for aging pets with joint and cognitive support.',
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop',
      category: 'Senior Care',
      price: '$41.25'
    },
    {
      id: 18,
      name: 'VetCare Puppy/Kitten Starter Kit',
      description: 'Essential health support for young pets during growth with DHA and nutrients.',
      image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=300&fit=crop',
      category: 'Puppy/Kitten Care',
      price: '$34.75'
    },
    {
      id: 19,
      name: 'VetCare Allergy Relief Complex',
      description: 'Natural allergy relief formula for sensitive pets with antihistamine support.',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop',
      category: 'Allergy Support',
      price: '$36.50'
    },
    {
      id: 20,
      name: 'VetCare Emergency First Aid Kit',
      description: 'Complete first aid kit with essential veterinary supplies for emergencies.',
      image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop',
      category: 'Emergency Care',
      price: '$89.99'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-theme-lightsky/30 to-theme-powder/30">
      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="glass-effect rounded-2xl p-8 mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-theme-deepsky mb-4">
              Our Local Brand Products
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Discover our exclusive line of veterinary products, specially formulated by our team of experts 
              to provide the highest quality care for your beloved pets.
            </p>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {localBrandProducts.map((product) => (
            <div
              key={product.id}
              className="glass-effect rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover-lift"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="mb-3">
                  <span className="inline-block bg-theme-sky/20 text-theme-deepsky text-xs px-3 py-1 rounded-full font-semibold">
                    {product.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-theme-deepsky">{product.price}</span>
                  <Link
                    to={`/local-brand/products/${product.id}`}
                    className="bg-theme-deepsky hover:bg-theme-sky text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105"
                  >
                    View Details
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
