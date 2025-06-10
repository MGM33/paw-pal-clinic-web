
import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

// Pages
import Index from "./pages/Index";
import ServicesPage from "./pages/ServicesPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import PetCategoryPage from "./pages/PetCategoryPage";
import MedicineListPage from "./pages/MedicineListPage";
import MedicineCategoryPage from "./pages/MedicineCategoryPage";
import VaccinesPage from "./pages/VaccinesPage";
import CosmeticsSupplementsPage from "./pages/CosmeticsSupplementsPage";
import LocalBrandPage from "./pages/LocalBrandPage";
import NotFound from "./pages/NotFound";
import OurProductsAboutPage from "./pages/OurProductsAboutPage";

// Individual medicine detail pages for dogs
import DogMedicineDetailPage from "./pages/DogMedicineDetailPage";
import DogVaccineDetailPage from "./pages/DogVaccineDetailPage";
import DogCosmeticsDetailPage from "./pages/DogCosmeticsDetailPage";

// Individual medicine detail pages for cats
import CatMedicineDetailPage from "./pages/CatMedicineDetailPage";
import CatVaccineDetailPage from "./pages/CatVaccineDetailPage";
import CatCosmeticsDetailPage from "./pages/CatCosmeticsDetailPage";

// Individual medicine detail pages for birds (original)
import BirdMedicineDetailPage from "./pages/BirdMedicineDetailPage";

// Individual category detail pages for birds
import BirdAntibioticsDetailPage from "./pages/BirdAntibioticsDetailPage";
import BirdAntiCoccidialDetailPage from "./pages/BirdAntiCoccidialDetailPage";
import BirdMineralsVitaminsDetailPage from "./pages/BirdMineralsVitaminsDetailPage";
import BirdAntiStressDetailPage from "./pages/BirdAntiStressDetailPage";
import BirdHepatoRenalTonicDetailPage from "./pages/BirdHepatoRenalTonicDetailPage";
import BirdAntiMycotoxinDetailPage from "./pages/BirdAntiMycotoxinDetailPage";
import BirdGrowthPromotorDetailPage from "./pages/BirdGrowthPromotorDetailPage";
import BirdImmunostimulantDetailPage from "./pages/BirdImmunostimulantDetailPage";
import BirdMucolyticsExpectorantDetailPage from "./pages/BirdMucolyticsExpectorantDetailPage";
import BirdAntiClostridialDetailPage from "./pages/BirdAntiClostridialDetailPage";

// Local brand detail page
import LocalBrandProductDetailPage from "./pages/LocalBrandProductDetailPage";

// Layout Components
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";

const queryClient = new QueryClient();

// Component to handle scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//code.tidio.co/wbhserfmj8jhuim5jxs0yp5iyrukyei8.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/our-products" element={<LocalBrandPage />} />
                <Route path="/our-products/about" element={<OurProductsAboutPage />} />
                <Route path="/our-products/products/:productId" element={<LocalBrandProductDetailPage />} />
                <Route path="/:petType" element={<PetCategoryPage />} />
                <Route path="/:petType/medicines" element={<MedicineListPage />} />
                <Route path="/:petType/vaccines" element={<VaccinesPage />} />
                <Route
                  path="/:petType/cosmetics-supplements"
                  element={<CosmeticsSupplementsPage />}
                />
                <Route
                  path="/:petType/medicines/category/:categoryId"
                  element={<MedicineCategoryPage />}
                />
                
                {/* Individual medicine detail routes for dogs */}
                <Route
                  path="/dogs/medicines/:medicineId"
                  element={<DogMedicineDetailPage />}
                />
                <Route
                  path="/dogs/vaccines/:vaccineId"
                  element={<DogVaccineDetailPage />}
                />
                <Route
                  path="/dogs/cosmetics-supplements/:cosmeticId"
                  element={<DogCosmeticsDetailPage />}
                />
                
                {/* Individual medicine detail routes for cats */}
                <Route
                  path="/cats/medicines/:medicineId"
                  element={<CatMedicineDetailPage />}
                />
                <Route
                  path="/cats/vaccines/:vaccineId"
                  element={<CatVaccineDetailPage />}
                />
                <Route
                  path="/cats/cosmetics-supplements/:cosmeticId"
                  element={<CatCosmeticsDetailPage />}
                />
                
                {/* Individual category detail routes for birds */}
                <Route
                  path="/birds/medicines/category/antibiotics/:medicineId"
                  element={<BirdAntibioticsDetailPage />}
                />
                <Route
                  path="/birds/medicines/category/anti-coccidial/:medicineId"
                  element={<BirdAntiCoccidialDetailPage />}
                />
                <Route
                  path="/birds/medicines/category/minerals-vitamins/:medicineId"
                  element={<BirdMineralsVitaminsDetailPage />}
                />
                <Route
                  path="/birds/medicines/category/anti-stress/:medicineId"
                  element={<BirdAntiStressDetailPage />}
                />
                <Route
                  path="/birds/medicines/category/hepatorenal-tonics/:medicineId"
                  element={<BirdHepatoRenalTonicDetailPage />}
                />
                <Route
                  path="/birds/medicines/category/anti-mycotoxin/:medicineId"
                  element={<BirdAntiMycotoxinDetailPage />}
                />
                <Route
                  path="/birds/medicines/category/growth-promotors/:medicineId"
                  element={<BirdGrowthPromotorDetailPage />}
                />
                <Route
                  path="/birds/medicines/category/immunostimulants/:medicineId"
                  element={<BirdImmunostimulantDetailPage />}
                />
                <Route
                  path="/birds/medicines/category/mucolytics-expectorants/:medicineId"
                  element={<BirdMucolyticsExpectorantDetailPage />}
                />
                <Route
                  path="/birds/medicines/category/anti-clostridial/:medicineId"
                  element={<BirdAntiClostridialDetailPage />}
                />
                
                {/* Keep the original bird medicine route for backward compatibility */}
                <Route
                  path="/birds/medicines/:medicineId"
                  element={<BirdMedicineDetailPage />}
                />
                
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
