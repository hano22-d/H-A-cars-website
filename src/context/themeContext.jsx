import { createContext } from "react";
import { useState } from "react";
import { useContext } from "react";

const ThemeContext = createContext();

function ThemeToggleProvider({ children }) {
  const [toggleMode, setToggleMode] = useState(true);

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
