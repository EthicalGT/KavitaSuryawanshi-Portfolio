import Footer from "./Footer";
import FadeUpAnim from "./FadeUpAnim";
import atal_certificate_blockchain_2024 from "../assets/pdf/atal_certificate_blockchain_2024.pdf";
import excelr_fdp from "../assets/pdf/excelr_fdp.pdf";
import seventh_asia_africa_dev_program from "../assets/pdf/seventh_asia_africa_dev_program.pdf";
import research_paper_presentation_certificate from "../assets/pdf/research_paper_presentation_certificate.pdf";
import short_term_faculty_developmen_programme from "../assets/pdf/short_term_faculty_developmen_programme.pdf";
import dypimcam_fdp from "../assets/pdf/dypimcam_fdp.pdf";
import certificate_dr_kavita_suryawanshi from "../assets/pdf/certificate_dr_kavita_suryawanshi.pdf";
import dypimcam_iot_research_paper from "../assets/pdf/dypimcam_iot_research_paper.pdf";
import adop_certificate_2024 from "../assets/pdf/adop_certificate_2024.pdf";
import asia_africa_award_certificate from "../assets/pdf/asia_africa_award_certificate.pdf";
import faculty_dev_programs_certificate from "../assets/pdf/faculty_dev_programs_certificate.pdf";
import conference_certificate from "../assets/pdf/conference_certificate.pdf";
import participation_certificate from "../assets/pdf/participation_certificate.pdf";
import excelr_pdf_2 from "../assets/pdf/excelr_pdf-2.pdf";
import dypimcam_maize_crop_research_paper from "../assets/pdf/dypimcam_maize_crop_research_paper.pdf";
import ipr_webinar_certificate from "../assets/pdf/ipr_webinar_certificate.pdf";

const achievementsData = [
  {
    title: "AICTE Training and Learning (ATAL) Academy Faculty Development Program on Blockchain Technology",
    organization: "ALL INDIA COUNCIL FOR TECHNICAL EDUCATION, 2024",
    description: "Successfully participated & completed AICTE Training And Learning (ATAL) Academy Faculty Development Program on Blockchain Technology at DR. D. Y. PATIL INSTITUTE OF ENGINEERING MANAGEMENT RESEARCH from 08/01/2024 to 13/01/2024.",
    link: atal_certificate_blockchain_2024,
  },
  {
    title: "National Faculty Development Program on NLP, Computer Vision and Artificial Intelligence",
    organization: "Andhra Pradesh State Skill Development Corporation (APSSDC) in Collaboration with ExcelR Edtech Pvt. Ltd., 2023",
    description: "Participated in a 10 Hours National Faculty Development Program on NLP, Computer Vision and Artificial Intelligence organized by Andhra Pradesh State Skill Development Corporation (APSSDC) in Collaboration with ExcelR Edtech Pvt. Ltd. from 4th Dec to 8th Dec 2023.",
    link: excelr_fdp,
  },
  {
    title: "Research Paper Presentation: Harnessing Digital Technologies to Combat Fall Armyworm Infestation",
    organization: "7th Asia-Africa Development Conference, Summit & Awards 2024",
    description: "Participated & presented a research paper entitled 'Harnessing Digital Technologies to Combat Fall Armyworm Infestation: A Systematic Review for Sustainable Maize Crop' at the 7th Asia-Africa Development Conference, Summit and Awards 2024 on 1st and 2nd March 2024, jointly organized by Dr. D. Y. Patil Institute of Management Studies (DYPIMS), Pune and Institute of Industrial and Computer Management and Research (IICMR), Pune.",
    link: seventh_asia_africa_dev_program,
  },
  {
    title: "Research Paper: Sentiment analysis of student's reviews on online courses",
    organization: "Dr. Kavita Suryawanshi",
    description: "Sentiment analysis of student's reviews on online courses to identify and evaluate student satisfaction factors.",
    link: research_paper_presentation_certificate,
  },
  {
    title: "Short Term Faculty Development Programme on NEP 2020 Orientation & Sensitization",
    organization: "UGC -Malaviya Mission Teacher Training Centre, Savitribai Phule Pune University, 2024",
    description: "Completed the Short Term Faculty Development Programme on NEP 2020 Orientation & Sensitization under “Malaviya Mission Teacher Training Programme (MM-TTP)” of University Grants Commission (UGC) Organized by UGC -Malaviya Mission Teacher Training Centre (Formerly UGC- Human Resource Development Centre) Savitribai Phule Pune University, Pune -411007 from 23/09/2024 To 01/10/2024.",
    link: short_term_faculty_developmen_programme,
  },
  {
    title: "Faculty Development Program on Empowering Education through AI",
    organization: "D. Y. Patil Institute of MCA and Management, Akurdi, Pune, 2024",
    description: "Participated and successfully completed two days Faculty Development Program on 'Empowering Education through AI: Exploring Generative AI Applications for Enhanced Teaching, Research and HR Analytics' organised in Association with NtPM Pune Chapter from 11/01/2024 to 18/01/2024 at DyprMCAM.",
    link: dypimcam_fdp,
  },
  {
    title: "Workshop on Basics of Statistics and Machine Learning Techniques",
    organization: "MCA Department, Pimpri Chinchwad College of Engineering, Pune, 2024",
    description: "Completed a one-week intensive workshop on 'Basics of Statistics and Machine Learning Techniques' organized by the MCA Department, Pimpri Chinchwad College of Engineering, Pune from 29th January 2024 To 03rd February 2024.",
    link: certificate_dr_kavita_suryawanshi,
  },
  {
    title: "Paper Presentation: Smart Vision in Healthcare by Style Transfer & Architecture-Driven AI",
    organization: "National Conference on 'Sustainable Development Goals(SDGs): Technology & Management', D. Y. Patil Institute of MCA and Management, 2024",
    description: "Participated/Presented Paper Titled 'Smart Vision in Healthcare by Style Transfer & Architecture-Driven AI' at the National Conference on 'Sustainable Development Goals(SDGs): Technology & Management' organised by D.Y.Patil Institute of MCA and Management with Indian Society for Technical Education in 2024.",
    link: dypimcam_iot_research_paper,
  },
  {
    title: "Oral Presentation: Digital Maize Crop Guardian: Automated Identification of Fall Armyworm Infestation Using Computer Vision",
    organization: "4th International Conference on Agriculture Digitalization and Organic Production (ADOP 2024), Belarus",
    description: "Participated in the 4th International Conference on Agriculture Digitalization and Organic Production (ADOP 2024), June 6-8, 2024, with an Oral Presentation entitled: 'Digital Maize Crop Guardian: Automated Identification of Fall Armyworm Infestation Using Computer Vision'.",
    link: adop_certificate_2024,
  },
  {
    title: "Academic Excellence (Distinguished Academician Award)",
    organization: "Council for Sustainable Peace and Development & Dr. D. Y. Patil Institute of Management Studies (DYPIMS), Pune, 2022",
    description: "Presented to Dr. Kavita Suryawanshi from Dr. D. Y. Patil Institute of MCA and Management, Pune during the 6th Asia-Africa Development Conference, Summit and Awards 2022, jointly organized by Asia Africa Development Council Managed by the Council For Sustainable Peace and Development & Dr. D. Y. Patil Institute of Management Studies (DYPIMS), Pune on 1st & 2nd December 2022.",
    link: asia_africa_award_certificate,
  },
  {
    title: "Faculty Development Program: Train the Trainer",
    organization: "Dr D Y Patil Educational Complex, Akurdi, Pune, in Association with ISTE and Accurate Gauging and Instruments, Pune",
    description: "Contributed in design and delivery of Teaching Learning Methodology Modules for Faculty Development Program titled, 'Train the Trainer'.",
    link: faculty_dev_programs_certificate,
  },
  {
    title: "Paper Presentation: A Study of Social Issues in Rural Areas and Development of VILLAGEMITRA Application as a Sustainable Solution",
    organization: "International Conference on Global Issues In Multidisciplinary Academic Research, 2021",
    description: "Presented the paper titled 'A STUDY OF SOCIAL IS SUES PREVAILING IN R URAL AREAS AND DEVEL OPMENT OF VILLAGEMITRA APPLICATION AS A SUS TAINABLE SOLUTION' at the International Conference on Global Issues In Multidisciplinary Academic Research organized by Indian Academicians and Researchers Association in association with Rajabhat Maha Sarakham University, Thailand on 31st October 2021.",
    link: conference_certificate,
  },
  {
    title: "National Level Seminar on NAAC RAF & Sustainable Quality Assessment with NEP Implementation",
    organization: "PES MIBS, Nigdi, 2023",
    description: "Participated in Online One Day National Seminar on NAAC RAF & Sustainable Quality Assessment with NEP Implementation Organized by PES MIBS, Nigdi held on 7th January 2023.",
    link: participation_certificate,
  },
  {
    title: "Online International Faculty Development Program on NLP and ChatGPT APPLICATIONS",
    organization: "SECAB Institute of Engineering & Technology in Collaboration with ExcelR Edtech Pvt. Ltd., 2023",
    description: "Participated in 5 Days Online International Faculty Development Program on NLP and ChatGPT APPLICATIONS organized by SECAB Institute of Engineering & Technology in Collaboration with ExcelR Edtech Pvt. Ltd. from 14th Aug to 19th Aug 2023.",
    link: excelr_pdf_2,
  },
  {
    title: "Paper Presentation: Adaptive Maize Crop Surveillance using AI-Enabled Detection and Classification of Fall Armyworm for Optimized Farm Production",
    organization: "National Conference on 'Sustainable Development Goals(SDGs): Technology & Management', D. Y. Patil Institute of MCA and Management, 2024",
    description: "Participated/Presented Paper titled 'Adaptive Maize Crop Surveillance using AI-Enabled Detection and Classification of Fall Armyworm for Optimized Farm Production' at the National Conference on 'Sustainable Development Goals(SDGs): Technology & Management' organised by D.Y.Patil Institute of MCA and Management with Indian Society for Technical Education in 2024.",
    link: dypimcam_maize_crop_research_paper,
  },
  {
    title: "Webinar on Intellectual Property Rights (IPR)",
    organization: "DYPIMCAM",
    description: "Participated in a webinar on Intellectual Property Rights (IPR).",
    link: ipr_webinar_certificate,
  },
];




function Achievements() {
  return (
    <FadeUpAnim delay={200}>
      <main>

        <div className="achievements-descriptor">
          <span>
            I'm proud to share a few milestones that have shaped my journey as a
            researcher and scientist.
          </span>
        </div>

        <div className="achievements-container">
          {achievementsData.map(({ title, organization, description, link }, idx) => (
            <FadeUpAnim key={idx} delay={200}>
              <div className="block">
                <div className="title-flexbox">
                  <div className="title-icon">
                    <i className="fa fa-trophy" aria-hidden="true"></i>
                  </div>
                  <div className="title-heading">
                    <h3>{title}</h3>
                    <span>{organization}</span>
                  </div>
                </div>
                <p>{description}</p>
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <button>
                    <i className="fa-solid fa-eye"></i> See Recognition
                  </button>
                </a>
              </div>
            </FadeUpAnim>
          ))}
        </div>
        <FadeUpAnim><Footer /></FadeUpAnim>


      </main>
    </FadeUpAnim>
  );
}

export default Achievements;
