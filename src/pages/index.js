import * as React from "react"
import '../styles/App.css';
import kevramosImg from '../images/kevramos2.png';
import {AiFillLinkedin, AiFillGithub, AiOutlineMail} from "react-icons/ai";
import TabbedInterface from './TabbedInterface';
import { Link } from 'gatsby';
import { Typewriter } from 'react-simple-typewriter'






export default function Home() {
  return (
    <div className="container">
      <header>
        <div className="header-left">
          <p>Hi, I'm</p>
          <p>Kevin Hu</p>
        </div>
        <div className="header-right">
          <p>Software Engineer Intern @ ATPCO</p>
          <span style={{ color: '#B95117'}}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            className="typewriter-text"
            words={['Full Stack Developer', 'Computer Science Student', 'Builder of Things', 'Creating Systems']}
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
              <li><Link to="/Blog">Blog [work in progress]</Link></li>
              <li><a>Resume</a></li>
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
            <img src={kevramosImg} alt="Kevin and friend" />
          </div>
        </div>
      </section>


      
      <section className="projects">
        <p style={{fontSize: '2rem'}}>Projects</p>
        <div className="vertical-line2"></div>

        <TabbedInterface />
        
      </section>
    </div>
  );
}
