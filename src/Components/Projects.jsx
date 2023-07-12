import React, { useEffect } from "react";
import AOS from "aos";
import "../css/projects.css";

export default function Projects() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className="projects-container" id="projects">
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
        <div className="p2">
          <h3>Nutrial</h3>&nbsp;&nbsp;[&nbsp;
          <a
            className="link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://nutrial.herokuapp.com/"
          >
            View
          </a>
          &nbsp;|&nbsp;
          <a
            className="link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/JunedKhan101/NutriAl"
          >
            Code
          </a>
          &nbsp;]
          <hr />
          <p>
            Nutrition Analysis, Built in React and react-router-dom and
            Chart.js.
            <br />
            Data is fetched from an API.
            <br />
            Users can efficiently see the nutrients a food contains.
            <br />
            It returns basic and complex nutrients information, Graph view
            displays nutrients in a graph.
            <br />
          </p>
        </div>
        <div className="p3">
          <h3>Quiz Game</h3>&nbsp;&nbsp;[&nbsp;
          <a
            className="link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://quiz-game42101.herokuapp.com/"
          >
            View
          </a>
          &nbsp;|&nbsp;
          <a
            className="link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/JunedKhan101/Quiz-game"
          >
            Code
          </a>
          &nbsp;]
          <hr />
          <p>
            Built in React.js, react-router-dom and Material UI.
            <br />
            Data is fetched from an API.
            <br />
            Form view displays all quiz like a form and one at a time in focused
            view.
            <br />
          </p>
        </div>
      </div>
    </div>
  );
}
