
import React from 'react';
import MedicineCard from './MedicineCard';
import PoultryMedicineCategories from './PoultryMedicineCategories';

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
        { id: 1, name: 'Canine Joint Support', description: 'Advanced joint health supplement for dogs with glucosamine and chondroitin.', image: 'https://images.unsplash.com/photo-1551717743-49959800b1f6?w=400&h=300&fit=crop' },
        { id: 2, name: 'Dog Digestive Aid', description: 'Probiotic supplement to support healthy digestion in dogs.', image: 'https://images.unsplash.com/photo-1576671081837-49000212a370?w=400&h=300&fit=crop' },
        { id: 3, name: 'Flea & Tick Prevention', description: 'Monthly topical treatment for flea and tick prevention.', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop' },
        { id: 4, name: 'Canine Multivitamin', description: 'Complete vitamin and mineral supplement for dogs of all ages.', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop' },
        { id: 5, name: 'Dog Anxiety Relief', description: 'Natural calming supplement for dogs with separation anxiety.', image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=300&fit=crop' },
        { id: 6, name: 'Heartworm Prevention', description: 'Monthly chewable tablet for heartworm prevention in dogs.', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop' },
        { id: 7, name: 'Dog Dental Chews', description: 'Daily dental chews for tartar control and fresh breath.', image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop' },
        { id: 8, name: 'Canine Pain Relief', description: 'Prescription pain medication for dogs with arthritis.', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop' },
        { id: 9, name: 'Dog Deworming Tablets', description: 'Broad-spectrum deworming treatment for dogs.', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop' },
        { id: 10, name: 'Canine Skin Treatment', description: 'Medicated shampoo for dogs with skin allergies.', image: 'https://images.unsplash.com/photo-1576671081837-49000212a370?w=400&h=300&fit=crop' },
        { id: 11, name: 'Dog Eye Drops', description: 'Lubricating eye drops for dry eyes in dogs.', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop' },
        { id: 12, name: 'Canine Ear Cleaner', description: 'Gentle ear cleaning solution for dogs.', image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=300&fit=crop' },
        { id: 13, name: 'Dog Weight Management', description: 'Low-calorie supplement for overweight dogs.', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop' },
        { id: 14, name: 'Canine Immune Booster', description: 'Immune system support for dogs recovering from illness.', image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop' },
        { id: 15, name: 'Dog Allergy Medicine', description: 'Antihistamine for dogs with environmental allergies.', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop' },
        { id: 16, name: 'Canine Senior Support', description: 'Comprehensive health support for senior dogs.', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop' },
        { id: 17, name: 'Dog Wound Spray', description: 'Antiseptic spray for minor cuts and wounds.', image: 'https://images.unsplash.com/photo-1576671081837-49000212a370?w=400&h=300&fit=crop' },
        { id: 18, name: 'Canine Hip Support', description: 'Specialized supplement for hip dysplasia in dogs.', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop' },
        { id: 19, name: 'Dog Travel Sickness', description: 'Motion sickness medication for traveling dogs.', image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=300&fit=crop' },
        { id: 20, name: 'Canine Recovery Kit', description: 'Post-surgery recovery supplements and care items.', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop' }
      ];
    } else if (petType === 'cats') {
      return [
        { id: 1, name: 'Feline Urinary Support', description: 'Specialized supplement for cats with urinary tract issues.', image: 'https://images.unsplash.com/photo-1551717743-49959800b1f6?w=400&h=300&fit=crop' },
        { id: 2, name: 'Cat Hairball Control', description: 'Natural remedy to prevent and treat hairballs in cats.', image: 'https://images.unsplash.com/photo-1576671081837-49000212a370?w=400&h=300&fit=crop' },
        { id: 3, name: 'Feline Flea Treatment', description: 'Fast-acting flea treatment specifically for cats.', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop' },
        { id: 4, name: 'Cat Dental Care Gel', description: 'Easy-to-use dental gel for maintaining cat oral health.', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop' },
        { id: 5, name: 'Feline Calming Treats', description: 'Natural calming treats for anxious or stressed cats.', image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=300&fit=crop' },
        { id: 6, name: 'Cat Kidney Support', description: 'Specialized nutrition for cats with kidney disease.', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop' },
        { id: 7, name: 'Feline Eye Care', description: 'Gentle eye drops for cats with eye infections.', image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop' },
        { id: 8, name: 'Cat Digestive Health', description: 'Probiotic supplement for cats with digestive issues.', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop' },
        { id: 9, name: 'Feline Skin Soother', description: 'Medicated cream for cats with skin irritations.', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop' },
        { id: 10, name: 'Cat Joint Mobility', description: 'Joint support supplement for aging cats.', image: 'https://images.unsplash.com/photo-1576671081837-49000212a370?w=400&h=300&fit=crop' },
        { id: 11, name: 'Feline Dewormer', description: 'Effective deworming treatment for indoor and outdoor cats.', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop' },
        { id: 12, name: 'Cat Ear Mite Treatment', description: 'Specialized treatment for ear mites in cats.', image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=300&fit=crop' },
        { id: 13, name: 'Feline Immune Support', description: 'Immune system booster for cats with compromised health.', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop' },
        { id: 14, name: 'Cat Litter Box Issues', description: 'Behavioral supplement for cats with litter box problems.', image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop' },
        { id: 15, name: 'Feline Senior Care', description: 'Comprehensive health support for senior cats.', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop' },
        { id: 16, name: 'Cat Allergy Relief', description: 'Antihistamine specifically formulated for cats.', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop' },
        { id: 17, name: 'Feline Wound Care', description: 'Antiseptic ointment for minor wounds in cats.', image: 'https://images.unsplash.com/photo-1576671081837-49000212a370?w=400&h=300&fit=crop' },
        { id: 18, name: 'Cat Stress Relief', description: 'Natural stress relief supplement for cats.', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop' },
        { id: 19, name: 'Feline Appetite Stimulant', description: 'Appetite stimulant for cats recovering from illness.', image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=300&fit=crop' },
        { id: 20, name: 'Cat Recovery Support', description: 'Post-operative care supplements for cats.', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop' }
      ];
    }
    
    // Default fallback (shouldn't be reached for valid pet types)
    return [];
  };

  const medicines = getMedicinesForPetType();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {medicines.map((medicine) => (
        <MedicineCard
          key={medicine.id}
          id={medicine.id}
          name={medicine.name}
          description={medicine.description}
          image={medicine.image}
          petType={petType}
        />
      ))}
    </div>
  );
};

export default MedicineGrid;
