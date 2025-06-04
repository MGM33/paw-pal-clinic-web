
import React from 'react';
import { useParams } from 'react-router-dom';
import MedicineHeader from '../components/medicines/MedicineHeader';
import MedicineCard from '../components/medicines/MedicineCard';
import CategoryNavigation from '../components/medicines/CategoryNavigation';

const VaccinesPage = () => {
  const { petType } = useParams<{ petType: string }>();
  
  React.useEffect(() => {
    document.title = `PetCare Vet | ${getPetTypeTitle()} Vaccines`;
  }, [petType]);
  
  const getPetTypeTitle = () => {
    switch (petType) {
      case 'dogs':
        return 'Dog';
      case 'cats':
        return 'Cat';
      default:
        return 'Pet';
    }
  };

  const generateVaccines = () => {
    const vaccines = [];
    for (let i = 1; i <= 20; i++) {
      vaccines.push({
        id: i,
        name: `${getPetTypeTitle()} Vaccine ${i}`,
        description: `This is a high-quality vaccine ${i} specifically designed for ${petType}. Provides essential protection against common diseases.`,
        image: `https://source.unsplash.com/random/400x300/?vaccine&sig=${i}`,
      });
    }
    return vaccines;
  };

  const vaccines = generateVaccines();

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <MedicineHeader petType={petType || ''} />
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-4">{getPetTypeTitle()} Vaccines</h2>
            <CategoryNavigation petType={petType || ''} currentCategory="vaccines" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {vaccines.map((vaccine) => (
              <MedicineCard
                key={vaccine.id}
                id={vaccine.id}
                name={vaccine.name}
                description={vaccine.description}
                image={vaccine.image}
                petType={petType || ''}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VaccinesPage;
