import React from "react";
import "../css/about.css";

export default function About() {
  return (
    <div className="about" id="about">
      <h2 className="about-heading">About Myself</h2>
      <div className="description-container">
        <p className="oneline-intro">
          Lifelong learner, Introvert, Inquisitive, Geek, Nerd and Bookworm.
        </p>

        <div className="sub-description">
          <p>
            I did a Bachelor degree in Information Technology from University of
            Mumbai, and graduated in August 2021.
          </p>
          <p>
            I like to build projects, I'm always working on one behind the
            scenes.
            <br />
            I'm currently teaching myself and reserching about Machine Learning,
            Web Scraping and Automation to build a project.
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
    </div>
  );
}
