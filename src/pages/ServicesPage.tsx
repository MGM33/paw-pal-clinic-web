
import React from 'react';
import { Link } from 'react-router-dom';
import { Dog, Cat, Bird } from 'lucide-react';

const ServicesPage = () => {
  React.useEffect(() => {
    document.title = "PetCare Vet | Services";
  }, []);
  
  const petTypes = [
    {
      id: 'dogs',
      name: 'Dogs',
      icon: <Dog size={64} className="text-white" />,
      image: 'https://source.unsplash.com/random/800x600/?dog',
      description: 'Comprehensive veterinary care services for dogs including vaccinations, health check-ups, treatments and specialized surgeries.',
      color: 'bg-vet-blue',
      hoverColor: 'hover:bg-vet-darkblue'
    },
    {
      id: 'cats',
      name: 'Cats',
      icon: <Cat size={64} className="text-white" />,
      image: 'https://source.unsplash.com/random/800x600/?cat',
      description: 'Complete feline healthcare including preventative care, dental treatments, and specialized medicine for various cat conditions.',
      color: 'bg-vet-green',
      hoverColor: 'hover:bg-vet-darkgreen'
    },
    {
      id: 'birds',
      name: 'Birds',
      icon: <Bird size={64} className="text-white" />,
      image: 'https://source.unsplash.com/random/800x600/?bird',
      description: 'Expert avian care with specialized treatments, nutritional guidance, and preventive measures for birds of all species.',
      color: 'bg-vet-orange',
      hoverColor: 'hover:bg-vet-darkorange'
    }
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">We provide comprehensive veterinary care for all types of pets. Explore our specialized services for different animals below.</p>
        </div>
        
        <div className="space-y-16">
          {petTypes.map((petType) => (
            <div key={petType.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img 
                    src={petType.image} 
                    alt={petType.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center mb-4">
                    <div className={`${petType.color} p-4 rounded-full mr-4`}>
                      {petType.icon}
                    </div>
                    <h2 className="text-3xl font-bold">{petType.name}</h2>
                  </div>
                  <p className="text-gray-600 mb-8 text-lg">{petType.description}</p>
                  <div className="flex space-x-4">
                    <Link 
                      to={`/${petType.id}`} 
                      className={`${petType.color} ${petType.hoverColor} text-white px-6 py-3 rounded-md font-semibold transition-colors`}
                    >
                      Learn More
                    </Link>
                    <Link 
                      to={`/${petType.id}/medicines`} 
                      className="border border-gray-300 hover:border-gray-400 px-6 py-3 rounded-md font-semibold transition-colors"
                    >
                      Browse Medicines
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
