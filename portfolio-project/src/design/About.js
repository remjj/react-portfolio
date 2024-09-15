import React from "react";
import profile from "../assets/profile.png";
import '../design/about.css';

const About = () =>{
    return(
            <div className="about">
        <div className="about-title">
            <h1>About Me</h1>
        </div>
        
        <div className="about-sections">
            <div className="about-left">
                <img src={profile} alt="Profile"/>
            </div>
            
            <div className="about-right">
                <div className="about-para">
                    <p>I am Relli Emmanuel R. Javier, a Computer Science student in De La Salle Lipa. Being in the program for three years made me realize what I can do and what I should be focusing on.</p>
                    <p>The experience and learnings in De La Salle Lipa will help me grow as an individual. Teaching me to hone my skills and will help me shape a better future.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>C++</p><hr /></div>
                    <div className="about-skill"><p>HTML & CSS</p><hr /></div>
                    <div className="about-skill"><p>Javascript</p><hr /></div>
                </div>
            </div>
        </div>

        <div className="about-achievements">
            <div className="about-achievement">
                <h1>3</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>5</h1>
                <p>YEARS OF LEADERSHIP EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>90+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
        </div>
    </div>
    )
}

export default About;