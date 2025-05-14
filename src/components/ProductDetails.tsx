import React, { useEffect } from 'react';
import { X, Check } from 'lucide-react';
import type { Product } from './Products';

type ProductDetailProps = {
  product: Product;
  onClose: () => void;
};

const ProductDetail: React.FC<ProductDetailProps> = ({ product, onClose }) => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  // Close modal when ESC key is pressed
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative bg-white rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-auto">
        {/* Close button */}
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
          onClick={onClose}
          aria-label="Close"
        >
          <X size={24} />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Product image */}
          <div className="h-64 md:h-full relative overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            {product.isPopular && (
              <div className="absolute top-4 left-4 bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Popular
              </div>
            )}
          </div>

          {/* Product details */}
          <div className="p-8">
            <h3 className="text-2xl font-semibold mb-2">{product.name}</h3>
            <p className="text-primary-500 font-medium mb-4">{product.size}</p>

            <p className="text-gray-600 mb-6">{product.description}</p>

            <div className="mb-6">
              <h4 className="font-semibold mb-3">Features:</h4>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check size={18} className="text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href={`https://wa.me/7907805626?text=${encodeURIComponent(`Hello, I would like to know the price of ${product.name} of ${product.size}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Contact for Pricing
              </a>
              <button
                className="btn btn-secondary w-48 h-12 text-base"
                onClick={onClose}
              >
                Back to Products
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;