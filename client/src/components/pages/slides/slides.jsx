import "./slides.css";
import { useEffect, useState } from "react";
import Slide from "../../parts/slide/slide";
import { getAllSlides } from "../../../services/slides.service";

const Slides = () => {
  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllSlides().then((slides) => {
      setSlides(slides);
      setLoading(false);
    });
  }, []);
  return (
    <div className="slides">
      <h1>slides page</h1>
      {loading ? (
        <div>
          <span>loading...</span>
          <img src="loading-gif.jpg" alt="loading" />{" "}
        </div>
      ) : (
        <div className="slidesCards">
          {slides?.map((slideItem, index) => (
            <Slide key={index} slideItem={slideItem} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Slides;
