
import React from 'react';
import { Link } from 'react-router-dom';
import { Dog, Cat, Bird, BookOpen, FileText } from 'lucide-react';

const ServicesPage = () => {
  React.useEffect(() => {
    document.title = "PetCare Vet | Services";
  }, []);
  
  const petTypes = [
    {
      id: 'dogs',
      name: 'Dogs',
      icon: <Dog size={48} className="text-white" />,
      image: 'https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Comprehensive veterinary care services for dogs including vaccinations, health check-ups, treatments and specialized surgeries.',
      color: 'bg-vet-blue',
      hoverColor: 'hover:bg-vet-darkblue'
    },
    {
      id: 'cats',
      name: 'Cats',
      icon: <Cat size={48} className="text-white" />,
      image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=2786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Complete feline healthcare including preventative care, dental treatments, and specialized medicine for various cat conditions.',
      color: 'bg-vet-green',
      hoverColor: 'hover:bg-vet-darkgreen'
    },
    {
      id: 'birds',
      name: 'Poultry Birds',
      icon: <Bird size={48} className="text-white" />,
      image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Expert poultry care with specialized treatments, nutritional guidance, and preventive measures for chickens, ducks, and other farm birds.',
      color: 'bg-vet-orange',
      hoverColor: 'hover:bg-vet-darkorange'
    },
    {
      id: 'articles',
      name: 'Articles',
      icon: <FileText size={48} className="text-white" />,
      image: 'https://i.postimg.cc/Bv2K7qGM/20250623-0943-Pet-Articles-Companionship-simple-compose-01jydrc9qze699xkd3gqt36y11.png',
      description: 'Explore helpful veterinary articles about pet care, vaccinations, nutrition, health tips, and more. Written by professionals to keep your pet safe and happy.',
      color: 'bg-yellow-500',
      hoverColor: 'hover:bg-yellow-600'
    },
    {
      id: 'resources',
      name: 'Resources',
      icon: <BookOpen size={48} className="text-white" />,
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=1000&auto=format&fit=crop',
      description: 'Our comprehensive library of veterinary books and reference materials that form the foundation of our expertise and knowledge.',
      color: 'bg-purple-600',
      hoverColor: 'hover:bg-purple-700'
    }
  ];

  return (
    <div className="py-12 bg-gradient-to-br from-theme-lightsky/30 to-theme-powder/30 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">We provide comprehensive veterinary care for all types of pets. Explore our specialized services for different animals below.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {petTypes.map((petType) => (
            <div key={petType.id} className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="h-48 overflow-hidden">
                <img 
                  src={petType.image} 
                  alt={petType.name} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-6 h-64 flex flex-col">
                <div className="flex items-center mb-4">
                  <div className={`${petType.color} p-3 rounded-full mr-4 flex-shrink-0`}>
                    {petType.icon}
                  </div>
                  <h2 className="text-xl font-bold">{petType.name}</h2>
                </div>
                <p className="text-gray-600 mb-6 text-sm line-clamp-3 flex-grow">{petType.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {petType.id === 'resources' ? (
                    <>
                      <Link 
                        to="/resources/about" 
                        className={`${petType.color} ${petType.hoverColor} text-white px-3 py-2 rounded-md text-xs font-semibold transition-colors`}
                      >
                        Learn More
                      </Link>
                      <Link 
                        to="/resources" 
                        className="border border-gray-300 hover:border-gray-400 px-3 py-2 rounded-md text-xs font-semibold transition-colors"
                      >
                        Browse Resources
                      </Link>
                    </>
                  ) : petType.id === 'articles' ? (
                    <>
                      <Link 
                        to="/articles/about" 
                        className={`${petType.color} ${petType.hoverColor} text-white px-3 py-2 rounded-md text-xs font-semibold transition-colors`}
                      >
                        Learn More
                      </Link>
                      <Link 
                        to="/articles" 
                        className="border border-gray-300 hover:border-gray-400 px-3 py-2 rounded-md text-xs font-semibold transition-colors"
                      >
                        Browse Articles
                      </Link>
                    </>
                  ) : (
                    <>
                      <Link 
                        to={`/${petType.id}`} 
                        className={`${petType.color} ${petType.hoverColor} text-white px-3 py-2 rounded-md text-xs font-semibold transition-colors`}
                      >
                        Learn More
                      </Link>
                      <Link 
                        to={`/${petType.id}/medicines`} 
                        className="border border-gray-300 hover:border-gray-400 px-3 py-2 rounded-md text-xs font-semibold transition-colors"
                      >
                        Browse Medicines
                      </Link>
                      {petType.id !== 'birds' && (
                        <>
                          <Link 
                            to={`/${petType.id}/vaccines`} 
                            className="border border-gray-300 hover:border-gray-400 px-3 py-2 rounded-md text-xs font-semibold transition-colors"
                          >
                            Browse Vaccines
                          </Link>
                          <Link 
                            to={`/${petType.id}/cosmetics-supplements`} 
                            className="border border-gray-300 hover:border-gray-400 px-3 py-2 rounded-md text-xs font-semibold transition-colors"
                          >
                            Supplements
                          </Link>
                        </>
                      )}
                    </>
                  )}
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
