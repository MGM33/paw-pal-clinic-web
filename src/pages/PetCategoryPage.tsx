
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Dog, Cat, Bird, Package } from 'lucide-react';
import LocalBrandPage from './LocalBrandPage';

const PetCategoryPage = () => {
  const { petType } = useParams<{ petType: string }>();

  const getPetTypeTitle = () => {
    switch (petType) {
      case 'dogs':
        return 'Dog';
      case 'cats':
        return 'Cat';
      case 'birds':
        return 'Poultry Bird';
      case 'our-products':
        return 'Our Products';
      default:
        return 'Pet';
    }
  };

  if (petType === 'our-products') {
    return <LocalBrandPage />;
  }

  React.useEffect(() => {
    document.title = `PetCare Vet | ${getPetTypeTitle()} Care - Veterinary Medicines`;
  }, [petType]);

  const getPetIcon = () => {
    switch (petType) {
      case 'dogs':
        return <Dog size={48} className="text-vet-blue" />;
      case 'cats':
        return <Cat size={48} className="text-vet-green" />;
      case 'birds':
        return <Bird size={48} className="text-vet-orange" />;
      default:
        return <Package size={48} className="text-purple-600" />;
    }
  };

  const getPetImage = () => {
    switch (petType) {
      case 'dogs':
        return "https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?q=80&w=2070&auto=format&fit=crop";
      case 'cats':
        return "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=2786&auto=format&fit=crop";
      case 'birds':
        return "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?q=80&w=2000&auto=format&fit=crop";
      default:
        return "https://images.unsplash.com/photo-1599443015574-be5fe8a05783?q=80&w=1000&auto=format&fit=crop";
    }
  };
const getPetColor = () => {
  switch (petType) {
    case 'dogs':
      return 'bg-vet-blue';
    case 'cats':
      return 'bg-vet-green';
    case 'birds':
      return 'bg-vet-orange';
    default:
      return 'bg-purple-600';
  }
};

  const vetDrugs = petType === 'birds'
  ? [
      "Antibiotics",
      "Anti-coccidial drugs",
      "Anti-mycotoxin",
      "Mucolytics & Expectorants",
    ]
  : [
      "Anti-Inflammatories",
      "Anti-parasitics",
      "Antifungals",
      "Vaccines",
      "Vitamins & Supplements",
      "Antibiotics",
      "Antihistaminic",
      "Mucolytics",
      "Diuretic"
    ];


  return (
    <div className="py-12 bg-gradient-to-br from-theme-lightsky/30 to-theme-powder/30 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden mb-12">
            <div className="relative h-96">
              <img 
                src={getPetImage()} 
                alt={`${getPetTypeTitle()} Care`} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="flex justify-center mb-4">
                    {getPetIcon()}
                  </div>
                  <h1 className="text-4xl font-bold mb-4">{getPetTypeTitle()} Veterinary Medicines</h1>
                </div>
              </div>
            </div>

            <div className="p-8 space-y-8">
              {/* New intro + marketing + vet drugs */}
              <section>
                <h2 className="text-2xl font-semibold mb-2">Introduction to Effective Veterinary Medicines</h2>
                <p className="text-gray-700">
                  Veterinary medicines are key to animal health, preventing and treating diseases, supporting food security, and protecting public health. Their ethical use ensures animal welfare, reduces zoonotic disease risks, and supports One Health objectives globally.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-2">Importance of Marketing Veterinary Medicines</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Raise awareness of treatments and care options.</li>
                  <li>Build trust and credibility for practices.</li>
                  <li>Promote animal health through prevention and early care.</li>
                  <li>Support business growth and client loyalty.</li>
                  <li>Educate about public health and food safety links.</li>
                  <li>Stand out in a competitive market.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Vet Drugs for {getPetTypeTitle()}s</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {vetDrugs.map((drug, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded shadow-sm">
                      <h3 className="text-lg font-medium">{drug}</h3>
                      <p className="text-gray-600">Explore our selection of {drug.toLowerCase()} for optimal {getPetTypeTitle().toLowerCase()} care.</p>
                    </div>
                  ))}
                </div>
              </section>

               <div className="text-center">
                <h3 className="text-2xl font-semibold mb-6">Browse Our Products</h3>
                {petType === 'birds' ? (
                  <div className="flex justify-center">
                    <Link
                      to={`/${petType}/medicines`}
                      className={`${getPetColor()} text-white px-6 py-4 rounded-md font-semibold transition-colors block`}
                    >
                      {getPetTypeTitle()} Medicines
                    </Link>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Link
                      to={`/${petType}/medicines`}
                      className={`${getPetColor()} text-white px-6 py-4 rounded-md font-semibold transition-colors block`}
                    >
                      {getPetTypeTitle()} Medicines
                    </Link>
                    <Link
                      to={`/${petType}/vaccines`}
                      className={`${getPetColor()} text-white px-6 py-4 rounded-md font-semibold transition-colors block`}
                    >
                      {getPetTypeTitle()} Vaccines
                    </Link>
                    <Link
                      to={`/${petType}/cosmetics-supplements`}
                      className={`${getPetColor()} text-white px-6 py-4 rounded-md font-semibold transition-colors block`}
                    >
                      Supplements & External Drugs
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetCategoryPage;
