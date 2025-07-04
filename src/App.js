import React, { useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { MobileNav } from "./components/MobileNav";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from "./pages/About";
import Skills from "./pages/Skills";
import Stories from "./pages/Stories";
import Shop from "./pages/Shop";
import ContactPage from "./pages/ContactPage";


export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Router>
      <div className="bg-white">
        <div className="min-h-screen max-w-[1440px] mx-auto">
          <Header
            onMenuToggle={() => setIsMenuOpen(!isMenuOpen)}
            isMenuOpen={isMenuOpen}
          />

          <MobileNav isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

          <main>
            <Routes>
              <Route path="/" element={<Shop />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/stories" element={<Stories />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>

          <style jsx>{`
            @keyframes fadeIn {
              from {
                opacity: 0;
                transform: translateY(-10px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }

            .animate-fadeIn {
              animation: fadeIn 0.3s ease-out;
            }

            .line-clamp-2 {
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
              overflow: hidden;
            }

            /* Custom scrollbar for webkit browsers */
            ::-webkit-scrollbar {
              width: 6px;
            }

            ::-webkit-scrollbar-track {
              background: #f1f1f1;
            }

            ::-webkit-scrollbar-thumb {
              background: #c1c1c1;
              border-radius: 3px;
            }

            ::-webkit-scrollbar-thumb:hover {
              background: #a8a8a8;
            }
          `}</style>
        </div>
        <Footer />
      </div>
    </Router>
  );
}