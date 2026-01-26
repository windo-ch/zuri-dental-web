import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import { HelmetProvider } from "react-helmet-async";
import LoadingSpinner from "./components/LoadingSpinner";
import CookieConsentAdvanced from "./components/CookieConsentAdvanced";

// Lazy load all page components
const SlideDemoPage = lazy(() => import("./pages/SlideDemoPage"));
const ForDentistsPage = lazy(() => import("./pages/ForDentistsPage"));
const VisitPage = lazy(() => import("./pages/VisitPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const TestimonialsPage = lazy(() => import("./pages/TestimonialsPage"));
const NicolaPietrobonPage = lazy(() => import("./pages/NicolaPietrobonPage"));
const RetoMichelPage = lazy(() => import("./pages/RetoMichelPage"));
const HotelsPage = lazy(() => import("./pages/HotelsPage"));
const ParkingPage = lazy(() => import("./pages/ParkingPage"));
const PrivacyPage = lazy(() => import("./pages/PrivacyPage"));
const TermsPage = lazy(() => import("./pages/TermsPage"));
const NotFound = lazy(() => import("./pages/NotFound"));
const ScrollToTop = lazy(() => import("./components/ScrollToTop"));

const queryClient = new QueryClient();

// Loading component with a nice UI
const PageLoading = () => (
  <div className="min-h-screen flex items-center justify-center">
    <LoadingSpinner size="lg" />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<PageLoading />}>
            <ScrollToTop />
            <Routes>
              {/* Main Slide Site */}
              <Route path="/" element={<SlideDemoPage />} />
              
              {/* Page Routes */}
              <Route path="/for-dentists" element={<ForDentistsPage />} />
              <Route path="/visit" element={<VisitPage />} />
              {/* Redirect for backward compatibility */}
              <Route path="/for-patients" element={<Navigate to="/visit" replace />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/testimonials" element={<TestimonialsPage />} />
              <Route path="/nicola-pietrobon" element={<NicolaPietrobonPage />} />
              <Route path="/reto-michel" element={<RetoMichelPage />} />
              <Route path="/hotels" element={<HotelsPage />} />
              <Route path="/parking" element={<ParkingPage />} />
              
              {/* Essential Pages */}
              <Route path="/contact" element={<Navigate to="/visit" replace />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/terms" element={<TermsPage />} />
              
              {/* Old German URL Redirects */}
              <Route path="/de/start" element={<Navigate to="/" replace />} />
              <Route path="/de/start/" element={<Navigate to="/" replace />} />
              <Route path="/de/ueber-pietrobon-und-michel" element={<Navigate to="/about" replace />} />
              <Route path="/de/ueber-pietrobon-und-michel/" element={<Navigate to="/about" replace />} />
              <Route path="/de/ueber-pietrobon-und-michel/nicola-pietrobon" element={<Navigate to="/nicola-pietrobon" replace />} />
              <Route path="/de/ueber-pietrobon-und-michel/nicola-pietrobon/" element={<Navigate to="/nicola-pietrobon" replace />} />
              <Route path="/de/ueber-pietrobon-und-michel/reto-michel" element={<Navigate to="/reto-michel" replace />} />
              <Route path="/de/ueber-pietrobon-und-michel/reto-michel/" element={<Navigate to="/reto-michel" replace />} />
              <Route path="/de/partner-ger" element={<Navigate to="/for-dentists" replace />} />
              <Route path="/de/partner-ger/" element={<Navigate to="/for-dentists" replace />} />
              <Route path="/de/standort" element={<Navigate to="/visit" replace />} />
              <Route path="/de/standort/" element={<Navigate to="/visit" replace />} />
              
              {/* 404 */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
          <CookieConsentAdvanced />
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;