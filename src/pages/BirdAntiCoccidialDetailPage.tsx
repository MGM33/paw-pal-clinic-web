import React from 'react';
import { useParams, Link } from 'react-router-dom';

const medicinesData: Record<string, any> = {
  '1': {
    name: 'Amprolium 20%',
    description: 'Treatment of intestinal coccidiosis in chickens and turkeys caused by susceptible Eimeria species.',
    composition: 'Each 1 gm contains Amprolium HCI 200 mg.',
    indications: 'Used to prevent and treat coccidiosis in poultry caused by Eimeria species.',
    dosage: '20 mg amprolium/kg body weight/day for 5-7 consecutive days.',
    sideEffects: 'Efficacy may be reduced if administered simultaneously with vitamin B-complex products.',
    withdrawalTime: 'Chickens: Meat & offal - 0 days, Eggs - 0 days; Turkeys: 0 days.',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&h=400&fit=crop&sig=anticoccidial1',
  },
  '2': {
    name: 'DICLOSOL',
    description: 'Prevention of coccidiosis in broiler chickens, turkeys, and rabbits.',
    composition: 'Each 1 ml contains Diclazuril 10 mg.',
    indications: 'Prevents coccidiosis caused by various Eimeria species.',
    dosage: '1 ml per 10 liters of drinking water, single dose.',
    sideEffects: 'Contraindicated in hypersensitive animals; not for layers.',
    withdrawalTime: 'Broiler chickens: 0 days; Turkeys: 0 days; Rabbits: 1 day.',
    image: 'https://images.unsplash.com/photo-1576671081837-49000212a370?w=600&h=400&fit=crop&sig=anticoccidial2',
  },
  '3': {
  type: 'Anti-Coccidial',
  name: 'PROCOX',
  description: 'Effective treatment for caecal and intestinal coccidiosis in poultry caused by multiple Eimeria species.',
  composition: 'Each 1 liter contains 10 gm of Diclazuril.',
  indications: 'Highly effective against Eimeria acervulina, E. tenella, E. brunetti, E. necara, and others.',
  dosage: '0.5-1 ml per liter of drinking water for 3-5 days.',
  sideEffects: 'No significant side effects reported when used as directed.',
  withdrawalTime: 'Consult veterinarian; typically short withdrawal period.',
  image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&h=400&fit=crop&sig=anticoccidial3',
},

  
};

const BirdAntiCoccidialDetailPage = () => {
  const { medicineId } = useParams<{ medicineId: string }>();
  const medicineData = medicinesData[medicineId];

  React.useEffect(() => {
    if (medicineData) {
      document.title = `VetCare | ${medicineData.name} Details`;
    } else {
      document.title = 'VetCare | Medicine Not Found';
    }
  }, [medicineData]);

  if (!medicineData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600">Medicine Not Found</h1>
          <Link to="/birds/medicines/category/anti-coccidial" className="mt-4 inline-block text-blue-500 underline">
            Back to Anti-coccidial Category
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-theme-lightsky/30 to-theme-powder/30 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="glass-effect rounded-lg overflow-hidden p-6">
          {medicineData.image && (
            <div className="w-full flex justify-center mb-6">
              <img
                src={medicineData.image}
                alt={medicineData.name}
                className="w-full max-w-md object-contain rounded-md shadow-lg"
              />
            </div>
          )}

          <h1 className="text-3xl font-bold mb-4 text-theme-deepsky text-center">{medicineData.name}</h1>

         
           {medicineData.type && (
              <p className="text-sm font-medium text-theme-deepsky mb-2 text-center">
                Type: <span className="text-gray-600">{medicineData.type}</span>
              </p>
            )}

          {medicineData.description && (
            <p className="text-gray-600 mb-6 text-center">{medicineData.description}</p>
          )}

          <div className="space-y-6">
            {medicineData.composition && (
              <div>
                <h2 className="text-xl font-semibold mb-2 text-theme-deepsky">Composition</h2>
                <p className="text-gray-600">{medicineData.composition}</p>
              </div>
            )}


            {medicineData.indications && (
              <div>
                <h2 className="text-xl font-semibold mb-2 text-theme-deepsky">Indications</h2>
                <p className="text-gray-600">{medicineData.indications}</p>
              </div>
            )}

            {medicineData.dosage && (
              <div>
                <h2 className="text-xl font-semibold mb-2 text-theme-deepsky">Dosage</h2>
                <p className="text-gray-600">{medicineData.dosage}</p>
              </div>
            )}

            {medicineData.sideEffects && (
              <div>
                <h2 className="text-xl font-semibold mb-2 text-theme-deepsky">Side Effects</h2>
                <p className="text-gray-600">{medicineData.sideEffects}</p>
              </div>
            )}

            {medicineData.withdrawalTime && (
              <div>
                <h2 className="text-xl font-semibold mb-2 text-theme-deepsky">Withdrawal Time</h2>
                <p className="text-gray-600">{medicineData.withdrawalTime}</p>
              </div>
            )}
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/birds/medicines/category/anti-coccidial"
              className="bg-vet-orange hover:bg-vet-darkorange text-white px-6 py-3 rounded-md font-semibold transition-colors"
            >
              Back to Anti-coccidial Category
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BirdAntiCoccidialDetailPage;