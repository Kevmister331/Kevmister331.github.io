import React, { useState, useEffect } from 'react';
import '../styles/About.css';
import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from 'react-icons/ai';
import { MdArrowBackIosNew } from "react-icons/md";
import { Link } from 'gatsby'; // Make sure Gatsby Link is imported

import KEV1 from '../images/KEV1.png';
import KEV2 from '../images/KEV2.png';
import KEV3 from '../images/KEV3.png';
import KEV4 from '../images/KEV4.png';

function AboutMe() {
    const [theme, setTheme] = useState('light');
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [intervalId, setIntervalId] = useState(null); // Track the interval ID

    const images = [
        KEV1,
        KEV2,
        KEV3,
        KEV4,
    ];

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    // Reset interval logic
    const resetInterval = () => {
        if (intervalId) {
            clearInterval(intervalId); // Clear the existing interval
        }
        const newIntervalId = setInterval(nextImage, 5000); // Set a new interval
        setIntervalId(newIntervalId); // Store the new interval ID
    };

    useEffect(() => {
        document.body.className = theme === 'dark' ? 'dark-theme' : '';
    }, [theme]);

    useEffect(() => {
        const initialIntervalId = setInterval(nextImage, 7000); // Auto-switch images every 5 seconds
        setIntervalId(initialIntervalId); // Store the interval ID
        return () => clearInterval(initialIntervalId); // Cleanup interval on component unmount
    }, []);

    const handleArrowKeyPress = (e) => {
        if (e.key === 'ArrowRight') {
            nextImage();
            resetInterval(); // Reset the interval when the right arrow is pressed
        } else if (e.key === 'ArrowLeft') {
            prevImage();
            resetInterval(); // Reset the interval when the left arrow is pressed
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', handleArrowKeyPress);
        return () => {
            window.removeEventListener('keydown', handleArrowKeyPress);
        };
    }, []);

    return (
        <div className="page">
            {/* Back Button at top-left */}
            <div className="back-button">
                <Link to="/">
                    <MdArrowBackIosNew size={30} />
                </Link>
            </div>

            <div className="theme-switch-wrapper">
                <label className="switch">
                    <input
                        type="checkbox"
                        onChange={toggleTheme}
                        checked={theme === 'dark'}
                    />
                    <span className="slider round"></span>
                </label>
            </div>

            <div className="leftPanel">
                <div>
                <div className="imagePanel">
                    <img src={images[currentImageIndex]} alt="Profile" className="profile-pic" />
                    <div className="arrows">
                        <button onClick={() => { prevImage(); resetInterval(); }} className="arrow left">
                            &lt;
                        </button>
                        <button onClick={() => { nextImage(); resetInterval(); }} className="arrow right">
                            &gt;
                        </button>
                    </div>
                </div>
                </div>

                <div className="iconList">
                    <div className="icon">
                        <a href="https://www.linkedin.com/in/kevin-hu1/" target="_blank" rel="noopener noreferrer">
                            <AiFillLinkedin size={50} />
                        </a>
                    </div>
                    <div className="icon">
                        <a href="https://github.com/Kevmister331" target="_blank" rel="noopener noreferrer">
                            <AiFillGithub size={50} />
                        </a>
                    </div>
                    <div className="icon">
                        <a href="mailto:kevinhu738@gmail.com">
                            <AiOutlineMail size={50} />
                        </a>
                    </div>
                </div>
            </div>

            <div className="rightPanel">
                <div className="title">About Me</div>
                <p>
                    Hello and thank you for visiting my portfolio. I'm Kevin, a software engineer who is chasing meaningful growth. I'm entering my 4th year of Computer Science + Business at UBC.
                </p>
                <p>
                I'm naturally curious and grounded in the belief that success comes from staying hungry, especially in failure. I like to keep things interesting by saying yes to bold ideas, taking ownership, and chasing opportunities that help me level up. 
                But most importantly, I care deeply about being a strong communicator and teammate. Some of the best work I’ve done came from honest conversations, shared wins, and figuring things out together in the messy middle.
                </p>
                <p>
                Outside of work, you’ll find me deep in NBA fantasy analytics, traveling the world, or reflecting on how to live an exciting life. Studying abroad in Seoul and traveling abroad opened my eyes to new perspectives — and confirmed that exploration is core to how I grow, recharge, and find meaning.
                </p>
                <p>
                If you’re looking for someone who’s not just here to “do the job” but to challenge, build, and bring energy into any team — let’s connect.
                </p>
            </div>
        </div>
    );
}

export default AboutMe;
