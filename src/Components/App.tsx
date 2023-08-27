import { useState, useEffect, createContext, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeContextType } from "../types/ThemeContext";
import NavBar from "./NavBar";
import Footer from "./Footer";
const AboutPage = lazy(() => import("./AboutPage"));
const Blog = lazy(() => import("./Blog"));
const BlogHomePage = lazy(() => import("./BlogHomePage"));
const Contact = lazy(() => import("./Contact"));
const Gear = lazy(() => import("./Gear"));
const Main = lazy(() => import("./Main"));
const FallBack = lazy(() => import("./FallBack"));
const ProjectsPage = lazy(() => import("./ProjectsPage"));
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
	return (
		<ThemeContext.Provider value={{ themeflag, theme, toggleTheme }}>
			<div className="app" id={theme}>
				<NavBar />
				<Routes>
					<Route
						path="/"
						element={
							<Suspense fallback={<FallBack />}>
								<Main />
							</Suspense>
						}
					/>
					<Route
						path="/blog"
						element={
							<Suspense fallback={<FallBack />}>
								<BlogHomePage />
							</Suspense>
						}
					/>
					<Route
						path="/gear"
						element={
							<Suspense fallback={<FallBack />}>
								<Gear />
							</Suspense>
						}
					/>
					<Route
						path="/blog/:slug"
						element={
							<Suspense fallback={<FallBack />}>
								<Blog />
							</Suspense>
						}
					/>
					<Route
						path="/about"
						element={
							<Suspense fallback={<FallBack />}>
								<AboutPage />
							</Suspense>
						}
					/>
					<Route
						path="/projects"
						element={
							<Suspense fallback={<FallBack />}>
								<ProjectsPage />
							</Suspense>
						}
					/>
					<Route
						path="/contact"
						element={
							<Suspense fallback={<FallBack />}>
								<Contact />
							</Suspense>
						}
					/>
				</Routes>
				<Footer />
			</div>
		</ThemeContext.Provider>
	);
}

export default App;
