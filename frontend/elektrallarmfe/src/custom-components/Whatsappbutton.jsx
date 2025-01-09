import React from "react";
import whatsappLogo from "../assets/img/logo-whatsapp2.webp"

const Whatsappbutton = () => {
  const phoneNumber = "393468704412";
  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
    >
      <img
        src={whatsappLogo}
        alt="WhatsApp"
        className="whatsapp-logo"
      />
      Contattaci su WhatsApp
    </a>
  );
};

export default Whatsappbutton;
