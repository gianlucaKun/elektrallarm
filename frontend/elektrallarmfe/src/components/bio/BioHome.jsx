import React from "react";
import "./BioHome.scss";
import test from '../../assets/img/elettricista_test.jpg'
const BioHome = () => {
  return (
    <div className="containerBio padding20">
      <div>
        
        <h1>Specialisti in  impianti elettrici, domotica, sicurezza e automazioni</h1><p>
          Elektrallarm, con sede a Cecina, in provincia di Livorno, è il punto
          di riferimento per chi cerca soluzioni moderne e affidabili
          nell'ambito della domotica, degli impianti elettrici e dei sistemi di
          sicurezza. Con oltre trent'anni di esperienza, ci occupiamo
          dell'installazione e manutenzione di allarmi, videosorveglianza e
          automazioni, offrendo tecnologie avanzate per garantire comfort e
          protezione. Affidabilità, qualità e attenzione alle esigenze del
          cliente sono i valori che guidano ogni nostro progetto. Contattaci
          senza impegno per informazioni o preventivi personalizzati: saremo
          felici di trovare insieme a te la soluzione ideale.
        </p>
        <div className="container-button-bio"><button>Scopri di piu</button> 
        <button>Contattaci</button></div>
        
      </div>

      <div>
        <img src={test} alt="fotobio elektrallarm" />
      </div>
    </div>
  );
};

export default BioHome;
