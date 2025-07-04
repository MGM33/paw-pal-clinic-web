
import React, { useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, Award, Users, Heart, Stethoscope } from 'lucide-react';

const AboutPage = () => {
  useEffect(() => {
    document.title = "PetCare Vet | About Us";
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-theme-lightsky/30 to-theme-powder/30">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 text-theme-deepsky">About PetCare Veterinary</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Dedicated to providing exceptional veterinary care for your beloved pets. 
              Our experienced team combines compassion with cutting-edge medical expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="glass-effect rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <Heart className="text-theme-deepsky mr-4" size={40} />
                <h2 className="text-3xl font-bold text-theme-deepsky">Our Mission</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                To provide comprehensive, compassionate veterinary care that enhances the health and well-being of pets while strengthening the human-animal bond. We are committed to excellence in medical treatment, preventive care, and client education.
              </p>
            </div>
            
            <div className="glass-effect rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <Award className="text-theme-deepsky mr-4" size={40} />
                <h2 className="text-3xl font-bold text-theme-deepsky">Our Vision</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                To be the leading veterinary practice in our community, recognized for our exceptional medical care, innovative treatments, and unwavering dedication to improving the lives of pets and their families.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: <Users size={32} />, number: "10,000+", label: "Pets Treated" },
              { icon: <Award size={32} />, number: "15+", label: "Years Experience" },
              { icon: <Stethoscope size={32} />, number: "24/7", label: "Emergency Care" },
              { icon: <Heart size={32} />, number: "100%", label: "Satisfaction Rate" }
            ].map((stat, index) => (
              <div key={index} className="text-center glass-effect rounded-xl p-6">
                <div className="text-theme-deepsky mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-theme-deepsky mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-theme-deepsky">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "General Practice", description: "Comprehensive health examinations and routine care for all pets." },
              { title: "Emergency Care", description: "24/7 emergency services for urgent medical situations." },
              { title: "Surgical Procedures", description: "Advanced surgical treatments with state-of-the-art equipment." },
              { title: "Preventive Medicine", description: "Vaccinations, parasite prevention, and wellness programs." },
              { title: "Diagnostic Services", description: "Digital X-rays, ultrasound, and laboratory testing." },
              { title: "Dental Care", description: "Complete dental examinations, cleanings, and oral surgery." }
            ].map((service, index) => (
              <div key={index} className="glass-effect rounded-xl p-6 hover-lift">
                <h3 className="text-xl font-semibold mb-3 text-theme-deepsky">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="glass-effect rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-center mb-8 text-theme-deepsky">Get In Touch</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <MapPin className="text-theme-deepsky mx-auto mb-4" size={32} />
                <h3 className="font-semibold mb-2">Location</h3>
                <p className="text-gray-600">123 Pet Care Street<br />Animal City, AC 12345</p>
              </div>
              <div className="text-center">
                <Phone className="text-theme-deepsky mx-auto mb-4" size={32} />
                <h3 className="font-semibold mb-2">Phone</h3>
                <p className="text-gray-600">(555) 123-PETS<br />(555) 123-7387</p>
              </div>
              <div className="text-center">
                <Mail className="text-theme-deepsky mx-auto mb-4" size={32} />
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-gray-600">info@petcarevet.com<br />emergency@petcarevet.com</p>
              </div>
              <div className="text-center">
                <Clock className="text-theme-deepsky mx-auto mb-4" size={32} />
                <h3 className="font-semibold mb-2">Hours</h3>
                <p className="text-gray-600">Mon-Fri: 8AM-6PM<br />Sat-Sun: 9AM-4PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>
        {`
          .glass-effect {
            background: rgba(255, 255, 255, 0.2);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.3);
          }
          
          .hover-lift {
            transition: all 0.3s ease;
          }
          
          .hover-lift:hover {
            transform: translateY(-8px);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          }
        `}
      </style>
    </div>
  );
};

export default AboutPage;
