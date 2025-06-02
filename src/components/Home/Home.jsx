import React from 'react';
import Carousel from "./Carousel.jsx";
import ServiceCards from "./ServiceCards.jsx";
import CTA from "./CTA.jsx";
import HomeAboutUs from "./HomeAboutUs.jsx";
import HomeProjects from "./HomeProjects.jsx";
import "./Home.css";

export default function Home() {
  return (
    <>
      <Carousel />
      <HomeAboutUs />
      <ServiceCards />
      <HomeProjects />
      <CTA />
    </>
  );
}
