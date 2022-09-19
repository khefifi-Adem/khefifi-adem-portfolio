import {BsPatchCheckFill} from "react-icons/bs";
import "./SkillSection.css"


const SkillsSection = () => {
    return(
        <section className="skills" id="skills">
            <h3>
                What Skills I Have
            </h3>
            <h1>
                Skills
            </h1>

            <div className="container skills_container">
                <div className="skills_frontend">
                    <h3>
                        Frontend Development
                    </h3>
                    <div className="skills_content">
                        <article className="skills_details">
                           <BsPatchCheckFill className="skill_details-icon"/>
                            <div>
                                <h4>
                                    HTML
                                </h4>
                                <small className="text-light">
                                    Intermediate
                                </small>
                            </div>
                        </article>

                        <article className="skills_details">
                            <BsPatchCheckFill className="skill_details-icon"/>
                            <div>
                                <h4>
                                    CSS
                                </h4>
                                <small className="text-light">
                                    Intermediate
                                </small>
                            </div>
                        </article>

                        <article className="skills_details">
                            <BsPatchCheckFill className="skill_details-icon"/>
                            <div>
                                <h4>
                                    JavaScript
                                </h4>
                                <small className="text-light">
                                    Intermediate
                                </small>
                            </div>
                        </article>

                        <article className="skills_details">
                            <BsPatchCheckFill className="skill_details-icon"/>
                            <div>
                                <h4>
                                    React
                                </h4>
                                <small className="text-light">
                                    Intermediate
                                </small>
                            </div>
                        </article>

                        <article className="skills_details">
                            <BsPatchCheckFill className="skill_details-icon"/>
                            <div>
                                <h4>
                                    Angular
                                </h4>
                                <small className="text-light">
                                    Intermediate
                                </small>
                            </div>
                        </article>

                        <article className="skills_details">
                            <BsPatchCheckFill className="skill_details-icon"/>
                            <div>
                                <h4>
                                    VueJs
                                </h4>
                                <small className="text-light">
                                    Intermediate
                                </small>
                            </div>
                        </article>

                        <article className="skills_details">
                            <BsPatchCheckFill className="skill_details-icon"/>
                            <div>
                                <h4>
                                    VueJs
                                </h4>
                                <small className="text-light">
                                    Intermediate
                                </small>
                            </div>
                        </article>

                        <article className="skills_details">
                            <BsPatchCheckFill className="skill_details-icon"/>
                            <div>
                                <h4>
                                    Bootstrap
                                </h4>
                                <small className="text-light">
                                    Intermediate
                                </small>
                            </div>
                        </article>

                        <article className="skills_details">
                            <BsPatchCheckFill className="skill_details-icon"/>
                            <div>
                                <h4>
                                    Material Ui
                                </h4>
                                <small className="text-light">
                                    Intermediate
                                </small>
                            </div>
                        </article>
                    </div>
                </div>
                <div className="experience_backend">
                    <div className="skills_backend">
                        <h3>
                            Backend Development
                        </h3>
                        <div className="skills_content">
                            <article className="skills_details">
                                <BsPatchCheckFill className="skill_details-icon"/>
                                <div>
                                    <h4>
                                        Node JS
                                    </h4>
                                    <small className="text-light">
                                        Beginner
                                    </small>
                                </div>
                            </article>

                            <article className="skills_details">
                                <BsPatchCheckFill className="skill_details-icon"/>
                                <div>
                                    <h4>
                                        MongoDB
                                    </h4>
                                    <small className="text-light">
                                        Beginner
                                    </small>
                                </div>
                            </article>

                            <article className="skills_details">
                                <BsPatchCheckFill className="skill_details-icon"/>
                                <div>
                                    <h4>
                                        PHP
                                    </h4>
                                    <small className="text-light">
                                        Intermediate
                                    </small>
                                </div>
                            </article>

                            <article className="skills_details">
                                <BsPatchCheckFill className="skill_details-icon"/>
                                <div>
                                    <h4>
                                        Laravel
                                    </h4>
                                    <small className="text-light">
                                        Intermediate
                                    </small>
                                </div>
                            </article>

                            <article className="skills_details">
                                <BsPatchCheckFill className="skill_details-icon"/>
                                <div>
                                    <h4>
                                        MySQL
                                    </h4>
                                    <small className="text-light">
                                        Intermediate
                                    </small>
                                </div>
                            </article>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SkillsSection;