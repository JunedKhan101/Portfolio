import { lazy } from "react";
const GitHubSVG = lazy(() => import("./svg/GitHubSVG"));
const LinkedInSVG = lazy(() => import("./svg/LinkedInSVG"));
const MailSVG = lazy(() => import("./svg/MailSVG"));
import "../css/aboutpage.css";

export default function AboutPage() {
	return (
		<div className="aboutpage" id="aboutpage">
			<h2 className="aboutpage-heading text-center aboutpage-header-style">
				About Myself
			</h2>
			<p className="oneline-intro">
				Lifelong learner, Inquisitive, Geek, Nerd, Bookworm.
			</p>
			<div className="aboutpage-container">
				<div className="profile-container pb-4">
					<div className="profileimg-container">
						<img
							className="profileimg-aboutpage"
							src="/static/aboutme.png"
							alt="profile.png"
						/>
					</div>
					<div className="profile-links-container">
						<a
							className="profile-links"
							href="https://www.github.com/JunedKhan101"
							target="_blank"
							rel="noopener noreferrer"
						>
							<GitHubSVG />
							&nbsp;Follow on GitHub
						</a>
						<a
							className="profile-links"
							href="https://www.linkedin.com/in/juned-khan-22b041204/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<LinkedInSVG />
							&nbsp;Connect on LinkedIn
						</a>
						<a
							className="profile-links"
							href="mailto:junedkhanc101@gmail.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							<MailSVG />
							&nbsp;junedkhanc101@gmail.com
						</a>
					</div>
				</div>
				<div className="description-container-aboutpage">
					<div className="sub-description-aboutpage">
						<p>Hi I'm Juned! (pronounced as Ju-ned)</p>
						<h4>What drives me?</h4>
						<p>
							I am just a super curious individual, driven by a
							thirst for understanding things with a scientific
							mindset.
							<br />I thrive on the thrill of discovery, diving
							headfirst into new subjects and emerging with a
							profound sense of fulfillment.
						</p>
						<h4>Programming:</h4>
						<p>
							I really enjoy learning, and programming has taught
							me that there's no end to it
						</p>
						<p>
							I love to build projects, I'm always working on one
							behind the scenes.
							<br />
							I'm currently teaching myself and reserching about
							image comparison algorithms to build a project.
						</p>
						<h4>
							Here are some things you might wanna know about me:
						</h4>
						<ul className="mb-0">
							<li>
								I completed my Bachelor in Information
								Technology from Rizvi College in August 2021
							</li>
							<li>
								I have contributed to some Open Source Projects
								on{" "}
								<a
									href="https://github.com/JunedKhan101"
									rel="noopener noreferrer"
								>
									GitHub
								</a>
							</li>
							<li>I prefer tabs instead of spaces</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
