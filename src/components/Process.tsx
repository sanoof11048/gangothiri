import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import water from '../assets/water.jpg';
import packing from '../assets/packing.png';
import lab from '../assets/lab.jpg';
import purification from '../assets/purification.png';

const Process: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  
  const steps = [
    {
      title: "Collection & Filtration",
      description: "Water is sourced from deep, natural underground reservoirs and undergoes initial filtration to remove particulates.",
      image: water
    },
    {
      title: "Purification",
      description: "Multi-stage purification process including reverse osmosis, UV treatment, and ozonation to eliminate impurities.",
      image: purification
    },
    {
      title: "Mineral Enrichment",
      description: "Precisely controlled remineralization to add essential minerals for optimal taste and health benefits.",
      image: "https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
    },
    {
      title: "Quality Testing",
      description: "Rigorous laboratory testing ensuring every batch meets our strict quality standards and regulatory requirements.",
      image: lab
    },
    {
      title: "Bottling & Packaging",
      description: "Automated, hygienic bottling in our state-of-the-art facility with strict quality control measures.",
      image: packing
    }
  ];

  return (
    <section id="process" className="section bg-primary-50">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="mb-4">Our Water Processing Journey</h2>
          <p className="text-lg text-gray-600">
            Discover the meticulous process that ensures every drop of Gangothri water meets our premium standards.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Process steps */}
          <div>
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div 
                  key={index}
                  className={`p-6 rounded-lg cursor-pointer transition-all duration-300 ${
                    activeStep === index 
                      ? 'bg-white shadow-lg border-l-4 border-primary-500' 
                      : 'hover:bg-white/50'
                  }`}
                  onClick={() => setActiveStep(index)}
                >
                  <div className="flex items-start">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mr-4 ${
                      activeStep === index ? 'bg-primary-500 text-white' : 'bg-gray-200 text-gray-600'
                    }`}>
                      {index + 1}
                    </div>
                    <div>
                      <h3 className={`text-lg font-medium mb-2 ${
                        activeStep === index ? 'text-primary-500' : 'text-gray-700'
                      }`}>
                        {step.title}
                      </h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-xl overflow-hidden shadow-xl h-80 lg:h-96">
              <img 
                src={steps[activeStep].image} 
                alt={steps[activeStep].title} 
                className="w-full h-full object-cover transition-all duration-500"
              />
              <div className="absolute inset-0 bg-primary-900/20"></div>
              
              {/* Step indicator */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                <div className="flex justify-between items-center">
                  <h4 className="text-white font-medium">{steps[activeStep].title}</h4>
                  <div className="flex space-x-2">
                    {steps.map((_, index) => (
                      <button 
                        key={index}
                        className={`w-2 h-2 rounded-full ${
                          activeStep === index ? 'bg-white' : 'bg-white/50'
                        }`}
                        onClick={() => setActiveStep(index)}
                        aria-label={`View step ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Navigation buttons */}
            <div className="flex justify-between mt-4">
              <button 
                className={`p-2 rounded-full border border-[#B2EBF2] ${
                  activeStep === 0 ? 'text-gray-400 cursor-not-allowed' : 'text-primary-500 hover:bg-primary-50'
                }`}
                onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
                disabled={activeStep === 0}
                aria-label="Previous step"
              >
                <ArrowRight size={20} className="transform rotate-180" />
              </button>
              <button 
                className={`p-2 rounded-full border border-[#B2EBF2] ${
                  activeStep === steps.length - 1 ? 'text-gray-400 cursor-not-allowed' : 'text-primary-500 hover:bg-primary-50'
                }`}
                onClick={() => setActiveStep(prev => Math.min(steps.length - 1, prev + 1))}
                disabled={activeStep === steps.length - 1}
                aria-label="Next step"
              >
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;