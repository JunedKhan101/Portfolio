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
            <div className="project-links">
              [&nbsp;
              <a
                className="link"
                target="_blank"
                rel="noopener noreferrer"
                href={ProjectArray[i].SiteLink}
              >
                Open
              </a>
              &nbsp;|&nbsp;
              <a
                className="link"
                target="_blank"
                rel="noopener noreferrer"
                href={ProjectArray[i].GithubLink}
              >
                Github
              </a>
              &nbsp;|&nbsp;
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
        <h1 className="projects-heading">Projects</h1>
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
                  <video className="video" controls muted autoplay>
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
