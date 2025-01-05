import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const NightModeButton = ({ isNightMode, toggleTheme }) => {
  return (
    <button onClick={toggleTheme} className="night-mode-button">
      {isNightMode ? <FaSun /> : <FaMoon />}
    </button>
  );
};

export default NightModeButton;
