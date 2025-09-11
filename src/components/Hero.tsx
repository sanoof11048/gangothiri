import React, { useEffect, useState } from 'react';
import sahad from '../assets/sahad.jpg'
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="relative min-h-screen bg-primary-500 overflow-hidden">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-40 md:opacity-50"></div>

      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${sahad})`,
        }}
        // style={{
        //   backgroundImage: "url('https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750')",
        // }}
      >
        <div className="absolute inset-0 bg-[#004D40]/60 md:bg-[#004D40]/50"></div>
      </div>

      {/* Background blobs - Hidden on mobile for cleaner look */}
      {/* <div className="hidden md:block blob bg-[#80DEEA] top-1/4 right-1/3 w-96 h-96 z-20 opacity-30"></div>
      <div className="hidden md:block blob bg-[#4DD0E1] bottom-1/4 left-1/4 w-64 h-64 opacity-30"></div> */}

      {/* Hero content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative min-h-screen flex flex-col justify-center py-20">
        <div className="max-w-4xl mx-auto text-center md:text-left">
          {/* Mobile-first heading */}
          <h1
            className="text-3xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight tracking-tight"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Pure Hydration with{' '}
            <span className="text-[#B2EBF2] block sm:inline">Rivus Water</span>
          </h1>
        
          
          {/* Subheading optimized for mobile */}
          <p
            className="text-white/90 text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto md:mx-0 leading-relaxed"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            Experience premium quality water products from Gangothri Aqua. 
            <span className="block mt-2">Perfect balance of minerals and purity for a healthier lifestyle.</span>
          </p>

          {/* Mobile-friendly button layout */}
          <div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center md:justify-start"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            <a 
              href="#products" 
              className="w-full sm:w-auto btn bg-[#26C6DA] hover:bg-[#00BCD4] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg group min-w-[200px] sm:min-w-0"
            >
              Explore Products
              <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a 
              href="#about" 
              className="w-full sm:w-auto btn bg-white/20 hover:bg-white/30 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg backdrop-blur-sm transition-all duration-300 border border-white/30 min-w-[200px] sm:min-w-0"
            >
              Learn More
            </a>
          </div>
        </div>    
      </div>

      {/* Mobile-friendly scroll indicator */}
      <div
        className={`absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20 transition-opacity duration-500 ${
          scrolled ? 'opacity-0' : 'opacity-100'
        }`}
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="800"
      >
        <a
          href="#features"
          className="flex flex-col items-center text-white/80 hover:text-white transition-colors touch-target"
        >
          <span className="mb-2 text-xs sm:text-sm font-medium">Discover More</span>
          <div className="w-6 sm:w-8 h-10 sm:h-12 border-2 border-white/50 rounded-full flex justify-center bg-white/10 backdrop-blur-sm">
            <ChevronDown className="mt-2 animate-bounce" size={16} />
          </div>
        </a>
      </div>

      {/* Simplified water droplets for mobile performance */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-white/60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `droplet ${8 + Math.random() * 12}s linear ${
                Math.random() * 8
              }s infinite`,
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes droplet {
          0% { 
            transform: translateY(-20px); 
            opacity: 0; 
          }
          10% { 
            opacity: 0.4; 
          }
          90% {
            opacity: 0.2;
          }
          100% { 
            transform: translateY(100vh); 
            opacity: 0; 
          }
        }

        @keyframes float {
          0%, 100% { 
            transform: translateY(0) rotate(0deg); 
          }
          50% { 
            transform: translateY(-10px) rotate(1deg); 
          }
        }

        .touch-target {
          min-width: 44px;
          min-height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        /* Mobile-specific optimizations */
        @media (max-width: 640px) {
          .animate-float {
            animation-duration: 4s;
          }
          
          .blob {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;