
import React from 'react';
import { useParams } from 'react-router-dom';
import MedicineHeader from '../components/medicines/MedicineHeader';
import MedicineGrid from '../components/medicines/MedicineGrid';
import CategoryNavigation from '../components/medicines/CategoryNavigation';
import DogMedicineDrawer from '../components/medicines/DogMedicineDrawer';
import CatMedicineDrawer from '../components/medicines/CatMedicineDrawer';

const MedicineListPage = () => {
  const { petType } = useParams<{ petType: string }>();
  
  React.useEffect(() => {
    document.title = `PetCare Vet | ${getPetTypeTitle()} Medicines`;
  }, [petType]);
  
  const getPetTypeTitle = () => {
    switch (petType) {
      case 'dogs':
        return 'Dog';
      case 'cats':
        return 'Cat';
      case 'birds':
        return 'Poultry Bird';
      default:
        return 'Pet';
    }
  };

  const renderCategoryDrawer = () => {
    if (petType === 'dogs') {
      return <DogMedicineDrawer />;
    } else if (petType === 'cats') {
      return <CatMedicineDrawer />;
    }
    return null;
  };

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <MedicineHeader petType={petType || ''} />
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          {petType !== 'birds' && (
            <div className="flex justify-between items-center mb-8">
              <CategoryNavigation petType={petType || ''} currentCategory="medicines" />
              {renderCategoryDrawer()}
            </div>
          )}
          
          <MedicineGrid petType={petType || ''} />
        </div>
      </div>
    </div>
  );
};

export default MedicineListPage;
