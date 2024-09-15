import React from "react";
import '../design/contact.css';
import email from '../assets/email.png';
import call from '../assets/call.png';
import pin from '../assets/pin.png';

const Contact = () => {
    return(
        <div className="contact">
            <div className="contact-title">
                <h1>Get in touch</h1>
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>I'm always open to discussing new opportunities, answering your questions, or simply connecting — don't hesitate to reach out!</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={email} alt="" />
                            <p>relli_emmanuel_javier@dlsl.edu.ph</p>
                        </div>
                        <div className="contact-detail">
                            <img src={call} alt="" />
                            <p>0912-3456-789</p>
                        </div>
                        <div className="contact-detail">
                            <img src={pin} alt="" />
                            <p>Mataas na Lupa, 4217, Batangas</p>
                        </div>
                    </div>
                </div>
                <form className="contact-right">
                    <label htmlFor="name">Your Name</label>
                    <input type="text" placeholder="Enter your name" name="name"/>
                    <label htmlFor="email">Your E-mail</label>
                    <input type="email" placeholder="Enter your email" name="email"/>
                    <label htmlFor="message">Write your message here</label>
                    <textarea name="message" rows="8" placeholder="Enter your message"></textarea>
                    <button type="submit" className="contact-submit">Submit here</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;
