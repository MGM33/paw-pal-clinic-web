import React from 'react';
import { useParams, Link } from 'react-router-dom';

const medicinesData: Record<string, any> = {
  '1': {
    name: 'Amprolium 20% W.S.P.',
    type: 'Anti-Coccidial',
    composition: 'Each 1 gm contains: Amprolium HCI 200 mg.',
    indications:
      'Treatment of intestinal coccidiosis in chickens (broilers, pullets, layers, breeder hens) caused by Eimeria (E. acervulina, E. maxima, E. mitis, and E. tenella) and turkeys (E. meleagrimitis, E. adenoeides, and E. gallopavonis) susceptible to amprolium.',
    dosage:
      'Active ingredient: 20 mg amprolium/kg b.w./day for 5-7 consecutive days. Product: 1 gm/10 kg body weight (1 gm/1 liter drinking water) for 5-7 consecutive days.',
    sideEffects:
      'Efficacy may be reduced if administered with products containing vitamin B-complex.',
    withdrawalTime:
      'Chickens (broilers, pullets, layers, breeder hens): Meat & offal - 0 days, Eggs - 0 days; Turkeys: Meat & Offal - 0 days.',
    image: 'https://i.postimg.cc/2SbtGKr2/1.jpg'
  },
  '2': {
    name: 'DICLOSOL',
    type: 'Anti-Coccidial',
    composition: 'Each 1 ml contains: Diclazuril 10 mg.',
    indications:
      'Prevention of coccidiosis in broiler chickens, turkeys, and rabbits caused by various Eimeria species.',
    dosage: '1 ml per 10 liters of drinking water, single dose.',
    sideEffects: 'Contraindicated in hypersensitive animals; not for layers.',
    withdrawalTime: 'Broiler chickens: 0 days; Turkeys: 0 days; Rabbits: 1 day.',
    image: 'https://i.postimg.cc/TwGHR2m4/2.jpg'
  },
  '3': {
    name: 'PROCOX',
    type: 'Anti-Coccidial',
    composition: 'Each 1 liter contains 10 gm of Diclazonil.',
    indications:
      'Used for treatment of caecal and intestinal coccidiosis in poultry. Effective against E. tenella, E. acervulina, E. brunetti, E. necara.',
    dosage: '0.5-1 ml per liter of drinking water for 3-5 days.',
    image: 'https://i.postimg.cc/QxP4FJ15/3.jpg'
  },
  '4': {
    name: 'NOR-COX',
    type: 'Anti-Coccidial',
    composition:
      'Each 100 g contains: Sulphadimidine sodium 21.58 gm, Diaverdine 2 gm, Amprolium HCL 11.3 gm.',
    indications:
      'Used for intestinal and caecal coccidiosis in broiler chickens and turkeys.',
    dosage: '2 gm/10 kg body weight or 2 gm/1 liter of drinking water for 3-5 days.',
    withdrawalTime: 'Broiler chickens and turkeys: 14 days.',
    image: 'https://i.postimg.cc/k5NfhrZF/4.jpg'
  },
  '5': {
    name: 'Amprolium 20% El-Nasr',
    type: 'Anti-Coccidial',
    composition: 'Each 100 gm contains: Amprolium HCI 22.6 gm (Eq. to base 20 gm).',
    indications:
      'Used in pre-ruminating calves, dogs and cats for treatment of coccidiosis.',
    dosage: '1g/L in drinking water for 3-5 days.',
    image: 'https://i.postimg.cc/BQdpSQfB/5.jpg'
  },
  '6': {
    name: 'COCCICURE',
    type: 'Anti-Coccidial',
    composition:
      'Each 1 g contains: Sulphaquinoxaline sodium 150 mg, Sulphadidine sodium 70 mg, Sulphadiazine sodium 70 mg, Vitamin K3 2 mg, Vitamin A 8000 I.U.',
    indications:
      'Treatment of coccidiosis in calves, lambs, and poultry; colibacillosis in calves and lambs.',
    dosage:
      '0.5-1 gm per liter of drinking water for 3 days, then suspend for 2 days.',
    withdrawalTime: 'Meat: 10 days.',
    sideEffects: 'Not used in layers.',
    image: 'https://i.postimg.cc/XvgkkfGs/6.jpg'
  },
  '7': {
    name: 'Sulphaquinoxaline Sodium',
    type: 'Anti-Coccidial',
    composition: 'Each 1 g contains: Sulphaquinoxaline Sodium 250 mg.',
    indications:
      'Used against coccidiosis in chickens and turkeys; also enteric infections by E. coli and Bordetella spp.',
    dosage:
      'Broiler chicken & guinea fowl: 2 gm/L; Turkey: 1 gm/8.3 kg b.w. or 5 gm/4 L drinking water.',
    withdrawalTime:
      'Stop 10 days before slaughter for animals producing meat.',
    image: 'https://i.postimg.cc/cCPRLT2L/7.jpg'
  },
  '8': {
    name: 'TOLTRACOX',
    type: 'Anti-Coccidial',
    composition: 'Each 100 ml contains Toltrazuril 2.5 gm.',
    indications:
      'Used for treatment of coccidiosis in chickens and turkeys; acts against schizogony and gametogony stages.',
    dosage:
      '280 ml/1000 kg b.w. daily for 2 days; ~3 ml/L of drinking water.',
    sideEffects:
      'Large prolonged doses may cause gastrointestinal distress and rashes.',
    image: 'https://i.postimg.cc/TPTr1K7g/8.jpg'
  },
  '9': {
    name: 'AMERIL',
    type: 'Anti-Coccidial',
    composition:
      'Each 1 ml contains: Amprolium HCL 244.2 mg (Eq. to base 216 mg), Ethopabate 14 mg.',
    indications:
      'Used for treatment of coccidiosis in broiler chickens caused by various Eimeria spp.',
    dosage:
      'Treatment: 1 ml/L for 5-7 days; Mild: 0.5 ml/L; Follow-up: 0.25 ml/L for 5-7 days.',
    sideEffects: 'Not for birds producing eggs for human consumption.',
    image: 'https://i.postimg.cc/SxfggFHL/9.jpg'
  }
};

const BirdAntiCoccidialDetailPage = () => {
  const { medicineId } = useParams<{ medicineId: string }>();
  const medicineData = medicinesData[medicineId];

  React.useEffect(() => {
    document.title = medicineData
      ? `VetCare | ${medicineData.name} Details`
      : 'VetCare | Medicine Not Found';
  }, [medicineData]);

  if (!medicineData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600">Medicine Not Found</h1>
          <Link
            to="/birds/medicines/category/anti-coccidial"
            className="mt-4 inline-block text-blue-500 underline"
          >
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

          <h1 className="text-3xl font-bold mb-4 text-theme-deepsky text-center">
            {medicineData.name}
          </h1>

          {medicineData.type && (
            <p className="text-sm font-medium text-theme-deepsky mb-2 text-center">
              Type: <span className="text-gray-600">{medicineData.type}</span>
            </p>
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
