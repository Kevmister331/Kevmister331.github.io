import React from 'react';
import '../styles/Experience.css'; 
import csss from '../images/csss.png';
import ubcea from '../images/ubcea.png';
import biztech from '../images/biztech.png';

function CommunityExperience({ theme }) {  // Receive the 'theme' as a prop
  const experiences = [
    {
      title: "Senior Developer",
      company: "BizTech",
      duration: "May 2025 - Present",
      description: "Leading development projects for the biggest technology club on campus. Working on cool things like BizTech Cards, an NFC-enabled membership card that lets users tap to check in at events or share a personalized profile",
      logo: biztech,
    },
    {
      title: "Student Developer",
      company: "UBC CSSS",
      duration: "Sep. 2023 - Apr. 2024",
      description: "Student led project for the volleyball club, where we engineered a full-stack application for 50 active club members using React, Next.js, TypeScript, and AWS to support game stat tracking and club membership registration/purchases.",
      logo: csss,
    },
    {
      title: "Software Developer",
      company: "UBC Esports Association",
      duration: "Sep. 2023 - Apr. 2024",
      description: "Part of the UBCEA development team where we maintained our club website and worked on creative projects. I was involved with the PC time-tracker project and a Discord bot for our arcade machine.",
      logo: ubcea,
    },
  ];

  return (
    <section className={`experience-section ${theme === 'dark' ? 'dark-theme' : ''}`}>
      {experiences.map((exp, index) => (
        <div key={index} className={`experience-item ${theme === 'dark' ? 'dark-theme' : ''}`}>
          <div className="experience-header">
            <div class="text-content"> {/* New wrapper with class 'text-content' */}
              <h3 className={theme === 'dark' ? 'dark-theme' : ''}>{exp.title}</h3>
              <p className={`company-name ${theme === 'dark' ? 'dark-theme' : ''}`}>
                {exp.company} | <span className={`duration ${theme === 'dark' ? 'dark-theme' : ''}`}>{exp.duration}</span>
              </p>
              <p className={`description ${theme === 'dark' ? 'dark-theme' : ''}`}>{exp.description}</p>
            </div>  {/* Close the new wrapper */}
            <img src={exp.logo} alt={`${exp.company} logo`} className="company-logo" />
          </div>
        </div>
      ))}
    </section>
  );
}

export default CommunityExperience; 