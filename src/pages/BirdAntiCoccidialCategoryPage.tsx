
import React from 'react';
import { useParams } from 'react-router-dom';
import MedicineCard from '../components/medicines/MedicineCard';
import PoultryDrawer from '../components/medicines/PoultryDrawer';

const BirdAntiCoccidialCategoryPage = () => {
  const { petType, categoryId } = useParams<{ petType: string; categoryId: string }>();

  React.useEffect(() => {
    document.title = 'VetCare | Anti-coccidial Drugs';
  }, []);

  const medicines = [
    { id: 1, name: 'Amprolium 20%', description: 'Treatment of intestinal coccidiosis in chickens and turkeys.', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&h=400&fit=crop&sig=anticoccidial1' },
    { id: 2, name: 'DICLOSOL', description: 'Prevention of coccidiosis in broiler chickens and turkeys.', image: 'https://images.unsplash.com/photo-1576671081837-49000212a370?w=600&h=400&fit=crop&sig=anticoccidial2' },
    { id: 3, name: 'PROCOX', description: 'Effective treatment for caecal and intestinal coccidiosis.', image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=600&h=400&fit=crop&sig=anticoccidial3' },
    { id: 4, name: 'Toltrazuril Plus', description: 'Advanced anti-coccidial for severe coccidiosis cases.', image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=600&h=400&fit=crop&sig=anticoccidial4' },
    { id: 5, name: 'Coccidiosan Pro', description: 'Broad-spectrum anti-coccidial for poultry flocks.', image: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=600&h=400&fit=crop&sig=anticoccidial5' },
    { id: 6, name: 'DiclazVet Formula', description: 'Preventive treatment against multiple Eimeria species.', image: 'https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=600&h=400&fit=crop&sig=anticoccidial6' },
    { id: 7, name: 'CocciGuard Max', description: 'Maximum protection against coccidiosis outbreaks.', image: 'https://images.unsplash.com/photo-1501286353178-1ec881214838?w=600&h=400&fit=crop&sig=anticoccidial7' },
    { id: 8, name: 'SalinomycinPlus', description: 'Ionophore-based anti-coccidial for broiler chickens.', image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=600&h=400&fit=crop&sig=anticoccidial8' }
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-vet-orange to-vet-darkorange text-white py-12 rounded-lg mb-8">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">Anti-coccidial Drugs</h1>
                <p className="text-lg opacity-90">Prevention and treatment of coccidiosis in poultry birds</p>
              </div>
              <PoultryDrawer />
            </div>
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
                itemType="medicines/category/anti-coccidial"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BirdAntiCoccidialCategoryPage;
