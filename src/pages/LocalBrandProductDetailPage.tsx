import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const LocalBrandProductDetailPage = () => {
  useEffect(() => {
    document.title = 'VetCare | Petwell Healing Cream Details';
  }, []);

  const product = {
    name: 'Petwell Natural Wound Healing Cream',
    description: 'Formulated to soothe, protect, and heal minor cuts, bites, and skin irritations. Safe for external use on cats and dogs.',
    features: [
      'Natural antibacterial and anti-inflammatory properties',
      'Promotes skin regeneration',
      'Forms a breathable protective barrier',
      'Moisturizes dry or damaged skin',
      'No synthetic chemicals – Lick-safe – Fragrance-free'
    ],
    usage: 'Apply a small amount to clean, dry skin or wound area. Use 1–2 times daily. Safe for external use on humans, dogs, and cats (if unscented and natural).',
    ingredients: [
      'Beeswax',
      'Shea Butter (unrefined)',
      'Coconut Oil (cold-pressed)',
      'Turmeric Powder (or Curcumin extract)'
    ],
    storage: 'Store in a cool, dry place away from sunlight for up to 6 months.',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop',
    inStock: true
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-theme-lightsky/30 to-theme-powder/30 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="glass-effect rounded-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-96 object-cover"
                />
              </div>

              <div className="md:w-1/2 p-8">
                <h1 className="text-3xl font-bold text-theme-deepsky mb-4">{product.name}</h1>
                <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>

                <div className="mb-6">
                  <h2 className="text-xl font-semibold mb-3 text-theme-deepsky">Key Benefits</h2>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    {product.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <span className="inline-block mb-6 px-4 py-2 rounded-full text-white font-medium bg-green-500">
                  In Stock
                </span>

                <Link
                  to="/our-products"
                  className="bg-theme-deepsky hover:bg-theme-sky text-white px-6 py-3 rounded-md font-semibold transition-colors inline-block"
                >
                  Back to All Products
                </Link>
              </div>
            </div>

            <div className="p-8 border-t border-gray-200">
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-theme-deepsky">How to Use</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{product.usage}</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-theme-deepsky">Ingredients</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                    {product.ingredients.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-theme-deepsky">Where to Store</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{product.storage}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocalBrandProductDetailPage;
