
import React, { useState } from 'react';

const AboutPage = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  
  React.useEffect(() => {
    document.title = "VetCare | About Our Project";
  }, []);

  // Team member data
  const teamMembers = [
    {
      id: 1,
      name: "Dr. Mohamed Hesham",
      position: "Specialist in Canine & Feline Internal Medicine", 
      education: "Faculty of veterinary medicine pharma program",
      address: "Ard Elgameaat - Ismailia - Egypt",
      email: "madhesham@gmail.com",
      phone: "01205746907",
      img: "https://i.postimg.cc/P5z0VSvN/Whats-App-Image-2025-06-26-at-11-48-52-c988b566.jpg"
    },
    {
      id: 2,
      name: "Dr. Mahmoud Elmatboly",
      position: "Specialist in Avian Medicine",
      education: "Faculty of veterinary medicine pharma program", 
      address: "Damitta - Egypt",
      email: "mahmoudelmatbolt47@gmail.com",
      phone: "01030855811",
      img: "https://i.postimg.cc/RZBWppn3/Mahmoud.jpg"
    },
    {
      id: 3,
      name: "Dr. Fatma Kamal",
      position: "Specialist in Canine & Feline Internal Medicine",
      education: "Faculty of veterinary medicine pharma program",
      address: "Ismailia - Egypt", 
      email: "fk6146715@gmail.com",
      phone: "01277531114",
      img: "https://i.postimg.cc/FKnsvT1V/Fatma.jpg"
    },
    {
      id: 4,
      name: "Dr. Rodaina Saif",
      position: "Specialist in Canine & Feline External Medicine",
      education: "Faculty of veterinary medicine pharma program",
      address: "El-arish - North Sinai - Egypt",
      email: "dodasaif40@gmail.com",
      phone: "01552496414",
      img: "https://i.postimg.cc/s2L0sWzh/Rodaina.jpg"
    },
    {
      id: 5,
      name: "Dr. Mariam Attah",
      position: "Specialist in Canine & Feline External Medicine",
      education: "Faculty of veterinary medicine pharma program",
      address: "Port-said - Egypt",
      email: "mariamattaf511@gmail.com",
      phone: "01040656983",
      img: "https://i.postimg.cc/5tfFyK4c/Mariam.jpg"
    }
  ];

  const closeModal = (e) => {
    if (e.target.id === "modal-backdrop") {
      setSelectedMember(null);
    }
  };

  return (
    <div className="py-12">
      {/* Modal Overlay */}
      {selectedMember && (
        <div 
          id="modal-backdrop"
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 backdrop-blur-sm transition-opacity duration-300"
          onClick={closeModal}
        >
          <div 
            className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden border border-gray-200 relative"
            style={{
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
            }}
          >
            {/* Scrollable content without visible scrollbar */}
            <div className="overflow-y-auto max-h-[90vh] scrollbar-hide">
              <div className="p-8 relative">
                {/* Close Button */}
                <button 
                  className="absolute top-6 right-6 text-gray-500 hover:text-gray-700 text-3xl transition-all duration-200"
                  onClick={() => setSelectedMember(null)}
                >
                  &times;
                </button>
                
                {/* Profile Photo */}
                <div className="flex justify-center">
                  <div className="relative">
                    <img 
                      src={selectedMember.img} 
                      alt={selectedMember.name} 
                      className="rounded-full w-40 h-40 object-cover border-4 border-white shadow-xl"
                    />
                    <div className="absolute inset-0 rounded-full border-4 border-blue-100 animate-ping opacity-30"></div>
                  </div>
                </div>
                
                {/* Name */}
                <h2 className="text-3xl font-bold text-center mt-6 mb-2 text-gray-800">
                  {selectedMember.name}
                </h2>
                <p className="text-lg text-center text-vet-blue mb-6">
                  {selectedMember.position}
                </p>
                
                {/* Contact Info */}
                <div className="flex justify-center space-x-6 mb-8">
                  <div className="flex items-center text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-vet-blue" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    {selectedMember.email}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-vet-blue" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    {selectedMember.phone}
                  </div>
                </div>
                
                {/* Details */}
                <div className="space-y-5">
                  <div className="border-b border-gray-200 pb-3">
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Education</h3>
                    <p className="text-gray-600">{selectedMember.education}</p>
                  </div>
                  
                  <div className="border-b border-gray-200 pb-3">
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Address</h3>
                    <p className="text-gray-600">{selectedMember.address}</p>
                  </div>
                
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">About VetCare</h1>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12 border border-gray-100">
            <img 
              src="https://images.unsplash.com/photo-1581888227599-779811939961?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Veterinary Medicine Research" 
              className="w-full h-80 object-cover"
            />
            <div className="p-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Our Project</h2>
              <p className="text-gray-600 mb-6">
                VetCare is a comprehensive veterinary medicine database developed to provide accessible and reliable information about medicines for dogs, cats, and poultry birds. Our platform serves as an educational resource for veterinary medicine students, professionals, and animal care enthusiasts.
              </p>
              <p className="text-gray-600">
                This platform was created to bridge the gap in veterinary medicine information accessibility, providing a centralized database where users can easily search, browse, and learn about various veterinary pharmaceuticals and their applications.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12 border border-gray-100">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              Our mission is to create a comprehensive, user-friendly database of veterinary medicines that serves as a valuable educational resource. We aim to make veterinary pharmaceutical information more accessible to students, researchers, and anyone interested in animal healthcare.
            </p>
            <div className="border-l-4 border-vet-blue pl-4 italic text-gray-600">
              "Advancing veterinary education through accessible and comprehensive medicine information."
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Project Contributors</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamMembers.map((member) => (
                <div 
                  key={member.id}
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden border border-gray-200 group"
                  onClick={() => setSelectedMember(member)}
                >
                  {/* Large Image Section */}
                  <div className="relative h-72 overflow-hidden">
                    <img 
                      src={member.img} 
                      alt={member.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  {/* Details Section - Bottom of Card */}
                  <div className="p-4 bg-white">
                    <h3 className="text-lg font-bold text-gray-800 mb-1 group-hover:text-vet-blue transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">
                      {member.position}
                    </p>
                    <div className="flex items-center text-xs text-gray-500">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                      {member.phone}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Hidden scrollbar styles */}
      <style>
        {`
          .scrollbar-hide {
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;  /* Firefox */
          }
          .scrollbar-hide::-webkit-scrollbar {
            display: none;  /* Chrome, Safari and Opera */
          }
        `}
      </style>
    </div>
  );
};

export default AboutPage;
