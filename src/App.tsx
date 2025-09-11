import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import About from "./components/About";
import Contact from "./components/Contact";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Process from "./components/Process";
import Products from "./components/Products";

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  // AOS Initialization
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // 1.5s fake loading
    return () => clearTimeout(timer);
  }, []);

  

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#0891B2]">
        <div className="flex flex-col items-center gap-4">
          {/* Loader animation */}
          <div className="w-12 h-12 border-4 border-white/40 border-t-white rounded-full animate-spin"></div>
          <p className="text-white font-medium text-lg">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar/>
      <main className="flex-grow">
        <Hero />
        <Features />
        <Products />
        <About />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
