import React from 'react';
import symbol from '../assets/symbol.png';
import '../design/navbar.css';

const NavBar = () => {
    return(
        <div className="navbar">
            <img src={symbol}/>
            <ul className="navMenu">
                <li>About Me</li>
                <li>My Portfolio</li>    
                <li>Contact</li>
            </ul>
            <div className="nav-connect">Connect with Me</div>
        </div>
    )
}

export default NavBar;