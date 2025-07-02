
import React from 'react';
import { Link } from 'react-router-dom';
import { Dog, Cat, Bird, Package, FileText } from 'lucide-react'; // ✅ Added FileText

const ServicesPage = () => {
  React.useEffect(() => {
    document.title = "PetCare Vet | Services";
  }, []);
  
  const petTypes = [
    {
      id: 'dogs',
      name: 'Dogs',
      icon: <Dog size={64} className="text-white" />,
      image: 'https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Comprehensive veterinary care services for dogs including vaccinations, health check-ups, treatments and specialized surgeries.',
      color: 'bg-vet-blue',
      hoverColor: 'hover:bg-vet-darkblue'
    },
    {
      id: 'cats',
      name: 'Cats',
      icon: <Cat size={64} className="text-white" />,
      image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=2786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Complete feline healthcare including preventative care, dental treatments, and specialized medicine for various cat conditions.',
      color: 'bg-vet-green',
      hoverColor: 'hover:bg-vet-darkgreen'
    },
    {
      id: 'birds',
      name: 'Poultry Birds',
      icon: <Bird size={64} className="text-white" />,
      image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Expert poultry care with specialized treatments, nutritional guidance, and preventive measures for chickens, ducks, and other farm birds.',
      color: 'bg-vet-orange',
      hoverColor: 'hover:bg-vet-darkorange'
    },
    {
      id: 'our-products',
      name: 'Our Products',
      icon: <Package size={64} className="text-white" />,
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Our exclusive line of veterinary products, specially formulated and created by our team for optimal pet health and care.',
      color: 'bg-purple-600',
      hoverColor: 'hover:bg-purple-700'
    },
    {
      id: 'articles',
      name: 'Articles',
      icon: <FileText size={64} className="text-white" />,
      image: 'https://i.postimg.cc/Bv2K7qGM/20250623-0943-Pet-Articles-Companionship-simple-compose-01jydrc9qze699xkd3gqt36y11.png',
      description: 'Explore helpful veterinary articles about pet care, vaccinations, nutrition, health tips, and more. Written by professionals to keep your pet safe and happy.',
      color: 'bg-yellow-500',
      hoverColor: 'hover:bg-yellow-600'
    }
  ];

  return (
    <div className="py-12 bg-gradient-to-br from-theme-lightsky/30 to-theme-powder/30 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">We provide comprehensive veterinary care for all types of pets. Explore our specialized services for different animals below.</p>
        </div>
        
        <div className="space-y-16">
          {petTypes.map((petType) => (
            <div key={petType.id} className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2 h-64 md:h-auto">
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
                  <div className="flex flex-wrap gap-4">
                    {petType.id === 'our-products' ? (
                      <>
                        <Link 
                          to="/our-products/about" 
                          className={`${petType.color} ${petType.hoverColor} text-white px-6 py-3 rounded-md font-semibold transition-colors`}
                        >
                          Learn More
                        </Link>
                        <Link 
                          to="/our-products" 
                          className="border border-gray-300 hover:border-gray-400 px-6 py-3 rounded-md font-semibold transition-colors"
                        >
                          Browse Our Products
                        </Link>
                      </>
                    ) : petType.id === 'articles' ? (
                      <>
                        <Link 
                          to="/articles/about" 
                          className={`${petType.color} ${petType.hoverColor} text-white px-6 py-3 rounded-md font-semibold transition-colors`}
                        >
                          Learn More
                        </Link>
                        <Link 
                          to="/articles" 
                          className="border border-gray-300 hover:border-gray-400 px-6 py-3 rounded-md font-semibold transition-colors"
                        >
                          Browse Articles
                        </Link>
                      </>
                    ) : (
                      <>
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
                        {petType.id !== 'birds' && (
                          <>
                            <Link 
                              to={`/${petType.id}/vaccines`} 
                              className="border border-gray-300 hover:border-gray-400 px-6 py-3 rounded-md font-semibold transition-colors"
                            >
                              Browse Vaccines
                            </Link>
                            <Link 
                              to={`/${petType.id}/cosmetics-supplements`} 
                              className="border border-gray-300 hover:border-gray-400 px-6 py-3 rounded-md font-semibold transition-colors"
                            >
                              Supplements & External Drugs
                            </Link>
                          </>
                        )}
                      </>
                    )}
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
