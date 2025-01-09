import React from "react";

const Contatti = () => {
  return (
    <div className="contatti-container">
      <h4 className="subtitle-footbar">Contatti</h4>
      <ul>
        <li>
          <a href="mailto:elektrallarm@gmail.com?subject=Richiesta%20informazioni&body=Ciao,%20ho%20bisogno%20di%20maggiori%20informazioni.">
            elektrallarm@gmail.com
          </a>
        </li>
        <li>
          <a href="tel:+393468704412" className="">
            +39 346 8704 412
          </a>
        </li>
        <li className="container-sede-footbar">
          <p className="sede-footbar">Sede:</p>
          <p>Cecina, 57023 (LI)</p>
        </li>
      </ul>
    </div>
  );
};

export default Contatti;
