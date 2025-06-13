import React from 'react';
import { useParams, Link } from 'react-router-dom';

const vaccinesData: Record<string, any> = {
  '1': {
    name: 'Cat Vaccine 1',
    description: 'Specialized cat vaccine #1 designed for feline immunization.',
    usage: 'Administer as directed by your veterinarian. Typically given as an injection.',
    ingredients: 'Feline-safe vaccine formula #1.',
    dosage: 'Based on weight and age. Consult your vet.',
    sideEffects: 'Possible mild swelling at injection site or temporary lethargy.',
    image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=600&h=400&fit=crop&sig=1'
  },
  '2': {
    name: 'Cat Vaccine 2',
    description: 'Specialized cat vaccine #2 designed for feline immunization.',
    usage: 'Administer as directed by your veterinarian. Typically given as an injection.',
    ingredients: 'Feline-safe vaccine formula #2.',
    dosage: 'Based on weight and age. Consult your vet.',
    sideEffects: 'Possible mild swelling at injection site or temporary lethargy.',
    image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=600&h=400&fit=crop&sig=2'
  },
  '3': {
    name: 'Cat Vaccine 3',
    description: 'Specialized cat vaccine #3 designed for feline immunization.',
    usage: 'Administer as directed by your veterinarian. Typically given as an injection.',
    ingredients: 'Feline-safe vaccine formula #3.',
    dosage: 'Based on weight and age. Consult your vet.',
    sideEffects: 'Possible mild swelling at injection site or temporary lethargy.',
    image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=600&h=400&fit=crop&sig=3'
  },
  '4': {
    name: 'Cat Vaccine 4',
    description: 'Specialized cat vaccine #4 designed for feline immunization.',
    usage: 'Administer as directed by your veterinarian. Typically given as an injection.',
    ingredients: 'Feline-safe vaccine formula #4.',
    dosage: 'Based on weight and age. Consult your vet.',
    sideEffects: 'Possible mild swelling at injection site or temporary lethargy.',
    image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=600&h=400&fit=crop&sig=4'
  },
  '5': {
    name: 'Cat Vaccine 5',
    description: 'Specialized cat vaccine #5 designed for feline immunization.',
    usage: 'Administer as directed by your veterinarian. Typically given as an injection.',
    ingredients: 'Feline-safe vaccine formula #5.',
    dosage: 'Based on weight and age. Consult your vet.',
    sideEffects: 'Possible mild swelling at injection site or temporary lethargy.',
    image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=600&h=400&fit=crop&sig=5'
  },
  '6': {
    name: 'Cat Vaccine 6',
    description: 'Specialized cat vaccine #6 designed for feline immunization.',
    usage: 'Administer as directed by your veterinarian. Typically given as an injection.',
    ingredients: 'Feline-safe vaccine formula #6.',
    dosage: 'Based on weight and age. Consult your vet.',
    sideEffects: 'Possible mild swelling at injection site or temporary lethargy.',
    image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=600&h=400&fit=crop&sig=6'
  },
  '7': {
    name: 'Cat Vaccine 7',
    description: 'Specialized cat vaccine #7 designed for feline immunization.',
    usage: 'Administer as directed by your veterinarian. Typically given as an injection.',
    ingredients: 'Feline-safe vaccine formula #7.',
    dosage: 'Based on weight and age. Consult your vet.',
    sideEffects: 'Possible mild swelling at injection site or temporary lethargy.',
    image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=600&h=400&fit=crop&sig=7'
  },
  '8': {
    name: 'Cat Vaccine 8',
    description: 'Specialized cat vaccine #8 designed for feline immunization.',
    usage: 'Administer as directed by your veterinarian. Typically given as an injection.',
    ingredients: 'Feline-safe vaccine formula #8.',
    dosage: 'Based on weight and age. Consult your vet.',
    sideEffects: 'Possible mild swelling at injection site or temporary lethargy.',
    image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=600&h=400&fit=crop&sig=8'
  },
  '9': {
    name: 'Cat Vaccine 9',
    description: 'Specialized cat vaccine #9 designed for feline immunization.',
    usage: 'Administer as directed by your veterinarian. Typically given as an injection.',
    ingredients: 'Feline-safe vaccine formula #9.',
    dosage: 'Based on weight and age. Consult your vet.',
    sideEffects: 'Possible mild swelling at injection site or temporary lethargy.',
    image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=600&h=400&fit=crop&sig=9'
  },
  '10': {
    name: 'Cat Vaccine 10',
    description: 'Specialized cat vaccine #10 designed for feline immunization.',
    usage: 'Administer as directed by your veterinarian. Typically given as an injection.',
    ingredients: 'Feline-safe vaccine formula #10.',
    dosage: 'Based on weight and age. Consult your vet.',
    sideEffects: 'Possible mild swelling at injection site or temporary lethargy.',
    image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=600&h=400&fit=crop&sig=10'
  },
  '11': {
    name: 'Cat Vaccine 11',
    description: 'Specialized cat vaccine #11 designed for feline immunization.',
    usage: 'Administer as directed by your veterinarian. Typically given as an injection.',
    ingredients: 'Feline-safe vaccine formula #11.',
    dosage: 'Based on weight and age. Consult your vet.',
    sideEffects: 'Possible mild swelling at injection site or temporary lethargy.',
    image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=600&h=400&fit=crop&sig=11'
  },
  '12': {
    name: 'Cat Vaccine 12',
    description: 'Specialized cat vaccine #12 designed for feline immunization.',
    usage: 'Administer as directed by your veterinarian. Typically given as an injection.',
    ingredients: 'Feline-safe vaccine formula #12.',
    dosage: 'Based on weight and age. Consult your vet.',
    sideEffects: 'Possible mild swelling at injection site or temporary lethargy.',
    image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=600&h=400&fit=crop&sig=12'
  },
  '13': {
    name: 'Cat Vaccine 13',
    description: 'Specialized cat vaccine #13 designed for feline immunization.',
    usage: 'Administer as directed by your veterinarian. Typically given as an injection.',
    ingredients: 'Feline-safe vaccine formula #13.',
    dosage: 'Based on weight and age. Consult your vet.',
    sideEffects: 'Possible mild swelling at injection site or temporary lethargy.',
    image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=600&h=400&fit=crop&sig=13'
  },
   '14': {
    name: 'Cat Vaccine 14',
    description: 'Specialized cat vaccine #9 designed for feline immunization.',
    usage: 'Administer as directed by your veterinarian. Typically given as an injection.',
    ingredients: 'Feline-safe vaccine formula #9.',
    dosage: 'Based on weight and age. Consult your vet.',
    sideEffects: 'Possible mild swelling at injection site or temporary lethargy.',
    image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=600&h=400&fit=crop&sig=9'
  },
   '15': {
    name: 'Cat Vaccine 15',
    description: 'Specialized cat vaccine #9 designed for feline immunization.',
    usage: 'Administer as directed by your veterinarian. Typically given as an injection.',
    ingredients: 'Feline-safe vaccine formula #9.',
    dosage: 'Based on weight and age. Consult your vet.',
    sideEffects: 'Possible mild swelling at injection site or temporary lethargy.',
    image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=600&h=400&fit=crop&sig=9'
  },
   '16': {
    name: 'Cat Vaccine 16',
    description: 'Specialized cat vaccine #9 designed for feline immunization.',
    usage: 'Administer as directed by your veterinarian. Typically given as an injection.',
    ingredients: 'Feline-safe vaccine formula #9.',
    dosage: 'Based on weight and age. Consult your vet.',
    sideEffects: 'Possible mild swelling at injection site or temporary lethargy.',
    image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=600&h=400&fit=crop&sig=9'
  },
   '17': {
    name: 'Cat Vaccine 17',
    description: 'Specialized cat vaccine #9 designed for feline immunization.',
    usage: 'Administer as directed by your veterinarian. Typically given as an injection.',
    ingredients: 'Feline-safe vaccine formula #9.',
    dosage: 'Based on weight and age. Consult your vet.',
    sideEffects: 'Possible mild swelling at injection site or temporary lethargy.',
    image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=600&h=400&fit=crop&sig=9'
  },
   '18': {
    name: 'Cat Vaccine 18',
    description: 'Specialized cat vaccine #9 designed for feline immunization.',
    usage: 'Administer as directed by your veterinarian. Typically given as an injection.',
    ingredients: 'Feline-safe vaccine formula #9.',
    dosage: 'Based on weight and age. Consult your vet.',
    sideEffects: 'Possible mild swelling at injection site or temporary lethargy.',
    image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=600&h=400&fit=crop&sig=9'
  },
   '19': {
    name: 'Cat Vaccine 19',
    description: 'Specialized cat vaccine #9 designed for feline immunization.',
    usage: 'Administer as directed by your veterinarian. Typically given as an injection.',
    ingredients: 'Feline-safe vaccine formula #9.',
    dosage: 'Based on weight and age. Consult your vet.',
    sideEffects: 'Possible mild swelling at injection site or temporary lethargy.',
    image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=600&h=400&fit=crop&sig=9'
  },
   '20': {
    name: 'Cat Vaccine 20',
    description: 'Specialized cat vaccine #9 designed for feline immunization.',
    usage: 'Administer as directed by your veterinarian. Typically given as an injection.',
    ingredients: 'Feline-safe vaccine formula #9.',
    dosage: 'Based on weight and age. Consult your vet.',
    sideEffects: 'Possible mild swelling at injection site or temporary lethargy.',
    image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=600&h=400&fit=crop&sig=9'
  },
   '21': {
    name: 'Cat Vaccine 21',
    description: 'Specialized cat vaccine #9 designed for feline immunization.',
    usage: 'Administer as directed by your veterinarian. Typically given as an injection.',
    ingredients: 'Feline-safe vaccine formula #9.',
    dosage: 'Based on weight and age. Consult your vet.',
    sideEffects: 'Possible mild swelling at injection site or temporary lethargy.',
    image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=600&h=400&fit=crop&sig=9'
  },
   '22': {
    name: 'Cat Vaccine 22',
    description: 'Specialized cat vaccine #9 designed for feline immunization.',
    usage: 'Administer as directed by your veterinarian. Typically given as an injection.',
    ingredients: 'Feline-safe vaccine formula #9.',
    dosage: 'Based on weight and age. Consult your vet.',
    sideEffects: 'Possible mild swelling at injection site or temporary lethargy.',
    image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=600&h=400&fit=crop&sig=9'
  },
   '23': {
    name: 'Cat Vaccine 23',
    description: 'Specialized cat vaccine #9 designed for feline immunization.',
    usage: 'Administer as directed by your veterinarian. Typically given as an injection.',
    ingredients: 'Feline-safe vaccine formula #9.',
    dosage: 'Based on weight and age. Consult your vet.',
    sideEffects: 'Possible mild swelling at injection site or temporary lethargy.',
    image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=600&h=400&fit=crop&sig=9'
  },
   '24': {
    name: 'Cat Vaccine 24',
    description: 'Specialized cat vaccine #9 designed for feline immunization.',
    usage: 'Administer as directed by your veterinarian. Typically given as an injection.',
    ingredients: 'Feline-safe vaccine formula #9.',
    dosage: 'Based on weight and age. Consult your vet.',
    sideEffects: 'Possible mild swelling at injection site or temporary lethargy.',
    image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=600&h=400&fit=crop&sig=9'
  },
   '25': {
    name: 'Cat Vaccine 25',
    description: 'Specialized cat vaccine #9 designed for feline immunization.',
    usage: 'Administer as directed by your veterinarian. Typically given as an injection.',
    ingredients: 'Feline-safe vaccine formula #9.',
    dosage: 'Based on weight and age. Consult your vet.',
    sideEffects: 'Possible mild swelling at injection site or temporary lethargy.',
    image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=600&h=400&fit=crop&sig=9'
  },
   '26': {
    name: 'Cat Vaccine 26',
    description: 'Specialized cat vaccine #9 designed for feline immunization.',
    usage: 'Administer as directed by your veterinarian. Typically given as an injection.',
    ingredients: 'Feline-safe vaccine formula #9.',
    dosage: 'Based on weight and age. Consult your vet.',
    sideEffects: 'Possible mild swelling at injection site or temporary lethargy.',
    image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=600&h=400&fit=crop&sig=9'
  }, '27': {
    name: 'Cat Vaccine 27',
    description: 'Specialized cat vaccine #9 designed for feline immunization.',
    usage: 'Administer as directed by your veterinarian. Typically given as an injection.',
    ingredients: 'Feline-safe vaccine formula #9.',
    dosage: 'Based on weight and age. Consult your vet.',
    sideEffects: 'Possible mild swelling at injection site or temporary lethargy.',
    image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=600&h=400&fit=crop&sig=9'
  }, '28': {
    name: 'Cat Vaccine 28',
    description: 'Specialized cat vaccine #9 designed for feline immunization.',
    usage: 'Administer as directed by your veterinarian. Typically given as an injection.',
    ingredients: 'Feline-safe vaccine formula #9.',
    dosage: 'Based on weight and age. Consult your vet.',
    sideEffects: 'Possible mild swelling at injection site or temporary lethargy.',
    image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=600&h=400&fit=crop&sig=9'
  }, '29': {
    name: 'Cat Vaccine 29',
    description: 'Specialized cat vaccine #9 designed for feline immunization.',
    usage: 'Administer as directed by your veterinarian. Typically given as an injection.',
    ingredients: 'Feline-safe vaccine formula #9.',
    dosage: 'Based on weight and age. Consult your vet.',
    sideEffects: 'Possible mild swelling at injection site or temporary lethargy.',
    image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=600&h=400&fit=crop&sig=9'
  },
  '30': {
    name: 'Cat Vaccine 30',
    description: 'Specialized cat vaccine #30 designed for feline immunization.',
    usage: 'Administer as directed by your veterinarian. Typically given as an injection.',
    ingredients: 'Feline-safe vaccine formula #30.',
    dosage: 'Based on weight and age. Consult your vet.',
    sideEffects: 'Possible mild swelling at injection site or temporary lethargy.',
    image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=600&h=400&fit=crop&sig=30'
  }
};

const CatVaccineDetailPage = () => {
  const { vaccineId } = useParams<{ vaccineId: string }>();
  const vaccineData = vaccinesData[vaccineId || ''];

  React.useEffect(() => {
    if (vaccineData) {
      document.title = `VetCare | ${vaccineData.name} Details`;
    } else {
      document.title = 'VetCare | Vaccine Not Found';
    }
  }, [vaccineData]);

  if (!vaccineData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600">Vaccine Not Found</h1>
          <Link
            to="/cats/vaccines"
            className="mt-4 inline-block text-blue-500 underline"
          >
            Back to Cat Vaccines
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-theme-lightsky/30 to-theme-powder/30 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white bg-opacity-80 rounded-2xl shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img
                src={vaccineData.image}
                alt={vaccineData.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-8 space-y-4">
              <h1 className="text-3xl font-bold text-theme-deepsky">{vaccineData.name}</h1>
              <p className="text-gray-600">{vaccineData.description}</p>
              <div>
                <h2 className="text-xl font-semibold text-theme-deepsky">Usage</h2>
                <p className="text-gray-600">{vaccineData.usage}</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-theme-deepsky">Ingredients</h2>
                <p className="text-gray-600">{vaccineData.ingredients}</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-theme-deepsky">Dosage</h2>
                <p className="text-gray-600">{vaccineData.dosage}</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-theme-deepsky">Side Effects</h2>
                <p className="text-gray-600">{vaccineData.sideEffects}</p>
              </div>
              <Link
                to="/cats/vaccines"
                className="inline-block mt-4 text-blue-500 underline"
              >
                Back to Cat Vaccines
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatVaccineDetailPage;
