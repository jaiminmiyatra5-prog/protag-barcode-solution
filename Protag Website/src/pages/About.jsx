import React from 'react';

const About = () => {
  return (
    <div className="section-padding container">
      <h1>ProTag Barcode Solution</h1>

      <p>
        ProTag Barcode Solution is a reliable manufacturer, supplier, exporter,
        trader, wholesaler, and retailer of barcode, labeling, and industrial
        packaging solutions.
      </p>

      <p>
        We serve businesses across manufacturing, pharmaceutical, engineering,
        automotive, FMCG, logistics, and other industrial sectors. Our product
        range includes barcode and label stickers, barcode printers and related
        machines, barcode ribbons, stretch films, BOPP tape, and other
        packaging materials.
      </p>

      <p>
        We focus on understanding each customer's specific application,
        product specifications, and quantity requirements, enabling us to
        provide suitable and cost-effective products accordingly.
      </p>

      <p>
        Our goal is to deliver quality products, reliable supply, and
        responsive support to meet the diverse requirements of our customers.
      </p>

      {/* Vision & Mission */}
      <div className="vision-mission-grid">

        {/* Vision Card */}
        <div className="vision-mission-card">
          <div className="card-icon">✦</div>
          <h2>Our Vision</h2>
          <p>
            To become a trusted and preferred partner for barcode, labeling,
            and industrial packaging solution across India and beyond, known
            for quality, reliability, competitive value, and customer-focused
            service.
          </p>
        </div>

        {/* Mission Card */}
        <div className="vision-mission-card">
          <div className="card-icon">✦</div>
          <h2>Our Mission</h2>
          <p>
            Our mission is to provide reliable, high-quality barcode, labeling,
            and industrial packaging solution that help businesses operate
            efficiently. We focus on understanding our customers’ specific
            requirements and delivering the right products with consistent
            quality, competitive value, and dependable service. Through
            continuous improvement and a customer-first approach, we aim to
            build long-term relationships and become a trusted supply partner
            for businesses of all sizes.
          </p>
        </div>

      </div>
    </div>
  );
};

export default About;