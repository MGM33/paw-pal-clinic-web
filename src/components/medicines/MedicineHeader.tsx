
import React from 'react';
import { Dog, Cat, Bird } from 'lucide-react';

interface MedicineHeaderProps {
  petType: string;
}

const MedicineHeader: React.FC<MedicineHeaderProps> = ({ petType }) => {
  const getIcon = () => {
    switch (petType) {
      case 'dogs':
        return <Dog size={48} className="text-vet-blue" />;
      case 'cats':
        return <Cat size={48} className="text-vet-green" />;
      case 'birds':
        return <Bird size={48} className="text-vet-orange" />;
      default:
        return null;
    }
  };

  const getTitle = () => {
    switch (petType) {
      case 'dogs':
        return 'Dog Medicines';
      case 'cats':
        return 'Cat Medicines';
      case 'birds':
        return 'Poultry Bird Medicines';
      default:
        return 'Pet Medicines';
    }
  };

  const getDescription = () => {
    switch (petType) {
      case 'dogs':
        return 'Browse our comprehensive range of medicines specifically formulated for dogs.';
      case 'cats':
        return 'Discover our selection of high-quality medicines designed for cats.';
      case 'birds':
        return 'Explore our specialized medicines for poultry birds to keep your farm birds healthy.';
      default:
        return 'View our collection of pet medicines.';
    }
  };

  const getHeaderColor = () => {
    switch (petType) {
      case 'dogs':
        return 'bg-gradient-to-r from-vet-blue to-vet-darkblue';
      case 'cats':
        return 'bg-gradient-to-r from-vet-green to-vet-darkgreen';
      case 'birds':
        return 'bg-gradient-to-r from-vet-orange to-vet-darkorange';
      default:
        return 'bg-gradient-to-r from-gray-700 to-gray-900';
    }
  };

  return (
    <div className={`${getHeaderColor()} text-white py-12 rounded-lg mb-8`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="mr-6 mb-4 md:mb-0">
            {getIcon()}
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{getTitle()}</h1>
            <p className="text-lg opacity-90">{getDescription()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicineHeader;
