import FadeUpAnim from "./FadeUpAnim";
import Footer from "./Footer";

function ContactMe() {
    return (
        <FadeUpAnim>
            <section>
                <p id="contactme-heading">Feel free to reach me out!</p>
                <div className="aboutme-container">
                    <div className="send-msg-block">
                        <h2>Send a Message</h2>
                        <form>
                            <input type="text" name="tb1" placeholder="Your Name" />
                            <br />
                            <input type="email" name="tb2" placeholder="Your Email" />
                            <br />
                            <textarea name="tb3" placeholder="Your Message..."></textarea>
                            <br />
                            <input type="submit" name="submit" value="Send Message ✉️" />
                        </form>
                    </div>
                    <div className="getintouch-block">
                        <h2>Get in Touch</h2>
                        <p>I am always open to connecting with students, colleagues, and collaborators. Whether you have questions, ideas for academic collaboration, or simply wish to engage in a thoughtful conversation, feel free to reach out at any time. Let’s connect and make a positive impact together.</p>
                        <div className="email-block">
                            <a href="mailto:hods@dypimca.ac.in">
                                <i className="fas fa-envelope"></i>
                                <span>hods@dypimca.ac.in</span>
                            </a>
                        </div>
                        <h2 id="connect-me-heading">Connect with Me</h2>
                        <div className="connect-me">
                            <a href="https://facebook.com/yourprofile" target="_blank">
                                <i className="fab fa-facebook"></i>
                            </a>
                            <a href="https://twitter.com/yourprofile" target="_blank">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/dr-kavita-suryawanshi-43b65532b/" target="_blank">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="https://github.com/yourprofile" target="_blank">
                                <i className="fab fa-github"></i>
                            </a>
                        </div>
                    </div>

                </div>
            </section>
            <Footer />
        </FadeUpAnim>
    );
}

export default ContactMe;