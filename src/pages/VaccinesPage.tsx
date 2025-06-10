import React from 'react';
import { useParams } from 'react-router-dom';
import MedicineHeader from '../components/medicines/MedicineHeader';
import MedicineCard from '../components/medicines/MedicineCard';
import CategoryNavigation from '../components/medicines/CategoryNavigation';
import DogMedicineDrawer from '../components/medicines/DogMedicineDrawer';
import CatMedicineDrawer from '../components/medicines/CatMedicineDrawer';

const VaccinesPage = () => {
  const { petType } = useParams<{ petType: string }>();
  
  React.useEffect(() => {
    document.title = `PetCare Vet | ${getPetTypeTitle()} Vaccines`;
  }, [petType]);
  
  const getPetTypeTitle = () => {
    switch (petType) {
      case 'dogs':
        return 'Dog';
      case 'cats':
        return 'Cat';
      default:
        return 'Pet';
    }
  };

  const renderCategoryDrawer = () => {
    if (petType === 'dogs') {
      return <DogMedicineDrawer />;
    } else if (petType === 'cats') {
      return <CatMedicineDrawer />;
    }
    return null;
  };

  const getVaccines = () => {
    if (petType === 'dogs') {
      return [
        { id: 1, name: 'Rabies Vaccine', description: 'Essential rabies vaccination for dogs - annual booster required by law in most areas.', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&sig=1' },
        { id: 2, name: 'DHPP Core Vaccine', description: 'Combination vaccine protecting against Distemper, Hepatitis, Parvovirus, and Parainfluenza.', image: 'https://images.unsplash.com/photo-1576671081837-49000212a370?w=400&h=300&fit=crop&sig=2' },
        { id: 3, name: 'Bordetella Vaccine', description: 'Kennel cough prevention vaccine recommended for dogs in social environments.', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop&sig=3' },
        { id: 4, name: 'Lyme Disease Vaccine', description: 'Protection against Lyme disease for dogs in tick-endemic areas.', image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=300&fit=crop&sig=4' },
        { id: 5, name: 'Canine Influenza Vaccine', description: 'H3N2 and H3N8 strain protection for dogs in high-risk environments.', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop&sig=5' },
        { id: 6, name: 'Leptospirosis Vaccine', description: 'Four-way protection against multiple strains of leptospirosis bacteria.', image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop&sig=6' },
        { id: 7, name: 'Coronavirus Vaccine', description: 'Protection against canine coronavirus causing intestinal infections.', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&sig=7' },
        { id: 8, name: 'Adenovirus Type 2 Vaccine', description: 'Respiratory protection and cross-immunity against infectious hepatitis.', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&sig=8' },
        { id: 9, name: 'Parvovirus Vaccine', description: 'Standalone high-potency protection against deadly parvovirus infection.', image: 'https://images.unsplash.com/photo-1576671081837-49000212a370?w=400&h=300&fit=crop&sig=9' },
        { id: 10, name: 'Distemper Vaccine', description: 'Core vaccine protecting against canine distemper virus infection.', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop&sig=10' },
        { id: 11, name: 'Giardia Vaccine', description: 'Prevention against Giardia intestinal parasite in susceptible dogs.', image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=300&fit=crop&sig=11' },
        { id: 12, name: 'Rattlesnake Vaccine', description: 'Specialized protection for dogs in areas with venomous snake exposure.', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop&sig=12' },
        { id: 13, name: 'Puppy Series Starter', description: 'First vaccination in the puppy series starting at 6-8 weeks of age.', image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop&sig=13' },
        { id: 14, name: 'Senior Dog Booster', description: 'Modified vaccination schedule designed for dogs over 7 years old.', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&sig=14' },
        { id: 15, name: 'Travel Vaccine Package', description: 'Comprehensive vaccination package for dogs traveling internationally.', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&sig=15' },
        { id: 16, name: 'Kennel Prep Vaccine Set', description: 'Complete vaccination series required for boarding and daycare facilities.', image: 'https://images.unsplash.com/photo-1576671081837-49000212a370?w=400&h=300&fit=crop&sig=16' },
        { id: 17, name: 'Regional Disease Vaccine', description: 'Geographic-specific protection against local endemic diseases.', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop&sig=17' },
        { id: 18, name: 'Breeder Package Vaccine', description: 'Specialized vaccination program for breeding dogs and pregnant females.', image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=300&fit=crop&sig=18' },
        { id: 19, name: 'Working Dog Vaccine', description: 'Enhanced protection for police, military, and service dogs.', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop&sig=19' },
        { id: 20, name: 'Emergency Vaccine Kit', description: 'Rapid protection vaccination for rescue dogs or emergency situations.', image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop&sig=20' }
      ];
    } else if (petType === 'cats') {
      return [
        { id: 1, name: 'Rabies Vaccine', description: 'Essential rabies vaccination for cats - required by law and highly effective protection.', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&sig=21' },
        { id: 2, name: 'FVRCP Core Vaccine', description: 'Combination vaccine against Feline Viral Rhinotracheitis, Calicivirus, and Panleukopenia.', image: 'https://images.unsplash.com/photo-1576671081837-49000212a370?w=400&h=300&fit=crop&sig=22' },
        { id: 3, name: 'FeLV Vaccine', description: 'Feline Leukemia Virus protection for cats with outdoor access or multi-cat households.', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop&sig=23' },
        { id: 4, name: 'FIV Vaccine', description: 'Feline Immunodeficiency Virus protection for high-risk cats.', image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=300&fit=crop&sig=24' },
        { id: 5, name: 'Bordetella Vaccine', description: 'Upper respiratory infection prevention for cats in boarding or shelter environments.', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop&sig=25' },
        { id: 6, name: 'Chlamydia Vaccine', description: 'Protection against Chlamydia felis causing conjunctivitis and respiratory disease.', image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop&sig=26' },
        { id: 7, name: 'Ringworm Vaccine', description: 'Dermatophyte protection and treatment for cats prone to fungal infections.', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&sig=27' },
        { id: 8, name: 'Calicivirus Vaccine', description: 'Standalone protection against feline calicivirus respiratory infection.', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&sig=28' },
        { id: 9, name: 'Panleukopenia Vaccine', description: 'Core protection against feline distemper (panleukopenia virus).', image: 'https://images.unsplash.com/photo-1576671081837-49000212a370?w=400&h=300&fit=crop&sig=29' },
        { id: 10, name: 'Rhinotracheitis Vaccine', description: 'Herpesvirus protection preventing upper respiratory infections in cats.', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop&sig=30' },
        { id: 11, name: 'Kitten Series Starter', description: 'Initial vaccination series for kittens starting at 6-8 weeks of age.', image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=300&fit=crop&sig=31' },
        { id: 12, name: 'Indoor Cat Package', description: 'Modified vaccination schedule for strictly indoor cats with lower disease risk.', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop&sig=32' },
        { id: 13, name: 'Outdoor Cat Protection', description: 'Comprehensive vaccination for cats with outdoor access and higher exposure risk.', image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop&sig=33' },
        { id: 14, name: 'Senior Cat Booster', description: 'Age-appropriate vaccination schedule for cats over 10 years old.', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&sig=34' },
        { id: 15, name: 'Multi-Cat Household', description: 'Enhanced protection package for households with multiple cats.', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&sig=35' },
        { id: 16, name: 'Breeding Cat Vaccine', description: 'Specialized vaccination program for breeding queens and toms.', image: 'https://images.unsplash.com/photo-1576671081837-49000212a370?w=400&h=300&fit=crop&sig=36' },
        { id: 17, name: 'Shelter Cat Vaccine', description: 'Rapid protection protocol for newly rescued or adopted cats.', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop&sig=37' },
        { id: 18, name: 'Travel Vaccination', description: 'International travel requirements and health certificate preparation.', image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=300&fit=crop&sig=38' },
        { id: 19, name: 'Show Cat Package', description: 'Competition-ready vaccination schedule for cats in shows and exhibitions.', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop&sig=39' },
        { id: 20, name: 'Emergency Vaccine Kit', description: 'Immediate protection for cats in emergency or high-risk situations.', image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop&sig=40' }
      ];
    }
    
    return [];
  };

  const vaccines = getVaccines();

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <MedicineHeader petType={petType || ''} />
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          {petType !== 'birds' && (
            <div className="flex justify-between items-center mb-8">
              <CategoryNavigation petType={petType || ''} currentCategory="vaccines" />
              {renderCategoryDrawer()}
            </div>
          )}
          
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-4">{getPetTypeTitle()} Vaccines</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {vaccines.map((vaccine) => (
              <MedicineCard
                key={vaccine.id}
                id={vaccine.id}
                name={vaccine.name}
                description={vaccine.description}
                image={vaccine.image}
                petType={petType || ''}
                itemType="vaccines"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VaccinesPage;
