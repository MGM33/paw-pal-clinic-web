
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ResourcesPage = () => {
  useEffect(() => {
    document.title = 'VetCare | Resources';
  }, []);

  const books = [
    {
      id: 1,
      title: 'WSAVA List of Essential Medicines for Cats and Dogs',
      cover: 'https://i.postimg.cc/vHq0y9bt/WASAVA-image.png',
      description: 'A comprehensive list of essential medicines for the treatment of cats and dogs.'
    },
    {
      id: 2,
      title: 'Manual of Commonly Used Drugs in Pet Practice',
      cover: 'https://i.postimg.cc/x87Nx0VM/UVAS.png',
      description: 'Prepared by DVM students, this guide lists common drugs used in pet veterinary practice.'
    },
    {
      id: 3,
      title: 'Medicines for Pets',
      cover: 'https://i.postimg.cc/dVRDdR38/medicine-for-pets.png',
      description: 'A science investigation pack to teach children (ages 9–11) how pet medicines are made.'
    }
  ];

  const moreResources = [
    "Scott, D. W., Miller, W. H., & Griffin, C. E. (2001). Muller and Kirk's Small Animal Dermatology. 6th ed. Saunders.",
    "Giguère, S. (2013). Antimicrobial Therapy in Veterinary Medicine. 5th ed. Wiley-Blackwell.",
    "Hnilica, K. A., & Patterson, A. P. (2016). Small Animal Dermatology: A Color Atlas and Therapeutic Guide. 4th ed. Elsevier.",
    "Banovic, F., & Olivry, T. (2020). \"Dermatological Use of Topical Corticosteroids in Veterinary Medicine.\" Veterinary Dermatology, 31(2), 85-e14. https://doi.org/10.1111/vde.12827",
    "Little, S. E., et al. (2021). \"Ectoparasites and Vector-Borne Diseases of Pets.\" Compendium: Continuing Education for Veterinarians, 43(3), 10–21.",
    "Rosychuk, R. A. W. (2019). \"Malassezia dermatitis in dogs.\" Compendium on Continuing Education, 41(6), 321-329.",
    "Panaphut, T., et al. (2020). \"Formulation and evaluation of herbal wound healing cream.\" Veterinary World, 13(10), 2070–2077. https://doi.org/10.14202/vetworld.2020.2070-2077",
    "FDA Center for Veterinary Medicine. (2023). Guidance for Industry: Veterinary Drug Labeling Requirements. https://www.fda.gov/animal-veterinary",
    "WHO. (2018). Guidelines on Good Veterinary Drug Regulatory Practices. https://www.who.int/publications/i/item/guidelines-on-good-veterinary-practices",
    "Thompson, K. G. (2014). Veterinary Pathology. 2nd ed. Elsevier.",
    "Dzanis, D. A. (2011). \"Nutritional Management of Dermatologic Conditions.\" Veterinary Clinics of North America: Small Animal Practice, 41(5), 1075-1093.",
    "Marsella, R., et al. (2012). \"Atopic Dermatitis in Cats and Dogs: A Practical Guide.\" Veterinary Dermatology, 23(6), 409–e87.",
    "PetMD Editors. (2023). \"Hot Spots in Dogs and Cats: Causes and Treatments.\" PetMD.com. https://www.petmd.com",
    "Frontline®. (2023). Veterinary Product Monograph. Boehringer Ingelheim.",
    "Simparica®. (2023). Product Guide and Dosage Information. Zoetis Animal Health.",
    "The world small animal veterinary association (WSAVA): \"List of Essential Medicines for Cats and Dogs\": P. V. Steagall, L. Pelligand, S. W. Page M. Bourgeois, S. Weese, June 16, 2020.",
    "The Pill Book Guide to Medication for Your Dog and Cat: Kate A. W. Roby and Lenny Southam, October 6, 1998.",
    "Manual of commonly used drugs in pet practices: Hamid Akbar(Assistant Professor of Surgery), April 18, 2016.",
    "\"Dr. Mostafa Fayez\" Website: https://www.mostafafayez.com/",
    "MSD Animal Health: https://egypt.msd-animal-health.com/",
    "Royal Best Vet (Vet Med. & Equipment): https://theroyalvet.com/ar-eg",
    "Drugscom (Know more. Be sure.): https://www.drugs.com/",
    "PetMD by chewy: https://www.petmd.com/",
    "Byttara: https://byttara.com/",
    "Animal Health Egypt: https://www.animalhealthegypt.com"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-theme-lightsky/30 to-theme-powder/30">
      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="glass-effect rounded-2xl p-8 mb-8">
            <div className="flex justify-center mb-4">
              <BookOpen size={48} className="text-theme-deepsky" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-theme-deepsky mb-4">
              Resources
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Our comprehensive library of veterinary resources and reference materials. 
              These books form the foundation of knowledge that guides our practice and expertise.
            </p>
          </div>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
          {books.map((book) => (
            <Link
              key={book.id}
              to={`/resources/books/${book.id}`}
              className="group bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              {/* Book Cover */}
             <div className="relative h-80 w-full bg-white flex items-center justify-center overflow-hidden">
  <img
    src={book.cover}
    alt={book.title}
    className="w-full h-full object-contain p-2 transition-transform duration-300 group-hover:scale-105"
  />
</div>

              
              {/* Book Details */}
              <div className="p-6 bg-white/90 backdrop-blur-sm">
                <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-theme-deepsky transition-colors duration-300">
                  {book.title}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-3">
                  {book.description}
                </p>
              </div>
            </Link>
          ))}

          {/* More Resources Card */}
          <Card className="bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <CardHeader>
              <CardTitle className="text-lg font-bold text-theme-deepsky">More Resources</CardTitle>
              <CardDescription>
                Additional reference materials and online resources
              </CardDescription>
            </CardHeader>
            <CardContent className="max-h-80 overflow-y-auto">
              <div className="space-y-3">
                {moreResources.map((resource, index) => (
                  <div key={index} className="text-sm text-gray-700 border-b border-gray-200 pb-2 last:border-b-0">
                    {resource}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;
