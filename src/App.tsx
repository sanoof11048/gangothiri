import About from "./components/About";
import Contact from "./components/Contact";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Process from "./components/Process";
import Products from "./components/Products";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero/>
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