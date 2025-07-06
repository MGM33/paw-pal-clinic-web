
import React from 'react';
import { useParams } from 'react-router-dom';
import MedicineCard from '../components/medicines/MedicineCard';
import PoultryDrawer from '../components/medicines/PoultryDrawer';

const BirdHepatoRenalTonicCategoryPage = () => {
  const { petType, categoryId } = useParams<{ petType: string; categoryId: string }>();

  React.useEffect(() => {
    document.title = 'VetCare | Hepato Renal Tonic';
  }, []);

  const medicines = [
    { id: 1, name: 'LiverGuard Pro', description: 'Advanced hepatoprotective tonic for poultry liver health.', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&h=400&fit=crop&sig=hepato1' },
    { id: 2, name: 'RenalCare Plus', description: 'Kidney support formula for optimal renal function in birds.', image: 'https://images.unsplash.com/photo-1576671081837-49000212a370?w=600&h=400&fit=crop&sig=hepato2' },
    { id: 3, name: 'HepatoRenal Max', description: 'Dual-action tonic for liver and kidney detoxification.', image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=600&h=400&fit=crop&sig=hepato3' },
    { id: 4, name: 'DetoxiVet Forte', description: 'Powerful detoxification support for poultry organs.', image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=600&h=400&fit=crop&sig=hepato4' },
    { id: 5, name: 'OrganShield Tonic', description: 'Complete organ protection and regeneration formula.', image: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=600&h=400&fit=crop&sig=hepato5' }
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-vet-orange to-vet-darkorange text-white py-12 rounded-lg mb-8">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">Hepato Renal Tonic</h1>
                <p className="text-lg opacity-90">Liver and kidney support medicines for poultry birds</p>
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
                itemType="medicines/category/hepato-renal-tonic"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BirdHepatoRenalTonicCategoryPage;
