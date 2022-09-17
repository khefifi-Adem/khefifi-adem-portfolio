import "./PresentationSection.css";
import Buttons from "../../components/Buttons/Buttons";
import IMG from "../../assets/my-pic.jpg";
import HeaderSocialIcons from "../../components/HeaderSocialIcons/HeaderSocialIcons";

const PresentationSection = () => {
    return (
        <header>
            <div id="#" className="container presentation_container">
                <h3>
                    Hello I'm
                </h3>
                <h1>
                    Adem Khefifi
                </h1>
                <h5 className="text-light">
                    Fullstack Developer
                </h5>
                <Buttons />

                <HeaderSocialIcons />

                <div className="img">
                    <img src={IMG} alt="dev_picture"/>
                </div>


            </div>
        </header>
    )
}

export default PresentationSection;