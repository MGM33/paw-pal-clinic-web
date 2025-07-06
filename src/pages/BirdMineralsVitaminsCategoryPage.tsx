
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
  {
    id: 1,
    name: 'OMEGRAN',
    description: 'A good eggshell enhancer. Improves growth, boosts immunity, and relieves stress in birds.',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&h=400&fit=crop&sig=vitamin1'
  },
  {
    id: 2,
    name: 'BUNSH',
    description: 'Used for phosphorus deficiency, infertility, anemia, and to increase egg and milk production.',
    image: 'https://images.unsplash.com/photo-1576671081837-49000212a370?w=600&h=400&fit=crop&sig=vitamin2'
  },
  {
    id: 3,
    name: 'POWER',
    description: 'Improves immunity and promotes growth. Covers vitamin and mineral deficiencies.',
    image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=600&h=400&fit=crop&sig=vitamin3'
  },
  {
    id: 4,
    name: 'NEW HIGH PHOS',
    description: 'Treats mineral salt imbalances and skeletal issues, enhances egg, milk, and meat production.',
    image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=600&h=400&fit=crop&sig=vitamin4'
  },
  {
    id: 5,
    name: 'Mineral Salt Mixture',
    description: 'Prevents vitamin deficiencies and heat stress. Enhances fertility, immunity, and bone formation.',
    image: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=600&h=400&fit=crop&sig=vitamin5'
  },
  {
    id: 6,
    name: 'PRIMOVET',
    description: 'Vitamin & amino acid blend for vitality, growth, and immune support after vaccination or infection.',
    image: 'https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=600&h=400&fit=crop&sig=vitamin6'
  },
  {
    id: 7,
    name: 'E+Selenium',
    description: 'Treats crazy chick disease, improves fertility, egg production, immunity, and meat quality.',
    image: 'https://images.unsplash.com/photo-1501286353178-1ec881214838?w=600&h=400&fit=crop&sig=vitamin7'
  },
  {
    id: 8,
    name: 'DE-CAL-PHOS',
    description: 'Prevents rickets, improves feed conversion, fertility, and reduces egg breakage and joint issues.',
    image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=600&h=400&fit=crop&sig=vitamin8'
  },
  {
    id: 9,
    name: 'AD3E',
    description: 'Replaces vitamin A, D, E deficiencies and improves resistance to stress and shell quality.',
    image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=600&h=400&fit=crop&sig=vitamin9'
  },
  {
    id: 10,
    name: 'Zymocytin',
    description: 'Digestive enzyme and amino acid mix. Enhances feed conversion, growth, and immunity.',
    image: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=600&h=400&fit=crop&sig=vitamin10'
  },
  {
    id: 11,
    name: 'PHOSPHOPLUS',
    description: 'Prevents mineral deficiency, improves conversion rates, bone health, fertility, and shell quality.',
    image: 'https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=600&h=400&fit=crop&sig=vitamin11'
  },
  {
    id: 12,
    name: 'Multivit PLUS',
    description: 'Covers vitamin and amino acid needs, prevents rickets, improves shell and feed conversion.',
    image: 'https://images.unsplash.com/photo-1501286353178-1ec881214838?w=600&h=400&fit=crop&sig=vitamin12'
  },
  {
    id: 13,
    name: 'Tripli-Care',
    description: 'Contains A, D3, and E vitamins to support growth, bones, immune system, and fertility.',
    image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=600&h=400&fit=crop&sig=vitamin13'
  },
  {
    id: 14,
    name: 'E VITA-SL',
    description: 'Vitamin E and Selenium antioxidant blend. Protects cell structures, boosts immunity.',
    image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=600&h=400&fit=crop&sig=vitamin14'
  }
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
