
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface CategoryNavigationProps {
  petType: string;
  currentCategory: string;
}

const CategoryNavigation: React.FC<CategoryNavigationProps> = ({ petType, currentCategory }) => {
  const navigate = useNavigate();

  const categories = [
    { id: 'medicines', label: 'Medicines' },
    { id: 'vaccines', label: 'Vaccines' },
    { id: 'cosmetics-supplements', label: 'Cosmetics & Supplements' }
  ];

  const handleCategoryChange = (categoryId: string) => {
    navigate(`/${petType}/${categoryId}`);
  };

  return (
    <div className="mb-6">
      <Select value={currentCategory} onValueChange={handleCategoryChange}>
        <SelectTrigger className="w-64 mx-auto">
          <SelectValue placeholder="Select a category" />
        </SelectTrigger>
        <SelectContent>
          {categories.map((category) => (
            <SelectItem key={category.id} value={category.id}>
              {category.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default CategoryNavigation;
