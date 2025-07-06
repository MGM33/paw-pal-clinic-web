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
import NotFound from "./pages/NotFound";

// Resources Pages
import ResourcesPage from "./pages/ResourcesPage";
import ResourcesAboutPage from "./pages/ResourcesAboutPage";
import BookDetailPage from "./pages/BookDetailPage";

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

// Articles
import ArticlesPage from "./pages/ArticlesPage";
import ArticlesAboutPage from "./pages/ArticlesAboutPage";
import ArticleDetailsPage from "./pages/ArticleDetailsPage";

// Layout
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

declare global {
  interface Window {
    googleTranslateElementInit: () => void;
    google: any;
  }
}

const App = () => {
  useEffect(() => {
        // ✅ Google Translate Script
    const addTranslateScript = () => {
      const scriptId = 'google-translate-script';
      if (!document.getElementById(scriptId)) {
        const script = document.createElement('script');
        script.id = scriptId;
        script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
        document.body.appendChild(script);
      }

      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          { pageLanguage: 'en', autoDisplay: false },
          'google_translate_element'
        );
      };
    };

    addTranslateScript();

    // Live Chat (Tidio)
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
                
                {/* Resources Routes */}
                <Route path="/resources" element={<ResourcesPage />} />
                <Route path="/resources/about" element={<ResourcesAboutPage />} />
                <Route path="/resources/books/:bookId" element={<BookDetailPage />} />

                <Route path="/articles" element={<ArticlesPage />} />
                <Route path="/articles/about" element={<ArticlesAboutPage />} />
                <Route path="/articles/:articleId" element={<ArticleDetailsPage />} />

                <Route path="/:petType" element={<PetCategoryPage />} />
                <Route path="/:petType/medicines" element={<MedicineListPage />} />
                <Route path="/:petType/vaccines" element={<VaccinesPage />} />
                <Route path="/:petType/cosmetics-supplements" element={<CosmeticsSupplementsPage />} />
                <Route path="/:petType/medicines/category/:categoryId" element={<MedicineCategoryPage />} />

                <Route path="/birds/medicines/category/antibiotics" element={<MedicineCategoryPage />} />
                <Route path="/birds/medicines/category/anti-coccidial" element={<BirdAntiCoccidialCategoryPage />} />
                <Route path="/birds/medicines/category/minerals-vitamins" element={<BirdMineralsVitaminsCategoryPage />} />
                <Route path="/birds/medicines/category/hepato-renal-tonic" element={<BirdHepatoRenalTonicCategoryPage />} />
                <Route path="/birds/medicines/category/anti-stress" element={<BirdAntiStressCategoryPage />} />

                <Route path="/birds/medicines/category/antibiotics/:medicineId" element={<BirdAntibioticsDetailPage />} />
                <Route path="/birds/medicines/category/anti-coccidial/:medicineId" element={<BirdAntiCoccidialDetailPage />} />
                <Route path="/birds/medicines/category/minerals-vitamins/:medicineId" element={<BirdMineralsVitaminsDetailPage />} />
                <Route path="/birds/medicines/category/hepato-renal-tonic/:medicineId" element={<BirdHepatoRenalTonicDetailPage />} />

                <Route path="/birds/medicines/:medicineId" element={<BirdMedicineDetailPage />} />
                <Route path="/dogs/medicines/:medicineId" element={<DogMedicineDetailPage />} />
                <Route path="/dogs/vaccines/:vaccineId" element={<DogVaccineDetailPage />} />
                <Route path="/dogs/cosmetics-supplements/:cosmeticId" element={<DogCosmeticsDetailPage />} />
                <Route path="/cats/medicines/:medicineId" element={<CatMedicineDetailPage />} />
                <Route path="/cats/vaccines/:vaccineId" element={<CatVaccineDetailPage />} />
                <Route path="/cats/cosmetics-supplements/:cosmeticId" element={<CatCosmeticsDetailPage />} />

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
