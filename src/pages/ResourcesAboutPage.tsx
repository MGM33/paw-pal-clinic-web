
import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Award, Users, Star } from 'lucide-react';

const ResourcesAboutPage = () => {
  React.useEffect(() => {
    document.title = 'VetCare | About Our Resources';
  }, []);

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
            <div className="relative h-96">
              <img 
                src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=2000&auto=format&fit=crop" 
                alt="Veterinary Resources" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="flex justify-center mb-4">
                    <BookOpen size={48} className="text-white" />
                  </div>
                  <h1 className="text-4xl font-bold mb-4">About Our Resources</h1>
                  <p className="text-xl max-w-2xl">
                    Professional veterinary knowledge base and reference materials
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <h2 className="text-2xl font-semibold mb-4">Our Commitment to Excellence</h2>
              <p className="text-gray-600 mb-6">
                At VetCare, we believe that quality veterinary care is built on a foundation of solid knowledge and 
                continuous learning. Our resource library represents the cornerstone of our expertise, featuring 
                carefully curated books and materials that guide our practice every day.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center mb-3">
                    <Award className="text-theme-deepsky mr-3" size={24} />
                    <h3 className="text-xl font-medium">Expert Authors</h3>
                  </div>
                  <p className="text-gray-600">Our resources are written by leading veterinary professionals and recognized experts in their fields.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center mb-3">
                    <Star className="text-theme-deepsky mr-3" size={24} />
                    <h3 className="text-xl font-medium">Latest Research</h3>
                  </div>
                  <p className="text-gray-600">All materials reflect the most current veterinary research and best practices in animal healthcare.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center mb-3">
                    <Users className="text-theme-deepsky mr-3" size={24} />
                    <h3 className="text-xl font-medium">Comprehensive Coverage</h3>
                  </div>
                  <p className="text-gray-600">From small animals to poultry, our resources cover all aspects of veterinary medicine and care.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center mb-3">
                    <BookOpen className="text-theme-deepsky mr-3" size={24} />
                    <h3 className="text-xl font-medium">Practical Application</h3>
                  </div>
                  <p className="text-gray-600">Every resource provides practical, actionable knowledge that directly improves patient care.</p>
                </div>
              </div>

              <div className="bg-theme-lightsky/20 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold mb-3">Our Resource Categories</h3>
                <p className="text-gray-700 mb-4">
                  Our carefully selected library spans multiple disciplines within veterinary medicine, ensuring 
                  comprehensive coverage of animal health topics from basic care to advanced surgical procedures.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Internal Medicine and Diagnostics</li>
                  <li>Surgical Procedures and Techniques</li>
                  <li>Animal Nutrition and Health</li>
                  <li>Pharmacology and Therapeutics</li>
                  <li>Poultry and Farm Animal Management</li>
                  <li>Emergency and Critical Care</li>
                </ul>
              </div>
              
              <div className="text-center">
                <h3 className="text-2xl font-semibold mb-6">Explore Our Library</h3>
                <Link 
                  to="/resources"
                  className="bg-theme-deepsky hover:bg-theme-sky text-white px-8 py-4 rounded-md font-semibold transition-colors inline-block"
                >
                  Browse Resources
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesAboutPage;
