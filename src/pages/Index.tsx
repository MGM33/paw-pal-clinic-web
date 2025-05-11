
import React from 'react';
import HeroSection from '../components/home/HeroSection';
import FeaturedPets from '../components/home/FeaturedPets';
import ServicesOverview from '../components/home/ServicesOverview';

const Index = () => {
  // Set page title
  React.useEffect(() => {
    document.title = "PetCare Vet | Home";
  }, []);
  
  return (
    <div>
      <HeroSection />
      <FeaturedPets />
      <ServicesOverview />
    </div>
  );
};

export default Index;
