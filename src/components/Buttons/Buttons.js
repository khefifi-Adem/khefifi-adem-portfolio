import CV from '../../assets/CV.pdf';

const Buttons = () => {
    return (
        <div className="buttons">
            <a className="btn" href={CV} download >Download Cv</a>
            <a className="btn btn-primary" href="#contact">Get In Touch</a>
        </div>
    )
}

export default Buttons