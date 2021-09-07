import React from "react";
import "../css/intro.css";

export default function Intro() {
  return (
  	<div className="intro-container" id="intro">
  		<div className="profile">
		    <img
		      className="profileimg"
		      src="static/profileimg2.jpg"
		      alt="profileimg"
		    />
  		</div>
		<div className="intro">
			<h1>Hi, I'm Juned Khan</h1>
			<h1>I'm a Web Developer</h1>
		</div>
	</div>
  );
}