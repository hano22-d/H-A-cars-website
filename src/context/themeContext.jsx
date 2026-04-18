import { createContext, useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";

const ThemeContext = createContext();

function ThemeToggleProvider({ children }) {
  const [toggleMode, setToggleMode] = useState(() => {
    const saved = JSON.parse(localStorage.getItem("theme"));
    return saved !== null ? saved : true;
  });
  console.log(toggleMode);

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(toggleMode));
  }, [toggleMode]);

  function toggleModeChange() {
    setToggleMode((prev) => !prev);
    console.log(toggleMode);
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
