import React from 'react';
import { Link } from 'react-router-dom';

const LocalBrandPage = () => {
  React.useEffect(() => {
    document.title = 'VetCare | Local Product';
  }, []);

  const product = {
    id: 1,
    name: 'Petwell Natural Wound Healing Cream',
    description:
      'Formulated to soothe, protect, and heal minor cuts, bites, and skin irritations. Safe for external use on cats and dogs.',
    image: 'https://i.postimg.cc/L4nGt33S/petwell-cream.jpg',
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-theme-lightsky/30 to-theme-powder/30">
      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="glass-effect rounded-2xl p-8 mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-theme-deepsky mb-4">
              Our Local Product
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Discover our signature local product specially formulated to support your pet’s health.
              This unique product is crafted with care to offer gentle, natural healing for your pets.
            </p>
          </div>
        </div>

        {/* Product Card */}
        <div className="max-w-md mx-auto">
          <div className="glass-effect rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover-lift">
            <div className="h-64 overflow-hidden relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">{product.description}</p>
              <div className="flex justify-end">
                <Link
                  to={`/our-products/products/${product.id}`}
                  className="bg-theme-deepsky hover:bg-theme-sky text-white px-4 py-2 rounded-lg font-medium transition-all duration-300"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocalBrandPage;
