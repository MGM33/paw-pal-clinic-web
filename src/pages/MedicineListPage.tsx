
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import MedicineHeader from '../components/medicines/MedicineHeader';
import MedicineGrid from '../components/medicines/MedicineGrid';
import CategoryNavigation from '../components/medicines/CategoryNavigation';

const MedicineListPage = () => {
  const { petType } = useParams<{ petType: string }>();
  const [selectedCategory, setSelectedCategory] = useState('all');
  
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

  const getMedicineCategories = () => {
    if (petType === 'dogs' || petType === 'cats') {
      return [
        { id: 'all', name: 'All Categories', range: null },
        { id: 'anti-inflammatories', name: 'Anti-Inflammatories', range: [1, 8] },
        { id: 'anti-parasitics', name: 'Anti-parasitics', range: [9, 15] },
        { id: 'anti-fungals', name: 'Anti-fungals', range: [16, 18] },
        { id: 'antibiotics', name: 'Antibiotics', range: [19, 29] },
        { id: 'antihistaminic', name: 'Antihistaminic', range: [30, 34] },
        { id: 'mucolytics', name: 'Mucolytics', range: [35, 38] },
        { id: 'diuretic', name: 'Diuretic', range: [39, 42] }
      ];
    }
    return [];
  };

  const categories = getMedicineCategories();

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <MedicineHeader petType={petType || ''} />
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          {petType !== 'birds' && (
            <div className="text-center mb-8">
              <CategoryNavigation petType={petType || ''} currentCategory="medicines" />
            </div>
          )}
          
          {(petType === 'dogs' || petType === 'cats') && categories.length > 0 && (
            <div className="mb-8">
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-md font-medium transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          )}
          
          <MedicineGrid petType={petType || ''} selectedCategory={selectedCategory} />
        </div>
      </div>
    </div>
  );
};

export default MedicineListPage;
