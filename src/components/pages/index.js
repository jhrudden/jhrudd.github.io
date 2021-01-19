import React, { useState } from "react";

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

      <Services />
    </>
  );
}

export default Home;
