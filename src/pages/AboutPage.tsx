import React, { useState } from 'react';

const AboutPage = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  
  React.useEffect(() => {
    document.title = "PetCare Vet | About Us";
  }, []);

  // Team member data with email and phone
  const teamMembers = [
    {
      id: 1,
      name: "Dr. Mohamed Hesham",
      position: "Specialist in Canine & Feline Medicine",
      education: "TBD",
      experience: "TBD",
      certifications: "TBD",
      bio: "TBD",
      email: "TBD",
      phone: "TBD",
      img: "https://i.postimg.cc/P5z0VSvN/Whats-App-Image-2025-06-26-at-11-48-52-c988b566.jpg"
    },
    {
      id: 2,
      name: "Dr. Mahmoud",
      position: "Specialist in Avian Medicine",
      education: "TBD",
      experience: "TBD",
      certifications: "TBD",
      bio: "TBD",
      email: "TBD",
      phone: "TBD",
      img: "https://source.unsplash.com/random/200x200/?veterinarian-2"
    },
    {
      id: 3,
      name: "Dr. Fatma",
      position: "Specialist in Canine & Feline Medicine",
      education: "TBD",
      experience: "TBD",
      certifications: "TBD",
      bio: "TBD",
      email: "TBD",
      phone: "TBD",
      img: "https://source.unsplash.com/random/200x200/?veterinarian-3"
    },
    {
      id: 4,
      name: "Dr. Rodiana Saif",
      position: "Cosmetics and Local Brand Specialist",
      education: "TBD",
      experience: "TBD",
      certifications: "TBD",
      bio: "TBD",
      email: "TBD",
      phone: "TBD",
      img: "https://source.unsplash.com/random/200x200/?veterinarian-4"
    },
    {
      id: 5,
      name: "Dr. Mariam",
      position: "Cosmetics and Local Brand Specialist",
      education: "TBD",
      experience: "TBD",
      certifications: "TBD",
      bio: "TBD",
      email: "TBD",
      phone: "TBD",
      img: "https://source.unsplash.com/random/200x200/?veterinarian-5"
    }
  ];

  const closeModal = (e) => {
    if (e.target.id === "modal-backdrop") {
      setSelectedMember(null);
    }
  };

  return (
    <div className="py-12 relative">
      {/* Modal Overlay */}
      {selectedMember && (
        <div 
          id="modal-backdrop"
          className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4 backdrop-blur-sm transition-opacity duration-300"
          onClick={closeModal}
        >
          <div 
            className="bg-gradient-to-br from-white/30 to-white/10 backdrop-blur-xl rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-white/30 relative"
            style={{
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)"
            }}
          >
            <div className="p-8 relative">
              {/* Close Button */}
              <button 
                className="absolute top-4 right-4 text-gray-200 hover:text-white text-3xl transition-all duration-200 hover:scale-110"
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
                    className="rounded-full w-40 h-40 object-cover border-4 border-white/50 shadow-xl"
                  />
                  <div className="absolute inset-0 rounded-full border-4 border-transparent animate-ping opacity-20"></div>
                </div>
              </div>
              
              {/* Name */}
              <h2 className="text-3xl font-bold text-center mt-6 mb-8 text-white">
                {selectedMember.name}
                <div className="w-24 h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto mt-2 rounded-full"></div>
              </h2>
              
              {/* Contact Info - Added below name */}
              <div className="flex justify-center space-x-6 mb-6">
                <a 
                  href={`mailto:${selectedMember.email}`} 
                  className="flex items-center text-gray-200 hover:text-white transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  {selectedMember.email}
                </a>
                <a 
                  href={`tel:${selectedMember.phone}`} 
                  className="flex items-center text-gray-200 hover:text-white transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  {selectedMember.phone}
                </a>
              </div>
              
              {/* Details */}
              <div className="space-y-5">
                <div className="border-b border-white/20 pb-3">
                  <h3 className="text-lg font-semibold text-white mb-1">Position</h3>
                  <p className="text-gray-100">{selectedMember.position}</p>
                </div>
                
                <div className="border-b border-white/20 pb-3">
                  <h3 className="text-lg font-semibold text-white mb-1">Education</h3>
                  <p className="text-gray-100">{selectedMember.education}</p>
                </div>
                
                <div className="border-b border-white/20 pb-3">
                  <h3 className="text-lg font-semibold text-white mb-1">Experience</h3>
                  <p className="text-gray-100">{selectedMember.experience}</p>
                </div>
                
                <div className="border-b border-white/20 pb-3">
                  <h3 className="text-lg font-semibold text-white mb-1">Certifications</h3>
                  <p className="text-gray-100">{selectedMember.certifications}</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Bio</h3>
                  <p className="text-gray-200">{selectedMember.bio}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center text-white">About PetCare Vet</h1>
          
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden mb-12 border border-white/20">
            <img 
              src="https://images.unsplash.com/photo-1581888227599-779811939961?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Veterinary Clinic" 
              className="w-full h-80 object-cover"
            />
            <div className="p-8">
              <h2 className="text-2xl font-semibold mb-4 text-white">Our Story</h2>
              <p className="text-gray-200 mb-6">
                PetCare Vet was founded in 2005 with a mission to provide exceptional veterinary care to all animals. 
                What started as a small clinic has now grown into a comprehensive veterinary center specializing in 
                the care of dogs, cats, and birds.
              </p>
              <p className="text-gray-200">
                Our team of experienced veterinarians and staff are dedicated to providing the highest quality medical 
                care for your beloved pets. We understand that pets are family members, and we treat each one with the 
                same level of care and attention we would give our own.
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl shadow-xl p-8 mb-12 border border-white/20">
            <h2 className="text-2xl font-semibold mb-4 text-white">Our Mission</h2>
            <p className="text-gray-200 mb-6">
              Our mission is to enhance the quality of life for pets through preventive care, early disease 
              detection, and effective medical treatments. We strive to educate pet owners about proper animal 
              care and nutrition to ensure their pets live long, healthy lives.
            </p>
            <div className="border-l-4 border-vet-blue pl-4 italic text-gray-200">
              "We believe that every pet deserves access to quality healthcare and compassionate treatment."
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/20">
            <h2 className="text-2xl font-semibold mb-6 text-white">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member) => (
                <div 
                  key={member.id}
                  className="text-center rounded-2xl p-6 transition-all duration-300 cursor-pointer group relative overflow-hidden"
                  style={{
                    background: 'rgba(255, 255, 255, 0.08)',
                    backdropFilter: 'blur(10px)',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)'
                  }}
                  onClick={() => setSelectedMember(member)}
                >
                  {/* Floating effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Hover effect */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-white/30 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  
                  {/* Floating animation */}
                  <div className="transform group-hover:-translate-y-2 transition-transform duration-500">
                    <div className="relative inline-block">
                      <div 
                        className="rounded-full overflow-hidden w-40 h-40 mx-auto mb-6 border-4 border-white/30 shadow-xl transform group-hover:scale-110 transition-transform duration-500"
                        style={{
                          background: 'radial-gradient(circle, rgba(255,255,255,0.4) 0%, transparent 70%)'
                        }}
                      >
                        <img 
                          src={member.img} 
                          alt={member.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute inset-0 rounded-full border-4 border-transparent group-hover:border-white/50 transition-all duration-700 animate-ping opacity-0 group-hover:opacity-30"></div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-vet-blue transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-gray-300 group-hover:text-white transition-colors">
                      {member.position}
                    </p>
                    
                    {/* Floating dots */}
                    <div className="absolute top-4 left-4 w-2 h-2 rounded-full bg-white/30 group-hover:bg-vet-blue transition-all duration-500"></div>
                    <div className="absolute bottom-4 right-4 w-3 h-3 rounded-full bg-white/30 group-hover:bg-vet-blue transition-all duration-700"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
