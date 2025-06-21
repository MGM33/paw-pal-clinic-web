
import React from 'react';
import { Link } from 'react-router-dom';

interface MedicineCardProps {
  id: number;
  name: string;
  description: string;
  image: string;
  petType: string;
  itemType?: string; // Changed from specific literals to string to allow category paths
}

const MedicineCard: React.FC<MedicineCardProps> = ({ 
  id, 
  name, 
  description, 
  image, 
  petType, 
  itemType = 'medicines' 
}) => {
  // Generate the correct route based on pet type and item type
  const getDetailRoute = () => {
    switch (petType) {
      case 'dogs':
        return `/dogs/${itemType}/${id}`;
      case 'cats':
        return `/cats/${itemType}/${id}`;
      case 'birds':
        if (itemType.startsWith('medicines/category/')) {
          // For bird category medicines, use the category-specific route
          return `/birds/${itemType}/${id}`;
        }
        return `/birds/medicines/${id}`;
      default:
        return `/${petType}/${itemType}/${id}`;
    }
  };

  return (
    <Link 
      to={getDetailRoute()} 
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
    >
      <div className="w-full h-48 flex justify-center items-center overflow-hidden rounded-md bg-gray-100">
  <img
    src={image}
    alt={name}
    className="max-w-full max-h-full object-contain"
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
