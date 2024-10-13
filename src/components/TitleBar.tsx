import { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export const TitleBar = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    // Setze das data-theme Attribut auf dem document.documentElement entsprechend dem aktuellen theme Wert
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]); // Führe diese Funktion aus, wenn der theme Wert aktualisiert wird

  const toggleTheme = () => {
    // Ändere das theme von light zu dark und umgekehrt
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="titleBar">
      {/* <h2>Sebastian</h2> */}
      <a href="#about">About</a>
      <button onClick={toggleTheme}>
        {theme === "light" ? <FaMoon /> : <FaSun />}
      </button>
      <a href="#projects">Projects</a>
      {/* <h2>Falter</h2> */}
    </div>
  );
};
