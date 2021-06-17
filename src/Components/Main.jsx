import React from "react";
import NavBar from "./NavBar";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";
import "../css/main.css";

export default function Main() {
  return (
	<div className="main">
		<NavBar />
		<div className="intro" id="intro">
			<h1>Hi, I'm Juned Khan</h1>
			<h1>I'm a Web Developer</h1>
		</div>
		<About />
		<Projects />
		<Skills />
		<Contact />
	</div>
  );
}