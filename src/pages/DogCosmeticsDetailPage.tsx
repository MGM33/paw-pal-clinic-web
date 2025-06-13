import React from 'react';
import { useParams, Link } from 'react-router-dom';

// Example cosmetics data
const cosmeticsData: Record<string, any> = {
   '1': {
    name: 'Medicine 1',
    description: 'Description for Medicine 1.',
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
    usage: 'Usage instructions for Medicine 1.',
    ingredients: 'Ingredients for Medicine 1.',
    benefits: 'Benefits of Medicine 1.',
    image: 'https://via.placeholder.com/600x400?text=Medicine+1',
  },
  '2': {
    name: 'Medicine 2',
    description: 'Description for Medicine 2.',
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
    usage: 'Usage instructions for Medicine 2.',
    ingredients: 'Ingredients for Medicine 2.',
    benefits: 'Benefits of Medicine 2.',
    image: 'https://via.placeholder.com/600x400?text=Medicine+2',
  },
  '3': {
    name: 'Medicine 3',
    description: 'Description for Medicine 3.',
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
    usage: 'Usage instructions for Medicine 3.',
    ingredients: 'Ingredients for Medicine 3.',
    benefits: 'Benefits of Medicine 3.',
    image: 'https://via.placeholder.com/600x400?text=Medicine+3',
  },
  '4': {
    name: 'Medicine 4',
    description: 'Description for Medicine 4.',
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
    usage: 'Usage instructions for Medicine 4.',
    ingredients: 'Ingredients for Medicine 4.',
    benefits: 'Benefits of Medicine 4.',
    image: 'https://via.placeholder.com/600x400?text=Medicine+4',
  },
  '5': {
    name: 'Medicine 5',
    description: 'Description for Medicine 5.',
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
    usage: 'Usage instructions for Medicine 5.',
    ingredients: 'Ingredients for Medicine 5.',
    benefits: 'Benefits of Medicine 5.',
    image: 'https://via.placeholder.com/600x400?text=Medicine+5',
  },
  '6': {
    name: 'Medicine 6',
    description: 'Description for Medicine 6.',
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
    usage: 'Usage instructions for Medicine 6.',
    ingredients: 'Ingredients for Medicine 6.',
    benefits: 'Benefits of Medicine 6.',
    image: 'https://via.placeholder.com/600x400?text=Medicine+6',
  },
  '7': {
    name: 'Medicine 7',
    description: 'Description for Medicine 7.',
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
    usage: 'Usage instructions for Medicine 7.',
    ingredients: 'Ingredients for Medicine 7.',
    benefits: 'Benefits of Medicine 7.',
    image: 'https://via.placeholder.com/600x400?text=Medicine+7',
  },
  '8': {
    name: 'Medicine 8',
    description: 'Description for Medicine 8.',
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
    usage: 'Usage instructions for Medicine 8.',
    ingredients: 'Ingredients for Medicine 8.',
    benefits: 'Benefits of Medicine 8.',
    image: 'https://via.placeholder.com/600x400?text=Medicine+8',
  },
  '9': {
    name: 'Medicine 9',
    description: 'Description for Medicine 9.',
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
    usage: 'Usage instructions for Medicine 9.',
    ingredients: 'Ingredients for Medicine 9.',
    benefits: 'Benefits of Medicine 9.',
    image: 'https://via.placeholder.com/600x400?text=Medicine+9',
  },
  '10': {
    name: 'Medicine 10',
    description: 'Description for Medicine 10.',
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
    usage: 'Usage instructions for Medicine 10.',
    ingredients: 'Ingredients for Medicine 10.',
    benefits: 'Benefits of Medicine 10.',
    image: 'https://via.placeholder.com/600x400?text=Medicine+10',
  },
  '11': {
    name: 'Medicine 11',
    description: 'Description for Medicine 11.',
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
    usage: 'Usage instructions for Medicine 11.',
    ingredients: 'Ingredients for Medicine 11.',
    benefits: 'Benefits of Medicine 11.',
    image: 'https://via.placeholder.com/600x400?text=Medicine+11',
  },
  '12': {
    name: 'Medicine 12',
    description: 'Description for Medicine 12.',
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
    usage: 'Usage instructions for Medicine 12.',
    ingredients: 'Ingredients for Medicine 12.',
    benefits: 'Benefits of Medicine 12.',
    image: 'https://via.placeholder.com/600x400?text=Medicine+12',
  },
  '13': {
    name: 'Medicine 13',
    description: 'Description for Medicine 13.',
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
    usage: 'Usage instructions for Medicine 13.',
    ingredients: 'Ingredients for Medicine 13.',
    benefits: 'Benefits of Medicine 13.',
    image: 'https://via.placeholder.com/600x400?text=Medicine+13',
  },
  '14': {
    name: 'Medicine 14',
    description: 'Description for Medicine 14.',
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
    usage: 'Usage instructions for Medicine 14.',
    ingredients: 'Ingredients for Medicine 14.',
    benefits: 'Benefits of Medicine 14.',
    image: 'https://via.placeholder.com/600x400?text=Medicine+14',
  },
  '15': {
    name: 'Medicine 15',
    description: 'Description for Medicine 15.',
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
    usage: 'Usage instructions for Medicine 15.',
    ingredients: 'Ingredients for Medicine 15.',
    benefits: 'Benefits of Medicine 15.',
    image: 'https://via.placeholder.com/600x400?text=Medicine+15',
  },
  '16': {
    name: 'Medicine 16',
    description: 'Description for Medicine 16.',
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
    usage: 'Usage instructions for Medicine 16.',
    ingredients: 'Ingredients for Medicine 16.',
    benefits: 'Benefits of Medicine 16.',
    image: 'https://via.placeholder.com/600x400?text=Medicine+16',
  },
  '17': {
    name: 'Medicine 17',
    description: 'Description for Medicine 17.',
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
    usage: 'Usage instructions for Medicine 17.',
    ingredients: 'Ingredients for Medicine 17.',
    benefits: 'Benefits of Medicine 17.',
    image: 'https://via.placeholder.com/600x400?text=Medicine+17',
  },
  '18': {
    name: 'Medicine 18',
    description: 'Description for Medicine 18.',
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
    usage: 'Usage instructions for Medicine 18.',
    ingredients: 'Ingredients for Medicine 18.',
    benefits: 'Benefits of Medicine 18.',
    image: 'https://via.placeholder.com/600x400?text=Medicine+18',
  },
  '19': {
    name: 'Medicine 19',
    description: 'Description for Medicine 19.',
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
    usage: 'Usage instructions for Medicine 19.',
    ingredients: 'Ingredients for Medicine 19.',
    benefits: 'Benefits of Medicine 19.',
    image: 'https://via.placeholder.com/600x400?text=Medicine+19',
  },
  '20': {
    name: 'Medicine 20',
    description: 'Description for Medicine 20.',
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
    usage: 'Usage instructions for Medicine 20.',
    ingredients: 'Ingredients for Medicine 20.',
    benefits: 'Benefits of Medicine 20.',
    image: 'https://via.placeholder.com/600x400?text=Medicine+20',
  },
  '21': {
    name: 'Medicine 21',
    description: 'Description for Medicine 21.',
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
    usage: 'Usage instructions for Medicine 21.',
    ingredients: 'Ingredients for Medicine 21.',
    benefits: 'Benefits of Medicine 21.',
    image: 'https://via.placeholder.com/600x400?text=Medicine+21',
  },
  '22': {
    name: 'Medicine 22',
    description: 'Description for Medicine 22.',
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
    usage: 'Usage instructions for Medicine 22.',
    ingredients: 'Ingredients for Medicine 22.',
    benefits: 'Benefits of Medicine 22.',
    image: 'https://via.placeholder.com/600x400?text=Medicine+22',
  },
  '23': {
    name: 'Medicine 23',
    description: 'Description for Medicine 23.',
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
    usage: 'Usage instructions for Medicine 23.',
    ingredients: 'Ingredients for Medicine 23.',
    benefits: 'Benefits of Medicine 23.',
    image: 'https://via.placeholder.com/600x400?text=Medicine+23',
  },
  '24': {
    name: 'Medicine 24',
    description: 'Description for Medicine 24.',
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
    usage: 'Usage instructions for Medicine 24.',
    ingredients: 'Ingredients for Medicine 24.',
    benefits: 'Benefits of Medicine 24.',
    image: 'https://via.placeholder.com/600x400?text=Medicine+24',
  },
  '25': {
    name: 'Medicine 25',
    description: 'Description for Medicine 25.',
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
    usage: 'Usage instructions for Medicine 25.',
    ingredients: 'Ingredients for Medicine 25.',
    benefits: 'Benefits of Medicine 25.',
    image: 'https://via.placeholder.com/600x400?text=Medicine+25',
  },
  '26': {
    name: 'Medicine 26',
    description: 'Description for Medicine 26.',
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
    usage: 'Usage instructions for Medicine 26.',
    ingredients: 'Ingredients for Medicine 26.',
    benefits: 'Benefits of Medicine 26.',
    image: 'https://via.placeholder.com/600x400?text=Medicine+26',
  },
  '27': {
    name: 'Medicine 27',
    description: 'Description for Medicine 27.',
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
    usage: 'Usage instructions for Medicine 27.',
    ingredients: 'Ingredients for Medicine 27.',
    benefits: 'Benefits of Medicine 27.',
    image: 'https://via.placeholder.com/600x400?text=Medicine+27',
  },
  '28': {
    name: 'Medicine 28',
    description: 'Description for Medicine 28.',
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
    usage: 'Usage instructions for Medicine 28.',
    ingredients: 'Ingredients for Medicine 28.',
    benefits: 'Benefits of Medicine 28.',
    image: 'https://via.placeholder.com/600x400?text=Medicine+28',
  },
  '29': {
    name: 'Medicine 29',
    description: 'Description for Medicine 29.',
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
    usage: 'Usage instructions for Medicine 29.',
    ingredients: 'Ingredients for Medicine 29.',
    benefits: 'Benefits of Medicine 29.',
    image: 'https://via.placeholder.com/600x400?text=Medicine+29',
  },
  '30': {
    name: 'Medicine 30',
    description: 'Description for Medicine 30.',
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
    usage: 'Usage instructions for Medicine 30.',
    ingredients: 'Ingredients for Medicine 30.',
    benefits: 'Benefits of Medicine 30.',
    image: 'https://via.placeholder.com/600x400?text=Medicine+30',
  },
};

const DogCosmeticsDetailPage = () => {
  const { cosmeticId } = useParams<{ cosmeticId: string }>();
  const cosmeticData = cosmeticsData[cosmeticId || ''];

  React.useEffect(() => {
    if (cosmeticData) {
      document.title = `VetCare | ${cosmeticData.name} Details`;
    } else {
      document.title = 'VetCare | Cosmetic Not Found';
    }
  }, [cosmeticData]);

  if (!cosmeticData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600">Cosmetic Not Found</h1>
          <Link 
            to="/dogs/cosmetics-supplements" 
            className="mt-4 inline-block text-blue-500 underline"
          >
            Back to Dog Cosmetics & Supplements
          </Link>
        </div>
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
                  src={cosmeticData.image} 
                  alt={cosmeticData.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="md:w-1/2 p-8">
                <h1 className="text-3xl font-bold mb-4 text-theme-deepsky">{cosmeticData.name}</h1>
                <p className="text-gray-600 mb-6">{cosmeticData.description}</p>
                
                <div className="space-y-4 mb-8">
                  <div>
                    <h2 className="text-xl font-semibold mb-2 text-theme-deepsky">Usage</h2>
                    <p className="text-gray-600">{cosmeticData.usage}</p>
                  </div>
                  
                  <div>
                    <h2 className="text-xl font-semibold mb-2 text-theme-deepsky">Ingredients</h2>
                    <p className="text-gray-600">{cosmeticData.ingredients}</p>
                  </div>
                  
                  <div>
                    <h2 className="text-xl font-semibold mb-2 text-theme-deepsky">Application</h2>
                    <p className="text-gray-600">{cosmeticData.application}</p>
                  </div>
                  
                  <div>
                    <h2 className="text-xl font-semibold mb-2 text-theme-deepsky">Benefits</h2>
                    <p className="text-gray-600">{cosmeticData.benefits}</p>
                  </div>
                </div>
                
                <Link 
                  to="/dogs/cosmetics-supplements" 
                  className="bg-vet-blue hover:bg-vet-darkblue text-white px-6 py-3 rounded-md font-semibold transition-colors inline-block"
                >
                  Back to Dog Cosmetics & Supplements
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DogCosmeticsDetailPage;
