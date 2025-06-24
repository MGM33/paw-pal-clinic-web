import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const LocalBrandProductDetailPage = () => {
  useEffect(() => {
    document.title = 'VetCare | Petwell Healing Cream';
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
    image: 'https://i.postimg.cc/L4nGt33S/petwell-cream.jpg'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-theme-lightsky/30 to-theme-powder/30 py-12 flex items-center justify-center">
      <div className="max-w-5xl w-full bg-white/90 rounded-3xl shadow-xl overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover max-h-[500px]"
            />
          </div>

          <div className="md:w-1/2 p-8 flex flex-col justify-between">
            <div>
              <h1 className="text-3xl font-bold text-theme-deepsky mb-4">{product.name}</h1>
              <p className="text-gray-700 mb-6">{product.description}</p>

              <h2 className="text-xl font-semibold mb-3 text-theme-deepsky">Key Benefits</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            {/* Button Container */}
           <div className="flex items-center gap-4">
  <Link
    to="/contact"
    className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition"
  >
    To order contact us here
  </Link>
  <Link
    to="/our-products"
    className="bg-theme-deepsky hover:bg-theme-sky text-white px-6 py-3 rounded-lg font-semibold transition"
  >
    Back
  </Link>
</div>
          </div>
        </div>

        <div className="p-8 border-t border-gray-200 bg-white/80">
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
              <h3 className="text-lg font-semibold mb-3 text-theme-deepsky">Storage</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{product.storage}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocalBrandProductDetailPage;
