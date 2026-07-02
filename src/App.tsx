import { BrowserRouter, Routes, Route } from "react-router-dom";

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

import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}