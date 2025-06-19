
import React from 'react';
import DogMedicineCard from './DogMedicineCard';
import CatMedicineCard from './CatMedicineCard';
import PoultryMedicineCategories from './PoultryMedicineCategories';

interface MedicineGridProps {
  petType: string;
  selectedCategory?: string;
}

const getCategoryRange = (category: string): number[] | null => {
  switch (category) {
    case 'anti-inflammatories':
      return Array.from({ length: 8 }, (_, i) => i + 1);
    case 'anti-parasitics':
      return Array.from({ length: 7 }, (_, i) => i + 9);
    case 'antifungals':
      return Array.from({ length: 3 }, (_, i) => i + 16);
    case 'antibiotics':
      return Array.from({ length: 9 }, (_, i) => i + 19);
    case 'antihistaminic':
      return Array.from({ length: 3 }, (_, i) => i + 28);
    case 'mucolytics':
      return Array.from({ length: 3 }, (_, i) => i + 31);
    case 'diuretic':
      return Array.from({ length: 2 }, (_, i) => i + 34);
    default:
      return null;
  }
};

const MedicineGrid: React.FC<MedicineGridProps> = ({ petType, selectedCategory = 'all' }) => {
  if (petType === 'birds') {
    return <PoultryMedicineCategories />;
  }

  const getMedicineIds = () => {
    if (selectedCategory === 'all') {
      return Array.from({ length: 30 }, (_, i) => i + 1);
    }
    return getCategoryRange(selectedCategory) || [];
  };

  const medicineIds = getMedicineIds();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {medicineIds.map((id) => (
        petType === 'dogs' ? (
          <DogMedicineCard key={id} medicineId={id.toString()} />
        ) : (
          <CatMedicineCard key={id} medicineId={id.toString()} />
        )
      ))}
    </div>
  );
};

export default MedicineGrid;
