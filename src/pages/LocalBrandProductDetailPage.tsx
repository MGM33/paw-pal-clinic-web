
import React from 'react';
import { useParams, Link } from 'react-router-dom';

const LocalBrandProductDetailPage = () => {
  const { productId } = useParams<{ productId: string }>();
  
  React.useEffect(() => {
    document.title = `VetCare | Local Brand Product ${productId} Details`;
  }, [productId]);
  
  // Local brand product data - easily editable
  const getProductData = () => {
    const products = {
      '1': {
        name: 'Premium Pet Shampoo',
        description: 'Our flagship gentle, all-natural shampoo formulated with premium aloe vera and oatmeal extracts. Perfect for pets with sensitive skin and provides deep cleansing while maintaining natural skin oils.',
        price: '$19.99',
        features: [
          'All-natural ingredients',
          'Suitable for sensitive skin',
          'pH balanced formula',
          'Long-lasting fragrance',
          'Made locally with quality control'
        ],
        usage: 'Wet pet thoroughly with warm water. Apply shampoo and work into a rich lather. Massage gently into coat and skin. Rinse thoroughly with clean water.',
        ingredients: 'Purified water, coconut-derived surfactants, aloe vera extract, oatmeal protein, natural fragrance, vitamin E, preservative system.',
        benefits: 'Leaves coat soft, shiny, and manageable. Soothes irritated skin and provides long-lasting cleanliness with a fresh, natural scent.',
        image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop',
        inStock: true
      },
      '2': {
        name: 'Joint Support Supplement',
        description: 'Advanced glucosamine and chondroitin formula developed by our local veterinary team to improve mobility and support joint health in aging pets.',
        price: '$34.99',
        features: [
          'High-potency glucosamine',
          'Pure chondroitin sulfate',
          'Added MSM for flexibility',
          'Veterinarian formulated',
          'Made with local quality standards'
        ],
        usage: 'Give one tablet daily for pets under 25lbs, two tablets for pets 25-75lbs, three tablets for pets over 75lbs. Can be given with food.',
        ingredients: 'Glucosamine HCl, Chondroitin Sulfate, MSM, Vitamin C, Hyaluronic Acid, natural chicken flavor, microcrystalline cellulose.',
        benefits: 'Supports joint flexibility, reduces stiffness, promotes cartilage health, and helps maintain active lifestyle in senior pets.',
        image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=600&h=400&fit=crop',
        inStock: true
      }
    };
    
    return products[productId as keyof typeof products] || {
      name: `Local Brand Product ${productId}`,
      description: `This is our premium local brand product ${productId}. Carefully crafted with quality ingredients and designed specifically for pet health and wellness.`,
      price: '$29.99',
      features: [
        'Premium quality ingredients',
        'Locally manufactured',
        'Veterinarian approved',
        'Safe for all pets',
        'Quality guaranteed'
      ],
      usage: 'Use as directed by your veterinarian or as indicated on the product packaging.',
      ingredients: 'High-quality, pet-safe ingredients sourced locally and internationally.',
      benefits: 'Provides targeted health benefits for your pet\'s specific needs.',
      image: `https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop&sig=${productId}`,
      inStock: true
    };
  };

  const product = getProductData();

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
                <div className="flex justify-between items-start mb-4">
                  <h1 className="text-3xl font-bold text-theme-deepsky">{product.name}</h1>
                  <span className="text-3xl font-bold text-green-600">{product.price}</span>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>
                
                <div className="mb-6">
                  <h2 className="text-xl font-semibold mb-3 text-theme-deepsky">Key Features</h2>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    {product.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <span className={`inline-block px-4 py-2 rounded-full text-white font-medium ${
                    product.inStock ? 'bg-green-500' : 'bg-red-500'
                  }`}>
                    {product.inStock ? 'In Stock' : 'Out of Stock'}
                  </span>
                </div>
                
                <Link 
                  to="/our-products" 
                  className="bg-theme-deepsky hover:bg-theme-sky text-white px-6 py-3 rounded-md font-semibold transition-colors inline-block"
                >
                  Back to All Products
                </Link>
              </div>
            </div>
            
            {/* Additional Product Information */}
            <div className="p-8 border-t border-gray-200">
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-theme-deepsky">How to Use</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{product.usage}</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-theme-deepsky">Ingredients</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{product.ingredients}</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-theme-deepsky">Benefits</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{product.benefits}</p>
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
