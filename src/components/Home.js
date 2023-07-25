import React from "react";
import Hero from "./home_component.js/Hero";
import About from "./home_component.js/About";
import Skills from "./home_component.js/Skills";
import Experience from "./home_component.js/Experience";
import Portfolio from "./home_component.js/Portfolio";
import Services from "./home_component.js/Services";
import Blogs from "./home_component.js/Blogs";
import Testimonial from "./home_component.js/Testimonial";

function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Portfolio />
      <Services />
      <Blogs />
      <Testimonial />
    </div>
  );
}

export default Home;
