
import React from 'react';
import { Link } from 'react-router-dom';
import { Package, Award, Heart, Shield } from 'lucide-react';

const OurProductsAboutPage = () => {
  React.useEffect(() => {
    document.title = 'PetCare Vet | About Our Products';
  }, []);

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
            <div className="relative h-96">
              <img 
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Our Products" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="flex justify-center mb-4">
                    <Package size={48} className="text-white" />
                  </div>
                  <h1 className="text-4xl font-bold mb-4">About Our Products</h1>
                  <p className="text-xl max-w-2xl">
                    Premium pet care products crafted with love and expertise
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <h2 className="text-2xl font-semibold mb-4">Our Commitment to Quality</h2>
              <p className="text-gray-600 mb-6">
                At PetCare Vet, we believe that every pet deserves the highest quality care. That's why we've developed 
                our own exclusive line of veterinary products, formulated with precision and tested for safety and 
                effectiveness. Our products are designed by veterinarians, for pets and their loving families.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center mb-3">
                    <Award className="text-purple-600 mr-3" size={24} />
                    <h3 className="text-xl font-medium">Veterinarian Formulated</h3>
                  </div>
                  <p className="text-gray-600">All our products are developed by experienced veterinarians using the latest scientific research.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center mb-3">
                    <Shield className="text-purple-600 mr-3" size={24} />
                    <h3 className="text-xl font-medium">Safety Tested</h3>
                  </div>
                  <p className="text-gray-600">Each product undergoes rigorous testing to ensure safety and efficacy for your beloved pets.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center mb-3">
                    <Heart className="text-purple-600 mr-3" size={24} />
                    <h3 className="text-xl font-medium">Made with Love</h3>
                  </div>
                  <p className="text-gray-600">Every product is crafted with genuine care and passion for pet health and wellbeing.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center mb-3">
                    <Package className="text-purple-600 mr-3" size={24} />
                    <h3 className="text-xl font-medium">Premium Quality</h3>
                  </div>
                  <p className="text-gray-600">We use only the finest ingredients and materials to create products that exceed expectations.</p>
                </div>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold mb-3">Our Product Range</h3>
                <p className="text-gray-700 mb-4">
                  From nutritional supplements to grooming essentials, our comprehensive product line covers all aspects 
                  of pet care. Whether you're looking for preventive health solutions, therapeutic treatments, or everyday 
                  wellness products, we have something for every pet's needs.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Health supplements and vitamins</li>
                  <li>Grooming and hygiene products</li>
                  <li>Therapeutic treatments</li>
                  <li>Preventive care solutions</li>
                  <li>First aid and wound care</li>
                </ul>
              </div>
              
              <div className="text-center">
                <h3 className="text-2xl font-semibold mb-6">Ready to Explore Our Products?</h3>
                <Link 
                  to="/our-products"
                  className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-md font-semibold transition-colors inline-block"
                >
                  Browse Our Products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProductsAboutPage;
