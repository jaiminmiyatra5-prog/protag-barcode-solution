import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-light">
      <div className="container footer-content">
        <div className="footer-brand">
          <div className="logo-text">PROTAG BARCODE SOLUTION</div>
          <p>
            Trusted B2B supplier of barcode & label stickers, ribbon, stretch film, bopp tape & industrial packaging materials.
            Serving diverse industries
            with requirement-based supply.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/quote">Request a Quote</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-products">
          <h3>Our Products</h3>
          <ul>
            <li><Link to="/products/barcode-labels">Barcode Labels</Link></li>
             <li><Link to="/products/barcode-ribbons">Barcode Ribbons</Link></li>
            <li><Link to="/products/barcode-printers">Barcode Printers</Link></li>
  
            <li><Link to="/products/industrial-labels">A4 Sheet Labels</Link></li>
            <li><Link to="/products/stretch-film">Stretch Film</Link></li>
            <li><Link to="/products/bopp-tape">BOPP Tape</Link></li>
           </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>
          <ul>
            <li>
              <FaEnvelope />
              <a href="mailto:protagbarcodesolution@gmail.com">
                protagbarcodesolution@gmail.com
              </a>
            </li>

            <li>
              <FaMapMarkerAlt />
              7/A First Floor Pushparaj Ind Estate Nutan Mill Compound B/M City
              Ahmedabad - 380018
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom text-center">
        <p>&copy; 2026 ProTag Barcode Solution. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
