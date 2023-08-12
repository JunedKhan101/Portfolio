import React, { useEffect } from "react";
import CustomModal from "./CustomModal";
import AOS from "aos";
import "../css/projects.css";

export default function Projects() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section className="projects-container" id="projects">
      <div className="projects-subcontainer">
        <h2 className="projects-heading">Projects</h2>
        <div className="projects">
          <CustomModal />
        </div>
      </div>
    </section>
  );
}
