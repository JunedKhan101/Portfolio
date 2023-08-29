import { lazy, useEffect } from "react";
const About = lazy(() => import("./About"));
const Projects = lazy(() => import("./Projects"));
const Skills = lazy(() => import("./Skills"));
const Intro = lazy(() => import("./Intro"));
const ToLearn = lazy(() => import("./ToLearn"));
import { getRelativeURL } from "../helpers/getRelativeURL";
import { Helmet } from "react-helmet"

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
			<Helmet>
				<meta name="title" content="Juned Khan - Software Engineer" />
				<meta name="description" content="Juned Khan is a Software Engineer who loves to solves technical problems with his skills and expertise. A super curious individual and a lifelong learner" />
				<meta name="keywords" content="Software Engineer, Software Developer, Portfolio Website" />
				<meta name="robots" content="index, follow" />
				<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
				<meta name="language" content="English" />
				<meta name="revisit-after" content="15 days" />
			</Helmet>
			<Intro />
			<About />
			<Projects />
			<Skills />
			<ToLearn />
		</>
	);
}
