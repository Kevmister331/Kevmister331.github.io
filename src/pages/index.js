import * as React from "react"
import '../styles/App.css';
import kevmain from '../images/kevmain.jpg';
import { AiFillLinkedin, AiFillGithub, AiOutlineMail, AiFillHome, AiOutlineArrowLeft } from "react-icons/ai";
import Projects from './Projects';
import Experience from './Experience';
import { Link } from 'gatsby';
import { Typewriter } from 'react-simple-typewriter'
import { pdf } from '../images/Public Resume.pdf';



export default function Home() {
  const [theme, setTheme] = React.useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  React.useEffect(() => {
    document.body.className = theme === 'dark' ? 'dark-theme' : '';
  }, [theme]);

  return (
    <div className="container">
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

      <header>
        <div className="header-left">
          <p>Hi, I'm</p>
          <p>Kevin Hu</p>
        </div>
        <div className="header-right">
          <p>Seeking Summer 2025 Internship</p>
          <span style={{ color: 'var(--link-hover-color)'}}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            className="typewriter-text"
            words={['Full Stack Developer', 'Computer Science Student', 'Building Things', 'Creating Systems']}
            loop={false}
            cursor
            cursorStyle='|'
            typeSpeed={100}
            deleteSpeed={60}
            delaySpeed={1500}
          />
        </span>
        </div>
      </header>


      <div className="vertical-line"></div>
      
      <section className="content">
        <div className="nav-section">
          <nav>
            <ul>
              <li><Link to="/About">About Me</Link></li>
              <li><a href = {pdf} target = "_blank">Resume</a></li>
              <li><Link to="/About">Life Ideas</Link></li>
          </ul>
          </nav>
        </div>
        
        <div className="icon-column">
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

        <div className="photo-section">
          <div className="photo">
            <img src={kevmain} alt="Kevin Photo" />
          </div>
        </div>
      </section>

      <section className="projects">
        <p style={{fontSize: '2rem'}}>Projects</p>
        <div className="vertical-line2"></div>
        <Projects />
      </section>

      <section className="experience">
        <p style={{fontSize: '2rem'}}>Experience</p>
        <div className="vertical-line2"></div>
        <Experience />
      </section>

    </div>
  );
}
