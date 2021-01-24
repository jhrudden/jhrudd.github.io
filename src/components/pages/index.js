import React, { useState } from "react";
import About from "../AboutSection";

import HeroSection from "../HeroSection";
import Navbar from "../Navbar";
import Project from "../ProjectSection";
import Sidebar from "../Sidebar";

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <About />
      <Project />
    </>
  );
}

export default Home;
