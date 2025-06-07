
import React from 'react';
import { useParams, Link } from 'react-router-dom';

const DogVaccineDetailPage = () => {
  const { vaccineId } = useParams<{ vaccineId: string }>();
  
  React.useEffect(() => {
    document.title = `VetCare | Dog Vaccine ${vaccineId} Details`;
  }, [vaccineId]);
  
  // Dog-specific vaccine data
  const vaccineData = {
    name: `Dog Vaccine ${vaccineId}`,
    description: `This is a specialized vaccine for dogs. Vaccine ${vaccineId} is formulated specifically for canine immunization needs and provides targeted protection against various dog-specific diseases.`,
    usage: 'Administer as directed by your veterinarian. For dogs, typically given as injection. Monitor your dog for any adverse reactions after vaccination.',
    ingredients: 'Active vaccine components optimized for canine immune system. Contains dog-safe adjuvants that are specifically tested for canine use.',
    dosage: 'Dosage is calculated based on your dog\'s weight and age. Consult your veterinarian for the appropriate vaccination schedule. Generally one dose per vaccination cycle.',
    sideEffects: 'Potential side effects in dogs may include mild swelling at injection site, temporary lethargy, or mild fever. Contact your veterinarian if severe reactions occur.',
    image: `https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&h=400&fit=crop&sig=dog-vaccine-${vaccineId}`,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-theme-lightsky/30 to-theme-powder/30 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="glass-effect rounded-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src={vaccineData.image} 
                  alt={vaccineData.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="md:w-1/2 p-8">
                <h1 className="text-3xl font-bold mb-4 text-theme-deepsky">{vaccineData.name}</h1>
                <p className="text-gray-600 mb-6">{vaccineData.description}</p>
                
                <div className="space-y-4 mb-8">
                  <div>
                    <h2 className="text-xl font-semibold mb-2 text-theme-deepsky">Usage for Dogs</h2>
                    <p className="text-gray-600">{vaccineData.usage}</p>
                  </div>
                  
                  <div>
                    <h2 className="text-xl font-semibold mb-2 text-theme-deepsky">Canine-Safe Ingredients</h2>
                    <p className="text-gray-600">{vaccineData.ingredients}</p>
                  </div>
                  
                  <div>
                    <h2 className="text-xl font-semibold mb-2 text-theme-deepsky">Dosage for Dogs</h2>
                    <p className="text-gray-600">{vaccineData.dosage}</p>
                  </div>
                  
                  <div>
                    <h2 className="text-xl font-semibold mb-2 text-theme-deepsky">Side Effects in Dogs</h2>
                    <p className="text-gray-600">{vaccineData.sideEffects}</p>
                  </div>
                </div>
                
                <Link 
                  to="/dogs/vaccines" 
                  className="bg-vet-blue hover:bg-vet-darkblue text-white px-6 py-3 rounded-md font-semibold transition-colors inline-block"
                >
                  Back to Dog Vaccines
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DogVaccineDetailPage;
