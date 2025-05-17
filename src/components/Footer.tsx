import { Droplet, Mail, Phone} from 'lucide-react';
import React from 'react';
import { FaXTwitter, FaYoutube } from 'react-icons/fa6';
import { RiFacebookCircleFill, RiInstagramFill } from 'react-icons/ri';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Droplet
                size={32} 
                strokeWidth={1.5}
                className="text-[#B2EBF2]"
                fill="currentColor"
                fillOpacity={0.2}
              />
              <span className="font-montserrat font-bold text-2xl">
                <span className="text-[#B2EBF2]">Gangothiri</span> 
                <span>Aqua</span>
              </span>
            </div>
            <p className="text-[#0891B2]/80 mb-6">
              Premium water solutions for homes, offices, and businesses. Pure hydration for a healthier life.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-[#B2EBF2] hover:text-white hover:bg-[#B2EBF2] rounded-full p-1 duration-500 ease-out transition-colors" aria-label="Facebook">
                <RiFacebookCircleFill size={20}/>
              </a>
              <a href="#" className="text-[#B2EBF2] hover:text-white hover:bg-[#B2EBF2] rounded-full p-1 duration-500 ease-out transition-colors" aria-label="Instagram">
                <RiInstagramFill size={20} />
              </a>
              <a href="#" className="text-[#B2EBF2] hover:text-white hover:bg-[#B2EBF2] rounded-full p-1 duration-500 ease-out transition-colors" aria-label="Twitter">
                <FaXTwitter size={20} />
              </a>
              <a href="#" className="text-[#B2EBF2] hover:text-white hover:bg-[#B2EBF2] rounded-full p-1 duration-500 ease-out transition-colors" aria-label="YouTube">
                <FaYoutube size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'Products', 'About Us', 'Process', 'Contact Us'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.split(' ')[0].toLowerCase()}`} 
                    className="text-[#0891B2]/80 hover:text-[#B2EBF2] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Products</h3>
            <ul className="space-y-3">
              {['20Ltr Jar', '5Ltr Dispenser', '2Ltr Bottle', '1Ltr Bottle', '500ml Bottle', 'Dispenser Stand'].map((item) => (
                <li key={item}>
                  <a 
                    href="#products" 
                    className="text-[#0891B2]/80 hover:text-[#B2EBF2] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone size={18} className="text-[#B2EBF2] mt-1 mr-3 flex-shrink-0" />
                <span className="text-[#0891B2]/80">+91 75610 56186</span>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="text-[#B2EBF2] mt-1 mr-3 flex-shrink-0" />
                <span className="text-[#0891B2]/80">gangothiriaqua.info@gmail.com</span>
              </li>
              <li className="flex items-start">
                <Droplet size={18} className="text-[#B2EBF2] mt-1 mr-3 flex-shrink-0" />
                <span className="text-[#0891B2]/80">
                  Changarakulam, Malappuram<br />
                  Kerala, India 600001
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="pt-8 border-t border-primary-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#0891B2]/80 text-sm">
            &copy; {new Date().getFullYear()} Gangothiri Aqua Processing Unit. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-[#0891B2]/80 hover:text-[#B2EBF2] text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-[#0891B2]/80 hover:text-[#B2EBF2] text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-[#0891B2]/80 hover:text-[#B2EBF2] text-sm transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;