import React from 'react';
import { useParams, Link } from 'react-router-dom';

const dogVaccineData: Record<string, any> = {
  '1': {
    name: 'Product 1',
    description: 'Description for product 1.',
    features: ['Feature 1', 'Feature 2'],
    usage: 'Usage instructions for product 1.',
    ingredients: 'Ingredients of product 1.',
    benefits: 'Benefits of product 1.',
    image: 'https://images.unsplash.com/photo-1601758003122-58f67e7c304d?w=600&h=400&fit=crop'
  },
  '2': {
    name: 'Product 2',
    description: 'Description for product 2.',
    features: ['Feature 1', 'Feature 2'],
    usage: 'Usage instructions for product 2.',
    ingredients: 'Ingredients of product 2.',
    benefits: 'Benefits of product 2.',
    image: 'https://images.unsplash.com/photo-1601758003122-58f67e7c304d?w=600&h=400&fit=crop'
  },
  '3': {
    name: 'Product 3',
    description: 'Description for product 3.',
    features: ['Feature 1', 'Feature 2'],
    usage: 'Usage instructions for product 3.',
    ingredients: 'Ingredients of product 3.',
    benefits: 'Benefits of product 3.',
    image: 'https://images.unsplash.com/photo-1601758003122-58f67e7c304d?w=600&h=400&fit=crop'
  },
  '4': {
    name: 'Product 4',
    description: 'Description for product 4.',
    features: ['Feature 1', 'Feature 2'],
    usage: 'Usage instructions for product 4.',
    ingredients: 'Ingredients of product 4.',
    benefits: 'Benefits of product 4.',
    image: 'https://images.unsplash.com/photo-1601758003122-58f67e7c304d?w=600&h=400&fit=crop'
  },
  '5': {
    name: 'Product 5',
    description: 'Description for product 5.',
    features: ['Feature 1', 'Feature 2'],
    usage: 'Usage instructions for product 5.',
    ingredients: 'Ingredients of product 5.',
    benefits: 'Benefits of product 5.',
    image: 'https://images.unsplash.com/photo-1601758003122-58f67e7c304d?w=600&h=400&fit=crop'
  },
  '6': {
    name: 'Product 6',
    description: 'Description for product 6.',
    features: ['Feature 1', 'Feature 2'],
    usage: 'Usage instructions for product 6.',
    ingredients: 'Ingredients of product 6.',
    benefits: 'Benefits of product 6.',
    image: 'https://images.unsplash.com/photo-1601758003122-58f67e7c304d?w=600&h=400&fit=crop'
  },
  '7': {
    name: 'Product 7',
    description: 'Description for product 7.',
    features: ['Feature 1', 'Feature 2'],
    usage: 'Usage instructions for product 7.',
    ingredients: 'Ingredients of product 7.',
    benefits: 'Benefits of product 7.',
    image: 'https://images.unsplash.com/photo-1601758003122-58f67e7c304d?w=600&h=400&fit=crop'
  },
  '8': {
    name: 'Product 8',
    description: 'Description for product 8.',
    features: ['Feature 1', 'Feature 2'],
    usage: 'Usage instructions for product 8.',
    ingredients: 'Ingredients of product 8.',
    benefits: 'Benefits of product 8.',
    image: 'https://images.unsplash.com/photo-1601758003122-58f67e7c304d?w=600&h=400&fit=crop'
  },
  '9': {
    name: 'Product 9',
    description: 'Description for product 9.',
    features: ['Feature 1', 'Feature 2'],
    usage: 'Usage instructions for product 9.',
    ingredients: 'Ingredients of product 9.',
    benefits: 'Benefits of product 9.',
    image: 'https://images.unsplash.com/photo-1601758003122-58f67e7c304d?w=600&h=400&fit=crop'
  },
  '10': {
    name: 'Product 10',
    description: 'Description for product 10.',
    features: ['Feature 1', 'Feature 2'],
    usage: 'Usage instructions for product 10.',
    ingredients: 'Ingredients of product 10.',
    benefits: 'Benefits of product 10.',
    image: 'https://images.unsplash.com/photo-1601758003122-58f67e7c304d?w=600&h=400&fit=crop'
  },
  '11': {
    name: 'Product 11',
    description: 'Description for product 11.',
    features: ['Feature 1', 'Feature 2'],
    usage: 'Usage instructions for product 11.',
    ingredients: 'Ingredients of product 11.',
    benefits: 'Benefits of product 11.',
    image: 'https://images.unsplash.com/photo-1601758003122-58f67e7c304d?w=600&h=400&fit=crop'
  },
  '12': {
    name: 'Product 12',
    description: 'Description for product 12.',
    features: ['Feature 1', 'Feature 2'],
    usage: 'Usage instructions for product 12.',
    ingredients: 'Ingredients of product 12.',
    benefits: 'Benefits of product 12.',
    image: 'https://images.unsplash.com/photo-1601758003122-58f67e7c304d?w=600&h=400&fit=crop'
  },
  '13': {
    name: 'Product 13',
    description: 'Description for product 13.',
    features: ['Feature 1', 'Feature 2'],
    usage: 'Usage instructions for product 13.',
    ingredients: 'Ingredients of product 13.',
    benefits: 'Benefits of product 13.',
    image: 'https://images.unsplash.com/photo-1601758003122-58f67e7c304d?w=600&h=400&fit=crop'
  },
  '14': {
    name: 'Product 14',
    description: 'Description for product 14.',
    features: ['Feature 1', 'Feature 2'],
    usage: 'Usage instructions for product 14.',
    ingredients: 'Ingredients of product 14.',
    benefits: 'Benefits of product 14.',
    image: 'https://images.unsplash.com/photo-1601758003122-58f67e7c304d?w=600&h=400&fit=crop'
  },
  '15': {
    name: 'Product 15',
    description: 'Description for product 15.',
    features: ['Feature 1', 'Feature 2'],
    usage: 'Usage instructions for product 15.',
    ingredients: 'Ingredients of product 15.',
    benefits: 'Benefits of product 15.',
    image: 'https://images.unsplash.com/photo-1601758003122-58f67e7c304d?w=600&h=400&fit=crop'
  },
  '16': {
    name: 'Product 16',
    description: 'Description for product 16.',
    features: ['Feature 1', 'Feature 2'],
    usage: 'Usage instructions for product 16.',
    ingredients: 'Ingredients of product 16.',
    benefits: 'Benefits of product 16.',
    image: 'https://images.unsplash.com/photo-1601758003122-58f67e7c304d?w=600&h=400&fit=crop'
  },
  '17': {
    name: 'Product 17',
    description: 'Description for product 17.',
    features: ['Feature 1', 'Feature 2'],
    usage: 'Usage instructions for product 17.',
    ingredients: 'Ingredients of product 17.',
    benefits: 'Benefits of product 17.',
    image: 'https://images.unsplash.com/photo-1601758003122-58f67e7c304d?w=600&h=400&fit=crop'
  },
  '18': {
    name: 'Product 18',
    description: 'Description for product 18.',
    features: ['Feature 1', 'Feature 2'],
    usage: 'Usage instructions for product 18.',
    ingredients: 'Ingredients of product 18.',
    benefits: 'Benefits of product 18.',
    image: 'https://images.unsplash.com/photo-1601758003122-58f67e7c304d?w=600&h=400&fit=crop'
  },
  '19': {
    name: 'Product 19',
    description: 'Description for product 19.',
    features: ['Feature 1', 'Feature 2'],
    usage: 'Usage instructions for product 19.',
    ingredients: 'Ingredients of product 19.',
    benefits: 'Benefits of product 19.',
    image: 'https://images.unsplash.com/photo-1601758003122-58f67e7c304d?w=600&h=400&fit=crop'
  },
  '20': {
    name: 'Product 20',
    description: 'Description for product 20.',
    features: ['Feature 1', 'Feature 2'],
    usage: 'Usage instructions for product 20.',
    ingredients: 'Ingredients of product 20.',
    benefits: 'Benefits of product 20.',
    image: 'https://images.unsplash.com/photo-1601758003122-58f67e7c304d?w=600&h=400&fit=crop'
  },
  '21': {
    name: 'Product 21',
    description: 'Description for product 21.',
    features: ['Feature 1', 'Feature 2'],
    usage: 'Usage instructions for product 21.',
    ingredients: 'Ingredients of product 21.',
    benefits: 'Benefits of product 21.',
    image: 'https://images.unsplash.com/photo-1601758003122-58f67e7c304d?w=600&h=400&fit=crop'
  },
  '22': {
    name: 'Product 22',
    description: 'Description for product 22.',
    features: ['Feature 1', 'Feature 2'],
    usage: 'Usage instructions for product 22.',
    ingredients: 'Ingredients of product 22.',
    benefits: 'Benefits of product 22.',
    image: 'https://images.unsplash.com/photo-1601758003122-58f67e7c304d?w=600&h=400&fit=crop'
  },
  '23': {
    name: 'Product 23',
    description: 'Description for product 23.',
    features: ['Feature 1', 'Feature 2'],
    usage: 'Usage instructions for product 23.',
    ingredients: 'Ingredients of product 23.',
    benefits: 'Benefits of product 23.',
    image: 'https://images.unsplash.com/photo-1601758003122-58f67e7c304d?w=600&h=400&fit=crop'
  },
  '24': {
    name: 'Product 24',
    description: 'Description for product 24.',
    features: ['Feature 1', 'Feature 2'],
    usage: 'Usage instructions for product 24.',
    ingredients: 'Ingredients of product 24.',
    benefits: 'Benefits of product 24.',
    image: 'https://images.unsplash.com/photo-1601758003122-58f67e7c304d?w=600&h=400&fit=crop'
  },
  '25': {
    name: 'Product 25',
    description: 'Description for product 25.',
    features: ['Feature 1', 'Feature 2'],
    usage: 'Usage instructions for product 25.',
    ingredients: 'Ingredients of product 25.',
    benefits: 'Benefits of product 25.',
    image: 'https://images.unsplash.com/photo-1601758003122-58f67e7c304d?w=600&h=400&fit=crop'
  },
  '26': {
    name: 'Product 26',
    description: 'Description for product 26.',
    features: ['Feature 1', 'Feature 2'],
    usage: 'Usage instructions for product 26.',
    ingredients: 'Ingredients of product 26.',
    benefits: 'Benefits of product 26.',
    image: 'https://images.unsplash.com/photo-1601758003122-58f67e7c304d?w=600&h=400&fit=crop'
  },
  '27': {
    name: 'Product 27',
    description: 'Description for product 27.',
    features: ['Feature 1', 'Feature 2'],
    usage: 'Usage instructions for product 27.',
    ingredients: 'Ingredients of product 27.',
    benefits: 'Benefits of product 27.',
    image: 'https://images.unsplash.com/photo-1601758003122-58f67e7c304d?w=600&h=400&fit=crop'
  },
  '28': {
    name: 'Product 28',
    description: 'Description for product 28.',
    features: ['Feature 1', 'Feature 2'],
    usage: 'Usage instructions for product 28.',
    ingredients: 'Ingredients of product 28.',
    benefits: 'Benefits of product 28.',
    image: 'https://images.unsplash.com/photo-1601758003122-58f67e7c304d?w=600&h=400&fit=crop'
  },
  '29': {
    name: 'Product 29',
    description: 'Description for product 29.',
    features: ['Feature 1', 'Feature 2'],
    usage: 'Usage instructions for product 29.',
    ingredients: 'Ingredients of product 29.',
    benefits: 'Benefits of product 29.',
    image: 'https://images.unsplash.com/photo-1601758003122-58f67e7c304d?w=600&h=400&fit=crop'
  },
  '30': {
    name: 'Product 30',
    description: 'Description for product 30.',
    features: ['Feature 1', 'Feature 2'],
    usage: 'Usage instructions for product 30.',
    ingredients: 'Ingredients of product 30.',
    benefits: 'Benefits of product 30.',
    image: 'https://images.unsplash.com/photo-1601758003122-58f67e7c304d?w=600&h=400&fit=crop'
  }
};


const DogVaccineDetailPage = () => {
  const { vaccineId } = useParams<{ vaccineId: string }>();
  const vaccine = dogVaccineData[vaccineId || ''];

  React.useEffect(() => {
    document.title = vaccine ? `VetCare | ${vaccine.name} Details` : 'VetCare | Vaccine Not Found';
  }, [vaccine]);

  if (!vaccine) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg font-semibold text-red-600">Vaccine not found.</p>
        <Link
          to="/dogs/vaccines"
          className="ml-4 bg-vet-blue hover:bg-vet-darkblue text-white px-4 py-2 rounded-md"
        >
          Back to Dog Vaccines
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-theme-lightsky/30 to-theme-powder/30 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="glass-effect rounded-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src={vaccine.image}
                  alt={vaccine.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="md:w-1/2 p-8">
                <h1 className="text-3xl font-bold mb-4 text-theme-deepsky">{vaccine.name}</h1>
                <p className="text-gray-600 mb-6">{vaccine.description}</p>

                <div className="space-y-4 mb-8">
                  <div>
                    <h2 className="text-xl font-semibold mb-2 text-theme-deepsky">Features</h2>
                    <ul className="list-disc pl-5 text-gray-600">
                      {vaccine.features.map((feature: string, index: number) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-xl font-semibold mb-2 text-theme-deepsky">Usage</h2>
                    <p className="text-gray-600">{vaccine.usage}</p>
                  </div>

                  <div>
                    <h2 className="text-xl font-semibold mb-2 text-theme-deepsky">Ingredients</h2>
                    <p className="text-gray-600">{vaccine.ingredients}</p>
                  </div>

                  <div>
                    <h2 className="text-xl font-semibold mb-2 text-theme-deepsky">Benefits</h2>
                    <p className="text-gray-600">{vaccine.benefits}</p>
                  </div>
                </div>

                <Link
                  to="/dogs/vaccines"
                  className="bg-vet-blue hover:bg-vet-darkblue text-white px-6 py-3 rounded-md font-semibold transition-colors inline-block"
                >
                  Back to Dog Vaccines
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DogVaccineDetailPage;
