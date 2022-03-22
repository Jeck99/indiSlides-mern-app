import "./slide.css";
import React from "react";

function Slide({ slideSrc,title }) {
  return (
    <iframe
      title={title}
      src={slideSrc}
      frameBorder="0"
      width="960"
      height="569"
      allowFullScreen={true}
    ></iframe>
  );
}

export default Slide;
