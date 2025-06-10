import React from 'react';
import { useParams } from 'react-router-dom';
import MedicineHeader from '../components/medicines/MedicineHeader';
import MedicineCard from '../components/medicines/MedicineCard';

const CosmeticsSupplementsPage = () => {
  const { petType } = useParams<{ petType: string }>();
  
  React.useEffect(() => {
    document.title = `PetCare Vet | ${getPetTypeTitle()} Cosmetics & Supplements`;
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

  const getProducts = () => {
    if (petType === 'dogs') {
      return [
        { id: 1, name: 'Omega-3 Skin & Coat Oil', description: 'Premium fish oil supplement for lustrous coat and healthy skin with EPA and DHA.', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&sig=41' },
        { id: 2, name: 'Luxury Grooming Shampoo', description: 'Sulfate-free moisturizing shampoo with natural oatmeal and aloe vera extracts.', image: 'https://images.unsplash.com/photo-1576671081837-49000212a370?w=400&h=300&fit=crop&sig=42' },
        { id: 3, name: 'Nail & Paw Care Balm', description: 'Organic balm with shea butter to protect and moisturize paw pads and nails.', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop&sig=43' },
        { id: 4, name: 'Breath Freshening Spray', description: 'Enzymatic oral spray that eliminates bad breath and supports dental hygiene.', image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=300&fit=crop&sig=44' },
        { id: 5, name: 'Tear Stain Remover', description: 'Gentle daily cleanser to remove and prevent tear stains around the eyes.', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop&sig=45' },
        { id: 6, name: 'Biotin Coat Supplement', description: 'High-potency biotin tablets for stronger, shinier coat and faster nail growth.', image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop&sig=46' },
        { id: 7, name: 'Deodorizing Dry Shampoo', description: 'Waterless cleaning foam perfect for between-bath freshening and odor control.', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&sig=47' },
        { id: 8, name: 'Whitening Toothpaste', description: 'Enzymatic toothpaste that whitens teeth and prevents plaque buildup.', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&sig=48' },
        { id: 9, name: 'Muscle Recovery Gel', description: 'Cooling massage gel with arnica for active dogs and post-exercise recovery.', image: 'https://images.unsplash.com/photo-1576671081837-49000212a370?w=400&h=300&fit=crop&sig=49' },
        { id: 10, name: 'Antioxidant Berry Treats', description: 'Functional treats packed with blueberries and vitamins for immune support.', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop&sig=50' },
        { id: 11, name: 'Coat Detangling Spray', description: 'Leave-in conditioning spray that prevents matting and makes brushing easier.', image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=300&fit=crop&sig=51' },
        { id: 12, name: 'Nose & Lip Balm', description: 'Protective balm for dry, cracked noses and lips with SPF protection.', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop&sig=52' },
        { id: 13, name: 'Probiotic Skin Support', description: 'Oral probiotic supplement that promotes healthy skin from the inside out.', image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop&sig=53' },
        { id: 14, name: 'Luxury Conditioning Mask', description: 'Deep conditioning treatment for dogs with damaged or brittle coats.', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&sig=54' },
        { id: 15, name: 'Nail Strengthening Serum', description: 'Keratin-enriched serum applied to nails to prevent breaking and splitting.', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&sig=55' },
        { id: 16, name: 'Aromatherapy Relaxing Mist', description: 'Calming lavender mist for grooming sessions and stress reduction.', image: 'https://images.unsplash.com/photo-1576671081837-49000212a370?w=400&h=300&fit=crop&sig=56' },
        { id: 17, name: 'Eye Area Gentle Cleanser', description: 'Tear-free formula specifically designed for cleaning sensitive eye areas.', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop&sig=57' },
        { id: 18, name: 'Coat Color Enhancer', description: 'Natural supplement that intensifies and maintains coat color vibrancy.', image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=300&fit=crop&sig=58' },
        { id: 19, name: 'Paw Wax Protection', description: 'Weather-resistant wax barrier to protect paws from salt, ice, and rough surfaces.', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop&sig=59' },
        { id: 20, name: 'Complete Grooming Kit', description: 'Professional grooming set with brushes, combs, nail clippers, and storage case.', image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop&sig=60' }
      ];
    } else if (petType === 'cats') {
      return [
        { id: 1, name: 'Omega-3 Hairball Formula', description: 'Fish oil supplement that reduces hairballs while promoting healthy skin and coat.', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&sig=61' },
        { id: 2, name: 'Gentle Cat Shampoo', description: 'Hypoallergenic shampoo formulated specifically for sensitive feline skin.', image: 'https://images.unsplash.com/photo-1576671081837-49000212a370?w=400&h=300&fit=crop&sig=62' },
        { id: 3, name: 'Nail Care Softener', description: 'Natural conditioning oil to soften nails and cuticles for easier trimming.', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop&sig=63' },
        { id: 4, name: 'Dental Care Gel', description: 'Enzymatic gel that breaks down tartar and freshens breath without brushing.', image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=300&fit=crop&sig=64' },
        { id: 5, name: 'Eye Cleaning Wipes', description: 'Pre-moistened wipes for daily eye cleaning and tear stain prevention.', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop&sig=65' },
        { id: 6, name: 'Coat Shine Supplement', description: 'Biotin and zinc supplement for luxurious, shiny coat and healthy skin.', image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop&sig=66' },
        { id: 7, name: 'Waterless Bath Foam', description: 'No-rinse cleansing foam perfect for cats who dislike water baths.', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&sig=67' },
        { id: 8, name: 'Breath Mint Treats', description: 'Tasty treats infused with mint and parsley for natural breath freshening.', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&sig=68' },
        { id: 9, name: 'Paw Moisturizing Cream', description: 'Rich cream to prevent cracking and keep paw pads soft and supple.', image: 'https://images.unsplash.com/photo-1576671081837-49000212a370?w=400&h=300&fit=crop&sig=69' },
        { id: 10, name: 'Immune Boost Treats', description: 'Functional treats with vitamins C and E to support immune system health.', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop&sig=70' },
        { id: 11, name: 'Detangling Brush Spray', description: 'Conditioning spray that makes brushing easier and prevents coat matting.', image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=300&fit=crop&sig=71' },
        { id: 12, name: 'Nose Leather Conditioner', description: 'Gentle balm to keep nose leather soft and prevent dryness or cracking.', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop&sig=72' },
        { id: 13, name: 'Skin Health Omega Blend', description: 'Balanced omega 3-6-9 supplement for optimal skin barrier function.', image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop&sig=73' },
        { id: 14, name: 'Deep Conditioning Treatment', description: 'Intensive moisturizing treatment for cats with dry or damaged coats.', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&sig=74' },
        { id: 15, name: 'Claw Health Supplement', description: 'Calcium and protein supplement to promote strong, healthy claw growth.', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&sig=75' },
        { id: 16, name: 'Calming Grooming Spray', description: 'Pheromone-infused spray to reduce stress during grooming sessions.', image: 'https://images.unsplash.com/photo-1576671081837-49000212a370?w=400&h=300&fit=crop&sig=76' },
        { id: 17, name: 'Gentle Eye Makeup Remover', description: 'Specially formulated to safely remove stubborn eye discharge and stains.', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop&sig=77' },
        { id: 18, name: 'Color Protection Shampoo', description: 'UV-protective formula that maintains coat color and prevents fading.', image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=300&fit=crop&sig=78' },
        { id: 19, name: 'Winter Paw Protection', description: 'Protective balm to shield paws from cold weather and harsh surfaces.', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop&sig=79' },
        { id: 20, name: 'Premium Grooming Set', description: 'Complete grooming kit with slicker brush, nail clippers, and storage pouch.', image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop&sig=80' }
      ];
    }
    
    return [];
  };

  const products = getProducts();

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <MedicineHeader petType={petType || ''} />
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-4">{getPetTypeTitle()} Cosmetics & Supplements</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <MedicineCard
                key={product.id}
                id={product.id}
                name={product.name}
                description={product.description}
                image={product.image}
                petType={petType || ''}
                itemType="cosmetics-supplements"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CosmeticsSupplementsPage;

}
