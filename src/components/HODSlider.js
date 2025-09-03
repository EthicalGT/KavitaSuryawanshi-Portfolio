import React, { useEffect, useRef, useState } from "react";
import "../assets/css/HODSlider.css";
import best_research_award from "../assets/img/awards_img/best_research_award.jpeg";
import best_paper_award_trophy from "../assets/img/awards_img/best_paper_award_trophy.jpeg";
import session_chair_award from "../assets/img/awards_img/session_chair_award.jpeg";
import best_paper_it from "../assets/img/awards_img/best_paper_it.jpeg";
import session_chair_sfcepe_2022 from "../assets/img/awards_img/session_chair_sfcepe_2022.jpg";
import best_paper_emerging_trends_2010 from "../assets/img/awards_img/best_paper_emerging_trends_2010.jpg";
import session_chair_role_it_social_innovations_2019 from "../assets/img/awards_img/session_chair_role_it_social_innovations_2019.jpg";
import icdmai_2018 from "../assets/img/awards_img/icdmai_2018.jpg";
import session_chair_innovations_teaching_learning_2018 from "../assets/img/awards_img/session_chair_innovations_teaching_learning_2018.jpg";
import icca_2024_appreciation from "../assets/img/awards_img/icca_2024_appreciation.jpg";
import international_distinguished_women_scientist_award_2021 from "../assets/img/awards_img/international_distinguished_women_scientist_award_2021.jpg";
import academic_excellence_award_2022 from "../assets/img/awards_img/academic_excellence_award_2022.jpg";
import session_chair_dypims_icssbge_2024 from "../assets/img/awards_img/session_chair_dypims_icssbge_2024.jpg";
import best_researcher_award_2019 from "../assets/img/awards_img/best_researcher_award_2019.jpg";


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
  },
  {
    image: session_chair_sfcepe_2022,
    title: "Session Chair Appreciation",
    description: "Pimpri Chinchwad Education Trust's S. B. Patil Institute of Management, Pune is thankful for acting as Session Chair for NATIONAL CONFERENCE On SFCEPE-2022 held on 13th-14th May 2022."
  },
  {
    image: best_paper_emerging_trends_2010,
    title: "Best Paper Award",
    description: "Shree Chanakya Education Society's Indira Institute of Management (MCA), Pune awarded Best Paper in National Convention held on 29th & 30th April 2010 on the topic 'Emerging Trends in Information Technology 2010'."
  },
  {
    image: session_chair_role_it_social_innovations_2019,
    title: "Token of Gratitude as Session Chair",
    description: "D.Y. Patil College of Engineering, Akurdi, Pune awarded Token of Gratitude as Session Chair during ISTE Approved Two days National Conference on 'Role of Information Technology in Social Innovations' NCRITS12K19 on 26th and 27th February 2019."
  },
  {
    image: icdmai_2018,
    title: "ICDMAI 2018 Conference",
    description: "ATSS's Institute of Industrial & Computer Management and Research, Pune organized ICDMAI 2018 conference held on 19-21 Jan 2018 in association with other bodies."
  },
  {
    image: session_chair_innovations_teaching_learning_2018,
    title: "Session Chair - Innovations in Teaching Learning Process",
    description: "D.Y. Patil College of Engineering, Akurdi, Pune recognized Dr. Kavita Suryawanshi as Session Chair in National Symposium on Innovations in Teaching Learning Process on December 08, 2018 in association with Indian Society for Technical Education (ISTE) and College of Engineering, Pune (COEP)."
  },
  {
    image: icca_2024_appreciation,
    title: "Appreciation for Valuable Presence & Contribution",
    description: "Pimpri Chinchwad College of Engineering, Pune through IEEE Pune Section and IEEE Signal Processing Society (Pune Chapter) acknowledged presence and contributions in 8th International Conference on Computing, Communication, Control & Automation (ICCUBA - 2024) held on 23rd & 24th August 2024."
  },
  {
    image: international_distinguished_women_scientist_award_2021,
    title: "International Distinguished Women Scientist Award 2021",
    description: "Center for Professional Advancement recognized Dr. Kavita Yogesh Suryawanshi for pioneering superior performance in Green Computing during International Women's Day celebrations on 8th March 2021 at Vijayawada, Andhra Pradesh."
  },
  {
    image: academic_excellence_award_2022,
    title: "Academic Excellence (Distinguished Academician Award)",
    description: "Council for Sustainable Peace and Development awarded Dr. Kavita Suryawanshi for Academic Excellence on 1st & 2nd December 2022 during 6th Asia-Africa Development Conference, Summit and Awards held at Orchid Hotel, Balewadi, Pune."
  },
  {
    image: session_chair_dypims_icssbge_2024,
    title: "Session Chair Appreciation",
    description: "Dr. D. Y. Patil Institute of Management Studies recognized Dr. Kavita Suryawanshi as Session Chair at 7th Asia-Africa Development Conference, Summit and Awards 2024 held on 1st & 2nd March 2024."
  },
  {
    image: best_researcher_award_2019,
    title: "Best Researcher of the Year 2019",
    description: "Centre for Education Growth and Research (CEGR) recognized Dr. Kavita Yogesh Suryawanshi with Best Researcher of the Year 2019 award for outstanding contribution to education, skill and research on 18th April 2019 at The Eros, Nehru Place, New Delhi."
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