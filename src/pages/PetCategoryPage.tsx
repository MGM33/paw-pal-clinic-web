
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Dog, Cat, Bird, Stethoscope, Heart, Shield, Sparkles } from 'lucide-react';

const PetCategoryPage = () => {
  const { petType } = useParams<{ petType: string }>();
  
  React.useEffect(() => {
    const capitalizedPetType = petType ? petType.charAt(0).toUpperCase() + petType.slice(1) : '';
    document.title = `VetCare | ${capitalizedPetType}`;
  }, [petType]);

  const getPetInfo = () => {
    switch (petType) {
      case 'dogs':
        return {
          name: 'Dogs',
          icon: <Dog size={64} className="text-white" />,
          image: 'https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          description: 'Comprehensive veterinary care for man\'s best friend. Our extensive database covers everything from common ailments to specialized treatments for dogs of all breeds and sizes.',
          color: 'bg-vet-blue',
          features: [
            'Complete medicine database with detailed dosing information',
            'Vaccination schedules and preventive care guidelines',
            'Nutritional supplements and wellness products',
            'Emergency treatment protocols'
          ]
        };
      case 'cats':
        return {
          name: 'Cats',
          icon: <Cat size={64} className="text-white" />,
          image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=2786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          description: 'Specialized feline healthcare resources tailored to the unique needs of cats. From kitten care to senior cat management, we provide comprehensive medical guidance.',
          color: 'bg-vet-green',
          features: [
            'Feline-specific medicine formulations and dosages',
            'Cat vaccination protocols and health monitoring',
            'Behavioral and nutritional support products',
            'Age-specific care recommendations'
          ]
        };
      case 'birds':
        return {
          name: 'Poultry Birds',
          icon: <Bird size={64} className="text-white" />,
          image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          description: 'Expert poultry care solutions for farm birds, backyard chickens, and commercial operations. Our comprehensive database supports healthy flocks and optimal production.',
          color: 'bg-vet-orange',
          features: [
            'Antibiotics for bacterial infections and disease prevention',
            'Anti-coccidial treatments for parasite control',
            'Minerals, vitamins & growth promoters for optimal development',
            'Hepato renal tonics for liver and kidney support',
            'Anti-stress solutions for environmental challenges'
          ]
        };
      default:
        return null;
    }
  };

  const petInfo = getPetInfo();
  
  if (!petInfo) {
    return (
      <div className="py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Pet Type Not Found</h1>
          <p className="text-gray-600">The requested pet type could not be found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
            <div className="relative h-96">
              <img 
                src={petInfo.image} 
                alt={petInfo.name} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="flex justify-center mb-4">
                    <div className={`${petInfo.color} p-4 rounded-full`}>
                      {petInfo.icon}
                    </div>
                  </div>
                  <h1 className="text-4xl font-bold mb-4">{petInfo.name} Care</h1>
                  <p className="text-xl max-w-2xl mx-auto">
                    Professional veterinary guidance and medical resources
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8">
              <h2 className="text-2xl font-semibold mb-4">About {petInfo.name} Care</h2>
              <p className="text-gray-600 mb-6">
                {petInfo.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center mb-3">
                    <Stethoscope className="text-theme-sky mr-3" size={24} />
                    <h3 className="text-xl font-medium">Expert Resources</h3>
                  </div>
                  <p className="text-gray-600">Veterinarian-approved medicines and treatment protocols for optimal {petInfo.name.toLowerCase()} health.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center mb-3">
                    <Heart className="text-theme-sky mr-3" size={24} />
                    <h3 className="text-xl font-medium">Comprehensive Care</h3>
                  </div>
                  <p className="text-gray-600">From prevention to treatment, covering all aspects of {petInfo.name.toLowerCase()} healthcare needs.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center mb-3">
                    <Shield className="text-theme-sky mr-3" size={24} />
                    <h3 className="text-xl font-medium">Safety First</h3>
                  </div>
                  <p className="text-gray-600">Accurate dosing information and safety guidelines for responsible medication use.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center mb-3">
                    <Sparkles className="text-theme-sky mr-3" size={24} />
                    <h3 className="text-xl font-medium">Quality Assured</h3>
                  </div>
                  <p className="text-gray-600">Curated database of trusted pharmaceutical products and treatment options.</p>
                </div>
              </div>

              <div className="bg-theme-lightsky/20 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold mb-3">What We Cover</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {petInfo.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-semibold mb-6">Explore Our {petInfo.name} Resources</h3>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link 
                    to={`/${petType}/medicines`}
                    className={`${petInfo.color} hover:opacity-90 text-white px-6 py-3 rounded-md font-semibold transition-all`}
                  >
                    Browse Medicines
                  </Link>
                  {petType !== 'birds' && (
                    <>
                      <Link 
                        to={`/${petType}/vaccines`}
                        className="border-2 border-gray-300 hover:border-gray-400 px-6 py-3 rounded-md font-semibold transition-all"
                      >
                        View Vaccines
                      </Link>
                      <Link 
                        to={`/${petType}/cosmetics-supplements`}
                        className="border-2 border-gray-300 hover:border-gray-400 px-6 py-3 rounded-md font-semibold transition-all"
                      >
                        Supplements & External Drugs
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
