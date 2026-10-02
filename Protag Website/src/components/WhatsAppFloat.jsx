import React from 'react';
import './WhatsAppFloat.css';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppFloat = () => {
  const phoneNumber = "[ADD WHATSAPP NUMBER]";
  const message = "Hello ProTag Barcode Solution, I would like to enquire about your products. Please share details and quotation.";
  const encodedMessage = encodeURIComponent(message);
  
  return (
    <a 
      href={`https://wa.me/${phoneNumber}?text=${encodedMessage}`}
      target="_blank" 
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Contact us on WhatsApp"
    >
      <FaWhatsapp className="whatsapp-icon" />
    </a>
  );
};

export default WhatsAppFloat;
