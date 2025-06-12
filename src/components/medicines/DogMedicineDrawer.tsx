
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

interface DogMedicineDrawerProps {
  currentCategory: 'medicines' | 'vaccines' | 'cosmetics-supplements';
}

const DogMedicineDrawer = ({ currentCategory }: DogMedicineDrawerProps) => {
  const categories = [
    { id: 'medicines', name: 'Medicines', path: '/dogs/medicines' },
    { id: 'vaccines', name: 'Vaccines', path: '/dogs/vaccines' },
    { id: 'cosmetics-supplements', name: 'Cosmetics & Supplements', path: '/dogs/cosmetics-supplements' }
  ];

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <button className="flex items-center space-x-2 bg-vet-orange hover:bg-vet-darkorange text-white px-4 py-2 rounded-lg font-medium transition-colors">
          <Menu size={20} />
          <span>Categories</span>
        </button>
      </DrawerTrigger>
      
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Dog Medicine Categories</DrawerTitle>
          <DrawerDescription>
            Select a category to view specialized products for dogs
          </DrawerDescription>
        </DrawerHeader>
        
        <div className="px-4 pb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {categories.map((category) => (
              <DrawerClose key={category.id} asChild>
                <Link
                  to={category.path}
                  className={`block p-4 rounded-lg border transition-all duration-300 hover:shadow-md ${
                    currentCategory === category.id
                      ? 'bg-vet-orange/20 border-vet-orange text-vet-darkorange font-semibold'
                      : 'bg-white border-gray-200 hover:border-vet-orange hover:bg-vet-orange/10'
                  }`}
                >
                  {category.name}
                </Link>
              </DrawerClose>
            ))}
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default DogMedicineDrawer;
