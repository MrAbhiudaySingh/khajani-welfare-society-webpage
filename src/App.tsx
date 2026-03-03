import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import BrijSurabhiPage from "./pages/BrijSurabhiPage";
import BrijHunarPage from "./pages/BrijHunarPage";
import MediaPage from "./pages/MediaPage";
import CampaignsPage from "./pages/CampaignsPage";
import CollaborationsPage from "./pages/CollaborationsPage";
import DonatePage from "./pages/DonatePage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects/brij-surabhi" element={<BrijSurabhiPage />} />
          <Route path="/projects/brij-hunar" element={<BrijHunarPage />} />
          <Route path="/media" element={<MediaPage />} />
          <Route path="/campaigns" element={<CampaignsPage />} />
          <Route path="/collaborations" element={<CollaborationsPage />} />
          <Route path="/donate" element={<DonatePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
