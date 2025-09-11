import React, { useState } from 'react';
import { Info } from 'lucide-react';
import ProductDetail from './ProductDetails';
import LTR20 from '../assets/jarGPT.png';
import dispenser from '../assets/dispenserGpt.png';
import bottle_500 from '../assets/500ml_bottle.jpg';
import bottle_1L from '../assets/1L_bottle.jpg';
import bottle_2L from '../assets/2L_bottle.jpg';
import dispenserstand from '../assets/dispenser.jpg';

export type Product = {
  id: number;
  name: string;
  size: string;
  image: string;
  description: string;
  features: string[];
  isPopular?: boolean;
};

const Products: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const products: Product[] = [
    {
      id: 1,
      name: "Premium Water Bottle",
      size: "500ml",
      image: bottle_500,
      description: "Perfect for on-the-go hydration, our 500ml bottles are convenient and portable.",
      features: ["BPA-free plastic", "Easy grip design", "Recyclable", "Perfect for travel"],
    },
    {
      id: 2,
      name: "Standard Water Bottle",
      size: "1Ltr",
      image: bottle_1L,
      description: "Our 1 liter bottles provide the perfect amount of hydration for daily use.",
      features: ["BPA-free plastic", "Ergonomic design", "Recyclable", "Durable construction"],
      isPopular: true,
    },
    {
      id: 3,
      name: "Family Size Bottle",
      size: "2Ltr",
      image: bottle_2L,
      description: "Ideal for families or office settings, our 2 liter bottles offer great value.",
      features: ["Large capacity", "Handle for easy pouring", "Recyclable", "Space-efficient design"],
    },
    {
      id: 4,
      name: "Jar",
      size: "20Ltr",
      image: LTR20, 
      description: "Our 20 liter jars are perfect for homes, offices, and commercial spaces.",
      features: ["Durable construction", "Handle for easy transport", "Compatible with dispensers", "Reusable"],
      isPopular: true,
    },
    {
      id: 5,
      name: "Dispenser Stand",
      size: "Standard",
      image: dispenserstand,
      description: "Sturdy dispenser stands designed to hold our 20 liter water jars.",
      features: ["Stable design", "Easy water dispensing", "Durable construction", "Compatible with all our jars"],
    },
    {
      id: 6,
      name: "Mini Dispenser",
      size: "5Ltr",
      image: dispenser,
      description: "Compact 5 liter dispensers perfect for small spaces and personal use.",
      features: ["Space-saving design", "Easy dispensing", "Portable", "Perfect for desktop use"],
    },
  ];

  return (
    <section id="products" className="section bg-gray-50">
      <div className="container-custom">
        
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up">
          <h2 className="mb-4">Our Range of Products</h2>
          <p className="text-lg text-gray-600">
            From personal bottles to office dispensers, we have the perfect hydration solution for every need.
          </p>
        </div>
        
        {/* Products grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div 
              key={product.id}
              data-aos="zoom-in"
              data-aos-delay={index * 100} // staggered animation
              className="water-card bg-white overflow-hidden cursor-pointer group"
              onClick={() => setSelectedProduct(product)}
            >
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold mb-1">{product.name}</h3>
                    <p className="text-primary-500 font-medium">{product.size}</p>
                  </div>
                  <button 
                    className="text-primary-500 p-1 rounded-full hover:bg-primary-50 transition-colors"
                    aria-label="View details"
                  >
                    <Info size={20} />
                  </button>
                </div>
                <p className="mt-3 text-gray-600 line-clamp-2">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductDetail
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
        />
      )}
    </section>
  );
};

export default Products;
