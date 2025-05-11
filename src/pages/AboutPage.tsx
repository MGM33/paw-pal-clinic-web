
import React from 'react';

const AboutPage = () => {
  React.useEffect(() => {
    document.title = "PetCare Vet | About Us";
  }, []);
  
  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">About PetCare Vet</h1>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
            <img 
              src="https://source.unsplash.com/random/1200x600/?veterinary-clinic" 
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="rounded-full overflow-hidden w-40 h-40 mx-auto mb-4">
                  <img 
                    src="https://source.unsplash.com/random/200x200/?veterinarian-1" 
                    alt="Dr. Smith" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-medium">Dr. John Smith</h3>
                <p className="text-gray-600">Chief Veterinarian</p>
              </div>
              <div className="text-center">
                <div className="rounded-full overflow-hidden w-40 h-40 mx-auto mb-4">
                  <img 
                    src="https://source.unsplash.com/random/200x200/?veterinarian-2" 
                    alt="Dr. Johnson" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-medium">Dr. Sarah Johnson</h3>
                <p className="text-gray-600">Specialist in Avian Medicine</p>
              </div>
              <div className="text-center">
                <div className="rounded-full overflow-hidden w-40 h-40 mx-auto mb-4">
                  <img 
                    src="https://source.unsplash.com/random/200x200/?veterinarian-3" 
                    alt="Dr. Martinez" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-medium">Dr. Carlos Martinez</h3>
                <p className="text-gray-600">Feline Medicine Specialist</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
