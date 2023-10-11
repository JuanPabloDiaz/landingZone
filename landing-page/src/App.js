import React from "react";
import Hero from "./components/Hero";
import Services from "./components/Services";
import ServicesInfo from "./components/Services-info";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Projects from "./components/Projects";
import Team from "./components/Team";
import Footer from "./components/Footer";
import Company from "./components/Company";

function App() {
  return (
    <div>
      <Hero />
      <Services />
      <ServicesInfo />
      <About />
      <Company />
      <Testimonials />
      <Projects />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
