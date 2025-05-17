import React, { useEffect, useState } from 'react';
// import { ChevronDown } from 'lucide-react';
import bottle from '../assets/bottle.png';
import jar from  '../assets/Rivus Water Jug on Quartz Countertop.png';
import dispenser from '../assets/Translucent Water Dispenser in Modern Kitchen.png';
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
    <section id="home" className="relative h-screen bg-primary-500 overflow-hidden">
      <div className='absolute inset-0 bg-black opacity-100'></div>

      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750')" 
        }}
      >
        <div className="absolute inset-0 bg-[#004D40]/50"></div>

      </div>

      {/* Background blobs */}
      <div className="blob bg-[#80DEEA] top-1/4 right-1/3 w-96 h-96 z-20"></div>
      <div className="blob bg-[#4DD0E1] bottom-1/4 left-1/4 w-64 h-64"></div>
      <div className="container-custom relative h-full flex flex-col justify-center">
        <div className="max-w-3xl">
          <h1 className="text-white mb-6 leading-tight">
            Pure Hydration for a <span className="text-[#B2EBF2]">Healthier</span> Life
          </h1>
          <p className="text-white/90 text-lg md:text-xl mb-8 max-w-xl">
            Experience the perfect balance of minerals and purity with Gangothiri Aqua's premium water products.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#products" className="btn btn-primary group">
              Explore Products
              <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a href="#about" className="btn btn-secondary backdrop-blur-sm">
              Learn More
            </a>
          </div>
        </div>

        <div className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 z-20 transition-opacity duration-500 ${scrolled ? 'opacity-0' : 'opacity-100'}`}>
           <a
             href="#features"
            className="flex flex-col items-center text-white/80 hover:text-white transition-colors"
           >
             <span className="mb-2 text-sm font-medium">Discover More</span>
             <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center">
               <div className="w-1 h-3 bg-white/80 rounded-full mt-2 animate-bounce"></div>
             </div>
           </a>
         </div>

        {/* Scroll indicator */}
        {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <a 
            href="#features" 
            className="flex flex-col items-center text-white/80 hover:text-white transition-colors"
          >
            <span className="mb-2 text-sm font-medium">Scroll Down</span>
            <ChevronDown className="animate-bounce" size={24} />
          </a>
        </div> */}
      </div>

      {/* Floating bottles */}
     <div className="hidden lg:block absolute right-10 top-1/2 transform -translate-y-1/2">
  <div className="relative w-[180px] h-[300px]">
    {/* Main Bottle */}
    <img 
      src={bottle}
      alt="Water bottle" 
      className="w-32 h-auto object-contain animate-float rounded-xl shadow-xl mx-auto z-10 relative"
      style={{ animationDelay: '0s' }}
    />

    {/* Jar - positioned above to the right */}
    <img 
      src={jar} 
      alt="Water jar" 
      className="w-20 h-auto object-contain absolute -top-12 -right-8 animate-float rounded-xl shadow-md"
      style={{ animationDelay: '0.5s' }}
    />

    {/* Dispenser - positioned below to the right */}
    <img 
      src={dispenser} 
      alt="Dispenser" 
      className="w-20 h-auto object-contain absolute top-36 -right-10 animate-float rounded-xl shadow-md"
      style={{ animationDelay: '1s' }}
    />
  </div>
</div>


       {/* <div className="hidden lg:block absolute right-10 top-1/2 transform -translate-y-1/2 z-10">
         <div className="relative">
           <div className="relative">
             <img
            src="https://images.pexels.com/photos/1000084/pexels-photo-1000084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
               alt="Premium water bottle"
               className="w-32 h-auto object-contain rounded-full shadow-lg"
               style={{ 
                 animation: 'float 6s ease-in-out infinite',
                 animationDelay: '0s' 
               }}
             />
             <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-3/4 h-4 bg-white/10 rounded-full blur-md"></div>
           </div>
        
           <div className="absolute -top-20 -right-10">
             <img
            src="https://images.pexels.com/photos/1000084/pexels-photo-1000084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
               alt="Water jar"
               className="w-36 h-auto object-contain rounded-full shadow-lg"
              style={{ 
                 animation: 'float 8s ease-in-out infinite',
                 animationDelay: '0.5s' 
               }}
             />
             <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-3/4 h-4 bg-white/10 rounded-full blur-md"></div>
           </div>
        
           <div className="absolute top-20 -right-16">
             <img
            src="https://images.pexels.com/photos/1000084/pexels-photo-1000084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
              alt="Small bottle"
               className="w-28 h-auto object-contain rounded-full shadow-lg"
               style={{ 
                 animation: 'float 7s ease-in-out infinite',
                 animationDelay: '1s' 
               }}
             />
             <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-3/4 h-4 bg-white/10 rounded-full blur-md"></div>
           </div>
         </div>
       </div> */}

      {/* Water droplet particle effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-3 h-3 rounded-full bg-white/80"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `droplet ${5 + Math.random() * 10}s linear ${Math.random() * 5}s infinite`
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes droplet {
          0% { transform: translateY(-10px); opacity: 0; }
          10% { opacity: 0.5; }
          100% { transform: translateY(100vh); opacity: 0; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(2deg); }
        }
      `}</style>
    </section>
  );
};

export default Hero;




// import React, { useEffect, useState } from 'react';
// import { ChevronDown, Droplets, Shield, Award } from 'lucide-react';

// const Hero = () => {
//   const [scrolled, setScrolled] = useState(false);
  
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };
    
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <section id="home" className="relative h-screen overflow-hidden bg-gradient-to-b from-primary-900 to-primary-700">
//       {/* Animated water background */}
//       <div className="absolute inset-0 opacity-20">
//         <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
//           <defs>
//             <pattern id="water" width="100" height="20" patternUnits="userSpaceOnUse">
//               <path 
//                 d="M0 15 Q 25 5, 50 15 T 100 15" 
//                 fill="none" 
//                 stroke="#fff" 
//                 strokeWidth="1"
//               >
//                 <animate attributeName="d" 
//                   dur="10s" 
//                   repeatCount="indefinite"
//                   values="
//                     M0 15 Q 25 5, 50 15 T 100 15;
//                     M0 12 Q 25 22, 50 12 T 100 12;
//                     M0 15 Q 25 5, 50 15 T 100 15
//                   "
//                 />
//               </path>
//             </pattern>
//           </defs>
//           <rect width="100%" height="100%" fill="url(#water)" />
//         </svg>
//       </div>
      
//       {/* Background blobs with better animation */}
//       <div className="absolute top-1/4 -right-24 w-96 h-96 rounded-full bg-primary-300/30 blur-3xl animate-pulse"></div>
//       <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#B2EBF2]/20 blur-3xl animate-pulse" style={{ animationDuration: '8s' }}></div>
//       <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-secondary-400/20 blur-3xl animate-pulse" style={{ animationDuration: '12s' }}></div>
     
//       <div className="container-custom relative h-full flex flex-col justify-center z-10">
//         <div className="max-w-3xl">
//           <div className="mb-4 inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90">
//             <span className="mr-2 text-accent-400">✨</span> 
//             <span className="text-sm font-medium">Experience Nature's Purest Water</span>
//           </div>
          
//           <h1 className="text-white mb-6 leading-tight font-bold">
//             Pure Hydration for a <span className="text-accent-300 relative">
//               Healthier
//               <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 100 15" width="100%" height="15">
//                 <path d="M0,5 Q30,0 50,5 T100,5" fill="none" stroke="currentColor" strokeWidth="2" />
//               </svg>
//             </span> Life
//           </h1>
          
//           <p className="text-white/90 text-lg md:text-xl mb-8 max-w-xl">
//             Experience the perfect balance of minerals and purity with Gangothiri Aqua's premium mountain-sourced water products.
//           </p>
          
//           <div className="flex flex-wrap gap-4">
//             <a href="#products" className="btn btn-primary group">
//               Explore Products
//               <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
//             </a>
//             <a href="#about" className="btn btn-secondary backdrop-blur-sm">
//               Learn More
//             </a>
//           </div>
          
//           {/* Trust indicators */}
//           <div className="mt-12 grid grid-cols-3 gap-4 max-w-lg">
//             <div className="flex flex-col items-center text-center text-white/90">
//               <div className="w-12 h-12 mb-2 flex items-center justify-center rounded-full bg-white/10">
//                 <Droplets size={24} className="text-[#B2EBF2]" />
//               </div>
//               <span className="text-xs md:text-sm">100% Natural</span>
//             </div>
//             <div className="flex flex-col items-center text-center text-white/90">
//               <div className="w-12 h-12 mb-2 flex items-center justify-center rounded-full bg-white/10">
//                 <Shield size={24} className="text-[#B2EBF2]" />
//               </div>
//               <span className="text-xs md:text-sm">BIS Certified</span>
//             </div>
//             <div className="flex flex-col items-center text-center text-white/90">
//               <div className="w-12 h-12 mb-2 flex items-center justify-center rounded-full bg-white/10">
//                 <Award size={24} className="text-[#B2EBF2]" />
//               </div>
//               <span className="text-xs md:text-sm">Premium Quality</span>
//             </div>
//           </div>
//         </div>
        
//         {/* Improved scroll indicator */}
//         <div className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 z-20 transition-opacity duration-500 ${scrolled ? 'opacity-0' : 'opacity-100'}`}>
//           <a
//             href="#features"
//             className="flex flex-col items-center text-white/80 hover:text-white transition-colors"
//           >
//             <span className="mb-2 text-sm font-medium">Discover More</span>
//             <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center">
//               <div className="w-1 h-3 bg-white/80 rounded-full mt-2 animate-bounce"></div>
//             </div>
//           </a>
//         </div>
//       </div>
     
//       {/* Improved floating bottles with reflection effect */}
       <div className="hidden lg:block absolute right-10 top-1/2 transform -translate-y-1/2 z-10">
         <div className="relative">
           <div className="relative">
             <img
               src="/api/placeholder/240/320"
               alt="Premium water bottle"
               className="w-32 h-auto object-contain rounded-full shadow-lg"
               style={{ 
                 animation: 'float 6s ease-in-out infinite',
                 animationDelay: '0s' 
               }}
             />
             <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-3/4 h-4 bg-white/10 rounded-full blur-md"></div>
           </div>
        
           <div className="absolute -top-20 -right-10">
             <img
               src="/api/placeholder/200/280"
               alt="Water jar"
               className="w-36 h-auto object-contain rounded-full shadow-lg"
              style={{ 
                 animation: 'float 8s ease-in-out infinite',
                 animationDelay: '0.5s' 
               }}
             />
             <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-3/4 h-4 bg-white/10 rounded-full blur-md"></div>
           </div>
        
           <div className="absolute top-20 -right-16">
             <img
               src="/api/placeholder/180/260"
              alt="Small bottle"
               className="w-28 h-auto object-contain rounded-full shadow-lg"
               style={{ 
                 animation: 'float 7s ease-in-out infinite',
                 animationDelay: '1s' 
               }}
             />
             <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-3/4 h-4 bg-white/10 rounded-full blur-md"></div>
           </div>
         </div>
       </div>
      
//       {/* Water droplet particle effect */}
//       <div className="absolute inset-0 pointer-events-none overflow-hidden">
//         {[...Array(10)].map((_, i) => (
//           <div 
//             key={i}
//             className="absolute w-2 h-2 rounded-full bg-white/30"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               animation: `droplet ${5 + Math.random() * 10}s linear ${Math.random() * 5}s infinite`
//             }}
//           />
//         ))}
//       </div>
      
//       <style jsx>{`
//         @keyframes droplet {
//           0% { transform: translateY(-10px); opacity: 0; }
//           10% { opacity: 0.5; }
//           100% { transform: translateY(100vh); opacity: 0; }
//         }
        
//         @keyframes float {
//           0%, 100% { transform: translateY(0) rotate(0deg); }
//           50% { transform: translateY(-15px) rotate(2deg); }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Hero;