import React, { useEffect, useState } from "react";
import Tecnoimpianti from "../../assets/img/caroselloHome/Tecnoimpianti.jpg";
import img2impianti from "../../assets/img/caroselloHome/elettricisti169.jpg";
import quadro1 from "../../assets/img/caroselloHome/quadroelettrico169.jpg";
import quadro2 from "../../assets/img/caroselloHome/quadro169.jpg";
import sorveglianza from "../../assets/img/caroselloHome/technician-installing-cctv-camera[1].jpg";
import domotica from "../../assets/img/caroselloHome/dottr-domotica3_29-scaled.jpg";

import "./Carosello.scss";

const Carosello = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    Tecnoimpianti,
    img2impianti,
    quadro1,
    quadro2,
    sorveglianza,
    domotica,
  ];

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };


  useEffect(() => {
    const interval = setInterval(nextImage, 7000); // 7 secondi
    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="carosello-container">
      <div className="carosello-image-container">
        <img src={images[currentIndex]} alt="Carosello Immagine" />
      </div>
    </div>
  );
};

export default Carosello;
