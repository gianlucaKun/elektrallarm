import React from "react";
import "./ShortcutsMenu.scss";
import impiantiElettrici from '../../assets/img/Progettazione-impianti-elettrici.jpeg'
import videosorveglianza from "../../assets/img/videosorveglianza.jpg"
import domoticaimg from '../../assets/img/impianti-domotici-casa-intelligente.jpg'
import automazioneimg from '../../assets/img/automazioni-5.jpg'
const ShortcutsMenu = () => {
  return (
    <div className="containerShortcuts">
      <div className="containerSCImg">
        <img src={impiantiElettrici} alt="" />
        <p>Progettazione, realizzazione e installazione impianti elettrici</p>
      </div>
    <div className="containerSCImg">
        <img src={videosorveglianza} alt="" />
        <p>Videosorveglianza sicurezza</p>
      </div>
      <div className="containerSCImg">
        <img src={domoticaimg} alt="" />
        <p>Domotica</p>
      </div>
      <div className="containerSCImg">
        <img src={automazioneimg} alt="" />
        <p>Automazioni</p>
      </div>
    </div>
  );
};

export default ShortcutsMenu;
