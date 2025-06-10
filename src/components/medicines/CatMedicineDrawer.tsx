
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

const CatMedicineDrawer = () => {
  const { petType } = useParams<{ petType: string }>();

  const categories = [
    { id: 'medicines', name: 'General Medicines' },
    { id: 'vaccines', name: 'Vaccines' },
    { id: 'cosmetics-supplements', name: 'Cosmetics & Supplements' }
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
          <DrawerTitle>Cat Medicine Categories</DrawerTitle>
          <DrawerDescription>
            Select a category to view specialized medicines for cats
          </DrawerDescription>
        </DrawerHeader>
        
        <div className="px-4 pb-8">
          <div className="grid grid-cols-1 gap-3">
            {categories.map((category) => (
              <DrawerClose key={category.id} asChild>
                <Link
                  to={`/cats/${category.id}`}
                  className="block p-4 rounded-lg border transition-all duration-300 hover:shadow-md bg-white border-gray-200 hover:border-vet-orange hover:bg-vet-orange/10"
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

export default CatMedicineDrawer;
