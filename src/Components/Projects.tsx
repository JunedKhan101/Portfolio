import { useEffect, useContext, useState, MouseEvent, lazy } from "react";
import { Container, Button, Modal } from "react-bootstrap";
import AOS from "aos";
import { ThemeContext } from "./App";
const GitHubSVG = lazy(() => import("./svg/GitHubSVG"));
const VideoSVG = lazy(() => import("./svg/VideoSVG"));
const OpenLinkSVG = lazy(() => import("./svg/OpenLinkSVG"));
import "../css/projects.css";

export default function Projects() {
	const { theme } = useContext(ThemeContext) as { theme: string };
	useEffect(() => {
		AOS.init({
			duration: 1000,
		});
	}, []);
	var ModalStyle = {
		backgroundColor: theme === "dark" ? "#1b1e21" : "#FFFFFF",
		color: theme === "dark" ? "#eee" : "#000000",
	};
	const [show, setShow] = useState(false);
	const [projectName, setProjectName] = useState("");
	const [videoLink, setVideoLink] = useState("");
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	
	const handleVideoClick = (event: MouseEvent<HTMLAnchorElement>) => {
		const anchorElement = event.target as HTMLAnchorElement;
		var pname = anchorElement.getAttribute("data-name") as string;
		var videolink = anchorElement.getAttribute("data-videolink") as string;
		setProjectName(pname);
		setVideoLink(videolink);
		handleShow();
	};
	return (
		<section className="projects-container" id="projects">
			<h1 className="projects-heading">Top Projects</h1>
			<div className="projects">
				<div className="project-instance">
					<div className="project-header">
						<h3>NutriAl</h3>
						<div className="project-links-container">
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
						</div>
					</div>
					<hr />
					<p className="project-description">
						Nutrition Analysis, Built in React and react-router-dom
						and Chart.js.
						<br />
						Data is fetched from{" "}
						<a href="https://developer.edamam.com/edamam-nutrition-api" target="_blank">
							Edamam Nutrition Analysis API
						</a>
						<br />
						Users can efficiently see the nutrients a food contains.
						<br />
						It returns basic and complex nutrients information,
						Graph view displays nutrients in a graph.
						<br />
					</p>
				</div>
				<div className="project-instance">
					<div className="project-header">
						<h3>Quiz Game</h3>
						<div className="project-links-container">
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
						</div>
					</div>
					<hr />
					<p className="project-description">
						Built in React.js, react-router-dom and Material UI.
						<br />
						Data is fetched from a{" "}
						<a href="https://opentdb.com/api_config.php" target="_blank">
							3rd party quiz API
						</a>
						<br />
						Form view displays all quiz like a form and one at a
						time in focused view.
					</p>
				</div>
			</div>
			<Modal size="lg" centered show={show} onHide={handleClose}>
				<Container className="modal-container" style={ModalStyle}>
					<Modal.Header>
						<Modal.Title>{projectName}</Modal.Title>
						<button
							className={theme === "dark" ? "close-btn btn btn-secondary" : "btn btn-dark"}
							onClick={handleClose}
						>
							X
						</button>
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
							variant={theme === "dark" ? "secondary" : "dark"}
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
