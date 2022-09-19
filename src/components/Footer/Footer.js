import "./Footer.css";
import {IoLogoFacebook, IoLogoLinkedin, IoLogoTwitter} from "react-icons/io";

const Footer = () => {
    return(
        <footer>
            <a href="/#" className="footer_logo">
                Adem Khefifi
            </a>
            <ul className="permalinks">
                <li>
                    <a href="/#">
                        Présentation
                    </a>
                </li>

                <li>
                    <a href="/#about">
                        About
                    </a>
                </li>

                <li>
                    <a href="/#skills">
                        Skills
                    </a>
                </li>

                <li>
                    <a href="/#contact">
                        Contact
                    </a>
                </li>
            </ul>

            <div className="footer_social">
                <a href="https://www.linkedin.com/in/khefifi-adem/" target="_blank" rel="noreferrer">
                    <IoLogoLinkedin/>
                </a>

                <a href="https://twitter.com/khefifi_adem" target="_blank" rel="noreferrer">
                    <IoLogoTwitter/>
                </a>

                <a href="https://www.facebook.com/khefifi.adem.3/" target="_blank" rel="noreferrer">
                    <IoLogoFacebook/>
                </a>


            </div>
        </footer>
    )
}

export default Footer;