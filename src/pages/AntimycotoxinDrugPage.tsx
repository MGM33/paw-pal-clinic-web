import React from "react";
import MedicineCard from "../components/medicines/MedicineCard";
import PoultryDrawer from '../components/medicines/PoultryDrawer';

const medicines = [
  {
    id: 1,
    name: "MycoClear",
    description: "Prevents and detoxifies aflatoxins and other mycotoxins in poultry feed.",
    image: "https://images.unsplash.com/photo-1582719478127-74f2bf3a96f7?w=400&h=300&fit=crop&sig=mycotoxin1",
  },
  {
    id: 2,
    name: "ToxiGuard",
    description: "Natural binder that absorbs harmful mycotoxins, improving bird health.",
    image: "https://images.unsplash.com/photo-1582719506741-0f66c97e4db1?w=400&h=300&fit=crop&sig=mycotoxin2",
  },
  {
    id: 3,
    name: "FungalSafe",
    description: "Protects against mold contamination and supports liver detoxification.",
    image: "https://images.unsplash.com/photo-1582719548220-0f77eaae6f09?w=400&h=300&fit=crop&sig=mycotoxin3",
  },
  {
    id: 4,
    name: "MycoShield",
    description: "Prevents mycotoxin absorption in the digestive system of poultry.",
    image: "https://images.unsplash.com/photo-1582719447841-c29c9d5b95a3?w=400&h=300&fit=crop&sig=mycotoxin4",
  },
  {
    id: 5,
    name: "ToxiBind",
    description: "Effective mycotoxin binder that reduces toxic effects on birds.",
    image: "https://images.unsplash.com/photo-1582719521042-8f74a9dfb4d2?w=400&h=300&fit=crop&sig=mycotoxin5",
  },
  {
    id: 6,
    name: "SafeFeed",
    description: "Improves feed safety by neutralizing various mycotoxins.",
    image: "https://images.unsplash.com/photo-1582719535559-8a7a614a2a1d?w=400&h=300&fit=crop&sig=mycotoxin6",
  },
  {
    id: 7,
    name: "MycoProtect",
    description: "Supports immune system and detoxification against mold toxins.",
    image: "https://images.unsplash.com/photo-1582719529425-6f3c9e0dbf3c?w=400&h=300&fit=crop&sig=mycotoxin7",
  },
  {
    id: 8,
    name: "FungoClear",
    description: "Targets and removes fungal toxins from bird digestive systems.",
    image: "https://images.unsplash.com/photo-1582719509403-15c34a6b7d17?w=400&h=300&fit=crop&sig=mycotoxin8",
  },
  {
    id: 9,
    name: "MycoFix",
    description: "Widely used mycotoxin binder for poultry feed safety.",
    image: "https://images.unsplash.com/photo-1582719493827-3a2d1f345bb7?w=400&h=300&fit=crop&sig=mycotoxin9",
  },
  {
    id: 10,
    name: "ToxiSafe",
    description: "Prevents adverse effects of mycotoxins by binding them in the gut.",
    image: "https://images.unsplash.com/photo-1582719488121-9eeb7f32e4b5?w=400&h=300&fit=crop&sig=mycotoxin10",
  },
];

const AntiMycotoxinDrugPage: React.FC = () => {
  React.useEffect(() => {
    document.title = "PetCare Vet | Bird Anti-Mycotoxin Drugs";
  }, []);

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-vet-orange to-vet-darkorange text-white py-12 rounded-lg mb-8">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">Anti-Mycotoxin Drugs</h1>
                <p className="text-lg opacity-90">Specialized Anti-Mycotoxin medicines for poultry birds</p>
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
                petType="birds"
                itemType="medicines/Anti-Mycotoxin"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AntiMycotoxinDrugPage;
