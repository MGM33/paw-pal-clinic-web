import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const BookDetailPage = () => {
  const { bookId } = useParams();

  const books = [
    {
      id: 1,
      title: 'WSAVA List of Essential Medicines for Cats and Dogs',
      cover: 'https://i.postimg.cc/vHq0y9bt/WASAVA-image.png',
      description: 'A comprehensive list of essential medicines for the treatment of cats and dogs.',
      fullDescription: 'This document by the World Small Animal Veterinary Association (WSAVA) outlines a global list of essential medicines required for preventive care and treatment of key animal diseases. It includes drugs grouped by function—such as anesthetics, antimicrobials, antiparasitics, and vaccines—with clear guidance for veterinarians worldwide.',
      chapters: [
        'Background & Purpose',
        'Anaesthetics and Emergency Drugs',
        'Antimicrobial Drugs',
        'Antiparasitics and Vaccines',
        'Organ System Specific Medications',
        'Guidelines and Acknowledgements'
      ],
      pdfLink: 'https://drive.google.com/file/d/1FCeq0yaSqUnaQGR90isImpQmUTT4fvZw/view?usp=drive_link'
    },
    {
    id: 2,
    title: 'Manual of Commonly Used Drugs in Pet Practice',
    cover: 'https://i.postimg.cc/x87Nx0VM/UVAS.png',
    description: 'Prepared by 8th semester DVM students under supervision, this guide lists common drugs used in pet veterinary practice.',
    fullDescription: 'This manual has been written for veterinary students who want to pursue their careers in small animal practice. It lists antibiotics, NSAIDs, steroids, anti-fungals, dewormers, and more — along with drug names, dosages, and formulations. Supervised by academic professionals, it serves as a reference to aid students and veterinarians in routine treatment.',
    chapters: [
      'Antibiotics',
      'NSAIDs & Steroids',
      'Anti-Fungals',
      'Vitamins, Tonics, & Stimulants',
      'Dewormers & Anti-Protazoals',
      'Diuretics',
      'Anti-Emetics',
      'Ear/Eye Drops & Ointments',
      'Antacids & H2 Antagonists',
      'Antihistamines',
      'Bronchodilators',
      'Anesthetics',
      'Miscellaneous',
      'Powders, Sprays, Solutions',
      'Infusions',
      'Vaccines (Dogs, Cats, Poultry)'
    ],
    pdfLink: 'https://drive.google.com/file/d/1E9rPXAFLM43Y_HymvhB8fpfu4e5noQHv/view?usp=drive_link'
  },
    {
  id: 3,
  title: 'Medicines for Pets',
  cover: 'https://i.postimg.cc/dVRDdR38/medicine-for-pets.png',
  description: 'A science investigation pack for teaching children (ages 9–11) about how pet medicines are made.',
  fullDescription: '“Medicines for Pets” is an educational resource designed for primary school teachers to help students understand the process of how pet medicines are developed and produced. Through hands-on experiments and engaging activities, students learn about the lifecycle of medicines, from extracting the active ingredient to creating coatings for tablets. This pack encourages inquiry-based science learning in a fun, real-world context.',
  chapters: [
    'Introduction',
    'Resource Requirements',
    '1. The Lifecycle of a Pet Medicine',
    '2. Extracting the Active Ingredient',
    '3. Mixing the Medicine',
    '4. Testing the Tablet Shape',
    '5. Creating a Coating',
    'Appendix: Industrial Process Overview'
  ],
  pdfLink: 'https://drive.google.com/file/d/1vWiKn-b0UrbUTWcy-NBcxEJODKi7vIKJ/view?usp=drive_link'
}

  ];

  const book = books.find(b => b.id === Number(bookId)) || books[0];

  useEffect(() => {
    document.title = `VetCare | ${book.title}`;
  }, [book.title]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-theme-lightsky/30 to-theme-powder/30 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/90 rounded-3xl shadow-xl overflow-hidden">
            <div className="md:flex">
              {/* Book Cover */}
              <div className="md:w-1/3 p-8 flex justify-center items-start">
                <div className="w-64 h-80 rounded-lg overflow-hidden shadow-2xl">
                  <img
                    src={book.cover}
                    alt={book.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Book Details */}
              <div className="md:w-2/3 p-8">
                <div className="mb-6">
                  <Link
                    to="/resources"
                    className="inline-flex items-center text-theme-deepsky hover:text-theme-sky transition-colors mb-4"
                  >
                    <ArrowLeft size={20} className="mr-2" />
                    Back to Resources
                  </Link>

                  <h1 className="text-4xl font-bold text-gray-900 mb-4">{book.title}</h1>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4 text-theme-deepsky">About This Book</h2>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {book.fullDescription}
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4 text-theme-deepsky">Table of Contents</h2>
                  <ul className="space-y-2">
                    {book.chapters.map((chapter, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <span className="w-8 h-8 bg-theme-lightsky/30 rounded-full flex items-center justify-center text-sm font-medium mr-3">
                          {index + 1}
                        </span>
                        {chapter}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-theme-lightsky/20 p-6 rounded-lg mb-6">
                  <h3 className="text-lg font-semibold mb-2 text-theme-deepsky">Reference Information</h3>
                  <p className="text-gray-700 text-sm">
                    This document is a WSAVA-endorsed reference for veterinary professionals and students alike. It outlines essential medicines for common clinical scenarios in dogs and cats.
                  </p>
                </div>

                {/* PDF Button */}
                {book.pdfLink && (
                  <a
                    href={book.pdfLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 bg-theme-deepsky text-white font-medium rounded-lg shadow hover:bg-theme-sky transition"
                  >
                    Open PDF
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailPage;
