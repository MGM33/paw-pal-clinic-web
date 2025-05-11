
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Dog, Cat, Bird, Home, Phone, Menu } from 'lucide-react';
import { 
  Drawer, 
  DrawerTrigger, 
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerClose
} from "@/components/ui/drawer";

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

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-vet-blue">PetCare</span>
            <span className="text-2xl font-bold text-vet-green">Vet</span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <NavLink to="/" icon={Home}>Home</NavLink>
            <NavLink to="/services">Services</NavLink>
            <div className="group relative">
              <NavLink to="/dogs" icon={Dog} dropdown>Dogs</NavLink>
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md hidden group-hover:block">
                <Link to="/dogs/medicines" className="block px-4 py-2 text-sm text-gray-700 hover:bg-vet-blue hover:text-white">Medicines</Link>
              </div>
            </div>
            <div className="group relative">
              <NavLink to="/cats" icon={Cat} dropdown>Cats</NavLink>
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md hidden group-hover:block">
                <Link to="/cats/medicines" className="block px-4 py-2 text-sm text-gray-700 hover:bg-vet-blue hover:text-white">Medicines</Link>
              </div>
            </div>
            <div className="group relative">
              <NavLink to="/birds" icon={Bird} dropdown>Birds</NavLink>
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md hidden group-hover:block">
                <Link to="/birds/medicines" className="block px-4 py-2 text-sm text-gray-700 hover:bg-vet-blue hover:text-white">Medicines</Link>
              </div>
            </div>
            <NavLink to="/about">About Us</NavLink>
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
                  <NavLink to="/services">Services</NavLink>
                  <NavLink to="/dogs" icon={Dog}>Dogs</NavLink>
                  <div className="pl-6">
                    <Link 
                      to="/dogs/medicines" 
                      className="block py-2 text-sm text-gray-700 hover:text-vet-blue"
                      onClick={() => setIsOpen(false)}
                    >
                      Medicines
                    </Link>
                  </div>
                  <NavLink to="/cats" icon={Cat}>Cats</NavLink>
                  <div className="pl-6">
                    <Link 
                      to="/cats/medicines" 
                      className="block py-2 text-sm text-gray-700 hover:text-vet-blue"
                      onClick={() => setIsOpen(false)}
                    >
                      Medicines
                    </Link>
                  </div>
                  <NavLink to="/birds" icon={Bird}>Birds</NavLink>
                  <div className="pl-6">
                    <Link 
                      to="/birds/medicines" 
                      className="block py-2 text-sm text-gray-700 hover:text-vet-blue"
                      onClick={() => setIsOpen(false)}
                    >
                      Medicines
                    </Link>
                  </div>
                  <NavLink to="/about">About Us</NavLink>
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
