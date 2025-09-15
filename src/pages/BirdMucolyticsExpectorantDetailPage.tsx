
import React from 'react';
import { useParams, Link } from 'react-router-dom';

const BirdMucolyticsExpectorantDetailPage = () => {
  const { medicineId } = useParams<{ medicineId: string }>();
  
  React.useEffect(() => {
    document.title = `VetCare | Bird Mucolytics & Expectorants ${medicineId} Details`;
  }, [medicineId]);
  
  const medicineData = {
    name: `Bird Mucolytics & Expectorants ${medicineId}`,
    description: `This is a specialized mucolytic and expectorant medicine for poultry birds. Product ${medicineId} is formulated specifically for respiratory support in birds.`,
    usage: 'Administer as directed by your veterinarian. For poultry birds, typically given through drinking water for respiratory tract support.',
    ingredients: 'Respiratory support compounds optimized for avian use. Contains bird-safe ingredients that help clear respiratory secretions.',
    dosage: 'Dosage is calculated based on flock size and respiratory condition. Consult your veterinarian for the appropriate dosage.',
    sideEffects: 'Generally well tolerated. May cause temporary increased respiratory secretions. Contact your veterinarian if severe reactions occur.',
    image: `https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=600&h=400&fit=crop&sig=bird-mucolytics-${medicineId}`,
  };

  return (
    <div className="min-h-screen transparent-section py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="glass-effect rounded-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src={medicineData.image} 
                  alt={medicineData.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="md:w-1/2 p-8">
                <h1 className="text-3xl font-bold mb-4 text-theme-deepsky">{medicineData.name}</h1>
                <p className="text-gray-600 mb-6">{medicineData.description}</p>
                
                <div className="space-y-4 mb-8">
                  <div>
                    <h2 className="text-xl font-semibold mb-2 text-theme-deepsky">Usage for Poultry Birds</h2>
                    <p className="text-gray-600">{medicineData.usage}</p>
                  </div>
                  
                  <div>
                    <h2 className="text-xl font-semibold mb-2 text-theme-deepsky">Avian-Safe Ingredients</h2>
                    <p className="text-gray-600">{medicineData.ingredients}</p>
                  </div>
                  
                  <div>
                    <h2 className="text-xl font-semibold mb-2 text-theme-deepsky">Dosage for Birds</h2>
                    <p className="text-gray-600">{medicineData.dosage}</p>
                  </div>
                  
                  <div>
                    <h2 className="text-xl font-semibold mb-2 text-theme-deepsky">Side Effects in Poultry</h2>
                    <p className="text-gray-600">{medicineData.sideEffects}</p>
                  </div>
                </div>
                
                <Link 
                  to="/birds/medicines/category/mucolytics-expectorants" 
                  className="bg-vet-orange hover:bg-vet-darkorange text-white px-6 py-3 rounded-md font-semibold transition-colors inline-block"
                >
                  Back to Mucolytics & Expectorants Category
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BirdMucolyticsExpectorantDetailPage;
