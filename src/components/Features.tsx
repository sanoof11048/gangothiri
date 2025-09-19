import React from 'react';
import { Droplet, Shield, Award, Thermometer } from 'lucide-react';

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  aos?: string;
};

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, aos }) => {
  return (
    <div 
      className="water-card p-6 glass-effect"
      data-aos={aos} 
      data-aos-duration="1000"
      data-aos-delay="200"
    >
      <div className="mb-4 text-primary-500">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: <Droplet size={36} strokeWidth={1.5} />,
      title: "Pure & Balanced",
      description: "Perfect mineral balance with TDS levels optimized for your health and great taste.",
      aos: "fade-up"
    },
    {
      icon: <Shield size={36} strokeWidth={1.5} />,
      title: "Quality Assured",
      description: "Multi-stage purification process with 24/7 quality monitoring systems.",
      aos: "fade-up"
    },
    {
      icon: <Award size={36} strokeWidth={1.5} />,
      title: "Certified Excellence",
      description: "ISO 9001:2015 certified with adherence to strict national health standards.",
      aos: "fade-up"
    },
    {
      icon: <Thermometer size={36} strokeWidth={1.5} />,
      title: "Eco-Friendly",
      description: "Sustainable packaging with recyclable materials and reduced carbon footprint.",
      aos: "fade-up"
    }
  ];

  return (
    <section id="features" className="section relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="blob bg-primary-100 top-0 right-0 w-96 h-96 opacity-30"></div>
        <div className="blob bg-[#B2EBF2] bottom-0 left-0 w-72 h-72 opacity-20"></div>
      </div>
      
      <div className="container-custom relative">
        <div 
          className="text-center max-w-2xl mx-auto mb-16"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <h2 className="mb-4">Why Choose Gangothri Aqua?</h2>
          <p className="text-lg text-gray-600">
            We combine modern technology with nature's best to provide water that's not just pure, but perfect.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              aos={feature.aos}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
