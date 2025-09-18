import React from "react";
import * as ReactHelmet from "react-helmet-async";
const { Helmet } = ReactHelmet;

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
};

const ProductsSEO: React.FC = () => {
  const products: Product[] = [
    {
      id: 1,
      name: "500ml Water Bottle",
      size: "500ml",
      image: bottle_500,
      description: "Perfect for on-the-go hydration, our 500ml bottles are convenient and portable.",
    },
    {
      id: 2,
      name: "1L Water Bottle",
      size: "1 Litre",
      image: bottle_1L,
      description: "Our 1 liter bottles provide the perfect amount of hydration for daily use.",
    },
    {
      id: 3,
      name: "2L Family Water Bottle",
      size: "2 Litre",
      image: bottle_2L,
      description: "Ideal for families or office settings, our 2 liter bottles offer great value.",
    },
    {
      id: 4,
      name: "20L Water Jar",
      size: "20 Litre",
      image: LTR20,
      description: "Our 20 liter jars are perfect for homes, offices, and commercial spaces.",
    },
    {
      id: 5,
      name: "Dispenser Stand",
      size: "Standard",
      image: dispenserstand,
      description: "Sturdy dispenser stands designed to hold our 20 liter water jars.",
    },
    {
      id: 6,
      name: "5L Mini Water Dispenser",
      size: "5 Litre",
      image: dispenser,
      description: "Compact 5 liter dispensers perfect for small spaces and personal use.",
    },
  ];

  return (
    <Helmet>
      {products.map((product) => (
        <script
          key={product.id}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              "name": `Rivus ${product.name} ${product.size}`,
              "image": `https://gangothiriaqua.in/assets/${product.image}`,
              "description": product.description,
              "brand": { "@type": "Brand", "name": "Rivus" },
              "offers": {
                "@type": "Offer",
                "url": "https://gangothiriaqua.in/#products",
                "priceCurrency": "INR",
                "price": "40", // Replace with actual
                "availability": "https://schema.org/InStock"
              }
            }),
          }}
        />
      ))}
    </Helmet>
  );
};

export default ProductsSEO;
