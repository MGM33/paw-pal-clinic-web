
import React from 'react';
import { Link } from 'react-router-dom';

interface DogCosmeticsCardProps {
  id: number;
  name: string;
  description: string;
  image: string;
}

const DogCosmeticsCard: React.FC<DogCosmeticsCardProps> = ({ id, name, description, image }) => {
  return (
    <Link 
      to={`/dogs/cosmetics-supplements/${id}`} 
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

export default DogCosmeticsCard;
