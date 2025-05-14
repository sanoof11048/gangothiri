// import React from 'react';
import Navbar from '../../gangothiri2/src/components/Navbar';
import Hero from '../../gangothiri2/src/components/Hero';
import Features from '../../gangothiri2/src/components/Features';
import Products from '../../gangothiri2/src/components/Products';
import About from '../../gangothiri2/src/components/About';
import Process from '../../gangothiri2/src/components/Process';
import Contact from '../../gangothiri2/src/components/Contact';
import Footer from '../../gangothiri2/src/components/Footer';

function App() {
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