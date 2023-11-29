import { useEffect, useContext, useState, MouseEvent, lazy } from "react";
import { Container, Button, Modal } from "react-bootstrap";
import AOS from "aos";
import { ThemeContext } from "./App";
const GitHubSVG = lazy(() => import("./svg/GitHubSVG"));
const VideoSVG = lazy(() => import("./svg/VideoSVG"));
const OpenLinkSVG = lazy(() => import("./svg/OpenLinkSVG"));
import PrivateSVG from "./svg/PrivateSVG";
import "../css/projects.css";

export default function Projects() {
	const { theme } = useContext(ThemeContext) as { theme: string };
	useEffect(() => {
		AOS.init({
			duration: 1000,
		});
	}, []);
	var ModalStyle = {
		backgroundColor: theme === "dark" ? "#001220 " : "#FFFFFF",
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
			<div className="projects">
			<div className="project-instance">
					<h2 className="projects-heading custom-header">Top Projects</h2>
					<hr />
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
							<div className="project-links">
								&nbsp;|&nbsp;
								<VideoSVG />
								&nbsp;
								<a
									className="link"
									href="#modal"
									rel="noopener noreferrer"
									data-name="NutriAl"
									data-videolink="/static/InstaScrapy.mp4"
									onClick={handleVideoClick}
								>
									Video
								</a>
							</div>
							&nbsp;]
						</div>
					</div>
					{/* <hr /> */}
					<p className="project-description">
						InstaScrapy is a python script that
						scrapes saved images from Instagram
						<br />
						Unlike other Instagram scrapers who just dump all the
						saved collections and images in a single folder,
						<br />
						InstaScrapy script saves images in folders which
						correspond to the saved collections folder in Instagram
						meaning scrape data is more organized.
					</p>
				</div>
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
					{/* <hr /> */}
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
			</div>
			<Modal size="lg" centered show={show} onHide={handleClose}>
				<Container className="modal-container" style={ModalStyle}>
					<Modal.Header>
						<Modal.Title>{projectName}</Modal.Title>
						<button
							className={theme === "dark" ? "close-btn btn btn-outline-secondary" : "btn btn-outline-dark"}
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
							variant={theme === "dark" ? "outline-secondary" : "outline-dark"}
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
