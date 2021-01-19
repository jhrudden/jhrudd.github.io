import { default as logo1 } from "../../assets/images/svg-1.svg";
import { default as logo2 } from "../../assets/images/svg-2.svg";
import { default as logo3 } from "../../assets/images/svg-3.svg";

export const homeObjOne = {
  id: "about",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "About Me",
  headline: "Hello, I am John Henry",
  description:
    "I am a second year Computer Science student at Northeastern Univeristy and I am a passionate learner.",
  imgStart: false,
  img: logo1,
  alt: "Profile",
  buttonLabel: "Get Started",
  dark: true,
  primary: true,
  darkText: false,
};

export const homeObjTwo = {
  id: "resume",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "My Resume",
  headline: "Check Out My Resume",
  description: "Click the button to load it up.",
  imgStart: true,
  img: logo2,
  alt: "Resume",
  buttonLabel: "Load Resume",
  dark: false,
  primary: false,
  darkText: true,
};

export const homeObjThree = {
  id: "projects",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "My Projects",
  headline: "See What I Been Working On",
  description:
    "Projects are organized by Framework or Language. Click a button to see respective projects.",
  imgStart: false,
  img: logo3,
  alt: "Profile",
  buttonLabel: "Get Started",
  dark: true,
  primary: true,
  darkText: false,
};
