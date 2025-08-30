import React from "react";
import Slider from "react-slick";
import Achievements from "./Achievements";
import international_conference from "../assets/img/gallery_img/international_conference.jpeg";
import induction_program from "../assets/img/gallery_img/induction_program.jpeg";
import induction_program2 from "../assets/img/gallery_img/induction_program2.jpeg";
import induction_program3 from "../assets/img/gallery_img/induction_program3.jpeg";
import national_patent_granted from "../assets/img/gallery_img/national_patent_granted.jpg";
import best_paper_presentation from "../assets/img/gallery_img/best_paper_presentation.jpeg";
import second_international_patent from "../assets/img/gallery_img/second_international_patent.jpeg";
import third_international_patent_granted from "../assets/img/gallery_img/third_international_patent_granted.jpeg";




const galleryItems = [
    {
        title: "International Conference 2025- IT Track",
        description: "Presented a keynote on AI and its role in smart education systems.",
        image: international_conference,
    },
    {
        title: "FYMCA Induction program session On Art of Decision Making",
        description: "Received the Excellence in Teaching Award 2023.",
        image: induction_program,
    },
    {
        title: "MCA Induction Program 2024",
        description: "Delivered a talk at National Science Conference, Delhi.",
        image: induction_program2,
    },
    {
        title: "INDUCTION PROGRAM 2024 FY MCA",
        description: "Delivered a talk at National Science Conference, Delhi.",
        image: induction_program3,
    },
    {
        title: "National Patent Granted – Academic Leadership Scorecard",
        description:
            "Granted a National Patent for the invention 'Device and Software to Generate Academic Leadership Scorecard (ALS)', Patent No. 479602 by Government of India.",
        image: national_patent_granted,
    },
    {
        title: "Best Paper Presentation – International Conference",
        description:
            "Received recognition for winning the title of Best Paper Presentation at the International Conference on 'Synergy in Progress: Navigating the Future through Multidisciplinary Studies, Technology, Digitalisation, Sustainability and Research'.",
        image: best_paper_presentation,
    },
    {
        title: "Second International Patent Granted – Automatic Cleaning System",
        description:
            "Granted Second International Patent titled 'Automatic Cleaning System for White Boards' by Federal Republic of Germany and the President of German Patent and Trademark Office.",
        image: second_international_patent,
    },
    {
        title: "Third International Patent Granted – Rapid Book Access Device",
        description:
            "Granted Third International Patent for 'A Rapid Book Access Device' by Republic of South Africa, Randburg.",
        image: third_international_patent_granted,
    },
];

const Gallery = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: true,
        responsive: [
            {
                breakpoint: 768,
                settings: { arrows: false },
            },
        ],
    };

    return (
        <main>
            <div className="gallery-section">
                <h2 className="gallery-heading"><i class="fa-solid fa-camera-retro icon"></i>Glimpses of Contributions</h2>
                <Slider {...settings}>
                    {galleryItems.map((item, index) => (
                        <div className="gallery-slide" key={index}>
                            <img src={item.image} alt={item.title} className="gallery-img" />
                            <div className="gallery-caption">
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
            <Achievements />
        </main>
    );
};

export default Gallery;
