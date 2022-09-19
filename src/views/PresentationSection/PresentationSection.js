import "./PresentationSection.css";
import Buttons from "../../components/Buttons/Buttons";
import IMG from "../../assets/my-pic.jpg";
import HeaderSocialIcons from "../../components/HeaderSocialIcons/HeaderSocialIcons";



const PresentationSection = () => {
    return (
        <header>
            <h3>
                Hello I'm
            </h3>
            <h1>
                Adem Khefifi
            </h1>
            <div id="#" className="container presentation_container">

                <h4 className="text-light">
                    Fullstack Developer
                </h4>
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