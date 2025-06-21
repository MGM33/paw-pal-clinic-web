import React from 'react';
import { useParams } from 'react-router-dom';
import MedicineCard from '../components/medicines/MedicineCard';
import PoultryDrawer from '../components/medicines/PoultryDrawer';

const MedicineCategoryPage = () => {
  const { petType, categoryId } = useParams<{ petType: string; categoryId: string }>();

  React.useEffect(() => {
    document.title = 'PetCare Vet | Antibiotics';
  }, []);

  const medicines = [
    { id: 1, name: 'Ampicure', description: 'Broad-spectrum penicillin for bacterial infections in poultry.', image: 'https://i.postimg.cc/fbLncyRt/Whats-App-Image-2025-06-10-at-19-47-57-10a6dba8.jpg' },
{ id: 2, name: 'Penisol', description: 'Effective against necrotic enteritis caused by Clostridium perfringens.', image: 'https://i.postimg.cc/3R58Lccv/Whats-App-Image-2025-06-10-at-19-48-33-18c89f2a.jpg' },
{ id: 3, name: 'Amoxydad 20%', description: 'Treats Pasteurellosis and Colibacillosis in broiler chickens.', image: 'https://i.postimg.cc/Z5WJJmkN/Whats-App-Image-2025-06-10-at-19-49-14-2b727c55.jpg' },
{ id: 4, name: 'Ampisitin', description: 'Combines Ampicillin and Colistin for severe gastrointestinal infections.', image: 'https://i.postimg.cc/26DYdB1d/Whats-App-Image-2025-06-10-at-19-51-07-c49ca657.jpg' },
{ id: 5, name: 'Amoxicillin', description: 'Broad-spectrum antibiotic effective against respiratory and digestive infections.', image: 'https://i.postimg.cc/NGbtTFBT/Whats-App-Image-2025-06-10-at-19-51-50-39a700d0.jpg' },
{ id: 6, name: 'Kenamox', description: 'Used for respiratory, skin, and soft tissue infections in poultry.', image: 'https://i.postimg.cc/tTp0nQc2/Whats-App-Image-2025-06-10-at-19-52-20-4d71ea62.jpg' },
{ id: 7, name: 'Delta Amox', description: 'Amoxicillin formulation targeting E. coli and Pasteurella infections.', image: 'https://i.postimg.cc/QxV2Tq6G/Whats-App-Image-2025-06-10-at-19-52-47-bb622502.jpg' },
{ id: 8, name: 'Moxifarm', description: 'Designed for necrotic enteritis and infectious coryza treatment.', image: 'https://i.postimg.cc/43vqg23t/Whats-App-Image-2025-06-10-at-19-53-18-215520bf.jpg' },
{ id: 9, name: 'Nerhacycin', description: 'Effective against bacterial enteritis caused by E. coli.', image: 'https://i.postimg.cc/MHLrDhsk/Whats-App-Image-2025-06-10-at-19-53-58-5642640e.jpg' },
{ id: 10, name: 'Neomycin', description: 'Targets gastrointestinal infections from Salmonella and E. coli.', image: 'https://i.postimg.cc/c4Vb8Ggw/Whats-App-Image-2025-06-10-at-19-54-29-2bf0f8bc.jpg' },
{ id: 11, name: 'Neomycin Adwia', description: 'Combined treatment for colibacillosis, arthritis, and salmonellosis.', image: 'https://i.postimg.cc/nrX3C3n3/Whats-App-Image-2025-06-10-at-19-54-51-1431927a.jpg' },
{ id: 12, name: 'Neomycin 20%', description: 'Formulated with neomycin and streptomycin for enteric diseases.', image: 'https://i.postimg.cc/pr5B2yB7/Whats-App-Image-2025-06-10-at-19-55-12-51183b49.jpg' },
{ id: 13, name: 'Neo-Oxy Plus', description: 'Treats diarrhea and infections caused by Salmonella and E. coli.', image: 'https://i.postimg.cc/P5Q0GFJD/Whats-App-Image-2025-06-10-at-19-55-50-fa749cfc.jpg' },
{ id: 14, name: 'Neoptosol', description: 'Effective for CRD, enteric infections, and fowl cholera.', image: 'https://i.postimg.cc/j2fkMMBL/Whats-App-Image-2025-06-10-at-19-56-25-036587f7.jpg' },
{ id: 15, name: 'Royalneo', description: 'Used in the management of CRD and colisepticaemia.', image: 'https://i.postimg.cc/RF6P0PSX/Whats-App-Image-2025-06-10-at-19-56-53-cc645126.jpg' },
{ id: 16, name: 'OFLO C 20%', description: 'Fluoroquinolone for systemic and respiratory bacterial infections.', image: 'https://i.postimg.cc/4NZ5C498/Whats-App-Image-2025-06-10-at-19-57-22-2fb1fc31.jpg' },
{ id: 17, name: 'Cipro 20%', description: 'Targets Mycoplasma, E. coli, and Salmonella infections.', image: 'https://i.postimg.cc/pdgfsPvJ/Whats-App-Image-2025-06-10-at-19-57-52-67d01d51.jpg' },
{ id: 18, name: 'JOTRIL 10%', description: 'Treats infectious synovitis and fowl cholera.', image: 'https://i.postimg.cc/Kc7P5XHt/Whats-App-Image-2025-06-10-at-19-58-19-12c82718.jpg' },
{ id: 19, name: 'Oxytetracycline 20%', description: 'Indicated for CRD, synovitis, and other respiratory infections.', image: 'https://i.postimg.cc/cHy3QT7D/Whats-App-Image-2025-06-10-at-19-58-56-e5682e34.jpg' },
{ id: 20, name: 'Oxytetracycline Hydrochloride', description: 'Tetracycline-based therapy for typhoid and pullorum.', image: 'https://i.postimg.cc/L4VP1tJT/Whats-App-Image-2025-06-10-at-19-59-18-3eb2ac1d.jpg' },
{ id: 21, name: 'Oxytetracycline', description: 'Treats coli septicemia and common poultry respiratory issues.', image: 'https://i.postimg.cc/fbXtTm4Y/Whats-App-Image-2025-06-10-at-19-59-52-5c27b441.jpg' },
{ id: 22, name: 'DOXIN', description: 'Doxycycline-based therapy for CRD and salmonellosis.', image: 'https://i.postimg.cc/ZYfRmV91/Whats-App-Image-2025-06-10-at-20-00-25-405be4e3.jpg' },
{ id: 23, name: 'PAN FLOR', description: 'Florfenicol solution for respiratory stress and bacterial disease.', image: 'https://i.postimg.cc/HL4Yh2Dv/Whats-App-Image-2025-06-10-at-20-01-04-113a71e2.jpg' },
{ id: 24, name: 'FLORICOL', description: 'Broad-spectrum macrolide for CRD and infectious synovitis.', image: 'https://i.postimg.cc/6529Xwxv/Whats-App-Image-2025-06-10-at-20-01-28-28c8952a.jpg' },
{ id: 25, name: 'Ucimycin', description: 'Indicated for severe air sacculitis and bronchial infections.', image: 'https://i.postimg.cc/ZYgSjgvK/Whats-App-Image-2025-06-10-at-20-01-55-14c3cab7.jpg' },
{ id: 26, name: 'TILMICORAL', description: 'Combines tylosin and doxycycline to manage CRD and coryza.', image: 'https://i.postimg.cc/TPRMpvFQ/Whats-App-Image-2025-06-10-at-20-02-27-ae7609a6.jpg' },
{ id: 27, name: 'Erythromycin 20%', description: 'Effective for controlling E. coli, Salmonella, and upper tract infections.', image: 'https://i.postimg.cc/W3d21PqC/Whats-App-Image-2025-06-10-at-20-02-52-90fb8751.jpg' },
{ id: 28, name: 'TYDOVET', description: 'Dual therapy for CRD and necrotic enteritis caused by Clostridium.', image: 'https://i.postimg.cc/x8KVXjfx/Whats-App-Image-2025-06-10-at-20-03-12-249a0a0d.jpg' },
{ id: 29, name: 'Colistin Sulphate', description: 'Targets enteric infections by gram-negative organisms.', image: 'https://i.postimg.cc/x11B23zF/Whats-App-Image-2025-06-10-at-20-03-33-c7ccd302.jpg' },
{ id: 30, name: 'Bacitrix 50%', description: 'Formulated for treating pullorum, cholera, and coccidiosis.', image: 'https://i.postimg.cc/tgt6NWrp/Whats-App-Image-2025-06-10-at-20-03-55-9af58e5f.jpg' },
{ id: 31, name: 'Lincotinamycin', description: 'Lincomycin-spectinomycin combo for CRD in broilers.', image: 'https://i.postimg.cc/zDRgxs2x/Whats-App-Image-2025-06-10-at-20-04-13-ea560559.jpg' },
{ id: 32, name: 'Sulphavet', description: 'Sulfonamide formulation for bacterial and protozoal infections.', image: 'https://i.postimg.cc/hGkSv58G/Whats-App-Image-2025-06-10-at-20-04-32-42be0a4c.jpg' },
{ id: 33, name: 'COLIPRIM', description: 'A sulfonamide antibiotic used to treat bacterial and protozoal infections in animals.', image: 'https://i.postimg.cc/8cswYt3h/Whats-App-Image-2025-06-10-at-20-04-45-cf3d673a.jpg' },
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-vet-orange to-vet-darkorange text-white py-12 rounded-lg mb-8">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">Antibiotics</h1>
                <p className="text-lg opacity-90">Specialized antibiotic medicines for poultry birds</p>
              </div>
              <PoultryDrawer />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {medicines.map((medicine) => (
              <MedicineCard
                key={medicine.id}
                id={medicine.id}
                name={medicine.name}
                description={medicine.description}
                image={medicine.image}
                petType={petType || 'birds'}
                itemType="medicines/category/antibiotics"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicineCategoryPage;
