import React from "react";
import "../css/aboutpage.css";

export default function AboutPage() {
	return (
		<section className="aboutpage" id="aboutpage">
			<h2 className="aboutpage-heading text-center display-4">About Myself</h2>
			<p className="oneline-intro">
				Lifelong learner, Inquisitive, Geek, Nerd, Bookworm.
			</p>
			<div className="aboutpage-container">
				<div className="profileimg-container">
					<img
						className="profileimg-aboutpage"
						src="/static/aboutme.png"
						alt="profile.png"
					/>
				</div>
				<div className="description-container">
					<div className="sub-description-aboutpage">
						<p>
							I'm currently working as a B2C Commerce Saleforce Developer at Apexon
							<br />
							Salesforce B2C Commerce is Salesforce proprietary
							platform to create E-Commerce sites.
							<br />
							The tech stack is an express like framework
							with HTML (ISML to be precise), SCSS, and
							JavaScript.
						</p>
						<p>I'm open to hire! contact me here or on LinkedIn</p>
						<p>
							In my spare time, I work on personal projects, learn new technologies,<br /> read books, watch some web
							series or go for a walk.
						</p>
						<p className="m-0 p-0">
							Here are some things you might wanna know about me:
						</p>
						<ul className="mb-0">
							<li>
								I completed my Bachelor in Information
								Technology from Rizvi College, University of
								Mumbai in August 2021
							</li>
							<li>
								I have contributed to some Open Source Projects
								on <a href="https://github.com/JunedKhan101" rel="noopener noreferrer">GitHub</a>
							</li>
							<li>I use tabs instead of spaces</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}
