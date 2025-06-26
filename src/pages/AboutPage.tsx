import React, { useState } from 'react';

const AboutPage = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  
  React.useEffect(() => {
    document.title = "PetCare Vet | About Us";
  }, []);

  // Team member data
  const teamMembers = [
    {
      id: 1,
      name: "Dr. Mohamed Hesham",
      position: "Specialist in Canine & Feline Medicine",
      education: "TBD",
      experience: "TBD",
      certifications: "TBD",
      bio: "TBD",
      img: "https://source.unsplash.com/random/200x200/?veterinarian-1"
    },
    {
      id: 2,
      name: "Dr. Mahmoud",
      position: "Specialist in Avian Medicine",
      education: "TBD",
      experience: "TBD",
      certifications: "TBD",
      bio: "TBD",
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
          className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              {/* Close Button */}
              <button 
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
                onClick={() => setSelectedMember(null)}
              >
                &times;
              </button>
              
              {/* Profile Photo */}
              <div className="flex justify-center">
                <img 
                  src={selectedMember.img} 
                  alt={selectedMember.name} 
                  className="rounded-full w-40 h-40 object-cover border-4 border-vet-blue"
                />
              </div>
              
              {/* Name */}
              <h2 className="text-2xl font-bold text-center mt-4 mb-6">
                {selectedMember.name}
              </h2>
              
              {/* Details */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-vet-blue">Position</h3>
                  <p>{selectedMember.position}</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-vet-blue">Education</h3>
                  <p>{selectedMember.education}</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-vet-blue">Experience</h3>
                  <p>{selectedMember.experience}</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-vet-blue">Certifications</h3>
                  <p>{selectedMember.certifications}</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-vet-blue">Bio</h3>
                  <p className="text-gray-700">{selectedMember.bio}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">About PetCare Vet</h1>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
            <img 
              src="https://images.unsplash.com/photo-1581888227599-779811939961?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Veterinary Clinic" 
              className="w-full h-80 object-cover"
            />
            <div className="p-8">
              <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
              <p className="text-gray-600 mb-6">
                PetCare Vet was founded in 2005 with a mission to provide exceptional veterinary care to all animals. 
                What started as a small clinic has now grown into a comprehensive veterinary center specializing in 
                the care of dogs, cats, and birds.
              </p>
              <p className="text-gray-600">
                Our team of experienced veterinarians and staff are dedicated to providing the highest quality medical 
                care for your beloved pets. We understand that pets are family members, and we treat each one with the 
                same level of care and attention we would give our own.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              Our mission is to enhance the quality of life for pets through preventive care, early disease 
              detection, and effective medical treatments. We strive to educate pet owners about proper animal 
              care and nutrition to ensure their pets live long, healthy lives.
            </p>
            <div className="border-l-4 border-vet-blue pl-4 italic text-gray-600">
              "We believe that every pet deserves access to quality healthcare and compassionate treatment."
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-6">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamMembers.map((member) => (
                <div 
                  key={member.id}
                  className="text-center border-2 border-gray-200 rounded-xl p-4 transition-all hover:border-vet-blue hover:shadow-md cursor-pointer"
                  onClick={() => setSelectedMember(member)}
                >
                  <div className="rounded-full overflow-hidden w-40 h-40 mx-auto mb-4">
                    <img 
                      src={member.img} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-medium">{member.name}</h3>
                  <p className="text-gray-600">{member.position}</p>
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
