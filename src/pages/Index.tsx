
import React from 'react';
import CategorySlideshow from '../components/home/CategorySlideshow';
import FeaturedPets from '../components/home/FeaturedPets';
import ServicesOverview from '../components/home/ServicesOverview';

const Index = () => {
  // Set page title
  React.useEffect(() => {
    document.title = "PetCare Vet | Home";
  }, []);
  
  return (
    <div>
      <CategorySlideshow />
      <FeaturedPets />
      <ServicesOverview />
    </div>
  );
};

export default Index;
