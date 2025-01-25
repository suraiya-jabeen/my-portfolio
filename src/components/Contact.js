import React from 'react';
import videoFile from '../images/5.mp4'; // Import the video
import './Contact.css'; // Ensure the Contact.css file is available

const Contact = () => {
  return (
    <section id="contact">
      <div className="video-container">
        <video autoPlay loop muted playsInline className="background-video">
          <source src={videoFile} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <h1>Contact Me</h1>
      <form action="#" method="POST">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="5" required></textarea>

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
