import "../css/about.css";

export default function About() {
	return (
		<section className="bio" id="bio">
			<div className="description-container">
				<div className="sub-description">
					<h2 className="custom-header">What I do</h2>
					<p>
						I am dedicated to designing, developing, and implementing cutting-edge software solutions.<br />
						Proficient in multiple programming languages and well-versed in software development methodologies,<br />I specialize in creating robust and scalable applications that meet the unique needs of clients and end-users.<br />
						I help small and large businesses achieve their technical goals and clients to build their products.<br /><br />
					</p>
				</div>
				<div className="sub-description">
					<h2 className="bio-heading custom-header">Background</h2>
					<hr />
					<p>
						I hold a Bachelor in Information Technology from
						University of Mumbai, graduated in 2021
					</p>
					<p>
						Currently working as a Software Engineer at Apexon
						<br />
						I work in MVC (Model-View-Controller) and MVVM
						(Model-View-ViewModel) Architecture
						<br />
						The tech stack I use on my job is Express, Node.js,
						HTML, CSS/SASS, JavaScript, jQuery and Java
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
						technologies, read books, watch NetFlix or go for a walk.
					</p>
				</div>
			</div>
		</section>
	);
}
