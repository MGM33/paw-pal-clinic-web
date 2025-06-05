
import React from 'react';
import { Link } from 'react-router-dom';

const LocalBrandPage = () => {
  React.useEffect(() => {
    document.title = '🏥 VetCare | Our Local Brand Products';
  }, []);

  const localBrandProducts = [
    {
      id: 1,
      name: 'VetCare Premium Antiseptic Solution',
      description: 'Professional-grade antiseptic solution for wound cleaning and disinfection. Safe for all pets and effective against bacteria, viruses, and fungi.',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
      price: '$24.99',
      inStock: true
    },
    {
      id: 2,
      name: 'VetCare Joint Support Formula',
      description: 'Advanced joint health supplement with glucosamine and chondroitin for improved mobility and comfort in aging pets.',
      image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=300&fit=crop',
      price: '$32.99',
      inStock: true
    },
    {
      id: 3,
      name: 'VetCare Digestive Aid Plus',
      description: 'Natural digestive support formula with probiotics and enzymes for optimal gut health and nutrition absorption.',
      image: 'https://images.unsplash.com/photo-1576671081837-49000212a370?w=400&h=300&fit=crop',
      price: '$28.50',
      inStock: true
    },
    {
      id: 4,
      name: 'VetCare Immune Booster Complex',
      description: 'Comprehensive immune system support with essential vitamins, minerals, and antioxidants for stronger immunity.',
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop',
      price: '$35.99',
      inStock: true
    },
    {
      id: 5,
      name: 'VetCare Skin & Coat Formula',
      description: 'Premium formula for healthy skin and shiny coat maintenance with omega-3 and omega-6 fatty acids.',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop',
      price: '$29.99',
      inStock: true
    },
    {
      id: 6,
      name: 'VetCare Pain Relief Gel',
      description: 'Topical pain relief gel for muscle and joint discomfort with natural anti-inflammatory ingredients.',
      image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop',
      price: '$22.75',
      inStock: true
    },
    {
      id: 7,
      name: 'VetCare Eye Care Drops',
      description: 'Gentle eye drops for cleaning and soothing irritated eyes with sterile saline formula and lubricants.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
      price: '$18.99',
      inStock: true
    },
    {
      id: 8,
      name: 'VetCare Ear Cleaner Solution',
      description: 'Professional ear cleaning solution for optimal ear hygiene, wax removal, and infection prevention.',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
      price: '$19.50',
      inStock: true
    },
    {
      id: 9,
      name: 'VetCare Dental Care Gel',
      description: 'Advanced dental gel for tartar control and fresh breath with enzymatic action and natural mint flavor.',
      image: 'https://images.unsplash.com/photo-1576671081837-49000212a370?w=400&h=300&fit=crop',
      price: '$26.99',
      inStock: false
    },
    {
      id: 10,
      name: 'VetCare Wound Healing Spray',
      description: 'Fast-acting wound healing spray with natural antibacterial properties and growth factors.',
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop',
      price: '$31.25',
      inStock: true
    },
    {
      id: 11,
      name: 'VetCare Probiotic Powder',
      description: 'High-quality probiotic powder with 10 billion CFU for digestive balance and gut flora support.',
      image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=300&fit=crop',
      price: '$33.50',
      inStock: true
    },
    {
      id: 12,
      name: 'VetCare Vitamin Complex',
      description: 'Complete vitamin and mineral supplement for overall health, vitality, and energy support.',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop',
      price: '$27.99',
      inStock: true
    },
    {
      id: 13,
      name: 'VetCare Calming Formula',
      description: 'Natural calming supplement with L-theanine and chamomile for stress and anxiety relief during storms or travel.',
      image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop',
      price: '$30.75',
      inStock: true
    },
    {
      id: 14,
      name: 'VetCare Flea & Tick Prevention Spray',
      description: 'Effective flea and tick prevention with natural essential oils and safe, non-toxic ingredients.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
      price: '$25.99',
      inStock: true
    },
    {
      id: 15,
      name: 'VetCare Deworming Tablets',
      description: 'Comprehensive deworming treatment for internal parasites with easy-to-give flavored tablets.',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
      price: '$23.50',
      inStock: false
    },
    {
      id: 16,
      name: 'VetCare Recovery Supplement',
      description: 'Post-surgery recovery supplement with essential nutrients, proteins, and healing compounds for faster recovery.',
      image: 'https://images.unsplash.com/photo-1576671081837-49000212a370?w=400&h=300&fit=crop',
      price: '$38.99',
      inStock: true
    },
    {
      id: 17,
      name: 'VetCare Senior Pet Formula',
      description: 'Specialized nutrition support for aging pets with joint support, cognitive enhancement, and heart health.',
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop',
      price: '$41.25',
      inStock: true
    },
    {
      id: 18,
      name: 'VetCare Puppy/Kitten Starter Kit',
      description: 'Essential health support for young pets during growth with DHA, calcium, and essential nutrients.',
      image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=300&fit=crop',
      price: '$34.75',
      inStock: true
    },
    {
      id: 19,
      name: 'VetCare Allergy Relief Complex',
      description: 'Natural allergy relief formula for sensitive pets with antihistamine support and immune modulation.',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop',
      price: '$36.50',
      inStock: true
    },
    {
      id: 20,
      name: 'VetCare Emergency First Aid Kit',
      description: 'Complete first aid kit with essential veterinary supplies, bandages, antiseptics, and emergency medications.',
      image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop',
      price: '$89.99',
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
              Our Local Brand Products
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Discover our exclusive line of veterinary products, specially formulated by our team of experts 
              to provide the highest quality care for your beloved pets. Each product is crafted with premium 
              ingredients and backed by years of veterinary expertise.
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
                    to={`/local-brand/products/${product.id}`}
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
