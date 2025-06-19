
import React from 'react';

interface MedicineCategoriesProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const categories = [
  { id: 'all', label: 'All Products' },
  { id: 'anti-inflammatories', label: 'Anti-Inflammatories' },
  { id: 'anti-parasitics', label: 'Anti-parasitics' },
  { id: 'antifungals', label: 'Antifungals' },
  { id: 'antibiotics', label: 'Antibiotics' },
  { id: 'antihistaminic', label: 'Antihistaminic' },
  { id: 'mucolytics', label: 'Mucolytics' },
  { id: 'diuretic', label: 'Diuretic' }
];

const MedicineCategories: React.FC<MedicineCategoriesProps> = ({ 
  selectedCategory, 
  onCategoryChange 
}) => {
  return (
    <div className="mb-8">
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              selectedCategory === category.id
                ? 'bg-theme-deepsky text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MedicineCategories;
