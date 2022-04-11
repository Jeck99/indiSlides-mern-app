import "./slide.css";
import { useState } from "react";

function Slide({ slideItem }) {
  const [showSlide, setShowSlide] = useState(false);

  return (
    <div className="slide">
        <iframe
          title={slideItem.title}
          src={slideItem.link}
          frameBorder="0"
          width="100%"
          allowFullScreen={true}
        ></iframe>
    </div>
  );
}

export default Slide;
