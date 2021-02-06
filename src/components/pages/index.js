import React, { useState } from "react";
import Home2Section from "../Hero2Section";
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
      <Home2Section />
      <Project />
    </>
  );
}

export default Home;
