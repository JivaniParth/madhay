import React from "react";
import "./ContactUs.css";

function ContactUs() {
  return (
    <div className="contact-us-container">
      <div className="hero-section">
        <div className="hero-text">
          <h1>Contact Us</h1>
        </div>
      </div>
      <div className="contact-info">
        <h2>Get in Touch</h2>
        <p>
          Have a question, a project in mind, or just want to say hello? We'd
          love to hear from you.
        </p>
        <p>Email: madhayconstruction89@gmail.com</p>
        <p>Phone: +91 97123 38989</p>
        <p>
          Address: 171, Maharshi Villa, Osara Road, Bharuch, Gujarat, India -
          392015
        </p>
      </div>

      <div className="contact-form">
        <h2>Send us a Message</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name here"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email here"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Enter your message here"
              required
            ></textarea>
          </div>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
