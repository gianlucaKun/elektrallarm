import React from "react";
import "./SectionServices.scss";
import ServicesCard from "../../custom-components/card/ServicesCard";

// import delle immagini
import impiantiElettrici from '../../assets/img/Progettazione-impianti-elettrici.jpeg'
import videosorveglianza from "../../assets/img/videosorveglianza.jpg"
import domoticaimg from '../../assets/img/impianti-domotici-casa-intelligente.jpg'
import automazioneimg from '../../assets/img/automazioni-5.jpg'
const SectionServices = () => {

    const servicesData = [
        {
            title: "Impianti Elettrici",
            description: "Progettiamo e realizziamo impianti elettrici sicuri e certificati, includendo ampliamenti e adeguamenti normativi, installazione di quadri elettrici e illuminazione personalizzata.",
            image: impiantiElettrici,
        },
        {
            title: "Videosorveglianza",
            description: "Installazione di sistemi di videosorveglianza avanzati per proteggere la tua casa o azienda, con telecamere di ultima generazione e monitoraggio remoto.",
            image: videosorveglianza,
        },
        {
            title: "Domotica e Smart Home",
            description: "Trasforma la tua abitazione in una casa intelligente con impianti domotici e sistemi Smart Home per la gestione automatica di luci, tende, climatizzazione e sicurezza.",
            image: domoticaimg,
        },
        {
            title: "Automazioni",
            description: "Progettiamo e installiamo automazioni per cancelli scorrevoli, battenti e basculanti, utilizzando prodotti di alta qualità per garantirne l'affidabilità e la durata.",
            image: automazioneimg,
        }
    ];
    

  return (
    <div className="containerServices padding20" id="service-section">
      <h1 className="text-center" >I Nostri Servizi</h1>
      {servicesData.map((service, index) => (
        <ServicesCard
        key={index}
        title={service.title}
        description={service.description}
        image={service.image}
        isImageRight= {index % 2 !== 0}
        />
      ))}
    </div>
  );
};

export default SectionServices;
