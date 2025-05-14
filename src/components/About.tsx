import React from 'react';
import { DropletIcon, Award, Activity, Users } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: <DropletIcon size={28} />, value: "10M+", label: "Bottles Sold" },
    { icon: <Users size={28} />, value: "5000+", label: "Happy Customers" },
    { icon: <Award size={28} />, value: "25+", label: "Quality Awards" },
    { icon: <Activity size={28} />, value: "15+", label: "Years of Excellence" },
  ];

  return (
    <section id="about" className="section relative">
      {/* Background with waves */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute bottom-0 left-0 w-full transform translate-y-1/2" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M0,192L48,181.3C96,171,192,149,288,138.7C384,128,480,128,576,144C672,160,768,192,864,186.7C960,181,1056,139,1152,144C1248,149,1344,203,1392,229.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" 
            fill="#E0F7FA" 
            fillOpacity="0.5"
          />
        </svg>
        <div className="blob bg-primary-100 top-1/4 left-1/4 w-64 h-64 opacity-30"></div>
      </div>
      
      <div className="container-custom relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div>
            <h2 className="mb-6">Our Story</h2>
            <p className="mb-6 text-gray-600">
              Established in 2010, Gangothiri Aqua Processing Unit began with a simple mission: to provide the purest water with perfect mineral balance to every household and business.
            </p>
            <p className="mb-10 text-gray-600">
              Over the years, we've grown from a small local supplier to one of the region's most trusted water providers, maintaining our commitment to quality while expanding our range of products to meet diverse needs.
            </p>
            
            {/* Values */}
            <div className="grid grid-cols-2 gap-6">
              <div className="rounded-lg p-4 bg-primary-50 border border-primary-100">
                <h4 className="text-primary-500 font-medium mb-2">Our Vision</h4>
                <p className="text-sm text-gray-600">
                  To be the leading provider of premium water solutions, enhancing the health and wellbeing of every consumer.
                </p>
              </div>
              <div className="rounded-lg p-4 bg-primary-50 border border-primary-100">
                <h4 className="text-primary-500 font-medium mb-2">Our Promise</h4>
                <p className="text-sm text-gray-600">
                  Unwavering commitment to quality, sustainability, and customer satisfaction in every drop we deliver.
                </p>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/4553035/pexels-photo-4553035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                alt="Water processing facility" 
                className="w-full h-auto" 
              />
              <div className="absolute inset-0 bg-primary-500/10"></div>
            </div>
          </div>
        </div>
        
        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-lg glass-effect"
            >
              <div className="text-primary-500 mb-3 mx-auto w-12 h-12 flex items-center justify-center bg-primary-50 rounded-full">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold mb-1">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;