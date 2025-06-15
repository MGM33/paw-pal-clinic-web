import React from 'react';
import { useParams, Link } from 'react-router-dom';

const cosmeticsData: Record<string, any> = {
  '1': {
    name: 'Cat Cosmetic 1',
    description: 'Description for Cat Cosmetic 1.',
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
    usage: 'Usage instructions for Cat Cosmetic 1.',
    ingredients: 'Ingredients for Cat Cosmetic 1.',
    benefits: 'Benefits of Cat Cosmetic 1.',
    image: 'https://via.placeholder.com/600x400?text=Cat+Cosmetic+1',
  },
  '2': {
    name: 'Cat Cosmetic 2',
    description: 'Description for Cat Cosmetic 2.',
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
    usage: 'Usage instructions for Cat Cosmetic 2.',
    ingredients: 'Ingredients for Cat Cosmetic 2.',
    benefits: 'Benefits of Cat Cosmetic 2.',
    image: 'https://via.placeholder.com/600x400?text=Cat+Cosmetic+2',
  },
  '3': {
    name: 'Cat Cosmetic 3',
    description: 'Description for Cat Cosmetic 3.',
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
    usage: 'Usage instructions for Cat Cosmetic 3.',
    ingredients: 'Ingredients for Cat Cosmetic 3.',
    benefits: 'Benefits of Cat Cosmetic 3.',
    image: 'https://via.placeholder.com/600x400?text=Cat+Cosmetic+3',
  },
  '4': {
    name: 'Cat Cosmetic 4',
    description: 'Description for Cat Cosmetic 4.',
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
    usage: 'Usage instructions for Cat Cosmetic 4.',
    ingredients: 'Ingredients for Cat Cosmetic 4.',
    benefits: 'Benefits of Cat Cosmetic 4.',
    image: 'https://via.placeholder.com/600x400?text=Cat+Cosmetic+4',
  },
  '5': {
    name: 'Cat Cosmetic 5',
    description: 'Description for Cat Cosmetic 5.',
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
    usage: 'Usage instructions for Cat Cosmetic 5.',
    ingredients: 'Ingredients for Cat Cosmetic 5.',
    benefits: 'Benefits of Cat Cosmetic 5.',
    image: 'https://via.placeholder.com/600x400?text=Cat+Cosmetic+5',
  },
  '6': {
    name: 'Cat Cosmetic 6',
    description: 'Description for Cat Cosmetic 6.',
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
    usage: 'Usage instructions for Cat Cosmetic 6.',
    ingredients: 'Ingredients for Cat Cosmetic 6.',
    benefits: 'Benefits of Cat Cosmetic 6.',
    image: 'https://via.placeholder.com/600x400?text=Cat+Cosmetic+6',
  },
  '7': {
    name: 'Cat Cosmetic 7',
    description: 'Description for Cat Cosmetic 7.',
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
    usage: 'Usage instructions for Cat Cosmetic 7.',
    ingredients: 'Ingredients for Cat Cosmetic 7.',
    benefits: 'Benefits of Cat Cosmetic 7.',
    image: 'https://via.placeholder.com/600x400?text=Cat+Cosmetic+7',
  },
  '8': {
    name: 'Cat Cosmetic 8',
    description: 'Description for Cat Cosmetic 8.',
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
    usage: 'Usage instructions for Cat Cosmetic 8.',
    ingredients: 'Ingredients for Cat Cosmetic 8.',
    benefits: 'Benefits of Cat Cosmetic 8.',
    image: 'https://via.placeholder.com/600x400?text=Cat+Cosmetic+8',
  },
  '9': {
    name: 'Cat Cosmetic 9',
    description: 'Description for Cat Cosmetic 9.',
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
    usage: 'Usage instructions for Cat Cosmetic 9.',
    ingredients: 'Ingredients for Cat Cosmetic 9.',
    benefits: 'Benefits of Cat Cosmetic 9.',
    image: 'https://via.placeholder.com/600x400?text=Cat+Cosmetic+9',
  },
  '10': {
    name: 'Cat Cosmetic 10',
    description: 'Description for Cat Cosmetic 10.',
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
    usage: 'Usage instructions for Cat Cosmetic 10.',
    ingredients: 'Ingredients for Cat Cosmetic 10.',
    benefits: 'Benefits of Cat Cosmetic 10.',
    image: 'https://via.placeholder.com/600x400?text=Cat+Cosmetic+10',
  },
  '11': {
    name: 'Cat Cosmetic 11',
    description: 'Description for Cat Cosmetic 11.',
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
    usage: 'Usage instructions for Cat Cosmetic 11.',
    ingredients: 'Ingredients for Cat Cosmetic 11.',
    benefits: 'Benefits of Cat Cosmetic 11.',
    image: 'https://via.placeholder.com/600x400?text=Cat+Cosmetic+11',
  },
  '12': {
    name: 'Cat Cosmetic 12',
    description: 'Description for Cat Cosmetic 12.',
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
    usage: 'Usage instructions for Cat Cosmetic 12.',
    ingredients: 'Ingredients for Cat Cosmetic 12.',
    benefits: 'Benefits of Cat Cosmetic 12.',
    image: 'https://via.placeholder.com/600x400?text=Cat+Cosmetic+12',
  },
  '13': {
    name: 'Cat Cosmetic 13',
    description: 'Description for Cat Cosmetic 13.',
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
    usage: 'Usage instructions for Cat Cosmetic 13.',
    ingredients: 'Ingredients for Cat Cosmetic 13.',
    benefits: 'Benefits of Cat Cosmetic 13.',
    image: 'https://via.placeholder.com/600x400?text=Cat+Cosmetic+13',
  },
  '14': {
    name: 'Cat Cosmetic 14',
    description: 'Description for Cat Cosmetic 14.',
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
    usage: 'Usage instructions for Cat Cosmetic 14.',
    ingredients: 'Ingredients for Cat Cosmetic 14.',
    benefits: 'Benefits of Cat Cosmetic 14.',
    image: 'https://via.placeholder.com/600x400?text=Cat+Cosmetic+14',
  },
  '15': {
    name: 'Cat Cosmetic 15',
    description: 'Description for Cat Cosmetic 15.',
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
    usage: 'Usage instructions for Cat Cosmetic 15.',
    ingredients: 'Ingredients for Cat Cosmetic 15.',
    benefits: 'Benefits of Cat Cosmetic 15.',
    image: 'https://via.placeholder.com/600x400?text=Cat+Cosmetic+15',
  },
  '16': {
    name: 'Cat Cosmetic 16',
    description: 'Description for Cat Cosmetic 16.',
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
    usage: 'Usage instructions for Cat Cosmetic 16.',
    ingredients: 'Ingredients for Cat Cosmetic 16.',
    benefits: 'Benefits of Cat Cosmetic 16.',
    image: 'https://via.placeholder.com/600x400?text=Cat+Cosmetic+16',
  },
  '17': {
    name: 'Cat Cosmetic 17',
    description: 'Description for Cat Cosmetic 17.',
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
    usage: 'Usage instructions for Cat Cosmetic 17.',
    ingredients: 'Ingredients for Cat Cosmetic 17.',
    benefits: 'Benefits of Cat Cosmetic 17.',
    image: 'https://via.placeholder.com/600x400?text=Cat+Cosmetic+17',
  },
  '18': {
    name: 'Cat Cosmetic 18',
    description: 'Description for Cat Cosmetic 18.',
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
    usage: 'Usage instructions for Cat Cosmetic 18.',
    ingredients: 'Ingredients for Cat Cosmetic 18.',
    benefits: 'Benefits of Cat Cosmetic 18.',
    image: 'https://via.placeholder.com/600x400?text=Cat+Cosmetic+18',
  },
  '19': {
    name: 'Cat Cosmetic 19',
    description: 'Description for Cat Cosmetic 19.',
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
    usage: 'Usage instructions for Cat Cosmetic 19.',
    ingredients: 'Ingredients for Cat Cosmetic 19.',
    benefits: 'Benefits of Cat Cosmetic 19.',
    image: 'https://via.placeholder.com/600x400?text=Cat+Cosmetic+19',
  },
  '20': {
    name: 'Cat Cosmetic 20',
    description: 'Description for Cat Cosmetic 20.',
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
    usage: 'Usage instructions for Cat Cosmetic 20.',
    ingredients: 'Ingredients for Cat Cosmetic 20.',
    benefits: 'Benefits of Cat Cosmetic 20.',
    image: 'https://via.placeholder.com/600x400?text=Cat+Cosmetic+20',
  },
  '21': {
    name: 'Cat Cosmetic 21',
    description: 'Description for Cat Cosmetic 21.',
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
    usage: 'Usage instructions for Cat Cosmetic 21.',
    ingredients: 'Ingredients for Cat Cosmetic 21.',
    benefits: 'Benefits of Cat Cosmetic 21.',
    image: 'https://via.placeholder.com/600x400?text=Cat+Cosmetic+21',
  },
  '22': {
    name: 'Cat Cosmetic 22',
    description: 'Description for Cat Cosmetic 22.',
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
    usage: 'Usage instructions for Cat Cosmetic 22.',
    ingredients: 'Ingredients for Cat Cosmetic 22.',
    benefits: 'Benefits of Cat Cosmetic 22.',
    image: 'https://via.placeholder.com/600x400?text=Cat+Cosmetic+22',
  },
  '23': {
    name: 'Cat Cosmetic 23',
    description: 'Description for Cat Cosmetic 23.',
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
    usage: 'Usage instructions for Cat Cosmetic 23.',
    ingredients: 'Ingredients for Cat Cosmetic 23.',
    benefits: 'Benefits of Cat Cosmetic 23.',
    image: 'https://via.placeholder.com/600x400?text=Cat+Cosmetic+23',
  },
  '24': {
    name: 'Cat Cosmetic 24',
    description: 'Description for Cat Cosmetic 24.',
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
    usage: 'Usage instructions for Cat Cosmetic 24.',
    ingredients: 'Ingredients for Cat Cosmetic 24.',
    benefits: 'Benefits of Cat Cosmetic 24.',
    image: 'https://via.placeholder.com/600x400?text=Cat+Cosmetic+24',
  },
  '25': {
    name: 'Cat Cosmetic 25',
    description: 'Description for Cat Cosmetic 25.',
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
    usage: 'Usage instructions for Cat Cosmetic 25.',
    ingredients: 'Ingredients for Cat Cosmetic 25.',
    benefits: 'Benefits of Cat Cosmetic 25.',
    image: 'https://via.placeholder.com/600x400?text=Cat+Cosmetic+25',
  },
  '26': {
    name: 'Cat Cosmetic 26',
    description: 'Description for Cat Cosmetic 26.',
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
    usage: 'Usage instructions for Cat Cosmetic 26.',
    ingredients: 'Ingredients for Cat Cosmetic 26.',
    benefits: 'Benefits of Cat Cosmetic 26.',
    image: 'https://via.placeholder.com/600x400?text=Cat+Cosmetic+26',
  },
  '27': {
    name: 'Cat Cosmetic 27',
    description: 'Description for Cat Cosmetic 27.',
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
    usage: 'Usage instructions for Cat Cosmetic 27.',
    ingredients: 'Ingredients for Cat Cosmetic 27.',
    benefits: 'Benefits of Cat Cosmetic 27.',
    image: 'https://via.placeholder.com/600x400?text=Cat+Cosmetic+27',
  },
  '28': {
    name: 'Cat Cosmetic 28',
    description: 'Description for Cat Cosmetic 28.',
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
    usage: 'Usage instructions for Cat Cosmetic 28.',
    ingredients: 'Ingredients for Cat Cosmetic 28.',
    benefits: 'Benefits of Cat Cosmetic 28.',
    image: 'https://via.placeholder.com/600x400?text=Cat+Cosmetic+28',
  },
  '29': {
    name: 'Cat Cosmetic 29',
    description: 'Description for Cat Cosmetic 29.',
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
    usage: 'Usage instructions for Cat Cosmetic 29.',
    ingredients: 'Ingredients for Cat Cosmetic 29.',
    benefits: 'Benefits of Cat Cosmetic 29.',
    image: 'https://via.placeholder.com/600x400?text=Cat+Cosmetic+29',
  },
  '30': {
    name: 'Cat Cosmetic 30',
    description: 'Description for Cat Cosmetic 30.',
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
    usage: 'Usage instructions for Cat Cosmetic 30.',
    ingredients: 'Ingredients for Cat Cosmetic 30.',
    benefits: 'Benefits of Cat Cosmetic 30.',
    image: 'https://via.placeholder.com/600x400?text=Cat+Cosmetic+30',
  },
};

const CatCosmeticsDetailPage = () => {
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
            to="/cats/cosmetics-supplements" 
            className="mt-4 inline-block text-blue-500 underline"
          >
            Back to Cat Cosmetics & Supplements
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
                  to="/cats/cosmetics-supplements" 
                  className="bg-vet-green hover:bg-vet-darkgreen text-white px-6 py-3 rounded-md font-semibold transition-colors inline-block"
                >
                  Back to Cat Cosmetics & Supplements
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatCosmeticsDetailPage;
