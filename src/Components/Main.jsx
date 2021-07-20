import React from "react";
import NavBar from "./NavBar";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";
import Intro from "./Intro";
import "../css/main.css";

export default function Main() {
  return (
	<div className="main">
		<NavBar />
		<Intro />
		<About />
		<Projects />
		<Skills />
		<Contact />
	</div>
  );
}