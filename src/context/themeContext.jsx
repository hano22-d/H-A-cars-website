import { createContext, useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";

const ThemeContext = createContext();

function ThemeToggleProvider({ children }) {

  const [toggleMode, setToggleMode] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved !== null ? saved : true;
  });
  
useEffect(() => {
  localStorage.setItem('theme',toggleMode);
},[toggleMode])

  function toggleModeChange() {
    setToggleMode((prev) => !prev);
  }

  return (
    <ThemeContext.Provider value={{ toggleMode, toggleModeChange }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeToggleProvider;

export function UsethemeToggle() {
  return useContext(ThemeContext);
}
