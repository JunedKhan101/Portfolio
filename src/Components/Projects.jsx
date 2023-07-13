import React, { useEffect } from "react";
import AOS from "aos";
import ProjectData from "../data/projects.json";
import "../css/projects.css";

export default function Projects() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  function renderProjects() {
    var ProjectArray = ProjectData.projects;
    var content = [];
    for (var i = 0; i < ProjectArray.length; ++i) {
        content.push(
          <div className="project-instance">
            <h3>{ProjectArray[i].ProjectName}</h3>&nbsp;&nbsp;[&nbsp;
            <a
              className="link"
              target="_blank"
              rel="noopener noreferrer"
              href={ProjectArray[i].SiteLink}
            >
              View
            </a>
            &nbsp;|&nbsp;
            <a
              className="link"
              target="_blank"
              rel="noopener noreferrer"
              href={ProjectArray[i].GithubLink}
            >
              Code
            </a>
            &nbsp;]
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
          {/* <div className="p1">
            <h3>Password Manager and Note Taking</h3>&nbsp;&nbsp;[&nbsp;
            <a
              className="link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://pwdmanager-and-notetaking.herokuapp.com/"
            >
              View
            </a>
            &nbsp;|&nbsp;
            <a
              className="link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/JunedKhan101/PWDManager-And-NoteTaking"
            >
              Code
            </a>
            &nbsp;]
            <hr />
            <p>
              Built in Node.js, MongoDB, Express and EJS, that uses JWT
              Authentication.
              <br />
              MongoDB handles User model and saves the user notes and passwords in
              a MongoDB cluster.
            </p>
          </div> */}
          {renderProjects()}
        </div>
      </div>
    </section>
  );
}
