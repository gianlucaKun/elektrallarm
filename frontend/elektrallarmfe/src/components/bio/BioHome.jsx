import React, { useState } from "react";
import "./BioHome.scss";
import test from "../../assets/img/foto_bio.jpg";
const BioHome = () => {

  const [showFullText, setShowFullText] = useState(false);

  const toggleText = () => {
    setShowFullText(!showFullText);
  };

  return (
    <div className="containerBio padding20">
      <div>
        <h1 className="titlebio">
          Specialisti in impianti elettrici, domotica, sicurezza e automazioni
        </h1>
        <p className={`bio-text ${showFullText ? "expanded" : "collapsed"}`}>
          Elektrallarm, con sede a Cecina, in provincia di Livorno, è il punto
          di riferimento per chi cerca soluzioni moderne e affidabili
          nell'ambito della domotica, degli impianti elettrici e dei sistemi di
          sicurezza.<br/> Con oltre trent'anni di esperienza, ci occupiamo
          dell'installazione e manutenzione di allarmi, videosorveglianza e
          automazioni, offrendo tecnologie avanzate per garantire comfort e
          protezione. Affidabilità, qualità e attenzione alle esigenze del
          cliente sono i valori che guidano ogni nostro progetto. Contattaci
          senza impegno per informazioni o preventivi personalizzati: saremo
          felici di trovare insieme a te la soluzione ideale.
        </p>
        <button
          className="btn-toggle-text"
          onClick={toggleText}
        >
          {showFullText ? "Mostra meno" : "Mostra di più"}
        </button>
        <div className="container-button-bio">
          <button
            className="btn-scopri-bio"
            aria-label="Scopri di più sulla biografia"
            onClick={() => {
              document
                .getElementById("service-section")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            Scopri di più
          </button>
          <button className="btn-contact-me-bio">Contattaci</button>
        </div>
      </div>

      <div className="container-foto-bio">
        <img src={test} alt="fotobio elektrallarm" />
      </div>
    </div>
  );
};

export default BioHome;
