import "./slides.css";
import { useContext } from "react";
import SlideModal from "../../parts/slide-modal/slide-modal";
import {  SlidesContext} from "../../../context/slides-context";
const Slides = () => {
  const {slides,loading} = useContext(SlidesContext);

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
      </div>
  );
};

export default Slides;
