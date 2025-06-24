import React from 'react';
import { Link } from 'react-router-dom';

const LocalBrandPage = () => {
  React.useEffect(() => {
    document.title = '🏥 VetCare | Our Products';
  }, []);

  const ourProducts = [
    {
      id: 1,
      name: 'Petwell Natural Wound Healing Cream',
      description: 'Formulated to soothe, protect, and heal minor cuts, bites, and skin irritations. Safe for external use on cats and dogs.',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
      inStock: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-theme-lightsky/30 to-theme-powder/30">
      <div className="container mx-auto px-4 py-12">
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
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default LocalBrandPage;
