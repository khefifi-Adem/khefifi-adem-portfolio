import "./AboutSection.css"
import {FaAward} from "react-icons/fa";

const AboutSection = () => {
  return(
      <section className="about" id="about">
          <h3>
              Get To Know
          </h3>
          <h1>
              About Me
          </h1>
        <div className="container about_container">

          <div className="about_content">
              <div className="about_cards">
              <article className="about_card">
                  <FaAward className="about_icon"/>
                  <h5>
                      Education
                  </h5>
                  <small>
                      Bachelor degree in software engineering and information system
                  </small>
              </article>
          </div>

            <p>
                I'm a Junior fullstack developer currently searching for an opportunity to start my professional career.
                I'm familiar with React Js and Laravel 8 also I've learned Angular and Vue js currently I'm working on getting more knowledge on the MERN stack.
                I am very motivated to enhance my experience and become a professional.

            </p>

            <a href="/#contact" className="btn btn-primary">Let's Talk</a>
          </div>
          </div>
      </section>
  )
}

export default AboutSection;