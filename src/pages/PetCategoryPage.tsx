
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Dog, Cat, Bird } from 'lucide-react';

const PetCategoryPage = () => {
  const { petType } = useParams<{ petType: string }>();
  
  React.useEffect(() => {
    document.title = `PetCare Vet | ${getPetTypeTitle()} Care`;
  }, [petType]);
  
  const getPetTypeTitle = () => {
    switch (petType) {
      case 'dogs':
        return 'Dog';
      case 'cats':
        return 'Cat';
      case 'birds':
        return 'Bird';
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
      default:
        return null;
    }
  };
  
  const getPetImage = () => {
    switch (petType) {
      case 'dogs':
        return "https://source.unsplash.com/random/1200x600/?dog";
      case 'cats':
        return "https://source.unsplash.com/random/1200x600/?cat";
      case 'birds':
        return "https://source.unsplash.com/random/1200x600/?bird";
      default:
        return "https://source.unsplash.com/random/1200x600/?pet";
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
      default:
        return 'bg-gray-800 hover:bg-gray-900';
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
                    Specialized veterinary services for your {getPetTypeTitle().toLowerCase()} companions.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <h2 className="text-2xl font-semibold mb-4">Our {getPetTypeTitle()} Services</h2>
              <p className="text-gray-600 mb-6">
                At PetCare Vet, we offer comprehensive healthcare for {petType}. Our team of experienced 
                veterinarians provides preventive care, diagnostics, treatments, and surgeries specifically 
                tailored to meet the unique needs of your {getPetTypeTitle().toLowerCase()} companions.
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
                  <h3 className="text-xl font-medium mb-3">Dental Care</h3>
                  <p className="text-gray-600">Comprehensive dental services to maintain your {getPetTypeTitle().toLowerCase()}'s oral health.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-medium mb-3">Specialized Treatments</h3>
                  <p className="text-gray-600">Advanced medical treatments for various {getPetTypeTitle().toLowerCase()} conditions.</p>
                </div>
              </div>
              
              <div className="flex justify-center">
                <Link 
                  to={`/${petType}/medicines`}
                  className={`${getPetColor()} text-white px-6 py-3 rounded-md font-semibold transition-colors`}
                >
                  Browse {getPetTypeTitle()} Medicines
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetCategoryPage;
