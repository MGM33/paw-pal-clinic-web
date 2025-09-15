
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
    image: 'https://i.postimg.cc/G2WPcqZh/10.jpg'
  },
  {
    id: 2,
    name: 'BUNSH',
    description: 'Used for phosphorus deficiency, infertility, anemia, and to increase egg and milk production.',
    image: 'https://i.postimg.cc/yYvJjLvg/11.jpg'
  },
  {
    id: 3,
    name: 'POWER',
    description: 'Improves immunity and promotes growth. Covers vitamin and mineral deficiencies.',
    image: 'https://i.postimg.cc/xdbc0nYM/12.jpg'
  },
  {
    id: 4,
    name: 'NEW HIGH PHOS',
    description: 'Treats mineral salt imbalances and skeletal issues, enhances egg, milk, and meat production.',
    image: 'https://i.postimg.cc/DZkm0HyD/13.jpg'
  },
  {
    id: 5,
    name: 'Mineral Salt Mixture',
    description: 'Prevents vitamin deficiencies and heat stress. Enhances fertility, immunity, and bone formation.',
    image: 'https://i.postimg.cc/Wzs36ZZw/14.jpg'
  },
  {
    id: 6,
    name: 'PRIMOVET',
    description: 'Vitamin & amino acid blend for vitality, growth, and immune support after vaccination or infection.',
    image: 'https://i.postimg.cc/PJKq6qzs/15.jpg'
  },
  {
    id: 7,
    name: 'E+Selenium',
    description: 'Treats crazy chick disease, improves fertility, egg production, immunity, and meat quality.',
    image: 'https://i.postimg.cc/sD6X7vg5/16.jpg'
  },
  {
    id: 8,
    name: 'DE-CAL-PHOS',
    description: 'Prevents rickets, improves feed conversion, fertility, and reduces egg breakage and joint issues.',
    image: 'https://i.postimg.cc/k4mXqSTP/19.jpg'
  },
  {
    id: 9,
    name: 'AD3E',
    description: 'Replaces vitamin A, D, E deficiencies and improves resistance to stress and shell quality.',
    image: 'https://i.postimg.cc/W38jVHD0/20.jpg'
  },
  {
    id: 10,
    name: 'Zymocytin',
    description: 'Digestive enzyme and amino acid mix. Enhances feed conversion, growth, and immunity.',
    image: 'https://i.postimg.cc/05txHh1s/21.jpg'
  },
  {
    id: 11,
    name: 'PHOSPHOPLUS',
    description: 'Prevents mineral deficiency, improves conversion rates, bone health, fertility, and shell quality.',
    image: 'https://i.postimg.cc/hGqqdBT9/22.jpg'
  },
  {
    id: 12,
    name: 'Multivit PLUS',
    description: 'Covers vitamin and amino acid needs, prevents rickets, improves shell and feed conversion.',
    image: 'https://i.postimg.cc/7LNjJTxk/23.jpg'
  },
  {
    id: 13,
    name: 'Tripli-Care',
    description: 'Contains A, D3, and E vitamins to support growth, bones, immune system, and fertility.',
    image: 'https://i.postimg.cc/wvfP08y4/24.jpg'
  },
  {
    id: 14,
    name: 'E VITA-SL',
    description: 'Vitamin E and Selenium antioxidant blend. Protects cell structures, boosts immunity.',
    image: 'https://i.postimg.cc/BbjzzY2S/25.jpg'
  }
];


  return (
    <div className="py-12 transparent-section">
      <div className="container mx-auto px-4">
        <div className="glass-effect text-white py-12 rounded-lg mb-8">
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

        <div className="glass-effect rounded-lg shadow-lg p-8">
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
