import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import emailjs from '@emailjs/browser';
import Home from './pages/Home';
import About from './pages/About';
import ProductsOverview from './pages/ProductsOverview';
import Contact from './pages/Contact';
import Quote from './Quote';

import {
  Industries,
  BarcodeLabels, IndustrialLabels, StretchFilm, BOPPTape, BarcodeRibbons, BarcodePrinters
} from './pages/Stubs';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<ProductsOverview />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/quote" element={<Quote />} />

            {/* Products Subpages */}
            <Route path="/products/barcode-labels" element={<BarcodeLabels />} />
            <Route path="/products/industrial-labels" element={<IndustrialLabels />} />
            <Route path="/products/stretch-film" element={<StretchFilm />} />
            <Route path="/products/bopp-tape" element={<BOPPTape />} />
            <Route path="/products/barcode-ribbons" element={<BarcodeRibbons />} />
            <Route path="/products/barcode-printers" element={<BarcodePrinters />} />
          </Routes>
        </main>
        <Footer />

      </div>
    </Router>
  );
}

export default App;
