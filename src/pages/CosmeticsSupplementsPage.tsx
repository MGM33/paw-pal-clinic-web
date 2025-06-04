
import React from 'react';
import { useParams } from 'react-router-dom';
import MedicineHeader from '../components/medicines/MedicineHeader';
import MedicineCard from '../components/medicines/MedicineCard';
import CategoryNavigation from '../components/medicines/CategoryNavigation';

const CosmeticsSupplementsPage = () => {
  const { petType } = useParams<{ petType: string }>();
  
  React.useEffect(() => {
    document.title = `PetCare Vet | ${getPetTypeTitle()} Cosmetics & Supplements`;
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

  const generateProducts = () => {
    const products = [];
    for (let i = 1; i <= 20; i++) {
      products.push({
        id: i,
        name: `${getPetTypeTitle()} Cosmetic/Supplement ${i}`,
        description: `Premium cosmetic and supplement product ${i} for ${petType}. Enhances health and appearance with natural ingredients.`,
        image: `https://source.unsplash.com/random/400x300/?pet-cosmetics&sig=${i}`,
      });
    }
    return products;
  };

  const products = generateProducts();

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <MedicineHeader petType={petType || ''} />
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-4">{getPetTypeTitle()} Cosmetics & Supplements</h2>
            <CategoryNavigation petType={petType || ''} currentCategory="cosmetics-supplements" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <MedicineCard
                key={product.id}
                id={product.id}
                name={product.name}
                description={product.description}
                image={product.image}
                petType={petType || ''}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CosmeticsSupplementsPage;
