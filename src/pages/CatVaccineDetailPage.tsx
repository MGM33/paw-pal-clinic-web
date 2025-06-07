
import React from 'react';
import { useParams, Link } from 'react-router-dom';

const CatVaccineDetailPage = () => {
  const { vaccineId } = useParams<{ vaccineId: string }>();
  
  React.useEffect(() => {
    document.title = `VetCare | Cat Vaccine ${vaccineId} Details`;
  }, [vaccineId]);
  
  // Cat-specific vaccine data
  const vaccineData = {
    name: `Cat Vaccine ${vaccineId}`,
    description: `This is a specialized vaccine for cats. Vaccine ${vaccineId} is formulated specifically for feline immunization needs and provides targeted protection against various cat-specific diseases.`,
    usage: 'Administer as directed by your veterinarian. For cats, typically given as injection. Monitor your cat for any adverse reactions after vaccination.',
    ingredients: 'Active vaccine components optimized for feline immune system. Contains cat-safe adjuvants that are specifically tested for feline use.',
    dosage: 'Dosage is calculated based on your cat\'s weight and age. Consult your veterinarian for the appropriate vaccination schedule. Generally one dose per vaccination cycle.',
    sideEffects: 'Potential side effects in cats may include mild swelling at injection site, temporary lethargy, or mild fever. Contact your veterinarian if severe reactions occur.',
    image: `https://images.unsplash.com/photo-1574158622682-e40e69881006?w=600&h=400&fit=crop&sig=cat-vaccine-${vaccineId}`,
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
                    <h2 className="text-xl font-semibold mb-2 text-theme-deepsky">Usage for Cats</h2>
                    <p className="text-gray-600">{vaccineData.usage}</p>
                  </div>
                  
                  <div>
                    <h2 className="text-xl font-semibold mb-2 text-theme-deepsky">Feline-Safe Ingredients</h2>
                    <p className="text-gray-600">{vaccineData.ingredients}</p>
                  </div>
                  
                  <div>
                    <h2 className="text-xl font-semibold mb-2 text-theme-deepsky">Dosage for Cats</h2>
                    <p className="text-gray-600">{vaccineData.dosage}</p>
                  </div>
                  
                  <div>
                    <h2 className="text-xl font-semibold mb-2 text-theme-deepsky">Side Effects in Cats</h2>
                    <p className="text-gray-600">{vaccineData.sideEffects}</p>
                  </div>
                </div>
                
                <Link 
                  to="/cats/vaccines" 
                  className="bg-vet-green hover:bg-vet-darkgreen text-white px-6 py-3 rounded-md font-semibold transition-colors inline-block"
                >
                  Back to Cat Vaccines
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatVaccineDetailPage;
