
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Index from "./pages/Index";
import ServicesPage from "./pages/ServicesPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import PetCategoryPage from "./pages/PetCategoryPage";
import MedicineListPage from "./pages/MedicineListPage";
import MedicineDetailPage from "./pages/MedicineDetailPage";
import MedicineCategoryPage from "./pages/MedicineCategoryPage";
import VaccinesPage from "./pages/VaccinesPage";
import CosmeticsSupplementsPage from "./pages/CosmeticsSupplementsPage";
import NotFound from "./pages/NotFound";

// Layout Components
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/:petType" element={<PetCategoryPage />} />
              <Route path="/:petType/medicines" element={<MedicineListPage />} />
              <Route path="/:petType/vaccines" element={<VaccinesPage />} />
              <Route path="/:petType/cosmetics-supplements" element={<CosmeticsSupplementsPage />} />
              <Route path="/:petType/medicines/category/:categoryId" element={<MedicineCategoryPage />} />
              <Route path="/:petType/medicines/:medicineId" element={<MedicineDetailPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
