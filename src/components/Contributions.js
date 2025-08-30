import React, { useState } from 'react';
import Footer from './Footer';
import FadeUpAnim from './FadeUpAnim';

//imports
import img_0001 from "../assets/certificates/img_0001.pdf";
import img_0002 from "../assets/certificates/img_0002.pdf";
import img_0003 from "../assets/certificates/img_0003.pdf";
import img_0004 from "../assets/certificates/img_0004.pdf";
import img_0005 from "../assets/certificates/img_0005.pdf";
import img_0006 from "../assets/certificates/img_0006.pdf";
import img_0007 from "../assets/certificates/img_0007.pdf";
import img_0008 from "../assets/certificates/img_0008.pdf";
import img_0009 from "../assets/certificates/img_0009.pdf";
import img_0010 from "../assets/certificates/img_0010.pdf";
import img_0011 from "../assets/certificates/img_0011.pdf";
import img_0012 from "../assets/certificates/img_0012.pdf";
import img_0013 from "../assets/certificates/img_0013.pdf";
import img_0014 from "../assets/certificates/img_0014.pdf";
import img_0015 from "../assets/certificates/img_0015.pdf";
import img_0016 from "../assets/certificates/img_0016.pdf";
import img_0017 from "../assets/certificates/img_0017.pdf";


const tabs = [
    { id: 'publications', label: 'Publications', icon: 'fa-book' },
    { id: 'research', label: 'Research Papers', icon: 'fa-sheet-plastic' },
    { id: 'copyrights', label: 'Copyrights', icon: 'fa-newspaper' },
    { id: 'certifications', label: 'Certifications', icon: 'fa-award' },
];

const content = {
    publications: [
        {
            title: 'Python Programming',
            info: ['Publisher: Success Publications', 'Year: 2019', 'ISBN: 978-93-88441-71-1'],
            link: '#',
        },
        {
            title: 'Java Programming',
            info: ['Publisher: TechKnowledge Publications', 'Year: 2022', 'ISBN: 978-93-90428-50-2'],
            link: '#',
        },
        {
            title: 'Network Technologies',
            info: ['Publisher: TechKnowledge Publications', 'Year: 2021', 'ISBN: 978-93-90428-50-2'],
            link: '#',
        },
        {
            title: 'A Survey on Big Data Analytics and Its Challenges',
            info: ['Publisher: High Rise Books', 'Date: 14/12/2021', 'ISBN: 979-8782275655'],
            link: '#',
        },
        {
            title: 'AI in Education',
            info: ['Journal: Journal of Innovative Research', 'Year: 2023', 'Publisher: IR Publications'],
            link: '#',
        },
        {
            title: 'Data Analytics for Smart Cities',
            info: ['Journal: Elsevier', 'Year: 2022'],
            link: '#',
        },
    ],
    research: [
        {
            title: 'Tweet Segmentation and Classification Using K-means and SVM Algorithm',
            info: [
                'Author: Dr. Kavita Suryawanshi',
                'Conference: Two Days Conference on Role of Information Technology in Social Innovations, Dept. of IT, D Y Patil College of Engineering, Akurdi',
                'Pages: 42-45',
                'Year: 2019'
            ],
            link: '#',
        },
        {
            title: 'JIGISHA: Online Higher Education for Girls in Rural Area',
            info: [
                'Author: Dr. Kavita Suryawanshi',
                'Conference: Innovation in Computer Science and Information Technology for Sustainability',
                'Pages: 1-3',
                'Year: 2020'
            ],
            link: '#',
        },
        {
            title: 'Innovative Entrepreneurship in India for Sustainable Economy Development',
            info: [
                'Author: Dr. Kavita Suryawanshi',
                'Conference: Transforming Through Reinvention In The Current Emerging Global Order 2020',
                'Pages: -',
                'Year: 2021'
            ],
            link: '#',
        },
        {
            title: 'Digital Solutions for the Management of Maize Plants Infested by Fall Armyworm (FAW) (Spodoptera frugiperda)',
            info: [
                'Authors: Dr. Kavita Suryawanshi, MS. Monica Shinde',
                'Conference: International Conference On Computational Intelligence And Innovative Technologies',
                'Pages: 8',
                'Date: 16th & 17th April 2022'
            ],
            link: '#',
        },
        {
            title: 'Pest Detection and Identification in Infested Plants using Digital Images in Agriculture',
            info: [
                'Authors: Dr. Kavita Suryawanshi, MS. Monica Shinde',
                'Conference: International Conference on Communication and Intelligent Systems',
                'Pages: 1-10',
                'Date: 19 & 20 Dec. 2022'
            ],
            link: '#',
        },
        {
            title: "Sentiment analysis of student's reviews on online courses to identify and evaluate student satisfaction factors",
            info: [
                'Author: Dr. Kavita Suryawanshi',
                'Conference: International Conference TIES 2024, Vivekanand Education Society’s Institute of Management Studies and Research, Mumbai',
                'Date: 2nd April to 6th April 2024'
            ],
            link: '#',
        },
        {
            title: 'Utilizing Digital Solutions for Fall Armyworm (FAW) Infestation Management in Maize Plants',
            info: [
                'Author: Dr. Kavita Suryawanshi',
                'Conference: Emerging Technologies, Analytics and Operations (ICETAO 2024)',
                'Date: March 24, 2024'
            ],
            link: '#',
        },
        {
            title: 'A Systematic Review of Digital Techniques for controlling Fall-Armyworm infestation to Enhance sustainability in Maize Crop Production',
            info: [
                'Author: Dr. Kavita Suryawanshi',
                'Conference: 12th International conference on Recent Challenges in Engineering and Technology (ICRCET-2024)',
                'Date: 23th & 24th April 2024'
            ],
            link: '#',
        },
        {
            title: 'Digital Maize Crop Guardian: Automated Identification of Fall Armyworm Infestation using Computer Vision',
            info: [
                'Author: Dr. Kavita Suryawanshi',
                'Conference: 4th International Conference on Agriculture Digitalization and Organic Production (ADOP 2024)',
                'Date: 6th & 7th June 2024'
            ],
            link: '#',
        },
        {
            title: 'Improving Maize Crop Sustainability: Utilizing AI for Enhanced Detection and Control of Armyworm Infestations to maximize product efficiency to improve rural economy',
            info: [
                'Author: Dr. Kavita Suryawanshi',
                'Conference: International Conference 2024- Viksit Bharat 2047 Pioneering Transformation And Shaping Global Business Landscape',
                'Date: 8th & 9th March 2024'
            ],
            link: '#',
        },
        {
            title: 'AI Driven Digital Transformation: Revolutionizing Maize Crop Protection Against Fall Armyworm',
            info: [
                'Author: Dr. Kavita Suryawanshi',
                'Conference: ICMDISR',
            ],
            link: '#',
        },
        {
            title: 'Renting Farming Equipment from Another Farmer During their Non-Cultivation Period',
            info: [
                'Author: Dr. Kavita Suryawanshi',
                'Conference: International Journal of Research Publication and Reviews, Volume 5, Issue 6',
                'ISSN: 2582-7421',
                'Date: 10/06/2024'
            ],
            link: '#',
        },
        {
            title: 'Advancing Maize Crop Sustainability: AI Enhanced Detection and Mitigation of Fall Armyworm Infestations for Optimal Production',
            info: [
                'Author: Dr. Kavita Suryawanshi',
                'Conference: National Conference on Sustainable Development Goals (SDG’s) : Technology & Management',
                'Date: 15/02/2024 to 16/02/2024'
            ],
            link: '#',
        },
        {
            title: 'Innovation in Healthcare by implementing IoT Application to achieve Sustainability: A Study from Indian Perspective',
            info: [
                'Author: Dr. Kavita Suryawanshi',
                'Conference: National Conference on Sustainable Development Goals (SDG’s) : Technology & Management, Computology',
                'Date: 15/02/2024 to 16/02/2024'
            ],
            link: '#',
        },
        {
            title: 'Harnessing Digital Technologies to Combat Fall Armyworm Infestation: A Systematic Review for Sustainable Maize Crop',
            info: [
                'Author: Dr. Kavita Suryawanshi',
                'Conference: 6th ASIA-AFRICA Development Conference, Summit & Awards-2024',
                'Date: 01/03/2024 to 02/03/2024'
            ],
            link: '#',
        }
    ],

    copyrights: [
        {
            title: 'Crop Predictor: KrishiDoot',
            info: ['Registration No: L-113362/2022', 'Class: Literary/Dramatic Work', 'Status: Registered'],
            link: 'https://drive.google.com/file/d/1FGnROEPSIS287UCLzDrxOmXxlc7x9h3a/view?usp=sharing',
        },
        {
            title: 'Augmented Reality Based E-Learning: Nexar',
            info: ['Registration No: L-113404/2022', 'Class: Literary/Dramatic Work', 'Status: Registered'],
            link: '#',
        },
        {
            title: 'CLICKNGOVEHICLE',
            info: ['Registration No: SW-16692/2023', 'Class: Computer Software', 'Language: Java', 'Status: Registered'],
            link: '#',
        },
        {
            title: 'GADGET PRICE AND SALES FORECASTING',
            info: ['Registration No: SW-16719/2023', 'Class: Computer Software', 'Language: Python', 'Status: Registered'],
            link: '#',
        },
        {
            title: 'SMART IGNIS: WILDFIRE PROBLEM SOLUTION',
            info: ['Registration No: L-125647/2023', 'Class: Literary/Dramatic Work', 'Language: English', 'Status: Registered'],
            link: '#',
        },
        {
            title: 'THE METRO TRACKING SYSTEM',
            info: ['Registration No: SW-18462/2024', 'Class: Computer Software', 'Language: Java', 'Status: Registered'],
            link: '#',
        },
        {
            title: 'Crop Predictor: KrishiDoot',
            info: ['Diary No: 920/2022-CO/L', 'Status: Pending', 'Issue: Title discrepancy'],
            link: '#',
        },
        {
            title: 'Carbon Emission Calculator',
            info: ['Diary No: 754/2024-CO/SW', 'Status: Pending', 'Issue: Clarification on work & NOC required'],
            link: '#',
        },
    ],
    certifications: [
        {
            "title": "8th Asia-Africa Development International Conference, Summit and Awards 2025",
            "info": ["Organized by: Dr. D. Y. Patil Institute of Management Studies", "Date: 28th February - 1st March 2025"],
            "link": img_0017
        },
        {
            "title": "National Conference on Sustainable Development Goals (SDGs): Technology & Management",
            "info": ["Paper: Innovation in Healthcare by Implementing TOT Application", "Date: 15-16 February 2024"],
            "link": img_0016
        },
        {
            "title": "International Conference on Sustainable Entrepreneurship and Startup Ecosystem",
            "info": ["Paper: Innovation and Sustainable Growth - The role of Cloud Computing", "Date: 7-8 March 2025"],
            "link": img_0015
        },
        {
            "title": "International Conference on Sustainable Entrepreneurship and Startup Ecosystem",
            "info": ["Paper: A Hybrid Deep Learning Framework for Early Detection of Eye Diseases", "Date: 7-8 March 2025"],
            "link": img_0014
        },
        {
            "title": "International Conference on Sustainable Entrepreneurship and Startup Ecosystem",
            "info": ["Paper: Urban Flow - Revolutionizing Traffic Flow with Sustainable Tech", "Date: 7-8 March 2025"],
            "link": img_0013
        },
        {
            "title": "National Seminar on Innovation and Intellectual Property Rights",
            "info": ["Paper: A Review of Innovation and Sustainability in computing", "Date: 9-10 February 2024"],
            "link": img_0012
        },
        {
            "title": "Faculty Development Program on Empowering Education through AI",
            "info": ["Organized with NIPM Pune Chapter", "Date: 17-18 January 2024"],
            "link": img_0011
        },
        {
            "title": "Best Paper Award - National Conference on Sustainable Development Goals",
            "info": ["Paper: Advancing Maize Crop Sustainability: AI-Enhanced Detection", "Date: 15-16 February 2024"],
            "link": img_0010
        },
        {
            "title": "National Conference on Sustainable Development Goals (SDGs): Technology & Management",
            "info": ["Paper: Advancing Maize Crop Sustainability", "Date: 15-16 February 2024"],
            "link": img_0009
        },
        {
            "title": "7th Asia-Africa Development Conference, Summit & Awards 2024",
            "info": ["Paper: Harnessing Digital Technologies to Combat Fall Armyworm Infestation", "Date: 1-2 March 2024"],
            "link": img_0006
        },
        {
            "title": "Session Chair - 8th IEEE International Conference ICCUBEA-2024",
            "info": ["Pimpri Chinchwad College of Engineering", "Date: 23-24 August 2024"],
            "link": img_0007
        },
        {
            "title": "Session Chair Certificate - 8th IEEE ICCUBEA-2024",
            "info": ["IEEE Conference Record Number 61740", "Date: 23-24 August 2024"],
            "link": img_0008
        },
        {
            "title": "Reviewer Certificate - International Conference NTAI 2025",
            "info": ["Nextgen Technology and AI for Sustainable Future", "Date: 12-13 April 2025"],
            "link": img_0004
        },
        {
            "title": "SPPU Project Viva-voce Examiner 2024",
            "info": ["Suryadatta Institute of Management & Mass Communication", "Date: 24 May 2024"],
            "link": img_0002
        },
        {
            "title": "Session Chair Person - 7th Asia-Africa Development Conference 2024",
            "info": ["Jointly organized by DYPIMS and IICMR", "Date: 1-2 March 2024"],
            "link": img_0001
        },
        {
            "title": "International Conference on Nextgen Technology and AI for Sustainable Future",
            "info": ["Paper: Early detection of FAW in maize using CNN & MobileNetV2", "Date: 12-13 April 2025"],
            "link": img_0005
        },
        {
            "title": "External Examiner - MCA University Project Viva April/May 2024",
            "info": ["Institute of Industrial & Computer Management & Research", "Date: 30 May 2024"],
            "link": img_0003
        }
    ],
};

function Contributions() {
    const [activeTab, setActiveTab] = useState('publications');

    return (
        <main>
            <FadeUpAnim>
                <div className="contribHeaderContainer">
                    <div className="headerLeft">
                        <h2 className="headerTitle">Academic Contributions</h2>
                        <p>
                            Highlighting my journey through publications, research, and recognitions.
                        </p>
                        <p>
                            Over the past two decades, my academic pursuits have led to impactful publications and research that shape the future of education and technology. This section consolidates my scholarly achievements and professional recognitions, serving as a transparent record of my dedication to advancing knowledge and fostering learning.
                        </p>
                    </div>
                </div>
            </FadeUpAnim>

            <div className="contributionsContainer">
                <FadeUpAnim>
                    <div className="tabButtonsContainer">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                className={`tabButton ${activeTab === tab.id ? 'active' : ''}`}
                                onClick={() => setActiveTab(tab.id)}
                            >
                                <i className={`fa-solid ${tab.icon} icon`} style={{ marginRight: '8px' }}></i>
                                {tab.label}
                            </button>
                        ))}

                    </div>
                </FadeUpAnim>
                <FadeUpAnim>
                    <div className="tabContentContainer">
                        <div className="tabContent">
                            {content[activeTab].map((item, index) => (
                                <div className="itemBox" key={index}>
                                    <div className="itemTitle">{item.title}</div>
                                    <div className="itemInfo">
                                        {item.info.map((line, i) => (
                                            <span key={i}>{line}</span>
                                        ))}
                                        {item.link && item.title !== "" && !["research", "publications"].includes(activeTab) && (
                                            <span>
                                                <a href={item.link} target="_blank" rel="noopener noreferrer">View</a>
                                            </span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </FadeUpAnim>

            </div>
            <Footer />
        </main >
    );
}

export default Contributions;
