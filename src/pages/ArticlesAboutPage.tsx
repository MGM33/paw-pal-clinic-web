import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Stethoscope, HeartPulse, Brain } from 'lucide-react';

const ArticlesAboutPage = () => {
  React.useEffect(() => {
    document.title = 'PetCare Vet | About Articles';
  }, []);

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
            <div className="relative h-96">
              <img 
                src="https://videos.openai.com/vg-assets/assets%2Ftask_01jydmz7gef6nazgc723hnzjj2%2F1750657437_img_2.webp?st=2025-06-23T03%3A49%3A59Z&se=2025-06-29T04%3A49%3A59Z&sks=b&skt=2025-06-23T03%3A49%3A59Z&ske=2025-06-29T04%3A49%3A59Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=3d249c53-07fa-4ba4-9b65-0bf8eb4ea46a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=qzdI1UAiSAXXsFDo8uRxRTeq4lvnYPVIj49XqpWsDhk%3D&az=oaivgprodscus" 
                alt="Pet Articles" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="flex justify-center mb-4">
                    <BookOpen size={48} className="text-white" />
                  </div>
                  <h1 className="text-4xl font-bold mb-4">About Our Articles</h1>
                  <p className="text-xl max-w-2xl mx-auto">
                    Expert-written resources to help every pet owner make informed decisions
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8">
              <h2 className="text-2xl font-semibold mb-4">Discover Our Knowledge Hub</h2>
              <p className="text-gray-600 mb-6">
                At VetCare, we believe that informed pet owners make the best caregivers. That’s why we created our 
                <strong> Articles</strong> section — a growing collection of expert-written guides, tips, and how-tos 
                designed to empower you with accurate veterinary knowledge.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center mb-3">
                    <Stethoscope className="text-theme-sky mr-3" size={24} />
                    <h3 className="text-xl font-medium">Veterinary-Approved</h3>
                  </div>
                  <p className="text-gray-600">All articles are reviewed and verified by licensed veterinarians to ensure reliability and accuracy.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center mb-3">
                    <HeartPulse className="text-theme-sky mr-3" size={24} />
                    <h3 className="text-xl font-medium">Health & Wellness Tips</h3>
                  </div>
                  <p className="text-gray-600">From early illness detection to dietary advice, our articles cover all aspects of your pet's health.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center mb-3">
                    <Brain className="text-theme-sky mr-3" size={24} />
                    <h3 className="text-xl font-medium">Easy to Understand</h3>
                  </div>
                  <p className="text-gray-600">Written in plain language so that both new and experienced pet parents can benefit.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center mb-3">
                    <BookOpen className="text-theme-sky mr-3" size={24} />
                    <h3 className="text-xl font-medium">Wide Topic Range</h3>
                  </div>
                  <p className="text-gray-600">Includes nutrition, grooming, vaccines, behavior, emergency care, and more.</p>
                </div>
              </div>

              <div className="bg-theme-lightsky/20 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold mb-3">What You Can Learn</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>How to choose the right nutrition for your pets</li>
                  <li>Stay on top of essential vaccines and care practices</li>
                  <li>Spot early signs of illness with home checkup tips</li>
                  <li>Get behavioral training advice</li>
                  <li>And much more — all tailored to your pet’s needs</li>
                </ul>
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-semibold mb-6">Start Reading Now</h3>
                <Link 
                  to="/articles"
                  className="bg-theme-deepsky hover:bg-theme-sky text-white px-8 py-4 rounded-md font-semibold transition-colors inline-block"
                >
                  Browse Articles
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlesAboutPage;
