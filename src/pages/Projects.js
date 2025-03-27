import React, { useState } from 'react';
import '../styles/Projects.css';
import databaseproject from '../images/databaseproject.png';
import panini1 from '../images/panini1.png';
import panini2 from '../images/panini2.png';
import pandapic from '../images/pandaz.png';
import panda2 from '../images/panda2.png';
import websitepic from '../images/website.png';
import aboutme from '../images/aboutme.png';
import db1 from '../images/db1.png';
import db2 from '../images/db2.png';
import poker from '../images/poker.jpg';
import poker1 from '../images/poker1.png';
import quack1 from '../images/quack1.png';
import quack2 from '../images/quack2.png';
import nerve1 from '../images/nerve1.png';
import nerve2 from '../images/nerve2.png';



function Projects() {
  const [selectedTab, setSelectedTab] = useState('Nerve');
  const [theme, setTheme] = React.useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  React.useEffect(() => {
    document.body.className = theme === 'dark' ? 'dark-theme' : '';
  }, [theme]);

  const renderContent = () => {
    <button onClick={toggleTheme} className="theme-toggle">
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    switch (selectedTab) {
      case 'Nerve':
      return (
        <div className="text-image-container">
          <div className="text-content">
            <h2>Nerve</h2>
            <p className="brief-description">Real-Time Dashboard for First Responders (Hackathon Winner)</p>
            <br></br>
            <p>
              I teamed up with three other Kevins and together we built <strong>Nerve</strong>, a real-time command dashboard for monitoring first responders in the field. Nerve streams live video and audio data from mobile clients to HQ, performs sentiment analysis on transcripts, and summarizes ongoing events in real-time. It gives HQ a full 360° situational view when every decision matters.
            </p>
            <br></br>
            <p>
              This project won the <strong>Startup Award</strong> and placed <strong>2nd overall</strong> at UBC BizTech’s ProductX Hackathon. I got to dive deep into full-stack dev and work with live streaming, data ingestion, AI, and real-time sockets, all in under 24 hours.
            </p>
            <br></br>
            <p>
              <a href="https://devpost.com/software/nerve-1vlr0m">Devpost</a>
            </p>
            <br></br>
            <ul className="tech-stack">
              <li>Next.js</li>
              <li>Express.js</li>
              <li>React.js</li>
              <li>TailwindCSS</li>
              <li>Mapbox</li>
              <li>Socket.IO</li>
              <li>TensorFlow</li>
              <li>AssemblyAI</li>
              <li>OpenAI API</li>
              <li>Supabase</li>
              <li>ngrok</li>
            </ul>
          </div>
          <div className="image-stack">
            <img src={nerve1} alt="nerve dashboard" />
            <img src={nerve2} alt="nerve demo gif or image" />
          </div>
        </div>
      );
      case 'This Website':
        return (
            <div className="text-image-container">
                <div className="text-content">
                    <h2>This Website</h2>
                    <p className="brief-description">Personal Portfolio Project + Blog</p>
                    <br></br>
                    <p>As a long time admirer of Naval - I've been influenced by his push for public creation. This inspired me to build a personal portoflio site to document my journey as a developer. I used this as an opportunity to learn about deploying a site via Gatsby and how it handles static site generation, customizing React components, and making everything mobile responsive.</p>
                    <br></br>
                    <ul className="tech-stack">
                        <li>Gatsby</li>
                        <li>React</li>
                        <li>GraphQL</li>
                        <li>JavaScript</li>
                        <li>Contentful</li>
                    </ul>
                </div>
                <div className="image-stack">
                    <img src={websitepic} alt="website pic" />
                    <img src={aboutme} alt="about me pic" />
                </div>
            </div>
        );
        case 'Project Panini':
          return (
              <div className="text-image-container">
                  <div className="text-content">
                      <h2>Project Panini</h2>
                      <p className="brief-description">nwHacks 2023 Hackathon</p>
                      <br></br>
                      <p>While brainstorming ideas for a hackathon... we thought why not make an idea generator in itself! From there, we built a full-stack application with React that implements GPT-3's NLP model to generate project ideas based on personal interests for fellow programmers like me. We utilized user inputs to parse JSON responses from the OpenAI API calls.</p>
                      <br></br>
                      <ul className="tech-stack">
                          <li>React</li>
                          <li>JavaScript</li>
                          <li>OpenAI</li>
                          <li>Material UI</li>
                      </ul>
                  </div>
                  <div className="image-stack">
                    <img src={panini1} alt="website pic" />
                    <img src={panini2} alt="about me pic" />
                  </div>
              </div>
          );
        case 'Panda Path':
          return (
            <div className="text-image-container">
                <div className="text-content">
                    <h2>Panda Path</h2>
                    <p className="brief-description">SFU Stormhacks 2023 Hackathon</p>
                    <br></br>
                    <p>Panda Path was built on React Native as a mobile app to generate safe walking routes based on government crime data. JavaScript was used along with the Google Maps Platform API for app functionality, like route generation and time calculations. We built a secure back-end REST API in Express.js, connecting the application to a MongoDB database for user profiles protected by bcrypt encryption and JWT for password security.</p>
                    <br></br>
                    <ul className="tech-stack">
                        <li>React Native</li>
                        <li>MongoDB</li>
                        <li>Express</li>
                        <li>Node</li>
                        <li>JWT</li>
                    </ul>
                </div>
                <div className="image-stack panda-path-images">
                    <img src={pandapic} alt="panda path" />
                    <img src={panda2} alt="panda path" />
                  </div>
            </div>
        );
        case 'LinkedIn Clone':
          return (
              <div className="text-image-container">
                  <div className="text-content">
                      <h2>LinkedIn Clone</h2>
                      <p className="brief-description">Academic Term Project for CPSC 304 (Relational Databases)</p>
                      <br></br>
                      <p>I built a social media networking app (conceptually like LinkedIn) with SQL, PHP, and Oracle for the purpose of learning databases. I gained exposure to different ER models, database system designs, and different types of data normalization during this process.</p>
                      <br></br>
                      <ul className="tech-stack">
                          <li>SQL</li>
                          <li>PHP</li>
                          <li>Oracle</li>
                      </ul>
                  </div>
                  <div className="image-stack">
                    <img src={db1} alt="db1" />
                    <img src={db2} alt="db2" />
                  </div>
              </div>
          );
      case 'Magic Ace':
          return (
              <div className="text-image-container">
                  <div className="text-content">
                      <h2>Magic Ace</h2>
                      <p className="brief-description">Academic Term Project for CPSC 210 (OOP in Java)</p>
                      <br></br>
                      <p> I used Java to program a virtual poker chip counter for players who may have cards but are lacking chips. This idea was inspired when I travelled to The Philippines with my friends, and we had a long layover with nothing but playing cards. We wanted to play poker but did not have any chips to simulate the betting system (the fun part of poker, obviously).</p>
                      <br></br>
                      <ul className="tech-stack">
                          <li>Java</li>
                          <li>JUnit 5</li>
                          <li>Java Swing</li>
                          <li>JSON</li>
                      </ul>
                  </div>
                  <div className="image-stack panda-path-images">
                    <img src={poker1} alt="poker" />
                    <img src={poker} alt="poker" />
                  </div>
              </div>
          );
      case 'QuackTrack':
          return (
              <div className="text-image-container">
                  <div className="text-content">
                      <h2>QuackTrack</h2>
                      <p className="brief-description">Finalist in UBC BizTech Hello Hacks 2022</p>
                      <br></br>
                      <p>Developed a Google Chrome extension that tracked website/tab screen time. The frontend was created using Figma, HTML, CSS. The backend integrated Google APIs through JavaScript and the prototype was deployed on a Python script. I competed with Nathan Lee, Steven Huang, and Felix Ma against 15 other projects at UBC BizTech HelloHacks 2022!</p>
                      <br></br>
                      <ul className="tech-stack">
                          <li>Python</li>
                          <li>JavaScript</li>
                          <li>HTML/CSS</li>
                          <li>Google API</li>
                      </ul>
                  </div>
                  <div className="image-stack panda-path-images">
                    <img src={quack1} alt="quack" />
                  </div>
              </div>
          );

         
        default:
            return null;
    }
};


  return (
    <div className="tabbed-interface">
      <div className="tabs">
        <div className={selectedTab === 'Nerve' ? 'active-tab' : ''} onClick={() => setSelectedTab('Nerve')}>
          Nerve
        </div>
        <div className={selectedTab === 'Panda Path' ? 'active-tab' : ''} onClick={() => setSelectedTab('Panda Path')}>
          Panda Path
        </div>
        <div className={selectedTab === 'This Website' ? 'active-tab' : ''} onClick={() => setSelectedTab('This Website')}>
          This Website
        </div>
        <div className={selectedTab === 'Project Panini' ? 'active-tab' : ''} onClick={() => setSelectedTab('Project Panini')}>
          Project Panini
        </div>
        <div className={selectedTab === 'LinkedIn Clone' ? 'active-tab' : ''} onClick={() => setSelectedTab('LinkedIn Clone')}>
          LinkedIn Clone
        </div>
        <div className={selectedTab === 'Magic Ace' ? 'active-tab' : ''} onClick={() => setSelectedTab('Magic Ace')}>
        Magic Ace
        </div>
        <div className={selectedTab === 'QuackTrack' ? 'active-tab' : ''} onClick={() => setSelectedTab('QuackTrack')}>
        QuackTrack
        </div>
      </div>
      
        {renderContent()}
      
    </div>
  );
}

export default Projects;
