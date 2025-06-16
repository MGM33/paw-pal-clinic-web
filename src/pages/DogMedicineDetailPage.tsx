import React from 'react';
import { useParams, Link } from 'react-router-dom';

const medicinesData: Record<string, any> = {
'1': {
  name: 'Meloxicam - Non-steroidal Veterinary Drug',
  type: 'Anti-Inflammatories',
  description: 'Inhibits cyclooxygenase (COX), mainly COX-2, reducing inflammation, pain, and fever.',
  features: [
    'Pain management',
    'Inflammation (especially in musculoskeletal disorders)',
    'Postoperative pain',
    'Osteoarthritis (dogs)',
    'Acute and chronic musculoskeletal disorders'
  ],
  Dosage: `
- Initial dose: 0.2 mg/kg orally on the first day
- Maintenance dose: 0.1 mg/kg orally once daily
- Injection (SC/IV): 0.2 mg/kg as a single dose`,
  benefits: 'Reduces inflammation, pain, and fever while supporting recovery in musculoskeletal disorders.',
  administrationForms: [
    'Oral Suspension',
    'Injectable solution (Subcutaneous, Intravenous)'
  ],
  sideEffects: [
    'Common: Vomiting, Diarrhea, Loss of appetite, Lethargy',
    'Serious (less common but urgent): GI ulceration/bleeding, Kidney or liver dysfunction, Increased thirst or urination, Jaundice'
  ],
  precautions: [
    'Use with caution in patients with a history of gastrointestinal bleeding or ulcers',
    'Monitor kidney and liver function during long-term use',
    'Avoid in patients with cardiovascular risk factors or heart disease'
  ],
  contraindications: [
    'Allergy to meloxicam or other NSAIDs',
    'Active gastrointestinal bleeding or peptic ulcer',
    'Severe renal or hepatic impairment'
  ],
  image: 'https://images.unsplash.com/photo-1601758123927-196c7e44e30c?w=600&h=400&fit=crop'
},

  '2': {
    name: 'Ketoprofen - Nonsteroidal Anti-inflammatory Drug (NSAID)',
    type: 'Anti-Inflammatories',
    description: `It inhibits the cyclooxygenase enzymes (COX-1 and COX-2), reducing the production of prostaglandins — chemicals responsible for inflammation, pain, and fever.
This leads to its anti-inflammatory, analgesic (pain-relieving), and antipyretic (fever-reducing) effects.`,
    Dosage: '1-2 mg/kg once or twice a day, depending on the severity of the condition.',
    benefits: 'Anti-inflammatory, analgesic (pain-relieving), and antipyretic (fever-reducing) effects.',
    image: 'https://images.unsplash.com/photo-1560743641-3914f2c45636?w=600&h=400&fit=crop',
    administrationForms: ['Oral tablets', 'Injectable', 'Suspension'],
    sideEffects: [
      'Common: Gastrointestinal issues (vomiting, diarrhea, loss of appetite, ulcers)',
      'Common: Kidney and liver toxicity with prolonged use (monitoring advised)',
      'Common: Behavioral changes (lethargy or unusual behavior)',
      'Serious: Gastric ulceration or bleeding (long-term use risk)',
      'Serious: Renal failure (especially in dehydrated or compromised animals)'
    ],
    precautions: [
      'Use with caution in patients with kidney, liver, or heart problems',
      'Take with food or milk to reduce stomach irritation',
      'Avoid alcohol and other NSAIDs to prevent gastrointestinal bleeding'
    ],
    contraindications: [
      'Do not use in patients with active peptic ulcers or GI bleeding',
      'Contraindicated in individuals allergic to NSAIDs or aspirin',
      'Avoid during late pregnancy due to risk of fetal harm'
    ]
  },

  '3': {
    name: 'Alphachymotrypsin - Proteolytic Enzyme',
    type: 'Anti-Inflammatories',
    description: `Alpha-chymotrypsin is a serine protease that breaks down proteins by cleaving peptide bonds, especially at aromatic amino acids (tyrosine, phenylalanine, tryptophan).
It helps reduce inflammation, aid tissue repair, and decrease edema (swelling) in conditions like trauma or surgery.`,
    Dosage: '1-5 mg/kg',
    benefits: 'Reduces inflammation and swelling, supports tissue repair after trauma or surgery.',
    image: 'https://images.unsplash.com/photo-1588776814546-ec7e40f96ecf?w=600&h=400&fit=crop',
    administrationForms: ['Injectable form', 'Oral form'],
    sideEffects: [
      'Common: Injection site reactions (pain, swelling, or redness)',
      'Common: Gastrointestinal issues (vomiting or diarrhea)',
      'Common: Systemic effects like weakness or lethargy'
    ],
    precautions: [
      'Use with caution in patients with bleeding disorders',
      'Avoid contact with eyes and mucous membranes when using topically',
      'Monitor for allergic reactions in sensitive individuals'
    ],
    contraindications: [
      'Hypersensitivity to Alphachymotrypsin',
      'Presence of active bleeding or bleeding tendencies',
      'Recent surgery involving vital organs (e.g., brain, eyes)'
    ]
  },
 '4': {
  name: 'Carprofen - Nonsteroidal Anti-inflammatory Drug (NSAID)',
  type: 'Anti-Inflammatories',
  description: `Carprofen works by inhibiting cyclooxygenase (COX) enzymes, particularly COX-2, 
which reduces the production of prostaglandins—chemicals responsible for pain, inflammation, and fever. 
This leads to reduced pain and inflammation, especially in conditions like arthritis or post-surgery recovery.`,
  Dosage: `
- 2 mg/kg given once daily, but it may be given twice a day for more severe pain.`,
  benefits: 'Reduces pain and inflammation, particularly in arthritis or after surgery.',
  administrationForms: [
    'Chewable Tablets',
    'Injectable Form',
    'Oral Tablet'
  ],
  sideEffects: [
    'Common: Vomiting, Diarrhea, Decreased appetite, Lethargy',
    'Serious (rare): Kidney or liver damage (especially with prolonged use or in animals with pre-existing conditions), Gastrointestinal ulcers or bleeding, Skin reactions (rash, itching)'
  ],
  precautions: [
    'Use with caution in animals with liver, kidney, or heart problems',
    'Monitor for gastrointestinal issues like vomiting or diarrhea',
    'Regular blood work is recommended during long-term use'
  ],
  contraindications: [
    'Do not use in animals allergic to NSAIDs',
    'Avoid in pregnant, lactating, or breeding animals',
    'Not for use in animals with bleeding disorders or active ulcers'
  ],
  image: 'https://images.unsplash.com/photo-1601758123927-196c7e44e30c?w=600&h=400&fit=crop'
},
  '5': {
  name: 'Dexamethasone - Potent Corticosteroid',
  type: 'Anti-Inflammatories',
  description: `Dexamethasone works by binding to glucocorticoid receptors, leading to suppression of inflammation and immune responses.
It decreases the production of inflammatory cytokines, inhibits prostaglandin synthesis, and reduces immune cell activity, 
making it effective for treating allergies, autoimmune diseases, and inflammation.`,
  Dosage: `
- 0.1 – 0.3 mg/kg orally, IM, or IV (short-term use)
- Lower doses for long-term use`,
  benefits: 'Effective for managing inflammation, allergies, autoimmune diseases, and some cancers.',
  administrationForms: [
    'Tablets (oral)',
    'Injectable solution (IV, IM, SC)',
    'Ophthalmic and otic preparations (eye/ear drops)'
  ],
  sideEffects: [
    'Common: Increased thirst and urination, Increased appetite, Panting',
    'Long-term/high-dose: Immunosuppression, Muscle wasting, Delayed wound healing, Increased risk of infections, GI ulcers or bleeding, Behavioral changes, Iatrogenic Cushing’s disease'
  ],
  precautions: [
    'Use cautiously in patients with infections, as it may suppress immune response',
    'Monitor blood sugar levels in diabetics — it can cause hyperglycemia',
    'Long-term use may lead to osteoporosis and adrenal suppression'
  ],
  contraindications: [
    'Contraindicated in systemic fungal infections',
    'Avoid in patients with known hypersensitivity to dexamethasone',
    'Should not be used in those receiving live or live-attenuated vaccines'
  ],
  image: 'https://images.unsplash.com/photo-1601758123927-196c7e44e30c?w=600&h=400&fit=crop'
},
 '6': {
  name: 'Prednisolone - Synthetic Glucocorticoid (Corticosteroid)',
  type: 'Anti-Inflammatories',
  description: `Prednisolone works by binding to glucocorticoid receptors, leading to reduced inflammation and immune response.
It inhibits the production of inflammatory mediators like prostaglandins and cytokines, helping to control conditions such as allergies, asthma, and autoimmune diseases.`,
  usage: '0.5–1 mg/kg orally every 12–24 hours',
  benefits: 'Controls inflammation, suppresses overactive immune responses, and helps manage conditions like allergies, asthma, and autoimmune diseases.',
  administrationForms: [
    'Tablets (most common)',
    'Oral liquid',
    'Injectable solution',
    'Topical creams (for dermatologic use, less common systemically)'
  ],
  sideEffects: [
    'Common: Increased thirst and urination (PU/PD), Increased appetite, Panting (especially in dogs), Weight gain, Behavioral changes, GI upset (vomiting, diarrhea)',
    'Long-term/high-dose: Immune suppression, Muscle wasting, Thinning skin, Diabetes (especially in cats), Cushing’s disease, Delayed wound healing'
  ],
  precautions: [
    'May cause osteoporosis, glaucoma, or adrenal suppression with prolonged use',
    'Suppresses immune response, increasing infection risk',
    'Can raise blood sugar levels; monitor in diabetic patients'
  ],
  contraindications: [
    'Systemic fungal infections (can worsen due to immune suppression)',
    'Avoid live vaccines during treatment',
    'Contraindicated in patients allergic to prednisolone or other corticosteroids'
  ],
  image: 'https://images.unsplash.com/photo-1601758123927-196c7e44e30c?w=600&h=400&fit=crop'
},
  '7': {
  name: 'Hydrocortisone - Natural Glucocorticoid (Corticosteroid)',
  type: 'Anti-Inflammatories',  
  description: `Hydrocortisone works by activating glucocorticoid receptors, leading to suppression of inflammation and immune responses.
It decreases the production of pro-inflammatory cytokines and inhibits prostaglandin synthesis, helping manage conditions like skin inflammation, allergies, and adrenal insufficiency.`,
  Dosage: ' 0.5–1.0 mg/kg every 12–24 hours',
  benefits: 'Manages inflammation, reduces allergic reactions, and helps treat adrenal insufficiency.',
  administrationForms: [
    'Topical creams, ointments, sprays',
    'Oral tablets (less common)',
    'Injectable solutions (for emergencies or systemic treatment)',
    'Otic drops (for ear infections)',
    'Ophthalmic solutions (for eye inflammation)'
  ],
  sideEffects: [
    'Topical: Skin thinning, Delayed wound healing, Increased risk of local infections, Hair loss at application site (prolonged use)',
    'Systemic: Increased thirst/urination (PU/PD), Increased appetite, Behavioral changes (restlessness, aggression)',
    'Systemic: Immune suppression, Vomiting/diarrhea (rare), Cushing-like symptoms (chronic use), Liver enzyme elevation (especially in dogs)'
  ],
  precautions: [
    'May cause osteoporosis, glaucoma, or adrenal suppression with prolonged use',
    'Suppresses immune response, increasing infection risk',
    'Can raise blood sugar levels; monitor in diabetic patients'
  ],
  contraindications: [
    'Systemic fungal infections (immune suppression risk)',
    'Avoid live vaccines during treatment',
    'Contraindicated in patients allergic to hydrocortisone or other corticosteroids'
  ],
  image: 'https://images.unsplash.com/photo-1601758003122-58f67e7c304d?w=600&h=400&fit=crop'
},
  '8': {
  name: 'Triamcinolone - Synthetic Glucocorticoid (Corticosteroid)',
  type: 'Anti-Inflammatories',  
  description: `Triamcinolone binds to glucocorticoid receptors, leading to suppression of inflammation and immune responses.
It reduces the production of pro-inflammatory cytokines, inhibits prostaglandins, and decreases immune cell activity, making it effective for treating allergies, skin conditions, arthritis, and asthma.`,
  Dosage: '0.005–0.1 mg/kg orally, IM, or SC (often once every 1–2 days or less frequently)',
  benefits: 'Controls inflammation, reduces allergic reactions, and manages autoimmune conditions.',
  administrationForms: [
    'Oral tablets (for long-term control)',
    'Injectable (IM/SC, long-acting depot form for acute issues)',
    'Topical sprays or creams (for localized skin conditions)'
  ],
  sideEffects: [
    'Short-term: Increased thirst/urination (PU/PD), Increased appetite, Behavioral changes (restlessness, aggression), GI upset (vomiting, diarrhea)',
    'Long-term: Immunosuppression (infection risk), Muscle wasting, Liver enlargement, Delayed wound healing',
    'Long-term: Diabetes mellitus (especially in cats), Iatrogenic Cushing’s disease (chronic use)'
  ],
  precautions: [
    'Use cautiously in patients with infections (immune suppression risk)',
    'Monitor blood sugar in diabetic patients',
    'Taper dosage gradually after long-term use to avoid adrenal suppression'
  ],
  contraindications: [
    'Systemic fungal infections',
    'Known hypersensitivity to corticosteroids or Triamcinolone',
    'Avoid live vaccines during treatment (immune suppression risk)'
  ],
  image: 'https://images.unsplash.com/photo-1601758003122-58f67e7c304d?w=600&h=400&fit=crop'
},
  '9': {
    name: 'Dog Probiotic Digestive Aid',
    description: 'Supports gut health and digestion in dogs.',
    features: [
      'Improves stool consistency',
      'Restores gut flora after antibiotics',
      'Powder for easy mixing',
      'Contains live cultures',
      'Non-GMO'
    ],
    usage: 'Add 1 scoop daily to food.',
    ingredients: 'Lactobacillus, Inulin, digestive enzymes.',
    benefits: 'Improves digestion and reduces bloating.',
    image: 'https://images.unsplash.com/photo-1548191265-cc70d3d45ba1?w=600&h=400&fit=crop'
  },
  '10': {
    name: 'Dog Eye Drops - ClearVision',
    description: 'Lubricating and antibacterial eye drops for dogs.',
    features: [
      'Soothes dry, itchy eyes',
      'Prevents eye infections',
      'Safe for daily use',
      'Sterile formula',
      'Easy applicator'
    ],
    usage: '1-2 drops per eye twice daily.',
    ingredients: 'Purified water, sodium chloride, chamomile extract.',
    benefits: 'Relieves irritation and maintains eye health.',
    image: 'https://images.unsplash.com/photo-1601758143920-043b6a3e0b40?w=600&h=400&fit=crop'
  },
  // Medicines 11 to 20 (placeholders with basic content)
  '11': {
    name: 'Dog Medicine 11',
    description: 'Description for dog medicine 11.',
    features: ['Feature 1', 'Feature 2'],
    usage: 'Usage instructions.',
    ingredients: 'Ingredients list.',
    benefits: 'Benefits description.',
    image: 'https://images.unsplash.com/photo-1601758174610-d7ec04bb3ec5?w=600&h=400&fit=crop'
  },
  '12': {
    name: 'Dog Medicine 12',
    description: 'Description for dog medicine 12.',
    features: ['Feature 1', 'Feature 2'],
    usage: 'Usage instructions.',
    ingredients: 'Ingredients list.',
    benefits: 'Benefits description.',
    image: 'https://images.unsplash.com/photo-1601758025810-6a3db74b7867?w=600&h=400&fit=crop'
  },
  '13': {
    name: 'Dog Medicine 13',
    description: 'Description for dog medicine 13.',
    features: ['Feature 1', 'Feature 2'],
    usage: 'Usage instructions.',
    ingredients: 'Ingredients list.',
    benefits: 'Benefits description.',
    image: 'https://images.unsplash.com/photo-1601758013926-e377fb1d94fc?w=600&h=400&fit=crop'
  },
  '14': {
    name: 'Dog Medicine 14',
    description: 'Description for dog medicine 14.',
    features: ['Feature 1', 'Feature 2'],
    usage: 'Usage instructions.',
    ingredients: 'Ingredients list.',
    benefits: 'Benefits description.',
    image: 'https://images.unsplash.com/photo-1601758171875-3e0c39b6b7d1?w=600&h=400&fit=crop'
  },
  '15': {
    name: 'Dog Medicine 15',
    description: 'Description for dog medicine 15.',
    features: ['Feature 1', 'Feature 2'],
    usage: 'Usage instructions.',
    ingredients: 'Ingredients list.',
    benefits: 'Benefits description.',
    image: 'https://images.unsplash.com/photo-1601758056423-7b5b3f1fcf7e?w=600&h=400&fit=crop'
  },
  '16': {
    name: 'Dog Medicine 16',
    description: 'Description for dog medicine 16.',
    features: ['Feature 1', 'Feature 2'],
    usage: 'Usage instructions.',
    ingredients: 'Ingredients list.',
    benefits: 'Benefits description.',
    image: 'https://images.unsplash.com/photo-1601758163820-5d78f6cf6f2a?w=600&h=400&fit=crop'
  },
  '17': {
    name: 'Dog Medicine 17',
    description: 'Description for dog medicine 17.',
    features: ['Feature 1', 'Feature 2'],
    usage: 'Usage instructions.',
    ingredients: 'Ingredients list.',
    benefits: 'Benefits description.',
    image: 'https://images.unsplash.com/photo-1601758114519-1e7d640fbb0b?w=600&h=400&fit=crop'
  },
  '18': {
    name: 'Dog Medicine 18',
    description: 'Description for dog medicine 18.',
    features: ['Feature 1', 'Feature 2'],
    usage: 'Usage instructions.',
    ingredients: 'Ingredients list.',
    benefits: 'Benefits description.',
    image: 'https://images.unsplash.com/photo-1601758016972-52830a9c3ac7?w=600&h=400&fit=crop'
  },
  '19': {
    name: 'Dog Medicine 19',
    description: 'Description for dog medicine 19.',
    features: ['Feature 1', 'Feature 2'],
    usage: 'Usage instructions.',
    ingredients: 'Ingredients list.',
    benefits: 'Benefits description.',
    image: 'https://images.unsplash.com/photo-1601758153120-7e4f5dbf3bc2?w=600&h=400&fit=crop'
  },
  '20': {
    name: 'Dog Medicine 20',
    description: 'Description for dog medicine 20.',
    features: ['Feature 1', 'Feature 2'],
    usage: 'Usage instructions.',
    ingredients: 'Ingredients list.',
    benefits: 'Benefits description.',
    image: 'https://images.unsplash.com/photo-1601758175510-80d1d4f36e4e?w=600&h=400&fit=crop'
  },
  '21': {
  name: 'Dog Joint Support - FlexiMove',
  description: 'Advanced joint care supplement for dogs with arthritis or mobility issues.',
  features: [
    'Glucosamine & Chondroitin blend',
    'Supports cartilage health',
    'Strengthens joints',
    'Easy chewable form',
    'Vet-approved formula'
  ],
  usage: 'One chew per 10kg body weight daily.',
  ingredients: 'Glucosamine, Chondroitin, MSM, Omega-3.',
  benefits: 'Improves flexibility, reduces joint pain.',
  image: 'https://images.unsplash.com/photo-1601758191470-cb10898382ac?w=600&h=400&fit=crop'
},
'22': {
  name: 'Dog Dental Chews - FreshBreath Bites',
  description: 'Dental chews that clean teeth and freshen breath.',
  features: [
    'Removes plaque',
    'Fights tartar',
    'Fresh mint flavor',
    'Wheat-free',
    'Recommended for daily use'
  ],
  usage: 'One chew per day.',
  ingredients: 'Mint, parsley, rice flour, glycerin.',
  benefits: 'Cleaner teeth, fresher breath.',
  image: 'https://images.unsplash.com/photo-1601758103309-df1e602b2a76?w=600&h=400&fit=crop'
},
'23': {
  name: 'Dog Urinary Health Support',
  description: 'Supplement supporting urinary tract health in dogs.',
  features: [
    'Cranberry extract',
    'Reduces risk of UTIs',
    'Powder form',
    'No artificial preservatives',
    'Vet-recommended'
  ],
  usage: 'Sprinkle 1 scoop onto food daily.',
  ingredients: 'Cranberry extract, Vitamin C, probiotics.',
  benefits: 'Promotes healthy urinary tract function.',
  image: 'https://images.unsplash.com/photo-1601758200726-0c61f6775ea3?w=600&h=400&fit=crop'
},
'24': {
  name: 'Dog Appetite Stimulant - YummyBites',
  description: 'Boosts appetite in dogs recovering from illness.',
  features: [
    'Highly palatable',
    'Soft chew',
    'Rich in nutrients',
    'No artificial flavors',
    'Gentle on stomach'
  ],
  usage: 'One chew twice daily until appetite improves.',
  ingredients: 'Chicken liver, vitamins, amino acids.',
  benefits: 'Encourages eating, supports recovery.',
  image: 'https://images.unsplash.com/photo-1601758144700-6b6ab1e91d6d?w=600&h=400&fit=crop'
},
'25': {
  name: 'Dog Anti-Diarrhea Paste',
  description: 'Fast-acting paste to relieve diarrhea.',
  features: [
    'Soothes digestive tract',
    'Easy to administer',
    'Works within hours',
    'Suitable for all breeds',
    'Natural ingredients'
  ],
  usage: 'Give recommended dose based on weight twice daily.',
  ingredients: 'Kaolin, pectin, electrolytes.',
  benefits: 'Firm stools, rehydrates body.',
  image: 'https://images.unsplash.com/photo-1601758028271-3a68c54d9f27?w=600&h=400&fit=crop'
},
'26': {
  name: 'Dog Immune Booster - VitaPup',
  description: 'Vitamin blend for stronger immune defenses.',
  features: [
    'Rich in antioxidants',
    'Supports immune response',
    'Tasty chewable',
    'For all ages',
    'No added sugar'
  ],
  usage: 'One chew per day.',
  ingredients: 'Vitamin C, E, selenium, zinc.',
  benefits: 'Boosts immunity and general health.',
  image: 'https://images.unsplash.com/photo-1601758131186-79fc8fc1b90c?w=600&h=400&fit=crop'
},
'27': {
  name: 'Dog Hot Spot Spray',
  description: 'Soothing spray for itchy and irritated skin.',
  features: [
    'Reduces redness',
    'Promotes healing',
    'Alcohol-free',
    'Safe if licked',
    'Fast relief'
  ],
  usage: 'Spray directly on affected area 2-3 times daily.',
  ingredients: 'Aloe vera, tea tree oil, chamomile.',
  benefits: 'Calms itching and supports skin recovery.',
  image: 'https://images.unsplash.com/photo-1601758156657-99c72a3e9c2d?w=600&h=400&fit=crop'
},
'28': {
  name: 'Dog Liver Support Tablets',
  description: 'Herbal liver support for detox and health.',
  features: [
    'Milk thistle based',
    'Supports detox',
    'Easy-to-swallow tablets',
    'Natural ingredients',
    'For all sizes'
  ],
  usage: 'One tablet per 10kg once daily.',
  ingredients: 'Milk thistle, turmeric, dandelion root.',
  benefits: 'Promotes healthy liver function.',
  image: 'https://images.unsplash.com/photo-1601758097615-b2eb738e2c5a?w=600&h=400&fit=crop'
},
'29': {
  name: 'Dog Allergy Shampoo',
  description: 'Gentle shampoo for dogs with sensitive skin.',
  features: [
    'Hypoallergenic',
    'Soothes itching',
    'Fragrance-free',
    'Oatmeal-based',
    'pH balanced'
  ],
  usage: 'Lather and rinse thoroughly once weekly or as needed.',
  ingredients: 'Colloidal oatmeal, aloe vera, coconut extract.',
  benefits: 'Cleanses and calms irritated skin.',
  image: 'https://images.unsplash.com/photo-1601758180679-3b01b83515a9?w=600&h=400&fit=crop'
},
'30': {
  name: 'Dog Recovery Kit',
  description: 'Complete post-op care kit for dogs after surgery.',
  features: [
    'Includes pain relief',
    'Wound care ointment',
    'Antibiotic course',
    'Healing support supplement',
    'Vet-designed pack'
  ],
  usage: 'Use as directed by vet.',
  ingredients: 'Varies per product (NSAID, antibiotics, vitamins).',
  benefits: 'Speeds recovery, reduces complications.',
  image: 'https://images.unsplash.com/photo-1601758067804-6b876f5f5f03?w=600&h=400&fit=crop'
}
};

const DogMedicineDetailPage = () => {
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
          <Link to="/dogs/medicines" className="mt-4 inline-block text-blue-500 underline">
            Back to Dog Medicines
          </Link>
        </div>
      </div>
    );
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

                {medicineData.type && (
                  <p className="text-sm font-medium text-theme-deepsky mb-2">
                    Type: <span className="text-gray-600">{medicineData.type}</span>
                  </p>
                )}

                <p className="text-gray-600 mb-6">{medicineData.description}</p>

                <div className="space-y-4 mb-8">
                  <div>
                    <h2 className="text-xl font-semibold mb-2 text-theme-deepsky">Dosage</h2>
                    <p className="text-gray-600">{medicineData.Dosage}</p>
                  </div>

{/*                   <div>
                    <h2 className="text-xl font-semibold mb-2 text-theme-deepsky">Ingredients</h2>
                    <p className="text-gray-600">{medicineData.ingredients}</p>
                  </div> */}

                  <div>
                    <h2 className="text-xl font-semibold mb-2 text-theme-deepsky">Benefits</h2>
                    <p className="text-gray-600">{medicineData.benefits}</p>
                  </div>

                  {medicineData.features && (
                    <div>
                      <h2 className="text-xl font-semibold mb-2 text-theme-deepsky">Features</h2>
                      <ul className="list-disc list-inside text-gray-600">
                        {medicineData.features.map((feature: string, index: number) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {medicineData.administrationForms && (
                    <div>
                      <h2 className="text-xl font-semibold mb-2 text-theme-deepsky">Administration Forms</h2>
                      <ul className="list-disc list-inside text-gray-600">
                        {medicineData.administrationForms.map((form: string, index: number) => (
                          <li key={index}>{form}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {medicineData.sideEffects && (
                    <div>
                      <h2 className="text-xl font-semibold mb-2 text-theme-deepsky">Side Effects</h2>
                      <ul className="list-disc list-inside text-gray-600">
                        {medicineData.sideEffects.map((effect: string, index: number) => (
                          <li key={index}>{effect}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {medicineData.precautions && (
                    <div>
                      <h2 className="text-xl font-semibold mb-2 text-theme-deepsky">Precautions</h2>
                      <ul className="list-disc list-inside text-gray-600">
                        {medicineData.precautions.map((precaution: string, index: number) => (
                          <li key={index}>{precaution}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {medicineData.contraindications && (
                    <div>
                      <h2 className="text-xl font-semibold mb-2 text-theme-deepsky">Contraindications</h2>
                      <ul className="list-disc list-inside text-gray-600">
                        {medicineData.contraindications.map((contra: string, index: number) => (
                          <li key={index}>{contra}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <Link
                  to="/dogs/medicines"
                  className="bg-vet-blue hover:bg-vet-darkblue text-white px-6 py-3 rounded-md font-semibold transition-colors inline-block"
                >
                  Back to Dog Medicines
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DogMedicineDetailPage;

