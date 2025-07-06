import React from 'react';
import { useParams, Link } from 'react-router-dom';

const BirdMineralsVitaminsDetailPage = () => {
  const { medicineId } = useParams<{ medicineId: string }>();

  React.useEffect(() => {
    document.title = `VetCare | Bird Minerals & Vitamins ${medicineId} Details`;
  }, [medicineId]);

  const medicinesData: { [key: string]: any } = {
    '1': {
      name: 'OMEGRAN',
      type: 'Minerals & Vitamins & Growth Promoters',
      composition: `Vitamin A: 2,500,000 IU
Vitamin D3: 2,500,000 IU
Vitamin K3: 1500 mg
Ascorbic Acid: 2000 mg
Biotin: 25 mg
Manganese: 8000 mg
Iron: 10000 mg
Copper: 2000 mg
Selenium: 150 mg
Dl-Methylcellulose: 150,000 mg
L-Lysine Hydrochloride: 1200 mg
Carrier (Dextrose): 1000 mg`,
      indications: `Eggshell enhancer, improves milk production, appetite stimulant, immunity booster, helps against stress, vaccination, heat, and crowding.`,
      dosage: `1 g/liter of drinking water for 3–5 days.`,
      image: 'https://i.postimg.cc/G2WPcqZh/10.jpg',
    },
    '2': {
      name: 'BUNSH',
      type: 'Minerals & Vitamins & Growth Promoters',
      composition: `Vitamin A: 1,000,000 IU
Vitamin D3: 1,000,000 IU
Vitamin E: 1000 mg
Vitamin L3: 1000 mg
Vitamin C: 2000 mg
Vitamin B12: 10 mg
Iron: 400 mg
Selenium: 100 mg
Phosphorus: 11,000 mg
Cobalt Sulfate: 100 mg
Dextrose up to 1,000 g`,
      indications: `Used for phosphorus deficiency, infertility, anemia, boosts egg and milk production, reduces stress and improves appetite.`,
      dosage: `1 g/liter of drinking water.`,
      image: 'https://i.postimg.cc/yYvJjLvg/11.jpg',
    },
    '3': {
      name: 'POWER',
      type: 'Minerals & Vitamins & Growth Promoters',
      composition: `Vitamin A: 500,000 IU, D3: 500,000 IU, E: 500 mg, K3: 500 mg, C: 25,000 mg, B12: 5 mg, Iron: 1500 mg, Selenium: 50 mg, Cobalt: 50 mg`,
      indications: `Improves immunity and growth, supports against infections, covers vitamin and mineral deficiencies.`,
      dosage: `2 g/liter of drinking water.`,
      withdrawalTime: 'None',
      image: 'https://i.postimg.cc/xdbc0nYM/12.jpg',
    },
    '4': {
      name: 'NEW HIGH PHOS',
      type: 'Minerals & Vitamins & Growth Promoters',
      composition: `Manganese: 5000 mg, Zinc: 4000 mg, Iron: 2000 mg, Iodine: 1000 mg, Cobalt: 100 mg, Selenium: 100 mg, Phosphorus: 76500 mg, Calcium: 26000 mg`,
      indications: `Treats mineral deficiencies, balances calcium & phosphorus, improves skeletal health.`,
      dosage: `1 ml/liter for 3–5 days`,
      image: 'https://i.postimg.cc/DZkm0HyD/13.jpg',
    },
    '5': {
      name: 'Mineral Salt Mixture',
      type: 'Minerals & Vitamins & Growth Promoters',
      composition: `Manganese: 40000 mg, Zinc: 40000 mg, Iron: 50000 mg, Copper: 10000 mg, Cobalt: 100 mg, Selenium: 300 mg`,
      indications: `Prevents A & E deficiency, heat stress, loss of appetite, improves resistance and fertility.`,
      dosage: `1 ml/liter`,
      image: 'https://i.postimg.cc/Wzs36ZZw/14.jpg',
    },
    '6': {
      name: 'PRIMOVET',
      type: 'Minerals & Vitamins & Growth Promoters',
      composition: `Full spectrum of vitamins (A, D3, E, K3, B1, B2, B6, Biotin, C, Niacin, Folic acid, DL-methionine)`,
      indications: `Improves growth, vitality, immune activation after vaccination, and recovery from diseases.`,
      dosage: `1 ml/liter`,
      image: 'https://i.postimg.cc/PJKq6qzs/15.jpg',
    },
    '7': {
      name: 'E+Selenium',
      type: 'Minerals & Vitamins & Growth Promoters',
      composition: `Vitamin E: 100,000 mg, Selenium: 350 mg, Propylene Glycol: 50 gm`,
      indications: `Improves fertility, immune system, meat quality, used for brain and muscle diseases.`,
      dosage: `1 ml/liter for 3–5 days`,
      image: 'https://i.postimg.cc/sD6X7vg5/16.jpg',
    },
    '8': {
      name: 'DE-CAL-PHOS',
      type: 'Minerals & Vitamins & Growth Promoters',
      composition: `Vitamin D: 2,000,000 IU, B12: 10 mg, Phosphoric acid: 51000 mg, Calcium: 31110 mg`,
      indications: `Prevents rickets, anemia, lameness, and egg cracking. Improves production and fertility.`,
      dosage: `1 gm/liter`,
      image: 'https://i.postimg.cc/k4mXqSTP/19.jpg',
    },
    '9': {
      name: 'AD3E',
      type: 'Minerals & Vitamins & Growth Promoters',
      composition: `Vitamin A: 10,000,000 IU, D: 2,000,000 IU, E: 2000 mg`,
      indications: `Covers A, D, E deficiencies, boosts immunity during stress and infection.`,
      dosage: `1 ml/liter`,
      image: 'https://i.postimg.cc/W38jVHD0/20.jpg',
    },
    '10': {
      name: 'Zymocytin',
      type: 'Minerals & Vitamins & Growth Promoters',
      composition: `Digestive enzymes + amino acids`,
      indications: `Improves feed conversion, growth, egg production, phosphorus absorption.`,
      dosage: `As prescribed.`,
      withdrawalTime: 'None',
      sideEffects: 'None',
      image: 'https://i.postimg.cc/05txHh1s/21.jpg',
    },
    '11': {
      name: 'PHOSPHOPLUS',
      type: 'Minerals & Vitamins & Growth Promoters',
      composition: `Magnesium, Calcium, Sodium, Iron, Copper, Zinc, Cobalt (diacid phosphate)`,
      indications: `Prevents mineral deficiency, deformities, low egg production, and stress.`,
      dosage: `1 ml/liter for 5–7 days`,
      image: 'https://i.postimg.cc/hGqqdBT9/22.jpg',
    },
    '12': {
      name: 'Multivit PLUS',
      type: 'Minerals & Vitamins & Growth Promoters',
      composition: `A, D3, E, B complex, amino acids, antioxidants, minerals (Calcium, Magnesium, etc.)`,
      indications: `Prevents deficiency, improves bone health, immunity, feed conversion, and vitality.`,
      dosage: `1 ml/liter for 3 days`,
      image: 'https://i.postimg.cc/7LNjJTxk/23.jpg',
    },
    '13': {
      name: 'Tripli-Care',
      type: 'Minerals & Vitamins & Growth Promoters',
      composition: `Vitamin A: 100M IU, D3: 20M IU, E: 20,000 mg`,
      indications: `Supports immune health, cell function, bone development, antioxidant protection.`,
      dosage: `1 ml/4L for 3–5 days`,
      image: 'https://i.postimg.cc/wvfP08y4/24.jpg',
    },
    '14': {
      name: 'E VITA-SL',
      type: 'Minerals & Vitamins & Growth Promoters',
      composition: `Vitamin E: 20,000 mg, Selenium: 800 mg, Biotin: 20 mg`,
      indications: `Natural antioxidant for nervous and muscular cells. Prevents vitamin E/Selenium deficiency.`,
      dosage: `1 ml/4L for 5 days`,
      image: 'https://i.postimg.cc/BbjzzY2S/25.jpg',
    },
  };

  const medicineData = medicinesData[medicineId || ''];

  if (!medicineData) {
    return <p className="text-center py-10 text-red-500 font-semibold">Medicine not found</p>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-theme-lightsky/30 to-theme-powder/30 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="glass-effect rounded-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src={medicineData.image} 
                  alt={medicineData.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="md:w-1/2 p-8">
                <h1 className="text-3xl font-bold mb-4 text-theme-deepsky">{medicineData.name}</h1>
                <p className="text-gray-600 mb-2 italic">{medicineData.type}</p>
                <p className="text-gray-600 mb-6">{medicineData.composition}</p>
                
                <div className="space-y-4 mb-8">
                  <div>
                    <h2 className="text-xl font-semibold mb-2 text-theme-deepsky">Indications</h2>
                    <p className="text-gray-600">{medicineData.indications}</p>
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold mb-2 text-theme-deepsky">Dosage</h2>
                    <p className="text-gray-600">{medicineData.dosage}</p>
                  </div>
                  {medicineData.withdrawalTime && (
                    <div>
                      <h2 className="text-xl font-semibold mb-2 text-theme-deepsky">Withdrawal Time</h2>
                      <p className="text-gray-600">{medicineData.withdrawalTime}</p>
                    </div>
                  )}
                  {medicineData.sideEffects && (
                    <div>
                      <h2 className="text-xl font-semibold mb-2 text-theme-deepsky">Side Effects</h2>
                      <p className="text-gray-600">{medicineData.sideEffects}</p>
                    </div>
                  )}
                </div>

                <Link 
                  to="/birds/medicines/category/minerals-vitamins" 
                  className="bg-vet-orange hover:bg-vet-darkorange text-white px-6 py-3 rounded-md font-semibold transition-colors inline-block"
                >
                  Back to Category
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BirdMineralsVitaminsDetailPage;
