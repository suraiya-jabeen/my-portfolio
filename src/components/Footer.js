import React from 'react';
import githubIcon from '../images/github.png';
import linkedinIcon from '../images/linkedin.png'; // Correct import path for social icons
import twitterIcon from '../images/twitter.png';
import './Footer.css'; // Correct import path for CSS file

const Footer = () => {
  return (
    <footer>
      <div className="social-links">
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
          <img src={linkedinIcon} alt="LinkedIn" />
        </a>
        <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a href="https://twitter.com/your-username" target="_blank" rel="noopener noreferrer">
          <img src={twitterIcon} alt="Twitter" />
        </a>
      </div>
      <p>&copy; 2025 Your Name. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
