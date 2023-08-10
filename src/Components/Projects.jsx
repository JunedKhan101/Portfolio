import React, { useState, useEffect, useContext } from "react";
import { Container, Button, Modal } from "react-bootstrap";
import AOS from "aos";
import { ThemeContext } from "./App";
import ProjectData from "../data/projects.json";
import "../css/projects.css";

export default function Projects() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  const ThemeContextLocal = useContext(ThemeContext);
  var ModalStyle = {
    backgroundColor: ThemeContextLocal.theme === "dark" ? "#1b1e21" : "#FFFFFF",
    color: ThemeContextLocal.theme === "dark" ? "#eee" : "#000000",
  };
  var CloseButtonLinkStyle = {
    color: ThemeContextLocal.theme === "dark" ? "#eee" : "#000000",
    textDecoration: "none",
  };
  const [show, setShow] = useState(false);
  const [projectName, setProjectName] = useState("");
  const [videoLink, setVideoLink] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleVideoClick = (event) => {
    var pname = event.target.getAttribute("data-name");
    var videolink = event.target.getAttribute("data-videolink");
    setProjectName(pname);
    setVideoLink(videolink);
    handleShow();
  };
  function renderProjects() {
    var ProjectArray = ProjectData.projects;
    var content = [];
    for (var i = 0; i < ProjectArray.length; ++i) {
      content.push(
        <div key={i} className="project-instance">
          <div className="project-header">
            <h3>{ProjectArray[i].ProjectName}</h3>
            <div className="project-links-container">
              <div className="project-links">
                [&nbsp;
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                    <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
                  </svg>&nbsp;
                <a
                  className="link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={ProjectArray[i].SiteLink}
                >
                  Open
                </a>
              </div>
              <div className="project-links">
                &nbsp;|&nbsp;
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                </svg>&nbsp;
                <a
                  className="link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={ProjectArray[i].GithubLink}
                >
                  Github
                </a>
              </div>
              <div className="project-links">
                &nbsp;|&nbsp;
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-camera-reels" viewBox="0 0 16 16">
                  <path d="M6 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM1 3a2 2 0 1 0 4 0 2 2 0 0 0-4 0z"/>
                  <path d="M9 6h.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 7.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 16H2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h7zm6 8.73V7.27l-3.5 1.555v4.35l3.5 1.556zM1 8v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1z"/>
                  <path d="M9 6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM7 3a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
                </svg>&nbsp;
                <a
                  id="video-link"
                  className="link"
                  href="#modal"
                  rel="noopener noreferrer"
                  data-name={ProjectArray[i].ProjectName}
                  data-videolink={ProjectArray[i].staticVideoLink}
                  onClick={handleVideoClick}
                >
                  Video
                </a>
                &nbsp;]
              </div>
            </div>
          </div>
          <hr />
          <p className="project-description">{ProjectArray[i].Description}</p>
        </div>
      );
    }
    return content;
  }
  return (
    <section className="projects-container" id="projects">
      <div className="projects-subcontainer">
        <h2 className="projects-heading">Projects</h2>
        <div className="projects">
          {renderProjects()}
          <Modal size="xl" centered show={show} onHide={handleClose}>
            <Container className="modal-container" style={ModalStyle}>
              <Modal.Header>
                <Modal.Title>{projectName}</Modal.Title>
                <a
                  className="close-btn"
                  href="#close-btn"
                  onClick={handleClose}
                  style={CloseButtonLinkStyle}
                >
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
                  variant="dark"
                  onClick={handleClose}
                >
                  Close
                </Button>
              </Modal.Footer>
            </Container>
          </Modal>
        </div>
      </div>
    </section>
  );
}
