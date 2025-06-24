import React from 'react';

const LocalBrandPage = () => {
  React.useEffect(() => {
    document.title = 'VetCare | Petwell Cream';
  }, []);

  const product = {
    name: 'Petwell Natural Wound Healing Cream',
    description:
      'Formulated to soothe, protect, and heal minor cuts, bites, and skin irritations. Safe for external use on cats and dogs.',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=500&fit=crop'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-theme-lightsky/30 to-theme-powder/30 py-16 px-4 flex items-center justify-center">
      <div className="max-w-4xl w-full glass-effect rounded-3xl shadow-2xl overflow-hidden">
        {/* Product Header */}
        <div className="text-center px-8 pt-10">
          <h1 className="text-4xl md:text-5xl font-bold text-theme-deepsky mb-4">
            {product.name}
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Product Image */}
        <div className="w-full h-[400px] overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Footer Info */}
        <div className="px-8 py-10 text-center">
          <p className="text-md text-gray-500">
            This product is proudly developed by our local brand <span className="text-theme-deepsky font-semibold">Petwell</span> using 100% natural ingredients.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LocalBrandPage;
