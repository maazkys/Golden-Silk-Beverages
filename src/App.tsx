import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ReactLenis } from "lenis/react";
// --- Global Components ---
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// --- Pages ---
import Home from "./pages/index";
import OurStory from "./pages/our-story";
import Products from "./pages/products";
import Trade from "./pages/trade";
import Contact from "./pages/contact";
import { Analytics } from "@vercel/analytics/react";
import 'leaflet/dist/leaflet.css';

import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      {/* 
        The ReactLenis wrapper applies the smooth scrolling globally.
        You can adjust 'lerp' (friction) and 'duration' to tune the drag feel.
      */}
      <ReactLenis root options={{ lerp: 0.08, duration: 1.2, smoothWheel: true }}>
        <div className="relative min-h-screen flex flex-col">
          {/* Global Navigation */}
          <Nav />
          <ScrollToTop />
          {/* Main Content Area */}
          <main className="grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/our-story" element={<OurStory />} />
              <Route path="/products" element={<Products />} />
              <Route path="/wholesale" element={<Trade />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Analytics />
          {/* Global Footer */}
          <Footer />
        </div>
      </ReactLenis>
    </BrowserRouter>
  );
}