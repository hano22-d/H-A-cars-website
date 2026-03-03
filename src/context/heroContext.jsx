import { createContext, useContext } from "react";
import { useState, useEffect } from "react";

const HeroContext = createContext("");

function HeroProvide({ children }) {
  const [progress, setProgress] = useState(0);
  const maxScroll = 500;

  useEffect(() => {
    let scrollme = () => {
      let scrolly = window.scrollY;
      let scrollProgress = scrolly / maxScroll;
      if (scrollProgress > 1) {
        scrollProgress = 1;
      }
      setProgress(scrollProgress);
    };
    window.addEventListener("scroll", scrollme);
    return () => {
      window.removeEventListener("scroll", scrollme);
    };
  }, []);

  return (
    <HeroContext.Provider value={{progress}}>{children}</HeroContext.Provider>
  );
}

export default HeroProvide

export function UseHeroContext() {
    return useContext(HeroContext);
  }
  