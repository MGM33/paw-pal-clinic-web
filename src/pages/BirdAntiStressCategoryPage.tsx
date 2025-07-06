
import React from 'react';
import { useParams } from 'react-router-dom';
import PoultryDrawer from '../components/medicines/PoultryDrawer';

const BirdAntiStressCategoryPage = () => {
  const { petType, categoryId } = useParams<{ petType: string; categoryId: string }>();

  React.useEffect(() => {
    document.title = 'VetCare | Anti-stress';
  }, []);

  const medicines = [
    { id: 1, name: 'StressRelief Pro', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&h=400&fit=crop&sig=stress1' },
    { id: 2, name: 'CalmPoultry Plus', image: 'https://images.unsplash.com/photo-1576671081837-49000212a370?w=600&h=400&fit=crop&sig=stress2' },
    { id: 3, name: 'AntiStress Formula', image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=600&h=400&fit=crop&sig=stress3' },
    { id: 4, name: 'RelaxVet Solution', image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=600&h=400&fit=crop&sig=stress4' },
    { id: 5, name: 'StressFree Tonic', image: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=600&h=400&fit=crop&sig=stress5' }
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-vet-orange to-vet-darkorange text-white py-12 rounded-lg mb-8">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">Anti-stress</h1>
                <p className="text-lg opacity-90">Stress management solutions for poultry birds</p>
              </div>
              <PoultryDrawer />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {medicines.map((medicine) => (
              <div
                key={medicine.id}
                className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden"
              >
                <img
                  src={medicine.image}
                  alt={medicine.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 text-center">
                    {medicine.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BirdAntiStressCategoryPage;
