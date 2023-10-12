import React from "react";
import { Helmet } from "react-helmet";
import Hero from "./components/Hero";
import Services from "./components/Services";
import ServicesInfo from "./components/Services-info";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Projects from "./components/Projects";
import Team from "./components/Team";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Helmet>
        <title>Landing Page JD 2023</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Landing Page Using React and Tailwind CSS"
        />
        <meta name="keywords" content="react, tailwind, landing page" />
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Hero />
      <Services />
      <ServicesInfo />
      <About />
      <Testimonials />
      <Projects />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
