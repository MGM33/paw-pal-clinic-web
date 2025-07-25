
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

const PoultryDrawer = () => {
  const { categoryId } = useParams<{ categoryId: string }>();

  const categories = [
    { id: 'antibiotics', name: 'Antibiotics' },
    { id: 'anti-coccidial', name: 'Anti-coccidial drugs' },
    { id: 'minerals-vitamins', name: 'Minerals & Vitamins & Growth Promoters' },
    { id: 'hepato-renal-tonic', name: 'Hepato Renal Tonic' },
    { id: 'anti-stress', name: 'Anti-stress' }
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
          <DrawerTitle>Poultry Medicine Categories</DrawerTitle>
          <DrawerDescription>
            Select a category to view specialized medicines for poultry birds
          </DrawerDescription>
        </DrawerHeader>
        
        <div className="px-4 pb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {categories.map((category) => (
              <DrawerClose key={category.id} asChild>
                <Link
                  to={`/birds/medicines/category/${category.id}`}
                  className={`block p-4 rounded-lg border transition-all duration-300 hover:shadow-md ${
                    categoryId === category.id
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

export default PoultryDrawer;
