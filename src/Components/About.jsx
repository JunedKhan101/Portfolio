import React from "react";
import "../css/about.css";

export default function About() {
	return (
		<section className="bio" id="bio">
			<h2 className="bio-heading">Background</h2>
			<div className="description-container">
				<div className="sub-description">
					<p>
						I hold a Bachelor degree in Information Technology from University of
						Mumbai, graduated in August 2021.
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
