import React, { useEffect } from "react";
import { Button, Card } from 'react-bootstrap';
import AOS from "aos";
import "../css/projects.css"

export default function Projects() {
	useEffect(() => {
	  AOS.init({
	    duration : 1000
	  });
	}, []);
  return (
  	<div className="projects-container" id="projects">
  		<h1 className="heading">Projects</h1>
		<div className="projects">
				<Card data-aos="fade-up" style={{ width: '18rem' }}>
				  <Card.Img variant="top" src="static/img1.jpg" />
				  <Card.Body>
				    <Card.Title>Password Manager and Note Taking</Card.Title>
				    <Card.Text>
				      Built in Node.js, Express and EJS, that uses JWT Authentication.
				    </Card.Text>
				    <Button onClick={() => window.open("https://pwdmanager-and-notetaking.herokuapp.com/")}
				    variant="outline-dark">Open/View</Button>&nbsp;
				    <Button onClick={() => window.open("https://github.com/JunedKhan101/PWDManager-And-NoteTaking")} 
				    variant="outline-dark">Code</Button>
				  </Card.Body>
				</Card>

				<Card data-aos="fade-up" style={{ width: '18rem' }}>
				  <Card.Img variant="top" src="static/img2.jpg" />
				  <Card.Body>
				    <Card.Title>Nutrial</Card.Title>
				    <Card.Text>
				      Nutrition Analysis, Built in React and react-router-dom and Chart.js.<br />
				      Users can efficiently see the nutrients a food contains.<br />
				      It returns basic and complex nutrients information, Graph view displays nutrients in a graph.<br />
				    </Card.Text>
				    <Button onClick={() => window.open("https://nutrial.herokuapp.com/")}
				    variant="outline-dark">Open/View</Button>&nbsp;
				    <Button onClick={() => window.open("https://github.com/JunedKhan101/NutriAl")}
				    variant="outline-dark">Code</Button>
				  </Card.Body>
				</Card>

				<Card data-aos="fade-up" style={{ width: '18rem' }}>
				  <Card.Img variant="top" src="static/img3.jpg" />
				  <Card.Body>
				    <Card.Title>Quiz Game</Card.Title>
				    <Card.Text>
				      Built in React.js and Material UI.<br />
				      It has form view and focused view, which displays all quiz like a form in form view and one at a time in focused view.
				    </Card.Text>
				    <Button onClick={() => window.open("https://quiz-game42101.herokuapp.com/")}
				    variant="outline-dark">Open/View</Button>&nbsp;
				    <Button onClick={() => window.open("https://github.com/JunedKhan101/Quiz-game")}
				    variant="outline-dark">Code</Button>
				  </Card.Body>
				</Card>
		</div>
	</div>
  );
}