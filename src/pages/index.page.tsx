import React from 'react';
import HelmetPkg from "react-helmet-async";
const { Helmet } = HelmetPkg;
import App from '../App';

const Page: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Gangothiri Aqua – Premium Packaged Drinking Water in Kerala</title>
        <meta
          name="description"
          content="Gangothiri Aqua supplies premium drinking water from 500ml bottles to 20L jars across Kerala, Tamil Nadu & Karnataka."
        />
        <link rel="canonical" href="https://gangothiriaqua.in/" />
        {/* JSON-LD structured data for WebSite */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://gangothiriaqua.in/",
            "name": "Gangothiri Aqua",
            "potentialAction": [
              {
                "@type": "SearchAction",
                "target": "https://gangothiriaqua.in/products?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            ]
          })}
        </script>
      </Helmet>
      <App />
    </>
  );
};

export { Page };
