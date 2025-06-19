import React from 'react';
import { Link } from 'react-router-dom';

interface MedicineCardProps {
  medicineId: number;
  name: string;
  description: string;
  image: string;
  petType: string;
  itemType?: string;
}

const MedicineCard: React.FC<MedicineCardProps> = ({
  medicineId,
  name,
  description,
  image,
  petType,
  itemType = 'medicines'
}) => {
  const getDetailRoute = () => {
    switch (petType) {
      case 'dogs':
        return `/dogs/${itemType}/${medicineId}`;
      case 'cats':
        return `/cats/${itemType}/${medicineId}`;
      case 'birds':
        if (itemType.startsWith('medicines/category/')) {
          return `/birds/${itemType}/${medicineId}`;
        }
        return `/birds/medicines/${medicineId}`;
      default:
        return `/${petType}/${itemType}/${medicineId}`;
    }
  };

  return (
    <Link
      to={getDetailRoute()}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
    >
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex justify-end">
          <button className="text-vet-blue hover:text-vet-darkblue font-medium">View Details →</button>
        </div>
      </div>
    </Link>
  );
};

export default MedicineCard;
