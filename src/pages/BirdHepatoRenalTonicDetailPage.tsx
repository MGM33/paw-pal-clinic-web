import React from 'react';
import { useParams, Link } from 'react-router-dom';

const BirdHepatoRenalTonicDetailPage = () => {
  const { medicineId } = useParams();

  React.useEffect(() => {
    document.title = `VetCare | Bird HepatoRenal tonics ${medicineId} Details`;
  }, [medicineId]);

  const medicines = [
    {
      id: '1',
      type: 'HepatoRenal Tonic',
      name: 'Protech',
      description: 'Potent diuretic and hepatic stimulant with immune-boosting properties.',
      usage: 'Used in cases of Gumboro disease, after sulphonamide/antibiotic treatment, gout, and to stimulate immunity.',
      composition: 'Choline bitartarte 50gm, Vitamin B12 30gm, Vitamin C 30gm, Sorbitol 50gm, Methionine 10gm, Lysine 20gm, Ammonium chloride 250gm, Propylene glycol 50gm, Halfa bar ext. 3000gm.',
      dosage: '1ml/liter drinking water as advised by vet.',
      sideEffects: 'None reported when used as directed.',
      image: 'https://i.postimg.cc/dV2xgTZy/26.jpg'
    },
    {
      id: '2',
      type: 'HepatoRenal Tonic',
      name: 'RUN-X',
      description: 'Fast-acting diuretic and liver tonic rich in B vitamins and electrolytes.',
      usage: 'Used in bacterial, viral, fungal kidney/urinary infections, stress, diarrhea, and D3 poisoning.',
      composition: 'B1 10,000 mg, B2 2,000 mg, B6 2,000 mg, Pantothenic Acid 5,000 mg, C 50,000 mg, Niacin 30,000 mg, Sodium Chloride 150g, Potassium Sulfate 150g, Sorbitol 42g.',
      dosage: '1–2 g/liter drinking water for 3–5 days.',
      sideEffects: 'None.',
      image: 'https://i.postimg.cc/8zGSFGhL/27.jpg'
    },
    {
      id: '3',
      type: 'HepatoRenal Tonic',
      name: 'R.N.X',
      description: 'Kidney flush and B-complex supplement to prevent stone formation and stress.',
      usage: 'Used to improve shell quality, prevent anemia, improve metabolism, and resist stress.',
      composition: 'Vitamin C 5000mg, B1 10000mg, B2 4000mg, Pantothenic Acid 5000mg, Niacin 20mg, Potassium 45000mg, Magnesium 42000mg, Sorbitol 500mg.',
      dosage: '1 g/liter drinking water for 3–5 days.',
      sideEffects: 'None.',
      image: 'https://i.postimg.cc/hPTnPv7S/28.jpg'
    },
    {
      id: '4',
      type: 'HepatoRenal Tonic',
      name: 'HEPARENOL',
      description: 'Facilitates digestion and toxin elimination by improving liver and intestinal function.',
      usage: 'Used during high production periods and diet changes to support liver and gallbladder.',
      composition: 'Methionine 7.9g, Choline 5.625g, Betaine 6g, Lysine 1.6g, Artichoke Extract 3g, Sorbitol 35g, Potassium sorbate, Sodium hydroxide.',
      dosage: '1–2 ml/10kg live weight for 5–10 days.',
      sideEffects: 'None when used as prescribed.',
      image: 'https://i.postimg.cc/JhKdzVq7/29.jpg'
    },
    {
      id: '5',
      type: 'HepatoRenal Tonic',
      name: 'Mega Beial',
      description: 'Liver protector and metabolism booster with silymarin and L-carnitine.',
      usage: 'Used for detoxification, boosting liver enzymes, weight gain, and disease resistance.',
      composition: 'Sorbitol 100gm, Niacin 30gm, L-carnitine 35gm, Betaine HCl 70mg, Choline 75gm, Silymarin 15gm, Methionine 40gm, Vit E, B1, B2, B9, B12.',
      dosage: '1ml/L drinking water.',
      sideEffects: 'None known.',
      image: 'https://i.postimg.cc/Dz7Mhy1Y/30.jpg'
    }
  ];

  const medicine = medicines.find(med => med.id === medicineId);

  if (!medicine) {
    return <p className="text-center mt-10 text-red-500">Medicine not found.</p>;
  }

  return (
    <div className="min-h-screen transparent-section py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="glass-effect rounded-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src={medicine.image} 
                  alt={medicine.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="md:w-1/2 p-8">
                <h1 className="text-3xl font-bold mb-4 text-theme-deepsky">{medicine.name}</h1>
                <p className="text-gray-600 mb-6">{medicine.description}</p>
                
                <div className="space-y-4 mb-8">
                  <div>
                    <h2 className="text-xl font-semibold mb-2 text-theme-deepsky">Usage</h2>
                    <p className="text-gray-600">{medicine.usage}</p>
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold mb-2 text-theme-deepsky">Composition</h2>
                    <p className="text-gray-600">{medicine.composition}</p>
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold mb-2 text-theme-deepsky">Dosage</h2>
                    <p className="text-gray-600">{medicine.dosage}</p>
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold mb-2 text-theme-deepsky">Side Effects</h2>
                    <p className="text-gray-600">{medicine.sideEffects}</p>
                  </div>
                </div>

                <Link 
                  to="/birds/medicines/category/hepatorenal-tonics" 
                  className="bg-vet-orange hover:bg-vet-darkorange text-white px-6 py-3 rounded-md font-semibold transition-colors inline-block"
                >
                  Back to HepatoRenal Tonics Category
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BirdHepatoRenalTonicDetailPage;
