import React from "react";
import './Home.scss'

import ShortcutsMenu from "../../components/shortcutsMenu/ShortcutsMenu";
import Carosello from "../../components/carusel/Carosello";

const Home = () => {
  return (
    <div>
      <Carosello />
      <div className="containerSubTitle">
        <h1>ELEKTRALLARM</h1>
        <h1>Impianti elettrici, Automazioni, Antifurti e Domotica</h1>
      </div>
      <ShortcutsMenu />
      <div className="containerBio">
        <h2>Elektrallarm di Andreoni Adriano:</h2>
        <h2>specialisti in domotica, impianti elettrici e sicurezza</h2>
        <p>
          Elektrallarm, con sede a Cecina, in provincia di
          Livorno, è il punto di riferimento per chi cerca soluzioni moderne e
          affidabili nell'ambito della domotica, degli impianti elettrici e dei
          sistemi di sicurezza. Con oltre trent'anni di esperienza, ci occupiamo
          dell'installazione e manutenzione di allarmi, videosorveglianza e
          automazioni, offrendo
          tecnologie avanzate per garantire comfort e protezione.
          Affidabilità, qualità e attenzione alle esigenze del cliente sono i
          valori che guidano ogni nostro progetto. Contattaci senza impegno per
          informazioni o preventivi personalizzati: saremo felici di trovare
          insieme a te la soluzione ideale. 
          
        </p>
        
      </div>
      <div className="containerContactMe">
          <h2>Elektrallarm: innovazione e
          sicurezza per la tua casa o attività.</h2>
          <p>Chiamaci allo 346 8704412 dal lunedì al venerdì</p>
          <button>Contattaci via E-Mail</button>
        </div>
    </div>
  );
};

export default Home;
