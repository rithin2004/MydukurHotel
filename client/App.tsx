import "./global.css";
import "@fontsource/noto-sans-telugu/telugu-400.css";
import "@fontsource/noto-sans-telugu/telugu-600.css";
import "@fontsource/noto-sans-telugu/telugu-700.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import { LanguageProvider } from "./i18n/LanguageProvider";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

const App = () => (
  <LanguageProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <FloatingWhatsApp />
    </BrowserRouter>
  </LanguageProvider>
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
