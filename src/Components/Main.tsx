import { lazy } from "react";
const About = lazy(() => import("./About"));
const Projects = lazy(() => import("./Projects"));
const Skills = lazy(() => import("./Skills"));
const Intro = lazy(() => import("./Intro"));
const ToLearn = lazy(() => import("./ToLearn"));

export default function Main() {
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
