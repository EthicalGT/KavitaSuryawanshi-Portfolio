import photograph from '../assets/img/photograph.png';
import FadeUpAnim from './FadeUpAnim';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import HODSlider from './HODSlider';


function HeaderInfo() {
    return (
        <>

            <section>
                <FadeUpAnim>
                    <div className="header-info">
                        <div className="author-pic">
                            <img src={photograph} alt="author-img" />
                        </div>
                        <div className="author-info">
                            <h1>Hi, I'm Dr. Kavita Suryawanshi</h1>
                            <span>Head of Department (MCA) | Vice Principal (DYPIMCA)</span>
                            <p>Dr. Kavita Suryawanshi is a distinguished academician and visionary leader with over two decades of experience in the field of MCA & Research. As the Head of Department, i have consistently demonstrated exemplary dedication towards fostering academic excellence, pioneering innovative research, and nurturing a collaborative learning environment.</p>
                            <div className="action-btn-container">
                                <Link to="/aboutme"><button>About Me</button></Link>
                                <Link to="/contactme"><button id="special-btn">Contact Me</button></Link>
                            </div>
                        </div>
                    </div>
                </FadeUpAnim>
                <FadeUpAnim>
                    <HODSlider />
                </FadeUpAnim>
                <FadeUpAnim>
                    <h1 id="career-heading">Career Highlights</h1>
                    <div className="recordsContainer">
                        <div className="record">
                            <h2>6</h2>
                            <span>Publications</span>
                        </div>
                        <div className="record">
                            <h2>5</h2>
                            <span>Awards</span>
                        </div>
                        <div className="record">
                            <h2>15</h2>
                            <span>Years of Experience</span>
                        </div>
                        <div className="record">
                            <h2>11</h2>
                            <span>Research Projects</span>
                        </div>
                    </div>
                </FadeUpAnim>
                <FadeUpAnim>
                    <div className="affiliations-container">
                        <h2>Professional Affiliations</h2>
                        <div className="affiliation-box-container">
                            <div className="affiliation-box">
                                <svg width="100" height="100" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="32" cy="20" r="12" fill="none" stroke="#1E3A8A" stroke-width="2" />
                                    <rect x="16" y="36" width="32" height="20" rx="5" fill="none" stroke="#1E3A8A" stroke-width="2" />
                                    <path d="M20 56c0-6.627 5.373-12 12-12s12 5.373 12 12" fill="none" stroke="#1E3A8A" stroke-width="2" />
                                </svg>


                                <h3>Head of Department</h3>
                                <p>DYPIMCAM, Akurdi</p>
                            </div>
                            <div className="affiliation-box">
                                <svg width="100" height="100" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="22" cy="22" r="10" fill="none" stroke="#1E3A8A" stroke-width="2" />
                                    <rect x="12" y="38" width="20" height="12" fill="none" stroke="#1E3A8A" stroke-width="2" />
                                    <line x1="38" y1="38" x2="54" y2="54" stroke="#1E3A8A" stroke-width="4" />
                                    <circle cx="38" cy="38" r="6" fill="none" stroke="#1E3A8A" stroke-width="2" />
                                </svg>
                                <h3>Researcher</h3>
                                <p>Research Paper Designer</p>
                            </div>
                            <div className="affiliation-box">
                                <svg width="100" height="100" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="32" cy="18" r="10" fill="none" stroke="#1E3A8A" stroke-width="2" />
                                    <rect x="20" y="34" width="24" height="18" rx="4" fill="none" stroke="#1E3A8A" stroke-width="2" />
                                    <polygon points="32,34 28,52 36,52" fill="none" stroke="#1E3A8A" stroke-width="2" />
                                    <circle cx="46" cy="38" r="4" fill="none" stroke="#1E3A8A" stroke-width="2" />
                                </svg>
                                <h3>Vice-principal</h3>
                                <p>DYPIMCAM, Akurdi</p>
                            </div>
                        </div>
                    </div>
                </FadeUpAnim>
            </section>
            <FadeUpAnim>
                <Footer />
            </FadeUpAnim>
        </>
    );
}
export default HeaderInfo;