import { createContext } from "react";
import { useEffect, useState } from "react";
import { getAllSlides } from "../services/slides.service";

export const SlidesContext = createContext();
export const SlidesContextProvider = ({ children }) => {
  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllSlides().then((slides) => {
      setSlides(slides);
      setLoading(false);
    });
  }, []);

  return (
    <SlidesContext.Provider
      value={{slides,setSlides,loading}}
    >
      {children}
    </SlidesContext.Provider>
  );
};
