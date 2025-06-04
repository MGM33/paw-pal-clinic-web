
import React from 'react';
import MedicineCard from './MedicineCard';
import PoultryMedicineCategories from './PoultryMedicineCategories';

interface MedicineGridProps {
  petType: string;
}

const MedicineGrid: React.FC<MedicineGridProps> = ({ petType }) => {
  // For birds, show categories instead of individual medicines
  if (petType === 'birds') {
    return <PoultryMedicineCategories />;
  }

  // Generate placeholder data for 20 medicines for other pet types
  const generateMedicines = () => {
    const medicines = [];
    for (let i = 1; i <= 20; i++) {
      medicines.push({
        id: i,
        name: `Medicine ${i}`,
        description: `This is a placeholder description for medicine ${i}. This medicine is suitable for ${petType}.`,
        image: `https://source.unsplash.com/random/400x300/?medicine&sig=${i}`,
      });
    }
    return medicines;
  };

  const medicines = generateMedicines();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {medicines.map((medicine) => (
        <MedicineCard
          key={medicine.id}
          id={medicine.id}
          name={medicine.name}
          description={medicine.description}
          image={medicine.image}
          petType={petType}
        />
      ))}
    </div>
  );
};

export default MedicineGrid;
