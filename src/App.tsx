import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import GarbhaVidya from "./pages/courses/GarbhaVidya";
import ConsciousParenting from "./pages/courses/ConsciousParenting";
import ArtOfParenting from "./pages/courses/ArtOfParenting";
import AnvayaRetreat from "./pages/courses/AnvayaRetreat";
import GitaForYouth from "./pages/courses/GitaForYouth";
import StudySessions from "./pages/courses/StudySessions";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/courses/garbha-vidya" element={<GarbhaVidya />} />
          <Route path="/courses/conscious-parenting" element={<ConsciousParenting />} />
          <Route path="/courses/art-of-parenting" element={<ArtOfParenting />} />
          <Route path="/courses/anvaya-retreat" element={<AnvayaRetreat />} />
          <Route path="/courses/gita-for-youth" element={<GitaForYouth />} />
          <Route path="/courses/study-sessions" element={<StudySessions />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
