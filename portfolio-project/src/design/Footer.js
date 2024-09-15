import React from "react";
import "../design/footer.css";
import symbol from "../assets/symbol.png"
import user from "../assets/user.png"

const Footer = () => {
    return(
        <div className="footer">
            <div className="footer-top">
                <div className="footer-top-left">
                    <img src={symbol} alt=""/>
                    <p>Relli Javier, A Computer Science Student</p>
                </div>
                <div className="footer-top-right">
                    <div className="footer-email-input">
                        <img src={user} alt="" />
                        <input type="email" placeholder="Enter e-mail" />
                    </div>
                    <div className="footer-subscribe">Subscribe</div>

                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <p className="footer-bottom-left">© Relli Javier</p>
                <div className="footer-bottom-right">
                    <p>Terms of Service</p>
                    <p>Privacy Policy</p>
                    <p>Connect with me</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;