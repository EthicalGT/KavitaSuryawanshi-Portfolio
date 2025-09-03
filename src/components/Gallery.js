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
import mca_orientation_program from "../assets/img/gallery_img/mca_orientation_program.jpeg";
import induction_program4 from "../assets/img/gallery_img/induction_progam4.jpeg";



const galleryItems = [
    {
        title: "International Conference 2025- IT Track",
        description: "Presented a keynote on AI and its role in smart education systems.",
        image: international_conference,
    },
    {
        title: "FYMCA Induction program session On Art of Decision Making",
        description: "Held FYMCA Induction program on Art of Decision Making for students.",
        image: induction_program,
        link: "https://www.linkedin.com/posts/dypimcam_were-excited-to-announce-that-the-fymca-activity-7249962960285028352-H6Wr?utm_source=social_share_video_v2&utm_medium=android_app&rcm=ACoAADsPqU4BQIYfcIJ_myWrLT3hBwmMN5Mjr_s&utm_campaign",
    },
    {
        title: "MCA Induction Program 2024",
        description: "Held Second Induction Program in DPIMCA for students.",
        image: induction_program2,
        link: "https://www.linkedin.com/posts/dypimcam_activity-7239920181920120833-IKh6/?utm_source=social_share_send&utm_medium=android_app&rcm=ACoAADsPqU4BQIYfcIJ_myWrLT3hBwmMN5Mjr_s&utm_campaign",
    },
    {
        title: "INDUCTION PROGRAM 2024 FY MCA",
        description: "Held a Induction Program in DPIMCA for FYMCA students.",
        image: induction_program3,
        link: "https://www.linkedin.com/posts/dypimcam_induction-program-2024-fy-mca-activity-7239531399785963521-xiir/?utm_source=social_share_send&utm_medium=android_app&rcm=ACoAADsPqU4BQIYfcIJ_myWrLT3hBwmMN5Mjr_s&utm_campaign",
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
    {
        title: "DYPIMCAM – MCA Orientation Program",
        description:
            "MCA Orientation Program 2024 conducted BY Dr Kavita Suryawanshi HOD,Vice Principal DYPIMCAM",
        image: mca_orientation_program,
        link: "https://www.linkedin.com/posts/dypimcam_mca-orientation-program-2024-conducted-by-activity-7246485671983366145-kPUK/?utm_source=social_share_send&utm_medium=android_app&rcm=ACoAADsPqU4BQIYfcIJ_myWrLT3hBwmMN5Mjr_s&utm_campaign",
    },
    {
        title: "MCA & MBA Induction Program",
        description:
            "The MCA & MBA Induction Program at D. Y. Patil Institute of Master of Computer Applications and Management sets the stage for future leaders and innovators.",
        image: induction_program4,
        link: "https://www.linkedin.com/posts/dypimcam_inductionprogram-futureleaders-newbeginnings-activity-7242942252342276096-AazD/?utm_source=social_share_send&utm_medium=android_app&rcm=ACoAADsPqU4BQIYfcIJ_myWrLT3hBwmMN5Mjr_s&utm_campaign",
    }
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
                                <a href={item.link}><button>View More</button></a>
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
