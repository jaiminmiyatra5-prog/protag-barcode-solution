import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background"></div>

        <div className="container hero-content">
          <h1>
            Barcode Solution <span className="desktop-break"><br /></span>
            & Industrial Packaging You Can Rely On
          </h1>

          <div className="hero-actions">
            <Link to="/quote" className="btn btn-primary">
              Request a Quote
            </Link>

            <Link
              to="/products"
              className="btn btn-secondary hero-explore-btn"
            >
              Explore Products
            </Link>
          </div>
        </div>
      </section>


      {/* Why Choose Us */}
      <section className="section-padding bg-light">
        <div className="container">
          <h2>Why Businesses Choose ProTag</h2>

          <div className="features-grid">

            <div className="feature-card">
              <h3>Customized Solutions</h3>
              <p>
                From specific sizes to specialized materials, we provide
                solutions built around your exact business requirements.
              </p>
            </div>

            <div className="feature-card">
              <h3>Wide Product Range</h3>
              <p>
                A complete range of barcode, labeling, and packaging solutions
                designed to meet diverse industrial and business requirements.
              </p>
            </div>

            <div className="feature-card">
              <h3>Industrial Applications</h3>
              <p>
                Products specifically designed for the demanding environments
                of manufacturing and logistics.
              </p>
            </div>

            <div className="feature-card">
              <h3>Competitive Pricing</h3>
              <p>
                Reliable products at competitive prices, helping businesses
                achieve better value on every order.
              </p>
            </div>

            <div className="feature-card">
              <h3>Requirement-Based Supply</h3>
              <p>
                Precise supply tailored to your specifications, quantities,
                and application requirements.
              </p>
            </div>

            <div className="feature-card">
              <h3>Responsive Support</h3>
              <p>
                Fast, reliable support for your business — ensuring smooth
                communication, quick quotations, and timely assistance at
                every stage.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* Trust Elements CTA */}
      <section className="section-padding trust-section">
        <div className="container text-center trust-content">

          <h2>"The Precision Behind Every Pack."</h2>

          <p>
            Tell us your specific requirements, and our team will help you
            find the most suitable and cost-effective solution for your
            industrial needs.
          </p>

          <Link
            to="/contact"
            className="btn btn-primary trust-button"
          >
            Talk to Our Team
          </Link>

        </div>
      </section>

    </div>
  );
};

export default Home;