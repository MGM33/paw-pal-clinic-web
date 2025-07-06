
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
      'https://i.postimg.cc/2SbtGKr2/1.jpg',
  },
  {
    id: 2,
    name: 'DICLOSOL',
    description:
      'Prevents coccidiosis in broiler chickens, turkeys, and rabbits caused by Eimeria.',
    image:
      'https://i.postimg.cc/TwGHR2m4/2.jpg',
  },
  {
    id: 3,
    name: 'PROCOX',
    description:
      'Used to treat caecal and intestinal coccidiosis in poultry; effective against Eimeria.',
    image:
      'https://i.postimg.cc/QxP4FJ15/3.jpg',
  },
  {
    id: 4,
    name: 'NOR-COX',
    description:
      'Treats intestinal and caecal coccidiosis in broilers and turkeys caused by Eimeria.',
    image:
      'https://i.postimg.cc/k5NfhrZF/4.jpg',
  },
  {
    id: 5,
    name: 'Amprolium 20% El-Nasr',
    description:
      'Used in calves, dogs, and cats for treating coccidiosis caused by Eimeria.',
    image:
      'https://i.postimg.cc/BQdpSQfB/5.jpg',
  },
  {
    id: 6,
    name: 'COCCICURE',
    description:
      'Treats coccidiosis and colibacillosis in calves, lambs, and poultry.',
    image:
      'https://i.postimg.cc/XvgkkfGs/6.jpg',
  },
  {
    id: 7,
    name: 'Sulphaquinoxaline Sodium',
    description:
      'Coccidiosis treatment in poultry and turkeys; also effective against enteric infections.',
    image:
      'https://i.postimg.cc/cCPRLT2L/7.jpg',
  },
  {
    id: 8,
    name: 'TOLTRACOX',
    description:
      'Highly effective anticoccidial for chickens and turkeys; acts on multiple Eimeria stages.',
    image:
      'https://i.postimg.cc/TPTr1K7g/8.jpg',
  },
  {
    id: 9,
    name: 'AMERIL',
    description:
      'Treats coccidiosis in broiler chickens caused by E. tenella, E. acervulina, E. maxima, etc.',
    image:
      'https://i.postimg.cc/SxfggFHL/9.jpg',
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
