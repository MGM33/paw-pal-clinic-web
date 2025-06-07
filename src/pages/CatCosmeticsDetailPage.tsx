
import React from 'react';
import { useParams, Link } from 'react-router-dom';

const CatCosmeticsDetailPage = () => {
  const { cosmeticId } = useParams<{ cosmeticId: string }>();
  
  React.useEffect(() => {
    document.title = `VetCare | Cat Cosmetic ${cosmeticId} Details`;
  }, [cosmeticId]);
  
  // Cat-specific cosmetic data
  const cosmeticData = {
    name: `Cat Cosmetic ${cosmeticId}`,
    description: `This is a specialized cosmetic product for cats. Product ${cosmeticId} is formulated specifically for feline grooming needs and provides targeted care for various cat-specific cosmetic requirements.`,
    usage: 'Apply as directed on the packaging. For cats, typically used during grooming sessions. Monitor your cat for any skin reactions.',
    ingredients: 'Natural ingredients optimized for feline skin and coat. Contains cat-safe compounds that are specifically tested for feline grooming use.',
    application: 'Application varies based on your cat\'s coat type and skin condition. Consult your groomer or veterinarian for the appropriate usage. Generally applied during bath time or grooming.',
    benefits: 'Benefits for cats include improved coat shine, skin moisturization, and enhanced grooming experience. Helps maintain healthy skin and coat condition.',
    image: `https://images.unsplash.com/photo-1557246565-8a3d3ab5d7f6?w=600&h=400&fit=crop&sig=cat-cosmetic-${cosmeticId}`,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-theme-lightsky/30 to-theme-powder/30 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="glass-effect rounded-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src={cosmeticData.image} 
                  alt={cosmeticData.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="md:w-1/2 p-8">
                <h1 className="text-3xl font-bold mb-4 text-theme-deepsky">{cosmeticData.name}</h1>
                <p className="text-gray-600 mb-6">{cosmeticData.description}</p>
                
                <div className="space-y-4 mb-8">
                  <div>
                    <h2 className="text-xl font-semibold mb-2 text-theme-deepsky">Usage for Cats</h2>
                    <p className="text-gray-600">{cosmeticData.usage}</p>
                  </div>
                  
                  <div>
                    <h2 className="text-xl font-semibold mb-2 text-theme-deepsky">Feline-Safe Ingredients</h2>
                    <p className="text-gray-600">{cosmeticData.ingredients}</p>
                  </div>
                  
                  <div>
                    <h2 className="text-xl font-semibold mb-2 text-theme-deepsky">Application for Cats</h2>
                    <p className="text-gray-600">{cosmeticData.application}</p>
                  </div>
                  
                  <div>
                    <h2 className="text-xl font-semibold mb-2 text-theme-deepsky">Benefits for Cats</h2>
                    <p className="text-gray-600">{cosmeticData.benefits}</p>
                  </div>
                </div>
                
                <Link 
                  to="/cats/cosmetics-supplements" 
                  className="bg-vet-green hover:bg-vet-darkgreen text-white px-6 py-3 rounded-md font-semibold transition-colors inline-block"
                >
                  Back to Cat Cosmetics & Supplements
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatCosmeticsDetailPage;
