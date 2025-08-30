import FadeUpAnim from "./FadeUpAnim";
import Footer from "./Footer";

function Qualification() {
    return (
        <FadeUpAnim>
            <main>
                <FadeUpAnim delay={200}>
                    <div class="education-timeline">
                        <h2>Education</h2>
                        <div class="timeline">
                            <div class="timeline-item">
                                <i class="fa-solid fa-user-graduate icon"></i>
                                <div class="timeline-content">
                                    <h3>Master of Computer Applications</h3>
                                    <span class="date">2004</span>
                                    <p>North Maharashtra University, Jalgaon</p>
                                </div>
                            </div>
                            <div class="timeline-item">
                                <i class="fa-solid fa-user-graduate icon"></i>
                                <div class="timeline-content">
                                    <h3>Ph.D</h3>
                                    <span class="date">2015</span>
                                    <p>North Maharashtra University, Jalgaon</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </FadeUpAnim>
                <FadeUpAnim delay={200}>
                    <div class="education-timeline">
                        <h2>Experience</h2>
                        <div class="timeline">
                            <div class="timeline-item">
                                <i class="fa-solid fa-briefcase icon"></i>
                                <div class="timeline-content">
                                    <h3>Associate Professor</h3>
                                    <p>DYP Institute of MCA & Management, Akurdi</p>
                                </div>
                            </div>
                            <div class="timeline-item">
                                <i class="fa-solid fa-briefcase icon"></i>
                                <div class="timeline-content">
                                    <h3>Assistant Professor</h3>
                                    <p>DYP Institute of MCA & Management, Akurdi</p>
                                </div>
                            </div>
                            <div class="timeline-item">
                                <i class="fa-solid fa-briefcase icon"></i>
                                <div class="timeline-content">
                                    <h3>Assistant Professor</h3>
                                    <p>JSPM'S Rajarshi Shahu College of Engineering, Tathwade</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </FadeUpAnim>
            </main>
            <Footer />
        </FadeUpAnim>
    );
}

export default Qualification;