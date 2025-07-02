import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Dog, Cat, Bird, Home, Phone, Menu, Settings, Info, Package, Grid3X3, FileText
} from 'lucide-react';
import {
  Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import LanguageToggle from "./LanguageToggle";

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === '/' && currentPath === '/') return true;
    if (path !== '/' && currentPath.startsWith(path)) return true;
    return false;
  };

  const isCategoryActive = () => {
    return currentPath.startsWith('/dogs') ||
      currentPath.startsWith('/cats') ||
      currentPath.startsWith('/birds') ||
      currentPath.startsWith('/our-products') ||
      currentPath.startsWith('/articles');
  };

  const NavLink = ({
    to,
    children,
    icon: Icon
  }: { to: string; children: React.ReactNode; icon?: React.ElementType }) => {
    const active = isActive(to);
    return (
      <Link
        to={to}
        className={`relative flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 font-medium ${active
          ? 'bg-theme-sky/30 text-theme-deepsky shadow-md scale-105'
          : 'text-gray-700 hover:text-theme-deepsky hover:bg-theme-lightsky/20 hover:scale-105'
          }`}
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
    { to: '/our-products/about', icon: Package, name: 'Local Brand' },
    { to: '/articles/about', icon: FileText, name: 'Articles' },
  ];

  return (
    <nav className="glass-effect shadow-lg sticky top-0 z-50 border-b border-theme-sky/30">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-3 group h-12">
            <div className="scale-[1.7]">
              <img
                src="https://i.postimg.cc/x8SFrpw2/20250623-1030-Vet-Care-Poultry-Logo-simple-compose-01jydv2198e069rax2drgp79rp-1.png"
                alt="VetCare Logo"
                className="h-10 w-auto object-contain"
              />
            </div>
            <span className="text-3xl font-bold bg-gradient-to-r from-theme-deepsky to-theme-sky bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
              VetCare
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-2 items-center">
            <NavLink to="/" icon={Home}>Home</NavLink>
            <NavLink to="/services" icon={Settings}>Services</NavLink>

            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={`relative flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 font-medium bg-transparent border-none hover:bg-theme-lightsky/20 data-[state=open]:bg-theme-lightsky/20 ${isCategoryActive()
                      ? 'bg-theme-sky/30 text-theme-deepsky shadow-md scale-105'
                      : 'text-gray-700 hover:text-theme-deepsky hover:scale-105'
                      }`}
                  >
                    <Grid3X3 size={18} />
                    <span>Categories</span>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-48 gap-2 p-4 glass-effect border border-theme-sky/20">
                      {categories.map((category) => (
                        <Link
                          key={category.to}
                          to={category.to}
                          className={`flex items-center space-x-2 rounded-lg p-3 text-sm transition-all duration-300 hover:scale-105 ${isActive(category.to)
                            ? 'bg-theme-sky/30 text-theme-deepsky shadow-sm'
                            : 'hover:bg-theme-sky/20 hover:text-theme-deepsky'
                            }`}
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

            {/* Improved Language Toggle */}
            <LanguageToggle />
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button className="text-gray-700 focus:outline-none hover:text-theme-deepsky transition-colors duration-300 p-2 rounded-lg hover:bg-theme-lightsky/20">
                  <Menu className="w-6 h-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="top" className="px-4 py-6 glass-effect">
                <SheetHeader>
                  <SheetTitle className="text-center text-theme-deepsky flex items-center justify-center space-x-2">
                    <div className="flex items-center space-x-2">
                      <img
                        src="https://i.postimg.cc/x8SFrpw2/20250623-1030-Vet-Care-Poultry-Logo-simple-compose-01jydv2198e069rax2drgp79rp-1.png"
                        alt="VetCare Logo"
                        className="h-6 w-auto object-contain"
                      />
                      <span className="text-lg font-semibold text-theme-deepsky">VetCare Menu</span>
                    </div>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col space-y-3 mt-4">
                  <NavLink to="/" icon={Home}>Home</NavLink>
                  <NavLink to="/services" icon={Settings}>Services</NavLink>

                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-gray-700 font-medium px-4 py-2">
                      <Grid3X3 size={18} />
                      <span>Categories</span>
                    </div>
                    <div className="pl-4 space-y-2">
                      {categories.map((category) => (
                        <NavLink key={category.to} to={category.to} icon={category.icon}>
                          {category.name}
                        </NavLink>
                      ))}
                    </div>
                  </div>

                  <NavLink to="/about" icon={Info}>About Us</NavLink>
                  <NavLink to="/contact" icon={Phone}>Contact</NavLink>

                  {/* Mobile language toggle */}
                  <LanguageToggle />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
