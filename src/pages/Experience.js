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
      description: "I started on the fare identification engine that processed airline data, and I contributed to a large project of replacing SQL with RocksDB which saved $180,000 in annual costs. For the second half of my internship, I worked on AWS Cloud systems, with a particular focus on leveraging AWS tools (S3, DynamoDB, EC2) to maintain airline data.",
      logo: atpco, 
    },
    {
      title: "Software Engineer Intern",
      company: "Enerflex",
      duration: "Sep. 2023 - Dec. 2023",
      description: "Gained experience in the energy industry on the water solutions engineering team. Developed a custom Python tool for modelling and optimizing equipment for water treatment.",
      logo: enerflex, 
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
    padding: '20px', // Added padding
  },
  experienceHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  textContainer: {
    flex: 1,
    marginRight: '10px', // Space between text and logo
    paddingRight: '10px', // Padding on the right for additional space
  },
  logo: {
    width: '100px',
    height: 'auto',
    marginLeft: '5px',
    marginRight: '20px' // Space between logo and text
  },
};


export default Experience;
