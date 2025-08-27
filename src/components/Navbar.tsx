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

  // Detect scroll for navbar style
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on resize if desktop
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

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] md:w-auto">
      <nav
        className={`flex items-center justify-between px-6 py-3 rounded-2xl transition-all duration-300 backdrop-blur-lg border
        ${scrolled ? "bg-white/80 border-white/30 shadow-lg" : "bg-white/10 border-white/20"}
      `}
      >
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <Droplet
            size={32}
            className={`transition-all duration-300 group-hover:scale-110 ${
              scrolled ? "text-[#0891B2]" : "text-[#26C6DA]"
            }`}
            strokeWidth={1.5}
            fill="currentColor"
            fillOpacity={0.3}
          />
          <span
            className={`font-bold text-xl sm:text-2xl transition-colors ${
              scrolled ? "text-[#0891B2]" : "text-white"
            }`}
          >
            Rivus
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-2 lg:gap-6">
          {navigationItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`relative px-3 py-2 font-medium transition-colors duration-300 ${
                active === item.href
                  ? scrolled
                    ? "text-[#0891B2]"
                    : "text-[#26C6DA]"
                  : scrolled
                  ? "text-gray-700 hover:text-[#0891B2]"
                  : "text-white hover:text-[#26C6DA]"
              }`}
            >
              {item.name}
              {/* underline animation */}
              <span
                className={`absolute left-1/2 -bottom-1 h-0.5 bg-current transition-all duration-300 ${
                  active === item.href
                    ? "w-3/4 -translate-x-1/2"
                    : "w-0 group-hover:w-3/4 group-hover:-translate-x-1/2"
                }`}
              />
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
            scrolled ? "text-[#0891B2] hover:bg-[#0891B2]/10" : "text-white hover:bg-white/10"
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white/95 backdrop-blur-md rounded-2xl shadow-lg px-6 py-6 animate-fadeIn">
          <div className="space-y-2">
            {navigationItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center px-4 py-3 rounded-xl font-medium text-gray-700 hover:text-[#0891B2] hover:bg-[#0891B2]/5 transition-all duration-300 transform hover:translate-x-1 group"
                style={{ animation: `fadeIn 0.3s ease forwards`, animationDelay: `${index * 80}ms` }}
              >
                <span className="flex-1">{item.name}</span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[#0891B2]">
                  →
                </span>
              </a>
            ))}
          </div>

          {/* Mobile menu footer */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="text-center">
              <p className="text-sm text-gray-500 mb-2">Premium Water Solutions</p>
              <div className="flex items-center justify-center gap-2 text-[#0891B2]">
                <Droplet size={16} fill="currentColor" fillOpacity={0.3} />
                <span className="text-sm font-medium">Gangothri Aqua</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Fade-in animation */}
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
