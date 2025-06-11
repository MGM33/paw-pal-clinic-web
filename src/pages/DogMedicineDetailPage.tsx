import React from 'react';
import { useParams, Link } from 'react-router-dom';

const medicinesData: Record<string, any> = {
  '1': {
    name: 'Canine Antibiotic - AmoxiVet 250mg',
    description: 'Broad-spectrum antibiotic for treating respiratory, urinary, and skin infections in dogs.',
    features: [
      'Veterinary-grade Amoxicillin',
      'Fast-acting and safe',
      'Twice daily dosage',
      'Treats multiple infections',
      'Vet recommended'
    ],
    usage: 'One capsule every 12 hours with food for 7-10 days.',
    ingredients: 'Amoxicillin trihydrate, cellulose, gelatin.',
    benefits: 'Eliminates bacterial infections and promotes healing.',
    image: 'https://images.unsplash.com/photo-1601758123927-196c7e44e30c?w=600&h=400&fit=crop'
  },
  '2': {
    name: 'Dog Dewormer - WormAway XL',
    description: 'Effective treatment for roundworms, hookworms, and tapeworms.',
    features: [
      'Covers all major parasites',
      'Single-dose tablet',
      'Tasty liver flavor',
      'For dogs 4 weeks and older',
      'No fasting required'
    ],
    usage: 'One tablet per 10kg body weight. Repeat after 14 days.',
    ingredients: 'Praziquantel, Pyrantel, Febantel.',
    benefits: 'Removes parasites, improves digestion, restores energy.',
    image: 'https://images.unsplash.com/photo-1560743641-3914f2c45636?w=600&h=400&fit=crop'
  },
  '3': {
    name: 'Canine Allergy Relief - AllerEase',
    description: 'Reduces itching, redness, and other allergy symptoms in dogs.',
    features: [
      'Fast itch relief',
      'Reduces skin inflammation',
      'Non-drowsy formula',
      'Safe for long-term use',
      'Veterinarian developed'
    ],
    usage: 'One chew daily during allergy season or as advised.',
    ingredients: 'Loratadine, fish oil, Vitamin E.',
    benefits: 'Minimizes allergic reactions and soothes skin.',
    image: 'https://images.unsplash.com/photo-1601758003122-58f67e7c304d?w=600&h=400&fit=crop'
  },
  '4': {
    name: 'Puppy Multivitamin Drops',
    description: 'Essential vitamins and minerals to support healthy puppy growth.',
    features: [
      'For puppies under 1 year',
      'Supports bone and brain development',
      'Easy liquid format',
      'Natural beef flavor',
      'No artificial colors'
    ],
    usage: 'Add 1ml to food daily for puppies under 10kg.',
    ingredients: 'Vitamin A, D3, B12, Zinc, Iron.',
    benefits: 'Boosts immunity and promotes healthy growth.',
    image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600&h=400&fit=crop'
  },
  '5': {
    name: 'Dog Pain Relief Chews - ComfortCanine',
    description: 'Chewable pain relievers for joint discomfort and minor injuries.',
    features: [
      'Chewable beef flavor',
      'NSAID-free natural formula',
      'Great for older dogs',
      'Reduces inflammation',
      'Fast action within 30 minutes'
    ],
    usage: 'One chew per 15kg body weight every 8 hours.',
    ingredients: 'Turmeric, Glucosamine, Devil’s Claw, Omega 3.',
    benefits: 'Relieves joint and muscle pain, improves mobility.',
    image: 'https://images.unsplash.com/photo-1604503468508-b3c0f5d4f43d?w=600&h=400&fit=crop'
  },
  '6': {
    name: 'Dog Ear Cleaner - OtoCleanse',
    description: 'Antibacterial solution to clean and protect dog ears.',
    features: [
      'Reduces odor and wax buildup',
      'Soothes irritation',
      'Alcohol-free',
      'Gentle for daily use',
      'Prevents ear infections'
    ],
    usage: 'Apply to ear canal and massage gently. Wipe excess fluid.',
    ingredients: 'Aloe vera, chlorhexidine, salicylic acid.',
    benefits: 'Keeps ears clean and healthy, prevents infections.',
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1b2e22c?w=600&h=400&fit=crop'
  },
  '7': {
    name: 'Dog Skin & Coat Supplement',
    description: 'Improves skin condition and enhances coat shine.',
    features: [
      'High in Omega-3 & 6',
      'Reduces dry skin',
      'Supports shedding control',
      'Natural salmon oil',
      'Vet-approved'
    ],
    usage: 'Mix with food once daily (1 tsp per 10kg body weight).',
    ingredients: 'Salmon oil, flaxseed, biotin, zinc.',
    benefits: 'Healthier skin, shiny coat, reduced itching.',
    image: 'https://images.unsplash.com/photo-1608500219845-38349f58a39e?w=600&h=400&fit=crop'
  },
  '8': {
    name: 'CalmPaws - Dog Calming Tablets',
    description: 'Natural calming aid for dogs with anxiety or hyperactivity.',
    features: [
      'Non-sedative calming formula',
      'Ideal for fireworks, travel, vet visits',
      'Chamomile & L-Theanine',
      'Chewable tablets',
      'No side effects'
    ],
    usage: 'Give 30 minutes before stressful event.',
    ingredients: 'Chamomile, Valerian Root, L-Theanine, Passionflower.',
    benefits: 'Reduces stress, anxiety, and nervousness.',
    image: 'https://images.unsplash.com/photo-1558944351-94ae5f7b631d?w=600&h=400&fit=crop'
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
                <p className="text-gray-600 mb-6">{medicineData.description}</p>

                <div className="space-y-4 mb-8">
                  <div>
                    <h2 className="text-xl font-semibold mb-2 text-theme-deepsky">Usage</h2>
                    <p className="text-gray-600">{medicineData.usage}</p>
                  </div>

                  <div>
                    <h2 className="text-xl font-semibold mb-2 text-theme-deepsky">Ingredients</h2>
                    <p className="text-gray-600">{medicineData.ingredients}</p>
                  </div>

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
