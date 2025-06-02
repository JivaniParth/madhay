import React from "react";
import { Link } from "react-router-dom";
import "./Projects.css";

export const projects = [
  {
    id: 1,
    title: "Urban Development Initiative",
    description:
      "A large-scale project focused on modernizing urban infrastructure and creating sustainable living spaces.",
    imageUrl:
      "/an-aerial-view-of-an-industrial-construction-project-next-to-a-river-E95F0W.jpg",
  },
  {
    id: 2,
    title: "Renewable Energy Plant Construction",
    description:
      "Building a state-of-the-art solar energy plant to contribute to a greener future.",
    imageUrl: "/ej-yao-D46mXLsQRJw-unsplash.jpg",
  },
  {
    id: 3,
    title: "Commercial Building Refurbishment",
    description:
      "Renovating an existing commercial property to enhance its functionality and aesthetic appeal.",
    imageUrl: "/comercial.jpg",
  },
  {
    id: 4,
    title: "Residential Complex Development",
    description:
      "Constructing a modern residential complex with various amenities and green spaces.",
    imageUrl: "/luke-besley-k5l-zbRSPds-unsplash.jpg",
  },
];

export const partnerships = [
  {
    id: 1,
    name: "Global Construction Partners",
    description: "A strategic alliance for large-scale international projects.",
    imageUrl:
      "/an-aerial-view-of-an-industrial-construction-project-next-to-a-river-E95F0W.jpg",
  },
  {
    id: 2,
    name: "Sustainable Solutions Inc.",
    description:
      "Collaborating on environmentally conscious building practices.",
    imageUrl: "/ben-allan-BIeC4YK2MTA-unsplash.jpg",
  },
  {
    id: 3,
    name: "Innovate Design Studio",
    description: "Working together on cutting-edge architectural designs.",
    imageUrl: "/c-dustin-91AQt9p4Mo8-unsplash.jpg",
  },
];

export default function Projects() {
  return (
    <div className="projects-container">
      <div className="projects-hero-section">
        <div className="projects-hero-container">
          <div className="projects-hero-content">
            <h1 className="projects-headline">Our Featured Projects</h1>
            <p className="projects-introduction">
              A brief statement about the company's commitment to delivering
              high-quality projects across various sectors.
            </p>
          </div>
        </div>
      </div>

      <section className="featured-projects-section">
        <h2>Projects</h2>
        <div className="project-list">
          {projects.map((project) => (
            <div key={project.id} className="project-item">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="project-image"
              />
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <Link
                to={`/projects/${project.id}`}
                className="project-details-link"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="featured-partnerships-section">
        <h2>Featured Partnerships</h2>
        <div className="partnership-list">
          {partnerships.map((partner) => (
            <div key={partner.id} className="partnership-item">
              <img
                src={partner.imageUrl}
                alt={`${partner.name} Logo`}
                className="partner-logo"
              />
              <h3 className="partnership-name">{partner.name}</h3>
              <p className="partnership-description">{partner.description}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="projects-cta">
        <p>Interested in discussing your project? Contact us today!</p>
        <Link to="/contact-us" className="cta-button">
          Get in Touch
        </Link>
      </div>
    </div>
  );
}
