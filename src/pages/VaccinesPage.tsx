import React from 'react';
import { useParams } from 'react-router-dom';
import MedicineHeader from '../components/medicines/MedicineHeader';
import MedicineCard from '../components/medicines/MedicineCard';
import CategoryNavigation from '../components/medicines/CategoryNavigation';

const VaccinesPage = () => {
  const { petType } = useParams<{ petType: string }>();
  
  React.useEffect(() => {
    document.title = PetCare Vet | ${getPetTypeTitle()} Vaccines;
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
        { id: 1, name: 'Nobivac DHPPi', description: 'Nobivac DHPPi protects dogs against distemper, hepatitis, parvovirus, and parainfluenza. It helps build strong immunity against these serious viral infections.', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&sig=1' },
        { id: 2, name: 'Nobivac Lepto', description: 'Nobivac Lepto protects dogs against leptospirosis, a bacterial disease that can affect the liver and kidneys. It also helps prevent transmission to humans.', image: 'https://images.unsplash.com/photo-1576671081837-49000212a370?w=400&h=300&fit=crop&sig=2' },
        { id: 3, name: 'Nobivac Rabies', description: 'Nobivac Lepto protects dogs against leptospirosis, a bacterial disease that can affect the liver and kidneys. It also helps prevent transmission to humans.', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop&sig=3' },
       ];
    } else if (petType === 'cats') {
      return [
        { id: 1, name: 'Nobivac Tricat Trio', description: 'Nobivac Tricat Trio protects cats against feline calicivirus, herpesvirus, and panleukopenia. It helps prevent respiratory and gastrointestinal infections.', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&sig=21' },
        { id: 2, name: 'Nobivac Rabies', description: 'Nobivac Rabies provides protection against rabies, a deadly viral disease affecting the nervous system. It’s essential for both pet and public health.', image: 'https://images.unsplash.com/photo-1576671081837-49000212a370?w=400&h=300&fit=crop&sig=22' },
        { id: 3, name: 'Nobivac FeLV', description: 'Nobivac FeLV protects cats against feline leukemia virus, which can cause immune suppression and cancer. It helps reduce virus spread and serious illness.', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop&sig=23' },
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
