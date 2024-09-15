import React, { useState } from 'react';
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import '../design/portfolio.css';

const projects = [
    {
        id: 1,
        image: project1,
        title: 'Project One: Traffix',
        description: 'A traffic management app whose primary goal is to fix the ongoing traffic in the city of Lipa, incorporating different features to maximize its potential.'
    },
    {
        id: 2,
        image: project2,
        title: 'Project Two: Le Sorelle',
        description: 'An inventory system focusing on the inventory of the Le Sorelle Apparel Shop. It includes reports of sales, shipping, and adding of products.'
    },
    {
        id: 3,
        image: project3,
        title: 'Project Three: DLSL Hotel Management System',
        description: 'The DLSL Hotel Reservation System offers a user-friendly interface for clients, receptionists, and managers. It provides services that meet user requirements.'
    },
];

const Portfolio = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="portfolio">
            <div className="portfolio-title">
                <h1>My Portfolio</h1>
            </div>

            <div className="portfolio-gallery">
                <div className="portfolio-item">
                    <img src={projects[currentIndex].image} alt={projects[currentIndex].title} className="portfolio-image"/>
                    <div className="portfolio-text">
                        <h2>{projects[currentIndex].title}</h2>
                        <p>{projects[currentIndex].description}</p>
                    </div>
                </div>

                <div className="portfolio-controls">
                    <div className="portfolio-control" onClick={goToPrevious}>&#9664;</div>
                    <div className="portfolio-control" onClick={goToNext}>&#9654;</div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
