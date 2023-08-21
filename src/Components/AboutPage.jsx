import React from "react";
import "../css/aboutpage.css";

export default function AboutPage() {
	return (
		<section className="aboutpage" id="aboutpage">
			<h2 className="aboutpage-heading">About Myself</h2>
			<div className="description-container">
				<div className="sub-description">
					<p className="oneline-intro">
						Lifelong learner, Introvert, Inquisitive, Geek, Nerd, Bookworm.
					</p>
					<p>
						I did a Bachelor degree in Information Technology from University of
						Mumbai, and graduated in August 2021.
					</p>
					<p>
						I'm currently working as a Software Engineer at Apexon.
						<br />
						I work as B2C Commerce Saleforce Developer.
						<br />
						Salesforce B2C Commerce is Salesforce propritary platform to create B2C (Business to Consumer) E-commerce sites.
						<br />
						The tech stack is mainly an express like framework with HTML (ISML to be precise), SCSS, and JavaScript.
					</p>
					<p>
						I like to build projects, I'm always working on one behind the
						scenes.
						<br />
						I'm currently teaching myself and reserching about image comparison algorithms to help me build a project.
					</p>
					<p>
						I really enjoy learning, and programming has taught me that there's
						no end to it.
					</p>
					<p>
						Bucket list: Networking, Security, Hardware, Electronics, Low level
						programming, Embedded Systems, ML and AI.
					</p>
				</div>
			</div>
		</section>
	);
}
