import React from 'react';
import { useParams, Link } from 'react-router-dom';

const catMedicinesData: Record<string, any> = {
  '1': {
    name: 'Feline Antibiotic - ClawCure 100mg',
    description: 'Effective treatment for respiratory and urinary infections in cats.',
    usage: 'One tablet daily with food for 5-7 days.',
    ingredients: 'Clavamox, cellulose, fish flavoring.',
    dosage: '1 tablet per 4kg body weight daily.',
    sideEffects: 'May cause mild drowsiness or digestive upset.',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&h=400&fit=crop&sig=cat-1'
  },
  '2': {
    name: 'Cat Dewormer - PurrClean',
    description: 'Removes roundworms and hookworms effectively.',
    usage: 'Single dose, repeat after 2 weeks.',
    ingredients: 'Pyrantel pamoate.',
    dosage: '1ml per kg body weight.',
    sideEffects: 'Occasional mild diarrhea.',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&h=400&fit=crop&sig=cat-2'
  },
  '3': {
    name: 'Feline Allergy Relief - PurrEase',
    description: 'Relieves itching and allergic reactions in cats.',
    usage: 'One chew daily during allergy season.',
    ingredients: 'Loratadine, Omega 3, Vitamin E.',
    dosage: '1 chew per 5kg body weight.',
    sideEffects: 'Rare drowsiness.',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&h=400&fit=crop&sig=cat-3'
  },
  '4': {
    name: 'Hairball Control - FurFlow',
    description: 'Helps prevent and eliminate hairballs.',
    usage: 'Apply gel to paw twice a week.',
    ingredients: 'Petroleum jelly, malt syrup.',
    dosage: 'Small pea-sized amount.',
    sideEffects: 'None reported.',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&h=400&fit=crop&sig=cat-4'
  },
  '5': {
    name: 'Feline Probiotic - GutPurr',
    description: 'Supports healthy digestion and gut flora.',
    usage: 'Sprinkle over food daily.',
    ingredients: 'Lactobacillus, Bifidobacterium.',
    dosage: '1 sachet daily.',
    sideEffects: 'None known.',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&h=400&fit=crop&sig=cat-5'
  },
  '6': {
    name: 'Cat Pain Relief - SoftPaws',
    description: 'Reduces mild to moderate pain in cats.',
    usage: 'Administer as prescribed.',
    ingredients: 'Meloxicam.',
    dosage: '0.05mg per kg body weight.',
    sideEffects: 'Possible stomach upset.',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&h=400&fit=crop&sig=cat-6'
  },
  '7': {
    name: 'Feline Eye Drops - ClearSight',
    description: 'Soothes irritation and dryness in cat eyes.',
    usage: '1-2 drops per eye twice daily.',
    ingredients: 'Saline, vitamin A.',
    dosage: 'As directed.',
    sideEffects: 'Temporary tearing.',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&h=400&fit=crop&sig=cat-7'
  },
  '8': {
    name: 'Calming Chews - ChillPurr',
    description: 'Helps reduce anxiety and stress.',
    usage: 'Give 30 minutes before stressful event.',
    ingredients: 'L-theanine, chamomile.',
    dosage: '1 chew per 4kg body weight.',
    sideEffects: 'Possible mild sedation.',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&h=400&fit=crop&sig=cat-8'
  },
  '9': {
    name: 'Feline Multivitamin - VitalPurr',
    description: 'Daily multivitamin for overall health.',
    usage: '1 tablet daily.',
    ingredients: 'Vitamins A, D, E, taurine.',
    dosage: '1 tablet daily.',
    sideEffects: 'None reported.',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&h=400&fit=crop&sig=cat-9'
  },
  '10': {
    name: 'Feline Joint Support - FlexiCat',
    description: 'Promotes joint health in senior cats.',
    usage: '1 chew daily.',
    ingredients: 'Glucosamine, chondroitin.',
    dosage: '1 chew per 5kg body weight.',
    sideEffects: 'Rare loose stool.',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&h=400&fit=crop&sig=cat-10'
  },
  '11': {
    name: 'Feline Dental Gel - FreshPurr',
    description: 'Supports oral hygiene and fresh breath.',
    usage: 'Apply to teeth and gums daily.',
    ingredients: 'Chlorhexidine, aloe vera.',
    dosage: 'Pea-sized amount.',
    sideEffects: 'None reported.',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&h=400&fit=crop&sig=cat-11'
  },
  '12': {
    name: 'Cat Ear Cleaner - EarEase',
    description: 'Cleans and soothes cat ears.',
    usage: 'Apply twice weekly.',
    ingredients: 'Aloe, salicylic acid.',
    dosage: '5 drops per ear.',
    sideEffects: 'Temporary head shaking.',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&h=400&fit=crop&sig=cat-12'
  },
  '13': {
    name: 'Feline Appetite Stimulant - PurrBoost',
    description: 'Encourages eating in cats with low appetite.',
    usage: 'As prescribed.',
    ingredients: 'Mirtazapine.',
    dosage: '1mg every 24-48 hours.',
    sideEffects: 'Possible vocalization, restlessness.',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&h=400&fit=crop&sig=cat-13'
  },
  '14': {
    name: 'Cat Flea Treatment - FleaGone',
    description: 'Protects against fleas for 1 month.',
    usage: 'Apply to back of neck.',
    ingredients: 'Fipronil.',
    dosage: 'As per product instructions.',
    sideEffects: 'Mild skin irritation possible.',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&h=400&fit=crop&sig=cat-14'
  },
  '15': {
    name: 'Feline Urinary Health - Uripurr',
    description: 'Supports urinary tract health.',
    usage: 'Mix with food daily.',
    ingredients: 'Cranberry extract, DL-methionine.',
    dosage: '1 scoop daily.',
    sideEffects: 'None known.',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&h=400&fit=crop&sig=cat-15'
  },
  '16': {
    name: 'Feline Skin Supplement - CoatShine',
    description: 'Promotes healthy skin and shiny coat.',
    usage: 'Daily with food.',
    ingredients: 'Omega 3 & 6 fatty acids.',
    dosage: '1 capsule daily.',
    sideEffects: 'Rare soft stool.',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&h=400&fit=crop&sig=cat-16'
  },
  '17': {
    name: 'Feline Vitamin B Complex - B-Purr',
    description: 'Supports energy and nerve health.',
    usage: '1 tablet daily.',
    ingredients: 'B1, B6, B12.',
    dosage: '1 tablet daily.',
    sideEffects: 'None reported.',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&h=400&fit=crop&sig=cat-17'
  },
  '18': {
    name: 'Feline Immune Booster - PurrDefend',
    description: 'Enhances immune function.',
    usage: 'Daily during illness recovery.',
    ingredients: 'Echinacea, lysine.',
    dosage: '1 sachet daily.',
    sideEffects: 'None known.',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&h=400&fit=crop&sig=cat-18'
  },
  '19': {
    name: 'Feline Liver Support - HepatoPurr',
    description: 'Supports liver health.',
    usage: 'Daily with meals.',
    ingredients: 'SAMe, milk thistle.',
    dosage: '1 tablet per 5kg body weight.',
    sideEffects: 'Possible mild nausea.',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&h=400&fit=crop&sig=cat-19'
  },
  '20': {
    name: 'Cat Anti-Nausea - NoPurrUp',
    description: 'Relieves nausea and vomiting.',
    usage: 'As prescribed.',
    ingredients: 'Ondansetron.',
    dosage: '0.1mg per kg body weight.',
    sideEffects: 'None common.',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&h=400&fit=crop&sig=cat-20'
  },
  '21': {
    name: 'Feline Thyroid Support - ThyroPurr',
    description: 'Helps regulate thyroid function.',
    usage: 'Twice daily.',
    ingredients: 'Methimazole.',
    dosage: '2.5mg per dose.',
    sideEffects: 'Possible loss of appetite.',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&h=400&fit=crop&sig=cat-21'
  },
  '22': {
    name: 'Cat Bladder Stones Formula - StoneAway',
    description: 'Helps dissolve certain bladder stones.',
    usage: 'As prescribed.',
    ingredients: 'Prescription diet components.',
    dosage: 'As directed by vet.',
    sideEffects: 'None common.',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&h=400&fit=crop&sig=cat-22'
  },
  '23': {
    name: 'Feline Worm Preventative - WormShield',
    description: 'Monthly preventative for intestinal worms.',
    usage: 'Oral tablet monthly.',
    ingredients: 'Milbemycin.',
    dosage: 'As per packaging.',
    sideEffects: 'Rare vomiting.',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&h=400&fit=crop&sig=cat-23'
  },
  '24': {
    name: 'Feline Heartworm Prevention - HeartPurr',
    description: 'Prevents heartworm disease.',
    usage: 'Monthly tablet.',
    ingredients: 'Ivermectin.',
    dosage: 'As directed.',
    sideEffects: 'Rare allergic reactions.',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&h=400&fit=crop&sig=cat-24'
  },
  '25': {
    name: 'Cat Vitamin D Supplement - SunnyPurr',
    description: 'Supports bone health.',
    usage: 'Weekly dose.',
    ingredients: 'Vitamin D3.',
    dosage: 'As directed.',
    sideEffects: 'None known.',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&h=400&fit=crop&sig=cat-25'
  },
  '26': {
    name: 'Feline Antifungal - FungAway',
    description: 'Treats fungal skin infections.',
    usage: 'Apply to affected area twice daily.',
    ingredients: 'Miconazole.',
    dosage: 'Thin layer.',
    sideEffects: 'Mild skin irritation.',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&h=400&fit=crop&sig=cat-26'
  },
  '27': {
    name: 'Feline Blood Pressure Med - PurrPress',
    description: 'Controls high blood pressure.',
    usage: 'Daily tablet.',
    ingredients: 'Amlodipine.',
    dosage: '0.625mg daily.',
    sideEffects: 'Possible gum overgrowth.',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&h=400&fit=crop&sig=cat-27'
  },
  '28': {
    name: 'Feline Anti-Inflammatory - CalmPaws',
    description: 'Reduces swelling and inflammation.',
    usage: 'As prescribed.',
    ingredients: 'Prednisolone.',
    dosage: 'As directed.',
    sideEffects: 'Increased thirst.',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&h=400&fit=crop&sig=cat-28'
  },
  '29': {
    name: 'Feline Anti-Diarrheal - StoolEase',
    description: 'Helps firm up stools.',
    usage: 'Twice daily until resolved.',
    ingredients: 'Kaolin, pectin.',
    dosage: 'As directed.',
    sideEffects: 'None common.',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&h=400&fit=crop&sig=cat-29'
  },
  '30': {
    name: 'Feline Hydration Support - HydraPurr',
    description: 'Supports hydration during illness.',
    usage: 'Add to drinking water.',
    ingredients: 'Electrolyte blend.',
    dosage: 'As directed.',
    sideEffects: 'None reported.',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&h=400&fit=crop&sig=cat-30'
  }
};

const CatMedicineDetailPage = () => {
  const { medicineId } = useParams<{ medicineId: string }>();
  const medicineData = catMedicinesData[medicineId || ''];

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
          <Link to="/cats/medicines" className="mt-4 inline-block text-blue-500 underline">
            Back to Cat Medicines
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
                    <h2 className="text-xl font-semibold mb-2 text-theme-deepsky">Dosage</h2>
                    <p className="text-gray-600">{medicineData.dosage}</p>
                  </div>

                  <div>
                    <h2 className="text-xl font-semibold mb-2 text-theme-deepsky">Side Effects</h2>
                    <p className="text-gray-600">{medicineData.sideEffects}</p>
                  </div>
                </div>

                <Link
                  to="/cats/medicines"
                  className="bg-vet-green hover:bg-vet-darkgreen text-white px-6 py-3 rounded-md font-semibold transition-colors inline-block"
                >
                  Back to Cat Medicines
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatMedicineDetailPage;
