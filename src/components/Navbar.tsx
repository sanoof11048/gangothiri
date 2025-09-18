import React, { useState, useEffect } from "react";
import { Droplet, Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");

  const navigationItems = [
    { name: "Home", href: "#home" },
    { name: "Products", href: "#products" },
    { name: "About", href: "#about" },
    { name: "Process", href: "#process" },
    { name: "Contact", href: "#contact" },
  ];

  // Scroll detection for navbar style
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  // Active link tracking
  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems.map((item) =>
        document.querySelector(item.href)
      );
      const scrollPos = window.scrollY + 150;
      sections.forEach((section, idx) => {
        if (
          section instanceof HTMLElement &&
          section.offsetTop <= scrollPos &&
          section.offsetTop + section.offsetHeight > scrollPos
        ) {
          setActive(navigationItems[idx].href);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll handler
  const handleNavClick = (href: string) => {
    const section = document.querySelector(href);
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
    setActive(href);
    setIsOpen(false);
  };

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] md:w-auto">
      <nav
        className={`flex items-center justify-between px-6 py-3 rounded-2xl transition-all duration-300 backdrop-blur-lg border
        ${scrolled ? "bg-white/80 border-white/30 shadow-lg" : "bg-white/10 border-white/20"}`}
      >
        <a href="#home" className="flex items-center gap-2 group" onClick={(e) => { e.preventDefault(); handleNavClick("#home"); }}>
          <Droplet size={32} className={`transition-all duration-300 group-hover:scale-110 ${scrolled ? "text-[#0891B2]" : "text-[#26C6DA]"}`} strokeWidth={1.5} fill="currentColor" fillOpacity={0.3} />
          <span className={`font-bold mr-10 text-xl sm:text-2xl transition-colors ${scrolled ? "text-[#0891B2]" : "text-white"}`}>
            Gangothiri <span className={`font-bold text-lg sm:text-xl transition-colors ${scrolled ? "text-[#07bcea]" : "text-[#5eceea]"}`}>Aqua</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-2 lg:gap-3">
          {navigationItems.map((item) => (
            <button key={item.name} onClick={() => handleNavClick(item.href)}
              className={`relative px-3 py-2 font-medium transition-colors duration-300 ${
                active === item.href ? (scrolled ? "text-[#0891B2]" : "text-[#26C6DA]") : (scrolled ? "text-gray-700 hover:text-[#0891B2]" : "text-white hover:text-[#26C6DA]")
              }`}
            >
              {item.name}
              <span className={`absolute left-1/2 -bottom-1 h-0.5 bg-current transition-all duration-300 ${active === item.href ? "w-3/4 -translate-x-1/2" : "w-0 group-hover:w-3/4 group-hover:-translate-x-1/2"}`} />
            </button>
          ))}
        </div>

        {/* Mobile Menu */}
        <button className={`md:hidden p-2 rounded-lg transition-colors duration-500 ${scrolled ? "text-[#0891B2] hover:bg-[#0891B2]/10" : "text-white hover:bg-white/10"}`} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white/95 backdrop-blur-md rounded-2xl shadow-lg px-6 py-6 animate-fadeIn">
          <div className="space-y-2">
            {navigationItems.map((item, index) => (
              <button key={item.name} onClick={() => handleNavClick(item.href)}
                className="flex items-center px-4 py-3 rounded-xl font-medium text-gray-700 hover:text-[#0891B2] hover:bg-[#0891B2]/5 transition-all duration-300 transform hover:translate-x-1 group"
                style={{ animation: `fadeIn 0.3s ease forwards`, animationDelay: `${index * 80}ms` }}
              >
                <span className="flex-1">{item.name}</span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[#0891B2]">→</span>
              </button>
            ))}
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
