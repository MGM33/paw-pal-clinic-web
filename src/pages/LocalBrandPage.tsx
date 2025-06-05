
import React from 'react';
import { Link } from 'react-router-dom';

const LocalBrandPage = () => {
  React.useEffect(() => {
    document.title = 'PetCare Vet | Local Brand Products';
  }, []);

  // 20 individual product placeholders with unique data
  const localBrandProducts = [
    {
      id: 1,
      name: 'VetCare Premium Antiseptic',
      description: 'Professional-grade antiseptic solution for wound cleaning and disinfection.',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
      category: 'Antiseptics'
    },
    {
      id: 2,
      name: 'VetCare Joint Support Formula',
      description: 'Advanced joint health supplement for improved mobility and comfort.',
      image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=300&fit=crop',
      category: 'Supplements'
    },
    {
      id: 3,
      name: 'VetCare Digestive Aid',
      description: 'Natural digestive support formula for optimal gut health.',
      image: 'https://images.unsplash.com/photo-1576671081837-49000212a370?w=400&h=300&fit=crop',
      category: 'Digestive Health'
    },
    {
      id: 4,
      name: 'VetCare Immune Booster',
      description: 'Comprehensive immune system support with essential vitamins.',
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop',
      category: 'Immune Support'
    },
    {
      id: 5,
      name: 'VetCare Skin & Coat Formula',
      description: 'Premium formula for healthy skin and shiny coat maintenance.',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop',
      category: 'Skin Care'
    },
    {
      id: 6,
      name: 'VetCare Pain Relief Gel',
      description: 'Topical pain relief gel for muscle and joint discomfort.',
      image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop',
      category: 'Pain Management'
    },
    {
      id: 7,
      name: 'VetCare Eye Care Drops',
      description: 'Gentle eye drops for cleaning and soothing irritated eyes.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
      category: 'Eye Care'
    },
    {
      id: 8,
      name: 'VetCare Ear Cleaner',
      description: 'Professional ear cleaning solution for optimal ear hygiene.',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
      category: 'Ear Care'
    },
    {
      id: 9,
      name: 'VetCare Dental Care Gel',
      description: 'Advanced dental gel for tartar control and fresh breath.',
      image: 'https://images.unsplash.com/photo-1576671081837-49000212a370?w=400&h=300&fit=crop',
      category: 'Dental Care'
    },
    {
      id: 10,
      name: 'VetCare Wound Healing Spray',
      description: 'Fast-acting wound healing spray with natural antibacterial properties.',
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop',
      category: 'Wound Care'
    },
    {
      id: 11,
      name: 'VetCare Probiotic Powder',
      description: 'High-quality probiotic powder for digestive balance.',
      image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=300&fit=crop',
      category: 'Probiotics'
    },
    {
      id: 12,
      name: 'VetCare Vitamin Complex',
      description: 'Complete vitamin and mineral supplement for overall health.',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop',
      category: 'Vitamins'
    },
    {
      id: 13,
      name: 'VetCare Calming Formula',
      description: 'Natural calming supplement for stress and anxiety relief.',
      image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop',
      category: 'Behavioral Support'
    },
    {
      id: 14,
      name: 'VetCare Flea & Tick Spray',
      description: 'Effective flea and tick prevention with natural ingredients.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
      category: 'Parasite Control'
    },
    {
      id: 15,
      name: 'VetCare Deworming Tablets',
      description: 'Comprehensive deworming treatment for internal parasites.',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
      category: 'Parasite Control'
    },
    {
      id: 16,
      name: 'VetCare Recovery Supplement',
      description: 'Post-surgery recovery supplement with essential nutrients.',
      image: 'https://images.unsplash.com/photo-1576671081837-49000212a370?w=400&h=300&fit=crop',
      category: 'Recovery Support'
    },
    {
      id: 17,
      name: 'VetCare Senior Pet Formula',
      description: 'Specialized nutrition support for aging pets.',
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop',
      category: 'Senior Care'
    },
    {
      id: 18,
      name: 'VetCare Puppy/Kitten Starter',
      description: 'Essential health support for young pets during growth.',
      image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=300&fit=crop',
      category: 'Puppy/Kitten Care'
    },
    {
      id: 19,
      name: 'VetCare Allergy Relief',
      description: 'Natural allergy relief formula for sensitive pets.',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop',
      category: 'Allergy Support'
    },
    {
      id: 20,
      name: 'VetCare Emergency First Aid Kit',
      description: 'Complete first aid kit with essential veterinary supplies.',
      image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop',
      category: 'Emergency Care'
    }
  ];

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Local Brand Products</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our exclusive line of veterinary products, specially formulated by our team of experts 
              to provide the highest quality care for your pets.
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {localBrandProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-2">
                    <span className="inline-block bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">
                      {product.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex justify-end">
                    <Link
                      to={`/local-brand/products/${product.id}`}
                      className="text-purple-600 hover:text-purple-800 font-medium"
                    >
                      View Details →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocalBrandPage;
