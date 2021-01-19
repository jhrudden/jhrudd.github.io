import React, { useState } from "react";
import AboutSection from "../AboutSection";
import { homeObjOne, homeObjTwo } from "../AboutSection/Data";
import HeroSection from "../HeroSection";
import Navbar from "../Navbar";
import Services from "../Services";
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
      <AboutSection {...homeObjOne} />
      <AboutSection {...homeObjTwo} />
      <Services />
    </>
  );
}

export default Home;
