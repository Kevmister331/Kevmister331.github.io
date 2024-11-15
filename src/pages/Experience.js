import React from 'react';
import '../styles/Experience.css'; 
import atpco from '../images/atpco.png';
import enerflex from '../images/enerflex.png';
import csss from '../images/csss.png';
import ubcea from '../images/ubcea.png';


function Experience() {
  const experiences = [
    {
      title: "Software Engineer Intern",
      company: "ATPCO",
      duration: "Jan. 2024 - Aug. 2024",
      description: "I worked on optimizing and streamlining cloud-based systems, with a particular focus on leveraging AWS tools (S3, DynamoDB, EC2) to maintain airline data. I contributed to automating key processes, building scalable solutions, and supporting the integration of cloud services to manage large datasets.",
      logo: atpco, 
    },
    {
      title: "Software Engineer Intern",
      company: "Enerflex",
      duration: "Sep. 2023 - Dec. 2023",
      description: "Developed and improved system performance, optimized backend services, and collaborated with cross-functional teams to improve software solutions.",
      logo: enerflex, 
    },
    {
      title: "Student Developer",
      company: "UBC CSSS",
      duration: "Sep. 2023 - Apr. 2024",
      description: "• Engineered a full-stack volleyball application for 50 active club members using React, Next.js, TypeScript, and AWS to support game stat tracking,",
      logo: csss,
    },
    {
      title: "Student Developer",
      company: "UBC Esports Association",
      duration: "Sep. 2023 - Apr. 2024",
      description: "• Engineered a full-stack volleyball application for 50 active club members using React, Next.js, TypeScript, and AWS to support game stat tracking, player management,",
      logo: ubcea,
    },
  ];

  return (
    <section className="experience-section">
      {experiences.map((exp, index) => (
        <div key={index} className="experience-item" style={styles.experienceItem}>
          <div className="experience-header" style={styles.experienceHeader}>
            <div style={styles.textContainer}>
              <h3>{exp.title}</h3>
              <p className="company-name">{exp.company} | <span className="duration">{exp.duration}</span></p>
              <p className="description">{exp.description}</p>
            </div>
            <img src={exp.logo} alt={`${exp.company} logo`} className="company-logo" style={styles.logo} />
          </div>
        </div>
      ))}
    </section>
  );
}

const styles = {
  experienceItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
    borderBottom: '1px solid #ddd',
    padding: '10px 0',
  },
  experienceHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  textContainer: {
    flex: 1,
    marginRight: '20px', // Space between text and logo
  },
  logo: {
    width: '100px', // Adjust the size of the logo as needed
    height: 'auto',
  },
};

export default Experience;
