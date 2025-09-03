import { useState } from "react";
import Footer from "./Footer";
import FadeUpAnim from "./FadeUpAnim";

const activityData = [
    {
        heading: 'Induction Programs',
        icon: 'fa-graduation-cap',
        items: [
            {
                datetime: 'August 15, 2024',
                description: 'The FYMCA Induction Program session on "Art of Decision Making" was organized to help students develop critical thinking and decision-making skills essential for both academic and personal growth.',
            },
            {
                datetime: 'August 12, 2024',
                description: 'The Second MCA Induction Program 2024 was successfully conducted at DPIMCA, focusing on introducing students to the institution’s culture, academic structure, and opportunities for holistic development.',
            },
            {
                datetime: 'August 10, 2024',
                description: 'The FY MCA Induction Program 2024 provided a warm welcome to newly admitted students, offering guidance, motivation, and orientation towards their journey at DPIMCA.',
            }
        ]
    },
    {
        heading: 'Conferences & Workshops',
        icon: 'fa-tv',
        items: [
            {
                datetime: '10/08/2020 to 12/08/2020',
                description: '3 Days FDP on SWOT Analysis, Research & OBE. Participated in a three-day FDP focused on SWOT Analysis, Research, and Outcome-Based Education (OBE).',

            },
            {
                datetime: '01/05/2020 to 31/05/2020',
                description: 'Four Week Course on Environment and Sustainability [OE4BW]. Participated in a four-week course exploring principles of Environment and Sustainability.',

            },
            {
                datetime: '23/05/2020',
                description: 'FDP on Introduction to Agile Project Management & Tools. Participated in FDP organized by PCCoE, MCA Department on Agile Project Management and industry tools.',

            },
            {
                datetime: '30-31/07/2020',
                description: 'National Level FDP on Insights into Intellectual Property Rights. Participated in FDP organized by MCA department of Sinhgad Institute of Business Management and Research (SIBAR).',

            },
            {
                datetime: '27/01/2021 to 04/02/2021',
                description: 'Orientation Training Programme for Mentors of Higher Educational Institutions (HEIs). Participated in orientation training by National Institute of Technical Teachers Training and Research, Kolkata.',

            },
            {
                datetime: '02/02/2021 to 06/02/2021',
                description: 'AICTE Training And Learning (ATAL) Academy FDP on Sustainability Engineering. Participated in FDP on Sustainability Engineering organized by AICTE ATAL Academy.',

            },
            {
                datetime: '22/02/2021 to 26/02/2021',
                description: 'AICTE ATAL Academy FDP on Innovation Management. Participated in FDP focused on Innovation Management organized by AICTE ATAL Academy.',

            },
            {
                datetime: '08/03/2021',
                description: 'International Dialogue on Empowered Future – Women’s Role. Participated in an international dialogue discussing women’s role in the empowered future.',

            },
            {
                datetime: '31/10/2021',
                description: 'International Conference on Global Issues in Multidisciplinary Academic Research. Presented paper at the international conference on global issues in multidisciplinary research.',

            },
            {
                datetime: '15/02/2022 to 19/02/2022',
                description: 'STTP on Recent Trends in Cyber Security and Web Application Development. Participated in STTP organized by Department of Information Technology, D.Y. Patil College of Engineering, Pune.',

            },
            {
                datetime: '01/08/2022 to 05/08/2022',
                description: 'Workshop on Designing and Modelling of IoT, AI & ML Systems. Participated in workshop organized by AICTE ATAL Academy, Arm Education, and STMicroelectronics.',

            },
            {
                datetime: '15/02/2022 to 19/02/2022',
                description: '5 Day Workshop on Web Application Development. Participated in workshop conducted by D Y Patil College of Engineering, Akurdi.',

            },
            {
                datetime: '13/05/2022 to 14/05/2022',
                description: 'The Role of Emerging Technology - Generative Adversarial Network in Cyber Security. Presented paper on GANs applied to cyber security challenges.',

            },
            {
                datetime: '01/12/2022 to 02/12/2022',
                description: 'Green IT Transform Green Computing. Presented brief on advancements in green computing.',

            },
            {
                datetime: '14/03/2022 to 16/03/2022',
                description: 'International Workshop on Advanced Digital Technology in Agricultural Automation. Participated in workshop organized by NAHEP-CAAST and DFSRDA, focusing on digital farming solutions with robots, drones, and AGVs.',

            },
            {
                datetime: '29/04/2022',
                description: 'IP Awareness/Training Program under National Intellectual Property Awareness Mission. Participated in IP awareness and training program.',

            },
            {
                datetime: '19/12/2022 to 30/12/2022',
                description: 'Data Tech Lab Course on Architecting on AWS. Completed course on AWS architecture and deployment.',

            },
            {
                datetime: '29/09/2022 to 30/09/2022',
                description: 'Two Days Online International Workshop on Research Methodology. Participated in online international workshop focused on research methodology.',
            },
            {
                datetime: '02/02/2022 to 06/02/2022',
                description: 'Five Days Online AICTE ATAL FDP on Sustainability Engineering. Participated in online FDP organized by AICTE ATAL Academy on Sustainability Engineering.',
            },
            {
                datetime: '14/03/2022 to 16/03/2022',
                description: 'Workshop on Advanced Digital Technologies in Agricultural Automations. Participated in workshop on digital technologies applied to agriculture automation.',
            }

        ]
    },
    {
        heading: 'Student Activity',
        icon: 'fa-children',
        items: [
            {
                datetime: 'January 11, 2020',
                description: 'Expert Session on Fundamentals of Artificial Intelligence was conducted by Mrs. Veena Sarda, providing MCA-I and MCA-II students with insights into AI concepts, tools, and applications.',
            },
            {
                datetime: 'January 21, 2020',
                description: 'Orientation Session for SYMCA students was conducted by Dr. Kavita Suryawanshi, HOD, MCA, to guide and motivate students for the upcoming academic journey.',
            },
            {
                datetime: 'January 31, 2020',
                description: 'IT Assembly Session featured a Technical Quiz with rounds on organization logos, jingles, and puzzles, encouraging students to engage with IT knowledge in an interactive way.',
            },
            {
                datetime: 'February 22, 2020',
                description: 'Flip Class-Room Session was organized where students presented and discussed topics like Fog Computing, Intuitive AI, and Quantum Computing, helping them strengthen technical communication and collaborative learning.',
            },
            {
                datetime: 'February 29, 2020',
                description: 'IT Assembly Session highlighted advanced topics such as Brain-Computer Interface and Neuromorphic Computing, with students delivering talks and sharing the latest IT trends.',
            },
            {
                datetime: '2018',
                description: 'IT Assembly on Near Field Communication (NFC) introduced students to emerging technologies like NFC, automation testing, and portable power banks, enhancing their awareness of real-world applications.',
            },
            {
                datetime: 'January 27, 2018',
                description: 'TED Talk screening on "How Blockchain will radically transform the economy" by Bettina Warburg exposed students to blockchain concepts, its potential for disruption, and future IT opportunities.',
            }
        ]
    }
];

const ActivitiesContainer = () => {
    const [selected, setSelected] = useState(0);

    return (
        <>
            <FadeUpAnim>
                <div className="activities-heading">
                    <h2>Activities & Engagements</h2>
                    <p>A glance at our dynamic academic co-curricular culture.</p>
                </div>
            </FadeUpAnim>

            <div className="activitiesContainer">
                <div className="activityNavigations">
                    {activityData.map((tab, i) => (
                        <span
                            key={i}
                            className={`activityItem ${selected === i ? 'selected' : ''}`}
                            onClick={() => setSelected(i)}
                        >
                            <i className={`fa-solid ${tab.icon} icon`} style={{ marginRight: '8px' }}></i>
                            {tab.heading}
                        </span>
                    ))}
                </div>

                <div className="activityContent">
                    {activityData[selected].items.map((item, idx) => (
                        <div key={idx} className="itemBox">
                            <div className="itemTitle">{item.description.split('.')[0]}</div>
                            <div className="itemInfo">
                                <span>Date: {item.datetime}</span>
                                <p>{item.description}</p>
                            </div>

                        </div>
                    ))}
                </div>
            </div>

            <FadeUpAnim><Footer /></FadeUpAnim>
        </>
    );
};

export default ActivitiesContainer;
