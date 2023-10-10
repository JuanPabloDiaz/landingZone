import React from "react";
import Hero from "./components/Hero";
import Services from "./components/Services";
import ServicesInfo from "./components/Services-info";
import About from "./components/About";
import Projects from "./components/Projects";
import Team from "./components/Team";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Hero />
      <Services />
      <ServicesInfo />
      <About />
      <Projects />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
