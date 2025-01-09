import React from "react";
import "./Home.scss";

import ShortcutsMenu from "../../components/shortcutsMenu/ShortcutsMenu";
import Carosello from "../../components/carusel/Carosello";
import SectionServices from "../../components/sectionServices/SectionServices";
import BioHome from "../../components/bio/BioHome";

const Home = () => {
  return (
    <div>
      <BioHome/>
      <Carosello />
      
     
      <SectionServices />
      <div className="containerContactMe padding20">
        <h2>
          Elektrallarm: innovazione e sicurezza per la tua casa o attività.
        </h2>
        <h2>{" "}test</h2>
      </div>
      <div>
        <h1>form contattami</h1>
      </div>
    </div>
  );
};

export default Home;
