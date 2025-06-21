import React from 'react';
import MedicineCard from '../components/medicines/MedicineCard';
import PoultryDrawer from '../components/medicines/PoultryDrawer';

const AntiCoccidialDrugsPage = () => {
  React.useEffect(() => {
    document.title = 'PetCare Vet | Anti-Coccidial Drugs';
  }, []);

  const medicines = [
    { id: 1, name: 'Cocciblock', description: 'Effective prevention and treatment of coccidiosis in poultry.', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&sig=anticocci1' },
    { id: 2, name: 'Coxicure', description: 'Controls intestinal coccidiosis caused by Eimeria species.', image: 'https://images.unsplash.com/photo-1576671081837-49000212a370?w=400&h=300&fit=crop&sig=anticocci2' },
    { id: 3, name: 'Diclazuril Powder', description: 'Potent anti-coccidial agent for poultry with prolonged activity.', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop&sig=anticocci3' },
    { id: 4, name: 'Toltrazuril Suspension', description: 'Treats all intestinal coccidiosis stages with minimal side effects.', image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=300&fit=crop&sig=anticocci4' },
    { id: 5, name: 'Sulfaquinoxaline Tablets', description: 'Broad-spectrum sulfa drug effective against coccidiosis.', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop&sig=anticocci5' },
    { id: 6, name: 'Amprolium 12.5%', description: 'Vitamin B1 analog preventing coccidia from growing.', image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop&sig=anticocci6' },
    { id: 7, name: 'Salinomycin Premix', description: 'Ionophore anticoccidial improving feed efficiency.', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&sig=anticocci7' },
    { id: 8, name: 'Narasin Feed Additive', description: 'Effective ionophore for controlling coccidiosis in broilers.', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&sig=anticocci8' },
    { id: 9, name: 'Lasalocid Sodium', description: 'Ionophore anticoccidial to reduce intestinal lesions.', image: 'https://images.unsplash.com/photo-1576671081837-49000212a370?w=400&h=300&fit=crop&sig=anticocci9' },
    { id: 10, name: 'Diclazuril Premix', description: 'Sustained release anti-coccidial for long-term control.', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop&sig=anticocci10' },
    { id: 11, name: 'Robenidine Hydrochloride', description: 'Synthetic anti-coccidial for broiler feed.', image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=300&fit=crop&sig=anticocci11' },
    { id: 12, name: 'Clopidol', description: 'Selective inhibitor of coccidial sporulation.', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop&sig=anticocci12' },
    { id: 13, name: 'Ethopabate Powder', description: 'Used in combination for effective coccidiosis control.', image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop&sig=anticocci13' },
    { id: 14, name: 'Methylbenzoquate', description: 'Anti-coccidial drug preventing coccidia reproduction.', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&sig=anticocci14' },
    { id: 15, name: 'Dinitolmide', description: 'Feed additive effective against intestinal coccidiosis.', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&sig=anticocci15' },
    { id: 16, name: 'Monensin Premix', description: 'Ionophore with coccidiostatic and growth promoting effects.', image: 'https://images.unsplash.com/photo-1576671081837-49000212a370?w=400&h=300&fit=crop&sig=anticocci16' },
    { id: 17, name: 'Clazuril Suspension', description: 'Rapidly eliminates coccidiosis in poultry.', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop&sig=anticocci17' },
    { id: 18, name: 'Diclazuril 2.5%', description: 'High potency anticoccidial for intensive poultry farming.', image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=300&fit=crop&sig=anticocci18' },
    { id: 19, name: 'Clopidol Premix', description: 'Feed additive to control coccidiosis outbreaks.', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop&sig=anticocci19' },
    { id: 20, name: 'Amprolium Hydrochloride', description: 'Prevents vitamin B1 deficiency caused by coccidia.', image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop&sig=anticocci20' },
    { id: 21, name: 'Sulfaquinoxaline Sodium', description: 'Effective sulfa drug against Eimeria species.', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&sig=anticocci21' },
    { id: 22, name: 'Clazuril 25%', description: 'Long-acting anti-coccidial for broiler chickens.', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&sig=anticocci22' },
    { id: 23, name: 'Salinomycin Sodium', description: 'Potent ionophore against coccidiosis.', image: 'https://images.unsplash.com/photo-1576671081837-49000212a370?w=400&h=300&fit=crop&sig=anticocci23' },
    { id: 24, name: 'Lasalocid Premix', description: 'Used in feed to reduce coccidia infections.', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop&sig=anticocci24' },
    { id: 25, name: 'Robenidine Premix', description: 'Controls intestinal coccidiosis in broilers.', image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=300&fit=crop&sig=anticocci25' },
    { id: 26, name: 'Ethopabate', description: 'Used in combination with other anticoccidials.', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop&sig=anticocci26' },
    { id: 27, name: 'Methylbenzoquate Premix', description: 'Feed additive for prevention of coccidiosis.', image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop&sig=anticocci27' },
    { id: 28, name: 'Amprolium Feed Additive', description: 'Protects against vitamin B1 deficiency in poultry.', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&sig=anticocci28' },
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-vet-orange to-vet-darkorange text-white py-12 rounded-lg mb-8">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">Anti-Coccidial Drugs</h1>
                <p className="text-lg opacity-90">Specialized anti-coccidial medicines for poultry birds</p>
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
                petType="birds"
                itemType="medicines/anti-coccidial"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AntiCoccidialDrugsPage;
