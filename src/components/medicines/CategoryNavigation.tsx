
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface CategoryNavigationProps {
  petType: string;
  currentCategory: string;
}

const CategoryNavigation: React.FC<CategoryNavigationProps> = ({ petType, currentCategory }) => {
  const location = useLocation();

  const getNavItems = () => {
    const baseItems = [
      {
        id: 'medicines',
        label: 'Medicines',
        path: `/${petType}/medicines`
      },
      {
        id: 'vaccines',
        label: 'Vaccines',
        path: `/${petType}/vaccines`
      },
      {
        id: 'cosmetics-supplements',
        label: 'Supplements & External Drugs',
        path: `/${petType}/cosmetics-supplements`
      }
    ];

    return baseItems;
  };

  const navItems = getNavItems();

  return (
    <div className="flex justify-center space-x-1 bg-gray-100 p-1 rounded-lg inline-flex">
      {navItems.map((item) => (
        <Link
          key={item.id}
          to={item.path}
          className={`px-4 py-2 rounded-md font-medium transition-colors ${
            currentCategory === item.id
              ? 'bg-white text-blue-600'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
};

export default CategoryNavigation;
