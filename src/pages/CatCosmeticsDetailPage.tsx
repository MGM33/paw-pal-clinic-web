import React from 'react';
import { useParams, Link } from 'react-router-dom';

// Example cosmetics data
const cosmeticsData: Record<string, any> = {
   '1': {
    name: 'Primigo A-Z Plus Canine Multivitamin',
    type: 'VITAMINS & SUPPLEMENTS',
    description: 'A comprehensive multivitamin supplement designed to support nutritional needs, growth, pregnancy, lactation, and coat health in dogs.',
    formsOfAdministration: `1. Chewable Tablets (60 tablets per bottle)
- Dosage: 1 tablet per 10 kg of body weight.
- Administration: Tablets can be given directly or mixed with food.

2. Palatable Paste (60 ml tube)
- Dosage: 1 ml per 10 kg of body weight.
- Administration: Can be given directly or mixed with food.`,
    dosage: `Chewable Tablets: 1 tablet per 10 kg body weight.
Palatable Paste: 1 ml per 10 kg body weight.`,
    indicationsForUse: `- Supports dogs with nutritional deficiencies.
- Assists during pregnancy and lactation.
- Supports growth and development phases.
- Improves appetite.
- Reduces stress.
- Enhances coat condition.`,
    precautionsAndContraindications: `Precautions:
- Use only as directed by a veterinarian to avoid overdose or imbalanced nutrition.
- Monitor for allergic reactions or intolerance.
- Store in a cool, dry place away from sunlight and children.

Contraindications:
- Not suitable for dogs with known hypersensitivity to any ingredient.
- Avoid use in dogs with certain medical conditions (e.g., hypercalcemia) without veterinary approval.`,
    image: 'https://i.postimg.cc/RhtdNBCx/Picture1.jpg', 
  },
  '2': {
    name: 'Omegold',
    type: 'VITAMINS & SUPPLEMENTS',
    description: 'Soft gelatin capsules designed to support cardiovascular health, energy production, male reproductive health, and antioxidant support.',
    formsOfAdministration: `Dosage Form: Soft gelatin capsules.
Packaging: Each box contains 30 capsules.`,
    dosage: 'Recommended Dose: One capsule daily, preferably after meals with water.',
    indicationsForUse: `- Supports cardiovascular health.
- Enhances energy production.
- Improves male reproductive health.
- Provides antioxidant support.`,
    precautionsAndContraindications: `Precautions:
- Use with caution if taking blood thinners (e.g., warfarin) due to bleeding risk.
- Avoid if allergic to fish or shellfish.
- Consult doctor if you have liver disease, diabetes, or heart rhythm problems.

Contraindications:
- Fish allergy: Do not use if allergic to fish or omega-3 products.
- Bleeding disorders: Contraindicated in patients with active bleeding disorders.
- Pre/Post surgery: Avoid use before surgery unless advised by a doctor due to bleeding risk.`,
    image: 'https://i.postimg.cc/8zpdVWvS/Picture2.jpg',
  },
  '3': {
  name: 'Forvet Omega Forte',
  type: 'VITAMINS & SUPPLEMENTS',
  description: 'Liquid supplement to promote healthy coat, skin, and overall well-being in dogs.',
  formsOfAdministration: `Dosage Form: Liquid supplement.
Packaging: Available in 100 ml and 250 ml bottles.`,
  dosage: `Small Dogs (up to 5 kg): 2.5 ml – 5 ml daily.
Medium Dogs (5 kg to 15 kg): 5 ml – 7.5 ml daily.
Administration: Mix the appropriate dose well into the pet's food.`,
  indicationsForUse: `- Promotes a healthy, shiny coat and skin.
- Addresses dull coat and excessive shedding.
- Manages dry skin, irritations, itching, redness, and bald areas.
- Reduces excessive dander.
- Enhances appetite.
- Supports immune function.
- Aids bone and joint health.
- Supports nervous system function and pregnancy health.`,
  precautionsAndContraindications: `Precautions:
- Use with caution in bleeding disorders (may increase bleeding time).
- Monitor patients on anticoagulants due to enhanced blood thinner effects.
- Take with food to reduce gastrointestinal upset risk.

Contraindications:
- Allergy to fish or omega-3 products.
- Severe liver disease.
- Hypersensitivity to any ingredient.`,
  image: 'https://i.postimg.cc/kgYS3H9Q/Picture3.jpg',
},

  '4': {
  name: 'Canina Cat-Vitamin Tabs',
  type: 'VITAMINS & SUPPLEMENTS',
  description: 'Chewable vitamin tablets designed to prevent deficiencies and support overall health in cats.',
  formsOfAdministration: `Form: Chewable tablets
Packaging: 50g (approx. 100 tablets) and 125g (approx. 250 tablets) containers`,
  dosage: `Standard: 3–5 tablets daily.
Special: Dosage can be doubled for pregnant, lactating, or growing cats.`,
  indicationsForUse: `- Prevents vitamin deficiencies in cats, especially those on meat-heavy diets.
- Supports health of pregnant and lactating cats.
- Enhances immune system and promotes healthy growth.
- Compensates for nutrient deficiencies.`,
  precautionsAndContraindications: `Precautions:
- Use only as directed according to weight and age.
- Store in a cool, dry place away from sunlight.
- Monitor for allergic or digestive reactions after first use.

Contraindications:
- Not suitable for cats with known hypersensitivity.
- Avoid in cats with kidney or liver issues unless approved by vet.
- Do not use with other vitamin supplements to prevent overdose.`,
  image: 'https://i.postimg.cc/mZStWnyP/Picture4.png',
},

  '5': {
  name: 'Guard Plus Multi-Vitamin',
  type: 'VITAMINS & SUPPLEMENTS',
  description: 'Liquid vitamin supplement designed to support immune system, appetite, nervous system, growth, and lactation.',
  formsOfAdministration: 'Form: Liquid supplement\nVolume: 100 ml bottle',
  dosage: 'Consult a veterinarian for appropriate dosing based on pet size, age, and health condition.',
  indicationsForUse: `- Strengthens immune system
- Stimulates appetite
- Supports nervous system health
- Enhances growth and development
- Prevents hair loss
- Increases milk production in lactating animals`,
  precautionsAndContraindications: `Precautions:
- Avoid exceeding recommended dose to prevent toxicity.
- Consult doctor if pregnant, breastfeeding, or taking medications.
- Store in a cool, dry place away from children.

Contraindications:
- Hypersensitivity/allergy to ingredients.
- Not for individuals with hypervitaminosis.
- Avoid use with certain medical conditions unless advised by doctor (e.g., kidney disorders).`,
  image: 'https://i.postimg.cc/T1PG6tTb/Picture5.jpg',
},

  '6': {
  name: 'Covalent Veta Zinc',
  type: 'VITAMINS & SUPPLEMENTS',
  description: 'Oral liquid solution to enhance general health, skin, immune function, and reproductive health in pets.',
  formsOfAdministration: 'Type: Oral liquid solution\nPackaging: 30 ml and 125 ml bottles',
  dosage: 'Consult a veterinarian for appropriate dosing based on pet size, age, and health condition.',
  indicationsForUse: `- Enhances general health and vitality
- Promotes healthy skin and coat
- Supports immune function
- Improves reproductive health
- Boosts energy and activity levels
- Increases resistance to diseases`,
  precautionsAndContraindications: `Precautions:
- Use with caution in patients with kidney or liver impairment.
- Avoid exceeding recommended dosage to prevent zinc toxicity.
- Long-term use may cause copper deficiency; monitor trace minerals if used over time.

Contraindications:
- Hypersensitivity to zinc or any ingredient.
- Severe renal disease (risk of zinc accumulation).
- Not recommended for children without medical advice.`,
  image: 'https://i.postimg.cc/SN2Ff2Rm/Picture6.jpg',
},

  '7': {
  name: 'Max Pet',
  type: 'VITAMINS & SUPPLEMENTS',
  description: 'Powder supplement with chicken flavor supporting immune function, skin health, joints, and vitality.',
  formsOfAdministration: 'Type: Powder supplement\nFlavor: Chicken\nPackaging: 250g and 500g containers',
  dosage: 'Consult a veterinarian for appropriate dosing based on your dog\'s size, age, and health condition.',
  indicationsForUse: `- Supports immune system function
- Promotes healthy skin and shiny coat
- Enhances joint health
- Boosts overall vitality and energy
- Provides essential nutrients during growth, pregnancy, and lactation`,
  precautionsAndContraindications: `Precautions:
- Use only on specified species and age group.
- Avoid contact with eyes, mouth, or open wounds.
- Wash hands after application and keep treated animals away from children or other pets until dry.

Contraindications:
- Do not use on sick, debilitated, or underweight animals.
- Not for animals with known hypersensitivity to ingredients.
- Avoid use on pregnant or lactating animals unless prescribed by a vet.`,
  image: 'https://i.postimg.cc/Bn33ZZZs/Picture7.jpg',
},

  '8': {
  name: 'Primigo Boost Canine',
  type: 'VITAMINS & SUPPLEMENTS',
  description: 'Chewable tablets and palatable paste supporting immune function, oxidative protection, and tissue health.',
  formsOfAdministration: `Tablet Form: 60 chewable beef-flavored tablets
Paste Form: 60 ml palatable beef-flavored paste`,
  dosage: `Tablets: 1 tablet per 10 kg of body weight daily.
Paste: Consult veterinarian for dosing based on dog size, age, and health.`,
  indicationsForUse: `- Supports immune system function
- Protects cells from oxidative damage
- Enhances antibody production
- Supports vascular and connective tissue health
- Nutritional support during pregnancy, lactation, growth, and stress`,
  precautionsAndContraindications: `Precautions:
- Use only in healthy dogs; not for sick or immunocompromised animals.
- Store and handle vaccine per instructions (usually refrigerated).
- Avoid stress or strenuous activity immediately after vaccination.

Contraindications:
- Do not use in puppies younger than recommended age.
- Avoid use in pregnant or lactating females unless vet advised.
- Do not vaccinate animals with known hypersensitivity to components.`,
  image: 'https://i.postimg.cc/0y9gRtZy/Picture8.jpg',
},

  '9': {
    name: 'REVOLUTION',
    type: 'Cosmetics',
    usage: 'Topical parasiticide for dogs & cats.',
    ingredients: 'Active Principle: Selamectin',
    dosage: `Cats up to 5 lbs: 15 mg (mauve packaging)
Cats 5.1–15 lbs: 45 mg (blue packaging)
Cats 15.1–22 lbs: 60 mg (taupe packaging)`,
    sideEffects: 'Temporary hair loss at application site & safe for pregnant animals.',
    image: 'https://i.postimg.cc/y88fy2vc/Picture9.jpg', 
  },
  '10': {
    name: 'FRONTLINE',
    type: 'Cosmetics',
    usage: 'Topical parasiticide for dogs & cats.',
    ingredients: 'Active Principle: fipronil & (S)-methoprene',
    dosage: `DOGS:
- 5 lbs to 22 lbs
- 23 lbs to 44 lbs
- 45 lbs to 88 lbs
- 89 lbs to 132 lbs
Cats: A single dose size is available for cats and kittens weighing 1.5 lb or more.`,
    sideEffects: 'Side effects are uncommon if used as directed. Possible redness, itching, or discomfort at application site.',
    image: 'https://i.postimg.cc/1Xy05Ndw/Picture10.jpg', 
  },
  '11': {
    name: 'Pti Fipet Plus Topical Spot-on',
    type: 'Cosmetics',
    usage: 'Works as an insecticide and kills parasites.',
    ingredients: 'Active Principle: Fipronil and (S)-Methoprene',
    dosage: `L: 20-40 KG  
M: 10-20 KG  
S: Up to 10 KG — 1.3 ml  
One ampoule is used in puppies over 8 weeks old.  
Protects the dog from insects for 4 weeks; dose repeated monthly.`,
    sideEffects: 'May cause mild skin irritation such as redness or itching at the application site in some cases.',
    image: 'https://i.postimg.cc/CLPCS5sn/Picture11.jpg', 
  },
  '12': {
    name: 'BARS',
    type: 'Cosmetics',
    usage: 'To treat and prevent infestations of fleas, ticks, lice, and various mites, including sarcoptic mange and ear mites.',
    ingredients: 'Active principle: 1 ml contains fipronil – 150 mg, cyflutrin – 5 mg, piperonyl butoxide – 1 mg, diflubenzuron – 1 mg.',
    dosage: 'For animals over 10 kg, use 0.5 ml for every additional 5 kg. For animals under 2 kg, use two drops (0.05 ml) per 0.5 kg of body weight.',
    sideEffects: 'Skin changes like discoloration or itching at the application site, increased salivation, or short-term depression.',
    image: 'https://i.postimg.cc/9MYTSQfM/Picture12.jpg', 
  },
  '13': {
  name: 'BRAVECTO',
  type: 'Cosmetics',
  usage: 'An ectoparasiticide.',
  ingredients: 'Active Principle: Fluralaner.',
  dosage: `
2.0 – 4.5 kg: 112.5 mg for miniature dogs
> 4.5 – 10 kg: 250 mg for small dogs
> 10 – 20 kg: 500 mg for medium dogs
> 20 – 40 kg: 1,000 mg for large dogs
> 40 – 56 kg: 1,400 mg for extra-large dogs
  `.trim(),
  sideEffects: `Tiredness, wobbliness, lethargy (oral and spot-on products: <1 in 10,000 dogs and 1 in 100 cats).
Injectable: 1 in 100 dogs may seem tired.
Muscle tremors and seizures: <1 in 10,000 treated dogs.
Safe for pregnant animals.`,
  image: 'https://i.postimg.cc/SRZ9S1Cb/Picture13.jpg', 
},

  '14': {
  name: 'SIMPARICA',
  type: 'Cosmetics',
  usage: 'Treat and prevent flea and tick infestations in dogs.',
  ingredients: 'Active Principle: Sarolaner.',
  dosage: 'Orally once a month at the recommended minimum dosage of 0.91 mg/lb (2 mg/kg).',
  sideEffects: 'Vomiting, diarrhea, weakness, or low energy levels. These side effects are usually mild and pass.',
  image: 'https://i.postimg.cc/Y9ML1Bxw/Picture14.jpg', 
},
};
const CatCosmeticsDetailPage = () => {
  const { cosmeticId } = useParams<{ cosmeticId: string }>();
  const cosmeticData = cosmeticsData[cosmeticId || ''];

  React.useEffect(() => {
    if (cosmeticData) {
      document.title = `VetCare | ${cosmeticData.name} Details`;
    } else {
      document.title = 'VetCare | Cosmetic Not Found';
    }
  }, [cosmeticData]);

  if (!cosmeticData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600">Cosmetic Not Found</h1>
          <Link
            to="/cats/cosmetics-supplements"
            className="mt-4 inline-block text-blue-500 underline"
          >
            Back to Cat Cosmetics & Supplements
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

            {cosmeticData.image && (
  <div className="w-full h-64 flex justify-center items-center overflow-hidden bg-gray-100">
    <img
      src={cosmeticData.image}
      alt={cosmeticData.name}
      className="max-h-full w-auto object-contain"
    />
  </div>
)}


            <div className="p-8 text-center">
              {cosmeticData.name && (
                <h1 className="text-3xl font-bold mb-2 text-theme-deepsky">
                  {cosmeticData.name}
                </h1>
              )}
              {cosmeticData.type && (
                <p className="text-sm font-medium text-theme-deepsky mb-6">
                  Type: <span className="text-gray-600">{cosmeticData.type}</span>
                </p>
              )}

              {cosmeticData.description && (
                <p className="text-gray-600 mb-6 text-left max-w-3xl mx-auto">{cosmeticData.description}</p>
              )}

              <div className="space-y-4 mb-8 max-w-3xl mx-auto text-left">
                {cosmeticData.dosage && (
                  <div>
                    <h2 className="text-xl font-semibold mb-2 text-theme-deepsky">Dosage</h2>
                    <p className="text-gray-600">{cosmeticData.dosage}</p>
                  </div>
                )}

                {cosmeticData.formsOfAdministration && (
                  <div>
                    <h2 className="text-xl font-semibold mb-2 text-theme-deepsky">Forms of Administration</h2>
                    <p className="text-gray-600">{cosmeticData.formsOfAdministration}</p>
                  </div>
                )}

                {cosmeticData.indicationsForUse && (
                  <div>
                    <h2 className="text-xl font-semibold mb-2 text-theme-deepsky">Indications for Use</h2>
                    <p className="text-gray-600">{cosmeticData.indicationsForUse}</p>
                  </div>
                )}

                {cosmeticData.precautionsAndContraindications && (
                  <div>
                    <h2 className="text-xl font-semibold mb-2 text-theme-deepsky">Precautions and Contraindications</h2>
                    <p className="text-gray-600">{cosmeticData.precautionsAndContraindications}</p>
                  </div>
                )}

                {cosmeticData.ingredients && (
                  <div>
                    <h2 className="text-xl font-semibold mb-2 text-theme-deepsky">Ingredients</h2>
                    <p className="text-gray-600">{cosmeticData.ingredients}</p>
                  </div>
                )}

                {cosmeticData.usage && (
                  <div>
                    <h2 className="text-xl font-semibold mb-2 text-theme-deepsky">Usage</h2>
                    <p className="text-gray-600">{cosmeticData.usage}</p>
                  </div>
                )}

                {cosmeticData.application && (
                  <div>
                    <h2 className="text-xl font-semibold mb-2 text-theme-deepsky">Application</h2>
                    <p className="text-gray-600">{cosmeticData.application}</p>
                  </div>
                )}

                {cosmeticData.benefits && (
                  <div>
                    <h2 className="text-xl font-semibold mb-2 text-theme-deepsky">Benefits</h2>
                    <p className="text-gray-600">{cosmeticData.benefits}</p>
                  </div>
                )}

                {cosmeticData.sideEffects && (
                  <div>
                    <h2 className="text-xl font-semibold mb-2 text-theme-deepsky">Side Effects</h2>
                    <p className="text-gray-600">{cosmeticData.sideEffects}</p>
                  </div>
                )}
              </div>

              <Link
                to="/cats/cosmetics-supplements"
                className="bg-vet-blue hover:bg-vet-darkblue text-white px-6 py-3 rounded-md font-semibold transition-colors inline-block"
              >
                Back to Cat Cosmetics & Supplements
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CatCosmeticsDetailPage;