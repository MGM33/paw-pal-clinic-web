import React from "react";
import MedicineCard from "../components/medicines/MedicineCard";
import PoultryDrawer from '../components/medicines/PoultryDrawer';

const medicines = [
  {
    id: 1,
    name: "Mucolyte Plus",
    description: "Helps loosen mucus in respiratory tracts, easing breathing in birds.",
    image: "https://images.unsplash.com/photo-1586306873300-43ea9b2bb0b6?w=400&h=300&fit=crop&sig=mucolytics1",
  },
  {
    id: 2,
    name: "Bromhexine Syrup",
    description: "Expectorant that thins and clears bronchial secretions.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=300&fit=crop&sig=mucolytics2",
  },
  {
    id: 3,
    name: "Ambroxol Hydrochloride",
    description: "A mucolytic agent used to treat respiratory diseases with excessive mucus.",
    image: "https://images.unsplash.com/photo-1556228724-3a3d7ec40cc3?w=400&h=300&fit=crop&sig=mucolytics3",
  },
  {
    id: 4,
    name: "Acetylcysteine Solution",
    description: "Breaks down mucus to improve airflow and reduce coughing.",
    image: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?w=400&h=300&fit=crop&sig=mucolytics4",
  },
  {
    id: 5,
    name: "Guaifenesin",
    description: "Relieves congestion by thinning mucus and facilitating expectoration.",
    image: "https://images.unsplash.com/photo-1532536851057-7d16f8c789d7?w=400&h=300&fit=crop&sig=mucolytics5",
  },
  {
    id: 6,
    name: "Carbocisteine",
    description: "Used to reduce the viscosity of sputum in respiratory diseases.",
    image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=400&h=300&fit=crop&sig=mucolytics6",
  },
  {
    id: 7,
    name: "Sobrerol",
    description: "Mucolytic that stimulates the clearance of mucus and improves lung function.",
    image: "https://images.unsplash.com/photo-1513436076606-9d52e04f7286?w=400&h=300&fit=crop&sig=mucolytics7",
  },
  {
    id: 8,
    name: "Potassium Iodide",
    description: "Used to liquefy thick mucus and aid expectoration.",
    image: "https://images.unsplash.com/photo-1521790362764-22e6b23e4851?w=400&h=300&fit=crop&sig=mucolytics8",
  },
  {
    id: 9,
    name: "Eucalyptus Oil",
    description: "Natural expectorant and mucolytic with soothing respiratory benefits.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop&sig=mucolytics9",
  },
  {
    id: 10,
    name: "Thyme Extract",
    description: "Herbal mucolytic aiding mucus clearance and respiratory health.",
    image: "https://images.unsplash.com/photo-1468071174046-657d9d351a40?w=400&h=300&fit=crop&sig=mucolytics10",
  },
];

const MucolyticsDrugPage: React.FC = () => {
  React.useEffect(() => {
    document.title = "PetCare Vet | Bird Mucolytics & Expectorants";
  }, []);

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-vet-orange to-vet-darkorange text-white py-12 rounded-lg mb-8">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">Bird Mucolytics & Expectorants Drugs</h1>
                <p className="text-lg opacity-90">Specialized Bird Mucolytics & Expectorants medicines for poultry birds</p>
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
                itemType="medicines/Bird Mucolytics & Expectorants"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MucolyticsDrugPage;
