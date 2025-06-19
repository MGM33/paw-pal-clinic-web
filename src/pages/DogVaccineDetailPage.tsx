import React from 'react';
import { useParams, Link } from 'react-router-dom';

const dogVaccineData: Record<string, any> = {
  '1': {
    name: 'Nobivac DHPPi',
    manufacturer: 'MSD Animal Health Egypt',
    protectsAgainst: 'Canine Distemper, Hepatitis (Adenovirus types 1 & 2), Parvovirus, Parainfluenza',
    usage: 'Core vaccine administered from 6 weeks of age; boosters as advised by a veterinarian.',
    image: 'https://images.unsplash.com/photo-1601758123927-19669c7c8435?w=600&h=400&fit=crop'
  },
  '2': {
    name: 'Nobivac Lepto',
    manufacturer: 'MSD Animal Health Egypt',
    protectsAgainst: 'Leptospirosis caused by Leptospira interrogans serovars Canicola and Icterohaemorrhagiae',
    usage: 'Administered from 8–9 weeks of age, with a booster at 12 weeks; annual revaccination recommended.',
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=600&h=400&fit=crop'
  },
  '3': {
    name: 'Nobivac Rabies',
    manufacturer: 'MSD Animal Health Egypt',
    protectsAgainst: 'Rabies',
    usage: 'Single dose from 12 weeks of age; provides protection for at least 3 years.',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&h=400&fit=crop'
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

                <div className="space-y-6 text-gray-700">
                  <div>
                    <h2 className="text-xl font-semibold text-theme-deepsky mb-1">Manufacturer</h2>
                    <p>{vaccine.manufacturer}</p>
                  </div>

                  <div>
                    <h2 className="text-xl font-semibold text-theme-deepsky mb-1">Protects Against</h2>
                    <p>{vaccine.protectsAgainst}</p>
                  </div>

                  <div>
                    <h2 className="text-xl font-semibold text-theme-deepsky mb-1">Usage</h2>
                    <p>{vaccine.usage}</p>
                  </div>
                </div>

                <Link
                  to="/dogs/vaccines"
                  className="mt-8 inline-block bg-vet-blue hover:bg-vet-darkblue text-white px-6 py-3 rounded-md font-semibold transition-colors"
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
