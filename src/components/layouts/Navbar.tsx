
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Dog, Cat, Bird, Home, Phone, Menu, Settings, Info, Package, Grid3X3 } from 'lucide-react';
import { 
  Drawer, 
  DrawerTrigger, 
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerClose
} from "@/components/ui/drawer";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isOpen, setIsOpen] = useState(false);
  
  const isActive = (path: string) => {
    if (path === '/' && currentPath === '/') {
      return true;
    }
    if (path !== '/' && currentPath.startsWith(path)) {
      return true;
    }
    return false;
  };

  const NavLink = ({ to, children, icon: Icon, dropdown = false }: { to: string; children: React.ReactNode; icon?: React.ElementType; dropdown?: boolean }) => {
    const active = isActive(to);
    return (
      <Link
        to={to}
        className={`flex items-center space-x-1 transition-colors ${active ? 'text-vet-blue font-semibold' : 'text-gray-600 hover:text-vet-blue'}`}
        onClick={() => setIsOpen(false)}
      >
        {Icon && <Icon size={18} />}
        <span>{children}</span>
      </Link>
    );
  };

  const categories = [
    { to: '/dogs', icon: Dog, name: 'Dogs' },
    { to: '/cats', icon: Cat, name: 'Cats' },
    { to: '/birds', icon: Bird, name: 'Poultry Birds' },
    { to: '/local-brand', icon: Package, name: 'Local Brand' }
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-vet-blue">VetCare</span>
          </Link>
          
          <div className="hidden md:flex space-x-8 items-center">
            <NavLink to="/" icon={Home}>Home</NavLink>
            <NavLink to="/services" icon={Settings}>Services</NavLink>
            
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="flex items-center space-x-1 text-gray-600 hover:text-vet-blue font-normal">
                    <Grid3X3 size={18} />
                    <span>Categories</span>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-48 gap-2 p-4">
                      {categories.map((category) => (
                        <Link
                          key={category.to}
                          to={category.to}
                          className="flex items-center space-x-2 rounded-md p-2 text-sm hover:bg-accent hover:text-accent-foreground"
                        >
                          <category.icon size={16} />
                          <span>{category.name}</span>
                        </Link>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <NavLink to="/about" icon={Info}>About Us</NavLink>
            <NavLink to="/contact" icon={Phone}>Contact</NavLink>
          </div>
          
          <div className="md:hidden">
            <Drawer>
              <DrawerTrigger asChild>
                <button className="text-gray-600 focus:outline-none">
                  <Menu className="w-6 h-6" />
                </button>
              </DrawerTrigger>
              <DrawerContent className="px-4 py-6">
                <DrawerHeader>
                  <DrawerTitle className="text-center text-vet-blue">Menu</DrawerTitle>
                </DrawerHeader>
                <div className="flex flex-col space-y-4 mt-4">
                  <NavLink to="/" icon={Home}>Home</NavLink>
                  <NavLink to="/services" icon={Settings}>Services</NavLink>
                  
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-gray-700 font-medium">
                      <Grid3X3 size={18} />
                      <span>Categories</span>
                    </div>
                    <div className="pl-6 space-y-2">
                      {categories.map((category) => (
                        <NavLink key={category.to} to={category.to} icon={category.icon}>
                          {category.name}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                  
                  <NavLink to="/about" icon={Info}>About Us</NavLink>
                  <NavLink to="/contact" icon={Phone}>Contact</NavLink>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
