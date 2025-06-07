
import React from 'react';
import { useParams, Link } from 'react-router-dom';

const DogMedicineDetailPage = () => {
  const { medicineId } = useParams<{ medicineId: string }>();
  
  React.useEffect(() => {
    document.title = `VetCare | Dog Medicine ${medicineId} Details`;
  }, [medicineId]);
  
  // Dog-specific medicine data
  const medicineData = {
    name: `Dog Medicine ${medicineId}`,
    description: `This is a specialized medicine for dogs. Medicine ${medicineId} is formulated specifically for canine health needs and provides targeted treatment for various dog-specific conditions.`,
    usage: 'Administer as directed by your veterinarian. For dogs, typically given once daily with food. Monitor your dog for any adverse reactions.',
    ingredients: 'Active ingredients optimized for canine metabolism. Contains dog-safe compounds that are specifically tested for canine use.',
    dosage: 'Dosage is calculated based on your dog\'s weight and age. Consult your veterinarian for the appropriate dosage. Generally 1-2mg per kg of body weight.',
    sideEffects: 'Potential side effects in dogs may include mild drowsiness, decreased appetite, or temporary digestive upset. Contact your veterinarian if severe reactions occur.',
    image: `https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600&h=400&fit=crop&sig=dog-${medicineId}`,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-theme-lightsky/30 to-theme-powder/30 py-12">
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
                    <h2 className="text-xl font-semibold mb-2 text-theme-deepsky">Usage for Dogs</h2>
                    <p className="text-gray-600">{medicineData.usage}</p>
                  </div>
                  
                  <div>
                    <h2 className="text-xl font-semibold mb-2 text-theme-deepsky">Canine-Safe Ingredients</h2>
                    <p className="text-gray-600">{medicineData.ingredients}</p>
                  </div>
                  
                  <div>
                    <h2 className="text-xl font-semibold mb-2 text-theme-deepsky">Dosage for Dogs</h2>
                    <p className="text-gray-600">{medicineData.dosage}</p>
                  </div>
                  
                  <div>
                    <h2 className="text-xl font-semibold mb-2 text-theme-deepsky">Side Effects in Dogs</h2>
                    <p className="text-gray-600">{medicineData.sideEffects}</p>
                  </div>
                </div>
                
                <Link 
                  to="/dogs/medicines" 
                  className="bg-vet-blue hover:bg-vet-darkblue text-white px-6 py-3 rounded-md font-semibold transition-colors inline-block"
                >
                  Back to Dog Medicines
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DogMedicineDetailPage;
