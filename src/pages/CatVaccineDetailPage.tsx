import React from 'react';
import { useParams, Link } from 'react-router-dom';

const vaccinesData: Record<string, any> = {
  '1': {
    name: 'Nobivac Tricat Trio',
    manufacturer: 'MSD Animal Health',
    protectsAgainst: 'Feline Viral Rhinotracheitis (Herpesvirus), Calicivirus, and Panleukopenia',
    usage: 'Core vaccine administered from 6–8 weeks of age; boosters as advised by a veterinarian.',
    image: 'https://i.postimg.cc/Px5GMxfv/Picture4.jpg'
  },
  '2': {
    name: 'Nobivac Rabies',
    manufacturer: 'MSD Animal Health Egypt',
    protectsAgainst: 'Rabies',
    usage: 'Single dose from 12 weeks of age; provides protection for at least 3 years.',
    image: 'https://i.postimg.cc/W4WCLTf2/Picture3.jpg'
  },
  '3': {
    name: 'Nobivac FeLV',
    manufacturer: 'MSD Animal Health',
    protectsAgainst: 'Feline Leukemia Virus (FeLV)',
    usage: 'Recommended for cats at risk of exposure; consult your veterinarian for scheduling.',
    image: 'https://i.postimg.cc/Gt4ZZ5yc/Picture5.jpg'
  },
};

const CatVaccineDetailPage = () => {
  const { vaccineId } = useParams<{ vaccineId: string }>();
  const vaccine = vaccinesData[vaccineId || ''];

  React.useEffect(() => {
    document.title = vaccine
      ? `VetCare | ${vaccine.name} Details`
      : 'VetCare | Vaccine Not Found';
  }, [vaccine]);

  if (!vaccine) {
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
                src={vaccine.image}
                alt={vaccine.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-8 space-y-6">
              <h1 className="text-3xl font-bold text-theme-deepsky">{vaccine.name}</h1>

              <div>
                <h2 className="text-xl font-semibold text-theme-deepsky">Manufacturer</h2>
                <p className="text-gray-700">{vaccine.manufacturer}</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-theme-deepsky">Protects Against</h2>
                <p className="text-gray-700">{vaccine.protectsAgainst}</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-theme-deepsky">Usage</h2>
                <p className="text-gray-700">{vaccine.usage}</p>
              </div>

              <Link
                to="/cats/vaccines"
                className="bg-vet-green hover:bg-vet-darkgreen text-white px-6 py-3 rounded-md font-semibold transition-colors inline-block"
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
