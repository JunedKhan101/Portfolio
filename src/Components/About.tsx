import "../css/about.css";

export default function About() {
	return (
		<section className="bio" id="bio">
			<h2 className="bio-heading">Background</h2>
			<div className="description-container">
				<div className="sub-description">
					<p>
						I hold a Bachelor in Information Technology from
						University of Mumbai, graduated in 2021
					</p>
					<p>
						Currently working as a B2C Commerce Salesforce Developer
						at <b>Apexon</b>
						<br />
						B2C Commerce is Salesforce proprietary platform to
						create/manage E-Commerce sites.
						<br />
						The Architecture is in{" "}
						<b>MVVM (Model-View-ViewModel)</b>
						<br />
						The tech stack is an <b>Express</b> like <b>Node.js</b>{" "}
						framework with{" "}
						<b>
							HTML (ISML specifically), SCSS, JavaScript, jQuery
							and Java
						</b>
					</p>
					<p>I'm proficient in the JavaScript Ecosystem</p>
					<p>
						I'm open to hire! contact me{" "}
						<a
							href="/contact"
							target="_blank"
							rel="noopener noreferrer"
						>
							here
						</a>{" "}
						or on{" "}
						<a
							href="https://www.linkedin.com/in/juned-khan-22b041204/"
							target="_blank"
							rel="noopener noreferrer"
						>
							LinkedIn
						</a>
					</p>
					<p>
						In my spare time, I work on personal projects, learn new
						technologies,
						<br /> read books, watch some web series or go for a
						walk.
					</p>
				</div>
			</div>
		</section>
	);
}
