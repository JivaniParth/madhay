import React from "react";
import "./CTA.css";
import { Link } from "react-router-dom";

function CTA() {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <h2 className="cta-title">Ready to Build with Us?</h2>
        <p className="cta-description">
          We are your dedicated partners in transforming construction visions
          into reality. Let's start your project today.
        </p>
        <Link to="/contact-us" className="cta-button">
          Get a Quote
        </Link>
      </div>
    </section>
  );
}

export default CTA;
