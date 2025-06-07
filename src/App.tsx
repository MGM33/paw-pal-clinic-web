
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

// New individual medicine detail pages
import DogMedicineDetailPage from "./pages/DogMedicineDetailPage";
import CatMedicineDetailPage from "./pages/CatMedicineDetailPage";
import BirdMedicineDetailPage from "./pages/BirdMedicineDetailPage";
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
                {/* Individual medicine detail routes for each pet type */}
                <Route
                  path="/dogs/medicines/:medicineId"
                  element={<DogMedicineDetailPage />}
                />
                <Route
                  path="/cats/medicines/:medicineId"
                  element={<CatMedicineDetailPage />}
                />
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
