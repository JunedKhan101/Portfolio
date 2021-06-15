import React from "react";
import { Card } from "react-bootstrap";
import "../css/skills.css";

export default function Skills() {
  return (
	<div className="skills-container" id="skills">
		<h1 className="heading">Skills</h1>

		<div className="skills">
			<Card style={{ width: '18rem' }}>
				  <Card.Body>
				    <Card.Title>Frontend</Card.Title>
				    <hr />
				    <Card.Text>
				      <ul>
				      	<li>React</li>
				      	<li>HTML5</li>
				      	<li>CSS/SCSS/SASS</li>
				      	<li>BootStrap</li>
				      	<li>JavaScript</li>
				      	<li>JQuery</li>
				      </ul>
				    </Card.Text>
				  </Card.Body>
				</Card>

				<Card style={{ width: '18rem' }}>
				  <Card.Body>
				    <Card.Title>Backend</Card.Title>
				    <hr />
				    <Card.Text>
				      <ul>
				      	<li>Node.js and Express</li>
				      	<li>JWT Authentication</li>
				      	<li>Django</li>
				      	<li>PHP</li>
				      </ul>
				    </Card.Text>
				  </Card.Body>
				</Card>

				<Card style={{ width: '18rem' }}>
				  <Card.Body>
				    <Card.Title>Database</Card.Title>
				    <hr />
				    <Card.Text>
				      <ul>
				      	<li>MySQL</li>
				      	<li>MongoDB and Mongoose</li>
				      </ul>
				    </Card.Text>
				  </Card.Body>
				</Card>

				<Card style={{ width: '18rem' }}>
				  <Card.Body>
				    <Card.Title>Programming Languages</Card.Title>
				    <hr />
				    <Card.Text>
				      <ul>
				      	<li>Python</li>
				      	<li>JavaScript</li>
				      	<li>Java</li>
				      	<li>C/C++</li>
				      </ul>
				    </Card.Text>
				  </Card.Body>
				</Card>

				<Card style={{ width: '18rem' }}>
				  <Card.Body>
				    <Card.Title>Libraries and Frameworks</Card.Title>
				    <hr />
				    <Card.Text>
				      <ul>
				      	<li>Pandas</li>
				      	<li>Matplotlib</li>
				      	<li>Numpy</li>
				      	<li>Chart.js</li>
				      </ul>
				    </Card.Text>
				  </Card.Body>
				</Card>

				<Card style={{ width: '18rem' }}>
				  <Card.Body>
				    <Card.Title>Other</Card.Title>
				    <hr />
				    <Card.Text>
				      <ul>
				      	<li>Data Visualization</li>
				      	<li>Data Structures and Algorithms</li>
				      	<li>Git and GitHub</li>
				      	<li>Excel</li>
				      	<li>GUI</li>
				      </ul>
				    </Card.Text>
				  </Card.Body>
				</Card>

		</div>
	</div>
  );
}