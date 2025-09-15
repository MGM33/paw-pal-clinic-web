
import React from 'react';
import PoultryDrawer from '../components/medicines/PoultryDrawer';

const BirdAntiStressCategoryPage = () => {
  React.useEffect(() => {
    document.title = 'VetCare | Anti-stress';
  }, []);

  const medicines = [
    { id: 1, name: 'Sacrolyte', image: 'https://i.postimg.cc/W33YDWWG/31.jpg' },
    { id: 2, name: 'Electro cool', image: 'https://i.postimg.cc/KzHqtPwd/32.jpg' },
    { id: 3, name: 'C-tall', image: 'https://i.postimg.cc/Sj0gvyyd/33.jpg' },
    { id: 4, name: 'Heat Free P', image: 'https://i.postimg.cc/FF2m43zW/34.jpg' },
    { id: 5, name: 'Astreen', image: 'https://i.postimg.cc/VsS1pDf0/35.jpg' }
  ];

  return (
    <div className="py-12 transparent-section">
      <div className="container mx-auto px-4">
        <div className="glass-effect text-white py-12 rounded-lg mb-8">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">Anti-stress</h1>
                <p className="text-lg opacity-90">Stress management solutions for poultry birds</p>
              </div>
              <PoultryDrawer />
            </div>
          </div>
        </div>

        <div className="glass-effect rounded-lg shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {medicines.map((medicine) => (
              <div
                key={medicine.id}
                className="glass-effect rounded-lg shadow-md border border-gray-200 overflow-hidden"
              >
                <img
                  src={medicine.image}
                  alt={medicine.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 text-center">
                    {medicine.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BirdAntiStressCategoryPage;
