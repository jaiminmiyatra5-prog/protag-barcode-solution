import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="navbar-container">
      <div className="top-bar bg-light">
        <div className="container top-bar-content">
          <div className="contact-info">
            <a href="mailto:protagbarcodesolution@gmail.com">
              <FaEnvelope /> protagbarcodesolution@gmail.com
            </a>
          </div>
        </div>
      </div>

      <nav className="main-nav">
        <div className="container nav-content">

          <Link to="/" className="logo" onClick={closeMenu}>
            <img
              src="/logo.png"
              alt="ProTag Logo"
              className="nav-logo-img"
            />
            <div className="logo-text">PROTAG BARCODE SOLUTION</div>
          </Link>

          <div className="mobile-menu-icon" onClick={toggleMenu}>
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </div>

          <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
            <li>
              <Link to="/" onClick={closeMenu}>Home</Link>
            </li>
            <li>
              <Link to="/about" onClick={closeMenu}>About</Link>
            </li>
            <li>
              <Link to="/products" onClick={closeMenu}>Products</Link>
            </li>
            <li>
              <Link to="/contact" onClick={closeMenu}>Contact</Link>
            </li>
          </ul>

          <Link to="/quote" className="btn btn-primary nav-cta">
            Get a Quote
          </Link>

        </div>
      </nav>
    </header>
  );
};

export default Navbar;
