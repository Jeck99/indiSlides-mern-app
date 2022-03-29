import "./slide.css";
import { useState } from "react";

function Slide({ slideItem }) {
  const [showSlide, setShowSlide] = useState(false);

  return (
    <div className="slide">
      <div className="slide__image" onClick={() => setShowSlide(!showSlide)}>
        <div className="slide__title">
          {slideItem.title}
          </div>
      </div>
      {showSlide && (
        <iframe
          title={slideItem.title}
          src={slideItem.link}
          frameBorder="0"
          width="100%"
          allowFullScreen={true}
        ></iframe>
      )}
    </div>
  );
}

export default Slide;
