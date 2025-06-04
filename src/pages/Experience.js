import React from 'react';
import '../styles/Experience.css'; 
import atpco from '../images/atpco.png';
import enerflex from '../images/enerflex.png';
import csss from '../images/csss.png';
import ubcea from '../images/ubcea.png';
import sap from '../images/sap.png'
import interninsider from '../images/interninsider.png'

function Experience({ theme }) {  // Receive the 'theme' as a prop
  const experiences = [
    {
      title: "Software Engineer Intern",
      company: "SAP",
      duration: "May 2025 - Present",
      description: "Supporting internal tools used by developers to deploy and manage microservices. Gaining hands-on experience with Kubernetes, Docker, and cloud-based systems (AWS/GCP/Azure).",
      logo: sap,
    },
    {
      title: "Startup Engineer",
      company: "Intern Insider",
      duration: "Jan. 2025 - Apr. 2025",
      description: "Partnered with my friend who founded Intern Insider, where I helped build web scrapers to populate a job board home to 8000+ active jobs. Gained hands-on exposure to the fast-paced startup environment and got the chance to network with Vancouver’s vibrant startup community.",
      logo: interninsider,
    },
    {
      title: "Software Engineer Intern",
      company: "ATPCO",
      duration: "Jan. 2024 - Aug. 2024",
      description: "I started on the fare identification engine that processed airline data, and I contributed to a large project of replacing SQL with RocksDB. For the second half of my internship, I worked on AWS Cloud systems, with a particular focus on leveraging AWS tools (S3, DynamoDB, EC2) to manage our microservice architecture.",
      logo: atpco,
    },
    {
      title: "Software Engineer Intern",
      company: "Enerflex",
      duration: "Sep. 2023 - Dec. 2023",
      description: "Gained experience in the energy industry on the water solutions engineering team. Developed a custom Python tool for modelling and optimizing equipment for water treatment.",
      logo: enerflex,
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

export default Experience;
