import React from 'react';
import { Droplet, Facebook, Instagram, Twitter, Youtube, Phone, Mail } from 'lucide-react';

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
                className="text-primary-200"
                fill="currentColor"
                fillOpacity={0.2}
              />
              <span className="font-montserrat font-bold text-2xl">
                <span className="text-primary-200">Gangothiri</span> 
                <span>Aqua</span>
              </span>
            </div>
            <p className="text-primary-50/80 mb-6">
              Premium water solutions for homes, offices, and businesses. Pure hydration for a healthier life.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-200 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-primary-200 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-primary-200 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-primary-200 hover:text-white transition-colors" aria-label="YouTube">
                <Youtube size={20} />
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
                    className="text-primary-50/80 hover:text-primary-200 transition-colors"
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
                    className="text-primary-50/80 hover:text-primary-200 transition-colors"
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
                <Phone size={18} className="text-primary-200 mt-1 mr-3 flex-shrink-0" />
                <span className="text-primary-50/80">+91 98765 43210</span>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="text-primary-200 mt-1 mr-3 flex-shrink-0" />
                <span className="text-primary-50/80">info@gangothiriaqua.com</span>
              </li>
              <li className="flex items-start">
                <Droplet size={18} className="text-primary-200 mt-1 mr-3 flex-shrink-0" />
                <span className="text-primary-50/80">
                  123 Water Street, Hydration City<br />
                  Tamil Nadu, India 600001
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="pt-8 border-t border-primary-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-50/60 text-sm">
            &copy; {new Date().getFullYear()} Gangothiri Aqua Processing Unit. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-primary-50/60 hover:text-primary-200 text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-primary-50/60 hover:text-primary-200 text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-primary-50/60 hover:text-primary-200 text-sm transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;