import React from 'react';
import '../styles/About.css';
import kevinhorizontal from '../images/kevinhuhorizontal.jpg';
import {AiFillLinkedin, AiFillGithub, AiOutlineMail} from "react-icons/ai";
import {IoIosArrowRoundBack} from "react-icons/io";


function AboutMe() {
    const [theme, setTheme] = React.useState('light');

    const toggleTheme = () => {
      setTheme(theme === 'light' ? 'dark' : 'light');
    };
  
    React.useEffect(() => {
      document.body.className = theme === 'dark' ? 'dark-theme' : '';
    }, [theme]);
    
    return (
        <div className="page">
            <button onClick={() => window.history.back()} className="icon-button">
                <IoIosArrowRoundBack size={50}/>
            </button>
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
                    <img src={kevinhorizontal} alt="Kevin" className="profile-pic"/>
                </div>

                <div className="iconList">
                    <div className="icon">
                        <a href="https://www.linkedin.com/in/kevin-hu1/" target="_blank" rel="noopener noreferrer">
                            <AiFillLinkedin size={50}/>
                        </a>
                    </div>
                    <div className="icon">
                        <a href="https://github.com/Kevmister331" target="_blank" rel="noopener noreferrer">
                            <AiFillGithub size={50}/>
                        </a>
                    </div>
                    <div className="icon">
                        <a href="mailto:kevinhu738@gmail.com">
                            <AiOutlineMail size={50}/>
                        </a>
                    </div>
                </div>

                <div className="otherStuff">
                
                </div>
            </div>
            <div className="rightPanel">
                <div className="title">About Me</div>
                <div>
                    <p>My name is Kevin, I'm a software engineer from Calgary, Alberta.</p>
                    <br></br>
                    <p>I’m a third year student at the University of British Columbia studying computer science and business. Currently interning at ATPCO as a software engineer!</p>
                    <br></br>
                    <p>In my youth, ive been trying to find my place in tech and establish a system. I like exploring and building cool things, with a particular interest in startups. </p>
                    <br></br>
                    <p>Outside of tech - you can find me watching the NBA, planning my next vacation to explore the world, or enjoying a bowl of pho 😋 </p>

                </div>

            </div>
        </div>
    );
}


export default AboutMe;
