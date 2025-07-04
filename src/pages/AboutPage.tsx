import React, { useState, useEffect, MouseEvent } from 'react';

interface TeamMember {
  id: number;
  name: string;
  position: string;
  education: string;
  experience: string;
  certifications: string;
  bio: string;
  email: string;
  phone: string;
  img: string;
}

const AboutPage: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  useEffect(() => {
    document.title = "PetCare Vet | About Us";
  }, []);

  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Dr. Mohamed Hesham",
      position: "Specialist in Canine & Feline Medicine",
      education: "TBD",
      experience: "TBD",
      certifications: "TBD",
      bio: "TBD",
      email: "TBD",
      phone: "01205746907",
      img: "https://i.postimg.cc/P5z0VSvN/Whats-App-Image-2025-06-26-at-11-48-52-c988b566.jpg"
    },
    {
      id: 2,
      name: "Dr. Mahmoud Elmatboly",
      position: "Specialist in Avian Medicine",
      education: "TBD",
      experience: "TBD",
      certifications: "TBD",
      bio: "TBD",
      email: "TBD",
      phone: "01030855811",
      img: "https://source.unsplash.com/random/200x200/?veterinarian-2"
    },
    {
      id: 3,
      name: "Dr. Fatma Kamal",
      position: "Specialist in Canine & Feline Medicine",
      education: "TBD",
      experience: "TBD",
      certifications: "TBD",
      bio: "TBD",
      email: "TBD",
      phone: "01277531114",
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
      phone: "01552496414",
      img: "https://source.unsplash.com/random/200x200/?veterinarian-4"
    },
    {
      id: 5,
      name: "Dr. Mariam Attah",
      position: "Cosmetics and Local Brand Specialist",
      education: "TBD",
      experience: "TBD",
      certifications: "TBD",
      bio: "TBD",
      email: "TBD",
      phone: "01040656983",
      img: "https://source.unsplash.com/random/200x200/?veterinarian-5"
    }
  ];

  const closeModal = (e: MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLDivElement).id === "modal-backdrop") {
      setSelectedMember(null);
    }
  };

  return (
    <div className="py-12">
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
            <div className="overflow-y-auto max-h-[90vh] scrollbar-hide">
              <div className="p-8 relative">
                <button
                  className="absolute top-6 right-6 text-gray-500 hover:text-gray-700 text-3xl transition-all duration-200"
                  onClick={() => setSelectedMember(null)}
                >
                  &times;
                </button>
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

                <h2 className="text-3xl font-bold text-center mt-6 mb-2 text-gray-800">
                  {selectedMember.name}
                </h2>
                <p className="text-lg text-center text-vet-blue mb-6">
                  {selectedMember.position}
                </p>

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

                <div className="space-y-5">
                  <div className="border-b border-gray-200 pb-3">
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Education</h3>
                    <p className="text-gray-600">{selectedMember.education}</p>
                  </div>
                  <div className="border-b border-gray-200 pb-3">
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Experience</h3>
                    <p className="text-gray-600">{selectedMember.experience}</p>
                  </div>
                  <div className="border-b border-gray-200 pb-3">
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Certifications</h3>
                    <p className="text-gray-600">{selectedMember.certifications}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Bio</h3>
                    <p className="text-gray-700">{selectedMember.bio}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">About PetCare Vet</h1>
          {/* rest of the code continues as-is with TypeScript checking */}
        </div>
      </div>

      {/* Replace this block with global CSS or move it to a .css/.scss file if needed */}
      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default AboutPage;
