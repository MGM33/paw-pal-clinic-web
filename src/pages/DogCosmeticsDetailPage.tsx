
import React from 'react';
import { useParams, Link } from 'react-router-dom';

const DogCosmeticsDetailPage = () => {
  const { cosmeticId } = useParams<{ cosmeticId: string }>();
  
  React.useEffect(() => {
    document.title = `VetCare | Dog Cosmetic ${cosmeticId} Details`;
  }, [cosmeticId]);
  
  // Dog-specific cosmetic data
  const cosmeticData = {
    name: `Dog Cosmetic ${cosmeticId}`,
    description: `This is a specialized cosmetic product for dogs. Product ${cosmeticId} is formulated specifically for canine grooming needs and provides targeted care for various dog-specific cosmetic requirements.`,
    usage: 'Apply as directed on the packaging. For dogs, typically used during grooming sessions. Monitor your dog for any skin reactions.',
    ingredients: 'Natural ingredients optimized for canine skin and coat. Contains dog-safe compounds that are specifically tested for canine grooming use.',
    application: 'Application varies based on your dog\'s coat type and skin condition. Consult your groomer or veterinarian for the appropriate usage. Generally applied during bath time or grooming.',
    benefits: 'Benefits for dogs include improved coat shine, skin moisturization, and enhanced grooming experience. Helps maintain healthy skin and coat condition.',
    image: `https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=600&h=400&fit=crop&sig=dog-cosmetic-${cosmeticId}`,
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
                    <h2 className="text-xl font-semibold mb-2 text-theme-deepsky">Usage for Dogs</h2>
                    <p className="text-gray-600">{cosmeticData.usage}</p>
                  </div>
                  
                  <div>
                    <h2 className="text-xl font-semibold mb-2 text-theme-deepsky">Canine-Safe Ingredients</h2>
                    <p className="text-gray-600">{cosmeticData.ingredients}</p>
                  </div>
                  
                  <div>
                    <h2 className="text-xl font-semibold mb-2 text-theme-deepsky">Application for Dogs</h2>
                    <p className="text-gray-600">{cosmeticData.application}</p>
                  </div>
                  
                  <div>
                    <h2 className="text-xl font-semibold mb-2 text-theme-deepsky">Benefits for Dogs</h2>
                    <p className="text-gray-600">{cosmeticData.benefits}</p>
                  </div>
                </div>
                
                <Link 
                  to="/dogs/cosmetics-supplements" 
                  className="bg-vet-blue hover:bg-vet-darkblue text-white px-6 py-3 rounded-md font-semibold transition-colors inline-block"
                >
                  Back to Dog Cosmetics & Supplements
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DogCosmeticsDetailPage;
