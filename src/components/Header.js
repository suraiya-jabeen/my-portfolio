import React from 'react';
import videoFile from '../images/5.mp4'; // Correct import path for the video
import './Header.css'; // Correct import path for CSS file

const Header = () => {
  return (
    <header className="hero">
      <div className="video-container">
        <video autoPlay loop muted playsInline className="background-video">
          <source src={videoFile} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="hero-content">
        <h1 className="typing-effect">Welcome to My Portfolio</h1>
        <p>Web Developer | Designer | Innovator</p>
        <a href="#about" className="btn">Learn More</a>
      </div>
    </header>
  );
};

export default Header;
