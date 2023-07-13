import React from "react";
import NavBar from "./NavBar";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";
import Intro from "./Intro";
import "../css/main.css";

export default function Main() {
	// Get all sections that have an ID defined
	const sections = document.querySelectorAll("section[id]");

	// Add an event listener listening for scroll
	window.addEventListener("scroll", navHighlighter);

	function navHighlighter() {
		// Get current scroll position
		let scrollY = window.pageYOffset;

		// Now we loop through sections to get height, top and ID values for each
		sections.forEach(current => {
			const sectionHeight = current.offsetHeight;
			const sectionTop = current.offsetTop - 62;
			var sectionId = current.getAttribute("id");
			/*
			- If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
			- To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
			*/
			if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
				document.querySelector(".my-nav a[href*=" + sectionId + "]").classList.add("active");
			} else {
				document.querySelector(".my-nav a[href*=" + sectionId + "]").classList.remove("active");
			}
		});
	}

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