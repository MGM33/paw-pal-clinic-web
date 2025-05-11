
import React from 'react';
import { useParams, Link } from 'react-router-dom';

const MedicineDetailPage = () => {
  const { petType, medicineId } = useParams<{ petType: string; medicineId: string }>();
  
  React.useEffect(() => {
    document.title = `PetCare Vet | Medicine ${medicineId} Details`;
  }, [medicineId]);
  
  // Placeholder data - this would be replaced with actual data in a real application
  const medicineData = {
    name: `Medicine ${medicineId}`,
    description: `This is a detailed description for medicine ${medicineId}. This medicine is specifically designed for ${petType} and provides various health benefits.`,
    usage: 'Administer as directed by your veterinarian. Typically given once daily with food.',
    ingredients: 'Active and inactive ingredients would be listed here. This is a placeholder for the actual ingredient list.',
    dosage: 'The recommended dosage is based on the weight of your pet. Consult your veterinarian for the appropriate dosage.',
    sideEffects: 'Potential side effects include drowsiness and decreased appetite. Contact your veterinarian if any severe reactions occur.',
    image: `https://source.unsplash.com/random/600x400/?medicine&sig=${medicineId}`,
  };
  
  const getPetColor = () => {
    switch (petType) {
      case 'dogs':
        return 'bg-vet-blue hover:bg-vet-darkblue';
      case 'cats':
        return 'bg-vet-green hover:bg-vet-darkgreen';
      case 'birds':
        return 'bg-vet-orange hover:bg-vet-darkorange';
      default:
        return 'bg-gray-800 hover:bg-gray-900';
    }
  };

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src={medicineData.image} 
                  alt={medicineData.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="md:w-1/2 p-8">
                <h1 className="text-3xl font-bold mb-4">{medicineData.name}</h1>
                <p className="text-gray-600 mb-6">{medicineData.description}</p>
                
                <div className="space-y-4 mb-8">
                  <div>
                    <h2 className="text-xl font-semibold mb-2">Usage</h2>
                    <p className="text-gray-600">{medicineData.usage}</p>
                  </div>
                  
                  <div>
                    <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
                    <p className="text-gray-600">{medicineData.ingredients}</p>
                  </div>
                  
                  <div>
                    <h2 className="text-xl font-semibold mb-2">Dosage</h2>
                    <p className="text-gray-600">{medicineData.dosage}</p>
                  </div>
                  
                  <div>
                    <h2 className="text-xl font-semibold mb-2">Side Effects</h2>
                    <p className="text-gray-600">{medicineData.sideEffects}</p>
                  </div>
                </div>
                
                <Link 
                  to={`/${petType}/medicines`} 
                  className={`${getPetColor()} text-white px-6 py-3 rounded-md font-semibold transition-colors inline-block`}
                >
                  Back to All Medicines
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicineDetailPage;
