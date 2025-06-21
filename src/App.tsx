import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./i18n"; // 🔑 Import i18n configuration

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

// Detail Pages
import DogMedicineDetailPage from "./pages/DogMedicineDetailPage";
import DogVaccineDetailPage from "./pages/DogVaccineDetailPage";
import DogCosmeticsDetailPage from "./pages/DogCosmeticsDetailPage";
import CatMedicineDetailPage from "./pages/CatMedicineDetailPage";
import CatVaccineDetailPage from "./pages/CatVaccineDetailPage";
import CatCosmeticsDetailPage from "./pages/CatCosmeticsDetailPage";
import BirdMedicineDetailPage from "./pages/BirdMedicineDetailPage";
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
import MucolyticsDrugPage from "./pages/MucolyticsDrugPage";
import AntiMycotoxinDrugPage from "./pages/AntimycotoxinDrugPage";
import AntiCoccidialDrugsPage from "./pages/AntiCoccidialDrugsPage";
import LocalBrandProductDetailPage from "./pages/LocalBrandProductDetailPage";

// Layout Components
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const LanguageToggle = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
    document.documentElement.lang = newLang;
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
  };

  return (
    <button
      onClick={toggleLanguage}
      className="fixed top-4 right-4 bg-vet-orange text-white px-3 py-1 rounded-md z-50"
    >
      {i18n.language === "en" ? "🇸🇦 العربية" : "🇺🇸 English"}
    </button>
  );
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
                <Route path="/:petType/cosmetics-supplements" element={<CosmeticsSupplementsPage />} />
                <Route path="/birds/medicines/category/antibiotics" element={<MedicineCategoryPage />} />
                <Route path="/birds/medicines/category/anti-coccidial" element={<AntiCoccidialDrugsPage />} />
                <Route path="/birds/medicines/category/minerals-vitamins" element={<BirdMineralsVitaminsDetailPage />} />
                <Route path="/birds/medicines/category/anti-stress" element={<BirdAntiStressDetailPage />} />
                <Route path="/birds/medicines/category/hepatorenal-tonics" element={<BirdHepatoRenalTonicDetailPage />} />
                <Route path="/birds/medicines/category/anti-mycotoxin" element={<AntiMycotoxinDrugPage />} />
                <Route path="/birds/medicines/category/growth-promotors" element={<BirdGrowthPromotorDetailPage />} />
                <Route path="/birds/medicines/category/immunostimulants" element={<BirdImmunostimulantDetailPage />} />
                <Route path="/birds/medicines/category/mucolytics-expectorants" element={<MucolyticsDrugPage />} />
                <Route path="/birds/medicines/category/anti-clostridial" element={<BirdAntiClostridialDetailPage />} />
                <Route path="/birds/medicines/category/antibiotics/:medicineId" element={<BirdAntibioticsDetailPage />} />
                <Route path="/birds/medicines/category/anti-coccidial/:medicineId" element={<BirdAntiCoccidialDetailPage />} />
                <Route path="/birds/medicines/category/minerals-vitamins/:medicineId" element={<BirdMineralsVitaminsDetailPage />} />
                <Route path="/birds/medicines/category/anti-stress/:medicineId" element={<BirdAntiStressDetailPage />} />
                <Route path="/birds/medicines/category/hepatorenal-tonics/:medicineId" element={<BirdHepatoRenalTonicDetailPage />} />
                <Route path="/birds/medicines/category/anti-mycotoxin/:medicineId" element={<BirdAntiMycotoxinDetailPage />} />
                <Route path="/birds/medicines/category/growth-promotors/:medicineId" element={<BirdGrowthPromotorDetailPage />} />
                <Route path="/birds/medicines/category/immunostimulants/:medicineId" element={<BirdImmunostimulantDetailPage />} />
                <Route path="/birds/medicines/category/mucolytics-expectorants/:medicineId" element={<BirdMucolyticsExpectorantDetailPage />} />
                <Route path="/birds/medicines/category/anti-clostridial/:medicineId" element={<BirdAntiClostridialDetailPage />} />
                <Route path="/birds/medicines/:medicineId" element={<BirdMedicineDetailPage />} />
                <Route path="/dogs/medicines/:medicineId" element={<DogMedicineDetailPage />} />
                <Route path="/dogs/vaccines/:vaccineId" element={<DogVaccineDetailPage />} />
                <Route path="/dogs/cosmetics-supplements/:cosmeticId" element={<DogCosmeticsDetailPage />} />
                <Route path="/cats/medicines/:medicineId" element={<CatMedicineDetailPage />} />
                <Route path="/cats/vaccines/:vaccineId" element={<CatVaccineDetailPage />} />
                <Route path="/cats/cosmetics-supplements/:cosmeticId" element={<CatCosmeticsDetailPage />} />
                <Route path="/:petType/medicines/category/:categoryId" element={<MedicineCategoryPage />} />
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
