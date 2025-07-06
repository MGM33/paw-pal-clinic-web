
import React from 'react';
import { useParams } from 'react-router-dom';
import MedicineCard from '../components/medicines/MedicineCard';
import PoultryDrawer from '../components/medicines/PoultryDrawer';

const BirdMineralsVitaminsCategoryPage = () => {
  const { petType, categoryId } = useParams<{ petType: string; categoryId: string }>();

  React.useEffect(() => {
    document.title = 'VetCare | Minerals & Vitamins & Growth Promoters';
  }, []);

  const medicines = [
    { id: 1, name: 'VitaGrow Plus', description: 'Complete vitamin and mineral supplement for optimal poultry growth.', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&h=400&fit=crop&sig=vitamins1' },
    { id: 2, name: 'PoultryMin Essential', description: 'Essential minerals for bone development and egg production.', image: 'https://images.unsplash.com/photo-1576671081837-49000212a370?w=600&h=400&fit=crop&sig=vitamins2' },
    { id: 3, name: 'GrowthMax Pro', description: 'Advanced growth promoter for faster weight gain in broilers.', image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=600&h=400&fit=crop&sig=vitamins3' },
    { id: 4, name: 'CalciPlus Forte', description: 'Calcium and phosphorus supplement for strong shell formation.', image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=600&h=400&fit=crop&sig=vitamins4' },
    { id: 5, name: 'AviVit Complex', description: 'Multi-vitamin complex for enhanced immune system in poultry.', image: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=600&h=400&fit=crop&sig=vitamins5' },
    { id: 6, name: 'FeatherGlow Supplement', description: 'Improves feather quality and overall appearance.', image: 'https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=600&h=400&fit=crop&sig=vitamins6' },
    { id: 7, name: 'EggShell Optimizer', description: 'Specialized formula for improved egg shell thickness.', image: 'https://images.unsplash.com/photo-1501286353178-1ec881214838?w=600&h=400&fit=crop&sig=vitamins7' },
    { id: 8, name: 'BroilerBoost Premium', description: 'Premium growth promoter for commercial broiler production.', image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=600&h=400&fit=crop&sig=vitamins8' },
    { id: 9, name: 'LayerVit Plus', description: 'Vitamin supplement specifically designed for laying hens.', image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=600&h=400&fit=crop&sig=vitamins9' },
    { id: 10, name: 'ZincPro Poultry', description: 'Zinc supplement for improved immunity and growth.', image: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=600&h=400&fit=crop&sig=vitamins10' },
    { id: 11, name: 'IronMax Formula', description: 'Iron supplement to prevent anemia in poultry flocks.', image: 'https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=600&h=400&fit=crop&sig=vitamins11' },
    { id: 12, name: 'SeleniumPlus Guard', description: 'Selenium supplement for antioxidant protection.', image: 'https://images.unsplash.com/photo-1501286353178-1ec881214838?w=600&h=400&fit=crop&sig=vitamins12' },
    { id: 13, name: 'VitaE Concentrate', description: 'Vitamin E concentrate for reproductive health in breeders.', image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=600&h=400&fit=crop&sig=vitamins13' },
    { id: 14, name: 'MineralMix Complete', description: 'Complete mineral mixture for all-round poultry health.', image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=600&h=400&fit=crop&sig=vitamins14' }
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-vet-orange to-vet-darkorange text-white py-12 rounded-lg mb-8">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">Minerals & Vitamins & Growth Promoters</h1>
                <p className="text-lg opacity-90">Essential nutrients and growth enhancement for poultry birds</p>
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
                itemType="medicines/category/minerals-vitamins"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BirdMineralsVitaminsCategoryPage;
