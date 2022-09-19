import React, {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import {AiOutlineLinkedin} from "react-icons/ai";
import {MdOutlineEmail} from "react-icons/md";
import {RiMessengerLine} from "react-icons/ri";
import "./ContactSection.css";
import swal from "sweetalert";



const ContactSection = () => {


    const [formValue, setFormValue] = useState({name:"", email:"", message:""})


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValue({ ...formValue, [name]: value });
    }

    console.log(formValue);


    const form = useRef();


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_fzimhiw', 'template_8zu8h1j', form.current, 'FweFjuvEuQjvb7KXi')
            .then(() => {
                swal({
                    title: "Received!",
                    icon: "success",
                })
                window.location.reload();




            }, (error) => {
                alert(error.text);
            });
    };



    return(
        <section className="contact" id="contact">
            <h3>
                Get In Touch
            </h3>
            <h1>
                Contact Me
            </h1>

            <div className="container contact_container">
                <div className="contact_options">
                    <article className="contact_option">
                        <MdOutlineEmail className="contact_icons"/>
                        <h4>
                            Email
                        </h4>
                        <h5>
                            ademkhefifi123@gmail.com
                        </h5>
                        <a href="mailto:ademkhefifi123@gmail.com" target="_blank" rel="noreferrer">
                            Send an Email
                        </a>
                    </article>

                    <article className="contact_option">
                        <AiOutlineLinkedin className="contact_icons"/>
                        <h4>
                            LinkedIn
                        </h4>
                        <h5>
                            Khefifi Adem
                        </h5>
                        <a href="https://www.linkedin.com/in/khefifi-adem/" target="_blank" rel="noreferrer">
                            Connect Me
                        </a>
                    </article>

                    <article className="contact_option">
                        <RiMessengerLine className="contact_icons"/>
                        <h4>
                            Messenger
                        </h4>
                        <h5>
                            Khefifi Adem
                        </h5>
                        <a href="https://m.me/khefifi.adem.3" target="_blank" rel="noreferrer">
                            Send a message
                        </a>
                    </article>
                </div>

                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder="Your Full Name" value={formValue.name} onChange={handleChange} required/>
                    <input type="email" name="email" placeholder="Type Your Email" value={formValue.email} onChange={handleChange} required/>
                    <textarea name="message" rows="7" placeholder="Your Message" value={formValue.message} onChange={handleChange} required/>
                    <button className="btn btn-primary">Send Message</button>
                </form>

            </div>
        </section>
    )
}

export default ContactSection;