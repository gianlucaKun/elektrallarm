import React from "react";

import Contatti from "./footbar-components/Contatti";
import "./Footbar.scss";


const Footbar = () => {
  return (
    <div>
    <div className="container-footbar">
      <div>
        <h3 className="elektrallarm-footbar">ELEKTRALLARM</h3>{" "}
      </div>
      <Contatti />
    </div>
    <p className="piedipagina">2024© all right reserved by Elektrallarm |  Cecina, Livorno | Web site created by Gianluca Andreoni</p>
    </div>
  );
};

export default Footbar;
