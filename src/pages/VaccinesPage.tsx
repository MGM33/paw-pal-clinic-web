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

  const getVaccines = () => {
    if (petType === 'dogs') {
      return [
        { id: 1, name: 'Rabies Vaccine', description: 'Essential rabies vaccination for dogs - annual booster required by law in most areas.', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&sig=1' },
        { id: 2, name: 'DHPP Core Vaccine', description: 'Combination vaccine protecting against Distemper, Hepatitis, Parvovirus, and Parainfluenza.', image: 'https://images.unsplash.com/photo-1576671081837-49000212a370?w=400&h=300&fit=crop&sig=2' },
        { id: 3, name: 'Bordetella Vaccine', description: 'Kennel cough prevention vaccine recommended for dogs in social environments.', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop&sig=3' },
       ];
    } else if (petType === 'cats') {
      return [
        { id: 1, name: 'Rabies Vaccine', description: 'Essential rabies vaccination for cats - required by law and highly effective protection.', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&sig=21' },
        { id: 2, name: 'FVRCP Core Vaccine', description: 'Combination vaccine against Feline Viral Rhinotracheitis, Calicivirus, and Panleukopenia.', image: 'https://images.unsplash.com/photo-1576671081837-49000212a370?w=400&h=300&fit=crop&sig=22' },
        { id: 3, name: 'FeLV Vaccine', description: 'Feline Leukemia Virus protection for cats with outdoor access or multi-cat households.', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop&sig=23' },
      ];
    }
    
    return [];
  };

  const vaccines = getVaccines();

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <MedicineHeader petType={petType || ''} />
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          {petType !== 'birds' && (
            <div className="text-center mb-8">
              <CategoryNavigation petType={petType || ''} currentCategory="vaccines" />
            </div>
          )}
          
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-4">{getPetTypeTitle()} Vaccines</h2>
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
                itemType="vaccines"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VaccinesPage;
