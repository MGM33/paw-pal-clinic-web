
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
  {
    id: 1,
    name: 'Protech',
    description: 'Diuretic and liver stimulant. Used in gout, Gambier disease, immune stimulation, and after sulfa or antibiotic treatments.',
    image: 'https://i.postimg.cc/dV2xgTZy/26.jpg'
  },
  {
    id: 2,
    name: 'RUN-X',
    description: 'Potent liver tonic and diuretic. Helpful in infections (bacterial, viral, fungal), vitamin deficiencies, stress, and dehydration.',
    image: 'https://i.postimg.cc/8zGSFGhL/27.jpg'
  },
  {
    id: 3,
    name: 'R.N.X',
    description: 'Flushes kidneys, prevents stone formation and vitamin B deficiency. Supports immunity, growth, and reduces stress symptoms.',
    image: 'https://i.postimg.cc/hPTnPv7S/28.jpg'
  },
  {
    id: 4,
    name: 'HEPARENOL',
    description: 'Enhances liver and intestinal function for better digestion and toxin elimination during intense production periods.',
    image: 'https://i.postimg.cc/JhKdzVq7/29.jpg'
  },
  {
    id: 5,
    name: 'Mega Beial',
    description: 'Liver protection, detox support, improves metabolism and liver enzymes, enhances weight gain and disease resistance.',
    image: 'https://i.postimg.cc/Dz7Mhy1Y/30.jpg'
  }
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
