import "./slides.css";
import { useEffect, useState } from "react";
import Slide from "../../parts/slide/slide";
import { getAllSlides } from "../../../services/slides.service";
import SlideModal from "../../parts/slide-modal/slide-modal";

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
    <div className="slides" id="main-section">
      {loading ? (
        <div>
          <span>loading...</span>
          <img src="loading-gif.jpg" alt="loading" />{" "}
        </div>
      ) : (
        <>
          <h1>עמוד מצגות</h1>
          <div id="slides-imgs">
          {slides?.map((slideItem, index) => (
            <SlideModal key={index} slideItem={slideItem} />
            ))}
          </div>{" "}
        </>
      )}

      {/* {loading ? (

      ) : (
        <div className="slidesCards">
          {slides?.map((slideItem, index) => (
            <Slide key={index} slideItem={slideItem} />
          ))}
        </div>
      )} */}
    </div>
  );
};

export default Slides;
