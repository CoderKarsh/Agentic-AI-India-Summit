import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home.jsx";
import ComingSoonPage from "./pages/ComingSoonPage.jsx";
import SponsorFormPage from "./pages/SponsorFormPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tickets" element={<ComingSoonPage />} />
        <Route path="/sponsor" element={<SponsorFormPage />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

function ScrollToHash() {
  const location = useLocation();

  React.useEffect(() => {
    if (!location) return;
    const hash = location.hash;
    if (!hash) return;

    const id = hash.replace("#", "");
    // Try to scroll to the element; retry a couple times if not found (for route transitions)
    const tryScroll = (retries = 3) => {
      const el = document.getElementById(id);
      if (el) {
        // compute top with a -100px offset so the element sits 100px below the top of the viewport
        const offset = 100; // pixels
        const rect = el.getBoundingClientRect();
        const absoluteTop = window.scrollY + rect.top - offset;
        window.scrollTo({ top: absoluteTop, behavior: "smooth" });
      } else if (retries > 0) {
        setTimeout(() => tryScroll(retries - 1), 120);
      }
    };

    tryScroll(6);
  }, [location]);

  return null;
}

export default App;
