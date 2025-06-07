
import React from 'react';
import { useParams, Link } from 'react-router-dom';

const CatMedicineDetailPage = () => {
  const { medicineId } = useParams<{ medicineId: string }>();
  
  React.useEffect(() => {
    document.title = `VetCare | Cat Medicine ${medicineId} Details`;
  }, [medicineId]);
  
  // Cat-specific medicine data
  const medicineData = {
    name: `Cat Medicine ${medicineId}`,
    description: `This is a specialized medicine for cats. Medicine ${medicineId} is formulated specifically for feline health needs and provides targeted treatment for various cat-specific conditions.`,
    usage: 'Administer as directed by your veterinarian. For cats, typically given once daily, preferably mixed with wet food. Monitor your cat for any adverse reactions.',
    ingredients: 'Active ingredients optimized for feline metabolism. Contains cat-safe compounds that are specifically tested for feline use and avoid toxic substances.',
    dosage: 'Dosage is calculated based on your cat\'s weight and age. Consult your veterinarian for the appropriate dosage. Generally 0.5-1mg per kg of body weight.',
    sideEffects: 'Potential side effects in cats may include mild lethargy, temporary loss of appetite, or minor digestive upset. Contact your veterinarian if severe reactions occur.',
    image: `https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&h=400&fit=crop&sig=cat-${medicineId}`,
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
                    <h2 className="text-xl font-semibold mb-2 text-theme-deepsky">Usage for Cats</h2>
                    <p className="text-gray-600">{medicineData.usage}</p>
                  </div>
                  
                  <div>
                    <h2 className="text-xl font-semibold mb-2 text-theme-deepsky">Feline-Safe Ingredients</h2>
                    <p className="text-gray-600">{medicineData.ingredients}</p>
                  </div>
                  
                  <div>
                    <h2 className="text-xl font-semibold mb-2 text-theme-deepsky">Dosage for Cats</h2>
                    <p className="text-gray-600">{medicineData.dosage}</p>
                  </div>
                  
                  <div>
                    <h2 className="text-xl font-semibold mb-2 text-theme-deepsky">Side Effects in Cats</h2>
                    <p className="text-gray-600">{medicineData.sideEffects}</p>
                  </div>
                </div>
                
                <Link 
                  to="/cats/medicines" 
                  className="bg-vet-green hover:bg-vet-darkgreen text-white px-6 py-3 rounded-md font-semibold transition-colors inline-block"
                >
                  Back to Cat Medicines
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatMedicineDetailPage;
