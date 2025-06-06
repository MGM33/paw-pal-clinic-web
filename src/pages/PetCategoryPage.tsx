import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Dog, Cat, Bird, Package } from 'lucide-react';
import LocalBrandPage from './LocalBrandPage';

const PetCategoryPage = () => {
  const { petType } = useParams<{ petType: string }>();
  
  React.useEffect(() => {
    document.title = `PetCare Vet | ${getPetTypeTitle()} Care`;
  }, [petType]);
  
  // For local-brand, redirect directly to the products page
  if (petType === 'local-brand') {
    return <LocalBrandPage />;
  }

  const getPetTypeTitle = () => {
    switch (petType) {
      case 'dogs':
        return 'Dog';
      case 'cats':
        return 'Cat';
      case 'birds':
        return 'Poultry Bird';
      case 'local-brand':
        return 'Our Products';
      default:
        return 'Pet';
    }
  };
  
  const getPetIcon = () => {
    switch (petType) {
      case 'dogs':
        return <Dog size={48} className="text-vet-blue" />;
      case 'cats':
        return <Cat size={48} className="text-vet-green" />;
      case 'birds':
        return <Bird size={48} className="text-vet-orange" />;
      case 'local-brand':
        return <Package size={48} className="text-purple-600" />;
      default:
        return null;
    }
  };
  
  const getPetImage = () => {
    switch (petType) {
      case 'dogs':
        return "https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
      case 'cats':
        return "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=2786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
      case 'birds':
        return "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
      case 'local-brand':
        return "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
      default:
        return "https://images.unsplash.com/photo-1599443015574-be5fe8a05783?q=80&w=1000&auto=format&fit=crop";
    }
  };
  
  const getPetColor = () => {
    switch (petType) {
      case 'dogs':
        return 'bg-vet-blue hover:bg-vet-darkblue';
      case 'cats':
        return 'bg-vet-green hover:bg-vet-darkgreen';
      case 'birds':
        return 'bg-vet-orange hover:bg-vet-darkorange';
      case 'local-brand':
        return 'bg-purple-600 hover:bg-purple-700';
      default:
        return 'bg-gray-800 hover:bg-gray-900';
    }
  };

  const getDescription = () => {
    switch (petType) {
      case 'local-brand':
        return 'Our exclusive collection of premium pet care products for all your needs.';
      default:
        return `Specialized veterinary services for your ${getPetTypeTitle().toLowerCase()} companions.`;
    }
  };

  const getServiceDescription = () => {
    switch (petType) {
      case 'local-brand':
        return `Explore our carefully curated selection of premium pet care products. 
                Each item is chosen for its quality, effectiveness, and safety to ensure 
                your pets receive the best care possible.`;
      default:
        return `At PetCare Vet, we offer comprehensive healthcare for ${petType === 'birds' ? 'poultry birds' : petType}. Our team of experienced 
                veterinarians provides preventive care, diagnostics, treatments, and surgeries specifically 
                tailored to meet the unique needs of your ${getPetTypeTitle().toLowerCase()} companions.`;
    }
  };

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
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
                  <h1 className="text-4xl font-bold mb-4">{getPetTypeTitle()} Care</h1>
                  <p className="text-xl max-w-2xl">
                    {getDescription()}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <h2 className="text-2xl font-semibold mb-4">Our {getPetTypeTitle()} Services</h2>
              <p className="text-gray-600 mb-6">
                {getServiceDescription()}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-medium mb-3">Health Check-ups</h3>
                  <p className="text-gray-600">Regular health assessments to monitor your {getPetTypeTitle().toLowerCase()}'s overall wellbeing.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-medium mb-3">Vaccinations</h3>
                  <p className="text-gray-600">Essential vaccinations to protect your {getPetTypeTitle().toLowerCase()} from common diseases.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-medium mb-3">{petType === 'birds' ? 'Nutritional Care' : 'Dental Care'}</h3>
                  <p className="text-gray-600">{petType === 'birds' ? 'Specialized nutrition plans for optimal poultry health.' : `Comprehensive dental services to maintain your ${getPetTypeTitle().toLowerCase()}'s oral health.`}</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-medium mb-3">Specialized Treatments</h3>
                  <p className="text-gray-600">Advanced medical treatments for various {getPetTypeTitle().toLowerCase()} conditions.</p>
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="text-2xl font-semibold mb-6">Browse Our Products</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Link 
                    to={`/${petType}/medicines`}
                    className={`${getPetColor()} text-white px-6 py-4 rounded-md font-semibold transition-colors block`}
                  >
                    {getPetTypeTitle()} Medicines
                  </Link>
                  
                  {petType !== 'birds' && (
                    <>
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
                        Cosmetics & Supplements
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetCategoryPage;
