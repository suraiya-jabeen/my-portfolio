import React from 'react';
import videoFile from '../images/5.mp4'; // Import the video
import profileImage from '../images/Profile.jpg';
import './About.css';

const About = () => {
  return (
    <section id="about">
      <div className="video-container">
        <video autoPlay loop muted playsInline className="background-video">
          <source src={videoFile} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="about-content">
        <img src={profileImage} alt="Your Name" />
        <div>
          <p>Hello! I'm Suraiya, a passionate web developer with experience in building modern, user-friendly websites. I specialize in front-end development and design, aiming to create smooth and engaging user experiences.</p>
          <a href="https://ca.linkedin.com/" className="btn linkedin-btn" target="_blank" rel="noopener noreferrer">Visit My LinkedIn</a>
        </div>
      </div>
    </section>
  );
};

export default About;
