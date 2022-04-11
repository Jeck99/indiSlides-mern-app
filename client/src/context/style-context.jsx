import { createContext } from "react";
import { useEffect, useState } from "react";

export const ThemeContext = createContext();
export const ThemeContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
    setDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);  
    }, []);

  return (
    <ThemeContext.Provider
      value={{darkMode,setDarkMode}}
    >
      {children}
    </ThemeContext.Provider>
  );
};
