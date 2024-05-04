import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
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
const NotFound = lazy(() => import("./NotFound"));
import { useTheme } from "../context/ThemeContext";

export default function AppContainer() {
    const { theme } = useTheme();
	return (
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
				<Route
					path="*"
					element={
						<Suspense fallback={<FallBack />}>
							<NotFound />
						</Suspense>
					}
				/>
			</Routes>
			<Footer />
		</div>
	);
}
