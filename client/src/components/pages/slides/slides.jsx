import "./slides.css";
import { useEffect, useState } from "react";
import Slide from "../../parts/slide/slide";
import { getStudents } from "../../../services/student.service";

const Slides = ()=> {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    getStudents().then((students) => {
      setSlides(students);
    });
  }, []);
  return (
    <div className="slides">
      <h1>slides page</h1>
      {slides?.map((slideItem, index) => (
        <Slide key={index} slideSrc={slideItem.link} />
      ))}
    </div>
  );
}

export default Slides;
