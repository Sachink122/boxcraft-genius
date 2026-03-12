import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/layout/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProductsPage from "./pages/ProductsPage";
import IndustriesPage from "./pages/IndustriesPage";
import CustomSolutionsPage from "./pages/CustomSolutionsPage";
import ManufacturingPage from "./pages/ManufacturingPage";
import GalleryPage from "./pages/GalleryPage";
import RequestQuotePage from "./pages/RequestQuotePage";
import InstantQuotePage from "./pages/InstantQuotePage";
import BulkOrderPage from "./pages/BulkOrderPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/industries" element={<IndustriesPage />} />
            <Route path="/custom-solutions" element={<CustomSolutionsPage />} />
            <Route path="/manufacturing" element={<ManufacturingPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/request-quote" element={<RequestQuotePage />} />
            <Route path="/instant-quote" element={<InstantQuotePage />} />
            <Route path="/bulk-order" element={<BulkOrderPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
