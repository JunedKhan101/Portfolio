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
						Currently working as a Software Engineer
						at Apexon
						<br />
						{/* B2C Commerce is Salesforce proprietary platform to
						create/manage E-Commerce sites.
						<br /> */}
						I work in MVC (Model-View-Controller) and MVVM (Model-View-ViewModel) Architecture
						<br />
						The tech stack I use on my job is Express, Node.js, HTML, SASS, JavaScript, jQuery and Java
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
