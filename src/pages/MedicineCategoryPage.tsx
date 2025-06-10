import React from 'react';
import { useParams } from 'react-router-dom';
import MedicineCard from '../components/medicines/MedicineCard';
import PoultryDrawer from '../components/medicines/PoultryDrawer';

const MedicineCategoryPage = () => {
  const { petType, categoryId } = useParams<{ petType: string; categoryId: string }>();
  
  React.useEffect(() => {
    document.title = `PetCare Vet | ${getCategoryTitle()} Medicines`;
  }, [categoryId]);
  
  const getCategoryTitle = () => {
    switch (categoryId) {
      case 'antibiotics':
        return 'Antibiotics';
      case 'anti-coccidial':
        return 'Anti-coccidial drugs';
      case 'minerals-vitamins':
        return 'Minerals & Vitamins';
      case 'anti-stress':
        return 'Anti-stress';
      case 'hepatorenal-tonics':
        return 'HepatoRenal tonics';
      case 'anti-mycotoxin':
        return 'Anti-mycotoxin';
      case 'growth-promotors':
        return 'Growth promotors';
      case 'immunostimulants':
        return 'Immunostimulants';
      case 'mucolytics-expectorants':
        return 'Mucolytics & Expectorants';
      case 'anti-clostridial':
        return 'Anti-clostridial drugs';
      default:
        return 'Medicine Category';
    }
  };

  const getMedicines = () => {
    switch (categoryId) {
      case 'antibiotics':
        return [
          { id: 1, name: 'Amoxicillin Poultry Formula', description: 'Broad-spectrum antibiotic for respiratory and digestive infections in poultry.', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&sig=antibiotics1' },
          { id: 2, name: 'Tylosin Tartrate Solution', description: 'Effective treatment for chronic respiratory diseases and mycoplasma infections.', image: 'https://images.unsplash.com/photo-1576671081837-49000212a370?w=400&h=300&fit=crop&sig=antibiotics2' },
          { id: 3, name: 'Enrofloxacin Injectable', description: 'Injectable fluoroquinolone antibiotic for severe bacterial infections.', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop&sig=antibiotics3' },
          { id: 4, name: 'Oxytetracycline Powder', description: 'Water-soluble antibiotic powder for treating bacterial enteritis and pneumonia.', image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=300&fit=crop&sig=antibiotics4' },
          { id: 5, name: 'Doxycycline Oral Solution', description: 'Liquid antibiotic for easy administration in drinking water systems.', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop&sig=antibiotics5' },
          { id: 6, name: 'Florfenicol Injectable', description: 'Broad-spectrum antibiotic effective against gram-positive and gram-negative bacteria.', image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop&sig=antibiotics6' },
          { id: 7, name: 'Sulfamethoxazole Tablets', description: 'Sulfonamide antibiotic tablets for treating coccidiosis and bacterial infections.', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&sig=antibiotics7' },
          { id: 8, name: 'Lincomycin Oral Powder', description: 'Lincosamide antibiotic for treating necrotic enteritis and bacterial infections.', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&sig=antibiotics8' },
          { id: 9, name: 'Gentamycin Injectable', description: 'Aminoglycoside antibiotic for severe gram-negative bacterial infections.', image: 'https://images.unsplash.com/photo-1576671081837-49000212a370?w=400&h=300&fit=crop&sig=antibiotics9' },
          { id: 10, name: 'Penicillin G Procaine', description: 'Long-acting penicillin injection for treating streptococcal and staphylococcal infections.', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop&sig=antibiotics10' },
          { id: 11, name: 'Trimethoprim-Sulfa Combo', description: 'Synergistic antibiotic combination for enhanced bacterial infection treatment.', image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=300&fit=crop&sig=antibiotics11' },
          { id: 12, name: 'Cephalexin Oral Suspension', description: 'First-generation cephalosporin for skin and soft tissue infections.', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop&sig=antibiotics12' },
          { id: 13, name: 'Chloramphenicol Eye Drops', description: 'Topical antibiotic for treating bacterial conjunctivitis and eye infections.', image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop&sig=antibiotics13' },
          { id: 14, name: 'Neomycin Oral Solution', description: 'Aminoglycoside antibiotic for treating intestinal bacterial infections.', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&sig=antibiotics14' },
          { id: 15, name: 'Bacitracin Topical Ointment', description: 'Topical antibiotic ointment for wound care and skin infection prevention.', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&sig=antibiotics15' },
          { id: 16, name: 'Spectinomycin Injectable', description: 'Aminoglycoside antibiotic effective against E. coli and Salmonella infections.', image: 'https://images.unsplash.com/photo-1576671081837-49000212a370?w=400&h=300&fit=crop&sig=antibiotics16' },
          { id: 17, name: 'Colistin Oral Powder', description: 'Polymyxin antibiotic for treating gram-negative bacterial enteritis.', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop&sig=antibiotics17' },
          { id: 18, name: 'Tilmicosin Injectable', description: 'Macrolide antibiotic specifically designed for respiratory tract infections.', image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=300&fit=crop&sig=antibiotics18' },
          { id: 19, name: 'Avilamycin Premix', description: 'Growth-promoting antibiotic for improving feed conversion and health.', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop&sig=antibiotics19' },
          { id: 20, name: 'Combination Antibiotic Kit', description: 'Emergency antibiotic kit with multiple formulations for various infections.', image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop&sig=antibiotics20' }
        ];
      // Add similar arrays for other categories
      default:
        const medicines = [];
        for (let i = 1; i <= 20; i++) {
          medicines.push({
            id: i,
            name: `${getCategoryTitle()} Medicine ${i}`,
            description: `Professional ${getCategoryTitle().toLowerCase()} medicine ${i} for poultry birds with specialized formulation.`,
            image: `https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&sig=${categoryId}-${i}`,
          });
        }
        return medicines;
    }
  };

  const medicines = getMedicines();

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-vet-orange to-vet-darkorange text-white py-12 rounded-lg mb-8">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">{getCategoryTitle()}</h1>
                <p className="text-lg opacity-90">Specialized {getCategoryTitle().toLowerCase()} medicines for poultry birds</p>
              </div>
              <PoultryDrawer />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {medicines.map((medicine) => (
              <MedicineCard
                key={medicine.id}
                id={medicine.id}
                name={medicine.name}
                description={medicine.description}
                image={medicine.image}
                petType={petType || 'birds'}
                itemType={`medicines/category/${categoryId}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicineCategoryPage;
