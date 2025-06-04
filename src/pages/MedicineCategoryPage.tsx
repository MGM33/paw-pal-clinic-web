
import React from 'react';
import { useParams } from 'react-router-dom';
import MedicineCard from '../components/medicines/MedicineCard';

const MedicineCategoryPage = () => {
  const { petType, categoryId } = useParams<{ petType: string; categoryId: string }>();
  
  React.useEffect(() => {
    document.title = `PetCare Vet | ${getCategoryTitle()} Medicines`;
  }, [categoryId]);
  
  const getCategoryTitle = () => {
    switch (categoryId) {
      case 'antibiotics':
        return 'Antibiotics';
      case 'anti-coccidial':
        return 'Anti-coccidial drugs';
      case 'minerals-vitamins':
        return 'Minerals & Vitamins';
      case 'anti-stress':
        return 'Anti-stress';
      case 'hepatorenal-tonics':
        return 'HepatoRenal tonics';
      case 'anti-mycotoxin':
        return 'Anti-mycotoxin';
      case 'growth-promotors':
        return 'Growth promotors';
      case 'immunostimulants':
        return 'Immunostimulants';
      case 'mucolytics-expectorants':
        return 'Mucolytics & Expectorants';
      case 'anti-clostridial':
        return 'Anti-clostridial drugs';
      default:
        return 'Medicine Category';
    }
  };

  const generateMedicines = () => {
    const medicines = [];
    for (let i = 1; i <= 20; i++) {
      medicines.push({
        id: i,
        name: `${getCategoryTitle()} Medicine ${i}`,
        description: `This is a specialized ${getCategoryTitle().toLowerCase()} medicine for poultry birds. Product ${i} in this category.`,
        image: `https://source.unsplash.com/random/400x300/?medicine&sig=${categoryId}-${i}`,
      });
    }
    return medicines;
  };

  const medicines = generateMedicines();

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-vet-orange to-vet-darkorange text-white py-12 rounded-lg mb-8">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{getCategoryTitle()}</h1>
            <p className="text-lg opacity-90">Specialized {getCategoryTitle().toLowerCase()} medicines for poultry birds</p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {medicines.map((medicine) => (
              <MedicineCard
                key={medicine.id}
                id={medicine.id}
                name={medicine.name}
                description={medicine.description}
                image={medicine.image}
                petType={petType || 'birds'}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicineCategoryPage;
