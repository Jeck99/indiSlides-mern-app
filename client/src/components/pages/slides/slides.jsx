import "./slides.css";
import { useEffect, useState } from "react";
import Slide from "../../parts/slide/slide";
import { getAllSlides } from "../../../services/slides.service";

const Slides = ()=> {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    getAllSlides().then((slides) => {
      setSlides(slides);
    });
  }, []);
  return (
    <div className="slides">
      <h1>slides page</h1>
      <div className="slidesCards">
        {slides?.map((slideItem, index) => (
        <Slide key={index} slideItem={slideItem}/>
      ))}      
      </div>

    </div>
  );
}

export default Slides;
