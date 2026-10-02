import React from 'react';
import { Link } from 'react-router-dom';

const ProductsOverview = () => {
  return (
    <div className="section-padding container">
      <h1>Our Products</h1>
      <div className="features-grid" style={{ marginTop: '2rem' }}>
        <Link to="/products/barcode-labels" className="feature-card"><h3>Barcode & Label Stickers</h3></Link>
        <Link to="/products/barcode-ribbons" className="feature-card"><h3>Barcode Ribbons</h3></Link>
        <Link to="/products/barcode-printers" className="feature-card"><h3>Barcode Printers</h3></Link>
        <Link to="/products/industrial-labels" className="feature-card"><h3>A4 Sheet Labels</h3></Link>
        <Link to="/products/stretch-film" className="feature-card"><h3>Stretch Film</h3></Link>
        <Link to="/products/bopp-tape" className="feature-card"><h3>BOPP Tape</h3></Link>
      </div>
    </div>
  );
};
export default ProductsOverview;
