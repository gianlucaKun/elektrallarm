import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.scss";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Header from "./components/header/Header";
import { useEffect, useState } from "react";
import NightModeButton from "./custom-components/NightModeButton";

const App = () => {
  // Verifica il valore del tema nel localStorage
  const savedTheme = localStorage.getItem('theme');
  const initialTheme = savedTheme ? savedTheme === 'night' : false;

  const [isNightMode, setIsNightMode] = useState(initialTheme);

  useEffect(() => {
    // Applica il tema al caricamento della pagina
    if (isNightMode) {
      document.body.classList.add('night');
      document.body.classList.remove('day');
    } else {
      document.body.classList.add('day');
      document.body.classList.remove('night');
    }

    // Salva la preferenza del tema nel localStorage
    localStorage.setItem('theme', isNightMode ? 'night' : 'day');
  }, [isNightMode]); // Ogni volta che isNightMode cambia, il tema viene aggiornato

  const toggleTheme = () => {
    setIsNightMode(prevMode => !prevMode);
  };

  return (
    <Router>
      <div>
        <NightModeButton isNightMode={isNightMode} toggleTheme={toggleTheme} />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
