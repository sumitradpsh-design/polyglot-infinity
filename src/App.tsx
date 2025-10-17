import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import LanguageSelect from "./pages/LanguageSelect";
import Learn from "./pages/Learn";
import Lesson from "./pages/Lesson";
import AIMentor from "./pages/AIMentor";
import DailyTest from "./pages/DailyTest";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/languages" element={<LanguageSelect />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/lesson/:lessonId" element={<Lesson />} />
          <Route path="/ai-mentor" element={<AIMentor />} />
          <Route path="/daily-test" element={<DailyTest />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
