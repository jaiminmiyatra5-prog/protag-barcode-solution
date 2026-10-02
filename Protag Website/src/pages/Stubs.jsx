import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

import barcodeLabel1 from '../images/barcode-label-1.jpg';
import barcodeLabel2 from '../images/barcode-label-2.jpg';
import barcodeLabel3 from '../images/barcode-label-3.jpg';
import barcodeLabel4 from '../images/barcode-label-4.jpeg';
import barcodeLabel5 from '../images/barcode-label-5.jpg';

import industrialLabel1 from '../images/A4-label-1.jpeg';
import industrialLabel2 from '../images/A4-label-2.jpeg';
import industrialLabel3 from '../images/A4-label-3.jpeg';
import industrialLabel4 from '../images/A4-label-4.jpeg';
import industrialLabel5 from '../images/A4-label-5.jpeg';

import stretch1 from '../images/stretch-1.webp';
import stretch2 from '../images/stretch-2.jpeg';
import stretch3 from '../images/stretch-3.jpeg';
import stretch4 from '../images/stretch-4.webp';
import stretch5 from '../images/stretch-5.jpeg';

import bopp1 from '../images/bopp-1.png';
import bopp2 from '../images/bopp-2.jpg';
import bopp3 from '../images/bopp-3.jpg';
import bopp4 from '../images/bopp-4.webp';
import bopp5 from '../images/bopp-5.jpg';

import ribbon1 from '../images/ribbon-1.jpeg';
import ribbon2 from '../images/ribbon-2.webp';
import ribbon3 from '../images/ribbon-3.jpeg';
import ribbon4 from '../images/ribbon-4.jpeg';
import ribbon5 from '../images/ribbon-5.jpeg';

import printer1 from '../images/printer-1.png';
import printer2 from '../images/printer-2.jpg';
import printer3 from '../images/printer-3.jpg';
import printer4 from '../images/printer-4.jpg';
import printer5 from '../images/printer-5.jpg';

const ProductPage = ({ title, images, description, features }) => {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const sliderTimer = window.setInterval(() => {
      setActiveImage((currentImage) => (currentImage + 1) % images.length);
    }, 2000);

    return () => window.clearInterval(sliderTimer);
  }, [images.length]);

  return (
    <div className="section-padding container">
      <Link
        to="/products"
        className="back-to-products"
        style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
      >
        <FaArrowLeft /> Back to Products
      </Link>

      <div className="product-showcase">

        {/* LEFT - Image Slider */}
        <div className="product-images">
          <div className="main-image">
            <img
              src={images[activeImage]}
              alt={title}
            />
          </div>

          <div className="slider-indicators" aria-label={`${title} image slider`}>
            {images.map((image, index) => (
              <span
                key={image}
                className={activeImage === index ? 'active' : ''}
                aria-hidden="true"
              />
            ))}
          </div>
        </div>

        {/* RIGHT - Product Details */}
        <div className="product-details">
          <h1>{title}</h1>

          <p className="product-description">
            {description}
          </p>

          <h3>Key Features</h3>

          <ul>
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>

          <Link to="/quote" className="btn btn-primary quote-button">
            Request a Quote
          </Link>
        </div>

      </div>
    </div>
  );
};


// PRODUCTS
export const BarcodeLabels = () => (
  <ProductPage
    title="Barcode & Labels Stickers"
    images={[
      barcodeLabel1,
      barcodeLabel2,
      barcodeLabel3,
      barcodeLabel4,
      barcodeLabel5
    ]}
    description="High-quality barcode and labels stickers suitable for industrial, pharmaceutical, logistics and retail applications."
    features={[
      "Custom sizes available",
      "Excellent barcode readability",
      "Strong adhesive",
      "Custom printing available"
    ]}
  />
);


export const IndustrialLabels = () => (
  <ProductPage
    title="A4 Sheet Labels"
    images={[
      industrialLabel1,
      industrialLabel2,
      industrialLabel3,
      industrialLabel4,
      industrialLabel5
    ]}
    description="High-quality industrial labels designed for clear, reliable labeling across commercial, office, and industrial applications."
    features={[
      "High-quality adhesive",
      "Durable and long-lasting",
      "Available in custom sizes and materials",
      "Suitable for product, packaging, identification, and industrial labeling",
      "Clean printing and professional finish"
    ]}
  />
);


export const StretchFilm = () => (
  <ProductPage
    title="Stretch Film"
    images={[
      stretch1,
      stretch2,
      stretch3,
      stretch4,
      stretch5
    ]}
    description="High-quality stretch film for secure pallet wrapping, transportation and industrial packaging."
    features={[
      "Machine and hand grade",
      "Excellent stretchability",
      "Strong load holding",
      "Multiple thickness options",
      "Custom sizes available"
    ]}
  />
);


export const BOPPTape = () => (
  <ProductPage
    title="BOPP Tapes"
    images={[
      bopp1,
      bopp2,
      bopp3,
      bopp4,
      bopp5
    ]}
    description="Reliable packaging BOPP tapes available in transparent, brown and printed variants."
    features={[
      "Transparent and brown tapes",
      "Printed BOPP tape",
      "Strong adhesive",
      "Multiple widths available",
      "Suitable for carton sealing"
    ]}
  />
);


export const BarcodeRibbons = () => (
  <ProductPage
    title="Barcode Ribbons"
    images={[
      ribbon1,
      ribbon2,
      ribbon3,
      ribbon4,
      ribbon5
    ]}
    description="Premium barcode printer ribbons designed for clear, durable and reliable barcode printing."
    features={[
      "Wax and wax-resin options",
      "Sharp print quality",
      "Long-lasting prints",
      "Multiple sizes available",
      "Compatible with major printers"
    ]}
  />
);


export const BarcodePrinters = () => (
  <ProductPage
    title="Barcode Printers"
    images={[
      printer1,
      printer2,
      printer3,
      printer4,
      printer5
    ]}
    description="Reliable barcode printers for retail, logistics, manufacturing and warehouse applications."
    features={[
      "Industrial and desktop models",
      "High-speed printing",
      "USB and network connectivity",
      "Multiple label sizes supported",
      "Suitable for continuous operation"
    ]}
  />
);


// Other pages
const Stub = ({ title }) => (
  <div className="section-padding container">
    <h1>{title}</h1>
    <p>This page is currently under development.</p>
  </div>
);

export const Industries = () => <Stub title="Industries" />;
export const Contact = () => <Stub title="Contact Us" />;
export const Quote = () => <Stub title="Request a Quote" />;