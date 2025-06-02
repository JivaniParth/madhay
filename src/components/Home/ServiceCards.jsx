import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceCards.css';

function ServiceCards() {
  const services = [{
    title: "Residential",
    description:
      "Supporting residential projects with our proven expertise and resources.",
    link: "/services",
    image: "public/download.jpg",
  }, {
    title: "Commercial",
    description:
      "Collaborating with builders on commercial ventures of any scale.",
    link: "/services",
    image: "public/comercial.jpg",
  }, {
    title: "Industrial",
    description:
      "Revitalizing existing structures with our experienced team and quality focus.",
    link: "/services",
    image: "public/an-aerial-view-of-an-industrial-construction-project-next-to-a-river-E95F0W.jpg",
  }];

  return (
    <div className="service-cards-line">
      <h2 className='service-cards-title'>Services We Provide</h2>
      <div className='service-cards-container'>
      {services.map((service, index) => (
        <div key={index} className="service-card" style={{backgroundImage: `url(${service.image})`}}>
          <h3 className="service-title">{service.title}</h3>
          <p className="service-description">{service.description}</p>
          <Link to={service.link} className="service-link">Learn More</Link>
        </div>
      ))}
      </div>
    </div>
  );
}

export default ServiceCards;
