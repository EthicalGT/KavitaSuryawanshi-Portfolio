import FadeUpAnim from "./FadeUpAnim";
import Footer from "./Footer";

function AboutMe() {
    return (
        <FadeUpAnim>
            <main>
                <FadeUpAnim>
                    <h2 id="about-header">About Me</h2>
                    <div className="about-desc">
                        <p>
                            I’m <strong>Dr. Kavita Suryawanshi</strong>, an academician, leader, and lifelong learner with over two decades of experience in <em>Computer Science and Engineering</em>. My career has been dedicated to nurturing academic excellence, promoting ethical learning, and guiding students to become future-ready professionals.
                        </p>

                        <h3>Academic Journey</h3>
                        <p>
                            My professional path began with a strong foundation in computer science, and over the years, I’ve grown from a lecturer to the Head of Department. Each step has been driven by a passion for teaching, mentoring, and continuously evolving with the needs of modern education.
                        </p>

                        <h3>Research & Expertise</h3>
                        <p>
                            I have consistently focused on integrating research with real-world relevance. My academic interests span across areas such as artificial intelligence, data systems, and education technology — helping students connect theory with practice in meaningful ways.
                        </p>

                        <h3>Leadership & Vision</h3>
                        <p>
                            As Head of Department, my vision has always been to create an inclusive, forward-thinking academic environment. I believe in collaborative leadership, supporting innovation among faculty and students, and staying aligned with both industry trends and educational reforms.
                        </p>

                        <h3>Values & Philosophy</h3>
                        <p>
                            At the core of my academic philosophy lies a commitment to integrity, curiosity, and empowerment. I see education not just as knowledge transfer, but as a way to shape responsible, thoughtful individuals who can contribute meaningfully to society.
                        </p>

                    </div>
                </FadeUpAnim>
                <FadeUpAnim>
                    <div className="keynote">
                        <p>Teaching is the profession that teaches all other professions.</p>
                    </div>
                </FadeUpAnim>
                <FadeUpAnim>
                    <h1 id="skillsHeading">My Skills</h1>
                    <div className="skills">

                        <div className="skillbox">
                            <strong>Researcher</strong>
                            <p>Driven by curiosity, I delve into problems with a methodical and analytical mindset to uncover insights, generate new ideas, and contribute to meaningful advancements.</p>
                        </div>
                        <div className="skillbox">
                            <strong>Teamwork</strong>
                            <p>I believe collaboration fuels innovation. I work cohesively in diverse teams, value every voice, and strive toward shared goals with mutual respect and support.</p>
                        </div>
                        <div className="skillbox" id="heroSkillbox">
                            <strong>Leadership</strong>
                            <p>I lead by example—empowering others, making thoughtful decisions, and fostering an environment where creativity, growth, and accountability thrive.</p>
                        </div>
                    </div>
                </FadeUpAnim>
                <FadeUpAnim>
                    <div className="skills">

                        <div className="skillbox">
                            <strong>Management</strong>
                            <p>With a structured approach, I manage tasks, resources, and people efficiently—balancing priorities and ensuring timely, high-quality outcomes.</p>
                        </div>
                        <div className="skillbox">
                            <strong>Teamwork</strong>
                            <p>I believe collaboration fuels innovation. I work cohesively in diverse teams, value every voice, and strive toward shared goals with mutual respect and support.</p>
                        </div>
                        <div className="skillbox" id="heroSkillbox">
                            <strong>Leadership</strong>
                            <p>I lead by example—empowering others, making thoughtful decisions, and fostering an environment where creativity, growth, and accountability thrive.</p>
                        </div>

                    </div>
                </FadeUpAnim>
            </main>
            <Footer />
        </FadeUpAnim>
    );
}

export default AboutMe;