import React from 'react';
import hero from '../assets/hero.png';
import './Hero.css';

const Hero = () => {
    return(
        <div className="hero">
            <img src={hero} alt=""/>
            <h1><span>I am Relli Javier,</span> Computer Science Student.</h1>
            <p>I am a 3rd year Computer Science student in De La Salle Lipa.</p>
            <div className="hero-action">
                <div className="hero-connect">Connect with Me</div>              
                <div className="hero-resume">My Portfolio</div>             
            </div>
        </div>
    )
}

export default Hero;