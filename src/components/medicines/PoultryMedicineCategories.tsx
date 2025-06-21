
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Pill, 
  Shield, 
  Apple, 
  Heart, 
  Activity, 
  AlertTriangle, 
  TrendingUp, 
  Zap, 
  Wind, 
  Bug 
} from 'lucide-react';

const PoultryMedicineCategories = () => {
  const categories = [
    {
      id: 'antibiotics',
      name: 'Antibiotics',
      icon: <Pill size={32} />,
      description: 'Medicines to treat bacterial infections in poultry',
      color: 'bg-blue-500',
      hoverColor: 'hover:bg-blue-600'
    },
    {
      id: 'anti-coccidial',
      name: 'Anti-coccidial drugs',
      icon: <Shield size={32} />,
      description: 'Prevention and treatment of coccidiosis',
      color: 'bg-green-500',
      hoverColor: 'hover:bg-green-600'
    },
    
    {
      id: 'anti-mycotoxin',
      name: 'Anti-mycotoxin',
      icon: <AlertTriangle size={32} />,
      description: 'Protection against mycotoxin contamination',
      color: 'bg-red-500',
      hoverColor: 'hover:bg-red-600'
    },
    {
      id: 'mucolytics-expectorants',
      name: 'Mucolytics & Expectorants',
      icon: <Wind size={32} />,
      description: 'Respiratory support medicines',
      color: 'bg-cyan-500',
      hoverColor: 'hover:bg-cyan-600'
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {categories.map((category) => (
        <Link
          key={category.id}
          to={`/birds/medicines/category/${category.id}`}
          className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 border border-gray-200"
        >
          <div className={`${category.color} ${category.hoverColor} text-white p-4 rounded-full inline-block mb-4 transition-colors`}>
            {category.icon}
          </div>
          <h3 className="text-xl font-semibold mb-2 text-gray-800">{category.name}</h3>
          <p className="text-gray-600 text-sm">{category.description}</p>
        </Link>
      ))}
    </div>
  );
};

export default PoultryMedicineCategories;
