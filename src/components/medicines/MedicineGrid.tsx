
import React from 'react';
import PoultryMedicineCategories from './PoultryMedicineCategories';
import DogMedicineCard from './DogMedicineCard';
import CatMedicineCard from './CatMedicineCard';

interface MedicineGridProps {
  petType: string;
}

const MedicineGrid: React.FC<MedicineGridProps> = ({ petType }) => {
  // For birds, show categories instead of individual medicines
  if (petType === 'birds') {
    return <PoultryMedicineCategories />;
  }

  // Individual medicine data for each pet type
  const getMedicinesForPetType = () => {
    if (petType === 'dogs') {
      return [
        { id: 1, name: 'Canine Joint Support Plus', description: 'Advanced joint health supplement for dogs with glucosamine and chondroitin for mobility support.', image: 'https://images.unsplash.com/photo-1551717743-49959800b1f6?w=400&h=300&fit=crop' },
        { id: 2, name: 'Digestive Health Pro', description: 'Premium probiotic supplement to support healthy digestion in dogs of all ages.', image: 'https://images.unsplash.com/photo-1576671081837-49000212a370?w=400&h=300&fit=crop' },
        { id: 3, name: 'FlexiGuard Flea & Tick', description: 'Long-lasting monthly topical treatment for comprehensive flea and tick prevention.', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop' },
        { id: 4, name: 'VitaMax Canine Complex', description: 'Complete vitamin and mineral supplement formulated specifically for dogs nutritional needs.', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop' },
        { id: 5, name: 'CalmEase Anxiety Relief', description: 'Natural calming supplement with L-theanine for dogs with separation anxiety and stress.', image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=300&fit=crop' },
        { id: 6, name: 'HeartShield Prevention', description: 'Beef-flavored monthly chewable tablet for effective heartworm prevention in dogs.', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop' },
        { id: 7, name: 'DentalCare Fresh Chews', description: 'Daily dental chews with enzymes for tartar control and long-lasting fresh breath.', image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop' },
        { id: 8, name: 'ArthriEase Pain Relief', description: 'Veterinary prescription pain medication specifically formulated for dogs with arthritis.', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop' },
        { id: 9, name: 'ParasiteGuard Dewormer', description: 'Broad-spectrum deworming tablets effective against roundworms, hookworms, and tapeworms.', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop' },
        { id: 10, name: 'SkinSoothe Medicated Shampoo', description: 'Therapeutic shampoo with colloidal oatmeal for dogs with sensitive skin and allergies.', image: 'https://images.unsplash.com/photo-1576671081837-49000212a370?w=400&h=300&fit=crop' },
        { id: 11, name: 'OptiClear Eye Drops', description: 'Sterile lubricating eye drops for dry eyes and minor eye irritations in dogs.', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop' },
        { id: 12, name: 'EarClean Gentle Solution', description: 'Alcohol-free ear cleaning solution with aloe vera for regular ear hygiene maintenance.', image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=300&fit=crop' },
        { id: 13, name: 'SlimFit Weight Management', description: 'Low-calorie supplement with L-carnitine to support healthy weight loss in overweight dogs.', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop' },
        { id: 14, name: 'ImmunoBoost Defense', description: 'Immune system support with antioxidants for dogs recovering from illness or surgery.', image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop' },
        { id: 15, name: 'AllergiCare Antihistamine', description: 'Fast-acting antihistamine tablets for dogs with seasonal and environmental allergies.', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop' },
        { id: 16, name: 'SeniorCare Vitality', description: 'Comprehensive health support with omega-3s and antioxidants for senior dogs 7+ years.', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop' },
        { id: 17, name: 'HealFast Wound Spray', description: 'Antiseptic spray with lidocaine for pain relief and healing of minor cuts and abrasions.', image: 'https://images.unsplash.com/photo-1576671081837-49000212a370?w=400&h=300&fit=crop' },
        { id: 18, name: 'HipFlex Support Formula', description: 'Specialized supplement with MSM and turmeric for dogs with hip dysplasia and joint issues.', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop' },
        { id: 19, name: 'TravelEase Motion Sickness', description: 'Ginger-based motion sickness medication for dogs who experience car or travel anxiety.', image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=300&fit=crop' },
        { id: 20, name: 'RecoveryMax Post-Surgery Kit', description: 'Complete post-operative care kit with pain relief, antibiotics, and healing supplements.', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop' },
        { id: 21, name: 'PawGuard Protective Balm', description: 'Natural wax-based paw balm to protect against hot pavement, ice, and rough terrain.', image: 'https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?w=400&h=300&fit=crop' },
        { id: 22, name: 'LiverHealth Detox Support', description: 'Herbal supplement with milk thistle to support healthy liver function in dogs.', image: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a?w=400&h=300&fit=crop' },
        { id: 23, name: 'BladderEase Incontinence Aid', description: 'Chewable tablets formulated to help reduce urinary incontinence in senior dogs.', image: 'https://images.unsplash.com/photo-1543852786-1cf6624b9987?w=400&h=300&fit=crop' },
        { id: 24, name: 'VisionBoost Omega Formula', description: 'Omega-3 rich supplement to promote healthy eyesight and reduce age-related degeneration.', image: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?w=400&h=300&fit=crop' },
        { id: 25, name: 'DermRelief Allergy Shampoo', description: 'Medicated shampoo to soothe itchy, irritated skin caused by environmental allergies.', image: 'https://images.unsplash.com/photo-1601758123927-196f6b9f7b3f?w=400&h=300&fit=crop' },
        { id: 26, name: 'HydraCare Electrolyte Solution', description: 'Rehydration formula for dogs experiencing dehydration from heat or illness.', image: 'https://images.unsplash.com/photo-1596495577886-d920f1fb7238?w=400&h=300&fit=crop' },
        { id: 27, name: 'ProJoint Recovery Chews', description: 'Soft chews with green-lipped mussel extract for post-injury joint recovery support.', image: 'https://images.unsplash.com/photo-1572715376041-6d374f580bd7?w=400&h=300&fit=crop' },
        { id: 28, name: 'ThyroBalance Thyroid Tabs', description: 'Prescription-strength tablets to support dogs with hypothyroidism.', image: 'https://images.unsplash.com/photo-1558788353-f76d92427f16?w=400&h=300&fit=crop' },
        { id: 29, name: 'CardioCare Heart Support', description: 'Nutritional supplement with taurine and L-carnitine to support cardiac health.', image: 'https://images.unsplash.com/photo-1561037404-61cd46aa6153?w=400&h=300&fit=crop' },
        { id: 30, name: 'RespiraEase Cough Suppressant', description: 'Veterinary-formulated syrup for relief of kennel cough and minor respiratory irritation.', image: 'https://images.unsplash.com/photo-1560807707-8cc77767d783?w=400&h=300&fit=crop' }
      ];
    } else if (petType === 'cats') {
      return [
        { id: 1, name: 'Feline Urinary Health Formula', description: 'Specialized cranberry-based supplement for cats prone to urinary tract infections and crystals.', image: 'https://images.unsplash.com/photo-1551717743-49959800b1f6?w=400&h=300&fit=crop' },
        { id: 2, name: 'HairballEase Natural Remedy', description: 'Petroleum-free hairball prevention gel with natural fiber and omega oils for easy passage.', image: 'https://images.unsplash.com/photo-1576671081837-49000212a370?w=400&h=300&fit=crop' },
        { id: 3, name: 'FelineGuard Flea Treatment', description: 'Fast-acting 24-hour flea elimination treatment safe for cats over 12 weeks old.', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop' },
        { id: 4, name: 'Dental Fresh Oral Gel', description: 'Enzymatic dental gel that breaks down plaque and tartar without brushing required.', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop' },
        { id: 5, name: 'ZenCat Calming Treats', description: 'Tuna-flavored treats with chamomile and valerian root for naturally anxious or stressed cats.', image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=300&fit=crop' },
        { id: 6, name: 'RenalCare Kidney Support', description: 'Phosphorus-restricted nutrition supplement designed for cats with early kidney disease.', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop' },
        { id: 7, name: 'OptiVision Eye Care Drops', description: 'Gentle antibiotic eye drops for treating conjunctivitis and bacterial eye infections.', image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop' },
        { id: 8, name: 'DigestEase Probiotic', description: 'Multi-strain probiotic powder for cats with sensitive stomachs and digestive issues.', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop' },
        { id: 9, name: 'SkinCalm Medicated Cream', description: 'Hydrocortisone-based cream for treating hot spots, scratches, and minor skin irritations.', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop' },
        { id: 10, name: 'FlexiJoint Mobility Support', description: 'Glucosamine and chondroitin supplement specifically formulated for aging cats joint health.', image: 'https://images.unsplash.com/photo-1576671081837-49000212a370?w=400&h=300&fit=crop' },
        { id: 11, name: 'ParasiteClear Broad Spectrum', description: 'Comprehensive deworming solution effective against all common internal parasites in cats.', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop' },
        { id: 12, name: 'EarMite Elimination Treatment', description: 'Powerful yet gentle treatment specifically designed to eliminate ear mites in cats.', image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=300&fit=crop' },
        { id: 13, name: 'ImmunoMax Defense Booster', description: 'Immune system enhancer with lysine and vitamins for cats with compromised immunity.', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop' },
        { id: 14, name: 'BehaviorBalance Litter Aid', description: 'Pheromone-based supplement to encourage proper litter box usage and reduce accidents.', image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop' },
        { id: 15, name: 'SeniorCat Vitality Complex', description: 'Age-appropriate nutrition with taurine and antioxidants for cats 10 years and older.', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop' },
        { id: 16, name: 'AllergyEase Relief Formula', description: 'Hypoallergenic antihistamine tablets designed specifically for cats with food allergies.', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop' },
        { id: 17, name: 'WoundHeal Antiseptic Ointment', description: 'Triple antibiotic ointment safe for cats to prevent infection in minor wounds.', image: 'https://images.unsplash.com/photo-1576671081837-49000212a370?w=400&h=300&fit=crop' },
        { id: 18, name: 'StressAway Natural Relaxer', description: 'Herbal stress relief supplement with passionflower for cats during transitions or travel.', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop' },
        { id: 19, name: 'AppetiteMax Stimulant', description: 'Safe appetite stimulant with B-vitamins for cats recovering from illness or surgery.', image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=300&fit=crop' },
        { id: 20, name: 'PostOp Recovery Support', description: 'Complete post-operative nutrition and pain management system for surgical recovery.', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop' },
        { id: 21, name: 'PurrPaws Protective Balm', description: 'Non-toxic balm for soothing and protecting cracked or dry paw pads.', image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=400&h=300&fit=crop' },
        { id: 22, name: 'LiverShield Formula', description: 'Milk thistle and turmeric blend for liver detox and support.', image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&h=300&fit=crop' },
        { id: 23, name: 'CalmKit Stress Drops', description: 'Liquid herbal stress relief for nervous or anxious cats.', image: 'https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?w=400&h=300&fit=crop' },
        { id: 24, name: 'BladderSupport Urinary Aid', description: 'Cranberry and D-mannose blend for healthy bladder function.', image: 'https://images.unsplash.com/photo-1508615039623-a25605d2b022?w=400&h=300&fit=crop' },
        { id: 25, name: 'OmegaFur Skin & Coat Oil', description: 'Omega-rich oil supplement for shiny coat and reduced shedding.', image: 'https://images.unsplash.com/photo-1601758123837-1ec2e1e8eaf8?w=400&h=300&fit=crop' },
        { id: 26, name: 'HydraPurr Electrolyte Formula', description: 'Oral hydration support for cats during illness or heat stress.', image: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?w=400&h=300&fit=crop' },
        { id: 27, name: 'SeniorFlex Mobility Aid', description: 'Joint supplement with glucosamine and MSM for senior cats.', image: 'https://images.unsplash.com/photo-1583337130417-3346a1f3e3c4?w=400&h=300&fit=crop' },
        { id: 28, name: 'ThyroidCare Feline Support', description: 'Special formula for cats with thyroid imbalance.', image: 'https://images.unsplash.com/photo-1601233741466-019d7d33d59b?w=400&h=300&fit=crop' },
        { id: 29, name: 'HeartEase Taurine Chews', description: 'Taurine-enriched chews for supporting feline heart health.', image: 'https://images.unsplash.com/photo-1543852786-1cf6624b9987?w=400&h=300&fit=crop' },
        { id: 30, name: 'RespiraPurr Cough Remedy', description: 'Mild herbal remedy for occasional coughing and throat irritation.', image: 'https://images.unsplash.com/photo-1572715376041-6d374f580bd7?w=400&h=300&fit=crop' }
      ];
    }
    
    // Default fallback (shouldn't be reached for valid pet types)
    return [];
  };

  const medicines = getMedicinesForPetType();

  const renderMedicineCard = (medicine: any) => {
    if (petType === 'dogs') {
      return (
        <DogMedicineCard
          key={medicine.id}
          id={medicine.id}
          name={medicine.name}
          description={medicine.description}
          image={medicine.image}
        />
      );
    } else if (petType === 'cats') {
      return (
        <CatMedicineCard
          key={medicine.id}
          id={medicine.id}
          name={medicine.name}
          description={medicine.description}
          image={medicine.image}
        />
      );
    }
    return null;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {medicines.map((medicine) => renderMedicineCard(medicine))}
    </div>
  );
};

export default MedicineGrid;
