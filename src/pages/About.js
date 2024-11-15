import React, { useState, useEffect } from 'react';
import '../styles/About.css';
import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from 'react-icons/ai';
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
                    I'm Kevin, a software engineer with an insatiable drive for solving complex problems and pushing my limits.
                    Currently a 3rd year CS/Business student at UBC. I love the thrill of taking on high-stake challenges that force me
                    to think creatively and stay agile - whether that’s work, coding, or my personal life.
                </p>
                <p>
                    I thrive in environments where chaos meets precision - where you have to make quick, data-driven decisions, but there’s room to experiment and innovate.
                    I’m passionate about startups and the fast-paced tech world, always looking for the next opportunity to push boundaries and build impactful solutions.
                </p>
                <p>
                    Outside of tech, I compete both on the basketball court and in NBA fantasy leagues, blending the adrenaline of live play with my passion for the NBA and its data-driven insights.
                    I am also a world traveler, spending the last four months of my life studying abroad in Seoul and visiting Japan and Thailand.
                    One of my core values is living a well-balanced life, with travel being a key way I express myself and recharge both creatively and mentally.
                </p>
                <p>
                    If you’re looking for someone who doesn’t just want to “do the job,” but will challenge the status quo and build something better - let’s talk.
                    Currently seeking 2025 summer internships in tech or business.
                </p>
            </div>
        </div>
    );
}

export default AboutMe;
