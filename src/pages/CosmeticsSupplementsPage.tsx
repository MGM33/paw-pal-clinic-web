
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import MedicineHeader from '../components/medicines/MedicineHeader';
import MedicineCard from '../components/medicines/MedicineCard';
import CategoryNavigation from '../components/medicines/CategoryNavigation';

const CosmeticsSupplementsPage = () => {
  const { petType } = useParams<{ petType: string }>();
  const [activeCategory, setActiveCategory] = useState('all');
  
  React.useEffect(() => {
    document.title = `PetCare Vet | ${getPetTypeTitle()} Supplements & External Drugs`;
  }, [petType]);
  
  const getPetTypeTitle = () => {
    switch (petType) {
      case 'dogs':
        return 'Dog';
      case 'cats':
        return 'Cat';
      default:
        return 'Pet';
    }
  };

  const getProducts = () => {
    if (petType === 'dogs') {
      return [
        { id: 1, name: 'Primigo A-Z Plus Canine Multivitamin', description: 'A comprehensive multivitamin supplement designed to support nutritional needs, growth, pregnancy, lactation, and coat health in dogs.', image: 'https://i.postimg.cc/RhtdNBCx/Picture1.jpg', category: 'supplements' },
        { id: 2, name: 'Omegold', description: 'Soft gelatin capsules designed to support cardiovascular health, energy production, male reproductive health, and antioxidant support.', image: 'https://i.postimg.cc/8zpdVWvS/Picture2.jpg', category: 'supplements' },
        { id: 3, name: 'Forvet Omega Forte', description: 'Liquid supplement to promote healthy coat, skin, and overall well-being in dogs.', image: 'https://i.postimg.cc/kgYS3H9Q/Picture3.jpg', category: 'supplements' },
        { id: 4, name: 'Canina Cat-Vitamin Tabs', description: 'Chewable vitamin tablets designed to prevent deficiencies and support overall health in cats.', image: 'https://i.postimg.cc/mZStWnyP/Picture4.png', category: 'supplements' },
        { id: 5, name: 'Guard Plus Multi-Vitamin', description: 'Liquid vitamin supplement designed to support immune system, appetite, nervous system, growth, and lactation.', image: 'https://i.postimg.cc/T1PG6tTb/Picture5.jpg', category: 'supplements' },
        { id: 6, name: 'Covalent Veta Zinc', description: 'Oral liquid solution to enhance general health, skin, immune function, and reproductive health in pets.', image: 'https://i.postimg.cc/SN2Ff2Rm/Picture6.jpg', category: 'supplements' },
        { id: 7, name: 'Max Pet', description: 'Powder supplement with chicken flavor supporting immune function, skin health, joints, and vitality.', image: 'https://i.postimg.cc/Bn33ZZZs/Picture7.jpg', category: 'supplements' },
        { id: 8, name: 'Primigo Boost Canine', description: 'Chewable tablets and palatable paste supporting immune function, oxidative protection, and tissue health.', image: 'https://i.postimg.cc/0y9gRtZy/Picture8.jpg', category: 'supplements' },
        { id: 9, name: 'REVOLUTION', description: 'Topical parasiticide for dogs & cats.', image: 'https://i.postimg.cc/y88fy2vc/Picture9.jpg', category: 'external' },
        { id: 10, name: 'FRONTLINE', description: 'Topical parasiticide for dogs & cats.', image: 'https://i.postimg.cc/1Xy05Ndw/Picture10.jpg', category: 'external' },
        { id: 11, name: 'Pti Fipet Plus Topical Spot-on', description: 'Works as an insecticide and kills parasites.', image: 'https://i.postimg.cc/CLPCS5sn/Picture11.jpg', category: 'external' },
        { id: 12, name: 'BARS', description: 'To treat and prevent infestations of fleas, ticks, lice, and various mites, including sarcoptic mange and ear mites.', image: 'https://i.postimg.cc/9MYTSQfM/Picture12.jpg', category: 'external' },
        { id: 13, name: 'BRAVECTO', description: 'An ectoparasiticide.', image: 'https://i.postimg.cc/SRZ9S1Cb/Picture13.jpg', category: 'external' },
        { id: 14, name: 'SIMPARICA', description: 'Treat and prevent flea and tick infestations in dogs.', image: 'https://i.postimg.cc/Y9ML1Bxw/Picture14.jpg', category: 'external' },
      ];
    } else if (petType === 'cats') {
      return [
         { id: 1, name: 'Primigo A-Z Plus Canine Multivitamin', description: 'A comprehensive multivitamin supplement designed to support nutritional needs, growth, pregnancy, lactation, and coat health in dogs.', image: 'https://i.postimg.cc/RhtdNBCx/Picture1.jpg', category: 'supplements' },
        { id: 2, name: 'Omegold', description: 'Soft gelatin capsules designed to support cardiovascular health, energy production, male reproductive health, and antioxidant support.', image: 'https://i.postimg.cc/8zpdVWvS/Picture2.jpg', category: 'supplements' },
        { id: 3, name: 'Forvet Omega Forte', description: 'Liquid supplement to promote healthy coat, skin, and overall well-being in dogs.', image: 'https://i.postimg.cc/kgYS3H9Q/Picture3.jpg', category: 'supplements' },
        { id: 4, name: 'Canina Cat-Vitamin Tabs', description: 'Chewable vitamin tablets designed to prevent deficiencies and support overall health in cats.', image: 'https://i.postimg.cc/mZStWnyP/Picture4.png', category: 'supplements' },
        { id: 5, name: 'Guard Plus Multi-Vitamin', description: 'Liquid vitamin supplement designed to support immune system, appetite, nervous system, growth, and lactation.', image: 'https://i.postimg.cc/T1PG6tTb/Picture5.jpg', category: 'supplements' },
        { id: 6, name: 'Covalent Veta Zinc', description: 'Oral liquid solution to enhance general health, skin, immune function, and reproductive health in pets.', image: 'https://i.postimg.cc/SN2Ff2Rm/Picture6.jpg', category: 'supplements' },
        { id: 7, name: 'Max Pet', description: 'Powder supplement with chicken flavor supporting immune function, skin health, joints, and vitality.', image: 'https://i.postimg.cc/Bn33ZZZs/Picture7.jpg', category: 'supplements' },
        { id: 8, name: 'Primigo Boost Canine', description: 'Chewable tablets and palatable paste supporting immune function, oxidative protection, and tissue health.', image: 'https://i.postimg.cc/0y9gRtZy/Picture8.jpg', category: 'supplements' },
        { id: 9, name: 'REVOLUTION', description: 'Topical parasiticide for dogs & cats.', image: 'https://i.postimg.cc/y88fy2vc/Picture9.jpg', category: 'external' },
        { id: 10, name: 'FRONTLINE', description: 'Topical parasiticide for dogs & cats.', image: 'https://i.postimg.cc/1Xy05Ndw/Picture10.jpg', category: 'external' },
        { id: 11, name: 'Pti Fipet Plus Topical Spot-on', description: 'Works as an insecticide and kills parasites.', image: 'https://i.postimg.cc/CLPCS5sn/Picture11.jpg', category: 'external' },
        { id: 12, name: 'BARS', description: 'To treat and prevent infestations of fleas, ticks, lice, and various mites, including sarcoptic mange and ear mites.', image: 'https://i.postimg.cc/9MYTSQfM/Picture12.jpg', category: 'external' },
        { id: 13, name: 'BRAVECTO', description: 'An ectoparasiticide.', image: 'https://i.postimg.cc/SRZ9S1Cb/Picture13.jpg', category: 'external' },
        { id: 14, name: 'SIMPARICA', description: 'Treat and prevent flea and tick infestations in dogs.', image: 'https://i.postimg.cc/Y9ML1Bxw/Picture14.jpg', category: 'external' },
      ];
    }
    
    return [];
  };

  const products = getProducts();

  const getFilteredProducts = () => {
    if (activeCategory === 'all') return products;
    return products.filter(product => product.category === activeCategory);
  };

  const filteredProducts = getFilteredProducts();

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <MedicineHeader petType={petType || ''} />
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          {petType !== 'birds' && (
            <div className="text-center mb-8">
              <CategoryNavigation petType={petType || ''} currentCategory="cosmetics-supplements" />
            </div>
          )}
          
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-4">{getPetTypeTitle()} Supplements & External Drugs</h2>
            
            {/* Category Filter Buttons */}
            <div className="flex justify-center gap-4 mb-6">
              <button
                onClick={() => setActiveCategory('all')}
                className={`px-6 py-3 rounded-md font-semibold transition-colors ${
                  activeCategory === 'all'
                    ? 'bg-vet-blue text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                All Categories
              </button>
              <button
                onClick={() => setActiveCategory('supplements')}
                className={`px-6 py-3 rounded-md font-semibold transition-colors ${
                  activeCategory === 'supplements'
                    ? 'bg-vet-green text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Supplements
              </button>
              <button
                onClick={() => setActiveCategory('external')}
                className={`px-6 py-3 rounded-md font-semibold transition-colors ${
                  activeCategory === 'external'
                    ? 'bg-vet-orange text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                External Drugs
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <MedicineCard
                key={product.id}
                id={product.id}
                name={product.name}
                description={product.description}
                image={product.image}
                petType={petType || ''}
                itemType="cosmetics-supplements"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CosmeticsSupplementsPage;
