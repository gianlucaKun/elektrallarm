import React from "react";
import whatsappLogo from "../assets/img/logo-whatsapp2.png"

const Whatsappbutton = () => {
  const phoneNumber = "393468704412";
  return (
    <a
  href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent("Ciao! Vorrei avere maggiori informazioni ")}`}
  target="_blank"
  rel="noopener noreferrer"
  className="whatsapp-button"
>
  <img
    src={whatsappLogo}
    alt="WhatsApp"
    className="whatsapp-logo"
  />
</a>

  );
};

export default Whatsappbutton;
