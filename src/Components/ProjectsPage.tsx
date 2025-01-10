import { useEffect, useContext, useState, MouseEvent, lazy } from "react";
import { Container, Button, Modal } from "react-bootstrap";
import AOS from "aos";
import { useTheme } from "../context/ThemeContext";
const GitHubSVG = lazy(() => import("./svg/GitHubSVG"));
const VideoSVG = lazy(() => import("./svg/VideoSVG"));
const OpenLinkSVG = lazy(() => import("./svg/OpenLinkSVG"));
const PrivateSVG = lazy(() => import("./svg/PrivateSVG"));
import "../css/projectspage.css";

export default function ProjectsPage() {
	useEffect(() => {
		AOS.init({
			duration: 1000,
		});

		const handleResize = () => {
			if (window.innerWidth > 2000) {
			  setModalSize('xl');
			} else {
			  setModalSize('lg');
			}
		  };
		  handleResize(); // Initial check
		  window.addEventListener('resize', handleResize);
		  return () => window.removeEventListener('resize', handleResize);
	}, []);
	const { theme } = useTheme();
	var ModalStyle = {
		backgroundColor: theme === "dark" ? "#001220 " : "#FFFFFF",
		color: theme === "dark" ? "#eee" : "#000000",
	};

	const [show, setShow] = useState(false);
	const [modalSize, setModalSize] = useState<'lg' | 'xl'>('lg');
	const [projectName, setProjectName] = useState("");
	const [videoLink, setVideoLink] = useState("");
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const handleVideoClick = (event: React.MouseEvent<HTMLAnchorElement> | React.MouseEvent<SVGSVGElement, MouseEvent>) => {
		const anchorElement = (event.target as HTMLElement).closest('a');
		if (anchorElement) {
			var pname = anchorElement.getAttribute("data-name") as string;
			var videolink = anchorElement.getAttribute("data-videolink") as string;
			setProjectName(pname);
			setVideoLink(videolink);
			handleShow();
		}
	};
	return (
		<section className="projects-container" id="projects">
			<h1 className="projects-heading custom-header">
				Personal Projects
			</h1>
			<div className="projects-sub-container">
				<div className="projects">
					<div className="project-instance">
						<div className="project-img-container-desktop">
							<img src="/static/Mad-Scientist.webp" alt="img" />
						</div>
						<div className="project-content-container">
							<div className="project-content">
								<div className="project-header">
									<h3>Mad Scientist Blog</h3>
									{/* <div className="project-links-container">
										<div className="project-links">
											[&nbsp;
											<OpenLinkSVG />
											&nbsp;
											<a
												className="link"
												target="_blank"
												rel="noopener noreferrer"
												href="https://mad-scientist.netlify.app/"
											>
												Open
											</a>
										</div>
										<div className="project-links">
											&nbsp;|&nbsp;
											<GitHubSVG />
											&nbsp;
											<a
												className="link"
												target="_blank"
												rel="noopener noreferrer"
												href="https://github.com/JunedKhan101/mad-scientist-blog"
											>
												GitHub
											</a>
										</div>
										<div className="project-links">
											&nbsp;|&nbsp;
											<VideoSVG />
											&nbsp;
											<a
												className="link"
												href="#modal"
												rel="noopener noreferrer"
												data-name="Mad Scientist"
												data-videolink="/static/Mad Scientist.mp4"
												onClick={handleVideoClick}
											>
												Video
											</a>
											&nbsp;]
										</div>
									</div> */}
								</div>
								<hr />
								<div className="project-img-container-mobile">
									<img
										src="/static/Mad-Scientist.webp"
										alt="img"
									/>
								</div>
								<p className="project-description">
									The Mad Scientist Blog is a blog app built
									in Astro, React, Tailwind and Cosmic.js.
									<br />
									The blog is capable of writing scientific
									notations, markup and math symbols using
									rehypeKatex and rehype raw plugin.
								</p>
							</div>
							<div className="fancy-projects-links-container">
								<a className="fancy-project-link l-1 span-flex"
									target="_blank"
									rel="noopener noreferrer"
									href="https://mad-scientist.netlify.app/">
									<span>
										<OpenLinkSVG />
										<span>Open</span>
									</span>
									<svg viewBox="-5 -5 110 110" preserveAspectRatio="none" aria-hidden="true">
										<path d="M0,0 C0,0 100,0 100,0 C100,0 100,100 100,100 C100,100 0,100 0,100 C0,100 0,0 0,0"/>
									</svg>
								</a>
								<a
									className="fancy-project-link l-2 span-flex"
									target="_blank"
									rel="noopener noreferrer"
									href="https://github.com/JunedKhan101/mad-scientist-blog"
								>
									<span>
										<GitHubSVG />
										<span>GitHub</span>
									</span>
								</a>
								<a
									className="fancy-project-link l-3 span-flex"
									href="#modal"
									rel="noopener noreferrer"
									data-name="Mad Scientist"
									data-videolink="/static/Mad Scientist.mp4"
									onClick={handleVideoClick}
								>
									<span>
										<VideoSVG />
										<span>Video</span>
									</span>
								</a>
							</div>
						</div>
					</div>
					<div className="project-instance">
						<div className="project-img-container-desktop">
							<img src="/static/insta.webp" alt="img" />
						</div>
						<div className="project-content-container">
							<div className="project-content">
								<div className="project-header">
									<h3>InstaScrapy</h3>
									<div className="project-links-container">
										<div className="project-links">
											[&nbsp;
											<PrivateSVG />
											&nbsp;
											<a
												className="link disabled-github-link"
												target="_blank"
												rel="noopener noreferrer"
												href="#github"
											>
												GitHub Private
											</a>
										</div>
										{/* <div className="project-links">
											&nbsp;|&nbsp;
											<VideoSVG />
											&nbsp;
											<a
												className="link"
												href="#modal"
												rel="noopener noreferrer"
												data-name="InstaScrapy"
												data-videolink="/static/InstaScrapy.mp4"
												onClick={handleVideoClick}
											>
												Video
											</a>
										</div> */}
										&nbsp;]
									</div>
								</div>
								<hr />
								<div className="project-img-container-mobile">
									<img src="/static/insta.webp" alt="img" />
								</div>
								<p className="project-description">
									InstaScrapy is a python script that scrapes
									saved images from Instagram.
									<br />
									Unlike other Instagram scrapers who just
									dump all the saved collections and images in
									a single folder.
									<br />
									InstaScrapy script saves images in folders
									which correspond to the saved collections
									folder in Instagram meaning scrape data is
									more organized.
								</p>
							</div>
							<div className="fancy-projects-links-container">
								{/* <a
									className="fancy-project-link l-2 span-flex"
									target="_blank"
									rel="noopener noreferrer"
									href="https://github.com/JunedKhan101/mad-scientist-blog"
								>
									<span>
										<GitHubSVG />
										<span>GitHub</span>
									</span>
								</a> */}
								<a
									className="fancy-project-link l-3 span-flex"
									href="#modal"
									rel="noopener noreferrer"
									data-name="InstaScrapy"
									data-videolink="/static/InstaScrapy.mp4"
									onClick={handleVideoClick}
								>
									<span>
										<VideoSVG />
										<span>Video</span>
									</span>
								</a>
							</div>
						</div>
					</div>
					<div className="project-instance">
						<div className="project-img-container-desktop">
							<img src="/static/NutriAl2.webp" alt="img" />
						</div>
						<div className="project-content-container">
							<div className="project-content">
								<div className="project-header">
									<h3>NutriAl</h3>
									{/* <div className="project-links-container">
										<div className="project-links">
											[&nbsp;
											<OpenLinkSVG />
											&nbsp;
											<a
												className="link"
												target="_blank"
												rel="noopener noreferrer"
												href="https://www.nutrition-analysis.com/"
											>
												Open
											</a>
										</div>
										<div className="project-links">
											&nbsp;|&nbsp;
											<GitHubSVG />
											&nbsp;
											<a
												className="link"
												target="_blank"
												rel="noopener noreferrer"
												href="https://github.com/JunedKhan101/NutriAl"
											>
												GitHub
											</a>
										</div>
										<div className="project-links">
											&nbsp;|&nbsp;
											<VideoSVG />
											&nbsp;
											<a
												className="link"
												href="#modal"
												rel="noopener noreferrer"
												data-name="NutriAl"
												data-videolink="/static/NutriAl.mp4"
												onClick={handleVideoClick}
											>
												Video
											</a>
											&nbsp;]
										</div>
									</div> */}
								</div>
								<hr />
								<div className="project-img-container-mobile">
									<img
										src="/static/NutriAl2.webp"
										alt="img"
									/>
								</div>
								<p className="project-description">
									Nutrition Analysis, Built in React and
									react-router-dom and Chart.js.
									<br />
									Data is fetched from{" "}
									<a
										href="https://developer.edamam.com/edamam-nutrition-api"
										target="_blank"
									>
										Edamam Nutrition Analysis API
									</a>
									<br />
									Users can efficiently see the nutrients a
									food contains.
									<br />
									It returns basic and complex nutrients
									information, Graph view displays nutrients
									in a graph.
									<br />
								</p>
							</div>
							<div className="fancy-projects-links-container">
								<a className="fancy-project-link l-1 span-flex"
									target="_blank"
									rel="noopener noreferrer"
									href="https://nutrial.netlify.app">
									<span>
										<OpenLinkSVG />
										<span>Open</span>
									</span>
									<svg viewBox="-5 -5 110 110" preserveAspectRatio="none" aria-hidden="true">
										<path d="M0,0 C0,0 100,0 100,0 C100,0 100,100 100,100 C100,100 0,100 0,100 C0,100 0,0 0,0"/>
									</svg>
								</a>
								<a
									className="fancy-project-link l-2 span-flex"
									target="_blank"
									rel="noopener noreferrer"
									href="https://github.com/JunedKhan101/NutriAl"
								>
									<span>
										<GitHubSVG />
										<span>GitHub</span>
									</span>
								</a>
								<a
									className="fancy-project-link l-3 span-flex"
									href="#modal"
									rel="noopener noreferrer"
									data-name="NutriAl"
									data-videolink="/static/NutriAl.mp4"
									onClick={handleVideoClick}
								>
									<span>
										<VideoSVG />
										<span>Video</span>
									</span>
								</a>
							</div>
						</div>
					</div>
					<div className="project-instance">
						<div className="project-img-container-desktop">
							<img src="/static/Quiz-Game2.webp" alt="img" />
						</div>
						<div className="project-content-container">
							<div className="project-content">
								<div className="project-header">
									<h3>Quiz Game</h3>
									{/* <div className="project-links-container">
										<div className="project-links">
											[&nbsp;
											<OpenLinkSVG />
											&nbsp;
											<a
												className="link"
												target="_blank"
												rel="noopener noreferrer"
												href="https://www.solo-quiz-game.com/"
											>
												Open
											</a>
										</div>
										<div className="project-links">
											&nbsp;|&nbsp;
											<GitHubSVG />
											&nbsp;
											<a
												className="link"
												target="_blank"
												rel="noopener noreferrer"
												href="https://github.com/JunedKhan101/Quiz-game"
											>
												GitHub
											</a>
										</div>
										<div className="project-links">
											&nbsp;|&nbsp;
											<VideoSVG />
											&nbsp;
											<a
												className="link"
												href="#modal"
												rel="noopener noreferrer"
												data-name="Quiz Game"
												data-videolink="/static/QuizGame.mp4"
												onClick={handleVideoClick}
											>
												Video
											</a>
											&nbsp;]
										</div>
									</div> */}
								</div>
								<hr />
								<div className="project-img-container-mobile">
									<img
										src="/static/Quiz-Game2.webp"
										alt="img"
									/>
								</div>
								<p className="project-description">
									Built in React.js, react-router-dom and
									Material UI.
									<br />
									Data is fetched from a{" "}
									<a
										href="https://opentdb.com/api_config.php"
										target="_blank"
									>
										3rd party quiz API
									</a>
									<br />
									Form view displays all quiz like a form and
									one at a time in focused view.
								</p>
							</div>
							<div className="fancy-projects-links-container">
								<a className="fancy-project-link l-1 span-flex"
									target="_blank"
									rel="noopener noreferrer"
									href="https://friendly-quiz-game.netlify.app">
									<span>
										<OpenLinkSVG />
										<span>Open</span>
									</span>
									<svg viewBox="-5 -5 110 110" preserveAspectRatio="none" aria-hidden="true">
										<path d="M0,0 C0,0 100,0 100,0 C100,0 100,100 100,100 C100,100 0,100 0,100 C0,100 0,0 0,0"/>
									</svg>
								</a>
								<a
									className="fancy-project-link l-2 span-flex"
									target="_blank"
									rel="noopener noreferrer"
									href="https://github.com/JunedKhan101/Quiz-game"
								>
									<span>
										<GitHubSVG />
										<span>GitHub</span>
									</span>
								</a>
								<a
									className="fancy-project-link l-3 span-flex"
									href="#modal"
									rel="noopener noreferrer"
									data-name="Quiz Game"
									data-videolink="/static/QuizGame.mp4"
									onClick={handleVideoClick}
								>
									<span>
										<VideoSVG />
										<span>Video</span>
									</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Modal
				size={modalSize}
				centered
				show={show}
				onHide={handleClose}
				id={theme === "dark" ? "modal-dark" : ""}
			>
				<Container className="modal-container" style={ModalStyle}>
					<Modal.Header>
						<Modal.Title>{projectName}</Modal.Title>
						<a className="x-close-btn btn" onClick={handleClose}>
							X
						</a>
					</Modal.Header>
					<Modal.Body>
						<Container>
							<video className="video" controls muted autoPlay>
								<source src={videoLink} type="video/mp4" />
								Your browser does not support the video tag.
							</video>
						</Container>
					</Modal.Body>
					<Modal.Footer className="border-0 justify-content-center">
						<Button
							className="modal-close-btn"
							onClick={handleClose}
						>
							Close
						</Button>
					</Modal.Footer>
				</Container>
			</Modal>
		</section>
	);
}
