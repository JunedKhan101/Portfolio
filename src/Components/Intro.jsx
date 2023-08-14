import React from "react";
import "../css/intro.css";

export default function Intro() {
	return (
		<div className="intro-container" id="intro">
			<div className="intro">
				<div className="profile">
					<img
						className="profileimg"
						src="static/profileimg.png"
						alt="profileimg"
					/>
				</div>
				<div className="intro-text">
					<h1>Hi, I'm Juned Khan;</h1>
					<h1>I'm a Software Enginner;</h1>
				</div>
			</div>
		</div>
	);
}
