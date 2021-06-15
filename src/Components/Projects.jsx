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
				      Some quick example text to build on the card title and make up the bulk of
				      the card's content.
				    </Card.Text>
				    <Button variant="outline-dark">Open/View</Button>&nbsp;
				    <Button variant="outline-dark">Code</Button>
				  </Card.Body>
				</Card>

				<Card data-aos="fade-up" style={{ width: '18rem' }}>
				  <Card.Img variant="top" src="static/img2.jpg" />
				  <Card.Body>
				    <Card.Title>Nutrial</Card.Title>
				    <Card.Text>
				      Nutrition Analysis, Some quick example text to build on the card title and make up the bulk of
				      the card's content.
				    </Card.Text>
				    <Button variant="outline-dark">Open/View</Button>&nbsp;
				    <Button variant="outline-dark">Code</Button>
				  </Card.Body>
				</Card>

				<Card data-aos="fade-up" style={{ width: '18rem' }}>
				  <Card.Img variant="top" src="static/img3.jpg" />
				  <Card.Body>
				    <Card.Title>Quiz Game</Card.Title>
				    <Card.Text>
				      Some quick example text to build on the card title and make up the bulk of
				      the card's content.
				    </Card.Text>
				    <Button variant="outline-dark">Open/View</Button>&nbsp;
				    <Button variant="outline-dark">Code</Button>
				  </Card.Body>
				</Card>
		</div>
	</div>
  );
}