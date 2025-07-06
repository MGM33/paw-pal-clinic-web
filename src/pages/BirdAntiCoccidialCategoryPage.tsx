
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
   {
    id: 1,
    name: 'Amprolium 20% W.S.P.',
    description:
      'Treats intestinal coccidiosis in chickens and turkeys caused by Eimeria spp.',
    image:
      'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&h=400&fit=crop&sig=anti1',
  },
  {
    id: 2,
    name: 'DICLOSOL',
    description:
      'Prevents coccidiosis in broiler chickens, turkeys, and rabbits caused by Eimeria.',
    image:
      'https://images.unsplash.com/photo-1576671081837-49000212a370?w=600&h=400&fit=crop&sig=anti2',
  },
  {
    id: 3,
    name: 'PROCOX',
    description:
      'Used to treat caecal and intestinal coccidiosis in poultry; effective against Eimeria.',
    image:
      'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&h=400&fit=crop&sig=anti3',
  },
  {
    id: 4,
    name: 'NOR-COX',
    description:
      'Treats intestinal and caecal coccidiosis in broilers and turkeys caused by Eimeria.',
    image:
      'https://images.unsplash.com/photo-1612296727714-6d1afc787330?w=600&h=400&fit=crop&sig=anti4',
  },
  {
    id: 5,
    name: 'Amprolium 20% El-Nasr',
    description:
      'Used in calves, dogs, and cats for treating coccidiosis caused by Eimeria.',
    image:
      'https://images.unsplash.com/photo-1631390723393-6fcd3b1ff9da?w=600&h=400&fit=crop&sig=anti5',
  },
  {
    id: 6,
    name: 'COCCICURE',
    description:
      'Treats coccidiosis and colibacillosis in calves, lambs, and poultry.',
    image:
      'https://images.unsplash.com/photo-1632848622851-9d0eb10f11b5?w=600&h=400&fit=crop&sig=anti6',
  },
  {
    id: 7,
    name: 'Sulphaquinoxaline Sodium',
    description:
      'Coccidiosis treatment in poultry and turkeys; also effective against enteric infections.',
    image:
      'https://images.unsplash.com/photo-1600959907703-263876a539d4?w=600&h=400&fit=crop&sig=anti7',
  },
  {
    id: 8,
    name: 'TOLTRACOX',
    description:
      'Highly effective anticoccidial for chickens and turkeys; acts on multiple Eimeria stages.',
    image:
      'https://images.unsplash.com/photo-1590706485533-674ad2c9b260?w=600&h=400&fit=crop&sig=anti8',
  },
  {
    id: 9,
    name: 'AMERIL',
    description:
      'Treats coccidiosis in broiler chickens caused by E. tenella, E. acervulina, E. maxima, etc.',
    image:
      'https://images.unsplash.com/photo-1628157588553-7f6d76f4c05e?w=600&h=400&fit=crop&sig=anti9',
  },
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
