import React, { useEffect, useState } from 'react';
import './Carousel.css';
import { Link } from 'react-router-dom';

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { image: "ben-allan-BIeC4YK2MTA-unsplash.jpg" },
    { image: "c-dustin-91AQt9p4Mo8-unsplash.jpg" },
    { image: "danist-soh-8Gg2Ne_uTcM-unsplash.jpg" },
    { image: "ej-yao-D46mXLsQRJw-unsplash.jpg" },
    { image: "luke-besley-k5l-zbRSPds-unsplash.jpg" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="carousel-container">
      <div className='carousel'>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
          >

            <img
              src={`/${slide.image}`}
              alt={`Slide ${index + 1}`}
              style={{
                width: '100%',
              }}
            />
          </div>
        ))}
      </div>
      <div className="portfolio">
        <div className='portfolio-content'>
          <h1>Building Excellence, Crafting Futures</h1>
          <p>
            Contract-based construction expertise since 2008, delivering
            quality and reliability.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
