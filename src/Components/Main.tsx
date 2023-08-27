import { lazy, useEffect } from "react";
const About = lazy(() => import("./About"));
const Projects = lazy(() => import("./Projects"));
const Skills = lazy(() => import("./Skills"));
const Intro = lazy(() => import("./Intro"));
const ToLearn = lazy(() => import("./ToLearn"));
import { getRelativeURL } from "../helpers/getRelativeURL";

export default function Main() {
	useEffect(() => {
		// Get all sections that have an ID defined
		const sections = document.querySelectorAll("section[id]");

		// Add an event listener listening for scroll
		var currentURL = getRelativeURL();
		if (currentURL === "/") {
			window.addEventListener("scroll", navHighlighter);
		}

		function navHighlighter() {
			// Get current scroll position
			let scrollY = window.scrollY;

			// Now we loop through sections to get height, top and ID values for each
			sections.forEach((current: any) => {
				const sectionHeight = current.offsetHeight;
				const sectionTop = current.offsetTop - 400; // earlier I was substracting 62
				var sectionId = current.getAttribute("id");
				/*
				- If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
				- To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
				*/
				if (
					scrollY > sectionTop &&
					scrollY <= sectionTop + sectionHeight
				) {
					document
						.querySelector(".custom-nav a[href*=" + sectionId + "]")
						?.classList.add("active");
				} else {
					document
						.querySelector(".custom-nav a[href*=" + sectionId + "]")
						?.classList.remove("active");
				}
			});
		}
	}, []);
	return (
		<>
			<Intro />
			<About />
			<Projects />
			<Skills />
			<ToLearn />
		</>
	);
}
