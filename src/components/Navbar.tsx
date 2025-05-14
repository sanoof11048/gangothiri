import React, { useState, useEffect } from 'react';
import { Droplet, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <a href="#" className="flex items-center gap-2">
          <Droplet 
            size={36} 
            className={`text-[#0891B2] transition-colors duration-300`}
            strokeWidth={1.5}
            fill="currentColor"
            fillOpacity={0.2}
          />
          <span className="font-montserrat font-bold text-xl md:text-2xl">
            <span className={`transition-colors duration-300 ${scrolled ? 'text-[#00838F]' : 'text-[#0891B2]'}`}>
              Gangothiri
            </span> 
            <span className={`transition-colors duration-300 ${scrolled ? 'text-[#006064]' : 'text-transparent'}`}>
              Aqua
            </span>
          </span>
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {['Home', 'Products', 'About', 'Process', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className={`font-medium transition-colors duration-300 hover:text-primary-500 ${
                scrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              {item}
            </a>
          ))}
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-primary-500"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute w-full bg-white shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container-custom py-4 flex flex-col gap-4">
          {['Home', 'Products', 'About', 'Process', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="font-medium text-gray-700 hover:text-primary-500 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;