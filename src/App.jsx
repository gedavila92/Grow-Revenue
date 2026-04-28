import React from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Authority from "./components/Authority.jsx";
import Services from "./components/Services.jsx";
import Pricing from "./components/Pricing.jsx";
import MonthlyMarketing from "./components/MonthlyMarketing.jsx";
import SEOSection from "./components/SEOSection.jsx";
import Process from "./components/Process.jsx";
import Differentiator from "./components/Differentiator.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import FloatingWhatsApp from "./components/FloatingWhatsApp.jsx";

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-obsidian text-white selection:bg-amber selection:text-obsidian">
      <Navbar />
      <main>
        <Hero />
        <Authority />
        <Services />
        <Pricing />
        <MonthlyMarketing />
        <SEOSection />
        <Process />
        <Differentiator />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
