import React from 'react';
import videoFile from '../images/5.mp4'; // Import video
import project1 from '../images/Project1.png';
import project2 from '../images/Project2.png';
import project3 from '../images/Project3.png';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects">
      <div className="video-container">
        <video autoPlay loop muted playsInline className="background-video">
          <source src={videoFile} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <h1>My Projects</h1>
      <div className="project-grid">
        <div className="project-item">
          <img src={project1} alt="Project 1" />
          <h3>Project 1</h3>
          <p>User-Friendly Interface, Customized Input, Historical Data, Extended Forecast, Location Flexibility, Scikit-Learn Model</p>
        </div>
        <div className="project-item">
          <img src={project2} alt="Project 2" />
          <h3>Project 2</h3>
          <p>Patient Empowerment, Efficient Search, Ideal for Smaller Healthcare Facilities</p>
        </div>
        <div className="project-item">
          <img src={project3} alt="Project 3" />
          <h3>Project 3</h3>
          <p>AI-Based Technology, Real-Time Monitoring, Face Tracking, Facial Analysis, Career Advancement</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
