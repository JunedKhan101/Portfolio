import { lazy } from "react";
const About = lazy(() => import("./About"));
const Skills = lazy(() => import("./Skills"));
const Intro = lazy(() => import("./Intro"));
const ToLearn = lazy(() => import("./ToLearn"));
import { Helmet } from "react-helmet";

export default function Main() {
	return (
		<>
			<Helmet>
				<meta name="title" content="Juned Khan - Software Engineer" />
				<meta
					name="description"
					content="Juned Khan is a Software Engineer who loves to solves technical problems with his skills and expertise. A super curious individual and a lifelong learner"
				/>
				<meta
					name="keywords"
					content="Software Engineer, Software Developer, Portfolio Website"
				/>
				<meta name="robots" content="index, follow" />
				<meta
					http-equiv="Content-Type"
					content="text/html; charset=utf-8"
				/>
				<meta name="language" content="English" />
				<meta name="revisit-after" content="15 days" />
			</Helmet>
			<Intro />
			<About />
			<Skills />
			<ToLearn />
		</>
	);
}
