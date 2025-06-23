import React from 'react';
import { Link } from 'react-router-dom';
import { Dog, Cat, Bird, Package, FileText } from 'lucide-react';

const FeaturedPets = () => {
  const petCategories = [
    {
      id: 'dogs',
      name: 'Dogs',
      icon: <Dog size={40} />,
      image: 'https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Complete healthcare solutions for your canine companions.',
      color: 'bg-vet-blue',
      hoverColor: 'hover:bg-vet-darkblue'
    },
    {
      id: 'cats',
      name: 'Cats',
      icon: <Cat size={40} />,
      image: 'https://sdmntprpolandcentral.oaiusercontent.com/files/00000000-bd50-620a-97c5-ad2ee09771ef/raw?se=2025-06-23T06%3A42%3A31Z&sp=r&sv=2024-08-04&sr=b&scid=e61505da-f0fc-54b1-870e-16afaf374e5b&skoid=76024c37-11e2-4c92-aa07-7e519fbe2d0f&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-06-23T04%3A30%3A07Z&ske=2025-06-24T04%3A30%3A07Z&sks=b&skv=2024-08-04&sig=5SmujgMJi4db3RktxP7hqdGq1u6bUSOWCN5W8vj6uPc%3D',
      description: 'Specialized treatments and care for your feline friends.',
      color: 'bg-vet-green',
      hoverColor: 'hover:bg-vet-darkgreen'
    },
    {
      id: 'birds',
      name: 'Poultry Birds',
      icon: <Bird size={40} />,
      image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Expert medical attention for your poultry and farm birds.',
      color: 'bg-vet-orange',
      hoverColor: 'hover:bg-vet-darkorange'
    },
    {
      id: 'our-products/about',
      name: 'Our Products',
      icon: <Package size={40} />,
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Our exclusive collection of premium pet care products.',
      color: 'bg-purple-600',
      hoverColor: 'hover:bg-purple-700'
    },
    {
      id: 'articles/about',
      name: 'Articles',
      icon: <FileText size={40} />,
      image: 'https://videos.openai.com/vg-assets/assets%2Ftask_01jydmz7gef6nazgc723hnzjj2%2F1750657437_img_2.webp?st=2025-06-23T03%3A49%3A59Z&se=2025-06-29T04%3A49%3A59Z&sks=b&skt=2025-06-23T03%3A49%3A59Z&ske=2025-06-29T04%3A49%3A59Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=3d249c53-07fa-4ba4-9b65-0bf8eb4ea46a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=qzdI1UAiSAXXsFDo8uRxRTeq4lvnYPVIj49XqpWsDhk%3D&az=oaivgprodscus',
      description: 'Educational articles on pet health, nutrition, and care.',
      color: 'bg-yellow-500',
      hoverColor: 'hover:bg-yellow-600'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-theme-lightsky/30 to-theme-powder/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Categories</h2>

        {/* Changed lg:grid-cols-4 → lg:grid-cols-5 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {petCategories.map((category) => (
            <Link
              key={category.id}
              to={`/${category.id}`}
              className="group bg-white/80 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden transform transition-transform hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-bold">{category.name}</h3>
                </div>
              </div>
              <div className="p-6">
                <div className={`rounded-full ${category.color} text-white p-3 inline-block mb-4`}>
                  {category.icon}
                </div>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <div className={`flex justify-center ${category.color} ${category.hoverColor} text-white rounded px-4 py-2 transition-colors`}>
                  View Details
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPets;
