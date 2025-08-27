import { useEffect } from "react";
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

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,  // Animation duration
      once: true,      // Run only once
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
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
}

export default App;
