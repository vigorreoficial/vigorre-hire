import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Partners from "./components/Partners";
import Stats from "./components/Stats";
import Modules from "./components/Modules";
import Features from "./components/Features";
import JobPortal from "./components/JobPortal";
import Sectors from "./components/Sectors";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Mission from "./components/Mission";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function ScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setP(max > 0 ? (h.scrollTop / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="fixed inset-x-0 top-0 z-[60] h-0.5 bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-navy-800 via-navy-600 to-navy-400 transition-[width] duration-150"
        style={{ width: `${p}%` }}
      />
    </div>
  );
}

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-ice">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Partners />
        <Stats />
        <Modules />
        <Features />
        <JobPortal />
        <Sectors />
        <Pricing />
        <Testimonials />
        <Mission />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
