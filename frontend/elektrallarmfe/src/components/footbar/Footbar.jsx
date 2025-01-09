import React from "react";

import Contatti from "./footbar-components/Contatti";
import "./Footbar.scss";


const Footbar = () => {
  return (
    <div className="container-footbar">
      <div>
        <h3 className="elektrallarm-footbar">ELEKTRALLARM</h3>{" "}
      </div>
      <Contatti />
    </div>
  );
};

export default Footbar;
