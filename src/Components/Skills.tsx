import { useEffect } from "react";
import AOS from "aos";
import { Card } from "react-bootstrap";
import "../css/skills.css";

export default function Skills() {
	useEffect(() => {
		AOS.init({
			duration: 1000,
		});
	}, []);
	return (
		<section className="skills-container" id="skills">
			<div className="skills-subcontainer">
				<h2 className="skills-heading custom-header">Skills</h2>
				<div className="skills">
					<Card className="skills-card" data-aos="fade-up" style={{ width: "18rem" }}>
						<Card.Body>
							<Card.Title>Frontend</Card.Title>
							<hr />
							<ul>
								<li>React</li>
								<li>HTML5</li>
								<li>CSS/SCSS/SASS</li>
								<li>BootStrap</li>
								<li>JavaScript</li>
								<li>JQuery</li>
							</ul>
						</Card.Body>
					</Card>

					<Card className="skills-card" data-aos="fade-up" style={{ width: "18rem" }}>
						<Card.Body>
							<Card.Title>Backend</Card.Title>
							<hr />
							<ul>
								<li>Node.js and Express</li>
								<li>JWT Authentication</li>
								<li>Django</li>
								<li>PHP</li>
							</ul>
						</Card.Body>
					</Card>

					<Card className="skills-card" data-aos="fade-up" style={{ width: "18rem" }}>
						<Card.Body>
							<Card.Title>Database</Card.Title>
							<hr />
							<ul>
								<li>MySQL</li>
								<li>MongoDB and Mongoose</li>
							</ul>
						</Card.Body>
					</Card>

					<Card className="skills-card" data-aos="fade-up" style={{ width: "18rem" }}>
						<Card.Body>
							<Card.Title>Programming Languages</Card.Title>
							<hr />
							<ul>
								<li>Python</li>
								<li>JavaScript</li>
								<li>Java</li>
								<li>C/C++</li>
							</ul>
						</Card.Body>
					</Card>

					<Card className="skills-card" data-aos="fade-up" style={{ width: "18rem" }}>
						<Card.Body>
							<Card.Title>Libraries and Frameworks</Card.Title>
							<hr />
							<ul>
								<li>Pandas</li>
								<li>Matplotlib</li>
								<li>Numpy</li>
								<li>Chart.js</li>
							</ul>
						</Card.Body>
					</Card>

					<Card className="skills-card" data-aos="fade-up" style={{ width: "18rem" }}>
						<Card.Body>
							<Card.Title>Other</Card.Title>
							<hr />
							<ul>
								<li>Git and GitHub</li>
								<li>Jenkins</li>
								<li>
									<b>Agile-Scrum</b> Model
								</li>
								<li>DSA</li>
								<li>Data Visualization</li>
							</ul>
						</Card.Body>
					</Card>
				</div>
			</div>
		</section>
	);
}
