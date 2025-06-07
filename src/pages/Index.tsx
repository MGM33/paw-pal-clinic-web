
import React from 'react';
import CategorySlideshow from '../components/home/CategorySlideshow';
import FeaturedPets from '../components/home/FeaturedPets';
import ServicesOverview from '../components/home/ServicesOverview';
import Features from '../components/home/Features';
import StatsSection from '../components/home/StatsSection';
import Testimonials from '../components/home/Testimonials';
import LocationSection from '../components/home/LocationSection';

const Index = () => {
  // Set page title
  React.useEffect(() => {
    document.title = "🏥 VetCare | Professional Veterinary Services";
  }, []);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-theme-lightsky/30 to-theme-powder/30">
      <CategorySlideshow />
      <Features />
      <FeaturedPets />
      <StatsSection />
      <ServicesOverview />
      <Testimonials />
      <LocationSection />
    </div>
  );
};

export default Index;
