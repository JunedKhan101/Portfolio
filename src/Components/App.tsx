import React, { useState, useEffect, createContext } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
// import Main from "./Main";
// import BlogHomePage from "./BlogHomePage";
// import Blog from "./Blog";
// import Gear from "./Gear";
// import AboutPage from "./AboutPage";
// import ProjectsPage from "./ProjectsPage";
import { getRelativeURL } from "./NavBar";
// import Contact from "./Contact";
// import Footer from "./Footer";
import { ThemeContextType } from "../types/ThemeContext";
const About = React.lazy(() => import("./About"));
const AboutPage = React.lazy(() => import("./AboutPage"));
const Blog = React.lazy(() => import("./Blog"));
const BlogCard = React.lazy(() => import("./BlogCard"));
const BlogHomePage = React.lazy(() => import("./BlogHomePage"));
const Contact = React.lazy(() => import("./Contact"));
const Footer = React.lazy(() => import("./Footer"));
const Gear = React.lazy(() => import("./Gear"));
const Intro = React.lazy(() => import("./Intro"));
const Main = React.lazy(() => import("./Main"));
const FallBack = React.lazy(() => import("./FallBack"));
// const NavBar = React.lazy(() => import("./NavBar"));
const Projects = React.lazy(() => import("./Projects"));
const ProjectsPage = React.lazy(() => import("./ProjectsPage"));
const Skills = React.lazy(() => import("./Skills"));
import "../css/app.css";

const defaultThemeContextValue: ThemeContextType = {
	themeflag: false,
	theme: "light",
	toggleTheme: () => {},
};
export const ThemeContext = createContext<ThemeContextType>(
	defaultThemeContextValue
);

function App() {
	const [themeflag, setThemeFlag] = useState<boolean>(false); // false for light, true for dark theme
	var theme: string = themeflag ? "dark" : "light"; // string representation
	const toggleTheme = () => {
		setThemeFlag((themeflag) => !themeflag);

		var localtheme = localStorage.getItem("theme");
		if (localtheme === "light") localStorage.setItem("theme", "dark");
		else if (localtheme === "dark") localStorage.setItem("theme", "light");
	};
	useEffect(() => {
		if (localStorage) {
			var localtheme = localStorage.getItem("theme");
			if (!localtheme) localStorage.setItem("theme", "light");
			else if (localtheme === "light") setThemeFlag(false);
			else if (localtheme === "dark") setThemeFlag(true);
		}
	}, []);

	var html = document.getElementsByTagName("html")[0];
	var body = document.getElementsByTagName("body")[0];
	if (theme === "dark" && themeflag === true) {
		html.style.backgroundColor = "#1b1e21";
		body.style.backgroundColor = "#1b1e21";
		body.style.color = "#EEE";
	} else if (theme === "light" && themeflag === false) {
		html.style.backgroundColor = "#FFFFFF";
		body.style.backgroundColor = "#FFFFFF";
		body.style.color = "#000000";
	}

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
			if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
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
	return (
		<ThemeContext.Provider value={{ themeflag, theme, toggleTheme }}>
			<div className="app" id={theme}>
				<NavBar />
				<Routes>
					<Route
						path="/"
						element={
							<React.Suspense fallback={<FallBack />}>
								<Main />
							</React.Suspense>
						}
					/>
					<Route
						path="/blog"
						element={
							<React.Suspense fallback={<FallBack />}>
								<BlogHomePage />
							</React.Suspense>
						}
					/>
					<Route
						path="/gear"
						element={
							<React.Suspense fallback={<FallBack />}>
								<Gear />
							</React.Suspense>
						}
					/>
					<Route
						path="/blog/:slug"
						element={
							<React.Suspense fallback={<FallBack />}>
								<Blog />
							</React.Suspense>
						}
					/>
					<Route
						path="/about"
						element={
							<React.Suspense fallback={<FallBack />}>
								<AboutPage />
							</React.Suspense>
						}
					/>
					<Route
						path="/projects"
						element={
							<React.Suspense fallback={<FallBack />}>
								<ProjectsPage />
							</React.Suspense>
						}
					/>
					<Route
						path="/contact"
						element={
							<React.Suspense fallback={<FallBack />}>
								<Contact />
							</React.Suspense>
						}
					/>
				</Routes>
				<Footer />
			</div>
		</ThemeContext.Provider>
	);
}

export default App;