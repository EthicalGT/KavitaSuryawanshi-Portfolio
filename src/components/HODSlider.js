import React, { useEffect, useRef, useState } from "react";
import "../assets/css/HODSlider.css";
import best_research_award from "../assets/img/awards_img/best_research_award.jpeg";
import best_paper_award_trophy from "../assets/img/awards_img/best_paper_award_trophy.jpeg";
import session_chair_award from "../assets/img/awards_img/session_chair_award.jpeg";
import best_paper_it from "../assets/img/awards_img/best_paper_it.jpeg";

const slides = [
  {
    image: best_research_award,
    title: "Best Research Paper",
    description: "A Hybrid Deep Learning Framework for Early Detection and Classification of Eye Diseases presents an advanced AI-driven approach that leverages the strengths of multiple deep learning models to accurately detect and classify common eye diseases at an early stage.",
  },
  {
    image: session_chair_award,
    title: "Session Chair – International Conference",
    description:
      "Served as Session Chair at the International Conference on Sustainable Entrepreneurship and Startup Ecosystem: Global Challenges and Opportunities, held on 7th & 8th March 2025 at D. Y. Patil Institute of Management Studies, Akurdi, Pune.",
  },
  {
    image: best_paper_award_trophy,
    title: "Best Paper Award – National Conference",
    description:
      "Won the Best Paper Award in Technology Track at the National Conference on Sustainable Development Goals (SDGs): Technology and Management, held on 15th & 16th February 2024 at D. Y. Patil Institute of MCA & Management, Akurdi, Pune.",
  },
  {
    image: best_paper_it,
    title: "Best Paper Award – International Conference",
    description: "Won the Best Paper Award in Information Technology at the International Conference on Sustainable Entrepreneurship and Startup Ecosystem: Global Challenges & Opportunities, held on 7th & 8th March 2025 at Dr. D. Y. Patil Institute of Management Studies, Akurdi, Pune.",
  }
];

const HODSlider = () => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    timeoutRef.current = setTimeout(nextSlide, 4000);
    return () => clearTimeout(timeoutRef.current);
  }, [current]);

  return (
    <div className="slider-container">
      <div className="slider">
        {slides.map((slide, index) => (
          <div
            className={`slide ${index === current ? "active" : ""}`}
            key={index}
          >
            <div className="slide-image">
              <img src={slide.image} alt={slide.title} />
            </div>
            <div className="slide-content">
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
              <a href={slide.url}><button>View More</button></a>
            </div>
          </div>
        ))}
        <button className="nav-button prev" onClick={prevSlide}>
          &#10094;
        </button>
        <button className="nav-button next" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default HODSlider;
